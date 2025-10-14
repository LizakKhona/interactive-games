// доступ до елементів
const footballSectionElem = document.querySelector('.js-football-section');
const containerElem = document.querySelector('.js-container');

// створення елементів

// p
const titleElem = document.createElement('h2');
titleElem.textContent = 'Футбол';
titleElem.classList.add("title")

// div
const fieldElem = document.createElement("div");
fieldElem.classList.add("football-field")


// ball
const ballElem = document.createElement("img");
ballElem.src = "./img/ball.png";
ballElem.alt = "A ball";
ballElem.classList.add("football-ball")

// додавання в html
containerElem.append(titleElem, fieldElem)
fieldElem.append(ballElem)

footballSectionElem.classList.add("football-section");

let animationName = "ball-moving"
fieldElem.addEventListener("click", onFieldClick)
function onFieldClick(event) {

    if (animationName !== 'ball-moving') {
        animationName === 'ball-moving'
    } else if (animationName === 'ball-moving') {
        animationName === 'ball-moving2';
    }
    ballElem.style.top = `${event.offsetY}px`
    ballElem.style.left = `${event.offsetX}px`
    ballElem.style.animationName = `${animationName}`
}
