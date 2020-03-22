const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");

//end section
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

let scene = new ScrollMagic.Scene({
    duration: 9000,
    triggerElement: intro,
    triggerHook: 0
})
//.addIndicators()
.setPin(intro)
.addTo(controller);

//second scene
//text Animation
const textAnim = TweenMax.fromTo(
    text, 3, {opacity: 1}, {opacity: 0}
);

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0
})
.setTween(textAnim)
.addTo(controller);


// VIDEO ANIMATION

let accelamount = 0.1; //fast forwarding and easing ( 0 to 1 )

let scrollpos = 0;
let delay = 0;

scene.on('update', e => {
    scrollpos = e.scrollPos / 1000; //get seconds by div times 1000 
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;

    //this makes the vido play
    video.currentTime = delay;
}, 40); //40 because I have 25 fps (1000/25)