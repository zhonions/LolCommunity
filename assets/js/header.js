const loginModal = document.getElementById("loginModal");
loginModal.style.display = "none";

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}
let toggleModal = document.getElementById("toggleModal");

toggleModal.addEventListener("click", () => {
  loginModal.style.display = loginModal.style.display === "none" ? "flex" : "none";
});
const closeButton = document.getElementById("closeButton");
function closeModal() {
  loginModal.style.display = "none";
}
closeButton.addEventListener("click", closeModal);

setInterval(()=>{
  plusSlides(1)
}, 6000)

