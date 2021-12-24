/**
 * @param {String} [tagName='DIV']
 * @param {Object} [attributes={}]
 * @param {Array} [children=[]]
 * @returns {HTMLElement|DocumentFragment}
 */
export function createElement(tagName = 'DIV', attributes = {}, children = []) {
    const element = tagName
        ? document.createElement(tagName)
        : document.createDocumentFragment()

    if (!attributes || typeof attributes !== 'object') attributes = {}
    if (tagName) Object.entries(attributes).forEach(([key, value]) => {
        switch (key) {
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

    if (!(children instanceof Array)) children = [children]
    children
        .map(child => child instanceof Function ? child(element, tagName, attributes, children) : child)
        .filter(child => child != null && child !== false)
        .forEach(child => {
            if (child == null) return;
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

export function createFragment(children = []) {
    return createElement(null, null, children)
}
