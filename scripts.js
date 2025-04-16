// Array of Title, URL, Character, genre(s), platform(s)
gameChars = 
[
  {
    title: "Bloons TD 6",
    link: "images/btd6_druid.png",
    charName: "Druid",
    genre: ["Strategy", "Tower Defense"],
    platform: ["PC", "Mobile", "Playstation", "Xbox"],
    description: "Silly monkey who pops bloons using the power of nature.",
    reason: "Bro's carrying me in the Rogue Legends DLC but also lags my iPad :(",
    rating: "9.5/10 (-0.5 for making me lose a life for lagging my iPad)"
  },  
  {
    title: "Bloons TD 6",
    link: "images/btd6_heli.png",
    charName: "Heli Pilot",
    genre: ["Strategy", "Tower Defense"],
    platform: ["PC", "Mobile", "Playstation", "Xbox"],
    description: "Silly monkey but but BUTTTTTT... in a helicopter! It can freely roam " +
                  "around the map!",
    reason: "Early game GOAT that I also depend on for my camo bloons detection.",
    rating: "10/10"
  },  
  {
    title: "Honkai Star Rail",
    link: "images/hsr_acheron.png", 
    charName: "Acheron",
    genre: ["Strategy", "Role-Playing"],
    platform: ["PC", "Mobile", "Playstation"],
    description: "A so-called emotionless \"Galaxy Ranger\" who initially holds a mysterious past...",
    reason: "She was the gateway to me opening my wallet for the game... but she also redefined meta, " + 
            "and I love doing big booty damage! She is kinda falling off though :(",
    rating: "8/10 (-1 for enabling me and -1 for falling off meta-wise)"
},
  {
    title: "Honkai Star Rail",
    link: "images/hsr_castorice.png", 
    charName: "Castorice",
    genre: ["Strategy", "Role-Playing"],
    platform: ["PC", "Mobile", "Playstation"],
    description: "One of the Chrysos Heirs, she represents the death titan (i lowkey skipped the dialogue, so I might be lying)",
    reason: "Imma be real... I don't really like her that much but I'm going to lie to myself and say that she's one of my " +
            "favorites because I did open my wallet for her... She has a dragon and a pretty deadly touch (haha)",
    rating: "5/10 (minus points for stealing my money I willingly gave + I don't really know her personality)"
  },
  {
    title: "Genshin Impact",
    link: "images/genshin_gaming.jpg",
    charName: "Gaming",
    genre: ["Adventure", "Role-Playing"],
    platform: ["PC", "Mobile", "Playstation"],
    description: "A hard runaway dragon dancer who relentlessly fights for his dream.",
    reason: "Unfortunately, I did open my wallet for him (there's a pattern with him and some other characters on " +
            "this website. However, he is fun! His main focus is plunge attacks, and his personality is fun! Oh dear..." +
            " I said fun twice, but I do mean it. I haven't been as active as I used to be on Genshin anymore though :(",
    rating: "9.5/10 (-0.5 for taking my money)"
  },
  {
    title: "Maplestory",
    link: "images/maplestory_adele.jpg",
    charName: "Adele",
    genre: ["MMO"],
    platform: ["PC", "Mobile"],
    description: "Light sword queen you get a sword you get a sword EVERYBODY (enemies) GETS A SWORD (in them)!",
    reason: "I unfortunately don't play Maplestory anymore, but she will always (not really always) be my fave. Her " +
            "aesthetics are so pretty, and she's a pretty mobile damage dealer. Now, I want to play Maplestory again...",
    rating: "9/10 (-1 for potentially resurfacing my two-week addiction when this is due soon soon)"
  },  
  {
    title: "League of Legends",
    link: "images/elementalist_lux.jpg",
    charName: "Lux",
    genre: ["MOBA"],
    platform: ["PC", "Mobile"],
    description: "DEMACIA! (She's a mage in an anti-mage society, and me n friends fight over her in champ select)",
    reason: "Lux is Lux that's why League is giving her another skin (but she's fun to play)",
    rating: "9/10 (-0.5 because my friend gets her sometimes instead of me and -0.5 because she dies sometimes " +
            "(it's my fault because we control the character)"
  },
  {
    title: "League of Legends",
    link: "images/league_morgana.jpg",
    charName: "Morgana",
    genre: ["MOBA"],
    platform: ["PC", "Mobile"],
    description: "A fallen angel because she wishes to help humanity (I think idk I'm not really caught up on League lore tbh).",
    reason: "She's basically Lux ability-wise ! She also has a lot of crowd control abilitites, so it's fun to play against enemies.",
    rating: "9/10 (-1 because I miss my abilities a lot)"
  },
  {
    title: "League of Legends",
    link: "images/league_senna.jpg",
    charName: "Senna",
    genre: ["MOBA"],
    platform: ["PC", "Mobile"],
    description: "Freed from a lantern that trapped her soul, she rejoins the Sentinels of Light in their fight against the Shadow Isles.",
    reason: "She can hit enemies from far away once she scales enough, so I don't have to worry too much about dying !",
    rating: "9.5/10 (-0.5 because sometimes I lose before we win :c)"
  },
  {
    title: "League of Legends",
    link: "images/league_yone.jpg",
    charName: "Yone",
    genre: ["MOBA"],
    platform: ["PC", "Mobile"],
    description: "Back from the dead, he now travels the lands to fight demons.",
    reason: "Face card doesn't decline. Also, he's easy to build and has fun abilities. Did I mention face card yet btw.",
    rating: "9/10 (-1 because he's a melee champ)"
  },
  {
    title: "Starcraft 2",
    link: "images/sc2_kerrigan.jpg",
    charName: "Kerrigan",
    genre: ["Strategy", "RTS"],
    platform: ["PC"],
    description: "Once a ghost, then becoming the Queen of Blades, ruler of the Zerg, reverting back to human and... " +
    "there's honestly a lot but basically she's been thru a lot.",
    reason: "BADDIE OF THE UNIVERSE MAKE SOME NOISE!!!!! Kerrigan you will always be famous (Starcraft has been fading " +
    "from the spotlight for years).",
    rating: "10/10 (My brain is telling me to subtract something, but my heart tells me no)."
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
      h3.style.fontFamily = "Papyrus", "Arial";
      break;
    case "League of Legends":
      h2.style.fontFamily = "Papyrus", "Arial";
      h3.style.fontFamily = "Papyrus", "Arial";
      break;
    case "Starcraft 2":
      h2.style.fontFamily = "Tektur", "Arial";
      h3.style.fontFamily = "Tektur", "Arial";
      break;
    default: 
      h2.style.fontFamily = "Arial";
      h3.style.fontFamily = "Caveat Brush", "Arial";
      break;
  }

  const description = details.querySelector(".description-bulletpoint");
  const reason = details.querySelector(".reason1-bulletpoint");
  const rating = details.querySelector(".rating-bulletpoint");

  description.textContent = filteredData.description;
  reason.textContent = filteredData.reason;
  rating.textContent = filteredData.rating;
  

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

// Form for adding a card
// Aided heavily by https://www.youtube.com/watch?v=JeXqaKeJSRI 
document.getElementById("card-form").addEventListener("submit", function(e) {
  e.preventDefault(); // Page refreshes without this
  const title = document.getElementById("title-input").value;
  const charName = document.getElementById("charName-input").value;
  const imageURL = document.getElementById("image-input").value;
  const description = document.getElementById("description-input").value;
  const likeReason = document.getElementById("reason-input").value;
  const rating = document.getElementById("rating-input").value;

  // Checked Boxes
  const genreCheckboxes = document.querySelectorAll('input[name="genre"]:checked');
  const platformCheckboxes = document.querySelectorAll('input[name="platform"]:checked');

  // Add What is checked
  const genres = [];
  for (let i = 0; i < genreCheckboxes.length; i++) {
      genres.push(genreCheckboxes[i].value);
  }

  const platforms = [];
  for (let i = 0; i < platformCheckboxes.length; i++) {
      platforms.push(platformCheckboxes[i].value);
  }

  // New card for gameCharss
  const newCard = {
    title: title,
    link: imageURL,
    charName: charName,
    genre: genres,
    platform: platforms,
    description: description,
    reason: likeReason,
    rating: rating
  };

  // Push and show cards, (somewhat) taken/inspired from old removeCard function
  gameChars.push(newCard);
  showCards(gameChars);

  alert("Card added!");
});
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