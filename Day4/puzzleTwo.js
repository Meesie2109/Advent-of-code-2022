const fs = require('fs');
const lines = fs.readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n");

let score = 0;

if (lines) {

    function isOverlapped(a, b){
    const [underA, overA] = [parseInt(a.split('-')[0]), parseInt(a.split('-')[1])]
    const [underB, overB] = [parseInt(b.split('-')[0]), parseInt(b.split('-')[1])]

    return !(overA < underB || underA > overB) 
}

    lines.forEach(element => {
        if(isOverlapped(...element.split(','))){
            score++;
        }
    });

    console.log(score);
}