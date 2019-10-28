// constants for time being
var bookmarkedTime = 630;

function getTotalSeconds(durationText) {
  var duration = durationText.split(':');
  var minutes = parseInt(duration[0]);
  var seconds = parseInt(duration[1]);

  return minutes * 60 + seconds;
}

function bookmarker() {
  var progressBar = document.querySelector(
    '.ytp-progress-bar-container .ytp-progress-bar .ytp-progress-list');
  var progressBarSize = progressBar.clientWidth;

  // get time duration of video in seconds
  var videoDurationDiv = document.querySelector(
  '.ytp-chrome-controls .ytp-left-controls .ytp-time-display .ytp-time-duration');
  var videoDurationText = videoDurationDiv.textContent;

  var totalSeconds = getTotalSeconds(videoDurationText);

  var oneSecondToPixelRatio = progressBarSize / totalSeconds;

  // add bookmark to progress bar
  var bookmarkDiv = document.createElement('div');
  bookmarkDiv.className = 'bookmark';

  // calculate the saved bookmarked in terms of width
  // 2 is subtracted for marginal fix
  bookmarkDiv.style.left = (oneSecondToPixelRatio * bookmarkedTime - 2) + 'px';

  progressBar.appendChild(bookmarkDiv);
}

window.onload = bookmarker;
