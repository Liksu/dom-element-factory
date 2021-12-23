import createElement, {createFragment} from "./index.js"

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

test('Fragment', () => {
    expect(createElement('').nodeType).toBe(11)
})

testCase('Deep fragment',
    createFragment([
        createElement('a', {href: 'google.com'}, 'Click me'),
        'Inner text',
        createElement('h1', null, 'OK')
    ]),
    '<a href="google.com">Click me</a>Inner text<h1>OK</h1>'
)
