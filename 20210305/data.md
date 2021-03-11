# Exercice 3

J'aimerais faire ressortir le potentiel électrique en GWh de chaque cantons.

On récupère déjà les données:

```
curl http://www.uvek-gis.admin.ch/BFE/ogd/52/Solarenergiepotenziale_Gemeinden_Daecher_und_Fassaden.json -H "Accept: application/json" > raw_datas.json
```

je crée un fichier qui prépare les données prepare_data.js

```javascript
// prepare_data.js

const fs = require('fs')
const d3 = require('d3')

const rawdata = fs.readFileSync('raw_datas.json', 'utf-8')
const datas = JSON.parse(rawdata);
let holder = {};
datas.forEach(city => {
  
  //We avoid cities without a canton because it means it's a LI city
  if(city.Canton != undefined) {
    if (holder.hasOwnProperty(city.Canton)) {
      holder[city.Canton] = holder[city.Canton] + city.Scenario2_RoofsOnly_PotentialSolarHeat_GWh;
    } else {
      holder[city.Canton] = city.Scenario2_RoofsOnly_PotentialSolarHeat_GWh;
    }
  }
});

let DatasReady = [];

for (let prop in holder) {
  DatasReady.push({ canton: prop, value: +holder[prop].toFixed(2) });
}

console.log(JSON.stringify(DatasReady));

```

Pour obtenir le fichier final dans la forme que l'on veut il suffit de l'exécuter avec node:

```
node prepare_data.js > data.json
```

