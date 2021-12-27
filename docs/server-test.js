import * as DOMElementFactory from "dom-element-factory"
const {a, b, br, div} = DOMElementFactory

const dom = div({classList: {foo: true, bar: false}},
    div(null, [
        a({href: 'google.com'}, 'Click me'),
        br(),
        b({style: {backgroundColor: 'silver'}}, 'Bold text')
    ])
)

console.log(dom.outerHTML)