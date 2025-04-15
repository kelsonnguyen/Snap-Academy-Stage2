// Array of Title, URL, and Character
gameChars = 
[
  {title: "Honkai Star Rail",
     link: "https://www.destructoid.com/wp-content/uploads/2025/04/castorice-hsr-official-artwork.jpg", 
     charName: "Castorice"},
  {title: "Bloons TD 6",
    link: "images/druid.jpg",
    charName: "Druid"},
  {title: "Genshin Impact",
    link: "images/genshin_gaming.jpg",
    charName: "Gaming"},
  {title: "League of Legends",
    link: "images/league_ahri.jpg",
    charName: "Ahri"},
  {title: "League of Legends",
    link: "images/league_kaisa.jpg",
    charName: "Kai'sa"},
  {title: "League of Legends",
    link: "images/elementalist_lux.jpg",
    charName: "Lux"},
  {title: "League of Legends",
    link: "images/league_morgana.jpg",
    charName: "Morgana"},
  {title: "League of Legends",
    link: "images/league_senna.jpg",
    charName: "Senna"},
  {title: "League of Legends",
    link: "images/league_yone.jpg",
    charName: "Yone"},
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards(filters) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < filters.length; i++) {
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, filters[i]); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, filteredData) {
  card.style.display = "block";

  // Get information of card
  const cardImage = card.querySelector("img");
  cardImage.src = filteredData.link;
  cardImage.alt = filteredData.title + " Character";
  const details = card.querySelector(".card-details");
  details.querySelector("h2").textContent = filteredData.title;
  details.querySelector("h3").textContent = filteredData.charName;
  
  // Add click handler
  card.addEventListener('click', function() {
    const container = document.getElementById('card-container');
    const allCards = document.querySelectorAll('.card');
    const isActive = this.classList.contains('active');
    
    // Remove active from all cards -> returns view of all cards
    allCards.forEach(c => {
      c.classList.remove('active');
    });
    container.classList.remove('hide-others');
    
    // Hide other cards -> shows view of clicked card
    if (!isActive) {
      card.classList.add('active');
      container.classList.add('hide-others');
    }
  });
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards(gameChars));

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  gameChars.pop(); // Remove last item in gameChars array
  showCards(gameChars); // Call showCards again to refresh
}

// Data search
/*
  Used https://www.youtube.com/watch?v=TlP5WIxVirU initially, but isVisible
  didn't work out. However, the code uses the include section
  Used https://www.youtube.com/watch?v=wxz5vJ1BWrc for filter section
*/
const searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("input", (e) => {
  const searchString = e.target.value.toLowerCase();

  const filters = gameChars.filter(game => {
    if (game.title.toLowerCase().startsWith(searchString) ||
      game.charName.toLowerCase().startsWith(searchString)) {
        return true;
      }
      return false;
  });

  showCards(filters);
});