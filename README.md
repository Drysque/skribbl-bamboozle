# skribbl-bamboozle

A chrome extension that proposes words for skribbl.io

* If multiple words are available, they are shown in the console
* If only one word is found, it is placed in the input box

## Usage
* Clone the repository anywhere
* Open Google Chrome and go to `chrome://extensions/`. Click `Load unpacked` and select the repository you cloned.
* Visit skribbl.io
* Open the console
* Click the extension icon and press `Refresh` to show possible words
* Click `Clear` to clear the console
* Enjoy!

No current word: 
![No Word](https://github.com/Drysque/skribbl-bamboozle/blob/master/img/noword.png "No current word")

Some words guessed: 
![Guessed](https://github.com/Drysque/skribbl-bamboozle/blob/master/img/guessed.png "Some words guessed")


## Add a word
Add it anywhere in `words.txt`

To apply the changes, run `./words/sort_words` which will sort `words.txt` and update `words.js`

