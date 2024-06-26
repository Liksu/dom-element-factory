/**
 * @param {String} [tagName='DIV']
 * @param {Object} [attributes={}]
 * @param {Array} [children=[]]
 * @param {Array} [tail]
 * @returns {HTMLElement|DocumentFragment}
 */
export function createElement(tagName = 'DIV', attributes = {}, children = [], ...tail) {
    const element = tagName
        ? document.createElement(tagName)
        : document.createDocumentFragment()

    children = [
        ...(children instanceof Array ? children : [children]),
        ...tail
    ].filter(item => item === 0 || item === '' || !!item)

    if (!attributes) attributes = {}
    if (attributes instanceof Function) attributes = attributes(element, tagName, attributes, children)
    if (String(attributes) === attributes) attributes = {'class': attributes}
    if (attributes instanceof Array) {
        if (children.length || arguments[2] != null) attributes = {classList: attributes}
        else {
            children = attributes
            attributes = {}
        }
    }
    if (attributes instanceof Element || attributes instanceof DocumentFragment) {
        children.unshift(attributes)
        attributes = {}
    }

    if (tagName) Object.entries(attributes).forEach(([key, value]) => {
        switch (key) {
            case '_':
            case 'class':
                element.className = String(value)
                break
            case 'classList':
                if (!(value instanceof Array)) value = [value]
                value = value.reduce((classes, item) => {
                    if (item instanceof Function) item = item(element, tagName, attributes, children)
                    if (item instanceof Array) return classes.concat(...item.filter(item => item === 0 || !!item))
                    return classes.concat(...(typeof item === 'object'
                            ? Object.keys(item).filter(key => item[key])
                            : String(item).split(/\s+/)
                    ))
                }, [])
                element.classList.add(...value)
                break
            case 'style':
                if (typeof value === 'object') Object.assign(element.style, value)
                else element.style = value
                break
            case 'data':
                Object.assign(element.dataset, value)
                break
            default:
                if (value instanceof Function) element.addEventListener(key, value)
                else element.setAttribute(key, String(value))
        }
    })

    children
        .map(child => child instanceof Function ? child(element, tagName, attributes, children) : child)
        .filter(child => child != null && child !== false)
        .forEach(child => {
            if (typeof child != 'object') child = document.createTextNode(child)
            element.appendChild(child)
        })

    if (!tagName) {
        Object.defineProperty(element, 'innerHTML', {
            get: () => Array.from(element.childNodes, item => item.outerHTML || item.textContent).join('')
        })
    }

    return element
}

export function createFragment(children = [], ...tail) {
    return createElement(null, null, children, ...tail)
}

export function css(styles = {}) {
    const toDeclarations = ([key, value]) => key.replace(/([A-Z])/g, '-$1').toLowerCase() + ': ' + value
    const stylesString = Object.entries(styles).map(([selector, declarationsObject]) => {
        const declarations = Object.entries(declarationsObject).map(toDeclarations).join('; ')
        return `${selector} {${declarations}}`
    }).join('\n')
    return createElement('STYLE', null, stylesString)
}

export function innerHTML(html = '') {
    const template = document.createElement('template')
    template.innerHTML = html
    return template.content
}
