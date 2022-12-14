const fs = require('fs');
const lines = fs.readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n");

let score = 0;

if(lines) {
    lines.forEach(element => {
        let splited = element.split(' ');
        if(splited.length == 2) {
            if(splited[1] == 'X') {
                score += 0;
                if(splited[0] == 'A') {
                    // Scisscors
                    score += 3;
                }
                if(splited[0] == 'B') {
                    //Rock
                    score += 1;
                }
                if(splited[0] == 'C') {
                    //Paper
                    score += 2;
                }
                return;
            } else if (splited[1] == 'Y') {
                score += 3;
                if(splited[0] == 'A') {
                    //Rock
                    score += 1;
                }
                if(splited[0] == 'B') {
                    //Paper
                    score += 2;
                }
                if(splited[0] == 'C') {
                    //Scissors
                    score += 3;
                }
                return;
            } else if (splited[1] == 'Z') {
                score += 6;
                if(splited[0] == 'A') {
                    //Paper
                    score += 2;
                }
                if(splited[0] == 'B') {
                    //Scissors
                    score += 3;
                }
                if(splited[0] == 'C') {
                    //Rock
                    score += 1;
                }
                return;
            }
        }
    });

    console.log(score);
}