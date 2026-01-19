window.addEventListener("scroll", function () {
  var cards = document.getElementsByClassName("service-card");
  var aboutText = document.querySelector(".about-text");

  for (var i = 0; i < cards.length; i++) {
    if (cards[i].getBoundingClientRect().top < window.innerHeight - 100) {
      cards[i].classList.add("active");
    }
  }

  if (aboutText.getBoundingClientRect().top < window.innerHeight - 100) {
    aboutText.classList.add("active");
  }
});
