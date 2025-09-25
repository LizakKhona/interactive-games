// доступ до елементів
const footballSectionElem = document.querySelector('.js-football-section');
const containerElem = document.querySelector('.js-container');

// створення елементів

// p
const titleElem = document.createElement('p');
titleElem.textContent = 'Футбол';
titleElem.classList.add("football-title")

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

// fieldElem.addEventListener("click", onFieldClick)
// function onFieldClick(event) {
//     // const clientX = event.clientX;
//     // const clientY = event.clientY;
//     // event.target.clientX === clientX;
//     // ballElem.target.clientX === clientY;
//     console.log(event);
    
    
// }