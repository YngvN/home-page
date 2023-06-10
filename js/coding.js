const buttons = document.querySelectorAll('.btn-selector');

buttons.forEach(button => {
  button.addEventListener('mouseenter', function() {
    buttons.forEach(btn => {
      btn.classList.remove('selected');
    });

    this.classList.add('selected');

    const index = Array.from(buttons).indexOf(this);

    const listElements = document.querySelectorAll('.list .child');

    listElements.forEach(element => {
      element.classList.remove('active');
    });

    listElements[index].classList.add('active');
  });


  const index = Array.from(buttons).indexOf(button);
  const urls = [
    "https://charming-kataifi-bd9bdc.netlify.app/",
    "https://lambent-taffy-8f549a.netlify.app/index.html",
    "https://melodic-beignet-263e2e.netlify.app/"
  ];
  const url = urls[index];

  button.setAttribute('href', url);
});


