import { showLoadingIndicator, hideLoadingIndicator } from "./utility.js";

const name = document.querySelector(".name");
const title = document.querySelector(".title");
const nameContainer = document.querySelector(".container-name");



showLoadingIndicator(false);

setTimeout(() => {
    displayName();
}, 2000);


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
        nameContainer.style.position = "absolute";
        nameContainer.style.right = "2em";
        nameContainer.style.bottom = "2em";
        name.style.opacity = "1";
        title.style.display = "none";

        displayAll();
    }, 4000);
}


function displayAll() {
  const hiddenObjects = document.querySelectorAll(".hide");
  console.log(hiddenObjects);
  hiddenObjects.forEach((object) => {
    object.style.display = "block";
        setTimeout(() => {
        object.style.opacity = "1";
    }, 1000);
  });

}

function setSessionStorageValue() {
  sessionStorage.setItem("loadingIndicator", "true");
}

function checkAndDisplayAll() {
  const hasViewedIndex = sessionStorage.getItem("loadingIndicator");

  if (hasViewedIndex === "true") {
    displayAll();
  }
  else{
    setTimeout(() => {
        showLoadingIndicator(true);
        displayName();
    }, 3000);
  }
}
