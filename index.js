if (typeof document === 'undefined') {
    const { JSDOM } = await import('jsdom');
    global.document = (new JSDOM(`<body></body>`)).window.document;
}

export {
    createElement as default,
    createElement as tag,
    createFragment,
    createFragment as fragment
} from './element.js'
export * from './tags.js'