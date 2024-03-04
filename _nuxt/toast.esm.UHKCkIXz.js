import{s as N}from"./portal.esm.HI47vqaC.js";import{ac as x,ai as Z,aj as K,o as s,c,y as u,al as d,ak as i,F as D,a as v,b as C,ap as M,C as z,x as V,az as l,af as S,ad as F,ag as H,ae as q,a0 as O,w,aa as W,D as J,d as Q}from"./entry.sPeV4ugY.js";import{s as R}from"./basecomponent.esm.MS1ObfXz.js";import{s as T}from"./index.esm.y5vHEM8V.js";import{s as j,a as E}from"./index.esm.GnFVT_JI.js";import{s as X}from"./index.esm.Rcv_evjR.js";import{s as A}from"./index.esm.V-NatXPO.js";import"./baseicon.esm.7QbvKBS0.js";function f(e){"@babel/helpers - typeof";return f=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(e)}function g(e,t,o){return t=Y(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function Y(e){var t=$(e,"string");return f(t)=="symbol"?t:String(t)}function $(e,t){if(f(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(f(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var _={root:function(t){var o=t.position;return{position:"fixed",top:o==="top-right"||o==="top-left"||o==="top-center"?"20px":o==="center"?"50%":null,right:(o==="top-right"||o==="bottom-right")&&"20px",bottom:(o==="bottom-left"||o==="bottom-right"||o==="bottom-center")&&"20px",left:o==="top-left"||o==="bottom-left"?"20px":o==="center"||o==="top-center"||o==="bottom-center"?"50%":null}}},ee={root:function(t){var o=t.props,n=t.instance;return["p-toast p-component p-toast-"+o.position,{"p-ripple-disabled":n.$primevue.config.ripple===!1}]},container:function(t){var o=t.props;return["p-toast-message",{"p-toast-message-info":o.message.severity==="info"||o.message.severity===void 0,"p-toast-message-warn":o.message.severity==="warn","p-toast-message-error":o.message.severity==="error","p-toast-message-success":o.message.severity==="success","p-toast-message-secondary":o.message.severity==="secondary","p-toast-message-contrast":o.message.severity==="contrast"}]},content:"p-toast-message-content",icon:function(t){var o=t.props;return["p-toast-message-icon",g(g(g(g({},o.infoIcon,o.message.severity==="info"),o.warnIcon,o.message.severity==="warn"),o.errorIcon,o.message.severity==="error"),o.successIcon,o.message.severity==="success")]},text:"p-toast-message-text",summary:"p-toast-summary",detail:"p-toast-detail",closeButton:"p-toast-icon-close p-link",closeIcon:"p-toast-icon-close-icon"},te=x.extend({name:"toast",classes:ee,inlineStyles:_}),oe={name:"BaseToast",extends:R,props:{group:{type:String,default:null},position:{type:String,default:"top-right"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},breakpoints:{type:Object,default:null},closeIcon:{type:String,default:void 0},infoIcon:{type:String,default:void 0},warnIcon:{type:String,default:void 0},errorIcon:{type:String,default:void 0},successIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:te,provide:function(){return{$parentInstance:this}}},G={name:"ToastMessage",hostName:"Toast",extends:R,emits:["close"],closeTimeout:null,props:{message:{type:null,default:null},templates:{type:Object,default:null},closeIcon:{type:String,default:null},infoIcon:{type:String,default:null},warnIcon:{type:String,default:null},errorIcon:{type:String,default:null},successIcon:{type:String,default:null},closeButtonProps:{type:null,default:null}},mounted:function(){var t=this;this.message.life&&(this.closeTimeout=setTimeout(function(){t.close({message:t.message,type:"life-end"})},this.message.life))},beforeUnmount:function(){this.clearCloseTimeout()},methods:{close:function(t){this.$emit("close",t)},onCloseClick:function(){this.clearCloseTimeout(),this.close({message:this.message,type:"close"})},clearCloseTimeout:function(){this.closeTimeout&&(clearTimeout(this.closeTimeout),this.closeTimeout=null)}},computed:{iconComponent:function(){return{info:!this.infoIcon&&j,success:!this.successIcon&&T,warn:!this.warnIcon&&E,error:!this.errorIcon&&A}[this.message.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},components:{TimesIcon:X,InfoCircleIcon:j,CheckIcon:T,ExclamationTriangleIcon:E,TimesCircleIcon:A},directives:{ripple:Z}};function p(e){"@babel/helpers - typeof";return p=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(e)}function B(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,n)}return o}function m(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?B(Object(o),!0).forEach(function(n){ne(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):B(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function ne(e,t,o){return t=re(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function re(e){var t=se(e,"string");return p(t)=="symbol"?t:String(t)}function se(e,t){if(p(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(p(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}var ie=["aria-label"];function ae(e,t,o,n,a,r){var h=K("ripple");return s(),c("div",i({class:[e.cx("container"),o.message.styleClass],role:"alert","aria-live":"assertive","aria-atomic":"true"},e.ptm("container")),[o.templates.container?(s(),u(d(o.templates.container),{key:0,message:o.message,onClose:r.onCloseClick,closeCallback:r.onCloseClick},null,40,["message","onClose","closeCallback"])):(s(),c("div",i({key:1,class:[e.cx("content"),o.message.contentStyleClass]},e.ptm("content")),[o.templates.message?(s(),u(d(o.templates.message),{key:1,message:o.message},null,8,["message"])):(s(),c(D,{key:0},[(s(),u(d(o.templates.icon?o.templates.icon:r.iconComponent&&r.iconComponent.name?r.iconComponent:"span"),i({class:e.cx("icon")},e.ptm("icon")),null,16,["class"])),v("div",i({class:e.cx("text")},e.ptm("text")),[v("span",i({class:e.cx("summary")},e.ptm("summary")),C(o.message.summary),17),v("div",i({class:e.cx("detail")},e.ptm("detail")),C(o.message.detail),17)],16)],64)),o.message.closable!==!1?(s(),c("div",M(i({key:2},e.ptm("buttonContainer"))),[z((s(),c("button",i({class:e.cx("closeButton"),type:"button","aria-label":r.closeAriaLabel,onClick:t[0]||(t[0]=function(){return r.onCloseClick&&r.onCloseClick.apply(r,arguments)}),autofocus:""},m(m(m({},o.closeButtonProps),e.ptm("button")),e.ptm("closeButton"))),[(s(),u(d(o.templates.closeicon||"TimesIcon"),i({class:[e.cx("closeIcon"),o.closeIcon]},m(m({},e.ptm("buttonIcon")),e.ptm("closeIcon"))),null,16,["class"]))],16,ie)),[[h]])],16)):V("",!0)],16))],16)}G.render=ae;function le(e){return fe(e)||me(e)||ue(e)||ce()}function ce(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ue(e,t){if(e){if(typeof e=="string")return I(e,t);var o=Object.prototype.toString.call(e).slice(8,-1);if(o==="Object"&&e.constructor&&(o=e.constructor.name),o==="Map"||o==="Set")return Array.from(e);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return I(e,t)}}function me(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fe(e){if(Array.isArray(e))return I(e)}function I(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}var pe=0,ye={name:"Toast",extends:oe,inheritAttrs:!1,emits:["close","life-end"],data:function(){return{messages:[]}},styleElement:null,mounted:function(){l.on("add",this.onAdd),l.on("remove",this.onRemove),l.on("remove-group",this.onRemoveGroup),l.on("remove-all-groups",this.onRemoveAllGroups),this.breakpoints&&this.createStyle()},beforeUnmount:function(){this.destroyStyle(),this.$refs.container&&this.autoZIndex&&S.clear(this.$refs.container),l.off("add",this.onAdd),l.off("remove",this.onRemove),l.off("remove-group",this.onRemoveGroup),l.off("remove-all-groups",this.onRemoveAllGroups)},methods:{add:function(t){t.id==null&&(t.id=pe++),this.messages=[].concat(le(this.messages),[t])},remove:function(t){for(var o=-1,n=0;n<this.messages.length;n++)if(this.messages[n]===t.message){o=n;break}this.messages.splice(o,1),this.$emit(t.type,{message:t.message})},onAdd:function(t){this.group==t.group&&this.add(t)},onRemove:function(t){this.remove({message:t,type:"close"})},onRemoveGroup:function(t){this.group===t&&(this.messages=[])},onRemoveAllGroups:function(){this.messages=[]},onEnter:function(){this.$refs.container.setAttribute(this.attributeSelector,""),this.autoZIndex&&S.set("modal",this.$refs.container,this.baseZIndex||this.$primevue.config.zIndex.modal)},onLeave:function(){var t=this;this.$refs.container&&this.autoZIndex&&F.isEmpty(this.messages)&&setTimeout(function(){S.clear(t.$refs.container)},200)},createStyle:function(){if(!this.styleElement&&!this.isUnstyled){var t;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",H.setAttribute(this.styleElement,"nonce",(t=this.$primevue)===null||t===void 0||(t=t.config)===null||t===void 0||(t=t.csp)===null||t===void 0?void 0:t.nonce),document.head.appendChild(this.styleElement);var o="";for(var n in this.breakpoints){var a="";for(var r in this.breakpoints[n])a+=r+":"+this.breakpoints[n][r]+"!important;";o+=`
                        @media screen and (max-width: `.concat(n,`) {
                            .p-toast[`).concat(this.attributeSelector,`] {
                                `).concat(a,`
                            }
                        }
                    `)}this.styleElement.innerHTML=o}},destroyStyle:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)}},computed:{attributeSelector:function(){return q()}},components:{ToastMessage:G,Portal:N}};function y(e){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(e)}function k(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),o.push.apply(o,n)}return o}function b(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?k(Object(o),!0).forEach(function(n){de(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):k(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function de(e,t,o){return t=ge(t),t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function ge(e){var t=be(e,"string");return y(t)=="symbol"?t:String(t)}function be(e,t){if(y(e)!="object"||!e)return e;var o=e[Symbol.toPrimitive];if(o!==void 0){var n=o.call(e,t||"default");if(y(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ve(e,t,o,n,a,r){var h=O("ToastMessage"),L=O("Portal");return s(),u(L,null,{default:w(function(){return[v("div",i({ref:"container",class:e.cx("root"),style:e.sx("root",!0,{position:e.position})},b(b({},e.$attrs),e.ptm("root"))),[Q(W,i({name:"p-toast-message",tag:"div",onEnter:r.onEnter,onLeave:r.onLeave},b(b({},e.ptm("message")),e.ptm("transition"))),{default:w(function(){return[(s(!0),c(D,null,J(a.messages,function(P){return s(),u(h,{key:P.id,message:P,templates:e.$slots,closeIcon:e.closeIcon,infoIcon:e.infoIcon,warnIcon:e.warnIcon,errorIcon:e.errorIcon,successIcon:e.successIcon,closeButtonProps:e.closeButtonProps,onClose:t[0]||(t[0]=function(U){return r.remove(U)}),pt:e.pt},null,8,["message","templates","closeIcon","infoIcon","warnIcon","errorIcon","successIcon","closeButtonProps","pt"])}),128))]}),_:1},16,["onEnter","onLeave"])],16)]}),_:1})}ye.render=ve;export{ye as default};
