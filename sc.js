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

// Add your JavaScript code here

// Get the form element
const form = document.getElementById('reviewForm');

// Add an event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get the selected rating
  const selectedRating = document.querySelector('input[name="rating"]:checked');

  // Get the review text
  const reviewText = document.querySelector('textarea[name="reviewText"]').value;

  // Display the selected rating and review text
  alert('Rating: ' + selectedRating.value + '\nReview: ' + reviewText);

  // Reset the form
  form.reset();
});


// Add your JavaScript code here

// Function to handle form submission

// Add your JavaScript code here

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    
    // Get the rating value
    const rating = document.querySelector('input[name="rating"]:checked').value;
    
    // Get the review text
    const reviewText = document.querySelector('textarea[name="reviewText"]').value;
    
    // Create a new review element
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.innerHTML = `
      <h3>Rating: ${rating} stars</h3>
      <p>${reviewText}</p>
    `;
    
    // Append the new review to the review container
    const reviewContainer = document.getElementById('reviewContainer');
    reviewContainer.appendChild(reviewElement);
    
    // Reset the form
    document.getElementById('reviewForm').reset();
    
    // Scroll to the newly added review
    reviewElement.scrollIntoView({ behavior: 'smooth' });
  }
  
  // Add event listener to the form submit button
  const submitButton = document.querySelector('#reviewForm button[type="submit"]');
  submitButton.addEventListener('click', handleFormSubmit);
  
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


document.getElementById("reviewForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const review = document.getElementById("review").value;
  
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");
    reviewElement.textContent = name + ": " + review;
  
    document.getElementById("reviewsContainer").appendChild(reviewElement);
    document.getElementById("reviewForm").reset();
  });
  