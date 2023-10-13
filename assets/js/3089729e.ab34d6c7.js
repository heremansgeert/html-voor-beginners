"use strict";(self.webpackChunkhtml_voor_beginners=self.webpackChunkhtml_voor_beginners||[]).push([[9091],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(t),p=r,k=d["".concat(s,".").concat(p)]||d[p]||c[p]||l;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=p;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},8054:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>u,default:()=>k,frontMatter:()=>s,metadata:()=>m,toc:()=>d});var a=t(7462),r=(t(7294),t(3905)),l=t(1007),i=t(4866),o=t(5162);const s={},u=void 0,m={type:"mdx",permalink:"/H2-elemten-en-tags/h-elementen",source:"@site/src/pages/H2-elemten-en-tags/h-elementen.md",description:"Inleiding",frontMatter:{}},d=[{value:"Inleiding",id:"inleiding",level:2},{value:"Hoe gebruik je een kop?",id:"hoe-gebruik-je-een-kop",level:2},{value:"Kenmerken van een kop",id:"kenmerken-van-een-kop",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Oefeningen",id:"oefeningen",level:2},{value:"Toegankelijkheid en SEO",id:"toegankelijkheid-en-seo",level:2}],c={toc:d},p="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"koppen-maken-met-html"},"Koppen maken met HTML"),(0,r.kt)("h2",{id:"inleiding"},"Inleiding"),(0,r.kt)("p",null,"Een kop is een titel van een tekst. Net zoals je in Word een titel kan maken, kan je in HTML een kop maken. "),(0,r.kt)("p",null,"In HTML kan je zes verschillende koppen maken. De koppen worden aangeduid met de letters h en een cijfer van 1 tot en met 6. De h staat voor heading.\nHet cijfer geeft aan welke kop het is. Een h1 is de belangrijkste kop. Een h6 is de minst belangrijke kop. De standaard opmaak van een ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," element is groot en vet. De standaard opmaak van een ",(0,r.kt)("inlineCode",{parentName:"p"},"<h6>")," element is klein en niet vet."),(0,r.kt)("p",null,"Hieronder zie je een voorbeeld van een ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," element tot en met een ",(0,r.kt)("inlineCode",{parentName:"p"},"<h6>")," element:"),(0,r.kt)(l.Z,{mdxType:"BrowserWindow"},(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"H1 t.e.m. H6",label:"H1 t.e.m. h6",default:!0,mdxType:"TabItem"},(0,r.kt)("h1",null,"Dit is een h1 element"),(0,r.kt)("h2",null,"Dit is een h2 element"),(0,r.kt)("h3",null,"Dit is een h3 element"),(0,r.kt)("h4",null,"Dit is een h4 element"),(0,r.kt)("h5",null,"Dit is een h5 element"),(0,r.kt)("h6",null,"Dit is een h6 element")),(0,r.kt)(o.Z,{value:"Broncode",label:"Broncode",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<h1>Dit is een h1 element</h1>\n<h2>Dit is een h2 element</h2>\n<h3>Dit is een h3 element</h3>\n<h4>Dit is een h4 element</h4>\n<h5>Dit is een h5 element</h5>  \n<h6>Dit is een h6 element</h6>\n"))))),(0,r.kt)("h2",{id:"hoe-gebruik-je-een-kop"},"Hoe gebruik je een kop?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"De belangrijkste titel")," van een webpagina is een ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," element. Een webpagina mag maar \xe9\xe9n ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," element bevatten.\nDe ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," element geeft aan waar de webpagina over gaat."),(0,r.kt)("p",null,"De andere koppen gebruik je om de tekst op te delen in verschillende delen.\nHierbij geldt de regel dat een ",(0,r.kt)("inlineCode",{parentName:"p"},"<h2>")," element een subtitel is van een ",(0,r.kt)("inlineCode",{parentName:"p"},"<h1>")," element. Een ",(0,r.kt)("inlineCode",{parentName:"p"},"<h3>")," element is een subtitel van een ",(0,r.kt)("inlineCode",{parentName:"p"},"<h2>")," element. Enzovoort."),(0,r.kt)("p",null,"Op een webpagina kunnen ",(0,r.kt)("strong",{parentName:"p"},"wel")," meerdere h2-h6 elementen voorkomen. "),(0,r.kt)("h2",{id:"kenmerken-van-een-kop"},"Kenmerken van een kop"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"een h-element is een block-element. Dit betekent dat het element altijd op een nieuwe lijn begint en de rest van de ruimte opvult."),(0,r.kt)("li",{parentName:"ul"},"een h-element is een container-element. Dit betekent dat je er andere elementen in kan plaatsen.")),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gebruik een ",(0,r.kt)("inlineCode",{parentName:"li"},"<h1>")," element voor de belangrijkste titel van een webpagina."),(0,r.kt)("li",{parentName:"ul"},"Laat een ",(0,r.kt)("inlineCode",{parentName:"li"},"<h1>")," element maar \xe9\xe9n keer voorkomen op een webpagina."),(0,r.kt)("li",{parentName:"ul"},"Spring niet van een ",(0,r.kt)("inlineCode",{parentName:"li"},"<h1>")," element naar een ",(0,r.kt)("inlineCode",{parentName:"li"},"<h3>")," element. Gebruik eerst een ",(0,r.kt)("inlineCode",{parentName:"li"},"<h2>")," element. ")),(0,r.kt)("h2",{id:"oefeningen"},"Oefeningen"),(0,r.kt)("admonition",{title:"Oefening 1",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Maak een webpagina met de volgende inhoud:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h1>")," element met als inhoud: Mijn favoriete vakantiebestemming"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h2>")," element met als inhoud: Spanje"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h3>")," element met als inhoud: Barcelona"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h3>")," element met als inhoud: Madrid"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h2>")," element met als inhoud: Frankrijk"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h3>")," element met als inhoud: Parijs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h3>")," element met als inhoud: Nice"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h2>")," element met als inhoud: Itali\xeb"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h3>")," element met als inhoud: Rome"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<h3>")," element met als inhoud: Veneti\xeb"))),(0,r.kt)("h2",{id:"toegankelijkheid-en-seo"},"Toegankelijkheid en SEO",(0,r.kt)("sup",{parentName:"h2",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Een pagina met goed gestructureerde koppen is toegankelijker voor mensen met een visuele beperking. Screenreaders kunnen de koppen voorlezen. Zo kunnen mensen met een visuele beperking de structuur van de pagina beter begrijpen."),(0,r.kt)("li",{parentName:"ul"},"Verder gebruiken zoekmachines de koppen om de inhoud van een pagina te begrijpen. Een pagina met goed gestructureerde koppen zal dus beter scoren in zoekmachines.")),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1"},"SEO staat voor Search Engine Optimization. Het is een verzameling van technieken die je kan gebruiken om je website hoger te laten scoren in zoekmachines.",(0,r.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}k.isMDXComponent=!0},5162:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,i),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var a=t(7462),r=t(7294),l=t(6010),i=t(2466),o=t(6550),s=t(1980),u=t(7392),m=t(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function c(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??d(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function h(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=c(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,u]=k({queryString:t,groupId:a}),[d,h]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,m.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=s??d;return p({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var b=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const m=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=m.indexOf(n),a=u[t].value;a!==o&&(d(n),s(a))},p=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=m.indexOf(e.currentTarget)+1;n=m[t]??m[0];break}case"ArrowLeft":{const t=m.indexOf(e.currentTarget)-1;n=m[t]??m[m.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>m.push(e),onKeyDown:p,onClick:c},i,{className:(0,l.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function g(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=h(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",f.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(g,(0,a.Z)({},e,n)))}function w(e){const n=(0,b.Z)();return r.createElement(N,(0,a.Z)({key:String(n)},e))}},1007:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(7294),r=t(6010);const l={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function i(e){let{children:n,minHeight:t,url:i="http://localhost:3000",style:o,bodyStyle:s}=e;return a.createElement("div",{className:l.browserWindow,style:{...o,minHeight:t}},a.createElement("div",{className:l.browserWindowHeader},a.createElement("div",{className:l.buttons},a.createElement("span",{className:l.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:l.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:l.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(l.browserWindowAddressBar,"text--truncate")},i),a.createElement("div",{className:l.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:l.bar}),a.createElement("span",{className:l.bar}),a.createElement("span",{className:l.bar})))),a.createElement("div",{className:l.browserWindowBody,style:s},n))}}}]);