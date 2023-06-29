const url = "./data/directory.json";

// COMPARE THIS TO THE VERSION FOUND IN THE W09 Activity: Working with JSON data and the Fetch API module
// Using the innerHTML version is a little less Javascript intensive.
const displayMembers = (members) => {
  const cards = document.querySelector(".cards"); // select the output container element

  members.forEach((member) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.classList.add("directory_card")
    card.innerHTML = `<h2>${member.name}</h2>
    <img class='card_img' src=${member.imageURL}>
    <p> ${member.name}</p>
    <p>${member.city}, ${member.state}, ${member.zip}</p>
    <p><a href="${member.url}"> Website</a></p>`
    cards.appendChild(card);
  }); // end of forEach loop
  
}; // end of function expression

async function getMemberData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayMembers(data.members);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("div.cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}

getMemberData();

// This demonstrates another way to handle the fetch response using THEN instead of ASYNC/AWAIT
