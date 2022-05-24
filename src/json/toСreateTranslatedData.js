//first step
// const fs = require('fs');
//
// let rawdata = fs.readFileSync('./data.json');
// let file = JSON.parse(rawdata);
//
// let data = JSON.stringify(file.valueOf().map(item => item.keywords));
// fs.writeFileSync('./auxiliary.json', data);

// second translaite

// // 3
const fs = require('fs');

let rawdata = fs.readFileSync('./data.json');
let file = JSON.parse(rawdata);

let rawdata2 = fs.readFileSync('./auxiliary.json');
let file2 = JSON.parse(rawdata2);


let data = JSON.stringify(file.map((item, i)=> {
    item.keywords +=  ' ' + file2.arr[i]
    return item
}));
fs.writeFileSync('./data2.json', data);