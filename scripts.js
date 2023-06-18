// Add your JavaScript code here

// Slideshow functionality
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 3 seconds
}

// Review submission functionality
const reviewForm = document.getElementById("reviewForm");
const reviewsContainer = document.getElementById("reviewsContainer");

reviewForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const reviewInput = document.getElementById("review");

  const name = nameInput.value;
  const review = reviewInput.value;

  if (name.trim() === "" || review.trim() === "") {
    return;
  }

  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.innerHTML = `
    <h3>${name}</h3>
    <p>${review}</p>
  `;

  reviewElement.addEventListener("click", function () {
    reviewElement.classList.toggle("expanded");
  });

  reviewsContainer.appendChild(reviewElement);

  nameInput.value = "";
  reviewInput.value = "";
});
