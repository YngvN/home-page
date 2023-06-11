const loadingIndicator = document.querySelector(".loading");
const loadingLetters = loadingIndicator.querySelectorAll("span");

const root = document.querySelector(":root");

const lightButton = document.querySelector(".btn-lightdark");
const html = document.documentElement;

const hamburgerButton = document.querySelector(".btn-hamburger");
const hamburgerContainer = document.querySelector(".container-hamburger");
const nav = document.querySelector("nav");




let doneLoading = false;

loadingIndicator.style.opacity = "1";
loadingIndicator.style.left = "50%";



export function showLoadingIndicator(doneLoading) {

  function spinLetters(index) {
    if (doneLoading) {
        hideLoadingIndicator();
      return;
    }
    loadingLetters[index].style.animation = "spinX 1s linear forwards";

    if (index < loadingLetters.length - 1) {
      setTimeout(() => {
        loadingLetters[index].style.animation = "none";
        spinLetters(index + 1);
      }, 1000); 
      
    }
  }
  spinLetters(0);

  loadingIndicator.style.display = "flex";
}


export function hideLoadingIndicator() {

    loadingIndicator.style.height = "0";
    loadingIndicator.style.width = "0";


    loadingLetters[0].style.opacity = "0"
    loadingLetters[1].style.opacity = "0"
    loadingIndicator.style.opacity = "0";

    setTimeout(() => {
        loadingIndicator.style.display = "none";
    }, 3000); 

}


function toggleColorScheme() {
  const html = document.documentElement;
  const colorScheme = getComputedStyle(html).getPropertyValue("color-scheme");
const body = document.body;

  if (colorScheme === "light") {
    console.log("Light mode");

    setTimeout(() => {
      html.style.backgroundColor = "inherit";
      html.style.colorScheme = "dark";
      html.style.setProperty("--color1-primary", "#000000");
     html.style.setProperty("--color1-secondary", " #8fff79");
        html.style.setProperty("--color2-primary", " #ffffff");

    html.style.setProperty("--background", "#ffffff");
    }, 400);
  } else {

    console.log("Dark mode");

    setTimeout(() => {
      html.style.backgroundColor = "inherit";
      html.style.colorScheme = "light";
      html.style.setProperty("--color1-primary", "#ffffff");
        html.style.setProperty("--background", "#000000");
        html.style.setProperty("--color1-secondary", "#b4fbff");
        html.style.setProperty("--color2-primary", "#000000");
    }, 300);
  }
}

window.onload = function () {
  toggleColorScheme();
};

export function displayAll() {
  const hiddenObjects = document.querySelectorAll(".hide");
  const name = document.querySelector(".footer-name")
  
  name.style.opacity = "1";

  hiddenObjects.forEach((object) => {
    object.style.display = "flex";
        setTimeout(() => {
        object.style.opacity = "1";
    }, 1000);
  });
}

function showMenu() {
  console.log("Hamburger clicked");
  const hamburgerButton = document.querySelector(".btn-hamburger");


  nav.classList.add("open");
  hamburgerButton.classList.add("active");


  const closeMenu = function (event) {
    if (!nav.contains(event.target)) {
      nav.classList.remove("open");
      hamburgerButton.classList.remove("active");
      document.removeEventListener("click", closeMenu);
    }
  };

  setTimeout(function () {
    document.addEventListener("click", closeMenu);
  }, 0);
}


lightButton.addEventListener("click", function () {
  toggleColorScheme();
});


hamburgerButton.addEventListener("click", showMenu);
hamburgerContainer.addEventListener("mouseover", showMenu);
hamburgerContainer.addEventListener("click", showMenu);





