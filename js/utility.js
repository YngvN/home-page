const loadingIndicator = document.querySelector(".loading");
const loadingLetters = loadingIndicator.querySelectorAll("span");

let doneLoading = false;

    loadingIndicator.style.opacity = "1";
    loadingIndicator.style.left = "50%";
export function showLoadingIndicator(doneLoading) {



  function spinSpan(index) {

    if (doneLoading) {
        hideLoadingIndicator();
      return;
    }


    loadingLetters[index].style.animation = "spin 1s linear forwards";

    if (index < loadingLetters.length - 1) {
      setTimeout(() => {
        loadingLetters[index].style.animation = "none";
        spinSpan(index + 1);
      }, 2000); 
    }
  }


  spinSpan(0);

  loadingIndicator.style.display = "flex";
}


export function hideLoadingIndicator() {

    loadingIndicator.style.height = "0";
    loadingIndicator.style.width = "0";


    loadingLetters[0].style.opacity = "0"
    loadingLetters[1].style.opacity = "0"
    loadingIndicator.style.opacity = "0";

    window
    setTimeout(() => {
        loadingIndicator.style.display = "none";
    }, 3000); 

}




