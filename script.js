setInterval(() => {
    var sale = document.getElementById("sale");
    sale.classList.toggle("none")
}, 500);
let count;
const images = document.getElementsByClassName("imagecircle");
const fullimage = document.getElementsByClassName("imageview");
const back = document.getElementById("back1");
for (let index = 0; index < images.length; index++) {
    images[index].addEventListener("click", () => {
        fullimage[index].classList.toggle("hide");
        back.classList.toggle("back");
        count = index;
    })
    back.addEventListener("click", () => {
        fullimage[count].classList.toggle("hide");
        back.classList.toggle("back");
    })
}
function displayslide(num) {
    for (let index = 0; index < imageslide.length; index++) {
        if (index == num) {
            imageslide[index].classList.remove("hide");

        }
        else {
            imageslide[index].classList.add("hide");

        }

    }
}
function displaydots(num1) {
    for (let index = 0; index < dots.length; index++) {
        if (index == num1) {
            dots[index].classList.remove("light");
            dots[index].classList.add("activeDot");

        }
        else {
            dots[index].classList.add("light");
            dots[index].classList.remove("activeDot");


        }

    }
}
let imagecount = 0;
let dotcount = -0;
const imageslide = document.getElementsByClassName("slideimage");
const dots = document.getElementsByClassName("dot");
const btn1 = document.getElementById("btnl");
const btn2 = document.getElementById("btnr");
function moveleft() {
    if (imagecount == 0) {
        imagecount = imageslide.length - 1;
        dotcount = dots.length - 1;
    }
    else {
        imagecount = imagecount - 1;
        dotcount = dotcount - 1;
    }
    displayslide(imagecount);
    displaydots(dotcount);
}
function moveright() {
    if (imagecount == imageslide.length - 1) {
        imagecount = 0;
        dotcount = 0;
    }
    else {
        imagecount = imagecount + 1;
        dotcount = dotcount + 1;
    }
    displayslide(imagecount);
    displaydots(dotcount);
}
setInterval(moveright, 5000);
btn1.addEventListener("click", moveleft);
btn2.addEventListener("click", moveright);
for (let index = 0; index < dots.length; index++) {
    dots[index].addEventListener("click", () => {
        dotcount = index;
        imagecount = index;
        displayslide(imagecount);
        displaydots(dotcount);

    })

}
const main = document.getElementsByClassName("mainphoto");
const image1 = document.getElementsByClassName("image1");
const image2 = document.getElementsByClassName("image2");
const eye = document.getElementsByClassName('eye');
const size = document.getElementsByClassName("size");
for (let index = 0; index < main.length; index++) {
    let counts=index;
        main[index].addEventListener("mouseover",()=>{
            image2[index].classList.remove('hide');
            image1[index].classList.add("hide");
            eye[index].classList.remove('hide');
            size[index].classList.remove('hide');
            size[index].classList.add('flex');
        })
        main[index].addEventListener("mouseout",()=>{
            image1[index].classList.remove('hide');
            image2[index].classList.add("hide");
            eye[index].classList.add('hide');
            size[index].classList.add('hide');
            size[index].classList.remove('flex');
        })
    
}
const instacover=document.getElementsByClassName('instacover');
const instaback=document.getElementsByClassName('instaback');
for (let index = 0; index < instacover.length; index++) {
    const element = instacover[index];
    element.addEventListener('mouseover',()=>{
        instaback[index].classList.remove('hide');
        instaback[index].classList.add('flex');
    })
    element.addEventListener('mouseout',()=>{
        instaback[index].classList.add('hide');
        instaback[index].classList.remove('flex')

    })
    
}
const sticky =document.getElementById('tophide')
const scroll = document.getElementById('gototop');
window.addEventListener('scroll',function(){
    if (window.scrollY > 220) {
    scroll.classList.remove('hide');
    sticky.classList.remove('hide');
    sticky.classList.add('flex');
        
    } else {
       scroll.classList.add('hide');
       sticky.classList.add('hide');
       sticky.classList.remove('flex');
    }
});