(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();function a(n,e,t,o){var i=arguments.length,r=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(n,e,t,o);else for(var d=n.length-1;d>=0;d--)(s=n[d])&&(r=(i<3?s(r):i>3?s(e,t,r):s(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=window,oe=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ie=Symbol(),re=new WeakMap;let fe=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==ie)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(oe&&e===void 0){const o=t!==void 0&&t.length===1;o&&(e=re.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&re.set(t,e))}return e}toString(){return this.cssText}};const Ce=n=>new fe(typeof n=="string"?n:n+"",void 0,ie),w=(n,...e)=>{const t=n.length===1?n[0]:e.reduce((o,i,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[r+1],n[0]);return new fe(t,n,ie)},Se=(n,e)=>{oe?n.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const o=document.createElement("style"),i=D.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,n.appendChild(o)})},ne=oe?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(const o of e.cssRules)t+=o.cssText;return Ce(t)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var F;const V=window,se=V.trustedTypes,ke=se?se.emptyScript:"",le=V.reactiveElementPolyfillSupport,Q={toAttribute(n,e){switch(e){case Boolean:n=n?ke:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},me=(n,e)=>e!==n&&(e==e||n==n),K={attribute:!0,type:String,converter:Q,reflect:!1,hasChanged:me},Y="finalized";let E=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,o)=>{const i=this._$Ep(o,t);i!==void 0&&(this._$Ev.set(i,o),e.push(i))}),e}static createProperty(e,t=K){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||K}static finalize(){if(this.hasOwnProperty(Y))return!1;this[Y]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of o)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const o=new Set(e.flat(1/0).reverse());for(const i of o)t.unshift(ne(i))}else e!==void 0&&t.push(ne(e));return t}static _$Ep(e,t){const o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return Se(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=K){var i;const r=this.constructor._$Ep(e,o);if(r!==void 0&&o.reflect===!0){const s=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:Q).toAttribute(t,o.type);this._$El=e,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var o;const i=this.constructor,r=i._$Ev.get(e);if(r!==void 0&&this._$El!==r){const s=i.getPropertyOptions(r),d=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:Q;this._$El=r,this[r]=d.fromAttribute(t,s.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||me)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,r)=>this[r]=i),this._$Ei=void 0);let t=!1;const o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var r;return(r=i.hostUpdate)===null||r===void 0?void 0:r.call(i)}),this.update(o)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};E[Y]=!0,E.elementProperties=new Map,E.elementStyles=[],E.shadowRootOptions={mode:"open"},le==null||le({ReactiveElement:E}),((F=V.reactiveElementVersions)!==null&&F!==void 0?F:V.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var G;const N=window,O=N.trustedTypes,de=O?O.createPolicy("lit-html",{createHTML:n=>n}):void 0,ee="$lit$",x=`lit$${(Math.random()+"").slice(9)}$`,be="?"+x,Ae=`<${be}>`,k=document,R=()=>k.createComment(""),H=n=>n===null||typeof n!="object"&&typeof n!="function",we=Array.isArray,Ee=n=>we(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",q=`[ 	
\f\r]`,T=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ae=/-->/g,ce=/>/g,C=RegExp(`>|${q}(?:([^\\s"'>=/]+)(${q}*=${q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,pe=/"/g,$e=/^(?:script|style|textarea|title)$/i,ye=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),h=ye(1),$=ye(2),B=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),ue=new WeakMap,S=k.createTreeWalker(k,129,null,!1);function xe(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return de!==void 0?de.createHTML(e):e}const Oe=(n,e)=>{const t=n.length-1,o=[];let i,r=e===2?"<svg>":"",s=T;for(let d=0;d<t;d++){const l=n[d];let c,u,v=-1,m=0;for(;m<l.length&&(s.lastIndex=m,u=s.exec(l),u!==null);)m=s.lastIndex,s===T?u[1]==="!--"?s=ae:u[1]!==void 0?s=ce:u[2]!==void 0?($e.test(u[2])&&(i=RegExp("</"+u[2],"g")),s=C):u[3]!==void 0&&(s=C):s===C?u[0]===">"?(s=i??T,v=-1):u[1]===void 0?v=-2:(v=s.lastIndex-u[2].length,c=u[1],s=u[3]===void 0?C:u[3]==='"'?pe:he):s===pe||s===he?s=C:s===ae||s===ce?s=T:(s=C,i=void 0);const y=s===C&&n[d+1].startsWith("/>")?" ":"";r+=s===T?l+Ae:v>=0?(o.push(c),l.slice(0,v)+ee+l.slice(v)+x+y):l+x+(v===-2?(o.push(void 0),d):y)}return[xe(n,r+(n[t]||"<?>")+(e===2?"</svg>":"")),o]};class I{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let r=0,s=0;const d=e.length-1,l=this.parts,[c,u]=Oe(e,t);if(this.el=I.createElement(c,o),S.currentNode=this.el.content,t===2){const v=this.el.content,m=v.firstChild;m.remove(),v.append(...m.childNodes)}for(;(i=S.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const v=[];for(const m of i.getAttributeNames())if(m.endsWith(ee)||m.startsWith(x)){const y=u[s++];if(v.push(m),y!==void 0){const _e=i.getAttribute(y.toLowerCase()+ee).split(x),U=/([.?@])?(.*)/.exec(y);l.push({type:1,index:r,name:U[2],strings:_e,ctor:U[1]==="."?Le:U[1]==="?"?Te:U[1]==="@"?Re:W})}else l.push({type:6,index:r})}for(const m of v)i.removeAttribute(m)}if($e.test(i.tagName)){const v=i.textContent.split(x),m=v.length-1;if(m>0){i.textContent=O?O.emptyScript:"";for(let y=0;y<m;y++)i.append(v[y],R()),S.nextNode(),l.push({type:2,index:++r});i.append(v[m],R())}}}else if(i.nodeType===8)if(i.data===be)l.push({type:2,index:r});else{let v=-1;for(;(v=i.data.indexOf(x,v+1))!==-1;)l.push({type:7,index:r}),v+=x.length-1}r++}}static createElement(e,t){const o=k.createElement("template");return o.innerHTML=e,o}}function L(n,e,t=n,o){var i,r,s,d;if(e===B)return e;let l=o!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[o]:t._$Cl;const c=H(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(n),l._$AT(n,t,o)),o!==void 0?((s=(d=t)._$Co)!==null&&s!==void 0?s:d._$Co=[])[o]=l:t._$Cl=l),l!==void 0&&(e=L(n,l._$AS(n,e.values),l,o)),e}class Be{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:o},parts:i}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:k).importNode(o,!0);S.currentNode=r;let s=S.nextNode(),d=0,l=0,c=i[0];for(;c!==void 0;){if(d===c.index){let u;c.type===2?u=new z(s,s.nextSibling,this,e):c.type===1?u=new c.ctor(s,c.name,c.strings,this,e):c.type===6&&(u=new He(s,this,e)),this._$AV.push(u),c=i[++l]}d!==(c==null?void 0:c.index)&&(s=S.nextNode(),d++)}return S.currentNode=k,r}v(e){let t=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}}class z{constructor(e,t,o,i){var r;this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cp=(r=i==null?void 0:i.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=L(this,e,t),H(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==B&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Ee(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==p&&H(this._$AH)?this._$AA.nextSibling.data=e:this.$(k.createTextNode(e)),this._$AH=e}g(e){var t;const{values:o,_$litType$:i}=e,r=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=I.createElement(xe(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(o);else{const s=new Be(r,this),d=s.u(this.options);s.v(o),this.$(d),this._$AH=s}}_$AC(e){let t=ue.get(e.strings);return t===void 0&&ue.set(e.strings,t=new I(e)),t}T(e){we(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let o,i=0;for(const r of e)i===t.length?t.push(o=new z(this.k(R()),this.k(R()),this,this.options)):o=t[i],o._$AI(r),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){const i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class W{constructor(e,t,o,i,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=p}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){const r=this.strings;let s=!1;if(r===void 0)e=L(this,e,t,0),s=!H(e)||e!==this._$AH&&e!==B,s&&(this._$AH=e);else{const d=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=L(this,d[o+l],t,l),c===B&&(c=this._$AH[l]),s||(s=!H(c)||c!==this._$AH[l]),c===p?e=p:e!==p&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}s&&!i&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Le extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}const Pe=O?O.emptyScript:"";class Te extends W{constructor(){super(...arguments),this.type=4}j(e){e&&e!==p?this.element.setAttribute(this.name,Pe):this.element.removeAttribute(this.name)}}class Re extends W{constructor(e,t,o,i,r){super(e,t,o,i,r),this.type=5}_$AI(e,t=this){var o;if((e=(o=L(this,e,t,0))!==null&&o!==void 0?o:p)===B)return;const i=this._$AH,r=e===p&&i!==p||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==p&&(i===p||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}}class He{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){L(this,e)}}const ve=N.litHtmlPolyfillSupport;ve==null||ve(I,z),((G=N.litHtmlVersions)!==null&&G!==void 0?G:N.litHtmlVersions=[]).push("2.8.0");const Ie=(n,e,t)=>{var o,i;const r=(o=t==null?void 0:t.renderBefore)!==null&&o!==void 0?o:e;let s=r._$litPart$;if(s===void 0){const d=(i=t==null?void 0:t.renderBefore)!==null&&i!==void 0?i:null;r._$litPart$=s=new z(e.insertBefore(R(),d),d,void 0,t??{})}return s._$AI(n),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,J;class _ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ie(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return B}}_.finalized=!0,_._$litElement$=!0,(Z=globalThis.litElementHydrateSupport)===null||Z===void 0||Z.call(globalThis,{LitElement:_});const ge=globalThis.litElementPolyfillSupport;ge==null||ge({LitElement:_});((J=globalThis.litElementVersions)!==null&&J!==void 0?J:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const j=n=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(n,e):((t,o)=>{const{kind:i,elements:r}=o;return{kind:i,elements:r,finisher(s){customElements.define(t,s)}}})(n,e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ze=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},Ue=(n,e,t)=>{e.constructor.createProperty(t,n)};function f(n){return(e,t)=>t!==void 0?Ue(n,e,t):ze(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(n){return f({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De=({finisher:n,descriptor:e})=>(t,o)=>{var i;if(o===void 0){const r=(i=t.originalKey)!==null&&i!==void 0?i:t.key,s=e!=null?{kind:"method",placement:"prototype",key:r,descriptor:e(t.key)}:{...t,key:r};return n!=null&&(s.finisher=function(d){n(d,r)}),s}{const r=t.constructor;e!==void 0&&Object.defineProperty(t,o,e(o)),n==null||n(r,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function P(n,e){return De({descriptor:t=>{const o={get(){var i,r;return(r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0};if(e){const i=typeof t=="symbol"?Symbol():"__"+t;o.get=function(){var r,s;return this[i]===void 0&&(this[i]=(s=(r=this.renderRoot)===null||r===void 0?void 0:r.querySelector(n))!==null&&s!==void 0?s:null),this[i]}}return o}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var X;((X=window.HTMLSlotElement)===null||X===void 0?void 0:X.prototype.assignedElements)!=null;let b=class extends _{constructor(){super(...arguments),this.open=!1,this.displayCaret=!1,this.closeOnSelect=!1,this.openViaButton=!0,this.openViaCaret=!0,this.includeSelectedOption=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{},this.isCustomList=!1,this.closeOnEscape=!1,this.boundKeyboardListener=e=>{switch(e.key){case"Escape":case"Esc":this.open=!1;break}},this.handlingCaretClick=!1}disconnectedCallback(){var e;(e=super.disconnectedCallback)===null||e===void 0||e.call(this),this.removeKeyboardListener()}setupKeyboardListener(){this.closeOnEscape&&document.addEventListener("keydown",this.boundKeyboardListener)}removeKeyboardListener(){this.closeOnEscape&&document.removeEventListener("keydown",this.boundKeyboardListener)}get dropdownState(){return this.open?(this.setupKeyboardListener(),"open"):(this.removeKeyboardListener(),"closed")}async firstUpdated(){await new Promise(e=>setTimeout(e,0)),this.addEventListener("closeDropdown",()=>{this.open=!1})}renderOption(e){const{label:t,url:o=void 0,id:i}=e;let r;const s=this.selectedOption===i?"selected":"";return o?r=h`<a
        href=${o}
        @click=${()=>this.optionClicked(e)}
        >${t}</a
      >`:r=h`<button
        @click=${()=>this.optionClicked(e)}
      >
        ${t}
      </button>`,h`<li class=${s}>${r}</li>`}optionClicked(e){var t;this.selectedOption!==e.id&&(this.selectedOption=e.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),(t=e.selectedHandler)===null||t===void 0||t.call(e,e)),this.closeOnSelect&&(this.open=!1)}toggleOptions(){this.open=!this.open}mainButtonClicked(){if(this.handlingCaretClick){this.handlingCaretClick=!1;return}this.openViaButton&&this.toggleOptions()}caretInteracted(){this.openViaCaret&&this.toggleOptions()}caretClicked(){this.handlingCaretClick=!0,this.caretInteracted()}caretKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.caretInteracted())}get caretUp(){return $`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
      fill=""></path>
  </svg>`}get caretDown(){return $`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
    <path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
    fill=""></path>
  </svg>`}get availableOptions(){return this.includeSelectedOption?this.options:this.options.filter(e=>this.selectedOption!==e.id)}get dropdownFormat(){return this.isCustomList?h`<slot name="list"></slot>`:h`${this.availableOptions.map(e=>this.renderOption(e))}`}render(){return h`
      <div class="ia-dropdown-group">
        <button class="click-main" @click=${this.mainButtonClicked}>
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
    `}static get styles(){const e=w`var(--dropdownBorderWidth, 1px)`,t=w`var(--dropdownBorderRadius, 4px)`,o=w`var(--dropdownBorderColor, #fff)`,i=w`var(--dropdownBgColor, #333)`,r=w`var(--dropdownTextColor, #fff)`,s=w`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`,d=w`var(--dropdownSelectedBgColor, #fff)`;return w`
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
        border: var(--dropdownMainButtonBorder, none);
        border-radius: var(--dropdownMainButtonBorderRadius, none);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
        flex-wrap: nowrap;
        flex-direction: var(--dropdownMainButtonFlexDirection, row);
      }

      button slot {
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

        border-top: var(--dropdownBorderTopWidth, ${e}) solid
          ${o};
        border-right: var(--dropdownBorderRightWidth, ${e})
          solid ${o};
        border-bottom: var(--dropdownBorderBottomWidth, ${e})
          solid ${o};
        border-left: var(--dropdownBorderLeftWidth, ${e})
          solid ${o};

        border-radius: var(
            --dropdownBorderTopLeftRadius,
            ${t}
          )
          var(--dropdownBorderTopRightRadius, ${t})
          var(--dropdownBorderBottomRightRadius, ${t})
          var(--dropdownBorderBottomLeftRadius, ${t});

        white-space: var(--dropdownWhiteSpace, normal);
      }

      ul.dropdown-main {
        background: ${i};
        /* Prevent top/bottom inner li from overlapping inner border */
        overflow: hidden;
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
    `}};a([f({type:Boolean,attribute:!0})],b.prototype,"open",void 0);a([f({type:Boolean,attribute:!0})],b.prototype,"displayCaret",void 0);a([f({type:Boolean,attribute:!0})],b.prototype,"closeOnSelect",void 0);a([f({type:Boolean,attribute:!0})],b.prototype,"openViaButton",void 0);a([f({type:Boolean,attribute:!0})],b.prototype,"openViaCaret",void 0);a([f({type:Boolean,attribute:!0})],b.prototype,"includeSelectedOption",void 0);a([f({type:String,attribute:!0})],b.prototype,"selectedOption",void 0);a([f({type:Array})],b.prototype,"options",void 0);a([f({type:String})],b.prototype,"optionGroup",void 0);a([f({type:Function})],b.prototype,"optionSelected",void 0);a([f({type:Boolean,reflect:!0})],b.prototype,"isCustomList",void 0);a([f({type:Boolean,reflect:!0})],b.prototype,"closeOnEscape",void 0);a([P(".click-main")],b.prototype,"mainButton",void 0);b=a([j("ia-dropdown")],b);let te=class extends _{render(){return h`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};te.styles=w`
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
  `;te=a([j("ia-icon-label")],te);let M=class extends _{constructor(){super(...arguments),this.identifier="Flash",this.lists=[]}get checkIcon(){return $`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="height: 12px; width: 12px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get plusIcon(){return $`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="height: 12px; width: 12px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}renderUserlistOption(e){const{label:t,isSelected:o,id:i}=e,r=o?"selected":"",s=h`<button
      id="${i}"
      @click=${()=>this.optionClicked(e)}
    >
      ${t}
    </button> `;return h`<li class=${r}>${s}</li>`}optionClicked(e){var t;this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),(t=e.selectedHandler)===null||t===void 0||t.call(e,e)}checkedIcon(e){return e?h`${this.checkIcon}`:h`<div style="width: 12px; height: 12px;"></div>`}get userListOptions(){const e=[];this.lists.forEach(o=>{const i={label:h` <ia-icon-label>
          <div slot="icon">${this.checkedIcon(o.item_is_member)}</div>
          <div class="truncate">${o.name}</div>
        </ia-icon-label>`,id:o.id,selectedHandler:r=>this.onSelected(r)};e.push(i)});const t={label:h`<ia-icon-label>
        <div slot="icon">${this.plusIcon}</div>
        Create new list
      </ia-icon-label>`,id:"create-new-list",selectedHandler:o=>this.onSelected(o)};return e.push(t),e}onSelected(e){let t=0;this.lists=this.lists.map(o=>(o.id===e.id&&(o.item_is_member=!o.item_is_member),o.item_is_member&&(t+=1),o)),this.dispatchEvent(new CustomEvent("selectDropdown",{detail:{selected:t},bubbles:!0,composed:!0})),console.log("onSelected",e),this.closeDropdown()}closeDropdown(){this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))}render(){return h`
      ${this.userListOptions.map(e=>this.renderUserlistOption(e))}
    `}static get styles(){return w`
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
    `}};a([f({type:String})],M.prototype,"identifier",void 0);a([f({type:Array})],M.prototype,"lists",void 0);M=a([j("item-userlists")],M);const Ve=[{name:"A very long list name that will wrap to the next line and then some",item_is_member:!0,id:"0"},{name:"Silver age comics are the best",item_is_member:!0,id:"1"},{name:"Old reel leaders",item_is_member:!1,id:"2"},{name:"Microsoft stuff",item_is_member:!0,id:"3"},{name:"Radio shows from the golden age of radio",item_is_member:!1,id:"4"}];let g=class extends _{constructor(){super(),this.colorScheme="dark-bg",this.selectedOption=void 0,this.displayCaret=!0,this.openViaButton=!0,this.openViaCaret=!0,this.closeOnSelect=!1,this.includeSelectedOption=!1,this.selectedCount=0,this.userlistData=[],this.userlistData=[...Ve],this.selectedCount=this.userlistData.filter(t=>t.item_is_member).length;const e=t=>{this.selectedCount=t.detail.selected,console.log("Selected count: ",t.detail.selected)};this.addEventListener("selectDropdown",e)}get correctIcon(){const e=$`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#2c2c2c"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#fff"/></g></svg>`,t=$`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#fff"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#2c2c2c"/></g></svg>`;return this.colorScheme==="light-bg"?e:t}changeColors(){if(this.colorScheme==="light-bg"){this.colorScheme="dark-bg";return}this.colorScheme="light-bg"}get selectedOptionId(){var e;return((e=this.selectedOption)===null||e===void 0?void 0:e.id)||"inlibrary"}get iconForDropdown(){return $`
<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 100 100" fill="#F6C604">
  <path d="m100 100c-.0788644-59.2647367-50.2714038-101.00902058-98.53801845-99.98144054l-1.46198155.0442569v16.87562024c22.8467642.7675814 42.5293949 8.6269128 58.4998247 24.6886733 15.7693479 15.8548913 23.4604084 35.3676837 24.3442587 57.6217172l.0272163.7511729zm-35.0356755 0c1.2744013-36.4110804-31.8141828-66.5076376-63.9896269-64.941512l-.9746976.0571761v16.4599701c18.3229442 1.9606235 31.4808606 9.0936501 39.502426 21.3048035 4.6504757 7.0775287 7.5752956 15.864554 8.7788978 26.3313997l.087043.7881626zm-51.8428762-.0000003c6.9413142-.0063426 12.8048731-5.8658088 12.877673-12.8772036.080713-7.5342784-5.4077681-13.1196268-12.8919165-13.1227964-7.21668788-.0015839-13.2669944 6.0654513-13.10398588 13.1338879.16300852 6.7911498 6.35891488 12.8724454 13.11822938 12.8661121z" fill-rule="evenodd"/>
  </svg>
   `}get checkIcon(){return $`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 17.5px; height: 17.5px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`}get plusIcon(){return $`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="width: 17.5px; height: 17.5px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`}get slottedCaretUp(){return $`<svg
    slot="caret-up"
    class="caret-up-svg"
    style="height: 10px; width: 10px;"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m5 3 5 5h-10z" fill="" fill-rule="evenodd" />
  </svg>`}get slottedCaretDown(){return $`<svg
    slot="caret-down"
    class="caret-down-svg"
    style="height: 10px; width: 10px;"
    height="10"
    viewBox="0 0 10 10"
    width="10"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="m5 8 5-5h-10z" fill="" fill-rule="evenodd" />
  </svg>`}checkboxRowTemplate(e){var t,o,i;return h`
      <div>
        <input
          type="checkbox"
          id=${e.id}
          ?checked=${(t=e.isChecked)!==null&&t!==void 0?t:!1}
          ?disabled=${(o=e.isDisabled)!==null&&o!==void 0?o:!1}
          @change=${(i=e.onChange)!==null&&i!==void 0?i:p}
        />
        <label for=${e.id}>${e.label}</label>
      </div>
    `}get mainButton(){return h`
      <div class="action-bar-text">
        <ia-icon-label>
          <div slot="icon" class="icon-img">
            ${this.selectedCount>0?this.checkIcon:this.plusIcon}
          </div>
          <div class="label">Add Item to List</div>
          <div class="label-sm">Lists</div>
        </ia-icon-label>
      </div>
    `}get itemUserlists(){return h`
      <item-userlists slot="list" .lists=${this.userlistData}></item-userlists>
    `}render(){const e=this.selectedOptionId==="foo-bar";return h`
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
        .options=${[{url:"https://archive.org/details/inlibrary",selectedHandler:t=>this.onSelected(t),label:h`<ia-icon-label>
              <div slot="icon">${this.iconForDropdown}</div>
              Archive.org/inlibrary
            </ia-icon-label>`,id:"inlibrary"},{selectedHandler:t=>this.onSelected(t),label:h` <ia-icon-label
              class="invert-icon-at-hover invert-icon-at-selected ${e?"selected":""}"
            >
              <div slot="icon">${this.iconForDropdown}</div>
              Select this option
            </ia-icon-label>`,id:"foo-bar"},{selectedHandler:t=>this.onSelected(t),label:h`<p>Third option, just a label</p>`,id:"bar-foo"}]}
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
          .options=${[{url:"https://archive.org/details/inlibrary",selectedHandler:t=>this.onSelected(t),label:h`<ia-icon-label>
                <div slot="icon">${this.iconForDropdown}</div>
                Archive.org/inlibrary
              </ia-icon-label>`,id:"inlibrary"},{selectedHandler:t=>this.onSelected(t),label:h` <ia-icon-label
                class="invert-icon-at-hover invert-icon-at-selected ${e?"selected":""}"
              >
                <div slot="icon">${this.iconForDropdown}</div>
                Select this option
              </ia-icon-label>`,id:"foo-bar"},{selectedHandler:t=>this.onSelected(t),label:h`<p>Third option, just a label</p>`,id:"bar-foo"}]}
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
          ?closeOnEscape=${!0}
        >
          <div class="list-title" slot="dropdown-label">${this.mainButton}</div>
          ${this.itemUserlists}
        </ia-dropdown>
      </div>
    `}onSelected(e){console.log("**** OPTION ",e),this.selectedOption=e}};g.styles=w`
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
      --buttonSlotPaddingRight: 0;
      --dropdownMainButtonFlexDirection: column;
      --dropdownMainButtonPadding: 5px 5px;
      --iconLabelGutterWidth: 0;
      --iconWidth: 17.5px;
      --dropdownMainButtonBorder: 2px solid #2c2c2c;
      --dropdownMainButtonBorderRadius: 3px;
    }

    .list-title button:hover {
      /* 10% */
      background-color: /* #eaeaea */ rgba(44, 44, 44, 0.1);
    }

    .list-title button:active {
      /* 30% */
      background-color: /* #c0c0c0 */ rgba(44, 44, 44, 0.3);
    }

    ia-dropdown.slotted-caret {
      --dropdownCaretColor: #222;
      --caretPadding: 0 0 6px 5px;
      --dropdownListPosition: relative;
    }

    .action-bar-text {
      font-weight: normal;
      --iconLabelFlexDirection: column;
      --iconLabelGutterWidth: 0;
      --iconWidth: 17.5px;
      background-color: #fff;
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
  `;a([f({type:String,attribute:!0,reflect:!0})],g.prototype,"colorScheme",void 0);a([f({type:Object})],g.prototype,"selectedOption",void 0);a([A()],g.prototype,"displayCaret",void 0);a([A()],g.prototype,"openViaButton",void 0);a([A()],g.prototype,"openViaCaret",void 0);a([A()],g.prototype,"closeOnSelect",void 0);a([A()],g.prototype,"includeSelectedOption",void 0);a([A()],g.prototype,"selectedCount",void 0);a([A()],g.prototype,"userlistData",void 0);a([P("#display-caret-check")],g.prototype,"displayCaretCheck",void 0);a([P("#open-via-button")],g.prototype,"openViaButtonCheck",void 0);a([P("#open-via-caret")],g.prototype,"openViaCaretCheck",void 0);a([P("#close-on-select")],g.prototype,"closeOnSelectCheck",void 0);a([P("#include-selected-option")],g.prototype,"includeSelectedOptionCheck",void 0);g=a([j("app-root")],g);
