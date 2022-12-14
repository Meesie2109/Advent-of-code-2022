const fs = require('fs');
const lines = fs.readFileSync("data.txt", { encoding: "utf-8" })
  .split("\n");

let score = 0;

// 1 A = Rock
// 2 B = Paper
// 3 C = Scissors

// X = Rock
// Y = Paper
// Z = Scissors

// Draw = 3
// Win = 6
// Lose = 0

if(lines) {
    lines.forEach(element => {
       let splited = element.split(' ');
       console.log(splited);
       if(splited.length == 2) {
            if(splited[0] == 'A' && splited[1] == 'X') {
                score += 4;
                return;
            } else if (splited[0] == 'A' && splited[1] == 'Y') {
                score += 8;
                return;
            } else if (splited[0] == 'A' && splited[1] == 'Z') {
                score += 3;
                return;
            } else if (splited[0] == 'B' && splited[1] == 'X') {
                score += 1;
                return;
            } else if (splited[0] == 'B' && splited[1] == 'Y') {
                score += 5;
                return;
            } else if (splited[0] == 'B' && splited[1] == 'Z') {
                score += 9;
                return;
            } else if (splited[0] == 'C' && splited[1] == 'X') {
                score += 7;
                return;
            } else if (splited[0] == 'C' && splited[1] == 'Y') {
                score += 2;
                return;
            } else if (splited[0] == 'C' && splited[1] == 'Z') {
                score += 6;
                return;
            }
       }
    });
    console.log(score);
}