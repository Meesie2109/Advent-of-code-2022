const fs = require('fs');
const lines = fs.readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n");

let score = 0;

if (lines) {

    const isContained = (a, b) => {
        const [underA, overA] = [parseInt(a.split('-')[0]), parseInt(a.split('-')[1])]
        const [underB, overB] = [parseInt(b.split('-')[0]), parseInt(b.split('-')[1])]

        return (underA <= underB && overA >= overB) || (underA >= underB && overA <= overB)
    }

    lines.forEach(element => {
        if(isContained(...element.split(','))){
            score++;
        }
    });

    console.log(score);
}