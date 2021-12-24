import {JSDOM} from "jsdom"
if (typeof document === 'undefined') {
    global.document = (new JSDOM(`<body></body>`)).window.document
}

export * from './index.js'