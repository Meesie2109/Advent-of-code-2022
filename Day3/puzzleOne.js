const fs = require('fs');
const lines = fs.readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n");

let score = 0;

if (lines) {
    lines.forEach(element => {
        let length = element.length;
        let half = Math.floor(length / 2);
        let firstHalf = element.substring(0, half);
        let secondHalf = element.substring(half, length);

        const array = firstHalf.split('');
        for (let i = 0; i < array.length; i++) {
            let element = array[i];
            if(secondHalf.includes(element)) {
                // console.log(firstHalf + ' ' + secondHalf + ' contains: ' + element)
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
    });
    console.log(score);
}
