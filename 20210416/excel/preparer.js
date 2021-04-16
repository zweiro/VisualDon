const xlsx = require('xlsx');

const file = xlsx.readFile('peinaussteiger2018.xlsx');
const json = xlsx.utils.sheet_to_json(file.Sheets['data']);
const NB_VALUES = 5;
let data = [];

json.forEach(d => {
    data.push({
        city: d.Bahnhof_Haltestelle,
        travelers: d.DTV_2018
    });
});

data.sort((a,b) => {
    return b.travelers - a.travelers;
});

final_data = [];

for (let i = 0; i < NB_VALUES; i++) {
    final_data.push([data[i].city, data[i].travelers]);
}

console.log(final_data);