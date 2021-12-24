# DOM Elements factory

Utility to create DOM elements and fragments easily.

Sample usage:
```javascript
import {a, b, br, div} from "dom-element-factory"

const subDOM = div({classList: {foo: true, bar: false}},
    div(null, [
        a({href: 'google.com', click: e => e.preventDefault()}, 'Click me'),
        br(),
        b({style: {backgroundColor: 'silver'}}, 'Bold text')
    ])
)

document.body.appendChild(subDOM)

/** This code creates such elements under BODY:
 * <div class="foo">
 *     <div>
 *         <a href="google.com">Click me</a>
 *         <br>
 *         <b style="background-color: silver;">Bold text</b>
 *     </div>
 * </div>
 * 
 * width click event listener on the link
*/
```

## How to run

### Installation

```shell
npm install dom-element-factory
```

### Usage in a browsers

To run the code from above directly in browser, you'll need to change import statement to this:

```javascript
import {a, b, br, div} from "./node_modules/dom-element-factory"
```

### Usage under Node.js

To use this utility under Node.js, you should mark your code as module.
You can add to `package.json` according line:
```json
{
  "type": "module"
}
```

To run code sample from above, change import to this code:
```javascript
import * as DOMElementFactory from "dom-element-factory"
const {a, b, br, div} = DOMElementFactory
```

### Usage in browsers in-place

You can add `script` tag and import factory like this:

```html
<script type="module">
    import createElement from 'https://unpkg.com/dom-element-factory'
    document.body.appendChild(
        createElement('span', null, 'Here we are!')
    )
</script>
```

## API

### Create Elements

The main function is the `createElement(tagName, attributes, children)` with three optional arguments.

Has shortcut `tag()`. 

#### Sample usage

Empty `DIV`:
```javascript
createElement()
// Creates <div></div>
```

Empty `SPAN`:
```javascript
createElement('span')
// <span></span>
```

Empty `DIV` with `ID` attribute:
```javascript
createElement('div', {id: 'test'})
// <div id="test"></div>
```

Element `DIV` with text content:
```javascript
createElement('div', null, 'Inner text')
// Creates <div>Inner text</div>
```

Element `DIV` with children and `CLASS` attribute:
```javascript
createElement('div',
    {classList: ['some', {'class': false, 'name': true}]},
    [
        createElement('div', {'class': 'some classes'}, 'First child'),
        'Text node',
        createElement('footer', null, 'Last child')
    ]
)
/**
 * Creates according structure:
 * <div class="some name">
 *     <div class="some classes">First child</div>
 *     Text node
 *     <footer>Last child</footer>
 * </div>
 */
```

#### tagName

String, default value `'DIV'`

Defines the tag, that will be created.

#### attributes

Object, default value `{}`

This object should contain attributes that will be assigned to created element.

There are some edge-cases:

##### class

Set value string as class attribute.

Has shortcut `_` to use instead of key `'class'`.
```javascript
createElement('div', {'class': 'demo'})
createElement('div', {_: 'demo'})
// returns the same: <div class="demo"></div>
```

##### classList

The more flexible way to assign classes. Can be string, array, object or function.

If function passed, it will be called and the result will be used.
The string value will be separated by spaces and acted as classList.
In case of array, all non-falsie values will be used as classList.
The object will be filtered by non-falsie values and keys that left will be used as classList.

##### style

Sets the inline styling.

Can be string like `'font-size: 2em'` or object like `{fontSize: '2em'}`

##### data

Sets the data-attributes.

The attribute passed as `{data: {id: 'test'}}` will be assigned as `data-id="test"` attribute to generated element.

##### event listeners

All attributes that has function as value will be considered as event listeners and will be added to element as callbacks to according events.

```javascript
let flag = 0
const subDOM = createElement('div', {click: () => flag++})
subDOM.click() // same as user click on element
// flag == 1
```

#### children

Array, String, Function or Element, default value `[]`

The list of element's children.

If String or Element passed, they will be acted as single element of array of children.

If element of array is Function, it will be called abd the result of it will be used as child.

### Create Fragments

You can create element with empty (but not `undefined`) tag name and receive DOM fragment.

```javascript
const fragment = createElement(null, null, [
    createElement('span', null, 'SPAN element'),
    'Text node'
])

document.body.appendChild(fragment)

/**
 * This code generates under the BODY element and text nodes:
 * <span>SPAN element</span>
 * Text node
 */
```

To simplify usage, fragment also contains `innerHTML` getter that returns fragment's content.

```javascript
console.log(fragment.innerHTML)
/**
 * Output:
 * <span>SPAN element</span>Text node
 */
```

As tag name can be any falsie value except `undefined`.

There are two shortcuts prepared to create fragments: `createFragment(children[])` and the same `fragment(children[])`

### Tags

All HTML5 tags shortcuts are prepared in the `tags.js` file.

You can build the DOM using tag functions like `div()` instead of `createElement('div')`.
These shortcuts were used in the examples above.