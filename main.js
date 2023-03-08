
const slides = document.querySelectorAll('.slide');
let counter = 0;

// This will set position of each image
slides.forEach((slide, index)=>{
    slide.style.left = `${index * 100}%`;
    // slide.style.bottom = `${index * 100}%`; 
})

// This will call for next image
const goNext = () =>{
    if(counter >= slides.length - 1){
        counter = 0;
        slideImage();
    }
    counter++;
    slideImage();
}

// This will call for previous image
const goPrev = () =>{
    if(counter < 0){
        counter = slides.length-1;
        slideImage();
    }
    counter--;
    slideImage();
}

const slideImage = () =>{
    slides.forEach((slide)=>{
        slide.style.transform = `translateX(-${counter * 100}%)`;
        // slide.style.transform = `translateY(${counter * 100}%)`
    })
}

// For automatically image slide
setInterval(()=>{
  counter ++;
  if(counter > 3){
      counter = 0;
      slideImage();
  }
  slideImage();
}, 5000); 