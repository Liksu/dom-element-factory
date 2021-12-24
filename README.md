# DOM Elements factory

Utility to create DOM elements and fragments easily.

Sample usage:
```javascript
import {a, b, div} from "dom-element-factory"

const dom = div({classList: {foo: true, bar: false}},
    div(null, [
        a({href: 'google.com'}, 'Click me'),
        b({style: {backgroundColor: 'silver'}}, 'Bold text')
    ])
)

document.appendChild(dom)

/** This code creates such elements under BODY:
 * <div class="foo">
 *     <div>
 *         <a href="google.com">Click me</a>
 *         <b style="background-color: silver;">Bold text</b>
 *     </div>
 * </div>
*/
```

### Installation

```shell
npm install dom-element-factory
```