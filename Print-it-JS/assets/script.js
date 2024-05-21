var caroussel = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine: "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
console.log(caroussel);

let index = 0;
let path = "assets/images/slideshow/";

/* Variables */

const image = document.querySelector("#banner img");
const titre = document.querySelector("#banner p");

/* Click flèche droite */

const arrow_right = document.querySelector(".arrow_right");
function clickRight() {
  arrow_right.addEventListener("click", function () {
    index++;
    if (index > 3) {
      index = 0;
    }
    image.src = path + caroussel[index].image;
    titre.innerHTML = caroussel[index].tagLine;
    displayDots();

    console.log("vous avez cliqué sur la flèche");
  });
}
clickRight();

/* Click flèche gauche */

const arrow_left = document.querySelector(".arrow_left");
function clickLeft() {
  arrow_left.addEventListener("click", function () {
    index--;
    if (index < 0) {
      index = caroussel.length - 1;
    }
    image.src = path + caroussel[index].image;
    titre.innerHTML = caroussel[index].tagLine;
    displayDots();

    console.log("vous avez cliqué sur la flèche");
  });
}
clickLeft();

/* Affichage des dots */

const dots = document.querySelector(".dots");

function displayDots() {
  dots.innerHTML = "";
  for (let i = 0; i < caroussel.length; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dots.appendChild(dot);
    if (i == index) {
      dot.classList.add("dot_selected");
    }
  }
}

displayDots();
