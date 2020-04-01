const bamboozle_button = document.getElementById('bamboozle_button');

// button in popup
bamboozle_button.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            file: 'src/main.js',
        });
    });
};

const clear_button = document.getElementById('clear_button');

// clear in popup
clear_button.onclick = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        chrome.tabs.executeScript(tabs[0].id, {
            code: 'console.clear()',
        });
    });
};
