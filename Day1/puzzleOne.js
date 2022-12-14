const fs = require('fs');
const { parse } = require('path');
const lines = fs.readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n");

if(lines) {
    let array = [];
    let current = 0;
    lines.forEach(element => {
        if(element === '') {
            array.push(current);
            current = 0;
            return;
        }

        try {
            const parsed = parseInt(element);
            current += parsed;
        } catch (error) {
            console.log(error);
        }
    });

    let highest = 0;
    array.forEach(element => {
        if(element > highest) {
            highest = element;
        }
    });

    console.log(highest);

}