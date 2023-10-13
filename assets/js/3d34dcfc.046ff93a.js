"use strict";(self.webpackChunkhtml_voor_beginners=self.webpackChunkhtml_voor_beginners||[]).push([[8848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,b=d["".concat(s,".").concat(p)]||d[p]||m[p]||l;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(7462),a=n(7294),l=n(6010),o=n(2466),i=n(6550),s=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function m(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(r.location.search);t.set(l,e),r.replace({...r.location,search:t.toString()})}),[l,r])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,l=m(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:l}))),[s,u]=b({queryString:n,groupId:r}),[d,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,l]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:r}),g=(()=>{const e=s??d;return p({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&i(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var g=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function h(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),m=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),s(r))},p=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:m},o,{className:(0,l.Z)("tabs__item",f.tabItem,o?.className,{"tabs__item--active":i===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},a.createElement(h,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function y(e){const t=(0,g.Z)();return a.createElement(w,(0,r.Z)({key:String(t)},e))}},1007:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:t,minHeight:n,url:o="http://localhost:3000",style:i,bodyStyle:s}=e;return r.createElement("div",{className:l.browserWindow,style:{...i,minHeight:n}},r.createElement("div",{className:l.browserWindowHeader},r.createElement("div",{className:l.buttons},r.createElement("span",{className:l.dot,style:{background:"#f25f58"}}),r.createElement("span",{className:l.dot,style:{background:"#fbbe3c"}}),r.createElement("span",{className:l.dot,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,a.Z)(l.browserWindowAddressBar,"text--truncate")},o),r.createElement("div",{className:l.browserWindowMenuIcon},r.createElement("div",null,r.createElement("span",{className:l.bar}),r.createElement("span",{className:l.bar}),r.createElement("span",{className:l.bar})))),r.createElement("div",{className:l.browserWindowBody,style:s},t))}},2769:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905)),l=n(1007);n(4866),n(5162);const o={sidebar_position:1},i=void 0,s={unversionedId:"cursus/H2-elementen-en-tags/elementen",id:"cursus/H2-elementen-en-tags/elementen",title:"elementen",description:"Elke webpagina die je bezoekt, van eenvoudige blogs tot complexe webshops, is opgebouwd uit HTML-elementen. Deze elementen vormen de structuur en inhoud van een webpagina. Laten we duiken in de wereld van HTML-elementen en ontdekken hoe ze werken!",source:"@site/docs/cursus/H2-elementen-en-tags/elementen.md",sourceDirName:"cursus/H2-elementen-en-tags",slug:"/cursus/H2-elementen-en-tags/elementen",permalink:"/docs/cursus/H2-elementen-en-tags/elementen",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cursus/H2-elementen-en-tags/elementen.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cursusSidebar",previous:{title:"Visual Studio Code",permalink:"/docs/cursus/H1-inleiding/Visual-studio-code"},next:{title:"h-elementen",permalink:"/docs/cursus/H2-elementen-en-tags/h-elementen"}},u={},c=[{value:"Wat is een HTML-element?",id:"wat-is-een-html-element",level:2},{value:"Structuur van een HTML-element",id:"structuur-van-een-html-element",level:2}],d={toc:c},m="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"html-elementen"},"HTML-Elementen"),(0,a.kt)("p",null,"Elke webpagina die je bezoekt, van eenvoudige blogs tot complexe webshops, is opgebouwd uit HTML-elementen. Deze elementen vormen de structuur en inhoud van een webpagina. Laten we duiken in de wereld van HTML-elementen en ontdekken hoe ze werken!"),(0,a.kt)("h2",{id:"wat-is-een-html-element"},"Wat is een HTML-element?"),(0,a.kt)("p",null,"Een HTML-element is een individueel component van een webpagina. Denk aan het als een bouwsteen. Net zoals een huis is opgebouwd uit bakstenen, balken en ramen,\nis een webpagina opgebouwd uit elementen zoals ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"<p>"),", en ",(0,a.kt)("inlineCode",{parentName:"p"},"<div>"),"."),(0,a.kt)("p",null,"Elk element zegt iets over de inhoud van de webpagina. Voorbeelden van HTML-elemten zijn:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Een ",(0,a.kt)("inlineCode",{parentName:"li"},"<h1>")," element zegt bijvoorbeeld dat de tekst die erin staat een kop is. "),(0,a.kt)("li",{parentName:"ul"},"Een ",(0,a.kt)("inlineCode",{parentName:"li"},"<p>")," element zegt dat de tekst die erin staat een paragraaf is. "),(0,a.kt)("li",{parentName:"ul"},"Een ",(0,a.kt)("inlineCode",{parentName:"li"},"<strong>")," element zegt dat de tekst die erin staat belangrijk is."),(0,a.kt)("li",{parentName:"ul"},"Een ",(0,a.kt)("inlineCode",{parentName:"li"},"<address>")," element zegt dat de tekst die erin staat een adres is.")),(0,a.kt)("p",null,"HTML kent veel verschillende elementen. Voor een overzicht van alle elementen, zie ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element"},"HTML elementen"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Je hoeft niet alle elementen van buiten te kennen. Enkel de elementen die in deze cursus aan bod komen moet je kennen.\nJe moet wel in staat zijn om de elementen die je niet kent op te zoeken en te gebruiken.")),(0,a.kt)("h2",{id:"structuur-van-een-html-element"},"Structuur van een HTML-element"),(0,a.kt)("p",null,"Een HTML-element bestaat uit:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"een openingstag"),(0,a.kt)("li",{parentName:"ul"},"inhoud "),(0,a.kt)("li",{parentName:"ul"},"een sluitingstag. ")),(0,a.kt)("p",null,"De openingstag en de sluitingstag zijn hetzelfde, behalve dat de sluitingstag een schuine streep (/) heeft.\nDe inhoud is de tekst die tussen de openingstag en de sluitingstag staat."),(0,a.kt)("p",null,"Laten we eens kijken naar een voorbeeld van een ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>")," element:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Dit is een kop</h1>\n")),(0,a.kt)("p",null,"In dit voorbeeld is "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<h1>")," de openingstag"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Dit is een kop")," is de inhoud"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"</h1>")," is de sluitingstag.")),(0,a.kt)("p",null,"Als we dit in een browser bekijken, ziet het er zo uit:"),(0,a.kt)(l.Z,{mdxType:"BrowserWindow"},(0,a.kt)("h1",null,"Dit is een kop")),(0,a.kt)("p",null,"Zoals je ziet wordt de tekst ",(0,a.kt)("inlineCode",{parentName:"p"},"Dit is een kop")," weergegeven en al voorzien van wat opmaak. Dit komt omdat de browser weet dat een ",(0,a.kt)("inlineCode",{parentName:"p"},"<h1>")," element een kop is en dat een kop een bepaalde opmaak moet krijgen.\nLater in de cursus leer je hoe je zelf de opmaak van een element kan bepalen."))}p.isMDXComponent=!0}}]);