const now =new Date();
currentyear= document.querySelector("#currentyear");
currentyear.textContent = now.getFullYear();

const lastupdated = document.querySelector("#lastupdated")
lastupdated.textContent = document.lastModified
