/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// Array of Title, URL, and Character
// [0] is Title, [1] is image link, [2] is Character name
imageURLPairs = 
[
  ["Fresh Prince of Bel Air",
     "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg", 
     "Will Smith"],
  ["Curb Your Enthusiasm",
    "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
    "Character Placeholder"],
  ["East Los High",
    "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg",
    "Character Placeholder"]
];

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < imageURLPairs.length; i++) {
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, imageURLPairs[i]); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(card, mediaURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = mediaURL[0];

  const cardImage = card.querySelector("img");
  cardImage.src = mediaURL[1];
  cardImage.alt = mediaURL[0] + " Poster";

  // Character name
  const cardCharacter = card.querySelector("h3");
  cardCharacter.textContent = mediaURL[2];

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", mediaURL[0], "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  imageURLPairs.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

// Data search
// Some code is rom https://www.youtube.com/watch?v=TlP5WIxVirU 
const searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {    
    const title = card.querySelector("h2").textContent.toLowerCase();
    const charName = card.querySelector("h3").textContent.toLowerCase();

    const isVisible = title.includes(value) || 
      charName.includes(value);
    card.classList.toggle("hide", !isVisible);
  });
});