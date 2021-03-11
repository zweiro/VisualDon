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
