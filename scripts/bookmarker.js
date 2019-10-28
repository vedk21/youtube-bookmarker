// constants for time being
var bookmarkedTime = 630;

function bookmarker() {
  var progressBar = document.querySelector(
    '.ytp-progress-bar-container .ytp-progress-bar .ytp-progress-list');

  // get time duration of video in seconds
  var videoDurationDiv = document.querySelector(
  '.ytp-chrome-controls .ytp-left-controls .ytp-time-display .ytp-time-duration');

  var videoDurationText = videoDurationDiv.textContent;
  console.log('videoDurationText: ', videoDurationText);
  var duration = videoDurationText.split(':');
  var minutes = parseInt(duration[0]);
  var seconds = parseInt(duration[1]);

  var totalSeconds = minutes * 60 + seconds;

  var progressBarSize = progressBar.clientWidth;
  console.log('progressBarSize: ', progressBarSize);

  var oneSecondToPixelSize = progressBarSize / totalSeconds;
  console.log('oneSecondToPixelSize: ', oneSecondToPixelSize);

  // add bookmark to progress bar
  var bookmarkDiv = document.createElement('div');
  bookmarkDiv.className = 'bookmark';

  // calculate the saved bookmarked in terms of width
  // 2 is subtracted for marginal fix
  bookmarkDiv.style.left = (oneSecondToPixelSize * bookmarkedTime - 2) + 'px';

  progressBar.appendChild(bookmarkDiv);

  console.log('Now in bookmarker plugin...');
}

window.onload = bookmarker;
