```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```

# Stukken tekst te benadrukken met het `<em>` element

## Inleiding

Buiten het `<strong>` element bestaat er ook een `<em>` element. Dit element wordt ook
gebruikt om een stuk tekst te benadrukken. Het verschil is dat de tekst die tussen de `<em>` tags staat
schuin wordt weergegeven in plaats van vetgedrukt. 

Hieronder zie je een voorbeeld van een `<em>` element:

```mdx-code-block
<BrowserWindow>
<Tabs>
  <TabItem value="Een alinea" label="Een alinea" default>
    <p>Dit is <em>een alinea</em>. Een alinea is een stuk tekst dat bij <em>elkaar</em> hoort. Een alinea begint met een <em>hoofdletter</em> en eindigt met een punt. 
    Een alinea kan bestaan uit één of <strong><em>meerdere zinnen</em></strong>.</p>
  </TabItem>
  <TabItem value="Broncode" label="Broncode">
```

```html
  <p>Dit is <em>een alinea</em>. Een alinea is een stuk tekst dat bij <em>elkaar</em> hoort. Een alinea begint met een <em>hoofdletter</em> en eindigt met een punt. 
    Een alinea kan bestaan uit één of <strong><em>meerdere zinnen</em></strong>.</p>
```

```mdx-code-block
  </TabItem>
 </Tabs>
 </BrowserWindow>
  ```


## Hoe gebruik je een `<strong>` element?

Net zoals het `<strong>` element gebruik je het `<em>` element om een stuk tekst te benadrukken. Ook het
`<em>` element is een inline element. Dit betekent dat het element op dezelfde lijn begint en alleen de ruimte inneemt die het nodig heeft.

Je kan het `<em>` element combineren met andere inline elementen, zoals `<strong>` voor nadruk, om zowel belangrijkheid als nadruk te geven aan een stuk tekst.

Voorbeeld:

```html
<p>
    <strong><em>Deze tekst zal zowel vet als cursief</em></strong> worden afgedrukt.</p>
```

:::tip

Let vooral op de volgorde van de openings- en sluitingstags. De `<em>` tag moet binnen de `<strong>` tag staan.

:::

## Kenmerken van een `<em>` element

- een `<em>` element is een inline-element. Dit betekent dat het element op dezelfde lijn begint en alleen de ruimte inneemt die het nodig heeft.
- Overmatig gebruik van `<em>` kan de effectiviteit ervan verminderen. Als alles "belangrijk" is, dan is niets echt belangrijk.
- `<em>` kan worden gecombineerd met andere inline elementen, zoals `<strong>` voor nadruk, om zowel belangrijkheid als nadruk te geven aan een stuk tekst.



:::note Oefening 3

Neem opnieuw het HTML-bestand van oefening 3 en zet de volgende woorden in een `<em>` element:

- Spanje
- vakantie
- Zuid-Europa

:::


