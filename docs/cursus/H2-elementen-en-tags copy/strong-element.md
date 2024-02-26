---
sidebar_position: 4
---


```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# Stukken tekst benadrukken met het `<strong>` element

## Inleiding

Het `<strong>` element in HTML staat voor een stuk tekst dat benadrukt moet worden. 
Het is een van de fundamentele bouwstenen voor het structureren van inhoud op het web. In de standaardopmaak wordt de tekst die
tussen de `<strong>` tags staat vetgedrukt weergegeven.

Hieronder zie je een voorbeeld van een `<strong>` element:

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
## Hoe gebruik je een `<strong>` element?

Een `<strong>` element gebruik je om een stuk tekst te benadrukken. Dit kan bijvoorbeeld een belangrijk woord zijn of een belangrijke zin.
Hou er rekening mee dat het nooit de bedoeling is om een hele alinea vetgedrukt weer te geven. Hiervoor gebruik je een `<p>` element dat je
vetgedrukt weergeeft met CSS (over CSS leer je meer in de volgende hoofdstukken).



## Kenmerken van een `<strong>` element

- een `<strong>` element is een inline-element. Dit betekent dat het element op dezelfde lijn begint en alleen de ruimte inneemt die het nodig heeft.
- Overmatig gebruik van `<strong>` kan de effectiviteit ervan verminderen. Als alles "belangrijk" is, dan is niets echt belangrijk.
- `<strong>` kan worden gecombineerd met andere inline elementen, zoals `<em>` voor nadruk, om zowel belangrijkheid als nadruk te geven aan een stuk tekst.



:::note Oefening 3


Neem opnieuw het HTML-bestand **Mijn favoriete vakantiebestemming.html**. Zet de volgende zinnen in een `<p>` element:

- Spanje
- hoofdstad
- Europa
- Catalonië
- rijke geschiedenis
- architectuur

:::


