// Add your JavaScript code here

// Home Page
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
  
  // Menu Page
  const orderButtons = document.getElementsByClassName("orderButton");
  Array.from(orderButtons).forEach(function(button) {
    button.addEventListener("click", function() {
      const menuItem = this.parentElement;
      const itemName = menuItem.querySelector("h3").textContent;
      alert("You ordered " + itemName + "!");
    });
  });
  