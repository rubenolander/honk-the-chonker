const CHONKER = document.querySelector('.chonk');
const chonkHeader = document.querySelector('h1');
const body = document.querySelector('body');
const song = document.querySelector('.fruttimango');
const honk = document.querySelector('.honk');
song.preload = "auto";
honk.playbackrate = 1.2;

CHONKER.addEventListener('click', () => {
    song.play()
    CHONKER.classList.add('bouncyChonker');
    chonkHeader.classList.add('spinnyChonker');
});
if (song.ended == false){
    console.log(song.ended);
    body.addEventListener('click', () => {
        honk.play();
    })
}
