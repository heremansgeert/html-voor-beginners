"use strict";(self.webpackChunkhtml_voor_beginners=self.webpackChunkhtml_voor_beginners||[]).push([[7823],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(t),p=r,k=c["".concat(s,".").concat(p)]||c[p]||m[p]||i;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4817:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>d,default:()=>k,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var a=t(7462),r=(t(7294),t(3905)),i=t(1007),o=t(4866),l=t(5162);const s={},d=void 0,u={type:"mdx",permalink:"/H2-elemten-en-tags/p-element",source:"@site/src/pages/H2-elemten-en-tags/p-element.md",description:"Inleiding",frontMatter:{}},c=[{value:"Inleiding",id:"inleiding",level:2},{value:"Hoe gebruik je een alinea?",id:"hoe-gebruik-je-een-alinea",level:2},{value:"Kenmerken van een alinea",id:"kenmerken-van-een-alinea",level:2},{value:"Best practices",id:"best-practices",level:2}],m={toc:c},p="wrapper";function k(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"paragrafen-maken-met-html"},"Paragrafen maken met HTML"),(0,r.kt)("h2",{id:"inleiding"},"Inleiding"),(0,r.kt)("p",null,"Het ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," element in HTML staat voor een alinea. Het is een van de fundamentele bouwstenen voor het structureren van inhoud op het web."),(0,r.kt)("p",null,"Een alinea is een stuk tekst dat bij elkaar hoort. Een alinea begint met een hoofdletter en eindigt met een punt. Een alinea kan bestaan uit \xe9\xe9n of meerdere zinnen."),(0,r.kt)("p",null,"Hieronder zie je een voorbeeld van een ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," element:"),(0,r.kt)(i.Z,{mdxType:"BrowserWindow"},(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"Een alinea",label:"Een alinea",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Dit is een alinea. Een alinea is een stuk tekst dat bij elkaar hoort. Een alinea begint met een hoofdletter en eindigt met een punt. Een alinea kan bestaan uit \xe9\xe9n of meerdere zinnen.")),(0,r.kt)(l.Z,{value:"Broncode",label:"Broncode",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},"<p>Dit is een alinea. Een alinea is een stuk tekst dat bij elkaar hoort. Een alinea begint met een hoofdletter en eindigt met een punt. Een alinea kan bestaan uit \xe9\xe9n of meerdere zinnen.</p>\n"))))),(0,r.kt)("h2",{id:"hoe-gebruik-je-een-alinea"},"Hoe gebruik je een alinea?"),(0,r.kt)("p",null,"Een alinea gebruik je om een stuk tekst te structureren. Een alinea begint altijd op een nieuwe lijn. Standaard tonen browsers een witregel tussen twee alinea's\nwaardoor het duidelijk is dat het om twee verschillende alinea's gaat."),(0,r.kt)("p",null,"Omdat een ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," element een block-element is kan je er dus inlines-elementen in plaatsen. Je kan bijvoorbeeld een ",(0,r.kt)("inlineCode",{parentName:"p"},"<strong>")," element in een ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," element plaatsen.\nOver deze inline-elementen leer je meer in de volgende hoofdstukken."),(0,r.kt)("h2",{id:"kenmerken-van-een-alinea"},"Kenmerken van een alinea"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"een ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," element is een block-element. Dit betekent dat het element altijd op een nieuwe lijn begint en de rest van de ruimte opvult."),(0,r.kt)("li",{parentName:"ul"},"een ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," element is een container-element. Dit betekent dat je er andere elementen in kan plaatsen.")),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Gebruik een ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," element om een stuk tekst te structureren."),(0,r.kt)("li",{parentName:"ul"},"Vermijd alinea's die te lang zijn. Een goede vuiistregel is dat een alinea niet langer mag zijn dan 5 regels."),(0,r.kt)("li",{parentName:"ul"},"Gebruik een ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," element niet om een titel te maken. Gebruik hiervoor een ",(0,r.kt)("inlineCode",{parentName:"li"},"<h1>")," element."),(0,r.kt)("li",{parentName:"ul"},"Gebruiker ook geen ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," om slechts \xe9\xe9n woord te structureren. Gebruik hiervoor een ",(0,r.kt)("inlineCode",{parentName:"li"},"<strong>")," element."),(0,r.kt)("li",{parentName:"ul"},"Nest geen ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," elementen. Dit betekent dat je geen ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," element in een ander ",(0,r.kt)("inlineCode",{parentName:"li"},"<p>")," element mag plaatsen.")),(0,r.kt)("admonition",{title:"Oefening 2",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Neem opnieuw het HTML-bestand van oefening 1. Voeg een ",(0,r.kt)("inlineCode",{parentName:"p"},"<p>")," element toe met de volgende inhoud:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Onder de kop Spanje voeg je toe:")),(0,r.kt)("p",{parentName:"admonition"},"Ik ga graag naar Spanje op vakantie. Spanje is een land in het zuidwesten van Europa. Het land beslaat grofweg 80% van het Iberisch Schiereiland. Binnen Europa grenst het in het noorden aan Frankrijk en Andorra, in het westen aan Portugal, in het oosten en zuiden aan de Middellandse Zee, in het zuiden aan Gibraltar en via de exclaves Melilla en Ceuta aan Marokko. De hoofdstad van Spanje is Madrid, een stad met meer dan 3 miljoen inwoners gelegen in het midden van het land."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Onder de kop Barcelona voeg je toe:")),(0,r.kt)("p",{parentName:"admonition"},"Barcelona is niet de hoofdstad van Spanje maar wel de grootste stad van Cataloni\xeb. Barcelona is een populaire vakantiebestemming. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is de Sagrada Familia. Dit is een kerk die ontworpen is door de architect Antoni Gaud\xed. De bouw van de kerk is begonnen in 1882 en is nog steeds niet afgerond. De verwachting is dat de kerk in 2026 klaar zal zijn."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Onder de kop Madrid voeg je toe:")),(0,r.kt)("p",{parentName:"admonition"},"Madrid is de hoofdstad van Spanje. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is het Koninklijk Paleis van Madrid. Dit is het offici\xeble verblijf van de Spaanse koninklijke familie. Het paleis is gebouwd in de 18e eeuw en is het grootste koninklijke paleis ter wereld."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Onder de kop Frankrijk voeg je toe:")),(0,r.kt)("p",{parentName:"admonition"},"Ik ga graag naar Frankrijk op vakantie vooral omdat ze daar zo lekker eten hebben. Verder kent Frankrijk een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is de Eiffeltoren. Dit is een toren van 324 meter hoog die ontworpen is door de ingenieur Gustave Eiffel. De toren is gebouwd in 1887 en is een van de bekendste bouwwerken ter wereld."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Onder de kop Parijs voeg je toe:")),(0,r.kt)("p",{parentName:"admonition"},"Parijs is de hoofdstad van Frankrijk. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is de Eiffeltoren. Dit is een toren van 324 meter hoog die ontworpen is door de ingenieur Gustave Eiffel. De toren is gebouwd in 1887 en is een van de bekendste bouwwerken ter wereld."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Onder de kop Nice voeg je toe:")),(0,r.kt)("p",{parentName:"admonition"},"Nice is een stad in het zuiden van Frankrijk. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is de Promenade des Anglais. Dit is een boulevard langs de Middellandse Zee. De boulevard is gebouwd in 1822 en is een van de bekendste boulevards ter wereld."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Onder de kop Itali\xeb voeg je toe:")),(0,r.kt)("p",{parentName:"admonition"},"Ik ga graag naar Itali\xeb op vakantie. Itali\xeb is een land in Zuid-Europa. Het land beslaat grofweg 80% van het Apennijns Schiereiland. Binnen Europa grenst het in het noorden aan Frankrijk, Zwitserland, Oostenrijk en Sloveni\xeb. De hoofdstad van Itali\xeb is Rome, een stad met meer dan 2 miljoen inwoners gelegen in het midden van het land."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Onder de kop Rome voeg je toe:")),(0,r.kt)("p",{parentName:"admonition"},"Rome is de hoofdstad van Itali\xeb. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is het Colosseum. Dit is een amfitheater dat gebouwd is in de 1e eeuw na Christus. Het Colosseum is een van de zeven wereldwonderen."),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Onder de kop Veneti\xeb voeg je toe:")),(0,r.kt)("p",{parentName:"admonition"},"Veneti\xeb is een stad in het noordoosten van Itali\xeb. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is het San Marcoplein. Dit is een plein dat gebouwd is in de 9e eeuw na Christus. Het San Marcoplein is een van de bekendste pleinen ter wereld.")))}k.isMDXComponent=!0},5162:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const i={tabItem:"tabItem_Ymn6"};function o(e){let{children:n,hidden:t,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(7462),r=t(7294),i=t(6010),o=t(2466),l=t(6550),s=t(1980),d=t(7392),u=t(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function k(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=m(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[s,d]=k({queryString:t,groupId:a}),[c,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),g=(()=>{const e=s??c;return p({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var g=t(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:t,selectedValue:l,selectValue:s,tabValues:d}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),m=e=>{const n=e.currentTarget,t=u.indexOf(n),a=d[t].value;a!==l&&(c(n),s(a))},p=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=u.indexOf(e.currentTarget)+1;n=u[t]??u[0];break}case"ArrowLeft":{const t=u.indexOf(e.currentTarget)-1;n=u[t]??u[u.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n)},d.map((e=>{let{value:n,label:t,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>u.push(e),onKeyDown:p,onClick:m},o,{className:(0,i.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":l===n})}),t??n)})))}function f(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function w(e){const n=b(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",h.tabList)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(f,(0,a.Z)({},e,n)))}function N(e){const n=(0,g.Z)();return r.createElement(w,(0,a.Z)({key:String(n)},e))}},1007:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(7294),r=t(6010);const i={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};function o(e){let{children:n,minHeight:t,url:o="http://localhost:3000",style:l,bodyStyle:s}=e;return a.createElement("div",{className:i.browserWindow,style:{...l,minHeight:t}},a.createElement("div",{className:i.browserWindowHeader},a.createElement("div",{className:i.buttons},a.createElement("span",{className:i.dot,style:{background:"#f25f58"}}),a.createElement("span",{className:i.dot,style:{background:"#fbbe3c"}}),a.createElement("span",{className:i.dot,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,r.Z)(i.browserWindowAddressBar,"text--truncate")},o),a.createElement("div",{className:i.browserWindowMenuIcon},a.createElement("div",null,a.createElement("span",{className:i.bar}),a.createElement("span",{className:i.bar}),a.createElement("span",{className:i.bar})))),a.createElement("div",{className:i.browserWindowBody,style:s},n))}}}]);