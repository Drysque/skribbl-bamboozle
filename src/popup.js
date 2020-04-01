const bamboozle_button = document.getElementById('bamboozle_button');

// on extension button click
bamboozle_button.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            file: 'src/contentScript.js',
        });
    });
};
