var slideIndex = 0;
  showSlides();

  //Slideshow
  function showSlides() {
    var slides = document.getElementsByClassName("slide");
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "flex";
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
  }


  //Scroll to the top of the page
  const scrollbtn=document.querySelector(".scroll");
  const nav=document.querySelector(".header");
  scrollbtn.addEventListener("click",()=>{
    nav.scrollIntoView({behavior:"smooth"});
  });



  


