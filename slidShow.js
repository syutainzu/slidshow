let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_001.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_002.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_003.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_004.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_005.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_006.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_007.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_008.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_009.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_0010.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_0011.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_0012.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_0013.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_0014.jpg",
"https://www.club-t.com/ct/kanko/guide/images/k_103/k_103_0015.jpg"

];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
