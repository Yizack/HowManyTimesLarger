import{s as ma,x as V,y as da,z as va,o as pa,c as ba,u as ga}from"./entry.8d4f0162.js";function ft(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function u(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?ft(Object(a),!0).forEach(function(e){O(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):ft(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function An(n){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},An(n)}function ha(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function lt(n,t){for(var a=0;a<t.length;a++){var e=t[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function ya(n,t,a){return t&&lt(n.prototype,t),a&&lt(n,a),Object.defineProperty(n,"prototype",{writable:!1}),n}function O(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function Kn(n,t){return xa(n)||Aa(n,t)||Tt(n,t)||Sa()}function ln(n){return ka(n)||wa(n)||Tt(n)||Oa()}function ka(n){if(Array.isArray(n))return Fn(n)}function xa(n){if(Array.isArray(n))return n}function wa(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function Aa(n,t){var a=n==null?null:typeof Symbol<"u"&&n[Symbol.iterator]||n["@@iterator"];if(a!=null){var e=[],r=!0,i=!1,o,s;try{for(a=a.call(n);!(r=(o=a.next()).done)&&(e.push(o.value),!(t&&e.length===t));r=!0);}catch(f){i=!0,s=f}finally{try{!r&&a.return!=null&&a.return()}finally{if(i)throw s}}return e}}function Tt(n,t){if(n){if(typeof n=="string")return Fn(n,t);var a=Object.prototype.toString.call(n).slice(8,-1);if(a==="Object"&&n.constructor&&(a=n.constructor.name),a==="Map"||a==="Set")return Array.from(n);if(a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return Fn(n,t)}}function Fn(n,t){(t==null||t>n.length)&&(t=n.length);for(var a=0,e=new Array(t);a<t;a++)e[a]=n[a];return e}function Oa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Sa(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ct=function(){},qn={},Rt={},Ft=null,jt={mark:ct,measure:ct};try{typeof window<"u"&&(qn=window),typeof document<"u"&&(Rt=document),typeof MutationObserver<"u"&&(Ft=MutationObserver),typeof performance<"u"&&(jt=performance)}catch{}var Ca=qn.navigator||{},ut=Ca.userAgent,mt=ut===void 0?"":ut,$=qn,k=Rt,dt=Ft,mn=jt;$.document;var j=!!k.documentElement&&!!k.head&&typeof k.addEventListener=="function"&&typeof k.createElement=="function",Dt=~mt.indexOf("MSIE")||~mt.indexOf("Trident/"),dn,vn,pn,bn,gn,T="___FONT_AWESOME___",jn=16,Yt="fa",$t="svg-inline--fa",G="data-fa-i2svg",Dn="data-fa-pseudo-element",Pa="data-fa-pseudo-element-pending",Qn="data-prefix",Zn="data-icon",vt="fontawesome-i2svg",Ea="async",Na=["HTML","HEAD","STYLE","SCRIPT"],Ht=function(){try{return!0}catch{return!1}}(),y="classic",x="sharp",Jn=[y,x];function cn(n){return new Proxy(n,{get:function(a,e){return e in a?a[e]:a[y]}})}var en=cn((dn={},O(dn,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),O(dn,x,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),dn)),rn=cn((vn={},O(vn,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),O(vn,x,{solid:"fass",regular:"fasr"}),vn)),on=cn((pn={},O(pn,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),O(pn,x,{fass:"fa-solid",fasr:"fa-regular"}),pn)),_a=cn((bn={},O(bn,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),O(bn,x,{"fa-solid":"fass","fa-regular":"fasr"}),bn)),Ia=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Ut="fa-layers-text",za=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,La=cn((gn={},O(gn,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),O(gn,x,{900:"fass",400:"fasr"}),gn)),Bt=[1,2,3,4,5,6,7,8,9,10],Ma=Bt.concat([11,12,13,14,15,16,17,18,19,20]),Ta=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],B={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sn=new Set;Object.keys(rn[y]).map(sn.add.bind(sn));Object.keys(rn[x]).map(sn.add.bind(sn));var Ra=[].concat(Jn,ln(sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",B.GROUP,B.SWAP_OPACITY,B.PRIMARY,B.SECONDARY]).concat(Bt.map(function(n){return"".concat(n,"x")})).concat(Ma.map(function(n){return"w-".concat(n)})),tn=$.FontAwesomeConfig||{};function Fa(n){var t=k.querySelector("script["+n+"]");if(t)return t.getAttribute(n)}function ja(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}if(k&&typeof k.querySelector=="function"){var Da=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Da.forEach(function(n){var t=Kn(n,2),a=t[0],e=t[1],r=ja(Fa(a));r!=null&&(tn[e]=r)})}var Wt={styleDefault:"solid",familyDefault:"classic",cssPrefix:Yt,replacementClass:$t,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};tn.familyPrefix&&(tn.cssPrefix=tn.familyPrefix);var Z=u(u({},Wt),tn);Z.autoReplaceSvg||(Z.observeMutations=!1);var m={};Object.keys(Wt).forEach(function(n){Object.defineProperty(m,n,{enumerable:!0,set:function(a){Z[n]=a,an.forEach(function(e){return e(m)})},get:function(){return Z[n]}})});Object.defineProperty(m,"familyPrefix",{enumerable:!0,set:function(t){Z.cssPrefix=t,an.forEach(function(a){return a(m)})},get:function(){return Z.cssPrefix}});$.FontAwesomeConfig=m;var an=[];function Ya(n){return an.push(n),function(){an.splice(an.indexOf(n),1)}}var Y=jn,L={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function $a(n){if(!(!n||!j)){var t=k.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=n;for(var a=k.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(e=i)}return k.head.insertBefore(t,e),n}}var Ha="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function fn(){for(var n=12,t="";n-- >0;)t+=Ha[Math.random()*62|0];return t}function J(n){for(var t=[],a=(n||[]).length>>>0;a--;)t[a]=n[a];return t}function nt(n){return n.classList?J(n.classList):(n.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Gt(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Ua(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,'="').concat(Gt(n[a]),'" ')},"").trim()}function Pn(n){return Object.keys(n||{}).reduce(function(t,a){return t+"".concat(a,": ").concat(n[a].trim(),";")},"")}function tt(n){return n.size!==L.size||n.x!==L.x||n.y!==L.y||n.rotate!==L.rotate||n.flipX||n.flipY}function Ba(n){var t=n.transform,a=n.containerWidth,e=n.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:f,path:c}}function Wa(n){var t=n.transform,a=n.width,e=a===void 0?jn:a,r=n.height,i=r===void 0?jn:r,o=n.startCentered,s=o===void 0?!1:o,f="";return s&&Dt?f+="translate(".concat(t.x/Y-e/2,"em, ").concat(t.y/Y-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(t.x/Y,"em), calc(-50% + ").concat(t.y/Y,"em)) "):f+="translate(".concat(t.x/Y,"em, ").concat(t.y/Y,"em) "),f+="scale(".concat(t.size/Y*(t.flipX?-1:1),", ").concat(t.size/Y*(t.flipY?-1:1),") "),f+="rotate(".concat(t.rotate,"deg) "),f}var Ga=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Xt(){var n=Yt,t=$t,a=m.cssPrefix,e=m.replacementClass,r=Ga;if(a!==n||e!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g"),o=new RegExp("\\--".concat(n,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(a,"-")).replace(o,"--".concat(a,"-")).replace(s,".".concat(e))}return r}var pt=!1;function zn(){m.autoAddCss&&!pt&&($a(Xt()),pt=!0)}var Xa={mixout:function(){return{dom:{css:Xt,insertCss:zn}}},hooks:function(){return{beforeDOMElementCreation:function(){zn()},beforeI2svg:function(){zn()}}}},R=$||{};R[T]||(R[T]={});R[T].styles||(R[T].styles={});R[T].hooks||(R[T].hooks={});R[T].shims||(R[T].shims=[]);var I=R[T],Vt=[],Va=function n(){k.removeEventListener("DOMContentLoaded",n),On=1,Vt.map(function(t){return t()})},On=!1;j&&(On=(k.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(k.readyState),On||k.addEventListener("DOMContentLoaded",Va));function Ka(n){j&&(On?setTimeout(n,0):Vt.push(n))}function un(n){var t=n.tag,a=n.attributes,e=a===void 0?{}:a,r=n.children,i=r===void 0?[]:r;return typeof n=="string"?Gt(n):"<".concat(t," ").concat(Ua(e),">").concat(i.map(un).join(""),"</").concat(t,">")}function bt(n,t,a){if(n&&n[t]&&n[t][a])return{prefix:t,iconName:a,icon:n[t][a]}}var qa=function(t,a){return function(e,r,i,o){return t.call(a,e,r,i,o)}},Ln=function(t,a,e,r){var i=Object.keys(t),o=i.length,s=r!==void 0?qa(a,r):a,f,c,l;for(e===void 0?(f=1,l=t[i[0]]):(f=0,l=e);f<o;f++)c=i[f],l=s(l,t[c],c,t);return l};function Qa(n){for(var t=[],a=0,e=n.length;a<e;){var r=n.charCodeAt(a++);if(r>=55296&&r<=56319&&a<e){var i=n.charCodeAt(a++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),a--)}else t.push(r)}return t}function Yn(n){var t=Qa(n);return t.length===1?t[0].toString(16):null}function Za(n,t){var a=n.length,e=n.charCodeAt(t),r;return e>=55296&&e<=56319&&a>t+1&&(r=n.charCodeAt(t+1),r>=56320&&r<=57343)?(e-55296)*1024+r-56320+65536:e}function gt(n){return Object.keys(n).reduce(function(t,a){var e=n[a],r=!!e.icon;return r?t[e.iconName]=e.icon:t[a]=e,t},{})}function $n(n,t){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=gt(t);typeof I.hooks.addPack=="function"&&!r?I.hooks.addPack(n,gt(t)):I.styles[n]=u(u({},I.styles[n]||{}),i),n==="fas"&&$n("fa",t)}var hn,yn,kn,K=I.styles,Ja=I.shims,ne=(hn={},O(hn,y,Object.values(on[y])),O(hn,x,Object.values(on[x])),hn),at=null,Kt={},qt={},Qt={},Zt={},Jt={},te=(yn={},O(yn,y,Object.keys(en[y])),O(yn,x,Object.keys(en[x])),yn);function ae(n){return~Ra.indexOf(n)}function ee(n,t){var a=t.split("-"),e=a[0],r=a.slice(1).join("-");return e===n&&r!==""&&!ae(r)?r:null}var na=function(){var t=function(i){return Ln(K,function(o,s,f){return o[f]=Ln(s,i,{}),o},{})};Kt=t(function(r,i,o){if(i[3]&&(r[i[3]]=o),i[2]){var s=i[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=o})}return r}),qt=t(function(r,i,o){if(r[o]=o,i[2]){var s=i[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=o})}return r}),Jt=t(function(r,i,o){var s=i[2];return r[o]=o,s.forEach(function(f){r[f]=o}),r});var a="far"in K||m.autoFetchSvg,e=Ln(Ja,function(r,i){var o=i[0],s=i[1],f=i[2];return s==="far"&&!a&&(s="fas"),typeof o=="string"&&(r.names[o]={prefix:s,iconName:f}),typeof o=="number"&&(r.unicodes[o.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});Qt=e.names,Zt=e.unicodes,at=En(m.styleDefault,{family:m.familyDefault})};Ya(function(n){at=En(n.styleDefault,{family:m.familyDefault})});na();function et(n,t){return(Kt[n]||{})[t]}function re(n,t){return(qt[n]||{})[t]}function W(n,t){return(Jt[n]||{})[t]}function ta(n){return Qt[n]||{prefix:null,iconName:null}}function ie(n){var t=Zt[n],a=et("fas",n);return t||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function H(){return at}var rt=function(){return{prefix:null,iconName:null,rest:[]}};function En(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.family,e=a===void 0?y:a,r=en[e][n],i=rn[e][n]||rn[e][r],o=n in I.styles?n:null;return i||o||null}var ht=(kn={},O(kn,y,Object.keys(on[y])),O(kn,x,Object.keys(on[x])),kn);function Nn(n){var t,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.skipLookups,r=e===void 0?!1:e,i=(t={},O(t,y,"".concat(m.cssPrefix,"-").concat(y)),O(t,x,"".concat(m.cssPrefix,"-").concat(x)),t),o=null,s=y;(n.includes(i[y])||n.some(function(c){return ht[y].includes(c)}))&&(s=y),(n.includes(i[x])||n.some(function(c){return ht[x].includes(c)}))&&(s=x);var f=n.reduce(function(c,l){var d=ee(m.cssPrefix,l);if(K[l]?(l=ne[s].includes(l)?_a[s][l]:l,o=l,c.prefix=l):te[s].indexOf(l)>-1?(o=l,c.prefix=En(l,{family:s})):d?c.iconName=d:l!==m.replacementClass&&l!==i[y]&&l!==i[x]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var b=o==="fa"?ta(c.iconName):{},g=W(c.prefix,c.iconName);b.prefix&&(o=null),c.iconName=b.iconName||g||c.iconName,c.prefix=b.prefix||c.prefix,c.prefix==="far"&&!K.far&&K.fas&&!m.autoFetchSvg&&(c.prefix="fas")}return c},rt());return(n.includes("fa-brands")||n.includes("fab"))&&(f.prefix="fab"),(n.includes("fa-duotone")||n.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===x&&(K.fass||m.autoFetchSvg)&&(f.prefix="fass",f.iconName=W(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||o==="fa")&&(f.prefix=H()||"fas"),f}var oe=function(){function n(){ha(this,n),this.definitions={}}return ya(n,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var o=r.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){a.definitions[s]=u(u({},a.definitions[s]||{}),o[s]),$n(s,o[s]);var f=on[y][s];f&&$n(f,o[s]),na()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var o=r[i],s=o.prefix,f=o.iconName,c=o.icon,l=c[2];a[s]||(a[s]={}),l.length>0&&l.forEach(function(d){typeof d=="string"&&(a[s][d]=c)}),a[s][f]=c}),a}}]),n}(),yt=[],q={},Q={},se=Object.keys(Q);function fe(n,t){var a=t.mixoutsTo;return yt=n,q={},Object.keys(Q).forEach(function(e){se.indexOf(e)===-1&&delete Q[e]}),yt.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(o){typeof r[o]=="function"&&(a[o]=r[o]),An(r[o])==="object"&&Object.keys(r[o]).forEach(function(s){a[o]||(a[o]={}),a[o][s]=r[o][s]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(o){q[o]||(q[o]=[]),q[o].push(i[o])})}e.provides&&e.provides(Q)}),a}function Hn(n,t){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=q[n]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(e))}),t}function X(n){for(var t=arguments.length,a=new Array(t>1?t-1:0),e=1;e<t;e++)a[e-1]=arguments[e];var r=q[n]||[];r.forEach(function(i){i.apply(null,a)})}function F(){var n=arguments[0],t=Array.prototype.slice.call(arguments,1);return Q[n]?Q[n].apply(null,t):void 0}function Un(n){n.prefix==="fa"&&(n.prefix="fas");var t=n.iconName,a=n.prefix||H();if(t)return t=W(a,t)||t,bt(aa.definitions,a,t)||bt(I.styles,a,t)}var aa=new oe,le=function(){m.autoReplaceSvg=!1,m.observeMutations=!1,X("noAuto")},ce={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return j?(X("beforeI2svg",t),F("pseudoElements2svg",t),F("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot;m.autoReplaceSvg===!1&&(m.autoReplaceSvg=!0),m.observeMutations=!0,Ka(function(){me({autoReplaceSvgRoot:a}),X("watch",t)})}},ue={icon:function(t){if(t===null)return null;if(An(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:W(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var a=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],e=En(t[0]);return{prefix:e,iconName:W(e,a)||a}}if(typeof t=="string"&&(t.indexOf("".concat(m.cssPrefix,"-"))>-1||t.match(Ia))){var r=Nn(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||H(),iconName:W(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=H();return{prefix:i,iconName:W(i,t)||t}}}},N={noAuto:le,config:m,dom:ce,parse:ue,library:aa,findIconDefinition:Un,toHtml:un},me=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=t.autoReplaceSvgRoot,e=a===void 0?k:a;(Object.keys(I.styles).length>0||m.autoFetchSvg)&&j&&m.autoReplaceSvg&&N.dom.i2svg({node:e})};function _n(n,t){return Object.defineProperty(n,"abstract",{get:t}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(function(e){return un(e)})}}),Object.defineProperty(n,"node",{get:function(){if(j){var e=k.createElement("div");return e.innerHTML=n.html,e.children}}}),n}function de(n){var t=n.children,a=n.main,e=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(tt(o)&&a.found&&!e.found){var s=a.width,f=a.height,c={x:s/f/2,y:.5};r.style=Pn(u(u({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ve(n){var t=n.prefix,a=n.iconName,e=n.children,r=n.attributes,i=n.symbol,o=i===!0?"".concat(t,"-").concat(m.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:o}),children:e}]}]}function it(n){var t=n.icons,a=t.main,e=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,f=n.title,c=n.maskId,l=n.titleId,d=n.extra,b=n.watchable,g=b===void 0?!1:b,S=e.found?e:a,C=S.width,P=S.height,v=r==="fak",p=[m.replacementClass,i?"".concat(m.cssPrefix,"-").concat(i):""].filter(function(D){return d.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(d.classes).join(" "),h={children:[],attributes:u(u({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:p,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(C," ").concat(P)})},w=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(C/P*16*.0625,"em")}:{};g&&(h.attributes[G]=""),f&&(h.children.push({tag:"title",attributes:{id:h.attributes["aria-labelledby"]||"title-".concat(l||fn())},children:[f]}),delete h.attributes.title);var A=u(u({},h),{},{prefix:r,iconName:i,main:a,mask:e,maskId:c,transform:o,symbol:s,styles:u(u({},w),d.styles)}),z=e.found&&a.found?F("generateAbstractMask",A)||{children:[],attributes:{}}:F("generateAbstractIcon",A)||{children:[],attributes:{}},_=z.children,In=z.attributes;return A.children=_,A.attributes=In,s?ve(A):de(A)}function kt(n){var t=n.content,a=n.width,e=n.height,r=n.transform,i=n.title,o=n.extra,s=n.watchable,f=s===void 0?!1:s,c=u(u(u({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});f&&(c[G]="");var l=u({},o.styles);tt(r)&&(l.transform=Wa({transform:r,startCentered:!0,width:a,height:e}),l["-webkit-transform"]=l.transform);var d=Pn(l);d.length>0&&(c.style=d);var b=[];return b.push({tag:"span",attributes:c,children:[t]}),i&&b.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),b}function pe(n){var t=n.content,a=n.title,e=n.extra,r=u(u(u({},e.attributes),a?{title:a}:{}),{},{class:e.classes.join(" ")}),i=Pn(e.styles);i.length>0&&(r.style=i);var o=[];return o.push({tag:"span",attributes:r,children:[t]}),a&&o.push({tag:"span",attributes:{class:"sr-only"},children:[a]}),o}var Mn=I.styles;function Bn(n){var t=n[0],a=n[1],e=n.slice(4),r=Kn(e,1),i=r[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.GROUP)},children:[{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(m.cssPrefix,"-").concat(B.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:a,icon:o}}var be={found:!1,width:512,height:512};function ge(n,t){!Ht&&!m.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(t,'" is missing.'))}function Wn(n,t){var a=t;return t==="fa"&&m.styleDefault!==null&&(t=H()),new Promise(function(e,r){if(F("missingIconAbstract"),a==="fa"){var i=ta(n)||{};n=i.iconName||n,t=i.prefix||t}if(n&&t&&Mn[t]&&Mn[t][n]){var o=Mn[t][n];return e(Bn(o))}ge(n,t),e(u(u({},be),{},{icon:m.showMissingIcons&&n?F("missingIconAbstract")||{}:{}}))})}var xt=function(){},Gn=m.measurePerformance&&mn&&mn.mark&&mn.measure?mn:{mark:xt,measure:xt},nn='FA "6.3.0"',he=function(t){return Gn.mark("".concat(nn," ").concat(t," begins")),function(){return ea(t)}},ea=function(t){Gn.mark("".concat(nn," ").concat(t," ends")),Gn.measure("".concat(nn," ").concat(t),"".concat(nn," ").concat(t," begins"),"".concat(nn," ").concat(t," ends"))},ot={begin:he,end:ea},xn=function(){};function wt(n){var t=n.getAttribute?n.getAttribute(G):null;return typeof t=="string"}function ye(n){var t=n.getAttribute?n.getAttribute(Qn):null,a=n.getAttribute?n.getAttribute(Zn):null;return t&&a}function ke(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(m.replacementClass)}function xe(){if(m.autoReplaceSvg===!0)return wn.replace;var n=wn[m.autoReplaceSvg];return n||wn.replace}function we(n){return k.createElementNS("http://www.w3.org/2000/svg",n)}function Ae(n){return k.createElement(n)}function ra(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=t.ceFn,e=a===void 0?n.tag==="svg"?we:Ae:a;if(typeof n=="string")return k.createTextNode(n);var r=e(n.tag);Object.keys(n.attributes||[]).forEach(function(o){r.setAttribute(o,n.attributes[o])});var i=n.children||[];return i.forEach(function(o){r.appendChild(ra(o,{ceFn:e}))}),r}function Oe(n){var t=" ".concat(n.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var wn={replace:function(t){var a=t[0];if(a.parentNode)if(t[1].forEach(function(r){a.parentNode.insertBefore(ra(r),a)}),a.getAttribute(G)===null&&m.keepOriginalSource){var e=k.createComment(Oe(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(t){var a=t[0],e=t[1];if(~nt(a).indexOf(m.replacementClass))return wn.replace(t);var r=new RegExp("".concat(m.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(s,f){return f===m.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var o=e.map(function(s){return un(s)}).join(`
`);a.setAttribute(G,""),a.innerHTML=o}};function At(n){n()}function ia(n,t){var a=typeof t=="function"?t:xn;if(n.length===0)a();else{var e=At;m.mutateApproach===Ea&&(e=$.requestAnimationFrame||At),e(function(){var r=xe(),i=ot.begin("mutate");n.map(r),i(),a()})}}var st=!1;function oa(){st=!0}function Xn(){st=!1}var Sn=null;function Ot(n){if(dt&&m.observeMutations){var t=n.treeCallback,a=t===void 0?xn:t,e=n.nodeCallback,r=e===void 0?xn:e,i=n.pseudoElementsCallback,o=i===void 0?xn:i,s=n.observeMutationsRoot,f=s===void 0?k:s;Sn=new dt(function(c){if(!st){var l=H();J(c).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!wt(d.addedNodes[0])&&(m.searchPseudoElements&&o(d.target),a(d.target)),d.type==="attributes"&&d.target.parentNode&&m.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&wt(d.target)&&~Ta.indexOf(d.attributeName))if(d.attributeName==="class"&&ye(d.target)){var b=Nn(nt(d.target)),g=b.prefix,S=b.iconName;d.target.setAttribute(Qn,g||l),S&&d.target.setAttribute(Zn,S)}else ke(d.target)&&r(d.target)})}}),j&&Sn.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Se(){Sn&&Sn.disconnect()}function Ce(n){var t=n.getAttribute("style"),a=[];return t&&(a=t.split(";").reduce(function(e,r){var i=r.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(e[o]=s.join(":").trim()),e},{})),a}function Pe(n){var t=n.getAttribute("data-prefix"),a=n.getAttribute("data-icon"),e=n.innerText!==void 0?n.innerText.trim():"",r=Nn(nt(n));return r.prefix||(r.prefix=H()),t&&a&&(r.prefix=t,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=re(r.prefix,n.innerText)||et(r.prefix,Yn(n.innerText))),!r.iconName&&m.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=n.firstChild.data)),r}function Ee(n){var t=J(n.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),a=n.getAttribute("title"),e=n.getAttribute("data-fa-title-id");return m.autoA11y&&(a?t["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(e||fn()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ne(){return{iconName:null,title:null,titleId:null,prefix:null,transform:L,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function St(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=Pe(n),e=a.iconName,r=a.prefix,i=a.rest,o=Ee(n),s=Hn("parseNodeAttributes",{},n),f=t.styleParser?Ce(n):[];return u({iconName:e,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:r,transform:L,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:f,attributes:o}},s)}var _e=I.styles;function sa(n){var t=m.autoReplaceSvg==="nest"?St(n,{styleParser:!1}):St(n);return~t.extra.classes.indexOf(Ut)?F("generateLayersText",n,t):F("generateSvgReplacementMutation",n,t)}var U=new Set;Jn.map(function(n){U.add("fa-".concat(n))});Object.keys(en[y]).map(U.add.bind(U));Object.keys(en[x]).map(U.add.bind(U));U=ln(U);function Ct(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!j)return Promise.resolve();var a=k.documentElement.classList,e=function(d){return a.add("".concat(vt,"-").concat(d))},r=function(d){return a.remove("".concat(vt,"-").concat(d))},i=m.autoFetchSvg?U:Jn.map(function(l){return"fa-".concat(l)}).concat(Object.keys(_e));i.includes("fa")||i.push("fa");var o=[".".concat(Ut,":not([").concat(G,"])")].concat(i.map(function(l){return".".concat(l,":not([").concat(G,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=J(n.querySelectorAll(o))}catch{}if(s.length>0)e("pending"),r("complete");else return Promise.resolve();var f=ot.begin("onTree"),c=s.reduce(function(l,d){try{var b=sa(d);b&&l.push(b)}catch(g){Ht||g.name==="MissingIcon"&&console.error(g)}return l},[]);return new Promise(function(l,d){Promise.all(c).then(function(b){ia(b,function(){e("active"),e("complete"),r("pending"),typeof t=="function"&&t(),f(),l()})}).catch(function(b){f(),d(b)})})}function Ie(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;sa(n).then(function(a){a&&ia([a],t)})}function ze(n){return function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(t||{}).icon?t:Un(t||{}),r=a.mask;return r&&(r=(r||{}).icon?r:Un(r||{})),n(e,u(u({},a),{},{mask:r}))}}var Le=function(t){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?L:e,i=a.symbol,o=i===void 0?!1:i,s=a.mask,f=s===void 0?null:s,c=a.maskId,l=c===void 0?null:c,d=a.title,b=d===void 0?null:d,g=a.titleId,S=g===void 0?null:g,C=a.classes,P=C===void 0?[]:C,v=a.attributes,p=v===void 0?{}:v,h=a.styles,w=h===void 0?{}:h;if(t){var A=t.prefix,z=t.iconName,_=t.icon;return _n(u({type:"icon"},t),function(){return X("beforeDOMElementCreation",{iconDefinition:t,params:a}),m.autoA11y&&(b?p["aria-labelledby"]="".concat(m.replacementClass,"-title-").concat(S||fn()):(p["aria-hidden"]="true",p.focusable="false")),it({icons:{main:Bn(_),mask:f?Bn(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:A,iconName:z,transform:u(u({},L),r),symbol:o,title:b,maskId:l,titleId:S,extra:{attributes:p,styles:w,classes:P}})})}},Me={mixout:function(){return{icon:ze(Le)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Ct,a.nodeCallback=Ie,a}}},provides:function(t){t.i2svg=function(a){var e=a.node,r=e===void 0?k:e,i=a.callback,o=i===void 0?function(){}:i;return Ct(r,o)},t.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.title,o=e.titleId,s=e.prefix,f=e.transform,c=e.symbol,l=e.mask,d=e.maskId,b=e.extra;return new Promise(function(g,S){Promise.all([Wn(r,s),l.iconName?Wn(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(C){var P=Kn(C,2),v=P[0],p=P[1];g([a,it({icons:{main:v,mask:p},prefix:s,iconName:r,transform:f,symbol:c,maskId:d,title:i,titleId:o,extra:b,watchable:!0})])}).catch(S)})},t.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.transform,s=a.styles,f=Pn(s);f.length>0&&(r.style=f);var c;return tt(o)&&(c=F("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),e.push(c||i.icon),{children:e,attributes:r}}}},Te={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return _n({type:"layer"},function(){X("beforeDOMElementCreation",{assembler:a,params:e});var o=[];return a(function(s){Array.isArray(s)?s.map(function(f){o=o.concat(f.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(m.cssPrefix,"-layers")].concat(ln(i)).join(" ")},children:o}]})}}}},Re={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,o=e.classes,s=o===void 0?[]:o,f=e.attributes,c=f===void 0?{}:f,l=e.styles,d=l===void 0?{}:l;return _n({type:"counter",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:e}),pe({content:a.toString(),title:i,extra:{attributes:c,styles:d,classes:["".concat(m.cssPrefix,"-layers-counter")].concat(ln(s))}})})}}}},Fe={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?L:r,o=e.title,s=o===void 0?null:o,f=e.classes,c=f===void 0?[]:f,l=e.attributes,d=l===void 0?{}:l,b=e.styles,g=b===void 0?{}:b;return _n({type:"text",content:a},function(){return X("beforeDOMElementCreation",{content:a,params:e}),kt({content:a,transform:u(u({},L),i),title:s,extra:{attributes:d,styles:g,classes:["".concat(m.cssPrefix,"-layers-text")].concat(ln(c))}})})}}},provides:function(t){t.generateLayersText=function(a,e){var r=e.title,i=e.transform,o=e.extra,s=null,f=null;if(Dt){var c=parseInt(getComputedStyle(a).fontSize,10),l=a.getBoundingClientRect();s=l.width/c,f=l.height/c}return m.autoA11y&&!r&&(o.attributes["aria-hidden"]="true"),Promise.resolve([a,kt({content:a.innerHTML,width:s,height:f,transform:i,title:r,extra:o,watchable:!0})])}}},je=new RegExp('"',"ug"),Pt=[1105920,1112319];function De(n){var t=n.replace(je,""),a=Za(t,0),e=a>=Pt[0]&&a<=Pt[1],r=t.length===2?t[0]===t[1]:!1;return{value:Yn(r?t[0]:t),isSecondary:e||r}}function Et(n,t){var a="".concat(Pa).concat(t.replace(":","-"));return new Promise(function(e,r){if(n.getAttribute(a)!==null)return e();var i=J(n.children),o=i.filter(function(_){return _.getAttribute(Dn)===t})[0],s=$.getComputedStyle(n,t),f=s.getPropertyValue("font-family").match(za),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(o&&!f)return n.removeChild(o),e();if(f&&l!=="none"&&l!==""){var d=s.getPropertyValue("content"),b=~["Sharp"].indexOf(f[2])?x:y,g=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?rn[b][f[2].toLowerCase()]:La[b][c],S=De(d),C=S.value,P=S.isSecondary,v=f[0].startsWith("FontAwesome"),p=et(g,C),h=p;if(v){var w=ie(C);w.iconName&&w.prefix&&(p=w.iconName,g=w.prefix)}if(p&&!P&&(!o||o.getAttribute(Qn)!==g||o.getAttribute(Zn)!==h)){n.setAttribute(a,h),o&&n.removeChild(o);var A=Ne(),z=A.extra;z.attributes[Dn]=t,Wn(p,g).then(function(_){var In=it(u(u({},A),{},{icons:{main:_,mask:rt()},prefix:g,iconName:h,extra:z,watchable:!0})),D=k.createElement("svg");t==="::before"?n.insertBefore(D,n.firstChild):n.appendChild(D),D.outerHTML=In.map(function(ua){return un(ua)}).join(`
`),n.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function Ye(n){return Promise.all([Et(n,"::before"),Et(n,"::after")])}function $e(n){return n.parentNode!==document.head&&!~Na.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(Dn)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function Nt(n){if(j)return new Promise(function(t,a){var e=J(n.querySelectorAll("*")).filter($e).map(Ye),r=ot.begin("searchPseudoElements");oa(),Promise.all(e).then(function(){r(),Xn(),t()}).catch(function(){r(),Xn(),a()})})}var He={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=Nt,a}}},provides:function(t){t.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?k:e;m.searchPseudoElements&&Nt(r)}}},_t=!1,Ue={mixout:function(){return{dom:{unwatch:function(){oa(),_t=!0}}}},hooks:function(){return{bootstrap:function(){Ot(Hn("mutationObserverCallbacks",{}))},noAuto:function(){Se()},watch:function(a){var e=a.observeMutationsRoot;_t?Xn():Ot(Hn("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},It=function(t){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return e.flipX=!0,e;if(o&&s==="v")return e.flipY=!0,e;if(s=parseFloat(s),isNaN(s))return e;switch(o){case"grow":e.size=e.size+s;break;case"shrink":e.size=e.size-s;break;case"left":e.x=e.x-s;break;case"right":e.x=e.x+s;break;case"up":e.y=e.y-s;break;case"down":e.y=e.y+s;break;case"rotate":e.rotate=e.rotate+s;break}return e},a)},Be={mixout:function(){return{parse:{transform:function(a){return It(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=It(r)),a}}},provides:function(t){t.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,o=a.iconWidth,s={transform:"translate(".concat(i/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(f," ").concat(c," ").concat(l)},b={transform:"translate(".concat(o/2*-1," -256)")},g={outer:s,inner:d,path:b};return{tag:"g",attributes:u({},g.outer),children:[{tag:"g",attributes:u({},g.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:u(u({},e.icon.attributes),g.path)}]}]}}}},Tn={x:0,y:0,width:"100%",height:"100%"};function zt(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||t)&&(n.attributes.fill="black"),n}function We(n){return n.tag==="g"?n.children:[n]}var Ge={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?Nn(r.split(" ").map(function(o){return o.trim()})):rt();return i.prefix||(i.prefix=H()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(t){t.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,o=a.mask,s=a.maskId,f=a.transform,c=i.width,l=i.icon,d=o.width,b=o.icon,g=Ba({transform:f,containerWidth:d,iconWidth:c}),S={tag:"rect",attributes:u(u({},Tn),{},{fill:"white"})},C=l.children?{children:l.children.map(zt)}:{},P={tag:"g",attributes:u({},g.inner),children:[zt(u({tag:l.tag,attributes:u(u({},l.attributes),g.path)},C))]},v={tag:"g",attributes:u({},g.outer),children:[P]},p="mask-".concat(s||fn()),h="clip-".concat(s||fn()),w={tag:"mask",attributes:u(u({},Tn),{},{id:p,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,v]},A={tag:"defs",children:[{tag:"clipPath",attributes:{id:h},children:We(b)},w]};return e.push(A,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(h,")"),mask:"url(#".concat(p,")")},Tn)}),{children:e,attributes:r}}}},Xe={provides:function(t){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=u(u({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||s.children.push({tag:"animate",attributes:u(u({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},o),{},{values:"1;0;1;1;0;1;"})}),e.push(s),e.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:u(u({},o),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},Ve={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},Ke=[Xa,Me,Te,Re,Fe,He,Ue,Be,Ge,Xe,Ve];fe(Ke,{mixoutsTo:N});N.noAuto;N.config;N.library;N.dom;var Vn=N.parse;N.findIconDefinition;N.toHtml;var qe=N.icon;N.layer;N.text;N.counter;function Lt(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})),a.push.apply(a,e)}return a}function M(n){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?arguments[t]:{};t%2?Lt(Object(a),!0).forEach(function(e){E(n,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):Lt(Object(a)).forEach(function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(a,e))})}return n}function Cn(n){return Cn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Cn(n)}function E(n,t,a){return t in n?Object.defineProperty(n,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[t]=a,n}function Qe(n,t){if(n==null)return{};var a={},e=Object.keys(n),r,i;for(i=0;i<e.length;i++)r=e[i],!(t.indexOf(r)>=0)&&(a[r]=n[r]);return a}function Ze(n,t){if(n==null)return{};var a=Qe(n,t),e,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)e=i[r],!(t.indexOf(e)>=0)&&Object.prototype.propertyIsEnumerable.call(n,e)&&(a[e]=n[e])}return a}var Je=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},fa={exports:{}};(function(n){(function(t){var a=function(v,p,h){if(!c(p)||d(p)||b(p)||g(p)||f(p))return p;var w,A=0,z=0;if(l(p))for(w=[],z=p.length;A<z;A++)w.push(a(v,p[A],h));else{w={};for(var _ in p)Object.prototype.hasOwnProperty.call(p,_)&&(w[v(_,h)]=a(v,p[_],h))}return w},e=function(v,p){p=p||{};var h=p.separator||"_",w=p.split||/(?=[A-Z])/;return v.split(w).join(h)},r=function(v){return S(v)?v:(v=v.replace(/[\-_\s]+(.)?/g,function(p,h){return h?h.toUpperCase():""}),v.substr(0,1).toLowerCase()+v.substr(1))},i=function(v){var p=r(v);return p.substr(0,1).toUpperCase()+p.substr(1)},o=function(v,p){return e(v,p).toLowerCase()},s=Object.prototype.toString,f=function(v){return typeof v=="function"},c=function(v){return v===Object(v)},l=function(v){return s.call(v)=="[object Array]"},d=function(v){return s.call(v)=="[object Date]"},b=function(v){return s.call(v)=="[object RegExp]"},g=function(v){return s.call(v)=="[object Boolean]"},S=function(v){return v=v-0,v===v},C=function(v,p){var h=p&&"process"in p?p.process:p;return typeof h!="function"?v:function(w,A){return h(w,v,A)}},P={camelize:r,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(v,p){return a(C(r,p),v)},decamelizeKeys:function(v,p){return a(C(o,p),v,p)},pascalizeKeys:function(v,p){return a(C(i,p),v)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};n.exports?n.exports=P:t.humps=P})(Je)})(fa);var nr=fa.exports,tr=["class","style"];function ar(n){return n.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,a){var e=a.indexOf(":"),r=nr.camelize(a.slice(0,e)),i=a.slice(e+1).trim();return t[r]=i,t},{})}function er(n){return n.split(/\s+/).reduce(function(t,a){return t[a]=!0,t},{})}function la(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof n=="string")return n;var e=(n.children||[]).map(function(f){return la(f)}),r=Object.keys(n.attributes||{}).reduce(function(f,c){var l=n.attributes[c];switch(c){case"class":f.class=er(l);break;case"style":f.style=ar(l);break;default:f.attrs[c]=l}return f},{attrs:{},class:{},style:{}});a.class;var i=a.style,o=i===void 0?{}:i,s=Ze(a,tr);return va(n.tag,M(M(M({},t),{},{class:r.class,style:M(M({},r.style),o)},r.attrs),s),e)}var ca=!1;try{ca=!0}catch{}function rr(){if(!ca&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function Rn(n,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?E({},n,t):{}}function ir(n){var t,a=(t={"fa-spin":n.spin,"fa-pulse":n.pulse,"fa-fw":n.fixedWidth,"fa-border":n.border,"fa-li":n.listItem,"fa-inverse":n.inverse,"fa-flip":n.flip===!0,"fa-flip-horizontal":n.flip==="horizontal"||n.flip==="both","fa-flip-vertical":n.flip==="vertical"||n.flip==="both"},E(t,"fa-".concat(n.size),n.size!==null),E(t,"fa-rotate-".concat(n.rotation),n.rotation!==null),E(t,"fa-pull-".concat(n.pull),n.pull!==null),E(t,"fa-swap-opacity",n.swapOpacity),E(t,"fa-bounce",n.bounce),E(t,"fa-shake",n.shake),E(t,"fa-beat",n.beat),E(t,"fa-fade",n.fade),E(t,"fa-beat-fade",n.beatFade),E(t,"fa-flash",n.flash),E(t,"fa-spin-pulse",n.spinPulse),E(t,"fa-spin-reverse",n.spinReverse),t);return Object.keys(a).map(function(e){return a[e]?e:null}).filter(function(e){return e})}function Mt(n){if(n&&Cn(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Vn.icon)return Vn.icon(n);if(n===null)return null;if(Cn(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}var or=ma({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,a){var e=a.attrs,r=V(function(){return Mt(t.icon)}),i=V(function(){return Rn("classes",ir(t))}),o=V(function(){return Rn("transform",typeof t.transform=="string"?Vn.transform(t.transform):t.transform)}),s=V(function(){return Rn("mask",Mt(t.mask))}),f=V(function(){return qe(r.value,M(M(M(M({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});da(f,function(l){if(!l)return rr("Could not find one or more icon(s)",r.value,s.value)},{immediate:!0});var c=V(function(){return f.value?la(f.value.abstract[0],{},e):null});return function(){return c.value}}});const sr={name:"FontAwesomeIcon",props:{icon:{type:Object,required:!0}}},cr=Object.assign(sr,{setup(n){return(t,a)=>(pa(),ba(ga(or),{icon:n.icon,width:"16",height:"16"},null,8,["icon"]))}});var ur={prefix:"fas",iconName:"earth-africa",icon:[512,512,[127757,"globe-africa"],"f57c","M177.8 63.2l10 17.4c2.8 4.8 4.2 10.3 4.2 15.9v41.4c0 3.9 1.6 7.7 4.3 10.4c6.2 6.2 16.5 5.7 22-1.2l13.6-17c4.7-5.9 12.9-7.7 19.6-4.3l15.2 7.6c3.4 1.7 7.2 2.6 11 2.6c6.5 0 12.8-2.6 17.4-7.2l3.9-3.9c2.9-2.9 7.3-3.6 11-1.8l29.2 14.6c7.8 3.9 12.6 11.8 12.6 20.5c0 10.5-7.1 19.6-17.3 22.2l-35.4 8.8c-7.4 1.8-15.1 1.5-22.3-.9l-32-10.7c-3.3-1.1-6.7-1.7-10.2-1.7c-7 0-13.8 2.3-19.4 6.5L176 212c-10.1 7.6-16 19.4-16 32v28c0 26.5 21.5 48 48 48h32c8.8 0 16 7.2 16 16v48c0 17.7 14.3 32 32 32c10.1 0 19.6-4.7 25.6-12.8l25.6-34.1c8.3-11.1 12.8-24.6 12.8-38.4V318.6c0-3.9 2.6-7.3 6.4-8.2l5.3-1.3c11.9-3 20.3-13.7 20.3-26c0-7.1-2.8-13.9-7.8-18.9l-33.5-33.5c-3.7-3.7-3.7-9.7 0-13.4c5.7-5.7 14.1-7.7 21.8-5.1l14.1 4.7c12.3 4.1 25.7-1.5 31.5-13c3.5-7 11.2-10.8 18.9-9.2l27.4 5.5C432 112.4 351.5 48 256 48c-27.7 0-54 5.4-78.2 15.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},mr={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]},dr={prefix:"fas",iconName:"caret-up",icon:[320,512,[],"f0d8","M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]},vr={prefix:"fas",iconName:"snowflake",icon:[448,512,[10052,10054],"f2dc","M224 0c17.7 0 32 14.3 32 32V62.1l15-15c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-49 49v70.3l61.4-35.8 17.7-66.1c3.4-12.8 16.6-20.4 29.4-17s20.4 16.6 17 29.4l-5.2 19.3 23.6-13.8c15.3-8.9 34.9-3.7 43.8 11.5s3.8 34.9-11.5 43.8l-25.3 14.8 21.7 5.8c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17l-67.7-18.1L287.5 256l60.9 35.5 67.7-18.1c12.8-3.4 26 4.2 29.4 17s-4.2 26-17 29.4l-21.7 5.8 25.3 14.8c15.3 8.9 20.4 28.5 11.5 43.8s-28.5 20.4-43.8 11.5l-23.6-13.8 5.2 19.3c3.4 12.8-4.2 26-17 29.4s-26-4.2-29.4-17l-17.7-66.1L256 311.7v70.3l49 49c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-15-15V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V449.9l-15 15c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l49-49V311.7l-61.4 35.8-17.7 66.1c-3.4 12.8-16.6 20.4-29.4 17s-20.4-16.6-17-29.4l5.2-19.3L48.1 395.6c-15.3 8.9-34.9 3.7-43.8-11.5s-3.7-34.9 11.5-43.8l25.3-14.8-21.7-5.8c-12.8-3.4-20.4-16.6-17-29.4s16.6-20.4 29.4-17l67.7 18.1L160.5 256 99.6 220.5 31.9 238.6c-12.8 3.4-26-4.2-29.4-17s4.2-26 17-29.4l21.7-5.8L15.9 171.6C.6 162.7-4.5 143.1 4.4 127.9s28.5-20.4 43.8-11.5l23.6 13.8-5.2-19.3c-3.4-12.8 4.2-26 17-29.4s26 4.2 29.4 17l17.7 66.1L192 200.3V129.9L143 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l15 15V32c0-17.7 14.3-32 32-32z"]},pr={prefix:"fas",iconName:"caret-down",icon:[320,512,[],"f0d7","M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]},br={prefix:"fas",iconName:"arrow-right-arrow-left",icon:[448,512,[8644,"exchange"],"f0ec","M438.6 150.6c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.7 96 32 96C14.3 96 0 110.3 0 128s14.3 32 32 32l306.7 0-41.4 41.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96zm-333.3 352c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 416 416 416c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0 41.4-41.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96z"]},gr={prefix:"fas",iconName:"sun",icon:[512,512,[9728],"f185","M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"]},hr={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},yr={prefix:"fas",iconName:"earth-americas",icon:[512,512,[127758,"earth","earth-america","globe-americas"],"f57d","M57.7 193l9.4 16.4c8.3 14.5 21.9 25.2 38 29.8L163 255.7c17.2 4.9 29 20.6 29 38.5v39.9c0 11 6.2 21 16 25.9s16 14.9 16 25.9v39c0 15.6 14.9 26.9 29.9 22.6c16.1-4.6 28.6-17.5 32.7-33.8l2.8-11.2c4.2-16.9 15.2-31.4 30.3-40l8.1-4.6c15-8.5 24.2-24.5 24.2-41.7v-8.3c0-12.7-5.1-24.9-14.1-33.9l-3.9-3.9c-9-9-21.2-14.1-33.9-14.1H257c-11.1 0-22.1-2.9-31.8-8.4l-34.5-19.7c-4.3-2.5-7.6-6.5-9.2-11.2c-3.2-9.6 1.1-20 10.2-24.5l5.9-3c6.6-3.3 14.3-3.9 21.3-1.5l23.2 7.7c8.2 2.7 17.2-.4 21.9-7.5c4.7-7 4.2-16.3-1.2-22.8l-13.6-16.3c-10-12-9.9-29.5 .3-41.3l15.7-18.3c8.8-10.3 10.2-25 3.5-36.7l-2.4-4.2c-3.5-.2-6.9-.3-10.4-.3C163.1 48 84.4 108.9 57.7 193zM464 256c0-36.8-9.6-71.4-26.4-101.5L412 164.8c-15.7 6.3-23.8 23.8-18.5 39.8l16.9 50.7c3.5 10.4 12 18.3 22.6 20.9l29.1 7.3c1.2-9 1.8-18.2 1.8-27.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]},kr={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},fr={prefix:"fas",iconName:"xmark",icon:[320,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]},xr=fr,wr={prefix:"fas",iconName:"moon",icon:[384,512,[127769,9214],"f186","M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"]},Ar={prefix:"fas",iconName:"earth-oceania",icon:[512,512,["globe-oceania"],"e47b","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM208.6 357.3l-39-13.5c-6.5-2.2-13.6-2.3-20.1-.3l-15.3 4.9c-18.5 5.9-38.5-2.4-47.5-19.5l-3.3-6.2c-10.6-20.1-2.3-45 18.2-54.7l35.3-16.8c2.3-1.1 4.4-2.8 5.9-4.8l5.3-7c7.2-9.6 18.6-15.3 30.6-15.3s23.4 5.7 30.6 15.3l4.6 6.1c2 2.6 4.9 4.5 8.1 5.1c7.8 1.6 15.7-1.5 20.4-7.9l10.4-14.2c2-2.8 5.3-4.4 8.7-4.4c4.4 0 8.4 2.7 10 6.8l10.1 25.9c2.8 7.2 6.7 14 11.5 20.2L311 299.8c5.8 7.4 9 16.6 9 26s-3.2 18.6-9 26L299 367.2c-8.3 10.6-21 16.8-34.4 16.8c-8.4 0-16.6-2.4-23.7-7l-25.4-16.4c-2.2-1.4-4.5-2.5-6.9-3.4zm65.2-214.8L296 164.7c10.1 10.1 2.9 27.3-11.3 27.3H254.8c-5.6 0-11.1-1.2-16.2-3.4l-42.8-19c-14.3-6.3-11.9-27.3 3.4-30.3l38.5-7.7c13.1-2.6 26.7 1.5 36.1 10.9zM248 432c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H264c-8.8 0-16-7.2-16-16zM431.2 298.9l8 24c2.8 8.4-1.7 17.4-10.1 20.2s-17.4-1.7-20.2-10.1l-8-24c-2.8-8.4 1.7-17.4 10.1-20.2s17.4 1.7 20.2 10.1zm-19.9 80.4l-32 32c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l32-32c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]},Or={prefix:"fas",iconName:"check",icon:[512,512,[10003,10004],"f00c","M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Sr={prefix:"fas",iconName:"earth-europe",icon:[512,512,["globe-europe"],"f7a2","M266.3 48.3L232.5 73.6c-5.4 4-8.5 10.4-8.5 17.1v9.1c0 6.8 5.5 12.3 12.3 12.3c2.4 0 4.8-.7 6.8-2.1l41.8-27.9c2-1.3 4.4-2.1 6.8-2.1h1c6.2 0 11.3 5.1 11.3 11.3c0 3-1.2 5.9-3.3 8l-19.9 19.9c-5.8 5.8-12.9 10.2-20.7 12.8l-26.5 8.8c-5.8 1.9-9.6 7.3-9.6 13.4c0 3.7-1.5 7.3-4.1 10l-17.9 17.9c-6.4 6.4-9.9 15-9.9 24v4.3c0 16.4 13.6 29.7 29.9 29.7c11 0 21.2-6.2 26.1-16l4-8.1c2.4-4.8 7.4-7.9 12.8-7.9c4.5 0 8.7 2.1 11.4 5.7l16.3 21.7c2.1 2.9 5.5 4.5 9.1 4.5c8.4 0 13.9-8.9 10.1-16.4l-1.1-2.3c-3.5-7 0-15.5 7.5-18l21.2-7.1c7.6-2.5 12.7-9.6 12.7-17.6c0-10.3 8.3-18.6 18.6-18.6H400c8.8 0 16 7.2 16 16s-7.2 16-16 16H379.3c-7.2 0-14.2 2.9-19.3 8l-4.7 4.7c-2.1 2.1-3.3 5-3.3 8c0 6.2 5.1 11.3 11.3 11.3h11.3c6 0 11.8 2.4 16 6.6l6.5 6.5c1.8 1.8 2.8 4.3 2.8 6.8s-1 5-2.8 6.8l-7.5 7.5C386 262 384 266.9 384 272s2 10 5.7 13.7L408 304c10.2 10.2 24.1 16 38.6 16H454c6.5-20.2 10-41.7 10-64c0-111.4-87.6-202.4-197.7-207.7zm172 307.9c-3.7-2.6-8.2-4.1-13-4.1c-6 0-11.8-2.4-16-6.6L396 332c-7.7-7.7-18-12-28.9-12c-9.7 0-19.2-3.5-26.6-9.8L314 287.4c-11.6-9.9-26.4-15.4-41.6-15.4H251.4c-12.6 0-25 3.7-35.5 10.7L188.5 301c-17.8 11.9-28.5 31.9-28.5 53.3v3.2c0 17 6.7 33.3 18.7 45.3l16 16c8.5 8.5 20 13.3 32 13.3H248c13.3 0 24 10.7 24 24c0 2.5 .4 5 1.1 7.3c71.3-5.8 132.5-47.6 165.2-107.2zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM187.3 100.7c-6.2-6.2-16.4-6.2-22.6 0l-32 32c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0l32-32c6.2-6.2 6.2-16.4 0-22.6z"]},Cr={prefix:"fas",iconName:"earth-asia",icon:[512,512,[127759,"globe-asia"],"f57e","M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9h2.3c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"]};export{cr as _,yr as a,Sr as b,ur as c,Cr as d,Ar as e,mr as f,vr as g,kr as h,dr as i,pr as j,Or as k,xr as l,wr as m,gr as n,hr as o,br as p};
