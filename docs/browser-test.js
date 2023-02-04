// import createElement, * as factory from '../index.js'
// const {a, br, button, div, hr, ul, li, span, form, fragment, option, pre, select, text, textarea} = factory

import createElement, * as factory from 'https://unpkg.com/dom-element-factory'
import {component, useState, useNamedState} from "./reandr.js";

// make all functions be available from console
Object.assign(window, factory, {createElement})

/* *** */

const codeSamples = {
    _selected: 'tags',
    tags: `fragment(
        a({href: 'google.com'}, 'Click me'),
        'Inner text',
        h1(['OK'])
    )`,
    createElement: `createFragment([
        createElement('a', {href: 'google.com'}, 'Click me'),
        'Inner text',
        createElement('h1', null, 'OK')
    ])`,
    loginForm: `const generateForm = (id, formData) =>
        form(
            { id, class: 'form' },
            div(
                { class: 'min-width' },
                formData.map((field) =>
                    label(null, [field.label ?? field.placeholder, input(field)])
                )
            )
        )

    const serialize = (formElement) =>
        Object.fromEntries(
            Array.from(
                formElement.querySelectorAll('input'),
                (input) => input.name && [input.name, input.value]
            ).filter(Boolean)
        )

    const loginForm = generateForm('loginForm', [
        {
            type: 'input',
            name: 'login',
            label: 'Login',
            placeholder: 'user@domain.tld',
        },
        { type: 'password', name: 'password', placeholder: 'Password' },
        {
            type: 'number',
            name: 'secure',
            label: 'Security Code',
            placeholder: '0000',
            min: 1000,
            max: 9999,
            step: 1,
        },
        {
            type: 'button',
            value: 'Submit',
            style: 'margin-top: 1em',
            click: () => console.log(serialize(loginForm)),
        },
    ])

    const styles = css({
        '.form': {
            display: 'flex',
            flexFlow: 'column nowrap',
            alignItems: 'center',
            height: '50vh',
            justifyContent: 'center',
        },
        label: { marginTop: '0.5em' },
        '.min-width': { width: 'min-content' },
        'input[type=number]': { width: '100%' },
        'label:has(input[type=button])': {
            textAlign: 'right',
            width: '100%',
        },
    })

    fragment(styles, loginForm)`
}

window.codeSamples = codeSamples


const Tab = component.bind('tab')((id, title, changeTab, isActive) => {
    return li('nav-item',
        a({href: '#', click: () => changeTab(id), classList: ['nav-link', isActive(id) && 'active']}, title)
    )
})

const Tabs = component.bind('tabs')((currentTab, changeTab) => {
    const isActive = id => currentTab === id

    return ul('nav nav-tabs', [
        Tab('doc', 'Documentation', changeTab, isActive),
        Tab('repl', 'REPL', changeTab, isActive)
    ])
})

const Input = component.bind('input')((change, code) => {
    const keyup = e => e.key === 'Enter' && e.ctrlKey && change(e)
    const keydown = function(e) {
        if (e.key !== 'Tab') return;

         e.preventDefault()
        const {selectionStart: start, selectionEnd: end, value} = this
        this.value = value.substr(0, start) + '\t' + value.substr(end)
        this.selectionStart = this.selectionEnd = start + 1
    }

    return form('col-md-6',
        textarea({
            _: 'form-control',
            style: {height: '75vh'},
            change,
            keyup,
            keydown,
        }, code)
    )
})

const Preview = component.bind('preview')((code) => {
    let sampleDOM
    try {
        sampleDOM = eval(code)
    } catch (error) {
        const name = error.name.split(/(?=[A-Z])/).join(' ')
        return div('card col-md-6 bg-danger bg-gradient bg-opacity-25 text-danger', [
            h4([`${name}:`]),
            error.message
        ])
    }

    return div('card col-md-6', [
        div('card-body', sampleDOM)
    ])
})

const REPL = component.bind('repl')((currentTab) => {
    const [code, setCode] = useState(codeSamples[codeSamples._selected])
    const change = e => setCode(e.target.value)
    const click = () => setCode(code)
    const setPredefined = e => {
        codeSamples._selected = e.target.value
        setCode(codeSamples[codeSamples._selected])
    }
    const getArgs = value => {
        const args = {value}
        if (codeSamples._selected === value) args.selected = 'selected'
        return args
    }

    return div('container-fluid', [
        div('row', [
            p('mt-3', [
                'You can edit your code here or use one of predefined samples from dropdown below. For example, try to add',
                factory.code('mx-1', 'br(),'),
                'between link and inner text.',
            ]),
            hr(),
        ]),
        div('row', [
            div('col-5', [
                select({change: setPredefined, _: 'form-select form-select-sm col-3'}, [
                    option(getArgs('createElement'), 'createElement Sample'),
                    option(getArgs('tags'), 'Tags sample'),
                    option(getArgs('loginForm'), 'Login Form')
                ]),
            ]),
            div('mb-2 col-md-6', [
                button({_: 'btn btn-light', click}, 'Run ▶')
            ])
        ]),
        div('row', [
            Input(change, code),
            Preview(code)
        ])
    ])
})

const Doc = component.bind('doc')((currentTab) => {
    const [md, setMd] = useState()
    if (!md) {
        fetch('https://unpkg.com/dom-element-factory/README.md')
            .then(resp => resp.text())
            .then(md => setMd(marked.parse(md) + '<hr><footer>2021 © Petro Borshchahivskyi</footer>'))
    }

    const pageStyling = {
        pre: {
            backgroundColor: '#f8f9fa',
            padding: '1rem'
        },
        footer: {
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'gray'
        }
    }

    return div('container mt-3', [
        css(pageStyling),
        md ? innerHTML(md) : 'Loading...'
    ])
})

const App = component.bind('app')(() => {
    const [currentTab, changeTab] = useNamedState('currentTab', 'repl')

    return div([
        Tabs(currentTab, changeTab),
        currentTab === 'doc' && Doc(currentTab),
        currentTab === 'repl' && REPL(currentTab)
    ])
})

document.body.appendChild(App())

console.log('^^^^^^^^^^^ App started ^^^^^^^^^^^^')
