(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function p(n,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,e,t,o);else for(var d=n.length-1;d>=0;d--)(r=n[d])&&(s=(i<3?r(s):i>3?r(e,t,s):r(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const G=window,we=G.ShadowRoot&&(G.ShadyCSS===void 0||G.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ye=Symbol(),_e=new WeakMap;let ze=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==ye)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(we&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=_e.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&_e.set(t,e))}return e}toString(){return this.cssText}};const ot=n=>new ze(typeof n=="string"?n:n+"",void 0,ye),y=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((o,i,s)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[s+1],n[0]);return new ze(t,n,ye)},it=(n,e)=>{we?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const o=document.createElement("style"),i=G.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,n.appendChild(o)})},xe=we?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return ot(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ne;const J=window,Ae=J.trustedTypes,st=Ae?Ae.emptyScript:"",Ce=J.reactiveElementPolyfillSupport,ve={toAttribute(n,e){switch(e){case Boolean:n=n?st:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},Ve=(n,e)=>e!==n&&(e==e||n==n),re={attribute:!0,type:String,converter:ve,reflect:!1,hasChanged:Ve},$e="finalized";let R=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,o)=>{const i=this._$Ep(o,t);i!==void 0&&(this._$Ev.set(i,o),e.push(i))}),e}static createProperty(e,t=re){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const s=this[e];this[t]=i,this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||re}static finalize(){if(this.hasOwnProperty($e))return!1;this[$e]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of o)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)t.unshift(xe(i))}else e!==void 0&&t.push(xe(e));return t}static _$Ep(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return it(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=re){var i;const s=this.constructor._$Ep(e,o);if(s!==void 0&&o.reflect===!0){const r=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:ve).toAttribute(t,o.type);this._$El=e,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(e,t){var o;const i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){const r=i.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?r.converter:ve;this._$El=s,this[s]=d.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||Ve)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};R[$e]=!0,R.elementProperties=new Map,R.elementStyles=[],R.shadowRootOptions={mode:"open"},Ce==null||Ce({ReactiveElement:R}),((ne=J.reactiveElementVersions)!==null&&ne!==void 0?ne:J.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var le;const X=window,M=X.trustedTypes,Se=M?M.createPolicy("lit-html",{createHTML:n=>n}):void 0,ge="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,We="?"+C,nt=`<${We}>`,P=document,Q=()=>P.createComment(""),W=n=>n===null||typeof n!="object"&&typeof n!="function",je=Array.isArray,rt=n=>je(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",de=`[ 	
\f\r]`,z=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ke=/-->/g,Be=/>/g,E=RegExp(`>|${de}(?:([^\\s"'>=/]+)(${de}*=${de}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ee=/'/g,Oe=/"/g,Fe=/^(?:script|style|textarea|title)$/i,j=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),He=new WeakMap,H=P.createTreeWalker(P,129,null,!1);function Ke(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Se!==void 0?Se.createHTML(e):e}const lt=(n,e)=>{const t=n.length-1,o=[];let i,s=e===2?"<svg>":"",r=z;for(let d=0;d<t;d++){const l=n[d];let a,c,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===z?c[1]==="!--"?r=ke:c[1]!==void 0?r=Be:c[2]!==void 0?(Fe.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=E):c[3]!==void 0&&(r=E):r===E?c[0]===">"?(r=i??z,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?E:c[3]==='"'?Oe:Ee):r===Oe||r===Ee?r=E:r===ke||r===Be?r=z:(r=E,i=void 0);const g=r===E&&n[d+1].startsWith("/>")?" ":"";s+=r===z?l+nt:h>=0?(o.push(a),l.slice(0,h)+ge+l.slice(h)+C+g):l+C+(h===-2?(o.push(void 0),d):g)}return[Ke(n,s+(n[t]||"<?>")+(e===2?"</svg>":"")),o]};let me=class Ze{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,r=0;const d=e.length-1,l=this.parts,[a,c]=lt(e,t);if(this.el=Ze.createElement(a,o),H.currentNode=this.el.content,t===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=H.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const u of i.getAttributeNames())if(u.endsWith(ge)||u.startsWith(C)){const g=c[r++];if(h.push(u),g!==void 0){const se=i.getAttribute(g.toLowerCase()+ge).split(C),A=/([.?@])?(.*)/.exec(g);l.push({type:1,index:s,name:A[2],strings:se,ctor:A[1]==="."?at:A[1]==="?"?ht:A[1]==="@"?pt:te})}else l.push({type:6,index:s})}for(const u of h)i.removeAttribute(u)}if(Fe.test(i.tagName)){const h=i.textContent.split(C),u=h.length-1;if(u>0){i.textContent=M?M.emptyScript:"";for(let g=0;g<u;g++)i.append(h[g],Q()),H.nextNode(),l.push({type:2,index:++s});i.append(h[u],Q())}}}else if(i.nodeType===8)if(i.data===We)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(C,h+1))!==-1;)l.push({type:7,index:s}),h+=C.length-1}s++}}static createElement(e,t){const o=P.createElement("template");return o.innerHTML=e,o}};function D(n,e,t=n,o){var i,s,r,d;if(e===j)return e;let l=o!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[o]:t._$Cl;const a=W(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,o)),o!==void 0?((r=(d=t)._$Co)!==null&&r!==void 0?r:d._$Co=[])[o]=l:t._$Cl=l),l!==void 0&&(e=D(n,l._$AS(n,e.values),l,o)),e}let dt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:i}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:P).importNode(o,!0);H.currentNode=s;let r=H.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let c;a.type===2?c=new qe(r,r.nextSibling,this,e):a.type===1?c=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(c=new ut(r,this,e)),this._$AV.push(c),a=i[++l]}d!==(a==null?void 0:a.index)&&(r=H.nextNode(),d++)}return H.currentNode=P,s}v(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},qe=class Ge{constructor(e,t,o,i){var s;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=D(this,e,t),W(e)?e===w||e==null||e===""?(this._$AH!==w&&this._$AR(),this._$AH=w):e!==this._$AH&&e!==j&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):rt(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==w&&W(this._$AH)?this._$AA.nextSibling.data=e:this.$(P.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=me.createElement(Ke(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(o);else{const r=new dt(s,this),d=r.u(this.options);r.v(o),this.$(d),this._$AH=r}}_$AC(e){let t=He.get(e.strings);return t===void 0&&He.set(e.strings,t=new me(e)),t}T(e){je(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const s of e)i===t.length?t.push(o=new Ge(this.k(Q()),this.k(Q()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},te=class{constructor(e,t,o,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const s=this.strings;let r=!1;if(s===void 0)e=D(this,e,t,0),r=!W(e)||e!==this._$AH&&e!==j,r&&(this._$AH=e);else{const d=e;let l,a;for(e=s[0],l=0;l<s.length-1;l++)a=D(this,d[o+l],t,l),a===j&&(a=this._$AH[l]),r||(r=!W(a)||a!==this._$AH[l]),a===w?e=w:e!==w&&(e+=(a??"")+s[l+1]),this._$AH[l]=a}r&&!i&&this.j(e)}j(e){e===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},at=class extends te{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===w?void 0:e}};const ct=M?M.emptyScript:"";let ht=class extends te{constructor(){super(...arguments),this.type=4}j(e){e&&e!==w?this.element.setAttribute(this.name,ct):this.element.removeAttribute(this.name)}},pt=class extends te{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){var o;if((e=(o=D(this,e,t,0))!==null&&o!==void 0?o:w)===j)return;const i=this._$AH,s=e===w&&i!==w||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==w&&(i===w||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},ut=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){D(this,e)}};const Te=X.litHtmlPolyfillSupport;Te==null||Te(me,qe),((le=X.litHtmlVersions)!==null&&le!==void 0?le:X.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ae;const Y=window,N=Y.trustedTypes,Pe=N?N.createPolicy("lit-html",{createHTML:n=>n}):void 0,fe="$lit$",S=`lit$${(Math.random()+"").slice(9)}$`,Je="?"+S,vt=`<${Je}>`,L=document,F=()=>L.createComment(""),K=n=>n===null||typeof n!="object"&&typeof n!="function",Xe=Array.isArray,$t=n=>Xe(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ce=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Le=/-->/g,Re=/>/g,O=RegExp(`>|${ce}(?:([^\\s"'>=/]+)(${ce}*=${ce}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Me=/'/g,De=/"/g,Qe=/^(?:script|style|textarea|title)$/i,Ye=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),v=Ye(1),_=Ye(2),I=Symbol.for("lit-noChange"),$=Symbol.for("lit-nothing"),Ne=new WeakMap,T=L.createTreeWalker(L,129,null,!1);function et(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Pe!==void 0?Pe.createHTML(e):e}const gt=(n,e)=>{const t=n.length-1,o=[];let i,s=e===2?"<svg>":"",r=V;for(let d=0;d<t;d++){const l=n[d];let a,c,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===V?c[1]==="!--"?r=Le:c[1]!==void 0?r=Re:c[2]!==void 0?(Qe.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=O):c[3]!==void 0&&(r=O):r===O?c[0]===">"?(r=i??V,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?O:c[3]==='"'?De:Me):r===De||r===Me?r=O:r===Le||r===Re?r=V:(r=O,i=void 0);const g=r===O&&n[d+1].startsWith("/>")?" ":"";s+=r===V?l+vt:h>=0?(o.push(a),l.slice(0,h)+fe+l.slice(h)+S+g):l+S+(h===-2?(o.push(void 0),d):g)}return[et(n,s+(n[t]||"<?>")+(e===2?"</svg>":"")),o]};class Z{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,r=0;const d=e.length-1,l=this.parts,[a,c]=gt(e,t);if(this.el=Z.createElement(a,o),T.currentNode=this.el.content,t===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=T.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const u of i.getAttributeNames())if(u.endsWith(fe)||u.startsWith(S)){const g=c[r++];if(h.push(u),g!==void 0){const se=i.getAttribute(g.toLowerCase()+fe).split(S),A=/([.?@])?(.*)/.exec(g);l.push({type:1,index:s,name:A[2],strings:se,ctor:A[1]==="."?ft:A[1]==="?"?wt:A[1]==="@"?yt:oe})}else l.push({type:6,index:s})}for(const u of h)i.removeAttribute(u)}if(Qe.test(i.tagName)){const h=i.textContent.split(S),u=h.length-1;if(u>0){i.textContent=N?N.emptyScript:"";for(let g=0;g<u;g++)i.append(h[g],F()),T.nextNode(),l.push({type:2,index:++s});i.append(h[u],F())}}}else if(i.nodeType===8)if(i.data===Je)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(S,h+1))!==-1;)l.push({type:7,index:s}),h+=S.length-1}s++}}static createElement(e,t){const o=L.createElement("template");return o.innerHTML=e,o}}function U(n,e,t=n,o){var i,s,r,d;if(e===I)return e;let l=o!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[o]:t._$Cl;const a=K(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,t,o)),o!==void 0?((r=(d=t)._$Co)!==null&&r!==void 0?r:d._$Co=[])[o]=l:t._$Cl=l),l!==void 0&&(e=U(n,l._$AS(n,e.values),l,o)),e}class mt{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:i}=this._$AD,s=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:L).importNode(o,!0);T.currentNode=s;let r=T.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let c;a.type===2?c=new q(r,r.nextSibling,this,e):a.type===1?c=new a.ctor(r,a.name,a.strings,this,e):a.type===6&&(c=new _t(r,this,e)),this._$AV.push(c),a=i[++l]}d!==(a==null?void 0:a.index)&&(r=T.nextNode(),d++)}return T.currentNode=L,s}v(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class q{constructor(e,t,o,i){var s;this.type=2,this._$AH=$,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=U(this,e,t),K(e)?e===$||e==null||e===""?(this._$AH!==$&&this._$AR(),this._$AH=$):e!==this._$AH&&e!==I&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):$t(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==$&&K(this._$AH)?this._$AA.nextSibling.data=e:this.$(L.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=Z.createElement(et(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(o);else{const r=new mt(s,this),d=r.u(this.options);r.v(o),this.$(d),this._$AH=r}}_$AC(e){let t=Ne.get(e.strings);return t===void 0&&Ne.set(e.strings,t=new Z(e)),t}T(e){Xe(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const s of e)i===t.length?t.push(o=new q(this.k(F()),this.k(F()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class oe{constructor(e,t,o,i,s){this.type=1,this._$AH=$,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=$}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const s=this.strings;let r=!1;if(s===void 0)e=U(this,e,t,0),r=!K(e)||e!==this._$AH&&e!==I,r&&(this._$AH=e);else{const d=e;let l,a;for(e=s[0],l=0;l<s.length-1;l++)a=U(this,d[o+l],t,l),a===I&&(a=this._$AH[l]),r||(r=!K(a)||a!==this._$AH[l]),a===$?e=$:e!==$&&(e+=(a??"")+s[l+1]),this._$AH[l]=a}r&&!i&&this.j(e)}j(e){e===$?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ft extends oe{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===$?void 0:e}}const bt=N?N.emptyScript:"";class wt extends oe{constructor(){super(...arguments),this.type=4}j(e){e&&e!==$?this.element.setAttribute(this.name,bt):this.element.removeAttribute(this.name)}}class yt extends oe{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){var o;if((e=(o=U(this,e,t,0))!==null&&o!==void 0?o:$)===I)return;const i=this._$AH,s=e===$&&i!==$||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==$&&(i===$||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}}class _t{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){U(this,e)}}const Ie=Y.litHtmlPolyfillSupport;Ie==null||Ie(Z,q),((ae=Y.litHtmlVersions)!==null&&ae!==void 0?ae:Y.litHtmlVersions=[]).push("2.8.0");const xt=(n,e,t)=>{var o,i;const s=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:e;let r=s._$litPart$;if(r===void 0){const d=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=r=new q(e.insertBefore(F(),d),d,void 0,t??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var he,pe;class k extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=xt(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return I}}k.finalized=!0,k._$litElement$=!0,(he=globalThis.litElementHydrateSupport)===null||he===void 0||he.call(globalThis,{LitElement:k});const Ue=globalThis.litElementPolyfillSupport;Ue==null||Ue({LitElement:k});((pe=globalThis.litElementVersions)!==null&&pe!==void 0?pe:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ie=n=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(n,e):((t,o)=>{const{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(r){customElements.define(t,r)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const At=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},Ct=(n,e,t)=>{e.constructor.createProperty(t,n)};function b(n){return(e,t)=>t!==void 0?Ct(n,e,t):At(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(n){return b({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const tt=({finisher:n,descriptor:e})=>(t,o)=>{var i;if(o===void 0){const s=(i=t.originalKey)!==null&&i!==void 0?i:t.key,r=e!=null?{kind:"method",placement:"prototype",key:s,descriptor:e(t.key)}:{...t,key:s};return n!=null&&(r.finisher=function(d){n(d,s)}),r}{const s=t.constructor;e!==void 0&&Object.defineProperty(t,o,e(o)),n==null||n(s,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(n,e){return tt({descriptor:t=>{const o={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(e){const i=typeof t=="symbol"?Symbol():"__"+t;o.get=function(){var s,r;return this[i]===void 0&&(this[i]=(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null),this[i]}}return o}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ue;const St=((ue=window.HTMLSlotElement)===null||ue===void 0?void 0:ue.prototype.assignedElements)!=null?(n,e)=>n.assignedElements(e):(n,e)=>n.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function kt(n){const{slot:e,selector:t}=n??{};return tt({descriptor:o=>({get(){var i;const s="slot"+(e?`[name=${e}]`:":not([name])"),r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s),d=r!=null?St(r,n):[];return t?d.filter(l=>l.matches(t)):d},enumerable:!0,configurable:!0})})}const Bt=_`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
  fill=""></path>
</svg>`,Et=_`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
fill=""></path>
</svg>`;let m=class extends k{constructor(){super(...arguments),this.open=!1,this.isDisabled=!1,this.displayCaret=!1,this.closeOnSelect=!1,this.openViaButton=!0,this.usePopover=!1,this.includeSelectedOption=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{},this.isCustomList=!1,this.hasCustomClickHandler=!1,this.closeOnEscape=!1,this.closeOnBackdropClick=!1,this.boundKeyboardListener=e=>{switch(e.key){case"Escape":case"Esc":this.closeOptions();break}},this.closeOptions=e=>{e&&e.type==="click"&&e.stopPropagation(),this.open=!1,this.updatePopoverState()}}async firstUpdated(){await new Promise(e=>{setTimeout(e,0)}),this.addEventListener("closeDropdown",this.closeOptions)}willUpdate(e){e.has("open")&&this.updatePopoverState()}disconnectedCallback(){var e;(e=super.disconnectedCallback)===null||e===void 0||e.call(this),this.removeKeyboardListener()}setupKeyboardListener(){this.closeOnEscape&&document.addEventListener("keydown",this.boundKeyboardListener)}removeKeyboardListener(){this.closeOnEscape&&document.removeEventListener("keydown",this.boundKeyboardListener)}get dropdownState(){return this.open?(this.setupKeyboardListener(),"open"):(this.removeKeyboardListener(),"closed")}toggleOptions(){this.open=!this.open,this.updatePopoverState()}updatePopoverState(){var e,t;this.usePopover&&((t=(e=this.dropdownMenu)===null||e===void 0?void 0:e.togglePopover)===null||t===void 0||t.call(e,this.open),this.open&&this.positionDropdownMenu())}positionDropdownMenu(){if(!this.dropdownMenu)return;const e=this.container.getBoundingClientRect();this.dropdownMenu.style.left=`${e.left}px`,this.dropdownMenu.style.top=`${e.bottom}px`,this.dropdownMenu.style.minWidth=`${e.width}px`}mainButtonClicked(){var e;this.openViaButton?this.toggleOptions():(e=this.mainButtonLabelSlotted[0])===null||e===void 0||e.click()}renderOption(e){const{label:t,url:o=void 0,id:i}=e;let s;const r=this.selectedOption===i?"selected":"";return o?s=v`<a
        href=${o}
        @click=${d=>this.optionClicked(d,e)}
        >${t}</a
      >`:s=v`<button
        @click=${d=>this.optionClicked(d,e)}
      >
        ${t}
      </button>`,v`<li role="menuitem" class=${r}>${s}</li>`}optionClicked(e,t){var o;e.stopPropagation(),this.selectedOption!==t.id&&(this.selectedOption=t.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:t}})),(o=t.selectedHandler)===null||o===void 0||o.call(t,t)),this.closeOnSelect&&(this.closeOptions(),this.mainButton.focus())}get availableOptions(){return this.includeSelectedOption?this.options:this.options.filter(e=>this.selectedOption!==e.id)}get caretUpTemplate(){return v`
      <span ?hidden=${!this.open} class="caret-up">
        <slot name="caret-up">${Bt}</slot>
      </span>
    `}get caretDownTemplate(){return v`
      <span ?hidden=${this.open} class="caret-down">
        <slot name="caret-down">${Et}</slot>
      </span>
    `}get caretTemplate(){return this.displayCaret?this.openViaButton?v`
        <span class="caret" aria-hidden="true">
          ${this.caretUpTemplate} ${this.caretDownTemplate}
        </span>
      `:v`
      <button
        class="caret"
        aria-labelledby="caret-label"
        aria-haspopup="true"
        aria-expanded=${this.open}
        @click=${this.isDisabled||this.hasCustomClickHandler?$:this.toggleOptions}
      >
        ${this.caretUpTemplate} ${this.caretDownTemplate}
      </button>
    `:v``}get dropdownTemplate(){return this.isCustomList?v`<slot name="list"></slot>`:v`${this.availableOptions.map(e=>this.renderOption(e))}`}get backdropTemplate(){return this.closeOnBackdropClick?this.open?v`
      <div
        id="dropdown-backdrop"
        @keyup=${this.closeOptions}
        @click=${this.closeOptions}
      ></div>
    `:v``:v``}render(){return v`
      <div class="ia-dropdown-group">
        <div class="button-row">
          <button
            class="click-main"
            aria-haspopup=${this.openViaButton}
            aria-expanded=${this.open}
            @click=${this.isDisabled||this.hasCustomClickHandler?$:this.mainButtonClicked}
            ?disabled=${this.isDisabled}
          >
            <span class="sr-only" id="caret-label"
              >Toggle ${this.optionGroup}</span
            >
            <slot name="dropdown-label"></slot>
            ${this.openViaButton?this.caretTemplate:$}
          </button>
          ${this.openViaButton?$:this.caretTemplate}
        </div>

        <ul
          id="dropdown-main"
          class=${this.dropdownState}
          role="menu"
          ?popover=${this.usePopover}
        >
          ${this.dropdownTemplate}
        </ul>

        ${this.backdropTemplate}
      </div>
    `}static get styles(){const e=y`var(--dropdownBorderWidth, 1px)`,t=y`var(--dropdownBorderRadius, 4px)`,o=y`var(--dropdownBorderColor, #fff)`,i=y`var(--dropdownBgColor, #333)`,s=y`var(--dropdownTextColor, #fff)`,r=y`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`,d=y`var(--dropdownSelectedBgColor, #fff)`;return y`
      :host {
        display: inline;
        color: ${s};
      }

      svg.caret-up-svg,
      svg.caret-down-svg,
      ::slotted(svg.caret-up-svg),
      ::slotted(svg.caret-down-svg) {
        fill: var(--dropdownCaretColor, #fff);
        vertical-align: middle;
      }

      .button-row {
        display: flex;
      }

      button.click-main {
        background: transparent;
        color: inherit;
        padding: var(--dropdownMainButtonPadding, 0px);
        border: var(--dropdownMainButtonBorder, none);
        border-radius: var(--dropdownMainButtonBorderRadius, none);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        flex-direction: var(--dropdownMainButtonFlexDirection, row);
        z-index: var(--dropdownListZIndex, 2);
      }

      button.click-main:disabled {
        pointer-events: none;
        cursor: not-allowed;
        opacity: 0.5;
        /* Disable text selection on disabled button */
        -webkit-user-select: none; /* Safari */
        -ms-user-select: none; /* IE 10 and IE 11 */
        user-select: none; /* Standard syntax */
      }

      button.click-main:hover {
        background-color: var(--dropdownMainButtonHoverBgColor, inherit);
      }

      button.click-main:focus,
      button.click-main:focus-visible {
        background-color: var(--dropdownMainButtonFocusBgColor, inherit);
      }

      button.click-main:active {
        background-color: var(--dropdownMainButtonActiveBgColor, inherit);
      }

      button slot[name='dropdown-label'] {
        /* Set var to 0px for column layout */
        padding-right: var(--buttonSlotPaddingRight, 5px);
        display: inline-block;
      }

      .ia-dropdown-group {
        width: inherit;
        height: inherit;
        position: relative;
      }

      .sr-only {
        border: 0 !important;
        clip: rect(1px, 1px, 1px, 1px) !important;
        -webkit-clip-path: inset(50%) !important;
        clip-path: inset(50%) !important;
        height: 1px !important;
        margin: -1px !important;
        overflow: hidden !important;
        padding: 0 !important;
        position: absolute !important;
        width: 1px !important;
        white-space: nowrap !important;
        -webkit-user-select: none !important;
        user-select: none !important;
      }

      .caret {
        /* Maintain centered caret position but with a full-height clickable region */
        display: flex;
        align-self: stretch;
        align-items: center;
        padding: var(--caretPadding, 0px);
      }

      button.caret {
        appearance: none;
        background: none;
        border: none;
        cursor: pointer;
      }

      .caret svg {
        height: var(--caretHeight, 10px);
        width: var(--caretWidth, 20px);
      }

      #dropdown-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: transparent;
        z-index: 1;
      }

      ul {
        z-index: var(--dropdownListZIndex, 2);
      }

      #dropdown-main.closed {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }

      #dropdown-main {
        position: var(--dropdownListPosition, absolute);
        list-style: none;
        margin: var(--dropdownOffsetTop, 5px) 0 0 0;
        padding: 0;
        color: ${s};
        background: ${i};

        font-size: var(--dropdownFontSize, inherit);

        border-top: var(--dropdownBorderTopWidth, ${e});
        border-right: var(--dropdownBorderRightWidth, ${e});
        border-bottom: var(--dropdownBorderBottomWidth, ${e});
        border-left: var(--dropdownBorderLeftWidth, ${e});
        /* Must be after border-width settings for specificity */
        border-style: solid;
        border-color: ${o};

        border-radius: var(
            --dropdownBorderTopLeftRadius,
            ${t}
          )
          var(--dropdownBorderTopRightRadius, ${t})
          var(--dropdownBorderBottomRightRadius, ${t})
          var(--dropdownBorderBottomLeftRadius, ${t});

        white-space: var(--dropdownWhiteSpace, normal);

        /* Prevent top/bottom inner li from overlapping inner border */
        overflow: hidden;
      }

      #dropdown-main li:hover {
        background-color: ${r};
        color: var(--dropdownHoverTextColor, #fff);
        list-style: none;
        cursor: pointer;
      }

      #dropdown-main li:hover:first-child {
        border-top-color: ${r};
      }

      ul#dropdown-main li:hover:last-child {
        border-bottom-color: ${r};
      }

      #dropdown-main li:hover:not(:first-child) {
        border-top: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
      }
      #dropdown-main li:hover:not(:last-child) {
        border-bottom: 0.5px solid
          var(--dropdownHoverTopBottomBorderColor, #333);
      }

      #dropdown-main li.selected:last-child {
        border-bottom-color: ${d};
      }

      #dropdown-main li.selected:first-child {
        border-top-color: ${d};
      }

      #dropdown-main li:hover > *,
      #dropdown-main li:focus-within > * {
        background-color: ${r};
        color: var(--dropdownHoverTextColor, #fff);
      }

      #dropdown-main li.selected > * {
        background-color: ${d};
        color: var(--dropdownSelectedTextColor, #2c2c2c);
      }

      #dropdown-main li {
        background: ${i};
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 0.5px solid ${i};
        border-top: 0.5px solid ${i};
      }

      #dropdown-main li button {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }

      #dropdown-main li a {
        text-decoration: none;
        display: block;
        box-sizing: border-box;
      }

      #dropdown-main li:first-child {
        border-top-left-radius: var(--dropdownBorderTopLeftRadius, 4px);
        border-top-right-radius: var(--dropdownBorderTopRightRadius, 4px);
      }

      #dropdown-main li:last-child {
        border-bottom-right-radius: var(--dropdownBorderBottomRightRadius, 4px);
        border-bottom-left-radius: var(--dropdownBorderBottomLeftRadius, 4px);
      }

      /* cover the list with the label */
      #dropdown-main li > * > :first-child {
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        align-content: center;
        flex-wrap: nowrap;
        height: 100%;
        padding: var(--dropdownItemPaddingTop, 5px)
          var(--dropdownItemPaddingRight, 10px)
          var(--dropdownItemPaddingBottom, 5px)
          var(--dropdownItemPaddingLeft, 10px);
        box-sizing: border-box;
      }

      #dropdown-main li > * {
        width: 100%;
        height: inherit;
        color: ${s};
        background: transparent;
        padding: 0;
      }
    `}};p([b({type:Boolean,reflect:!0})],m.prototype,"open",void 0);p([b({type:Boolean,reflect:!0})],m.prototype,"isDisabled",void 0);p([b({type:Boolean})],m.prototype,"displayCaret",void 0);p([b({type:Boolean})],m.prototype,"closeOnSelect",void 0);p([b({type:Boolean})],m.prototype,"openViaButton",void 0);p([b({type:Boolean})],m.prototype,"usePopover",void 0);p([b({type:Boolean})],m.prototype,"includeSelectedOption",void 0);p([b({type:String})],m.prototype,"selectedOption",void 0);p([b({attribute:!1})],m.prototype,"options",void 0);p([b({type:String})],m.prototype,"optionGroup",void 0);p([b({attribute:!1})],m.prototype,"optionSelected",void 0);p([b({type:Boolean,reflect:!0})],m.prototype,"isCustomList",void 0);p([b({type:Boolean,reflect:!0})],m.prototype,"hasCustomClickHandler",void 0);p([b({type:Boolean,reflect:!0})],m.prototype,"closeOnEscape",void 0);p([b({type:Boolean,reflect:!0})],m.prototype,"closeOnBackdropClick",void 0);p([x(".ia-dropdown-group")],m.prototype,"container",void 0);p([x("#dropdown-main")],m.prototype,"dropdownMenu",void 0);p([x(".click-main")],m.prototype,"mainButton",void 0);p([kt({slot:"dropdown-label"})],m.prototype,"mainButtonLabelSlotted",void 0);m=p([ie("ia-dropdown")],m);let be=class extends k{render(){return v`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};be.styles=y`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
    }

    :host(.invert-icon-at-hover:hover) slot[name='icon'] {
      filter: invert(1);
    }

    :host(.selected) {
      background-color: var(--selectedBgColor, #fff);
      color: var(--selectedTextColor, #2c2c2c);
    }

    :host(.invert-icon-at-selected.selected) slot[name='icon'] {
      filter: invert(1);
    }

    div.icon-label-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      flex-direction: var(--iconLabelFlexDirection, row);
      height: 100%;
    }

    slot[name='icon'] {
      width: var(--iconWidth, 20px);
      margin-right: var(--iconLabelGutterWidth, 10px);
      display: flex;
      align-items: center;
      justify-content: flex-start;
      align-content: center;
      flex-wrap: nowrap;
      white-space: nowrap;
      height: 100%;
    }

    /* https://css-tricks.com/flexbox-truncated-text/ */
    ::slotted(div.truncate) {
      display: flex;
      width: var(--labelWidth, 100%);
      text-align: left;
      word-wrap: break-word; /* Important for long words! */
      overflow: hidden;
      text-overflow: ellipsis;
      min-width: 0;
    }

    @supports not (-webkit-line-clamp: 2) {
      ::slotted(div.truncate) {
        min-width: 0;
      }
    }
    @supports (-webkit-line-clamp: 2) {
      ::slotted(div.truncate) {
        min-width: 0;
        display: -webkit-box;
        overflow-wrap: break-word;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        /* Fixed line-height needed to fit unicode and emojis
          https://stackoverflow.com/a/67807146
        */
        line-height: 1.2em;
        /* max-height needed for Safari browser */
        max-height: var(--labelTruncateHeight, 30px);
        max-width: var(--labelWidth, 100%);
      }
    }
  `;be=p([ie("ia-icon-label")],be);let ee=class extends k{constructor(){super(...arguments),this.identifier="Flash",this.lists=[]}get checkIcon(){return _`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="height: 12px; width: 12px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get plusIcon(){return _`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="height: 12px; width: 12px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}renderUserlistOption(e){const{label:t,isSelected:o,id:i}=e,s=o?"selected":"",r=v`<button
      id="${i}"
      @click=${d=>this.optionClicked(d,e)}
    >
      ${t}
    </button> `;return v`<li class=${s}>${r}</li>`}optionClicked(e,t){var o;e.stopPropagation(),this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:t}})),(o=t.selectedHandler)===null||o===void 0||o.call(t,t)}checkedIcon(e){return e?v`${this.checkIcon}`:v`<div style="width: 12px; height: 12px;"></div>`}get userListOptions(){const e=[];this.lists.forEach(o=>{const i={label:v` <ia-icon-label>
          <div slot="icon">${this.checkedIcon(o.item_is_member)}</div>
          <div class="truncate">${o.name}</div>
        </ia-icon-label>`,id:o.id,selectedHandler:s=>this.onSelected(s)};e.push(i)});const t={label:v`<ia-icon-label>
        <div slot="icon">${this.plusIcon}</div>
        Create new list
      </ia-icon-label>`,id:"create-new-list",selectedHandler:o=>this.onSelected(o)};return e.push(t),e}onSelected(e){let t=0;this.lists=this.lists.map(o=>(o.id===e.id&&(o.item_is_member=!o.item_is_member),o.item_is_member&&(t+=1),o)),this.dispatchEvent(new CustomEvent("selectDropdown",{detail:{selected:t},bubbles:!0,composed:!0})),console.log("onSelected",e),this.closeDropdown()}closeDropdown(){console.log("closeDropdown"),this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))}render(){return v`
      ${this.userListOptions.map(e=>this.renderUserlistOption(e))}
    `}static get styles(){return y`
      :host {
        display: inline;
        background-color: #fff;
      }

      li:hover {
        list-style: none;
        cursor: pointer;
      }

      li {
        background: #fff;
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 1px #f1f1f1 solid;
        color: #2c2c2c;
        width: 140px;
        text-overflow: ellipsis;
      }

      li button {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
        width: 100%;
        padding: 0px 10px;
        font-size: 12px;
        --iconLabelGutterWidth: 8px;
        --iconWidth: 12px;
        margin: 0;
      }

      /* cover the list with the label */
      li > * > :first-child {
        margin: 0;
        display: inline-block;
        height: 30px;
        box-sizing: border-box;
        text-align: left;
      }

      /* color opacity calculator: https://codepen.io/quyenvsp/pen/jOLBBmX
        foreground: #2c2c2c 44;
        background: #fff;
      */
      button:hover {
        /* 10% 234 */
        background-color: #eaeaea;
      }

      button:focus,
      button:focus-visible {
        /* 20% 213 */
        background-color: #d5d5d5;
      }

      button:active {
        /* 30% 192 */
        background-color: #c0c0c0;
      }
    `}};p([b({type:String})],ee.prototype,"identifier",void 0);p([b({type:Array})],ee.prototype,"lists",void 0);ee=p([ie("item-userlists")],ee);const Ot=[{name:"A very long list name that will wrap to the next line and then some",item_is_member:!0,id:"0"},{name:"Silver age comics are the best",item_is_member:!0,id:"1"},{name:"Old reel leaders",item_is_member:!1,id:"2"},{name:"Microsoft stuff",item_is_member:!0,id:"3"},{name:"Radio shows from the golden age of radio",item_is_member:!1,id:"4"}];let f=class extends k{constructor(){super(),this.colorScheme="dark-bg",this.selectedOption=void 0,this.displayCaret=!0,this.disable=!1,this.openViaButton=!0,this.openViaCaret=!0,this.closeOnSelect=!1,this.includeSelectedOption=!1,this.selectedCount=0,this.userlistData=[],this.userlistData=[...Ot],this.selectedCount=this.userlistData.filter(t=>t.item_is_member).length;const e=t=>{this.selectedCount=t.detail.selected,console.log("Selected count: ",t.detail.selected)};this.addEventListener("selectDropdown",e)}toggleUserListDropdown(){this.userListDropdown.open=!this.userListDropdown.open}get correctIcon(){const e=_`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#2c2c2c"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#fff"/></g></svg>`,t=_`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#fff"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#2c2c2c"/></g></svg>`;return this.colorScheme==="light-bg"?e:t}changeColors(){if(this.colorScheme==="light-bg"){this.colorScheme="dark-bg";return}this.colorScheme="light-bg"}get selectedOptionId(){var e;return((e=this.selectedOption)===null||e===void 0?void 0:e.id)||"inlibrary"}get iconForDropdown(){return _`
<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 100 100" fill="#F6C604">
  <path d="m100 100c-.0788644-59.2647367-50.2714038-101.00902058-98.53801845-99.98144054l-1.46198155.0442569v16.87562024c22.8467642.7675814 42.5293949 8.6269128 58.4998247 24.6886733 15.7693479 15.8548913 23.4604084 35.3676837 24.3442587 57.6217172l.0272163.7511729zm-35.0356755 0c1.2744013-36.4110804-31.8141828-66.5076376-63.9896269-64.941512l-.9746976.0571761v16.4599701c18.3229442 1.9606235 31.4808606 9.0936501 39.502426 21.3048035 4.6504757 7.0775287 7.5752956 15.864554 8.7788978 26.3313997l.087043.7881626zm-51.8428762-.0000003c6.9413142-.0063426 12.8048731-5.8658088 12.877673-12.8772036.080713-7.5342784-5.4077681-13.1196268-12.8919165-13.1227964-7.21668788-.0015839-13.2669944 6.0654513-13.10398588 13.1338879.16300852 6.7911498 6.35891488 12.8724454 13.11822938 12.8661121z" fill-rule="evenodd"/>
  </svg>
   `}get checkIcon(){return _`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 17.5px; height: 17.5px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get plusIcon(){return _`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="width: 17.5px; height: 17.5px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}get slottedCaretUp(){return _`<svg
    slot="caret-up"
    class="caret-up-svg"
    style="height: 10px; width: 10px;"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m5 3 5 5h-10z" fill="" fill-rule="evenodd" />
  </svg>`}get slottedCaretDown(){return _`<svg
    slot="caret-down"
    class="caret-down-svg"
    style="height: 10px; width: 10px;"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m5 8 5-5h-10z" fill="" fill-rule="evenodd" />
  </svg>`}checkboxRowTemplate(e){var t,o,i;return v`
      <div>
        <input
          type="checkbox"
          id=${e.id}
          ?checked=${(t=e.isChecked)!==null&&t!==void 0?t:!1}
          ?isDisabled=${(o=e.isDisabled)!==null&&o!==void 0?o:!1}
          @change=${(i=e.onChange)!==null&&i!==void 0?i:$}
        />
        <label for=${e.id}>${e.label}</label>
      </div>
    `}get mainButton(){return v`
      <div class="action-bar-text">
        <ia-icon-label>
          <div slot="icon" class="icon-img">
            ${this.selectedCount>0?this.checkIcon:this.plusIcon}
          </div>
          <div class="label">Add Item to List</div>
          <div class="label-sm">Lists</div>
        </ia-icon-label>
      </div>
    `}get itemUserlists(){return v`
      <item-userlists slot="list" .lists=${this.userlistData}></item-userlists>
    `}render(){var e,t;const o=this.selectedOptionId==="foo-bar";return v`
      <section><h2>iaux-dropdown</h2></section>

      ${this.checkboxRowTemplate({id:"display-caret-check",label:"Display caret",isChecked:this.displayCaret,onChange:()=>{this.displayCaret=this.displayCaretCheck.checked,this.displayCaret||(this.openViaCaret=!1,this.openViaCaretCheck.checked=!1)}})}
      ${this.checkboxRowTemplate({id:"disable-check",label:"Disable",isChecked:this.disable,onChange:()=>{this.disable=this.disableCheck.checked}})}
      ${this.checkboxRowTemplate({id:"open-via-button",label:"Open via button",isChecked:this.openViaButton,onChange:()=>{this.openViaButton=this.openViaButtonCheck.checked}})}
      ${this.checkboxRowTemplate({id:"open-via-caret",label:"Open via caret",isChecked:this.openViaCaret,isDisabled:!this.displayCaret,onChange:()=>{this.openViaCaret=this.openViaCaretCheck.checked}})}
      ${this.checkboxRowTemplate({id:"close-on-select",label:"Close dropdown upon selection",isChecked:this.closeOnSelect,onChange:()=>{this.closeOnSelect=this.closeOnSelectCheck.checked}})}
      ${this.checkboxRowTemplate({id:"include-selected-option",label:"Include selected option in dropdown",isChecked:this.includeSelectedOption,onChange:()=>{this.includeSelectedOption=this.includeSelectedOptionCheck.checked}})}

      <button class="change-color" @click=${()=>this.changeColors()}>
        change colors
      </button>
      <hr />
      <section><h2>Testing basic dropdown</h2></section>
      <ul>
        <li>Click to background to close</li>
      </ul>
      <ia-dropdown
        class=${this.colorScheme}
        ?displayCaret=${this.displayCaret}
        ?isDisabled=${this.disable}
        ?openViaButton=${this.openViaButton}
        ?openViaCaret=${this.openViaCaret}
        ?closeOnSelect=${this.closeOnSelect}
        ?closeOnBackdropClick=${!0}
        ?includeSelectedOption=${this.includeSelectedOption}
        selectedOption=${this.selectedOptionId}
        .options=${[{url:"https://archive.org/details/inlibrary",selectedHandler:i=>this.onSelected(i),label:v`<ia-icon-label>
              <div slot="icon">${this.iconForDropdown}</div>
              Archive.org/inlibrary
            </ia-icon-label>`,id:"inlibrary"},{selectedHandler:i=>this.onSelected(i),label:v` <ia-icon-label
              class="invert-icon-at-hover invert-icon-at-selected ${o?"selected":""}"
            >
              <div slot="icon">${this.iconForDropdown}</div>
              Select this option
            </ia-icon-label>`,id:"foo-bar"},{selectedHandler:i=>this.onSelected(i),label:v`<p>Third option, just a label</p>`,id:"bar-foo"}]}
      >
        <div slot="dropdown-label">${this.correctIcon}</div>
      </ia-dropdown>
      <hr />
      <section><h2>Testing slotted caret</h2></section>

      <div class="slotted-test">
        <ia-dropdown
          class="slotted-caret"
          ?displaycaret=${!0}
          ?isDisabled=${this.disable}
          ?openViaButton=${!1}
          ?openViaCaret=${!0}
          ?closeOnSelect=${this.closeOnSelect}
          ?includeSelectedOption=${this.includeSelectedOption}
          selectedOption=${this.selectedOptionId}
          .options=${[{url:"https://archive.org/details/inlibrary",selectedHandler:i=>this.onSelected(i),label:v`<ia-icon-label>
                <div slot="icon">${this.iconForDropdown}</div>
                Archive.org/inlibrary
              </ia-icon-label>`,id:"inlibrary"},{selectedHandler:i=>this.onSelected(i),label:v` <ia-icon-label
                class="invert-icon-at-hover invert-icon-at-selected ${o?"selected":""}"
              >
                <div slot="icon">${this.iconForDropdown}</div>
                Select this option
              </ia-icon-label>`,id:"foo-bar"},{selectedHandler:i=>this.onSelected(i),label:v`<p>Third option, just a label</p>`,id:"bar-foo"}]}
        >
          <div class="list-title" slot="dropdown-label">My Lists</div>
          ${this.slottedCaretUp} ${this.slottedCaretDown}
        </ia-dropdown>
      </div>

      <hr />
      <section><h2>Testing popover menu</h2></section>

      <div class="popover-test">
        <ia-dropdown
          class="popover-menu"
          usePopover
          ?displaycaret=${!0}
          ?isDisabled=${this.disable}
          ?openViaButton=${!1}
          ?openViaCaret=${!0}
          ?closeOnSelect=${this.closeOnSelect}
          ?includeSelectedOption=${this.includeSelectedOption}
          selectedOption=${this.selectedOptionId}
          .options=${[{selectedHandler:i=>this.onSelected(i),label:"Option 1",id:"option1"},{selectedHandler:i=>this.onSelected(i),label:"Option 2",id:"option2"},{selectedHandler:i=>this.onSelected(i),label:"Option 3",id:"option3"}]}
        >
          <span slot="dropdown-label">
            ${(t=(e=this.selectedOption)===null||e===void 0?void 0:e.label)!==null&&t!==void 0?t:"Select an option"}
          </span>
        </ia-dropdown>
      </div>

      <hr />
      <section><h2>Testing userlist check dropdown</h2></section>
      <ul>
        <li>Esc key to close</li>
        <li>Click to background to close</li>
        <li>Select to close</li>
        <li>Main button icon change 0,>0 selected</li>
        <li>hasCustomClickHandler opens, closes, doesn't fire when disabled</li>
      </ul>
      <br />

      <div class="list-test">
        <ia-dropdown
          id="user-list-dropdown"
          class="list-dropdown"
          ?displaycaret=${!1}
          ?isDisabled=${this.disable}
          ?openViaButton=${!0}
          ?openViaCaret=${!1}
          ?closeOnSelect=${!0}
          ?includeSelectedOption=${!0}
          ?isCustomList=${!0}
          ?closeOnEscape=${!0}
          ?closeOnBackdropClick=${!0}
          ?hasCustomClickHandler=${!0}
          @click=${this.disable?$:i=>{i.stopPropagation(),this.toggleUserListDropdown()}}
        >
          <div class="list-title" slot="dropdown-label">${this.mainButton}</div>
          ${this.itemUserlists}
        </ia-dropdown>
      </div>
    `}onSelected(e){console.log("**** OPTION ",e),this.selectedOption=e}};f.styles=y`
    :host {
      display: block;
    }

    :host([colorscheme='dark-bg']) {
      background-color: black;
      color: white;
    }

    :host([colorscheme='light-bg']) {
      background-color: pink;
      color: black;
    }

    button.change-color {
      margin: 10px 0;
    }

    ia-dropdown.light-bg {
      --dropdownCaretColor: #222;
    }

    div.list-title {
      font-weight: 600;
      color: #222;
    }

    .slotted-test,
    .list-test,
    .popover-test {
      padding: 10px 0 0 10px;
      background-color: white;
      height: auto;
      width: 200px;
    }

    div.list-test {
      height: 300px;
    }

    .list-test {
      --dropdownBgColor: #fff;
      --dropdownItemPaddingRight: 0;
      --dropdownItemPaddingLeft: 2px;
      --dropdownBorderColor: blue;
      --dropdownBorderWidth: 2px;
      --iconLabelGutterWidth: 4px;
      --iconWidth: 10px;
      --dropdownOffsetTop: 2px;
      --buttonSlotPaddingRight: 0;
      --dropdownMainButtonFlexDirection: column;
      --dropdownMainButtonPadding: 5px 5px;
      --dropdownMainButtonHoverBgColor: rgba(44, 44, 44, 0.1);
      --dropdownMainButtonActiveBgColor: rgba(44, 44, 44, 0.3);
      --iconLabelGutterWidth: 0;
      --iconWidth: 17.5px;
      --dropdownMainButtonBorder: 2px solid #2c2c2c;
      --dropdownMainButtonBorderRadius: 3px;
    }

    ia-dropdown.slotted-caret {
      --dropdownCaretColor: #222;
      --caretPadding: 0 0 6px 5px;
      --dropdownListPosition: relative;
    }

    ia-dropdown.popover-menu {
      --dropdownCaretColor: #222;
      color: #222;
      display: inline-block;
      height: 25px;
    }

    .action-bar-text {
      font-weight: normal;
      --iconLabelFlexDirection: column;
      --iconLabelGutterWidth: 0;
      --iconWidth: 17.5px;
    }

    /* inside button.click-main, classname from details.inc buttons */
    @media (min-width: 768px) {
      .action-bar-text {
        /* for long text, thin L/R padding */
        padding: 2px 1px;
      }

      .action-bar-text .label-sm {
        display: none;
      }
    }

    @media (max-width: 767px) {
      .action-bar-text {
        padding: 2px 2px;
      }

      .action-bar-text .label {
        display: none;
      }
    }

    svg {
      height: 30px;
      width: 30px;
    }
  `;p([b({type:String,attribute:!0,reflect:!0})],f.prototype,"colorScheme",void 0);p([b({type:Object})],f.prototype,"selectedOption",void 0);p([B()],f.prototype,"displayCaret",void 0);p([B()],f.prototype,"disable",void 0);p([B()],f.prototype,"openViaButton",void 0);p([B()],f.prototype,"openViaCaret",void 0);p([B()],f.prototype,"closeOnSelect",void 0);p([B()],f.prototype,"includeSelectedOption",void 0);p([B()],f.prototype,"selectedCount",void 0);p([B()],f.prototype,"userlistData",void 0);p([x("#display-caret-check")],f.prototype,"displayCaretCheck",void 0);p([x("#disable-check")],f.prototype,"disableCheck",void 0);p([x("#open-via-button")],f.prototype,"openViaButtonCheck",void 0);p([x("#open-via-caret")],f.prototype,"openViaCaretCheck",void 0);p([x("#close-on-select")],f.prototype,"closeOnSelectCheck",void 0);p([x("#include-selected-option")],f.prototype,"includeSelectedOptionCheck",void 0);p([x("#user-list-dropdown")],f.prototype,"userListDropdown",void 0);f=p([ie("app-root")],f);
