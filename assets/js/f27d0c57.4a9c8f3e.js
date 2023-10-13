"use strict";(self.webpackChunkhtml_voor_beginners=self.webpackChunkhtml_voor_beginners||[]).push([[3303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),b=a,m=c["".concat(l,".").concat(b)]||c[b]||p[b]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,o),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var r=n(7462),a=n(7294),i=n(6010),o=n(2466),s=n(6550),l=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function b(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:n,groupId:r}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,d.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),v=(()=>{const e=l??c;return b({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var v=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function w(e){let{className:t,block:n,selectedValue:s,selectValue:l,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),r=u[n].value;r!==s&&(c(t),l(r))},b=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>d.push(e),onKeyDown:b,onClick:p},o,{className:(0,i.Z)("tabs__item",k.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function h(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function f(e){const t=g(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",k.tabList)},a.createElement(w,(0,r.Z)({},e,t)),a.createElement(h,(0,r.Z)({},e,t)))}function T(e){const t=(0,v.Z)();return a.createElement(f,(0,r.Z)({key:String(t)},e))}},1007:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:t,minHeight:n,url:o="http://localhost:3000",style:s,bodyStyle:l}=e;return r.createElement("div",{className:i.browserWindow,style:{...s,minHeight:n}},r.createElement("div",{className:i.browserWindowHeader},r.createElement("div",{className:i.buttons},r.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),r.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),r.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),r.createElement("div",{className:(0,a.Z)(i.browserWindowAddressBar,"text--truncate")},o),r.createElement("div",{className:i.browserWindowMenuIcon},r.createElement("div",null,r.createElement("span",{className:i.bar}),r.createElement("span",{className:i.bar}),r.createElement("span",{className:i.bar})))),r.createElement("div",{className:i.browserWindowBody,style:l},t))}},9191:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),i=n(1007),o=n(4866),s=n(5162);const l={sidebar_position:1},u=void 0,d={unversionedId:"cursus/H1-inleiding/inleiding",id:"cursus/H1-inleiding/inleiding",title:"inleiding",description:"Wat is HTML?",source:"@site/docs/cursus/H1-inleiding/inleiding.md",sourceDirName:"cursus/H1-inleiding",slug:"/cursus/H1-inleiding/inleiding",permalink:"/docs/cursus/H1-inleiding/inleiding",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/cursus/H1-inleiding/inleiding.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"cursusSidebar",next:{title:"Maak je eerste webpagina",permalink:"/docs/cursus/H1-inleiding/Maak-je-eerste-webpagina"}},c={},p=[{value:"Wat is HTML?",id:"wat-is-html",level:2},{value:"Voor wat staat de afkorting HTML?",id:"voor-wat-staat-de-afkorting-html",level:3},{value:"Waar wordt HTML voor gebruikt?",id:"waar-wordt-html-voor-gebruikt",level:2},{value:"Niet alleen voor desktops",id:"niet-alleen-voor-desktops",level:2},{value:"Structuur brengen in tekst",id:"structuur-brengen-in-tekst",level:2}],b={toc:p},m="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inleiding-html"},"Inleiding HTML"),(0,a.kt)("h2",{id:"wat-is-html"},"Wat is HTML?"),(0,a.kt)("p",null,"HTML staat voor HyperText Markup Language. Het is de standaardtaal voor het cre\xebren van webpagina's. Als je ooit een website hebt bezocht, heb je interactie gehad met HTML, zelfs als je het niet wist!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/"},(0,a.kt)("img",{parentName:"a",src:"https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",alt:"Image"}))),(0,a.kt)("h3",{id:"voor-wat-staat-de-afkorting-html"},"Voor wat staat de afkorting HTML?"),(0,a.kt)("p",null,"HTML staat voor HyperText Markup Language. Het is een opmaaktaal die gebruikt wordt om de inhoud van een webpagina te structureren. HTML is een van de drie basisbouwstenen van het web. De andere twee zijn CSS en JavaScript."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hypertext verwijst naar de manier waarop webpagina's aan elkaar worden gelinkt, meestal via hyperlinks."),(0,a.kt)("li",{parentName:"ul"},"Markup Language (opmaaktaal) betekent dat het een taal is die wordt gebruikt om inhoud op te maken en te structureren.")),(0,a.kt)("h2",{id:"waar-wordt-html-voor-gebruikt"},"Waar wordt HTML voor gebruikt?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Het maken van webpagina's die kunnen worden weergegeven in webbrowsers. "),(0,a.kt)("li",{parentName:"ul"},"Structureren van inhoud zoals tekst, afbeeldingen, video's, en andere media."),(0,a.kt)("li",{parentName:"ul"},"Maken van interactieve formulieren, tabellen, lijsten en meer.")),(0,a.kt)("h2",{id:"niet-alleen-voor-desktops"},"Niet alleen voor desktops"),(0,a.kt)("p",null,"HTML is niet alleen voor desktopcomputers. Het wordt gebruikt voor webinhoud op tablets, smartphones en zelfs sommige smart TVs."),(0,a.kt)("h2",{id:"structuur-brengen-in-tekst"},"Structuur brengen in tekst"),(0,a.kt)("p",null,"Wat wil dat nu zeggen ",(0,a.kt)("strong",{parentName:"p"},"opmaaktaal"),"? Wel, HTML is een taal die je gebruikt om tekst te structureren. Je kan er bijvoorbeeld voor zorgen dat een tekst vetgedrukt wordt, of dat er een afbeelding wordt getoond. Je kan er ook voor zorgen dat er een link wordt gemaakt naar een andere pagina."),(0,a.kt)("p",null,"Hieronder zie je een voorbeeld van ongestructureerde tekst en tekst die, dankzij HTML, structuur heeft gekregen."),(0,a.kt)(i.Z,{mdxType:"BrowserWindow"},(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"Zonder structuur",label:"Zonder structuur",default:!0,mdxType:"TabItem"},"Welkom bij de cursus HTML. In deze cursus leer je hoe je een webpagina kan maken met HTML. Wat is HTML? HTML staat voor HyperText Markup Language. Het is een opmaaktaal die gebruikt wordt om de inhoud van een webpagina te structureren. HTML is een van de drie basisbouwstenen van het web. De andere twee zijn CSS en JavaScript. HTML is ontstaan in 1990. Het is een open standaard die beheerd wordt door het W3C. De huidige versie van HTML is HTML5. HTML5 is een uitbreiding van HTML4. HTML4 is de vorige versie van HTML. HTML4 is ontstaan in 1997. Momenteel is HTML5 de enige versie van HTML die ondersteund wordt door alle browsers. HTML5 is dus de versie van HTML die je moet gebruiken om een webpagina te maken."),(0,a.kt)(s.Z,{value:"Met structuur",label:"Met structuur",mdxType:"TabItem"},(0,a.kt)("h1",null,"Welkom bij de cursus HTML"),(0,a.kt)("p",null,"In deze cursus leer je hoe je een webpagina kan maken met HTML."),(0,a.kt)("h2",null,"Wat is HTML?"),(0,a.kt)("p",null,"HTML staat voor HyperText Markup Language. Het is een opmaaktaal die gebruikt wordt om de inhoud van een webpagina te structureren. HTML is een van de drie basisbouwstenen van het web. De andere twee zijn CSS en JavaScript."),(0,a.kt)("h2",null,"De geschiedenis van HTML"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"HTML is ontstaan in 1990."),(0,a.kt)("li",null,"Het is een open standaard die beheerd wordt door het W3C."),(0,a.kt)("li",null,"De huidige versie van HTML is HTML5."))),(0,a.kt)(s.Z,{value:"HTML",label:"HTML",mdxType:"TabItem"},"Hieronder zie je de code die nodig is om de tekst te structureren. Herken je de woorden die je in de tekst ziet terug in de code?",(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Welkom bij de cursus HTML</h1>\n\n<p>In deze cursus leer je hoe je een webpagina kan maken met HTML.</p>\n\n<h2>Wat is HTML?</h2>\n\n<p>HTML staat voor HyperText Markup Language. Het is een opmaaktaal die gebruikt wordt om de inhoud van een webpagina te structureren. HTML is een van de drie basisbouwstenen van het web. De andere twee zijn CSS en JavaScript.</p>\n\n<h2>De geschiedenis van HTML</h2>\n\n<ul>\n  <li>HTML is ontstaan in 1990.</li>\n  <li>Het is een open standaard die beheerd wordt door het W3C.</li>\n  <li>De huidige versie van HTML is HTML5.</li>\n</ul>\n"))))))}g.isMDXComponent=!0}}]);