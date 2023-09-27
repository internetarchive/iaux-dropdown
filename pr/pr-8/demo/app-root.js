(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();function c(n,t,e,o){var i=arguments.length,r=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,t,e,o);else for(var d=n.length-1;d>=0;d--)(s=n[d])&&(r=(i<3?s(r):i>3?s(t,e,r):s(t,e))||r);return i>3&&r&&Object.defineProperty(t,e,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=window,ot=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,it=Symbol(),rt=new WeakMap;let ft=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==it)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(ot&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=rt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&rt.set(e,t))}return t}toString(){return this.cssText}};const Ct=n=>new ft(typeof n=="string"?n:n+"",void 0,it),w=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((o,i,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new ft(e,n,it)},St=(n,t)=>{ot?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),i=N.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,n.appendChild(o)})},nt=ot?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return Ct(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var W;const V=window,st=V.trustedTypes,At=st?st.emptyScript:"",lt=V.reactiveElementPolyfillSupport,X={toAttribute(n,t){switch(t){case Boolean:n=n?At:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},mt=(n,t)=>t!==n&&(t==t||n==n),F={attribute:!0,type:String,converter:X,reflect:!1,hasChanged:mt},Q="finalized";let E=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Ep(o,e);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,e=F){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const r=this[t];this[e]=i,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||F}static finalize(){if(this.hasOwnProperty(Q))return!1;this[Q]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(nt(i))}else t!==void 0&&e.push(nt(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return St(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=F){var i;const r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){const s=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:X).toAttribute(e,o.type);this._$El=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,r=i._$Ev.get(t);if(r!==void 0&&this._$El!==r){const s=i.getPropertyOptions(r),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:X;this._$El=r,this[r]=d.fromAttribute(e,s.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||mt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(o)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};E[Q]=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},lt==null||lt({ReactiveElement:E}),((W=V.reactiveElementVersions)!==null&&W!==void 0?W:V.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var q;const D=window,O=D.trustedTypes,dt=O?O.createPolicy("lit-html",{createHTML:n=>n}):void 0,Y="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,$t="?"+_,kt=`<${$t}>`,A=document,R=()=>A.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",wt=Array.isArray,Et=n=>wt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",G=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,at=/-->/g,ct=/>/g,C=RegExp(`>|${G}(?:([^\\s"'>=/]+)(${G}*=${G}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ht=/'/g,pt=/"/g,bt=/^(?:script|style|textarea|title)$/i,yt=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),h=yt(1),b=yt(2),B=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ut=new WeakMap,S=A.createTreeWalker(A,129,null,!1);function _t(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return dt!==void 0?dt.createHTML(t):t}const Ot=(n,t)=>{const e=n.length-1,o=[];let i,r=t===2?"<svg>":"",s=P;for(let d=0;d<e;d++){const l=n[d];let a,u,v=-1,g=0;for(;g<l.length&&(s.lastIndex=g,u=s.exec(l),u!==null);)g=s.lastIndex,s===P?u[1]==="!--"?s=at:u[1]!==void 0?s=ct:u[2]!==void 0?(bt.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=C):u[3]!==void 0&&(s=C):s===C?u[0]===">"?(s=i??P,v=-1):u[1]===void 0?v=-2:(v=s.lastIndex-u[2].length,a=u[1],s=u[3]===void 0?C:u[3]==='"'?pt:ht):s===pt||s===ht?s=C:s===at||s===ct?s=P:(s=C,i=void 0);const y=s===C&&n[d+1].startsWith("/>")?" ":"";r+=s===P?l+kt:v>=0?(o.push(a),l.slice(0,v)+Y+l.slice(v)+_+y):l+_+(v===-2?(o.push(void 0),d):y)}return[_t(n,r+(n[e]||"<?>")+(t===2?"</svg>":"")),o]};class I{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let r=0,s=0;const d=t.length-1,l=this.parts,[a,u]=Ot(t,e);if(this.el=I.createElement(a,o),S.currentNode=this.el.content,e===2){const v=this.el.content,g=v.firstChild;g.remove(),v.append(...g.childNodes)}for(;(i=S.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const v=[];for(const g of i.getAttributeNames())if(g.endsWith(Y)||g.startsWith(_)){const y=u[s++];if(v.push(g),y!==void 0){const xt=i.getAttribute(y.toLowerCase()+Y).split(_),U=/([.?@])?(.*)/.exec(y);l.push({type:1,index:r,name:U[2],strings:xt,ctor:U[1]==="."?Tt:U[1]==="?"?Rt:U[1]==="@"?Ht:M})}else l.push({type:6,index:r})}for(const g of v)i.removeAttribute(g)}if(bt.test(i.tagName)){const v=i.textContent.split(_),g=v.length-1;if(g>0){i.textContent=O?O.emptyScript:"";for(let y=0;y<g;y++)i.append(v[y],R()),S.nextNode(),l.push({type:2,index:++r});i.append(v[g],R())}}}else if(i.nodeType===8)if(i.data===$t)l.push({type:2,index:r});else{let v=-1;for(;(v=i.data.indexOf(_,v+1))!==-1;)l.push({type:7,index:r}),v+=_.length-1}r++}}static createElement(t,e){const o=A.createElement("template");return o.innerHTML=t,o}}function T(n,t,e=n,o){var i,r,s,d;if(t===B)return t;let l=o!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[o]:e._$Cl;const a=H(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,o)),o!==void 0?((s=(d=e)._$Co)!==null&&s!==void 0?s:d._$Co=[])[o]=l:e._$Cl=l),l!==void 0&&(t=T(n,l._$AS(n,t.values),l,o)),t}class Bt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,r=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:A).importNode(o,!0);S.currentNode=r;let s=S.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let u;a.type===2?u=new L(s,s.nextSibling,this,t):a.type===1?u=new a.ctor(s,a.name,a.strings,this,t):a.type===6&&(u=new It(s,this,t)),this._$AV.push(u),a=i[++l]}d!==(a==null?void 0:a.index)&&(s=S.nextNode(),d++)}return S.currentNode=A,r}v(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class L{constructor(t,e,o,i){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=T(this,t,e),H(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==B&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Et(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=t:this.$(A.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,r=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=I.createElement(_t(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===r)this._$AH.v(o);else{const s=new Bt(r,this),d=s.u(this.options);s.v(o),this.$(d),this._$AH=s}}_$AC(t){let e=ut.get(t.strings);return e===void 0&&ut.set(t.strings,e=new I(t)),e}T(t){wt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const r of t)i===e.length?e.push(o=new L(this.k(R()),this.k(R()),this,this.options)):o=e[i],o._$AI(r),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class M{constructor(t,e,o,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const r=this.strings;let s=!1;if(r===void 0)t=T(this,t,e,0),s=!H(t)||t!==this._$AH&&t!==B,s&&(this._$AH=t);else{const d=t;let l,a;for(t=r[0],l=0;l<r.length-1;l++)a=T(this,d[o+l],e,l),a===B&&(a=this._$AH[l]),s||(s=!H(a)||a!==this._$AH[l]),a===p?t=p:t!==p&&(t+=(a??"")+r[l+1]),this._$AH[l]=a}s&&!i&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Tt extends M{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}const Pt=O?O.emptyScript:"";class Rt extends M{constructor(){super(...arguments),this.type=4}j(t){t&&t!==p?this.element.setAttribute(this.name,Pt):this.element.removeAttribute(this.name)}}class Ht extends M{constructor(t,e,o,i,r){super(t,e,o,i,r),this.type=5}_$AI(t,e=this){var o;if((t=(o=T(this,t,e,0))!==null&&o!==void 0?o:p)===B)return;const i=this._$AH,r=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,s=t!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class It{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){T(this,t)}}const vt=D.litHtmlPolyfillSupport;vt==null||vt(I,L),((q=D.litHtmlVersions)!==null&&q!==void 0?q:D.litHtmlVersions=[]).push("2.8.0");const Lt=(n,t,e)=>{var o,i;const r=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let s=r._$litPart$;if(s===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=s=new L(t.insertBefore(R(),d),d,void 0,e??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var K,Z;class x extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Lt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return B}}x.finalized=!0,x._$litElement$=!0,(K=globalThis.litElementHydrateSupport)===null||K===void 0||K.call(globalThis,{LitElement:x});const gt=globalThis.litElementPolyfillSupport;gt==null||gt({LitElement:x});((Z=globalThis.litElementVersions)!==null&&Z!==void 0?Z:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=n=>t=>typeof t=="function"?((e,o)=>(customElements.define(e,o),o))(n,t):((e,o)=>{const{kind:i,elements:r}=o;return{kind:i,elements:r,finisher(s){customElements.define(e,s)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zt=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},Ut=(n,t,e)=>{t.constructor.createProperty(e,n)};function m(n){return(t,e)=>e!==void 0?Ut(n,t,e):zt(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function z(n){return m({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Nt=({finisher:n,descriptor:t})=>(e,o)=>{var i;if(o===void 0){const r=(i=e.originalKey)!==null&&i!==void 0?i:e.key,s=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(e.key)}:{...e,key:r};return n!=null&&(s.finisher=function(d){n(d,r)}),s}{const r=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),n==null||n(r,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function k(n,t){return Nt({descriptor:e=>{const o={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(t){const i=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var r,s;return this[i]===void 0&&(this[i]=(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&s!==void 0?s:null),this[i]}}return o}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var J;((J=window.HTMLSlotElement)===null||J===void 0?void 0:J.prototype.assignedElements)!=null;let $=class extends x{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.closeOnSelect=!1,this.openViaButton=!0,this.openViaCaret=!0,this.includeSelectedOption=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{},this.isCustomList=!1,this.handlingCaretClick=!1}async firstUpdated(){await new Promise(t=>setTimeout(t,0)),this.addEventListener("closeDropdown",()=>{this.open=!1})}renderOption(t){const{label:e,url:o=void 0,id:i}=t;let r;const s=this.selectedOption===i?"selected":"";return o?r=h`<a
        href=${o}
        @click=${()=>this.optionClicked(t)}
        >${e}</a
      >`:r=h`<button
        @click=${()=>this.optionClicked(t)}
      >
        ${e}
      </button>`,h`<li class=${s}>${r}</li>`}optionClicked(t){var e;this.selectedOption!==t.id&&(this.selectedOption=t.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:t}})),(e=t.selectedHandler)===null||e===void 0||e.call(t,t)),this.closeOnSelect&&(this.open=!1)}toggleOptions(){this.open=!this.open}mainButtonClicked(){if(this.handlingCaretClick){this.handlingCaretClick=!1;return}this.openViaButton&&this.toggleOptions()}caretInteracted(){this.openViaCaret&&this.toggleOptions()}caretClicked(){this.handlingCaretClick=!0,this.caretInteracted()}caretKeyDown(t){(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.caretInteracted())}get dropdownState(){return this.open?"open":"closed"}get caretUp(){return b`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return b`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.includeSelectedOption?this.options:this.options.filter(t=>this.selectedOption!==t.id)}get dropdownFormat(){return this.isCustomList?h`<slot name="menu-slot"></slot>`:h`${this.availableOptions.map(t=>this.renderOption(t))}`}render(){return h`
      <div class="ia-dropdown-group">
        <button
          @click=${this.mainButtonClicked}
          class="click-main"
          @keydown=${t=>{t.key==="Escape"&&(this.open=!1)}}
        >
          <span class="cta sr-only">Toggle ${this.optionGroup}</span>
          <slot name="dropdown-label"></slot>
          ${this.displayCaret?h`
                <span
                  class="caret"
                  tabindex=${this.openViaCaret&&!this.openViaButton?"0":p}
                  role=${this.openViaCaret?"button":p}
                  @click=${this.caretClicked}
                  @keydown=${this.caretKeyDown}
                >
                  <span ?hidden=${!this.open} class="caret-up-slot">
                    <slot name="caret-up">${this.caretUp}</slot>
                  </span>
                  <span ?hidden=${this.open} class="caret-down-slot">
                    <slot name="caret-down">${this.caretDown}</slot>
                  </span>
                </span>
              `:p}
        </button>

        <ul class="dropdown-main ${this.dropdownState}">
          ${this.dropdownFormat}
        </ul>
      </div>
    `}static get styles(){const t=w`var(--dropdownBorderWidth, 1px)`,e=w`var(--dropdownBorderRadius, 4px)`,o=w`var(--dropdownBorderColor, #fff)`,i=w`var(--dropdownBgColor, #333)`,r=w`var(--dropdownTextColor, #fff)`,s=w`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`,d=w`var(--dropdownSelectedBgColor, #fff)`;return w`
      :host {
        display: inline;
        color: ${r};
      }

      svg.caret-up-svg,
      svg.caret-down-svg,
      ::slotted(svg.caret-up-svg),
      ::slotted(svg.caret-down-svg) {
        fill: var(--dropdownCaretColor, #fff);
        vertical-align: middle;
      }

      button.click-main {
        background: transparent;
        color: inherit;
        padding: var(--dropdownMainButtonPadding, 0px);
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        flex-direction: row;
      }

      button slot {
        padding-right: 5px;
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
      }

      .caret {
        /* Maintain centered caret position but with a full-height clickable region */
        display: flex;
        align-self: stretch;
        align-items: center;
        padding: var(--caretPadding, 0px);
      }

      .caret svg {
        height: var(--caretHeight, 10px);
        width: var(--caretWidth, 20px);
      }

      ul {
        z-index: var(--dropdownListZIndex, 1);
      }

      ul.dropdown-main.closed {
        visibility: hidden;
        height: 1px;
        width: 1px;
      }

      ul.dropdown-main {
        position: var(--dropdownListPosition, absolute);
        list-style: none;
        margin: var(--dropdownOffsetTop, 5px) 0 0 0;
        padding: 0;
        color: ${r};
        font-size: var(--dropdownFontSize, inherit);

        border-top: var(--dropdownBorderTopWidth, ${t}) solid
          ${o};
        border-right: var(--dropdownBorderRightWidth, ${t})
          solid ${o};
        border-bottom: var(--dropdownBorderBottomWidth, ${t})
          solid ${o};
        border-left: var(--dropdownBorderLeftWidth, ${t})
          solid ${o};

        border-radius: var(
            --dropdownBorderTopLeftRadius,
            ${e}
          )
          var(--dropdownBorderTopRightRadius, ${e})
          var(--dropdownBorderBottomRightRadius, ${e})
          var(--dropdownBorderBottomLeftRadius, ${e});

        white-space: var(--dropdownWhiteSpace, normal);
      }

      ul.dropdown-main {
        background: ${i};
      }

      ul.dropdown-main li:hover {
        background-color: ${s};
        color: var(--dropdownHoverTextColor, #fff);
        list-style: none;
        cursor: pointer;
      }

      ul.dropdown-main li:hover:first-child {
        border-top-color: ${s};
      }

      ul.dropdown-main li:hover:last-child {
        border-bottom-color: ${s};
      }

      ul.dropdown-main li:hover:not(:first-child) {
        border-top: 0.5px solid var(--dropdownHoverTopBottomBorderColor, #333);
      }
      ul.dropdown-main li:hover:not(:last-child) {
        border-bottom: 0.5px solid
          var(--dropdownHoverTopBottomBorderColor, #333);
      }

      ul.dropdown-main li.selected:last-child {
        border-bottom-color: ${d};
      }

      ul.dropdown-main li.selected:first-child {
        border-top-color: ${d};
      }

      ul.dropdown-main li:hover > *,
      ul.dropdown-main li:focus-within > * {
        background-color: ${s};
        color: var(--dropdownHoverTextColor, #fff);
      }

      ul.dropdown-main li.selected > * {
        background-color: ${d};
        color: var(--dropdownSelectedTextColor, #2c2c2c);
      }

      ul.dropdown-main li {
        background: ${i};
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 0.5px solid ${i};
        border-top: 0.5px solid ${i};
      }

      ul.dropdown-main li button {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }

      ul.dropdown-main li a {
        text-decoration: none;
        display: block;
        box-sizing: border-box;
      }

      ul.dropdown-main li:first-child {
        border-top-left-radius: var(--dropdownBorderTopLeftRadius, 4px);
        border-top-right-radius: var(--dropdownBorderTopRightRadius, 4px);
      }

      ul.dropdown-main li:last-child {
        border-bottom-right-radius: var(--dropdownBorderBottomRightRadius, 4px);
        border-bottom-left-radius: var(--dropdownBorderBottomLeftRadius, 4px);
      }

      /* cover the list with the label */
      ul.dropdown-main li > * > :first-child {
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

      ul.dropdown-main li > * {
        width: 100%;
        height: inherit;
        color: ${r};
        background: transparent;
        padding: 0;
      }
    `}};c([m({type:Boolean,attribute:!0})],$.prototype,"open",void 0);c([m({type:Boolean,attribute:!0})],$.prototype,"displayCaret",void 0);c([m({type:Boolean,attribute:!0})],$.prototype,"closeOnSelect",void 0);c([m({type:Boolean,attribute:!0})],$.prototype,"openViaButton",void 0);c([m({type:Boolean,attribute:!0})],$.prototype,"openViaCaret",void 0);c([m({type:Boolean,attribute:!0})],$.prototype,"includeSelectedOption",void 0);c([m({type:String,attribute:!0})],$.prototype,"selectedOption",void 0);c([m({type:Array})],$.prototype,"options",void 0);c([m({type:String})],$.prototype,"optionGroup",void 0);c([m({type:Function})],$.prototype,"optionSelected",void 0);c([m({type:Boolean,reflect:!0})],$.prototype,"isCustomList",void 0);c([k(".click-main")],$.prototype,"mainButton",void 0);$=c([j("ia-dropdown")],$);let tt=class extends x{render(){return h`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};tt.styles=w`
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
        /* max-height needed for Safari browser */
        max-height: var(--labelTruncateHeight, 30px);
        max-width: var(--labelWidth, 100%);
      }
    }
  `;tt=c([j("ia-icon-label")],tt);const Vt=[{name:"A very long list name that will wrap to the next line and then some",item_is_member:!0,id:"0"},{name:"Silver age comics are the best",item_is_member:!0,id:"1"},{name:"Old reel leaders",item_is_member:!1,id:"2"},{name:"Microsoft stuff",item_is_member:!0,id:"3"},{name:"Radio shows from the golden age of radio",item_is_member:!1,id:"4"}];let et=class extends x{constructor(){super(...arguments),this.identifier="Flash"}get checkIcon(){return b`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="height: 12px; width: 12px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get addIcon(){return b`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="height: 12px; width: 12px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}renderOption(t){const{label:e,isSelected:o,id:i}=t,r=o?"selected":"",s=h`<button
      id="${i}"
      @click=${()=>this.optionClicked(t)}
    >
      ${e}
    </button> `;return h`<li class=${r}>${s}</li>`}optionClicked(t){var e;this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:t}})),(e=t.selectedHandler)===null||e===void 0||e.call(t,t)}checkedIcon(t){return t.item_is_member?h`${this.checkIcon}`:h`&nbsp;`}get userListOptions(){const t=[];Vt.forEach(o=>{const i={label:h` <ia-icon-label>
          <div slot="icon">${this.checkedIcon(o)}</div>
          <div class="truncate">${o.name}</div>
        </ia-icon-label>`,id:o.id,selectedHandler:r=>this.onSelected(r)};t.push(i)});const e={label:h`<ia-icon-label>
        <div slot="icon">${this.addIcon}</div>
        Create new list
      </ia-icon-label>`,id:"create-new-list"};return t.push(e),t}onSelected(t){console.log("onSelected",t)}render(){return h` ${this.userListOptions.map(t=>this.renderOption(t))} `}static get styles(){return w`
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
    `}};c([m({type:String})],et.prototype,"identifier",void 0);et=c([j("item-userlists")],et);let f=class extends x{constructor(){super(...arguments),this.colorScheme="dark-bg",this.selectedOption=void 0,this.displayCaret=!0,this.openViaButton=!0,this.openViaCaret=!0,this.closeOnSelect=!1,this.includeSelectedOption=!1}get correctIcon(){const t=b`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#2c2c2c"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#fff"/></g></svg>`,e=b`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#fff"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#2c2c2c"/></g></svg>`;return this.colorScheme==="light-bg"?t:e}changeColors(){if(this.colorScheme==="light-bg"){this.colorScheme="dark-bg";return}this.colorScheme="light-bg"}get selectedOptionId(){var t;return((t=this.selectedOption)===null||t===void 0?void 0:t.id)||"inlibrary"}get iconForDropdown(){return b`
<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 100 100" fill="#F6C604">
  <path d="m100 100c-.0788644-59.2647367-50.2714038-101.00902058-98.53801845-99.98144054l-1.46198155.0442569v16.87562024c22.8467642.7675814 42.5293949 8.6269128 58.4998247 24.6886733 15.7693479 15.8548913 23.4604084 35.3676837 24.3442587 57.6217172l.0272163.7511729zm-35.0356755 0c1.2744013-36.4110804-31.8141828-66.5076376-63.9896269-64.941512l-.9746976.0571761v16.4599701c18.3229442 1.9606235 31.4808606 9.0936501 39.502426 21.3048035 4.6504757 7.0775287 7.5752956 15.864554 8.7788978 26.3313997l.087043.7881626zm-51.8428762-.0000003c6.9413142-.0063426 12.8048731-5.8658088 12.877673-12.8772036.080713-7.5342784-5.4077681-13.1196268-12.8919165-13.1227964-7.21668788-.0015839-13.2669944 6.0654513-13.10398588 13.1338879.16300852 6.7911498 6.35891488 12.8724454 13.11822938 12.8661121z" fill-rule="evenodd"/>
  </svg>
   `}get checkIcon(){return b`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 17.5px; height: 17.5px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get addIcon(){return b`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="width: 17.5px; height: 17.5px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}get slottedCaretUp(){return b`<svg
    slot="caret-up"
    class="caret-up-svg"
    style="height: 10px; width: 10px;"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m5 3 5 5h-10z" fill="" fill-rule="evenodd" />
  </svg>`}get slottedCaretDown(){return b`<svg
    slot="caret-down"
    class="caret-down-svg"
    style="height: 10px; width: 10px;"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m5 8 5-5h-10z" fill="" fill-rule="evenodd" />
  </svg>`}checkboxRowTemplate(t){var e,o,i;return h`
      <div>
        <input
          type="checkbox"
          id=${t.id}
          ?checked=${(e=t.isChecked)!==null&&e!==void 0?e:!1}
          ?disabled=${(o=t.isDisabled)!==null&&o!==void 0?o:!1}
          @change=${(i=t.onChange)!==null&&i!==void 0?i:p}
        />
        <label for=${t.id}>${t.label}</label>
      </div>
    `}addButton(t){return h`
      <button class="action-bar-text">
        <ia-icon-label>
          <div slot="icon" class="icon-img">
            ${t?this.checkIcon:this.addIcon}
          </div>
          <div>Add Item to List</div>
        </ia-icon-label>
      </button>
    `}render(){const t=this.selectedOptionId==="foo-bar";return h`
      <section><h2>Testing dropdown</h2></section>

      ${this.checkboxRowTemplate({id:"display-caret-check",label:"Display caret",isChecked:this.displayCaret,onChange:()=>{this.displayCaret=this.displayCaretCheck.checked,this.displayCaret||(this.openViaCaret=!1,this.openViaCaretCheck.checked=!1)}})}
      ${this.checkboxRowTemplate({id:"open-via-button",label:"Open via button",isChecked:this.openViaButton,onChange:()=>{this.openViaButton=this.openViaButtonCheck.checked}})}
      ${this.checkboxRowTemplate({id:"open-via-caret",label:"Open via caret",isChecked:this.openViaCaret,isDisabled:!this.displayCaret,onChange:()=>{this.openViaCaret=this.openViaCaretCheck.checked}})}
      ${this.checkboxRowTemplate({id:"close-on-select",label:"Close dropdown upon selection",isChecked:this.closeOnSelect,onChange:()=>{this.closeOnSelect=this.closeOnSelectCheck.checked}})}
      ${this.checkboxRowTemplate({id:"include-selected-option",label:"Include selected option in dropdown",isChecked:this.includeSelectedOption,onChange:()=>{this.includeSelectedOption=this.includeSelectedOptionCheck.checked}})}

      <button class="change-color" @click=${()=>this.changeColors()}>
        change colors
      </button>

      <ia-dropdown
        class=${this.colorScheme}
        ?displayCaret=${this.displayCaret}
        ?openViaButton=${this.openViaButton}
        ?openViaCaret=${this.openViaCaret}
        ?closeOnSelect=${this.closeOnSelect}
        ?includeSelectedOption=${this.includeSelectedOption}
        selectedOption=${this.selectedOptionId}
        .options=${[{url:"https://archive.org/details/inlibrary",selectedHandler:e=>this.onSelected(e),label:h`<ia-icon-label>
              <div slot="icon">${this.iconForDropdown}</div>
              Archive.org/inlibrary
            </ia-icon-label>`,id:"inlibrary"},{selectedHandler:e=>this.onSelected(e),label:h` <ia-icon-label
              class="invert-icon-at-hover invert-icon-at-selected ${t?"selected":""}"
            >
              <div slot="icon">${this.iconForDropdown}</div>
              Select this option
            </ia-icon-label>`,id:"foo-bar"},{selectedHandler:e=>this.onSelected(e),label:h`<p>Third option, just a label</p>`,id:"bar-foo"}]}
      >
        <div slot="dropdown-label">${this.correctIcon}</div>
      </ia-dropdown>
      <hr />
      <section><h2>Testing slotted caret</h2></section>

      <div class="slotted-test">
        <ia-dropdown
          class="slotted-caret"
          ?displaycaret=${!0}
          ?openViaButton=${!1}
          ?openViaCaret=${!0}
          ?closeOnSelect=${!1}
          ?includeSelectedOption=${this.includeSelectedOption}
          selectedOption=${this.selectedOptionId}
          .options=${[{url:"https://archive.org/details/inlibrary",selectedHandler:e=>this.onSelected(e),label:h`<ia-icon-label>
                <div slot="icon">${this.iconForDropdown}</div>
                Archive.org/inlibrary
              </ia-icon-label>`,id:"inlibrary"},{selectedHandler:e=>this.onSelected(e),label:h` <ia-icon-label
                class="invert-icon-at-hover invert-icon-at-selected ${t?"selected":""}"
              >
                <div slot="icon">${this.iconForDropdown}</div>
                Select this option
              </ia-icon-label>`,id:"foo-bar"},{selectedHandler:e=>this.onSelected(e),label:h`<p>Third option, just a label</p>`,id:"bar-foo"}]}
        >
          <div class="list-title" slot="dropdown-label">My Lists</div>
          ${this.slottedCaretUp} ${this.slottedCaretDown}
        </ia-dropdown>
      </div>

      <hr />
      <section><h2>Testing userlist check dropdown</h2></section>

      <div class="list-test">
        <ia-dropdown
          class="list-dropdown"
          ?displaycaret=${!1}
          ?openViaButton=${!0}
          ?openViaCaret=${!1}
          ?closeOnSelect=${!0}
          ?includeSelectedOption=${!0}
          ?isCustomList=${!0}
        >
          <div class="list-title" slot="dropdown-label">
            ${this.addButton(!0)}
          </div>
          <item-userlists slot="menu-slot"></item-userlists>
        </ia-dropdown>
      </div>
    `}onListClick(t){console.log("**** OPTION ",t),this.selectedOption=t}onSelected(t){console.log("**** OPTION ",t),this.selectedOption=t}};f.styles=w`
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
    .list-test {
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
    }

    button:hover {
      /* 10% 234 */
      background-color: /* #eaeaea */ rgba(44, 44, 44, 0.1);
    }

    button:focus,
    button:focus-visible {
      /* 20% */
      background-color: /* #d5d5d5 */ rgba(44, 44, 44, 0.3);
    }

    button:active {
      /* 30% */
      background-color: /* #c0c0c0 */ rgba(44, 44, 44, 0.3);
    }

    ia-dropdown.slotted-caret {
      --dropdownCaretColor: #222;
      --caretPadding: 0 0 6px 5px;
      --dropdownListPosition: relative;
    }

    .action-bar-text {
      --iconLabelFlexDirection: column;
      --iconLabelGutterWidth: 0;
      --iconWidth: 17.5px;
      background-color: #fff;
      padding: 5px 5px;
      border: 2px solid #2c2c2c;
    }

    svg {
      height: 30px;
      width: 30px;
    }
  `;c([m({type:String,attribute:!0,reflect:!0})],f.prototype,"colorScheme",void 0);c([m({type:Object})],f.prototype,"selectedOption",void 0);c([z()],f.prototype,"displayCaret",void 0);c([z()],f.prototype,"openViaButton",void 0);c([z()],f.prototype,"openViaCaret",void 0);c([z()],f.prototype,"closeOnSelect",void 0);c([z()],f.prototype,"includeSelectedOption",void 0);c([k("#display-caret-check")],f.prototype,"displayCaretCheck",void 0);c([k("#open-via-button")],f.prototype,"openViaButtonCheck",void 0);c([k("#open-via-caret")],f.prototype,"openViaCaretCheck",void 0);c([k("#close-on-select")],f.prototype,"closeOnSelectCheck",void 0);c([k("#include-selected-option")],f.prototype,"includeSelectedOptionCheck",void 0);c([k("#has-list")],f.prototype,"hasListCheck",void 0);f=c([j("app-root")],f);
