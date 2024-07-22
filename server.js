import {JSDOM} from "jsdom"
if (typeof document === 'undefined') {
    const {document, Element, DocumentFragment, Node} = (new JSDOM(`<body></body>`)).window
    Object.assign(global, {document, Element, DocumentFragment, Node})
}

export * from './index.js'