/* burger */
const burger = document.querySelector('.header__burger')
const burgerMenu = document.querySelector('.burger-menu')
const body = document.querySelector('body')
const header = document.querySelector('.header')

burger.onclick = function () {
    burger.classList.toggle("active")
    burgerMenu.classList.toggle("burger-menu_active")
    body.classList.toggle("lock")
}

window.addEventListener('scroll', function () {
    let scrollPos = window.scrollY;
    if (scrollPos > 0) {
        header.classList.add("fixed");
    } else { header.classList.remove("fixed"); }
});



/* switch plan */
const individual = document.querySelector('.toggle__individual')
const company = document.querySelector('.toggle__company')
const switcher = document.querySelector('.toggle__switch')
const offerIndividual = document.querySelector('.offer_individual')
const offerCompany = document.querySelector('.offer_company')

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
const right = document.querySelector('.right');
const left = document.querySelector('.left');
const photo1 = document.querySelector('.user-photo_1');
const photo2 = document.querySelector('.user-photo_2');
const photo3 = document.querySelector('.user-photo_3');
const track = document.querySelector('.slider-track');
const item = document.querySelector('.customers__feedback');
let position = 0;
let itemWidth = item.clientWidth;


function setPosition() {
    track.style.transform = `translateX(${position}px)`;
    
};

function changePhoto() {
    if (position === 0) {
        photo1.classList.add("user-photo_active")
        photo2.classList.remove("user-photo_active")
        photo3.classList.remove("user-photo_active")
    }
    else if (position === -itemWidth) {
        photo2.classList.add("user-photo_active")
        photo1.classList.remove("user-photo_active")
        photo3.classList.remove("user-photo_active")
    }
    else if (position === -2 * itemWidth) {
        photo3.classList.add("user-photo_active")
        photo1.classList.remove("user-photo_active")
        photo2.classList.remove("user-photo_active")
    }
};
changePhoto()

left.addEventListener("click", () => {
    if (position === -itemWidth || position === -2 * itemWidth) { position += itemWidth }
    else { position = -2 * itemWidth };
    setPosition();
    changePhoto();
})

function forward() {
    if (position === 0 || position === -itemWidth) { position -= itemWidth }
    else { position = 0 };
    setPosition();
    changePhoto();
}

setInterval(forward, 10000);

right.addEventListener("click", forward)

photo1.addEventListener("click", () => {
    position = 0;
    setPosition();
    changePhoto()
})

photo2.addEventListener("click", () => {
    position = -itemWidth;
    setPosition();
    changePhoto()
})

photo3.addEventListener("click", () => {
    position = -2 * itemWidth;
    setPosition();
    changePhoto()
})

window.addEventListener('resize', () => {
    itemWidth = item.clientWidth;
});
