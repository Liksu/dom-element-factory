type Primitives = string | number | boolean | null | Text
type ElementType = HTMLElement | DocumentFragment
type TagName = string | null
type GetItemFn = (element: ElementType, tagName: TagName, attributes: Attributes, children: Children | Children[]) => Attributes
type AnyItem = Primitives | ElementType | GetItemFn | EventListener
type Attributes = AnyItem | Record<string, AnyItem | Record<string, AnyItem> | Array<Attributes>> | Array<Attributes>
type Children = AnyItem

type Tag = (attributes?: Attributes, children?: Children | Array<Children>, ...tail: Children[]) => ElementType
type ChildlessTag = (attributes?: Attributes) => ElementType

declare module 'dom-element-factory' {
    export default function(tagName?: TagName, attributes?: Attributes, children?: Children | Array<Children>, ...tail: Children[]): ElementType
    export function createElement(tagName?: TagName, attributes?: Attributes, children?: Children | Array<Children>, ...tail: Children[]): ElementType
    export function createFragment(children: Children | Array<Children>, ...tail: Children[]): DocumentFragment
    export function css(styles: Record<string, Record<string, string>>): HTMLElement
    export function innerHTML(html: string): DocumentFragment
    export function tag(tagName?: TagName, attributes?: Attributes, children?: Children | Array<Children>, ...tail: Children[]): ElementType
    export function fragment(children: Children | Array<Children>, ...tail: Children[]): DocumentFragment

    export const a: Tag
    export const abbr: Tag
    export const address: Tag
    export const area: ChildlessTag
    export const article: Tag
    export const aside: Tag
    export const audio: Tag
    export const b: Tag
    export const base: ChildlessTag
    export const bdo: Tag
    export const blockquote: Tag
    export const body: Tag
    export const br: () => HTMLElement
    export const button: Tag
    export const canvas: Tag
    export const caption: Tag
    export const cite: Tag
    export const code: Tag
    export const col: ChildlessTag
    export const colgroup: Tag
    export const command: Tag
    export const datalist: Tag
    export const dd: Tag
    export const del: Tag
    export const details: Tag
    export const dfn: Tag
    export const div: Tag
    export const dl: Tag
    export const dt: Tag
    export const em: Tag
    export const embed: ChildlessTag
    export const fieldset: Tag
    export const figcaption: Tag
    export const figure: Tag
    export const footer: Tag
    export const form: Tag
    export const h1: Tag
    export const h2: Tag
    export const h3: Tag
    export const h4: Tag
    export const h5: Tag
    export const h6: Tag
    export const head: Tag
    export const header: Tag
    export const hr: ChildlessTag
    export const html: Tag
    export const i: Tag
    export const iframe: Tag
    export const img: ChildlessTag
    export const input: ChildlessTag
    export const ins: Tag
    export const kbd: Tag
    export const label: Tag
    export const legend: Tag
    export const li: Tag
    export const link: ChildlessTag
    export const map: Tag
    export const mark: Tag
    export const menu: Tag
    export const meta: ChildlessTag
    export const meter: Tag
    export const nav: Tag
    export const noscript: Tag
    export const object: Tag
    export const ol: Tag
    export const optgroup: Tag
    export const option: Tag
    export const output: Tag
    export const p: Tag
    export const param: ChildlessTag
    export const pre: Tag
    export const progress: Tag
    export const q: Tag
    export const rp: Tag
    export const rt: Tag
    export const ruby: Tag
    export const s: Tag
    export const samp: Tag
    export const script: Tag
    export const section: Tag
    export const select: Tag
    export const small: Tag
    export const source: ChildlessTag
    export const span: Tag
    export const strong: Tag
    export const style: Tag
    export const sub: Tag
    export const sup: Tag
    export const table: Tag
    export const tbody: Tag
    export const td: Tag
    export const textarea: Tag
    export const tfoot: Tag
    export const th: Tag
    export const thead: Tag
    export const time: Tag
    export const title: Tag
    export const tr: Tag
    export const track: ChildlessTag
    export const u: Tag
    export const ul: Tag
    export const variable: Tag
    export const video: Tag
    export const wbr: ChildlessTag
    export const text: (text: string) => DocumentFragment
}
