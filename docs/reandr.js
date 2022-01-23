const componentState = new Map()
const domStorage = new Map()
const namedState = {}

//TODO: add fragment as supported component root

window.state = {componentState, domStorage, namedState}
const log = console.log.bind(console)

let currentProcessingComponent = null

export const useNamedState = (stateName, initialValue) => {
    if (!currentProcessingComponent) {
        return console.warn('Update called outside of component')
    }

    if (namedState[stateName] === undefined) namedState[stateName] = initialValue
    const info = componentState.get(currentProcessingComponent)
    log(`${info.name}: use named state '${stateName}' with value ${namedState[stateName]}`)

    return [
        namedState[stateName],
        newValue => {
            log(`${info.name}: Update named state '${stateName}' to ${newValue}`)
            namedState[stateName] = newValue
            currentProcessingComponent = info.source
            info.update()
        }
    ]
}

const useComponentState = (initialValue) => {
    if (!currentProcessingComponent) {
        return console.warn('useState called outside of component')
    }

    const info = componentState.get(currentProcessingComponent)
    const index = info.dataCalls++

    if (info.data[index] === undefined) info.data[index] = initialValue
    log(`${info.name}: use component state #${index} with value ${info.data[index]}`)

    return [
        info.data[index],
        newValue => {
            log(`Set new state value ${index} = ${newValue}`)
            info.data[index] = newValue
            currentProcessingComponent = info.source
            info.update()
        }
    ]
}

// useState.bind('name')('initial value')
export function useState(initialValue) {
    if (this) return useNamedState(this, initialValue)
    return useComponentState(initialValue)
}

function storeElements(source, elements) {
    elements.forEach(element => {
        if (!domStorage.has(element)) domStorage.set(element, [source])
        else domStorage.get(element).push(source)
    })
}

// clean the cache of elements
function replaceElements(oldElement, newElement) {
    // const watchers = [...new Set(oldElements.map(element => domStorage.get(element)).flat())]
    // const [oldFirstChild, ...oldChildren] = oldElements
    // const [newFirstChild, ...newChildren] = newElements

    /**/
    if (domStorage.has(oldElement)) {
        domStorage.get(oldElement)
            .map(component => componentState.get(component))
            .filter(Boolean)
            .forEach(info => {
                const index = info.elements.indexOf(oldElement)
                if (index === -1) return;
                if (newElement) info.elements[index] = newElement
                else info.elements.splice(index, 1)
            })
    }

    domStorage.delete(oldElement)
    oldElement.remove()

    // remove all outdated elements
    Array.from(domStorage.keys())
        .filter(element => !document.body.contains(element))
        .forEach(element => {
            domStorage.delete(element)
            element.remove()
        })
}

export function component(source) {
    const name = source.name || String(this) === this ? this : null
    log(`${name}: Component preparing`)
    const info = {
        name,
        source,
        data: [],
        dataCalls: 0,
        elements: [],
        arguments: []
    }

    info.render = () => {
        log(`${name}: Rendering`)
        info.dataCalls = 0
        const dom = source(...info.arguments)
        info.elements = dom.nodeType === 11 ? Array.from(dom.childNodes) : [dom]
        storeElements(source, info.elements)
        return dom
    }

    info.update = () => {
        log(`${name}: Updating`)

        // replaceElements([...info.elements], info.render())

        const [oldFirstChild, ...oldChildren] = info.elements

        const dom = info.render()
        const [newFirstChild, ...newChildren] = info.elements

        oldChildren.forEach(element => replaceElements(element))

        if (oldFirstChild) {
            oldFirstChild.parentElement?.insertBefore(dom, oldFirstChild)
            replaceElements(oldFirstChild)
        }
    }

    componentState.set(source, info)

    return (...args) => {
        log(`${name}: Creating`)
        currentProcessingComponent = source
        info.arguments = args
        return info.render()
    }
}
