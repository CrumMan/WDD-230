const url = "data/where_are_we.json";

const displayMembers = (locations) => {
  const cards = document.querySelector(".grid"); // select the output container element

  locations.forEach((locations ) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    card.classList.add("find_us_card")
    card.innerHTML = `<h2>${locations.locations}</h2>
    <p> Dates Here: ${locations.dates}</p>
    <img class='card_img' src=${locations.imageURL}>
    <p> ${locations.type}</p>`
    cards.appendChild(card);
  }); // end of forEach loop
  
}; // end of function expression
async function getMemberData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayMembers(data.locations);
  } else {
    console.error("There was an error loading the data.");
    const cards = document.querySelector("div.cards");
    cards.innerHTML = "<section><h1>There was an error loading the data</h1></section>";
  }
}
// function list(){
//   const element=document.getElementById('card')
//   element.classList.remove("grid");
//   element.classList.add("list");
  
// }
// function grid(){
//   const element=document.getElementById('card')
//   element.classList.remove("list");
//   element.classList.add("grid");
  
// }
// document.getElementById("grid_but").addEventListener("click", grid);
// document.getElementById("list_but").addEventListener("click", list);
getMemberData();

// This demonstrates another way to handle the fetch response using THEN instead of ASYNC/AWAIT
