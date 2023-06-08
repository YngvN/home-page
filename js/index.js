import { showLoadingIndicator, hideLoadingIndicator, displayAll } from "./utility.js";

const name = document.querySelector(".name");
const title = document.querySelector(".title");
const nameContainer = document.querySelector(".container-name");


function displayName() {

    showLoadingIndicator(true);

    setTimeout(() => {
        name.style.opacity = "1";
    }, 1000);

    setTimeout(() => {
        title.style.opacity = "1";
    }, 2000);

    setTimeout(() => {
        title.style.opacity = "0";
        name.style.opacity = "0";
    }, 3000);    
    
    setTimeout(() => {

        displayAll();
    }, 4000);
}


// HUSK Å SLETT
// sessionStorage.setItem("viewedBefore", "false");


// Checks if the index has been viewed before, and skips the first animation in that case
function checkAndDisplayAll() {
  const hasViewedIndex = sessionStorage.getItem("viewedBefore");

  if (hasViewedIndex === "true") {
    showLoadingIndicator(true);
    displayAll();
  }
  else{

    showLoadingIndicator(false);

    setTimeout(() => {
        displayName();
    }, 3000);

    sessionStorage.setItem("viewedBefore", "true");
  }
}

checkAndDisplayAll();
