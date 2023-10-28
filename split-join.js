const lyrics = 'tmi bondhu kala pakhi ami jeno ki. bosonto kale tomay kolte parini. kala kala sada sada';
const parts = lyrics.split(' '); //majhe space na dile protita word alada korbe
const sentences = lyrics.split('.');
// console.log(sentences);

const partial = lyrics.slice(4, 16);
console.log(partial);

// join
const lines = [
    'tmi bondhu kala pakhi ami jeno ki',
    'bosonto kale tomay kolte parini',
    'kala kala sada sada',
    'rong jomese sada kala'
];
const newSong = lines.join('+ ');
console.log(newSong);