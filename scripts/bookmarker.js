var progressBar = document.querySelector(
    '.ytp-progress-bar-container .ytp-progress-bar .ytp-progress-list');

var bookmarkDiv = document.createElement('div');
bookmarkDiv.className = 'bookmark';
bookmarkDiv.style.position = 'absolute';
bookmarkDiv.style.left = '50px';
bookmarkDiv.style.top = '-2px';
progressBar.appendChild(bookmarkDiv);

console.log('Now in bookmarker plugin...');
