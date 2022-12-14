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

    let number_one = 0;
    let number_two = 0;
    let number_three = 0;
    array.forEach(element => {
        if(element > number_three) {
            if(element > number_two) {
                if(element > number_one ) {
                    number_three = number_two;
                    number_two = number_one;
                    number_one  = element;
                } else {
                    number_three = number_two;
                    number_two = element;
                }
            } else {
                number_three = element;
            }
        }
    });

   console.log(number_one + number_two + number_three);
}