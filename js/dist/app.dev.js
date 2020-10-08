"use strict";

/* burger */
var burger = document.querySelector('.header__burger');
var burgerMenu = document.querySelector('.burger-menu');
var body = document.querySelector('body');
var header = document.querySelector('.header');

burger.onclick = function () {
  burger.classList.toggle("active");
  burgerMenu.classList.toggle("burger-menu_active");
  body.classList.toggle("lock");
};

window.addEventListener('scroll', function () {
  var scrollPos = window.scrollY;

  if (scrollPos > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
/* switch plan */

var individual = document.querySelector('.toggle__individual');
var company = document.querySelector('.toggle__company');
var switcher = document.querySelector('.toggle__switch');
var offerIndividual = document.querySelector('.offer_individual');
var offerCompany = document.querySelector('.offer_company');

company.onclick = function () {
  switcher.style.left = "130px";
  offerIndividual.style.right = "-100%";
  offerIndividual.style.display = "none";
  offerCompany.style.right = "0";
  offerCompany.style.display = "block";
};

individual.onclick = function () {
  switcher.style.left = "5px";
  offerCompany.style.display = "none";
  offerCompany.style.right = "-100%";
  offerIndividual.style.display = "block";
  offerIndividual.style.right = "0";
};
/* slider */


var right = document.querySelector('.right');
var left = document.querySelector('.left');
var photo1 = document.querySelector('.user-photo_1');
var photo2 = document.querySelector('.user-photo_2');
var photo3 = document.querySelector('.user-photo_3');
var track = document.querySelector('.slider-track');
var item = document.querySelector('.customers__feedback');
var position = 0;
var itemWidth = item.clientWidth;

function setPosition() {
  track.style.transform = "translateX(".concat(position, "px)");
}

;

function changePhoto() {
  if (position === 0) {
    photo1.classList.add("user-photo_active");
    photo2.classList.remove("user-photo_active");
    photo3.classList.remove("user-photo_active");
  } else if (position === -itemWidth) {
    photo2.classList.add("user-photo_active");
    photo1.classList.remove("user-photo_active");
    photo3.classList.remove("user-photo_active");
  } else if (position === -2 * itemWidth) {
    photo3.classList.add("user-photo_active");
    photo1.classList.remove("user-photo_active");
    photo2.classList.remove("user-photo_active");
  }
}

;
changePhoto();
left.addEventListener("click", function () {
  if (position === -itemWidth || position === -2 * itemWidth) {
    position += itemWidth;
  } else {
    position = -2 * itemWidth;
  }

  ;
  setPosition();
  changePhoto();
});

function forward() {
  if (position === 0 || position === -itemWidth) {
    position -= itemWidth;
  } else {
    position = 0;
  }

  ;
  setPosition();
  changePhoto();
}

setInterval(forward, 10000);
right.addEventListener("click", forward);
photo1.addEventListener("click", function () {
  position = 0;
  setPosition();
  changePhoto();
});
photo2.addEventListener("click", function () {
  position = -itemWidth;
  setPosition();
  changePhoto();
});
photo3.addEventListener("click", function () {
  position = -2 * itemWidth;
  setPosition();
  changePhoto();
});
window.addEventListener('resize', function () {
  itemWidth = item.clientWidth;
});