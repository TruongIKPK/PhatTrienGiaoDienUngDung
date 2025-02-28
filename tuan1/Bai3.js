var avg = function (a, b, c) {
    return (a + b + c) / 3;
}

// Test data 1
var dolphinsScores = [96, 108, 89];
var koalasScores = [88, 91, 110];

var avgDolphins = avg(dolphinsScores[0], dolphinsScores[1], dolphinsScores[2]);
var avgKoalas = avg(koalasScores[0], koalasScores[1], koalasScores[2]);

console.log(`Dolphins average score: ${avgDolphins}`);
console.log(`Koalas average score: ${avgKoalas}`);

if (avgDolphins > avgKoalas) {
    console.log('Dolphins thắng!');
} else if (avgKoalas > avgDolphins) {
    console.log('Koalas thắng!');
} else {
    console.log('Hòa cả 2 đội đều có số điểm bằng nhau!');
}
console.log("----------------------------------------------------");

// Bonus 1: Minimum score requirement
var minScore = 100;

if (avgDolphins >= minScore && avgDolphins > avgKoalas) {
    console.log('Dolphins thắng giải với điểm tối thiểu!');
} else if (avgKoalas >= minScore && avgKoalas > avgDolphins) {
    console.log('Koalas thắng giải với điểm tối thiểu!');
} else if (avgDolphins >= minScore && avgKoalas >= minScore && avgDolphins === avgKoalas) {
    console.log('Hòa cả 2 đội đều đạt điểm tối thiểu!');
} else {
    console.log('Không đội nào thắng giải!');
}
console.log("----------------------------------------------------");

// Test data Bonus 1
dolphinsScores = [97, 112, 101];
koalasScores = [109, 95, 123];

avgDolphins = avg(dolphinsScores[0], dolphinsScores[1], dolphinsScores[2]);
avgKoalas = avg(koalasScores[0], koalasScores[1], koalasScores[2]);

console.log(`Dolphins average score: ${avgDolphins}`);
console.log(`Koalas average score: ${avgKoalas}`);

if (avgDolphins >= minScore && avgDolphins > avgKoalas) {
    console.log('Dolphins thắng giải với điểm tối thiểu!');
} else if (avgKoalas >= minScore && avgKoalas > avgDolphins) {
    console.log('Koalas thắng giải với điểm tối thiểu!');
} else if (avgDolphins >= minScore && avgKoalas >= minScore && avgDolphins === avgKoalas) {
    console.log('Hòa cả 2 đội đều đạt điểm tối thiểu!');
} else {
    console.log('Không đội nào thắng giải!');
}
console.log("----------------------------------------------------");

// Test data Bonus 2
dolphinsScores = [97, 112, 101];
koalasScores = [109, 95, 106];

avgDolphins = avg(dolphinsScores[0], dolphinsScores[1], dolphinsScores[2]);
avgKoalas = avg(koalasScores[0], koalasScores[1], koalasScores[2]);

console.log(`Dolphins average score: ${avgDolphins}`);
console.log(`Koalas average score: ${avgKoalas}`);

if (avgDolphins >= minScore && avgDolphins > avgKoalas) {
    console.log('Dolphins thắng giải với điểm tối thiểu!');
} else if (avgKoalas >= minScore && avgKoalas > avgDolphins) {
    console.log('Koalas thắng giải với điểm tối thiểu!');
} else if (avgDolphins >= minScore && avgKoalas >= minScore && avgDolphins === avgKoalas) {
    console.log('Hòa cả 2 đội đều đạt điểm tối thiểu!');
} else {
    console.log('Không đội nào thắng giải!');
}