```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# HTML-Elementen

Elke webpagina die je bezoekt, van eenvoudige blogs tot complexe webshops, is opgebouwd uit HTML-elementen. Deze elementen vormen de structuur en inhoud van een webpagina. Laten we duiken in de wereld van HTML-elementen en ontdekken hoe ze werken!

## Wat is een HTML-element?

Een HTML-element is een individueel component van een webpagina. Denk aan het als een bouwsteen. Net zoals een huis is opgebouwd uit bakstenen, balken en ramen, 
is een webpagina opgebouwd uit elementen zoals `<h1>`, `<p>`, en `<div>`.

Elk element zegt iets over de inhoud van de webpagina. Voorbeelden van HTML-elemten zijn:

- Een `<h1>` element zegt bijvoorbeeld dat de tekst die erin staat een kop is. 
- Een `<p>` element zegt dat de tekst die erin staat een paragraaf is. 
- Een `<strong>` element zegt dat de tekst die erin staat belangrijk is.
- Een `<address>` element zegt dat de tekst die erin staat een adres is.

HTML kent veel verschillende elementen. Voor een overzicht van alle elementen, zie [HTML elementen](https://developer.mozilla.org/en-US/docs/Web/HTML/Element).

:::info

Je hoeft niet alle elementen van buiten te kennen. Enkel de elementen die in deze cursus aan bod komen moet je kennen.
Je moet wel in staat zijn om de elementen die je niet kent op te zoeken en te gebruiken.
:::

## Structuur van een HTML-element

Een HTML-element bestaat uit:

- een openingstag
- inhoud 
- een sluitingstag. 

De openingstag en de sluitingstag zijn hetzelfde, behalve dat de sluitingstag een schuine streep (/) heeft. 
De inhoud is de tekst die tussen de openingstag en de sluitingstag staat.

Laten we eens kijken naar een voorbeeld van een `<h1>` element:

```html
<h1>Dit is een kop</h1>
```

In dit voorbeeld is 
- `<h1>` de openingstag
- `Dit is een kop` is de inhoud
- `</h1>` is de sluitingstag.

Als we dit in een browser bekijken, ziet het er zo uit:

```mdx-code-block
<BrowserWindow>
<h1>Dit is een kop</h1>
</BrowserWindow>
```

Zoals je ziet wordt de tekst `Dit is een kop` weergegeven en al voorzien van wat opmaak. Dit komt omdat de browser weet dat een `<h1>` element een kop is en dat een kop een bepaalde opmaak moet krijgen.
Later in de cursus leer je hoe je zelf de opmaak van een element kan bepalen.

