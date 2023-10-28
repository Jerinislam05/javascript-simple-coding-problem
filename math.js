const result = Math.pow(3, 8); // math.pow means 8 to the power of 2
// console.log(result);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2); // math.abs only number er man nibe but negative ba positive eta nibe na.
console.log(gap);

if (gap < 5) {
    console.log('friends');
} else {
    console.log('no friendship');
}

// ------------------------------
// kono vognangsho number k punno number korte math.round use hoy
const number = 2.4537;
const fullNumber = Math.round(number);
// console.log(fullNumber);
// ceil number korle next er number er punno songkha ashbe
const result2 = Math.ceil(2.0001);
// console.log(result2);
// floor korle ja ache tar nicher punno sonkha ashbe
const result3 = Math.floor(3.8877);
console.log(result3);

// random
// console.log(Math.random());
for (let i = 0; i < 20; i++) {
    const random = Math.round(Math.random()*6);
    console.log(random);
    
}