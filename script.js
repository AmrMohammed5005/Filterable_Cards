// Select all filter buttons and filterable cards
let filerButtons = document.querySelectorAll(".filter_buttons button");
let filterableCards = document.querySelectorAll(".filterable-cards .card");

// Define the filterCards function 
let filterCards =  e => {
  document.querySelector(".active").classList.remove("active");
  e.target.classList.add("active");
  
  // Iterate over each filterable card
  
  filterableCards.forEach(card => {
    card.classList.add("hide");
    
    // Check if the card matches the selected filter or "all" is selected
    
    if(card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
      card.classList.remove("hide");
    }
  });
  
};

// Add click event listener to each filter button
filerButtons.forEach(button => button.addEventListener("click",filterCards));