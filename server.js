import {JSDOM} from "jsdom"
global.document = (new JSDOM(`<body></body>`)).window.document

export * from './index.js'