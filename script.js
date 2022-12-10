// HECKIN SELECTION SECTION
const CHONKER = document.querySelector('.chonk');
const chonkHeader = document.querySelector('h1');
const song = document.querySelector('.fruttimango');
const honk = document.querySelector('.honk');
const honkThese = document.querySelectorAll('.honk-me');
const topContainer = document.querySelector('.first-container');
const topHonk = document.querySelector('.first-chonker');
const bottomContainer = document.querySelector('.second-container');
const bottomHonk = document.querySelector('.second-chonker');
const dogeDance = document.querySelector('.doge-dance');
const catDance = document.querySelector('.cat-dance');

//Data and preloads
song.preload = 'auto';
honk.playbackrate = 1.2;
const flipValueArray = ['scaleX(1)', 'scaleX(-1)'];
let i = 0;
//Do's
CHONKER.addEventListener('click', () => {
  song.play();
  chonkHeader.classList.add('orchid-chonker');
  topContainer.classList.add('top-slider');
  bottomContainer.classList.add('bottom-slider');
  setTimeout(() => {
    chonkHeader.classList.add('spinny-Chonker');
  }, 6187.5);
  setTimeout(() => {
    CHONKER.classList.add('bouncy-Chonker');
  }, 11812.5);
  setTimeout(() => {
    dogeDance.classList.add('dancer');
    catDance.classList.add('dancer');
  }, 35625);
  setTimeout(() => {
    chonkHeader.classList.remove('orchid-chonker');
    chonkHeader.classList.remove('spinny-Chonker');
    CHONKER.classList.remove('bouncy-Chonker');
    topContainer.classList.remove('top-slider');
    bottomContainer.classList.remove('bottom-slider');
    dogeDance.classList.remove('dancer');
    catDance.classList.remove('dancer');
  }, 162000);
});

honkThese.forEach((honkThis) => {
  honkThis.addEventListener('click', () => {
    honk.cloneNode().play();
  });
});

// I don't know why but it seems I need one "wheel" variable for each picture.
// And I can't use a foreach loop to make both pictures listen to 'wheel'.
// I also can't have too close of a interval (10ms seems to do the trick).
// That's why this code is repeating.
let wheel1 = false;
let wheel2 = false;
window.addEventListener('wheel', () => {
  wheel1 = true;
  wheel2 = true;
});
setInterval(() => {
  if (wheel1) {
    wheel1 = false;
    topHonk.style.transform = flipValueArray[i++];
    if (i >= flipValueArray.length) {
      i = 0;
    }
  }
}, 40);

setInterval(() => {
  if (wheel2) {
    wheel2 = false;
    bottomHonk.style.transform = flipValueArray[i++];
    if (i >= flipValueArray.length) {
      i = 0;
    }
  }
}, 50);
