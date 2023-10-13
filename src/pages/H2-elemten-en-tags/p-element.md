```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# Paragrafen maken met HTML

## Inleiding

Het `<p>` element in HTML staat voor een alinea. Het is een van de fundamentele bouwstenen voor het structureren van inhoud op het web.

Een alinea is een stuk tekst dat bij elkaar hoort. Een alinea begint met een hoofdletter en eindigt met een punt. Een alinea kan bestaan uit één of meerdere zinnen.

Hieronder zie je een voorbeeld van een `<p>` element:

```mdx-code-block
<BrowserWindow>
<Tabs>
  <TabItem value="Een alinea" label="Een alinea" default>
    <p>Dit is een alinea. Een alinea is een stuk tekst dat bij elkaar hoort. Een alinea begint met een hoofdletter en eindigt met een punt. Een alinea kan bestaan uit één of meerdere zinnen.</p>
  </TabItem>
  <TabItem value="Broncode" label="Broncode">
```

```html
<p>Dit is een alinea. Een alinea is een stuk tekst dat bij elkaar hoort. Een alinea begint met een hoofdletter en eindigt met een punt. Een alinea kan bestaan uit één of meerdere zinnen.</p>
```

```mdx-code-block
  </TabItem>
 </Tabs>
 </BrowserWindow>
  ```

## Hoe gebruik je een alinea?

Een alinea gebruik je om een stuk tekst te structureren. Een alinea begint altijd op een nieuwe lijn. Standaard tonen browsers een witregel tussen twee alinea's 
waardoor het duidelijk is dat het om twee verschillende alinea's gaat.

Omdat een `<p>` element een block-element is kan je er dus inlines-elementen in plaatsen. Je kan bijvoorbeeld een `<strong>` element in een `<p>` element plaatsen.
Over deze inline-elementen leer je meer in de volgende hoofdstukken.


## Kenmerken van een alinea

- een `<p>` element is een block-element. Dit betekent dat het element altijd op een nieuwe lijn begint en de rest van de ruimte opvult.
- een `<p>` element is een container-element. Dit betekent dat je er andere elementen in kan plaatsen.

## Best practices

- Gebruik een `<p>` element om een stuk tekst te structureren.
- Vermijd alinea's die te lang zijn. Een goede vuiistregel is dat een alinea niet langer mag zijn dan 5 regels.
- Gebruik een `<p>` element niet om een titel te maken. Gebruik hiervoor een `<h1>` element.
- Gebruiker ook geen `<p>` om slechts één woord te structureren. Gebruik hiervoor een `<strong>` element.
- Nest geen `<p>` elementen. Dit betekent dat je geen `<p>` element in een ander `<p>` element mag plaatsen.

:::note Oefening 2

Neem opnieuw het HTML-bestand van oefening 1. Voeg een `<p>` element toe met de volgende inhoud:

- Onder de kop Spanje voeg je toe:

Ik ga graag naar Spanje op vakantie. Spanje is een land in het zuidwesten van Europa. Het land beslaat grofweg 80% van het Iberisch Schiereiland. Binnen Europa grenst het in het noorden aan Frankrijk en Andorra, in het westen aan Portugal, in het oosten en zuiden aan de Middellandse Zee, in het zuiden aan Gibraltar en via de exclaves Melilla en Ceuta aan Marokko. De hoofdstad van Spanje is Madrid, een stad met meer dan 3 miljoen inwoners gelegen in het midden van het land.

- Onder de kop Barcelona voeg je toe:

Barcelona is niet de hoofdstad van Spanje maar wel de grootste stad van Catalonië. Barcelona is een populaire vakantiebestemming. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is de Sagrada Familia. Dit is een kerk die ontworpen is door de architect Antoni Gaudí. De bouw van de kerk is begonnen in 1882 en is nog steeds niet afgerond. De verwachting is dat de kerk in 2026 klaar zal zijn.

- Onder de kop Madrid voeg je toe:

Madrid is de hoofdstad van Spanje. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is het Koninklijk Paleis van Madrid. Dit is het officiële verblijf van de Spaanse koninklijke familie. Het paleis is gebouwd in de 18e eeuw en is het grootste koninklijke paleis ter wereld.

- Onder de kop Frankrijk voeg je toe:

Ik ga graag naar Frankrijk op vakantie vooral omdat ze daar zo lekker eten hebben. Verder kent Frankrijk een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is de Eiffeltoren. Dit is een toren van 324 meter hoog die ontworpen is door de ingenieur Gustave Eiffel. De toren is gebouwd in 1887 en is een van de bekendste bouwwerken ter wereld.

- Onder de kop Parijs voeg je toe:

Parijs is de hoofdstad van Frankrijk. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is de Eiffeltoren. Dit is een toren van 324 meter hoog die ontworpen is door de ingenieur Gustave Eiffel. De toren is gebouwd in 1887 en is een van de bekendste bouwwerken ter wereld.

- Onder de kop Nice voeg je toe:

Nice is een stad in het zuiden van Frankrijk. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is de Promenade des Anglais. Dit is een boulevard langs de Middellandse Zee. De boulevard is gebouwd in 1822 en is een van de bekendste boulevards ter wereld.

- Onder de kop Italië voeg je toe:

Ik ga graag naar Italië op vakantie. Italië is een land in Zuid-Europa. Het land beslaat grofweg 80% van het Apennijns Schiereiland. Binnen Europa grenst het in het noorden aan Frankrijk, Zwitserland, Oostenrijk en Slovenië. De hoofdstad van Italië is Rome, een stad met meer dan 2 miljoen inwoners gelegen in het midden van het land.

- Onder de kop Rome voeg je toe:

Rome is de hoofdstad van Italië. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is het Colosseum. Dit is een amfitheater dat gebouwd is in de 1e eeuw na Christus. Het Colosseum is een van de zeven wereldwonderen.

- Onder de kop Venetië voeg je toe:

Venetië is een stad in het noordoosten van Italië. De stad heeft een rijke geschiedenis en een prachtige architectuur. De bekendste bezienswaardigheid is het San Marcoplein. Dit is een plein dat gebouwd is in de 9e eeuw na Christus. Het San Marcoplein is een van de bekendste pleinen ter wereld.

:::


