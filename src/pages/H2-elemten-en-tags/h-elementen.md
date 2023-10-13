```mdx-code-block
import BrowserWindow from '@site/src/components/BrowserWindow';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
```


# Koppen maken met HTML

## Inleiding

Een kop is een titel van een tekst. Net zoals je in Word een titel kan maken, kan je in HTML een kop maken. 

In HTML kan je zes verschillende koppen maken. De koppen worden aangeduid met de letters h en een cijfer van 1 tot en met 6. De h staat voor heading. 
Het cijfer geeft aan welke kop het is. Een h1 is de belangrijkste kop. Een h6 is de minst belangrijke kop. De standaard opmaak van een `<h1>` element is groot en vet. De standaard opmaak van een `<h6>` element is klein en niet vet.

Hieronder zie je een voorbeeld van een `<h1>` element tot en met een `<h6>` element:
```mdx-code-block
<BrowserWindow>
<Tabs>
  <TabItem value="H1 t.e.m. H6" label="H1 t.e.m. h6" default>
    <h1>Dit is een h1 element</h1>
<h2>Dit is een h2 element</h2>
<h3>Dit is een h3 element</h3>
<h4>Dit is een h4 element</h4>
<h5>Dit is een h5 element</h5>  
<h6>Dit is een h6 element</h6>
  </TabItem>
  <TabItem value="Broncode" label="Broncode">
 ```

```html
<h1>Dit is een h1 element</h1>
<h2>Dit is een h2 element</h2>
<h3>Dit is een h3 element</h3>
<h4>Dit is een h4 element</h4>
<h5>Dit is een h5 element</h5>  
<h6>Dit is een h6 element</h6>
```

```mdx-code-block
  </TabItem>
 </Tabs>
 </BrowserWindow>
  ```

## Hoe gebruik je een kop?

**De belangrijkste titel** van een webpagina is een `<h1>` element. Een webpagina mag maar één `<h1>` element bevatten. 
De `<h1>` element geeft aan waar de webpagina over gaat.

De andere koppen gebruik je om de tekst op te delen in verschillende delen. 
Hierbij geldt de regel dat een `<h2>` element een subtitel is van een `<h1>` element. Een `<h3>` element is een subtitel van een `<h2>` element. Enzovoort.

Op een webpagina kunnen **wel** meerdere h2-h6 elementen voorkomen. 

## Kenmerken van een kop

- een h-element is een block-element. Dit betekent dat het element altijd op een nieuwe lijn begint en de rest van de ruimte opvult.
- een h-element is een container-element. Dit betekent dat je er andere elementen in kan plaatsen.



## Best practices

- Gebruik een `<h1>` element voor de belangrijkste titel van een webpagina.
- Laat een `<h1>` element maar één keer voorkomen op een webpagina.
- Spring niet van een `<h1>` element naar een `<h3>` element. Gebruik eerst een `<h2>` element. 

## Oefeningen

:::note Oefening 1

Maak een webpagina met de volgende inhoud:

- `<h1>` element met als inhoud: Mijn favoriete vakantiebestemming
- `<h2>` element met als inhoud: Spanje
- `<h3>` element met als inhoud: Barcelona
- `<h3>` element met als inhoud: Madrid
- `<h2>` element met als inhoud: Frankrijk
- `<h3>` element met als inhoud: Parijs
- `<h3>` element met als inhoud: Nice
- `<h2>` element met als inhoud: Italië
- `<h3>` element met als inhoud: Rome
- `<h3>` element met als inhoud: Venetië

:::

## Toegankelijkheid en SEO[^1]

- Een pagina met goed gestructureerde koppen is toegankelijker voor mensen met een visuele beperking. Screenreaders kunnen de koppen voorlezen. Zo kunnen mensen met een visuele beperking de structuur van de pagina beter begrijpen.
- Verder gebruiken zoekmachines de koppen om de inhoud van een pagina te begrijpen. Een pagina met goed gestructureerde koppen zal dus beter scoren in zoekmachines.

[^1]: SEO staat voor Search Engine Optimization. Het is een verzameling van technieken die je kan gebruiken om je website hoger te laten scoren in zoekmachines.
