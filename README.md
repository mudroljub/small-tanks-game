[![](screen.png)](https://mudroljub.github.io/tenkici/)

# Tenkići igrica
> Verzija 1.0.

Igraj ovde: [mudroljub.github.io/tenkici](https://mudroljub.github.io/tenkici/)

Ima i verzija za fejs: [apps.facebook.com/igrica-tenkici/](https://apps.facebook.com/igrica-tenkici/)

P.S. Ako ne učita iz prve osveži browser.

## Razvoj

Prvo instaliraj [node.js](https://nodejs.org), noviju verziju. Nakon toga kloniraj repo i instaliraj zavisnosti:
```
git clone
npm run fullinstall
```
Da pokreneš igru u razvojnom modu ukucaj:
```
npm start
```
Browser će se automatski osvežavati svaki put kada sačuvaš izmenu.

## Produkcija

U produkciji mora webpack publicPath: './dist/'

Pre dizanja na gh-pages potrebno obrisati submodule!

Za fb verziju ubaciti fb skripte u index.html

## TODO
* vise neprijatelja
* srediti za chrome i druge browsere
* fb login
* ubaciti zvuk
* refaktorisati (najvise Tenk2, Cev.render)
