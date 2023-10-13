---
sidebar_position: 1
---

```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```



# Inleiding HTML

## Wat is HTML?

HTML staat voor HyperText Markup Language. Het is de standaardtaal voor het creëren van webpagina's. Als je ooit een website hebt bezocht, heb je interactie gehad met HTML, zelfs als je het niet wist!

[![Image](https://www.w3.org/html/logo/badge/html5-badge-h-solo.png)](https://www.w3.org/)

### Voor wat staat de afkorting HTML?

HTML staat voor HyperText Markup Language. Het is een opmaaktaal die gebruikt wordt om de inhoud van een webpagina te structureren. HTML is een van de drie basisbouwstenen van het web. De andere twee zijn CSS en JavaScript.

- Hypertext verwijst naar de manier waarop webpagina's aan elkaar worden gelinkt, meestal via hyperlinks.
- Markup Language (opmaaktaal) betekent dat het een taal is die wordt gebruikt om inhoud op te maken en te structureren.

## Waar wordt HTML voor gebruikt?

- Het maken van webpagina's die kunnen worden weergegeven in webbrowsers. 
- Structureren van inhoud zoals tekst, afbeeldingen, video's, en andere media.
- Maken van interactieve formulieren, tabellen, lijsten en meer.

## Niet alleen voor desktops

HTML is niet alleen voor desktopcomputers. Het wordt gebruikt voor webinhoud op tablets, smartphones en zelfs sommige smart TVs.

## Structuur brengen in tekst

Wat wil dat nu zeggen **opmaaktaal**? Wel, HTML is een taal die je gebruikt om tekst te structureren. Je kan er bijvoorbeeld voor zorgen dat een tekst vetgedrukt wordt, of dat er een afbeelding wordt getoond. Je kan er ook voor zorgen dat er een link wordt gemaakt naar een andere pagina.

Hieronder zie je een voorbeeld van ongestructureerde tekst en tekst die, dankzij HTML, structuur heeft gekregen.

```mdx-code-block
<BrowserWindow>

<Tabs>
  <TabItem value="Zonder structuur" label="Zonder structuur" default>
   Welkom bij de cursus HTML. In deze cursus leer je hoe je een webpagina kan maken met HTML.
Wat is HTML? HTML staat voor HyperText Markup Language. Het is een opmaaktaal die gebruikt wordt om de inhoud van een webpagina te structureren. HTML is een van de drie basisbouwstenen van het web. De andere twee zijn CSS en JavaScript.
HTML is ontstaan in 1990. Het is een open standaard die beheerd wordt door het W3C. De huidige versie van HTML is HTML5. HTML5 is een uitbreiding van HTML4. HTML4 is de vorige versie van HTML. HTML4 is ontstaan in 1997.
Momenteel is HTML5 de enige versie van HTML die ondersteund wordt door alle browsers. HTML5 is dus de versie van HTML die je moet gebruiken om een webpagina te maken.
  </TabItem>
  <TabItem value="Met structuur" label="Met structuur">
 <h1>Welkom bij de cursus HTML</h1>
<p>In deze cursus leer je hoe je een webpagina kan maken met HTML.</p>
<h2>Wat is HTML?</h2>
<p>HTML staat voor HyperText Markup Language. Het is een opmaaktaal die gebruikt wordt om de inhoud van een webpagina te structureren. HTML is een van de drie basisbouwstenen van het web. De andere twee zijn CSS en JavaScript.</p>
<h2>De geschiedenis van HTML</h2>
<ul>
<li>HTML is ontstaan in 1990.</li>
<li>Het is een open standaard die beheerd wordt door het W3C.</li>
<li>De huidige versie van HTML is HTML5.</li>
</ul>
  </TabItem>
  <TabItem value="HTML" label="HTML">
  Hieronder zie je de code die nodig is om de tekst te structureren. Herken je de woorden die je in de tekst ziet terug in de code?
  ```

  ```html
<h1>Welkom bij de cursus HTML</h1>

<p>In deze cursus leer je hoe je een webpagina kan maken met HTML.</p>

<h2>Wat is HTML?</h2>

<p>HTML staat voor HyperText Markup Language. Het is een opmaaktaal die gebruikt wordt om de inhoud van een webpagina te structureren. HTML is een van de drie basisbouwstenen van het web. De andere twee zijn CSS en JavaScript.</p>

<h2>De geschiedenis van HTML</h2>

<ul>
    <li>HTML is ontstaan in 1990.</li>
    <li>Het is een open standaard die beheerd wordt door het W3C.</li>
    <li>De huidige versie van HTML is HTML5.</li>
</ul>
```

```mdx-code-block
  </TabItem>
</Tabs>
</BrowserWindow>
```






