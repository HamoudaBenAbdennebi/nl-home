const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('#headline');
const menu = document.querySelector('.menu')
const scrolldown = document.querySelector('.scroll')


const tl = new TimelineMax();

tl.fromTo(hero,1,{height:"0%"},{height:"80%" ,ease:Power2.easeInOut})
.fromTo(hero,1.2,{width:"100%"},{width:"80%",ease:Power2.easeInOut})
.fromTo(slider,1.2,{x:"-100%"},{x:"0%",ease:Power2.easeInOut},"-=1.2")
.fromTo(logo,0.5,{opacity:0,y:30},{opacity:1,y:0},'-=0.5')
.fromTo(hamburger,0.5,{opacity:0,y:30},{opacity:1,y:0},'-=0.5')
.fromTo(headline,0.5,{opacity:0,x:-30},{opacity:1,x:0})
.fromTo(scrolldown,1,{opacity:0},{opacity:1})


// !menu 

const popUpMenu = () =>{
    var element = document.getElementById("menu");
    var cover = document.querySelector('.menu-cover')
    element.classList.remove("close");
    cover.classList.remove("close");
    element.classList.remove("start");
    cover.classList.remove("start");
    element.classList.add("open");
    cover.classList.add("open");
};


const closeMenu = () =>{
    var element = document.getElementById("menu");
    var cover = document.querySelector('.menu-cover')
    element.classList.remove("open");
    cover.classList.remove("open");
    element.classList.add("close");
    cover.classList.add("close");
};

