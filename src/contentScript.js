getWords = () => [
    'œil',
    'parent',
    'panda',
    '1',
    '22',
    '333',
    '4444',
    '55555',
    '666666',
    '7777777',
    '88888888',
    '999999999',
    '10________',
    '11_________',
    '12__________',
    '13___________',
    '14____________',
    '15_____________',
    '16______________',
    '17_______________',
    '18________________',
    '19_________________',
    '20__________________',
    '21___________________',
    '22____________________',
    '23_____________________',
    '24______________________',
    '25_______________________',
    '26________________________',
    '27_________________________',
    '28__________________________',
    '29___________________________',
    '30____________________________',
];

// refreshElement = id => {
//     bamboozle = document.getElementById(id);
//     if (bamboozle) bamboozle.remove();
//     document.getElementById('screenGame').innerHTML += `<div id="${id}"></div>`;
// };

currentWord = document.getElementById('currentWord').textContent;
lettersNotFound = (currentWord.match(/_/g) || []).length;

// refreshElement('bamboozle');

printPossibilities = () =>
    getWords().forEach(word => {
        if (word.length == currentWord.length) {
            console.log(word);
            // document.getElementById('bamboozle').innerHTML += `<button>${word}</button>`;
        }
    });

// document.getElementById('screenGame').innerHTML += `<button>GAME</button>`;
// document.getElementById('screenLogin').innerHTML += `<button>LOGIN</button>`;
// document.getElementById('screenLoading').innerHTML += `<button>LOADING</button>`;
//

if (lettersNotFound != 0) printPossibilities();
else console.error('No word to guess');
