// main script

getWords = async () => (await import(chrome.extension.getURL('src/words.js'))).getWords();
getCurrentWord = () => document.getElementById('currentWord').textContent;
getNLettersHidden = () => (getCurrentWord().match(/_/g) || []).length;
fillWord = word => (document.getElementById('inputChat').value = word);

printPossibilities = words => {
    console.error('=========');
    words.forEach(e => console.log(e));
};

bamboozle = async () => {
    wordRegex = new RegExp(`^${getCurrentWord().replace(/_/g, '.')}$`);

    console.log('fetching words that look like ', wordRegex);

    words = (await getWords()).filter(word => word.match(wordRegex) !== null);

    if (words.length === 1) fillWord(words[0]);
    else printPossibilities(words);
};

if (getNLettersHidden() != 0) bamboozle();
else console.error('No word to guess');
