// kono string er moddhe ekta nirdishto word khujte includes use korte hoy. jodi item thake tahole true bolbe, r na thakle false
// case sensitive howar karone 2pashe e tolowercase e convert kore nite hoy
const lyrics = 'tmi bondhu kala pakhi ami jeno ki. bosonto kale tomay kolte parini. kala kala sada sada';
const searchString = 'paKhi';
// const doesExist = lyrics.includes('pakhi')
// const doesExist = lyrics.includes('pakhi')
// const doesExist = lyrics.includes(searchString);
const lyricsLowerCase = lyrics.toLocaleLowerCase();
// const doesExist = lyricsLowerCase.includes(searchString);
const searchStringLower = searchString.toLocaleLowerCase();
const doesExist = lyricsLowerCase.includes(searchStringLower);
const doesExistOnline = lyrics.toLocaleLowerCase().includes(searchString.toLocaleLowerCase());
// console.log(doesExistOnline);
// console.log(doesExist);

// -----------------------------------------
// indexOf
console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kaila'));
// jodi string er moddhe na thake tahole ans hobe -1
if(lyrics.indexOf('ssada') != -1) {
    console.log('exist in string');
} else {
    console.log('cant find');
}
// -------------------------------------------
// startsWith
// item ti oi word diye suru hoise kina
lyrics.startsWith('tumi');
console.log(lyrics.startsWith('tmi'));
// endswith diye check kore sesh ongsho ta ki 