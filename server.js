import {JSDOM} from "jsdom"
if (typeof document === 'undefined') {
    const {document, Element, DocumentFragment} = (new JSDOM(`<body></body>`)).window
    Object.assign(global, {document, Element, DocumentFragment})
}

export * from './index.js'