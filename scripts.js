// Array of Title, URL, Character, genre(s), platform(s)
gameChars = 
[
  {
    title: "Bloons TD 6",
    link: "images/druid.jpg",
    charName: "Druid",
    genre: ["Strategy", "Tower Defense"],
    platform: ["PC", "Mobile", "Playstation", "Xbox"]
  },  
  {
    title: "Bloons TD 6",
    link: "images/btd6_heli.png",
    charName: "Heli Pilot",
    genre: ["Strategy", "Tower Defense"],
    platform: ["PC", "Mobile", "Playstation", "Xbox"]
  },  
  {
    title: "Honkai Star Rail",
    link: "images/hsr_acheron.png", 
    charName: "Acheron",
    genre: ["Strategy", "Role-Playing"],
    platform: ["PC", "Mobile", "Playstation"]
},
  {
    title: "Honkai Star Rail",
    link: "images/hsr_castorice.png", 
    charName: "Castorice",
    genre: ["Strategy", "Role-Playing"],
    platform: ["PC", "Mobile", "Playstation"]
  },
  {
    title: "Genshin Impact",
    link: "images/genshin_gaming.jpg",
    charName: "Gaming",
    genre: ["Adventure", "Role-Playing"],
    platform: ["PC", "Mobile", "Playstation"]
  },
  {
    title: "Maplestory",
    link: "images/maplestory_adele.jpg",
    charName: "Adele",
    genre: ["MMO"],
    platform: ["PC", "Mobile"]
  },  
  {
    title: "League of Legends",
    link: "images/elementalist_lux.jpg",
    charName: "Lux",
    genre: ["MOBA"],
    platform: ["PC", "Mobile"]
  },
  {
    title: "League of Legends",
    link: "images/league_morgana.jpg",
    charName: "Morgana",
    genre: ["MOBA"],
    platform: ["PC", "Mobile"]
  },
  {
    title: "League of Legends",
    link: "images/league_senna.jpg",
    charName: "Senna",
    genre: ["MOBA"],
    platform: ["PC", "Mobile"]
  },
  {
    title: "League of Legends",
    link: "images/league_yone.jpg",
    charName: "Yone",
    genre: ["MOBA"],
    platform: ["PC", "Mobile"]
  },
  {
    title: "Starcraft 2",
    link: "images/sc2_kerrigan.jpg",
    charName: "Kerrigan",
    genre: ["Strategy", "RTS"],
    platform: ["PC"]
  },
];

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

  // Title and charName
  const h2 = details.querySelector("h2");
  const h3 = details.querySelector("h3");
  h2.textContent = filteredData.title;
  h3.textContent = filteredData.charName;

  
  // Font of card based on title
  switch (filteredData.title) {
    case "Bloons TD 6":
      h2.style.fontFamily = "Luckiest Guy", "Arial";
      h3.style.fontFamily = "Luckiest Guy", "Arial";
      break;
    case "Honkai Star Rail":
      h2.style.fontFamily = "Anta", "Arial";
      h3.style.fontFamily = "Anta", "Arial";
      break;
    case "Genshin Impact":
      h2.style.fontFamily = "Caveat Brush", "Arial";
      h3.style.fontFamily = "Caveat Brush", "Arial";
      break;
    case "Maplestory":
      h2.style.fontFamily = "Bungee Spice", "Arial";
      h3.style.fontFamily = "Caveat Brush", "Arial";
      break;
    case "League of Legends":
      h2.style.fontFamily = "Roboto", "Arial";
      h3.style.fontFamily = "Roboto", "Arial";
      break;
    case "Starcraft 2":
      h2.style.fontFamily = "Tektur", "Arial";
      h3.style.fontFamily = "Caveat Brush", "Arial";
      break;
    default: 
      h2.style.fontFamily = "Arial";
      h3.style.fontFamily = "Caveat Brush", "Arial";
      break;
  }

  // Content of bulletpoints
  const bulletpoints = {
    description: "",
    reason: "",
    rating: ""
  }

  switch (filteredData.charName) {
    case "Druid": 
      break;
    default:
      break;
  }

  // Add click handler
  card.addEventListener("click", function() {
    const container = document.getElementById("card-container");
    const allCards = document.querySelectorAll(".card");
    const isActive = this.classList.contains("active");
    
    // Remove active from all cards -> returns view of all cards
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].classList.remove("active");
    }
    container.classList.remove("hide-others");
    
    // Hide other cards -> shows view of clicked card
    if (!isActive) {
      card.classList.add("active");
      container.classList.add("hide-others");

      // Change background color based on card
      updateBackgroundColor(filteredData.title);
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
    if (game.charName.toLowerCase().startsWith(searchString)) {
        return true;
      }
      return false;
  });

  showCards(filters);
});

// Filter settings
function checkFilters() {
  // Arrays to hold filters
  const filteredTitles = [];
  const filteredGenres = [];
  const filteredPlatforms = [];

  // Title filters
  const titleCheckboxes = document.querySelectorAll(".title-filter");
  for (let i = 0; i < titleCheckboxes.length; i++) {
    const checkbox = titleCheckboxes[i];
    if (checkbox.checked) {
      const titleName = document.querySelector(`label[for="${checkbox.id}"]`).textContent;
      filteredTitles.push(titleName);
    }
  }

  // Genre filters
  const genreCheckboxes = document.querySelectorAll(".genre-filter");
  for (let i = 0; i < genreCheckboxes.length; i++) {
    const checkbox = genreCheckboxes[i];
    if (checkbox.checked) {
      const genreName = document.querySelector(`label[for="${checkbox.id}"]`).textContent;
      filteredGenres.push(genreName);
    }
  }

  // Platform filters
  const platformCheckboxes = document.querySelectorAll(".platform-filter");
  for (let i = 0; i < platformCheckboxes.length; i++) {
    const checkbox = platformCheckboxes[i];
    if (checkbox.checked) {
      const platformName = document.querySelector(`label[for="${checkbox.id}"]`).textContent;
      filteredPlatforms.push(platformName);
    }
  }

  // Similiar to the search function but uses arrays
  const allFilters = gameChars.filter(game => {
    titleValues = filteredTitles.length == 0 || filteredTitles.includes(game.title);
    genreValues = filteredGenres.length == 0 || filteredGenres.every(genre => game.genre.includes(genre));
    platformValues = filteredPlatforms.length == 0 || 
                      filteredPlatforms.every(platform => game.platform.includes(platform));

    return titleValues && genreValues && platformValues;
  });

  showCards(allFilters);
}

// Filter event listener
const allCheckboxes = document.querySelectorAll(".title-filter, .genre-filter, .platform-filter");
for (let i = 0; i < allCheckboxes.length; i++) {
  allCheckboxes[i].addEventListener("change", checkFilters);
}

/*
  UI Things
*/

// Header color
function updateBackgroundColor(title) {
  let color = "";

  switch(title) {
    case "Bloons TD 6":
      color = "#38cfd9";
      break;
    case "Honkai Star Rail":
      color = "#afafd4";
      break;
    case "Genshin Impact":
      color = "#c24e34";
      break;
    case "Maplestory":
      color = "#0c1675";
      break;
    case "League of Legends":
      color = "#718fac";
      break;
    case "Starcraft 2":
      color = "#553e7d";
      break;
    default: 
      color = "#000000";
      break;
  }

  document.body.style.backgroundColor = color;
}