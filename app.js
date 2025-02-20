let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll(".slide");
    

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    
   
    setTimeout(showSlides, 3000);
}
function changeSlide(n) {
    slideIndex += n - 1;
    let slides = document.querySelectorAll(".slide");

   
    if (slideIndex >= slides.length) { slideIndex = 0; }
    if (slideIndex < 0) { slideIndex = slides.length - 1; }

    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    
    slides[slideIndex].style.display = "block";
}

