import createElement, {a, b, br, createFragment, div, span, text} from "./index.js"

function testCase(name, dom, expectedHTML) {
    test(name, () => expect(dom.outerHTML || dom.innerHTML).toBe(expectedHTML))
}

testCase('Simple DIV',
    createElement(),
    '<div></div>'
)

testCase('Simple SPAN',
    createElement('span'),
    '<span></span>'
)

testCase('Simple attributes',
    createElement('div', {id: 'test'}),
    '<div id="test"></div>'
)

testCase('Styling with string',
    createElement('div', {style: 'color: red'}),
    '<div style="color: red;"></div>'
)

testCase('Styling with object',
    createElement('div', {style: {color: 'red'}}),
    '<div style="color: red;"></div>'
)

testCase('Styling with object with two options',
    createElement('div', {style: {color: 'red', fontSize: '2em'}}),
    '<div style="color: red; font-size: 2em;"></div>'
)

testCase('Add data attributes',
    createElement('div', {data: {id: 'data'}, id: 'id'}),
    '<div data-id="data" id="id"></div>'
)

testCase('Undefined tag name is not fragment',
    createElement(undefined, {id: 'test'}),
    '<div id="test"></div>'
)

testCase('Event handlers',
    createElement('div', {onclick: 'callback()'}),
    '<div onclick="callback()"></div>'
)

test('Event handlers should works', () => {
    window.callback = jest.fn()

    const dom = createElement('div', {onclick: 'callback()'})
    expect(dom.outerHTML).toBe('<div onclick="callback()"></div>')

    dom.click()
    expect(window.callback).toBeCalled()
})

test('Event Listeners', () => {
    let flag = 0
    const click = () => flag++

    const dom = createElement('div', {click})
    expect(dom.outerHTML).toBe('<div></div>')

    dom.click()
    expect(flag).toBe(1)
})

test('Fragment', () => {
    expect(createElement('').nodeType).toBe(11)
})

testCase('Tags',
    div({classList: {foo: true, bar: false}},
        div(null, [
            a({target: '_blank'}, 'Click me'),
            b({style: {backgroundColor: 'silver'}}, 'Bold text')
        ])
    ),
    '<div class="foo"><div><a target="_blank">Click me</a><b style="background-color: silver;">Bold text</b></div></div>'
)

testCase('All arguments contains children',
    div(
        span(null, 'first'),
        undefined,
        null,
        br(),
        text('second'),
        br(),
        span(text('third')),
    ),
    '<div><span>first</span><br>second<br><span>third</span></div>'
)

testCase('Deep fragment',
    createFragment([
        createElement('a', {href: 'google.com'}, 'Click me'),
        'Inner text',
        createElement('h1', null, 'OK')
    ]),
    '<a href="google.com">Click me</a>Inner text<h1>OK</h1>'
)
