type Primitives = string | number | boolean | null | Text
type ElementType = HTMLElement | DocumentFragment
type TagName = string | null
type GetItemFn = (element: ElementType, tagName: TagName, attributes: Attributes, children: Children | Children[]) => Attributes
type AnyItem = Primitives | ElementType | GetItemFn | EventListener
type Attributes = AnyItem | Record<string, AnyItem | Record<string, AnyItem> | Array<Attributes>> | Array<Attributes>
type Children = AnyItem

type Tag<Returns = HTMLElement> = (attributes?: Attributes, children?: Children | Array<Children>, ...tail: Children[]) => Returns
type ChildlessTag<Returns = HTMLElement> = (attributes?: Attributes) => Returns

declare module 'dom-element-factory' {
    export default function(tagName?: TagName, attributes?: Attributes, children?: Children | Array<Children>, ...tail: Children[]): ElementType
    export function createElement(tagName?: TagName, attributes?: Attributes, children?: Children | Array<Children>, ...tail: Children[]): ElementType
    export function createFragment(children: Children | Array<Children>, ...tail: Children[]): DocumentFragment
    export function css(styles: Record<string, Record<string, string>>): HTMLElement
    export function innerHTML(html: string): DocumentFragment
    export function tag(tagName?: TagName, attributes?: Attributes, children?: Children | Array<Children>, ...tail: Children[]): ElementType
    export function fragment(children: Children | Array<Children>, ...tail: Children[]): DocumentFragment

    export const a: Tag<HTMLAnchorElement>
    export const abbr: Tag
    export const address: Tag
    export const area: ChildlessTag<HTMLAreaElement>
    export const article: Tag
    export const aside: Tag
    export const audio: Tag<HTMLAudioElement>
    export const b: Tag
    export const base: ChildlessTag<HTMLBaseElement>
    export const bdi: Tag
    export const bdo: Tag
    export const blockquote: Tag<HTMLQuoteElement>
    export const body: Tag<HTMLBodyElement>
    export const br: () => HTMLBRElement
    export const button: Tag<HTMLButtonElement>
    export const canvas: Tag<HTMLCanvasElement>
    export const caption: Tag<HTMLTableCaptionElement>
    export const cite: Tag
    export const code: Tag
    export const col: ChildlessTag<HTMLTableColElement>
    export const colgroup: Tag<HTMLTableColElement>
    export const command: Tag
    export const data: Tag<HTMLDataElement>
    export const datalist: Tag<HTMLDataListElement>
    export const dd: Tag
    export const del: Tag<HTMLModElement>
    export const details: Tag<HTMLDetailsElement>
    export const dfn: Tag
    export const dialog: Tag<HTMLDialogElement>
    export const div: Tag<HTMLDivElement>
    export const dl: Tag<HTMLDListElement>
    export const dt: Tag
    export const em: Tag
    export const embed: ChildlessTag<HTMLEmbedElement>
    export const fieldset: Tag<HTMLFieldSetElement>
    export const figcaption: Tag
    export const figure: Tag
    export const footer: Tag
    export const form: Tag<HTMLFormElement>
    export const h1: Tag<HTMLHeadingElement>
    export const h2: Tag<HTMLHeadingElement>
    export const h3: Tag<HTMLHeadingElement>
    export const h4: Tag<HTMLHeadingElement>
    export const h5: Tag<HTMLHeadingElement>
    export const h6: Tag<HTMLHeadingElement>
    export const head: Tag<HTMLHeadElement>
    export const header: Tag
    export const hgroup: Tag
    export const hr: ChildlessTag<HTMLHRElement>
    export const html: Tag<HTMLHtmlElement>
    export const i: Tag
    export const iframe: Tag<HTMLIFrameElement>
    export const img: ChildlessTag<HTMLImageElement>
    export const input: ChildlessTag<HTMLInputElement>
    export const ins: Tag<HTMLModElement>
    export const kbd: Tag
    export const label: Tag<HTMLLabelElement>
    export const legend: Tag<HTMLLegendElement>
    export const li: Tag<HTMLLIElement>
    export const link: ChildlessTag<HTMLLinkElement>
    export const main: Tag
    export const map: Tag<HTMLMapElement>
    export const mark: Tag
    export const menu: Tag<HTMLMenuElement>
    export const meta: ChildlessTag<HTMLMetaElement>
    export const meter: Tag<HTMLMeterElement>
    export const nav: Tag
    export const noscript: Tag
    export const object: Tag<HTMLObjectElement>
    export const ol: Tag<HTMLOListElement>
    export const optgroup: Tag<HTMLOptGroupElement>
    export const option: Tag<HTMLOptionElement>
    export const output: Tag<HTMLOutputElement>
    export const p: Tag<HTMLParagraphElement>
    export const picture: Tag<HTMLPictureElement>
    export const param: ChildlessTag
    export const pre: Tag<HTMLPreElement>
    export const progress: Tag<HTMLProgressElement>
    export const q: Tag<HTMLQuoteElement>
    export const rp: Tag
    export const rt: Tag
    export const ruby: Tag
    export const s: Tag
    export const samp: Tag
    export const script: Tag<HTMLScriptElement>
    export const search: Tag
    export const section: Tag
    export const select: Tag<HTMLSelectElement>
    export const slot: Tag<HTMLSlotElement>
    export const small: Tag
    export const source: ChildlessTag<HTMLSourceElement>
    export const span: Tag<HTMLSpanElement>
    export const strong: Tag
    export const style: Tag<HTMLStyleElement>
    export const sub: Tag
    export const summary: Tag
    export const sup: Tag
    export const table: Tag<HTMLTableElement>
    export const tbody: Tag<HTMLTableSectionElement>
    export const td: Tag<HTMLTableCellElement>
    export const template: Tag<HTMLTemplateElement>
    export const textarea: Tag<HTMLTextAreaElement>
    export const tfoot: Tag<HTMLTableSectionElement>
    export const th: Tag<HTMLTableCellElement>
    export const thead: Tag<HTMLTableSectionElement>
    export const time: Tag<HTMLTimeElement>
    export const title: Tag<HTMLTitleElement>
    export const tr: Tag<HTMLTableRowElement>
    export const track: ChildlessTag<HTMLTrackElement>
    export const u: Tag
    export const ul: Tag<HTMLUListElement>
    export const variable: Tag
    export const video: Tag<HTMLVideoElement>
    export const wbr: ChildlessTag
    export const text: (text: string) => DocumentFragment
}
