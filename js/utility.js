const loadingIndicator = document.querySelector(".loading");
const loadingLetters = loadingIndicator.querySelectorAll("span");

const lightButton = document.querySelector(".btn-lightdark");
const html = document.documentElement;

const hamburgerButton = document.querySelector(".btn-hamburger")



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

  if (html.style.colorScheme === "light") {

    html.style.backgroundColor = "var(--color2)";

    setTimeout(() => {
        html.style.backgroundColor = "inherit";
        html.style.colorScheme = "dark";
    }, 400);

  } else {

    html.style.backgroundColor = "var(--color1)";

    setTimeout(() => {
        html.style.backgroundColor = "inherit";
        html.style.colorScheme = "light";
    }, 300);
  }
}

export function displayAll() {
  const hiddenObjects = document.querySelectorAll(".hide");
  const name = document.querySelector(".footer-name")
  
  name.style.opacity = "1";

  hiddenObjects.forEach((object) => {
    object.style.display = "block";
        setTimeout(() => {
        object.style.opacity = "1";
    }, 1000);
  });
}

function showMenu() {
    const nav = document.querySelector("nav");
    nav.classList.toggle("open");
    hamburgerButton.classList.toggle("active");
}

lightButton.addEventListener("click", toggleColorScheme);

hamburgerButton.addEventListener("click", showMenu);



