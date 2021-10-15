
const slides = document.querySelectorAll(".slide");
const right = document.querySelector(".btn-right");
const left = document.querySelector(".btn-left");
const dots = document.querySelectorAll(".dot");
index = 0;


function activeSlide(n) {  
    for(slide of slides) {
        slide.classList.remove('active');    
    }
    slides[n].classList.add('active');   
}

function activeDot(n) {
    for(dot of dots) {
        dot.classList.remove('active');    
    }
    dots[n].classList.add('active');  
}

left.onclick  = () => {
    if(index == 0) {
        index = slides.length - 1
        activeSlide(index);
        activeDot(index)
    } else  {
        index--;
        activeSlide(index);
        activeDot(index);     
    }
}

right.onclick = () => {
    if(index == slides.length - 1) {
        index = 0;
        activeSlide(index);
        activeDot(index)
    } else {
        index++;
        activeSlide(index);
        activeDot(index)     
    }
}

dots.forEach((item, indexDot) => {
    item.onclick = () => {
        index = indexDot;
        activeSlide(index);
        activeDot(index)  
    }
})

