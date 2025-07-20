import {createElement} from "./element.js";

export function a(...args) {
    return createElement('A', ...args)
}

export function abbr(...args) {
    return createElement('ABBR', ...args)
}

export function address(...args) {
    return createElement('ADDRESS', ...args)
}

export function area(attributes) {
    return createElement('AREA', attributes)
}

export function article(...args) {
    return createElement('ARTICLE', ...args)
}

export function aside(...args) {
    return createElement('ASIDE', ...args)
}

export function audio(...args) {
    return createElement('AUDIO', ...args)
}

export function b(...args) {
    return createElement('B', ...args)
}

export function base(attributes) {
    return createElement('BASE', attributes)
}

export function bdi(...args) {
    return createElement('BDI', ...args)
}

export function bdo(...args) {
    return createElement('BDO', ...args)
}

export function blockquote(...args) {
    return createElement('BLOCKQUOTE', ...args)
}

export function body(...args) {
    return createElement('BODY', ...args)
}

export function br() {
    return createElement('BR')
}

export function button(...args) {
    return createElement('BUTTON', ...args)
}

export function canvas(...args) {
    return createElement('CANVAS', ...args)
}

export function caption(...args) {
    return createElement('CAPTION', ...args)
}

/**
 * @deprecated
 */
export function center(...args) {
    return createElement('CENTER', ...args)
}

export function cite(...args) {
    return createElement('CITE', ...args)
}

export function code(...args) {
    return createElement('CODE', ...args)
}

export function col(attributes) {
    return createElement('COL', attributes)
}

export function colgroup(...args) {
    return createElement('COLGROUP', ...args)
}

export function command(...args) {
    return createElement('COMMAND', ...args)
}

export function data(...args) {
    return createElement('DATA', ...args)
}

export function datalist(...args) {
    return createElement('DATALIST', ...args)
}

export function dd(...args) {
    return createElement('DD', ...args)
}

export function del(...args) {
    return createElement('DEL', ...args)
}

export function details(...args) {
    return createElement('DETAILS', ...args)
}

export function dfn(...args) {
    return createElement('DFN', ...args)
}

export function dialog(...args) {
    return createElement('DIALOG', ...args)
}

export function div(...args) {
    return createElement('DIV', ...args)
}

export function dl(...args) {
    return createElement('DL', ...args)
}

export function dt(...args) {
    return createElement('DT', ...args)
}

export function em(...args) {
    return createElement('EM', ...args)
}

export function embed(attributes) {
    return createElement('EMBED', attributes)
}

export function fieldset(...args) {
    return createElement('FIELDSET', ...args)
}

export function figcaption(...args) {
    return createElement('FIGCAPTION', ...args)
}

export function figure(...args) {
    return createElement('FIGURE', ...args)
}

export function footer(...args) {
    return createElement('FOOTER', ...args)
}

export function form(...args) {
    return createElement('FORM', ...args)
}

/**
 * @deprecated
 */
export function frame(attributes) {
    return createElement('FRAME', attributes)
}

/**
 * @deprecated
 */
export function frameset(...args) {
    return createElement('FRAMESET', ...args)
}

export function h1(...args) {
    return createElement('H1', ...args)
}

export function h2(...args) {
    return createElement('H2', ...args)
}

export function h3(...args) {
    return createElement('H3', ...args)
}

export function h4(...args) {
    return createElement('H4', ...args)
}

export function h5(...args) {
    return createElement('H5', ...args)
}

export function h6(...args) {
    return createElement('H6', ...args)
}

export function head(...args) {
    return createElement('HEAD', ...args)
}

export function header(...args) {
    return createElement('HEADER', ...args)
}

export function hgroup(...args) {
    return createElement('HGROUP', ...args)
}

export function hr(attributes) {
    return createElement('HR', attributes)
}

export function html(...args) {
    return createElement('HTML', ...args)
}

export function i(...args) {
    return createElement('I', ...args)
}

export function iframe(...args) {
    return createElement('IFRAME', ...args)
}

export function img(attributes) {
    return createElement('IMG', attributes)
}

export function input(attributes) {
    return createElement('INPUT', attributes)
}

export function ins(...args) {
    return createElement('INS', ...args)
}

export function kbd(...args) {
    return createElement('KBD', ...args)
}

export function label(...args) {
    return createElement('LABEL', ...args)
}

export function legend(...args) {
    return createElement('LEGEND', ...args)
}

export function li(...args) {
    return createElement('LI', ...args)
}

export function link(attributes) {
    return createElement('LINK', attributes)
}

export function main(...args) {
    return createElement('MAIN', ...args)
}

export function map(...args) {
    return createElement('MAP', ...args)
}

export function mark(...args) {
    return createElement('MARK', ...args)
}

export function menu(...args) {
    return createElement('MENU', ...args)
}

export function meta(attributes) {
    return createElement('META', attributes)
}

export function meter(...args) {
    return createElement('METER', ...args)
}

export function nav(...args) {
    return createElement('NAV', ...args)
}

/**
 * @deprecated
 */
export function nobr(...args) {
    return createElement('NOBR', ...args)
}

/**
 * @deprecated
 */
export function noframes(...args) {
    return createElement('NOFRAMES', ...args)
}

export function noscript(...args) {
    return createElement('NOSCRIPT', ...args)
}

export function object(...args) {
    return createElement('OBJECT', ...args)
}

export function ol(...args) {
    return createElement('OL', ...args)
}

export function optgroup(...args) {
    return createElement('OPTGROUP', ...args)
}

export function option(...args) {
    return createElement('OPTION', ...args)
}

export function output(...args) {
    return createElement('OUTPUT', ...args)
}

export function p(...args) {
    return createElement('P', ...args)
}

export function picture(...args) {
    return createElement('PICTURE', ...args)
}

export function param(attributes) {
    return createElement('PARAM', attributes)
}

export function pre(...args) {
    return createElement('PRE', ...args)
}

export function progress(...args) {
    return createElement('PROGRESS', ...args)
}

export function q(...args) {
    return createElement('Q', ...args)
}

export function rp(...args) {
    return createElement('RP', ...args)
}

export function rt(...args) {
    return createElement('RT', ...args)
}

export function ruby(...args) {
    return createElement('RUBY', ...args)
}

export function s(...args) {
    return createElement('S', ...args)
}

export function samp(...args) {
    return createElement('SAMP', ...args)
}

export function script(...args) {
    return createElement('SCRIPT', ...args)
}

export function search(...args) {
    return createElement('SEARCH', ...args)
}

export function section(...args) {
    return createElement('SECTION', ...args)
}

export function select(...args) {
    return createElement('SELECT', ...args)
}

export function slot(...args) {
    return createElement('SLOT', ...args)
}

export function small(...args) {
    return createElement('SMALL', ...args)
}

export function source(attributes) {
    return createElement('SOURCE', attributes)
}

export function span(...args) {
    return createElement('SPAN', ...args)
}

export function strong(...args) {
    return createElement('STRONG', ...args)
}

export function style(...args) {
    return createElement('STYLE', ...args)
}

export function sub(...args) {
    return createElement('SUB', ...args)
}

export function summary(...args) {
    return createElement('SUMMARY', ...args)
}

export function sup(...args) {
    return createElement('SUP', ...args)
}

export function table(...args) {
    return createElement('TABLE', ...args)
}

export function tbody(...args) {
    return createElement('TBODY', ...args)
}

export function td(...args) {
    return createElement('TD', ...args)
}

export function template(...args) {
    return createElement('TEMPLATE', ...args)
}

export function textarea(...args) {
    return createElement('TEXTAREA', ...args)
}

export function tfoot(...args) {
    return createElement('TFOOT', ...args)
}

export function th(...args) {
    return createElement('TH', ...args)
}

export function thead(...args) {
    return createElement('THEAD', ...args)
}

export function time(...args) {
    return createElement('TIME', ...args)
}

export function title(...args) {
    return createElement('TITLE', ...args)
}

export function tr(...args) {
    return createElement('TR', ...args)
}

export function track(attributes) {
    return createElement('TRACK', attributes)
}

export function u(...args) {
    return createElement('U', ...args)
}

export function ul(...args) {
    return createElement('UL', ...args)
}

export function variable(...args) {
    return createElement('VAR', ...args)
}

export function video(...args) {
    return createElement('VIDEO', ...args)
}

export function wbr(attributes) {
    return createElement('WBR', attributes)
}

/* text fragment */
export function text(textContent) {
    return createElement('', null, textContent)
}
