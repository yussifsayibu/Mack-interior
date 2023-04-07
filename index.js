
hamburger = document.querySelector(".hamburger");
hamburger.onclick = function() {
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

let images = ['asset/bg-1.jpg', 'asset/living-2.jpg', 'asset/living-1.jpg'];
let currentImageIndex = 0;

function nextImage() {
  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
  let sliderImage = document.querySelector('.slider-image img');
  sliderImage.setAttribute('src', images[currentImageIndex]);
}

setInterval(nextImage, 5000);


// Mobile Testimonial slider

const slides = document.querySelectorAll(".testimonial-slide");
const prevBtn = document.querySelector(".prev-slide");
const nextBtn = document.querySelector(".next-slide");
let slideIndex = 0;

showSlide(slideIndex);

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

prevBtn.addEventListener("click", () => {
  slideIndex--;
  showSlide(slideIndex);
});

nextBtn.addEventListener("click", () => {
  slideIndex++;
  showSlide(slideIndex);
});

