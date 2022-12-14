const fs = require('fs');
const lines = fs.readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n");

let score = 0;

if (lines) {

    for (let i = 0; i < lines.length; i += 3) {
        const element_one = lines[i];
        const element_two = lines[i + 1];
        const element_three = lines[i + 2];

        const array = element_one.split('');
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            if(element_two.includes(element)) {
                if(element_three.includes(element)) {
                    const _upper = element.toUpperCase();
                    if (element === _upper) {
                        // uppercase
                        const number = element.charCodeAt(0) - 38;
                        score += number
                    } else {
                        //lowercase
                        const number = element.charCodeAt(0) - 96;
                        score += number;
                    }
                    break;
                }
            }
        }
    }

    console.log(score)
}