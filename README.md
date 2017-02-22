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

## Napomene

U produkciji mora publicPath: './dist/'

## TODO
* stavi enter - igraj opet. mišem je presporo
* ostaviti loop, da gori plamen nakon poraza
* fb login
* ubaciti zvuk
* refaktorisati (najvise Tenk2, Cev.render)
