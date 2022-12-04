// HECKIN SELECTION SECTION
const CHONKER = document.querySelector('.chonk');
const chonkHeader = document.querySelector('h1');
const body = document.querySelector('body');
const song = document.querySelector('.fruttimango');
const honk = document.querySelector('.honk');
const honkThese = document.querySelectorAll('.honk-me');
let topHonk = document.querySelector('.oneHonk');


//Data and preloads
song.preload = "auto";
honk.playbackrate = 1.2;
const flipValueArray = ['scaleX(1)', 'scaleX(-1)'];
let i = 0;

//Why is this an array of objects even.
const cats = [ 
    topCat = {
    placement: "top",
    url: "/media/st,small,507x507-pad,600x600,f8f8f8.jpg",
    },
    bottomCat = {
        placement: "bottom",
        url: "/media/st,small,507x507-pad,600x600,f8f8f8.jpg",
    },
    gifCat = {
        placement: "bottomLeft",
        url: "/media/cat.gif"
    }
];


//Do's
CHONKER.addEventListener('click', () => {
    song.play()
    CHONKER.classList.add('bouncy-Chonker');
    chonkHeader.classList.add('spinny-Chonker');
});
honkThese.forEach(honkThis => {
    honkThis.addEventListener('click', () => {
        honk.play();    
        
        honkThis.style.transform=flipValueArray[i++];
        if (i >= flipValueArray.length){
            i = 0;
        }
    })
});