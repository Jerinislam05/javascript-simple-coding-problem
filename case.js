// tolowercase use korle 2ta tei tolowercase hobe r jodi touppercase use korle 2ta tei touppercase hobe

const userName = 'blackpink';
const userInput = 'blackPinK';
console.log(userName.toLocaleLowerCase());
console.log(userInput.toLocaleLowerCase());
if (userName.toLocaleLowerCase() === userInput.toLocaleLowerCase()) {
    console.log('validating user');
} else {
    console.log('invalid user');
}