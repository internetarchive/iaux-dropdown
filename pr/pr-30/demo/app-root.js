(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();function p(n,t,e,o){var i=arguments.length,s=i<3?t:o===null?o=Object.getOwnPropertyDescriptor(t,e):o,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(n,t,e,o);else for(var d=n.length-1;d>=0;d--)(r=n[d])&&(s=(i<3?r(s):i>3?r(t,e,s):r(t,e))||s);return i>3&&s&&Object.defineProperty(t,e,s),s}/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const J=window,yt=J.ShadowRoot&&(J.ShadyCSS===void 0||J.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,_t=Symbol(),xt=new WeakMap;let Vt=class{constructor(t,e,o){if(this._$cssResult$=!0,o!==_t)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(yt&&t===void 0){const o=e!==void 0&&e.length===1;o&&(t=xt.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&xt.set(e,t))}return t}toString(){return this.cssText}};const ie=n=>new Vt(typeof n=="string"?n:n+"",void 0,_t),y=(n,...t)=>{const e=n.length===1?n[0]:t.reduce((o,i,s)=>o+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+n[s+1],n[0]);return new Vt(e,n,_t)},se=(n,t)=>{yt?n.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const o=document.createElement("style"),i=J.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=e.cssText,n.appendChild(o)})},At=yt?n=>n:n=>n instanceof CSSStyleSheet?(t=>{let e="";for(const o of t.cssRules)e+=o.cssText;return ie(e)})(n):n;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var rt;const X=window,Ct=X.trustedTypes,ne=Ct?Ct.emptyScript:"",kt=X.reactiveElementPolyfillSupport,$t={toAttribute(n,t){switch(t){case Boolean:n=n?ne:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,t){let e=n;switch(t){case Boolean:e=n!==null;break;case Number:e=n===null?null:Number(n);break;case Object:case Array:try{e=JSON.parse(n)}catch{e=null}}return e}},Wt=(n,t)=>t!==n&&(t==t||n==n),lt={attribute:!0,type:String,converter:$t,reflect:!1,hasChanged:Wt},gt="finalized";let R=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,o)=>{const i=this._$Ep(o,e);i!==void 0&&(this._$Ev.set(i,o),t.push(i))}),t}static createProperty(t,e=lt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const o=typeof t=="symbol"?Symbol():"__"+t,i=this.getPropertyDescriptor(t,o,e);i!==void 0&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,o){return{get(){return this[e]},set(i){const s=this[t];this[e]=i,this.requestUpdate(t,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||lt}static finalize(){if(this.hasOwnProperty(gt))return!1;this[gt]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,o=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of o)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)e.unshift(At(i))}else t!==void 0&&e.push(At(t));return e}static _$Ep(t,e){const o=e.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,o;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return se(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostConnected)===null||o===void 0?void 0:o.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var o;return(o=e.hostDisconnected)===null||o===void 0?void 0:o.call(e)})}attributeChangedCallback(t,e,o){this._$AK(t,o)}_$EO(t,e,o=lt){var i;const s=this.constructor._$Ep(t,o);if(s!==void 0&&o.reflect===!0){const r=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:$t).toAttribute(e,o.type);this._$El=t,r==null?this.removeAttribute(s):this.setAttribute(s,r),this._$El=null}}_$AK(t,e){var o;const i=this.constructor,s=i._$Ev.get(t);if(s!==void 0&&this._$El!==s){const r=i.getPropertyOptions(s),d=typeof r.converter=="function"?{fromAttribute:r.converter}:((o=r.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?r.converter:$t;this._$El=s,this[s]=d.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,o){let i=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||Wt)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let e=!1;const o=this._$AL;try{e=this.shouldUpdate(o),e?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw e=!1,this._$Ek(),i}e&&this._$AE(o)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,o)=>this._$EO(o,this[o],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};R[gt]=!0,R.elementProperties=new Map,R.elementStyles=[],R.shadowRootOptions={mode:"open"},kt==null||kt({ReactiveElement:R}),((rt=X.reactiveElementVersions)!==null&&rt!==void 0?rt:X.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var dt;const Q=window,M=Q.trustedTypes,St=M?M.createPolicy("lit-html",{createHTML:n=>n}):void 0,mt="$lit$",C=`lit$${(Math.random()+"").slice(9)}$`,jt="?"+C,re=`<${jt}>`,P=document,Y=()=>P.createComment(""),j=n=>n===null||typeof n!="object"&&typeof n!="function",Kt=Array.isArray,le=n=>Kt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",at=`[ 	
\f\r]`,V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Bt=/-->/g,Et=/>/g,E=RegExp(`>|${at}(?:([^\\s"'>=/]+)(${at}*=${at}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ot=/'/g,Ht=/"/g,Ft=/^(?:script|style|textarea|title)$/i,K=Symbol.for("lit-noChange"),w=Symbol.for("lit-nothing"),Tt=new WeakMap,H=P.createTreeWalker(P,129,null,!1);function Zt(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return St!==void 0?St.createHTML(t):t}const de=(n,t)=>{const e=n.length-1,o=[];let i,s=t===2?"<svg>":"",r=V;for(let d=0;d<e;d++){const l=n[d];let a,c,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===V?c[1]==="!--"?r=Bt:c[1]!==void 0?r=Et:c[2]!==void 0?(Ft.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=E):c[3]!==void 0&&(r=E):r===E?c[0]===">"?(r=i??V,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?E:c[3]==='"'?Ht:Ot):r===Ht||r===Ot?r=E:r===Bt||r===Et?r=V:(r=E,i=void 0);const $=r===E&&n[d+1].startsWith("/>")?" ":"";s+=r===V?l+re:h>=0?(o.push(a),l.slice(0,h)+mt+l.slice(h)+C+$):l+C+(h===-2?(o.push(void 0),d):$)}return[Zt(n,s+(n[e]||"<?>")+(t===2?"</svg>":"")),o]};let ft=class qt{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0;const d=t.length-1,l=this.parts,[a,c]=de(t,e);if(this.el=qt.createElement(a,o),H.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=H.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const u of i.getAttributeNames())if(u.endsWith(mt)||u.startsWith(C)){const $=c[r++];if(h.push(u),$!==void 0){const nt=i.getAttribute($.toLowerCase()+mt).split(C),A=/([.?@])?(.*)/.exec($);l.push({type:1,index:s,name:A[2],strings:nt,ctor:A[1]==="."?ce:A[1]==="?"?pe:A[1]==="@"?ue:ot})}else l.push({type:6,index:s})}for(const u of h)i.removeAttribute(u)}if(Ft.test(i.tagName)){const h=i.textContent.split(C),u=h.length-1;if(u>0){i.textContent=M?M.emptyScript:"";for(let $=0;$<u;$++)i.append(h[$],Y()),H.nextNode(),l.push({type:2,index:++s});i.append(h[u],Y())}}}else if(i.nodeType===8)if(i.data===jt)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(C,h+1))!==-1;)l.push({type:7,index:s}),h+=C.length-1}s++}}static createElement(t,e){const o=P.createElement("template");return o.innerHTML=t,o}};function N(n,t,e=n,o){var i,s,r,d;if(t===K)return t;let l=o!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[o]:e._$Cl;const a=j(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,o)),o!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[o]=l:e._$Cl=l),l!==void 0&&(t=N(n,l._$AS(n,t.values),l,o)),t}let ae=class{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:P).importNode(o,!0);H.currentNode=s;let r=H.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let c;a.type===2?c=new Gt(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new ve(r,this,t)),this._$AV.push(c),a=i[++l]}d!==(a==null?void 0:a.index)&&(r=H.nextNode(),d++)}return H.currentNode=P,s}v(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}},Gt=class Jt{constructor(t,e,o,i){var s;this.type=2,this._$AH=w,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=N(this,t,e),j(t)?t===w||t==null||t===""?(this._$AH!==w&&this._$AR(),this._$AH=w):t!==this._$AH&&t!==K&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):le(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==w&&j(this._$AH)?this._$AA.nextSibling.data=t:this.$(P.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=ft.createElement(Zt(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(o);else{const r=new ae(s,this),d=r.u(this.options);r.v(o),this.$(d),this._$AH=r}}_$AC(t){let e=Tt.get(t.strings);return e===void 0&&Tt.set(t.strings,e=new ft(t)),e}T(t){Kt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new Jt(this.k(Y()),this.k(Y()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}},ot=class{constructor(t,e,o,i,s){this.type=1,this._$AH=w,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=w}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const s=this.strings;let r=!1;if(s===void 0)t=N(this,t,e,0),r=!j(t)||t!==this._$AH&&t!==K,r&&(this._$AH=t);else{const d=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=N(this,d[o+l],e,l),a===K&&(a=this._$AH[l]),r||(r=!j(a)||a!==this._$AH[l]),a===w?t=w:t!==w&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===w?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}},ce=class extends ot{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===w?void 0:t}};const he=M?M.emptyScript:"";let pe=class extends ot{constructor(){super(...arguments),this.type=4}j(t){t&&t!==w?this.element.setAttribute(this.name,he):this.element.removeAttribute(this.name)}},ue=class extends ot{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){var o;if((t=(o=N(this,t,e,0))!==null&&o!==void 0?o:w)===K)return;const i=this._$AH,s=t===w&&i!==w||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==w&&(i===w||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},ve=class{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t)}};const Pt=Q.litHtmlPolyfillSupport;Pt==null||Pt(ft,Gt),((dt=Q.litHtmlVersions)!==null&&dt!==void 0?dt:Q.litHtmlVersions=[]).push("2.8.0");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var ct;const tt=window,I=tt.trustedTypes,Lt=I?I.createPolicy("lit-html",{createHTML:n=>n}):void 0,bt="$lit$",k=`lit$${(Math.random()+"").slice(9)}$`,Xt="?"+k,$e=`<${Xt}>`,L=document,F=()=>L.createComment(""),Z=n=>n===null||typeof n!="object"&&typeof n!="function",Qt=Array.isArray,ge=n=>Qt(n)||typeof(n==null?void 0:n[Symbol.iterator])=="function",ht=`[ 	
\f\r]`,W=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Dt=/-->/g,Rt=/>/g,O=RegExp(`>|${ht}(?:([^\\s"'>=/]+)(${ht}*=${ht}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Mt=/'/g,Nt=/"/g,Yt=/^(?:script|style|textarea|title)$/i,te=n=>(t,...e)=>({_$litType$:n,strings:t,values:e}),v=te(1),_=te(2),U=Symbol.for("lit-noChange"),m=Symbol.for("lit-nothing"),It=new WeakMap,T=L.createTreeWalker(L,129,null,!1);function ee(n,t){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return Lt!==void 0?Lt.createHTML(t):t}const me=(n,t)=>{const e=n.length-1,o=[];let i,s=t===2?"<svg>":"",r=W;for(let d=0;d<e;d++){const l=n[d];let a,c,h=-1,u=0;for(;u<l.length&&(r.lastIndex=u,c=r.exec(l),c!==null);)u=r.lastIndex,r===W?c[1]==="!--"?r=Dt:c[1]!==void 0?r=Rt:c[2]!==void 0?(Yt.test(c[2])&&(i=RegExp("</"+c[2],"g")),r=O):c[3]!==void 0&&(r=O):r===O?c[0]===">"?(r=i??W,h=-1):c[1]===void 0?h=-2:(h=r.lastIndex-c[2].length,a=c[1],r=c[3]===void 0?O:c[3]==='"'?Nt:Mt):r===Nt||r===Mt?r=O:r===Dt||r===Rt?r=W:(r=O,i=void 0);const $=r===O&&n[d+1].startsWith("/>")?" ":"";s+=r===W?l+$e:h>=0?(o.push(a),l.slice(0,h)+bt+l.slice(h)+k+$):l+k+(h===-2?(o.push(void 0),d):$)}return[ee(n,s+(n[e]||"<?>")+(t===2?"</svg>":"")),o]};class q{constructor({strings:t,_$litType$:e},o){let i;this.parts=[];let s=0,r=0;const d=t.length-1,l=this.parts,[a,c]=me(t,e);if(this.el=q.createElement(a,o),T.currentNode=this.el.content,e===2){const h=this.el.content,u=h.firstChild;u.remove(),h.append(...u.childNodes)}for(;(i=T.nextNode())!==null&&l.length<d;){if(i.nodeType===1){if(i.hasAttributes()){const h=[];for(const u of i.getAttributeNames())if(u.endsWith(bt)||u.startsWith(k)){const $=c[r++];if(h.push(u),$!==void 0){const nt=i.getAttribute($.toLowerCase()+bt).split(k),A=/([.?@])?(.*)/.exec($);l.push({type:1,index:s,name:A[2],strings:nt,ctor:A[1]==="."?be:A[1]==="?"?ye:A[1]==="@"?_e:it})}else l.push({type:6,index:s})}for(const u of h)i.removeAttribute(u)}if(Yt.test(i.tagName)){const h=i.textContent.split(k),u=h.length-1;if(u>0){i.textContent=I?I.emptyScript:"";for(let $=0;$<u;$++)i.append(h[$],F()),T.nextNode(),l.push({type:2,index:++s});i.append(h[u],F())}}}else if(i.nodeType===8)if(i.data===Xt)l.push({type:2,index:s});else{let h=-1;for(;(h=i.data.indexOf(k,h+1))!==-1;)l.push({type:7,index:s}),h+=k.length-1}s++}}static createElement(t,e){const o=L.createElement("template");return o.innerHTML=t,o}}function z(n,t,e=n,o){var i,s,r,d;if(t===U)return t;let l=o!==void 0?(i=e._$Co)===null||i===void 0?void 0:i[o]:e._$Cl;const a=Z(t)?void 0:t._$litDirective$;return(l==null?void 0:l.constructor)!==a&&((s=l==null?void 0:l._$AO)===null||s===void 0||s.call(l,!1),a===void 0?l=void 0:(l=new a(n),l._$AT(n,e,o)),o!==void 0?((r=(d=e)._$Co)!==null&&r!==void 0?r:d._$Co=[])[o]=l:e._$Cl=l),l!==void 0&&(t=z(n,l._$AS(n,t.values),l,o)),t}class fe{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:o},parts:i}=this._$AD,s=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:L).importNode(o,!0);T.currentNode=s;let r=T.nextNode(),d=0,l=0,a=i[0];for(;a!==void 0;){if(d===a.index){let c;a.type===2?c=new G(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new xe(r,this,t)),this._$AV.push(c),a=i[++l]}d!==(a==null?void 0:a.index)&&(r=T.nextNode(),d++)}return T.currentNode=L,s}v(t){let e=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,e),e+=o.strings.length-2):o._$AI(t[e])),e++}}class G{constructor(t,e,o,i){var s;this.type=2,this._$AH=m,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=o,this.options=i,this._$Cp=(s=i==null?void 0:i.isConnected)===null||s===void 0||s}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=z(this,t,e),Z(t)?t===m||t==null||t===""?(this._$AH!==m&&this._$AR(),this._$AH=m):t!==this._$AH&&t!==U&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):ge(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==m&&Z(this._$AH)?this._$AA.nextSibling.data=t:this.$(L.createTextNode(t)),this._$AH=t}g(t){var e;const{values:o,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=q.createElement(ee(i.h,i.h[0]),this.options)),i);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===s)this._$AH.v(o);else{const r=new fe(s,this),d=r.u(this.options);r.v(o),this.$(d),this._$AH=r}}_$AC(t){let e=It.get(t.strings);return e===void 0&&It.set(t.strings,e=new q(t)),e}T(t){Qt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let o,i=0;for(const s of t)i===e.length?e.push(o=new G(this.k(F()),this.k(F()),this,this.options)):o=e[i],o._$AI(s),i++;i<e.length&&(this._$AR(o&&o._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,e);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class it{constructor(t,e,o,i,s){this.type=1,this._$AH=m,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=m}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,o,i){const s=this.strings;let r=!1;if(s===void 0)t=z(this,t,e,0),r=!Z(t)||t!==this._$AH&&t!==U,r&&(this._$AH=t);else{const d=t;let l,a;for(t=s[0],l=0;l<s.length-1;l++)a=z(this,d[o+l],e,l),a===U&&(a=this._$AH[l]),r||(r=!Z(a)||a!==this._$AH[l]),a===m?t=m:t!==m&&(t+=(a??"")+s[l+1]),this._$AH[l]=a}r&&!i&&this.j(t)}j(t){t===m?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class be extends it{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===m?void 0:t}}const we=I?I.emptyScript:"";class ye extends it{constructor(){super(...arguments),this.type=4}j(t){t&&t!==m?this.element.setAttribute(this.name,we):this.element.removeAttribute(this.name)}}class _e extends it{constructor(t,e,o,i,s){super(t,e,o,i,s),this.type=5}_$AI(t,e=this){var o;if((t=(o=z(this,t,e,0))!==null&&o!==void 0?o:m)===U)return;const i=this._$AH,s=t===m&&i!==m||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==m&&(i===m||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,o;typeof this._$AH=="function"?this._$AH.call((o=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}}class xe{constructor(t,e,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){z(this,t)}}const Ut=tt.litHtmlPolyfillSupport;Ut==null||Ut(q,G),((ct=tt.litHtmlVersions)!==null&&ct!==void 0?ct:tt.litHtmlVersions=[]).push("2.8.0");const Ae=(n,t,e)=>{var o,i;const s=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:t;let r=s._$litPart$;if(r===void 0){const d=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=r=new G(t.insertBefore(F(),d),d,void 0,e??{})}return r._$AI(n),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pt,ut;class S extends R{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const o=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=o.firstChild),o}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ae(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return U}}S.finalized=!0,S._$litElement$=!0,(pt=globalThis.litElementHydrateSupport)===null||pt===void 0||pt.call(globalThis,{LitElement:S});const zt=globalThis.litElementPolyfillSupport;zt==null||zt({LitElement:S});((ut=globalThis.litElementVersions)!==null&&ut!==void 0?ut:globalThis.litElementVersions=[]).push("3.3.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const st=n=>t=>typeof t=="function"?((e,o)=>(customElements.define(e,o),o))(n,t):((e,o)=>{const{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(r){customElements.define(e,r)}}})(n,t);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ce=(n,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(e){e.createProperty(t.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(e){e.createProperty(t.key,n)}},ke=(n,t,e)=>{t.constructor.createProperty(e,n)};function b(n){return(t,e)=>e!==void 0?ke(n,t,e):Ce(n,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function B(n){return b({...n,state:!0})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=({finisher:n,descriptor:t})=>(e,o)=>{var i;if(o===void 0){const s=(i=e.originalKey)!==null&&i!==void 0?i:e.key,r=t!=null?{kind:"method",placement:"prototype",key:s,descriptor:t(e.key)}:{...e,key:s};return n!=null&&(r.finisher=function(d){n(d,s)}),r}{const s=e.constructor;t!==void 0&&Object.defineProperty(e,o,t(o)),n==null||n(s,o)}};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function x(n,t){return oe({descriptor:e=>{const o={get(){var i,s;return(s=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(n))!==null&&s!==void 0?s:null},enumerable:!0,configurable:!0};if(t){const i=typeof e=="symbol"?Symbol():"__"+e;o.get=function(){var s,r;return this[i]===void 0&&(this[i]=(r=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&r!==void 0?r:null),this[i]}}return o}})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var vt;const Se=((vt=window.HTMLSlotElement)===null||vt===void 0?void 0:vt.prototype.assignedElements)!=null?(n,t)=>n.assignedElements(t):(n,t)=>n.assignedNodes(t).filter(e=>e.nodeType===Node.ELEMENT_NODE);function Be(n){const{slot:t,selector:e}=n??{};return oe({descriptor:o=>({get(){var i;const s="slot"+(t?`[name=${t}]`:":not([name])"),r=(i=this.renderRoot)===null||i===void 0?void 0:i.querySelector(s),d=r!=null?Se(r,n):[];return e?d.filter(l=>l.matches(e)):d},enumerable:!0,configurable:!0})})}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function D(n,t,e){return n?t():e==null?void 0:e()}const Ee=_`<svg class="caret-up-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499 3.51689722c.22976435.15317623.54019902.0910893.69337525-.13867505.13615665-.20423497.10222882-.47220946-.06836249-.63681849l-.07031256-.05655675-3.2773501-2.18490007-3.2773501 2.18490007c-.22976434.15317623-.29185128.4636109-.13867505.69337524.13615665.20423498.39656688.27598409.61412572.18182636l.07924953-.04315131 2.7226499-1.81402514z"
  fill=""></path>
</svg>`,Oe=_`<svg class="caret-down-svg" viewBox="0 0 8 4" xmlns="http://www.w3.org/2000/svg">
<path d="m6.7226499.58397485c.22976435-.15317623.54019902-.09108929.69337525.13867505.13615665.20423498.10222882.47220947-.06836249.63681849l-.07031256.05655676-3.2773501 2.18490006-3.2773501-2.18490006c-.22976434-.15317623-.29185128-.4636109-.13867505-.69337525.13615665-.20423497.39656688-.27598409.61412572-.18182636l.07924953.04315131 2.7226499 1.81402515z"
fill=""></path>
</svg>`;let g=class extends S{constructor(){super(...arguments),this.open=!1,this.isDisabled=!1,this.displayCaret=!1,this.closeOnSelect=!1,this.openViaButton=!0,this.usePopover=!1,this.includeSelectedOption=!1,this.selectedOption="",this.options=[],this.optionGroup="options",this.optionSelected=()=>{},this.isCustomList=!1,this.hasCustomClickHandler=!1,this.closeOnEscape=!1,this.closeOnBackdropClick=!1,this.boundKeyboardListener=t=>{switch(t.key){case"Escape":case"Esc":this.closeOptions();break}},this.closeOptions=t=>{t&&t.type==="click"&&t.stopPropagation(),this.open=!1,this.updatePopoverState()}}async firstUpdated(){await new Promise(t=>{setTimeout(t,0)}),this.addEventListener("closeDropdown",this.closeOptions)}willUpdate(t){t.has("open")&&this.updatePopoverState()}disconnectedCallback(){var t;(t=super.disconnectedCallback)===null||t===void 0||t.call(this),this.removeKeyboardListener()}setupKeyboardListener(){this.closeOnEscape&&document.addEventListener("keydown",this.boundKeyboardListener)}removeKeyboardListener(){this.closeOnEscape&&document.removeEventListener("keydown",this.boundKeyboardListener)}get dropdownState(){return this.open?(this.setupKeyboardListener(),"open"):(this.removeKeyboardListener(),"closed")}toggleOptions(){this.open=!this.open,this.updatePopoverState()}updatePopoverState(){var t,e;this.usePopover&&((e=(t=this.dropdownMenu)===null||t===void 0?void 0:t.togglePopover)===null||e===void 0||e.call(t,this.open),this.open&&this.positionDropdownMenu())}positionDropdownMenu(){if(!this.dropdownMenu)return;const t=this.container.getBoundingClientRect();this.dropdownMenu.style.left=`${t.left}px`,this.dropdownMenu.style.top=`${t.bottom}px`,this.dropdownMenu.style.minWidth=`${t.width}px`}mainButtonClicked(){var t;this.openViaButton?this.toggleOptions():(t=this.mainButtonLabelSlotted[0])===null||t===void 0||t.click()}mainButtonKeyDown(t){(t.key==="Enter"||t.key===" ")&&(this.mainButtonClicked(),t.preventDefault())}caretKeyDown(t){(t.key==="Enter"||t.key===" ")&&(this.toggleOptions(),t.preventDefault())}renderOption(t){const{label:e,url:o=void 0,id:i}=t;let s;const r=this.selectedOption===i?"selected":"";return o?s=v`<a
        href=${o}
        @click=${d=>this.optionClicked(d,t)}
        >${e}</a
      >`:s=v`<button
        @click=${d=>this.optionClicked(d,t)}
      >
        ${e}
      </button>`,v`<li role="menuitem" class=${r}>${s}</li>`}optionClicked(t,e){var o;t.stopPropagation(),this.selectedOption!==e.id&&(this.selectedOption=e.id,this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),(o=e.selectedHandler)===null||o===void 0||o.call(e,e)),this.closeOnSelect&&(this.closeOptions(),this.mainButton.focus())}get availableOptions(){return this.includeSelectedOption?this.options:this.options.filter(t=>this.selectedOption!==t.id)}get caretUpTemplate(){return v`
      <span ?hidden=${!this.open} class="caret-up">
        <slot name="caret-up">${Ee}</slot>
      </span>
    `}get caretDownTemplate(){return v`
      <span ?hidden=${this.open} class="caret-down">
        <slot name="caret-down">${Oe}</slot>
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
        @click=${D(this.shouldAttachEventHandlers,()=>this.toggleOptions)}
        @keydown=${D(this.shouldAttachEventHandlers,()=>this.caretKeyDown)}
        ?disabled=${this.isDisabled}
      >
        ${this.caretUpTemplate} ${this.caretDownTemplate}
      </button>
    `:v``}get dropdownTemplate(){return this.isCustomList?v`<slot name="list"></slot>`:v`${this.availableOptions.map(t=>this.renderOption(t))}`}get backdropTemplate(){return this.closeOnBackdropClick?this.open?v`
      <div
        id="dropdown-backdrop"
        @keyup=${this.closeOptions}
        @click=${this.closeOptions}
      ></div>
    `:v``:v``}get shouldNestCaretInButton(){return this.openViaButton}get shouldAttachEventHandlers(){return!this.isDisabled&&!this.hasCustomClickHandler}render(){return v`
      <div class="ia-dropdown-group">
        <div class="button-row">
          <button
            class="click-main"
            aria-haspopup=${this.openViaButton}
            aria-expanded=${this.open}
            @click=${D(this.shouldAttachEventHandlers,()=>this.mainButtonClicked)}
            @keydown=${D(this.shouldAttachEventHandlers,()=>this.mainButtonKeyDown)}
            ?disabled=${this.isDisabled}
          >
            <span class="sr-only" id="caret-label"
              >Toggle ${this.optionGroup}</span
            >
            <slot name="dropdown-label"></slot>
            ${D(this.shouldNestCaretInButton,()=>this.caretTemplate)}
          </button>
          ${D(!this.shouldNestCaretInButton,()=>this.caretTemplate)}
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
    `}static get styles(){const t=y`var(--dropdownBorderWidth, 1px)`,e=y`var(--dropdownBorderRadius, 4px)`,o=y`var(--dropdownBorderColor, #fff)`,i=y`var(--dropdownBgColor, #333)`,s=y`var(--dropdownTextColor, #fff)`,r=y`var(--dropdownHoverBgColor, rgba(255, 255, 255, 0.3))`,d=y`var(--dropdownSelectedBgColor, #fff)`;return y`
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

        border-top: var(--dropdownBorderTopWidth, ${t});
        border-right: var(--dropdownBorderRightWidth, ${t});
        border-bottom: var(--dropdownBorderBottomWidth, ${t});
        border-left: var(--dropdownBorderLeftWidth, ${t});
        /* Must be after border-width settings for specificity */
        border-style: solid;
        border-color: ${o};

        border-radius: var(
            --dropdownBorderTopLeftRadius,
            ${e}
          )
          var(--dropdownBorderTopRightRadius, ${e})
          var(--dropdownBorderBottomRightRadius, ${e})
          var(--dropdownBorderBottomLeftRadius, ${e});

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
    `}};p([b({type:Boolean,reflect:!0})],g.prototype,"open",void 0);p([b({type:Boolean,reflect:!0})],g.prototype,"isDisabled",void 0);p([b({type:Boolean})],g.prototype,"displayCaret",void 0);p([b({type:Boolean})],g.prototype,"closeOnSelect",void 0);p([b({type:Boolean})],g.prototype,"openViaButton",void 0);p([b({type:Boolean})],g.prototype,"usePopover",void 0);p([b({type:Boolean})],g.prototype,"includeSelectedOption",void 0);p([b({type:String})],g.prototype,"selectedOption",void 0);p([b({attribute:!1})],g.prototype,"options",void 0);p([b({type:String})],g.prototype,"optionGroup",void 0);p([b({attribute:!1})],g.prototype,"optionSelected",void 0);p([b({type:Boolean,reflect:!0})],g.prototype,"isCustomList",void 0);p([b({type:Boolean,reflect:!0})],g.prototype,"hasCustomClickHandler",void 0);p([b({type:Boolean,reflect:!0})],g.prototype,"closeOnEscape",void 0);p([b({type:Boolean,reflect:!0})],g.prototype,"closeOnBackdropClick",void 0);p([x(".ia-dropdown-group")],g.prototype,"container",void 0);p([x("#dropdown-main")],g.prototype,"dropdownMenu",void 0);p([x(".click-main")],g.prototype,"mainButton",void 0);p([Be({slot:"dropdown-label"})],g.prototype,"mainButtonLabelSlotted",void 0);g=p([st("ia-dropdown")],g);let wt=class extends S{render(){return v`
      <div class="icon-label-container">
        <slot name="icon"></slot>
        <slot></slot>
      </div>
    `}};wt.styles=y`
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
  `;wt=p([st("ia-icon-label")],wt);let et=class extends S{constructor(){super(...arguments),this.identifier="Flash",this.lists=[]}get checkIcon(){return _`<svg viewBox="0 0 100 100"
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
  </svg>`}renderUserlistOption(t){const{label:e,isSelected:o,id:i}=t,s=o?"selected":"",r=v`<button
      id="${i}"
      @click=${d=>this.optionClicked(d,t)}
    >
      ${e}
    </button> `;return v`<li class=${s}>${r}</li>`}optionClicked(t,e){var o;t.stopPropagation(),this.dispatchEvent(new CustomEvent("optionSelected",{detail:{option:e}})),(o=e.selectedHandler)===null||o===void 0||o.call(e,e)}checkedIcon(t){return t?v`${this.checkIcon}`:v`<div style="width: 12px; height: 12px;"></div>`}get userListOptions(){const t=[];this.lists.forEach(o=>{const i={label:v` <ia-icon-label>
          <div slot="icon">${this.checkedIcon(o.item_is_member)}</div>
          <div class="truncate">${o.name}</div>
        </ia-icon-label>`,id:o.id,selectedHandler:s=>this.onSelected(s)};t.push(i)});const e={label:v`<ia-icon-label>
        <div slot="icon">${this.plusIcon}</div>
        Create new list
      </ia-icon-label>`,id:"create-new-list",selectedHandler:o=>this.onSelected(o)};return t.push(e),t}onSelected(t){let e=0;this.lists=this.lists.map(o=>(o.id===t.id&&(o.item_is_member=!o.item_is_member),o.item_is_member&&(e+=1),o)),this.dispatchEvent(new CustomEvent("selectDropdown",{detail:{selected:e},bubbles:!0,composed:!0})),console.log("onSelected",t),this.closeDropdown()}closeDropdown(){console.log("closeDropdown"),this.dispatchEvent(new CustomEvent("closeDropdown",{bubbles:!0,composed:!0}))}render(){return v`
      ${this.userListOptions.map(t=>this.renderUserlistOption(t))}
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
    `}};p([b({type:String})],et.prototype,"identifier",void 0);p([b({type:Array})],et.prototype,"lists",void 0);et=p([st("item-userlists")],et);const He=[{name:"A very long list name that will wrap to the next line and then some",item_is_member:!0,id:"0"},{name:"Silver age comics are the best",item_is_member:!0,id:"1"},{name:"Old reel leaders",item_is_member:!1,id:"2"},{name:"Microsoft stuff",item_is_member:!0,id:"3"},{name:"Radio shows from the golden age of radio",item_is_member:!1,id:"4"}];let f=class extends S{constructor(){super(),this.colorScheme="dark-bg",this.selectedOption=void 0,this.displayCaret=!0,this.disable=!1,this.openViaButton=!0,this.openViaCaret=!0,this.closeOnSelect=!1,this.includeSelectedOption=!1,this.selectedCount=0,this.userlistData=[],this.userlistData=[...He],this.selectedCount=this.userlistData.filter(e=>e.item_is_member).length;const t=e=>{this.selectedCount=e.detail.selected,console.log("Selected count: ",e.detail.selected)};this.addEventListener("selectDropdown",t)}toggleUserListDropdown(){this.userListDropdown.open=!this.userListDropdown.open}get correctIcon(){const t=_`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#2c2c2c"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#fff"/></g></svg>`,e=_`<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m93 95.6190775v4.3809225h-86l.00091489-4.3809225zm-3.3076923-8.0682881v5.8399885h-79.3846154v-5.8399885zm-2.469108-61.3914468.9542264.4869761.4775698 7.7869616.4775698 12.6529979v12.1688152l-.4775698 15.1688858-.0794428 10.2190486-1.3523534.4068998h-73.7729585l-1.4317962-.4068998-.5560994-10.2190486-.4784829-15.0878783v-12.1678841l.4784829-12.7349365.4364787-7.8288621.9953175-.4450756zm2.469108-11.0620805v8.7609138h-79.3846154v-8.7609138zm-39.6923077-15.0972621 43 9.75392865-1.7107266 3.00007055h-81.7325318l-2.5567416-2.4330181z" fill="#fff"/><path d="m51.6028793 29c7.1190869 7.5359754 22.8971207 15 15.9901161 35.2579416 0-13.8609831-3.3266359-16.0787404-11.6432258-24.3953303.228824 12.6744366.5667995 13.802523.1932361 24.374579-.1341927 3.8850801.3452129 9.4861753-2.6877233 12.6835908-3.8961215 4.1053124-11.3900578 6.002907-16.7795264 4.6437583-4.4827612-1.1344218-6.853801-6.228533-5.0902551-10.9486985 2.2450074-6.0280765 10.8278993-9.3863964 17.0615124-7.555321 1.2866177.3748446 2.711055 1.3636433 2.711055 1.3636433 0-12.4247052.4098317-23.8246554.244811-35.4241632z" fill="#2c2c2c"/></g></svg>`;return this.colorScheme==="light-bg"?t:e}changeColors(){if(this.colorScheme==="light-bg"){this.colorScheme="dark-bg";return}this.colorScheme="light-bg"}get selectedOptionId(){var t;return((t=this.selectedOption)===null||t===void 0?void 0:t.id)||"inlibrary"}get iconForDropdown(){return _`
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
  </svg>`}checkboxRowTemplate(t){var e,o,i;return v`
      <div>
        <input
          type="checkbox"
          id=${t.id}
          ?checked=${(e=t.isChecked)!==null&&e!==void 0?e:!1}
          ?isDisabled=${(o=t.isDisabled)!==null&&o!==void 0?o:!1}
          @change=${(i=t.onChange)!==null&&i!==void 0?i:m}
        />
        <label for=${t.id}>${t.label}</label>
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
    `}render(){var t,e;const o=this.selectedOptionId==="foo-bar";return v`
      <section><h2>iaux-dropdown</h2></section>

      ${this.checkboxRowTemplate({id:"display-caret-check",label:"Display caret",isChecked:this.displayCaret,onChange:()=>{this.displayCaret=this.displayCaretCheck.checked,this.displayCaret||(this.openViaCaret=!1,this.openViaCaretCheck.checked=!1)}})}
      ${this.checkboxRowTemplate({id:"disable-check",label:"Disable",isChecked:this.disable,onChange:()=>{this.disable=this.disableCheck.checked}})}
      ${this.checkboxRowTemplate({id:"open-via-button",label:"Open via button",isChecked:this.openViaButton,onChange:()=>{this.openViaButton=this.openViaButtonCheck.checked}})}
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
          ?closeOnSelect=${this.closeOnSelect}
          ?includeSelectedOption=${this.includeSelectedOption}
          selectedOption=${this.selectedOptionId}
          .options=${[{selectedHandler:i=>this.onSelected(i),label:"Option 1",id:"option1"},{selectedHandler:i=>this.onSelected(i),label:"Option 2",id:"option2"},{selectedHandler:i=>this.onSelected(i),label:"Option 3",id:"option3"}]}
        >
          <span slot="dropdown-label">
            ${(e=(t=this.selectedOption)===null||t===void 0?void 0:t.label)!==null&&e!==void 0?e:"Select an option"}
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
          ?closeOnSelect=${!0}
          ?includeSelectedOption=${!0}
          ?isCustomList=${!0}
          ?closeOnEscape=${!0}
          ?closeOnBackdropClick=${!0}
          ?hasCustomClickHandler=${!0}
          @click=${this.disable?m:i=>{i.stopPropagation(),this.toggleUserListDropdown()}}
        >
          <div class="list-title" slot="dropdown-label">${this.mainButton}</div>
          ${this.itemUserlists}
        </ia-dropdown>
      </div>
    `}onSelected(t){console.log("**** OPTION ",t),this.selectedOption=t}};f.styles=y`
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
  `;p([b({type:String,attribute:!0,reflect:!0})],f.prototype,"colorScheme",void 0);p([b({type:Object})],f.prototype,"selectedOption",void 0);p([B()],f.prototype,"displayCaret",void 0);p([B()],f.prototype,"disable",void 0);p([B()],f.prototype,"openViaButton",void 0);p([B()],f.prototype,"openViaCaret",void 0);p([B()],f.prototype,"closeOnSelect",void 0);p([B()],f.prototype,"includeSelectedOption",void 0);p([B()],f.prototype,"selectedCount",void 0);p([B()],f.prototype,"userlistData",void 0);p([x("#display-caret-check")],f.prototype,"displayCaretCheck",void 0);p([x("#disable-check")],f.prototype,"disableCheck",void 0);p([x("#open-via-button")],f.prototype,"openViaButtonCheck",void 0);p([x("#open-via-caret")],f.prototype,"openViaCaretCheck",void 0);p([x("#close-on-select")],f.prototype,"closeOnSelectCheck",void 0);p([x("#include-selected-option")],f.prototype,"includeSelectedOptionCheck",void 0);p([x("#user-list-dropdown")],f.prototype,"userListDropdown",void 0);f=p([st("app-root")],f);
