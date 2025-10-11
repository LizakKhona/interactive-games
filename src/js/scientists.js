const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
    node: document.getElementById('Albert-Einstein'),
    img: '../img/albert-einstein.jpg',
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
    node: document.getElementById('Isaac-Newton'),
    img: '../img/isaac-newton.jpg',
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
    node: document.getElementById('Galileo-Galilei'),
    img: '../img/galileo-galilei.jpg',
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
    node: document.getElementById('Marie-Curie'),
    img: '../img/marie-curie.jpg',
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
    node: document.getElementById('Johannes-Kepler'),
    img: '../img/johannes-kepler.jpg',
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
    node: document.getElementById('Nicolaus-Copernicus'),
    img: '../img/nikolaus-kopernikus.jpg',
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
    node: document.getElementById('Max-Planck'),
    img: '../img/max-planck.jpg',
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
    node: document.getElementById('Katharine-Blodgett'),
    img: '../img/katharine-blodgett.jpg',
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
    node: document.getElementById('Ada-Lovelace'),
    img: '../img/ada-lovelace.jpg',
  },
  {
    name: 'Sarah',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
    node: document.getElementById('Sarah-Goode'),
    img: '../img/sarah-goode.jpg',
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
    node: document.getElementById('Lise-Meitner'),
    img: '../img/lise-meitner.jpg',
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
    node: document.getElementById('Hanna-Hammarström'),
    img: '../img/hanna-hammarström.png',
  },
];


// const buttonListElem = document.querySelectorAll('.js-scientists-information');
const scientistsItemArrElem = document.querySelectorAll('.scientists-element');
const thumbArrayElem = document.querySelectorAll('.scientists-thumb');
const scientistsListElem = document.querySelector('.scientists-list');
const namesArrElem = document.querySelectorAll('.scientists-name');




const firstButtonElem = document.getElementById("scientists-in-19-century")
firstButtonElem.addEventListener("click", onFirstButtonElemClick)
function onFirstButtonElemClick() {
  for (const scientist of scientists) {
    if (scientist.born >= 1801 && scientist.born <= 1901) {
      scientist.node.classList.add('scientists-thumb-chosen');
      setTimeout(() => scientist.node.classList.remove('scientists-thumb-chosen'), 2500);
    }
  }
}


const secondButtonElem = document.getElementById('albert-einstein-birthday');
secondButtonElem.addEventListener('click', onSecondButtonElemClick);
function onSecondButtonElemClick() {
  for (const scientist of scientists) {
    if (scientist.name === "Albert") {
      scientist.node.classList.add('scientists-thumb-chosen');
        setTimeout(() => scientist.node.classList.remove('scientists-thumb-chosen'), 2500);
    }
  }
}


const thirdButtonElem = document.getElementById('sort-scientists-alphabet');

thirdButtonElem.addEventListener("click", onThirdButtonElemClick)
function onThirdButtonElemClick() {
  const sortedScientists = [...scientists].sort((a, b) => a.name.localeCompare(b.name))
  const scientistsArrElements = sortedScientists.map(scientist => createCard(scientist)).join(" ")
  scientistsListElem.innerHTML = scientistsArrElements

    for (const scientist of sortedScientists) {
    scientist.node = document.getElementById(`${scientist.name}-${scientist.surname}`);
  }
  sortedScientists.forEach(scientist => {    
    scientist.node.classList.add('scientists-thumb-chosen');
    setTimeout(() => scientist.node.classList.remove('scientists-thumb-chosen'), 2500);
  });
}

function createCard(scientist) {
  return `<li class="scientists-item">
                <div class="scientists-thumb" id="${scientist.name}-${scientist.surname}">
                    <p class="scientists-name">${scientist.name} ${scientist.surname}</p>
                    <img class="scientists-img" src="${scientist.img}" alt="A scientist" width="100" height="100">
                </div>
            </li>`;
}


const fourthButtonElem = document.getElementById('surname-starts-with-c');
fourthButtonElem.addEventListener("click", onFourthButtonElemClick)
function onFourthButtonElemClick() {
  for (const scientist of scientists) {
    if (scientist.surname[0] === "C") {
      scientist.node.classList.add('scientists-thumb-chosen');
      setTimeout(() => scientist.node.classList.remove("scientists-thumb-chosen"), 2500)
    }
  }
}


const fifthButtonElem = document.getElementById('sort-scientists-age');
fifthButtonElem.addEventListener("click", onFifthButtonElemClick)
function onFifthButtonElemClick() {
    const sortedByAge = [...scientists].sort((a, b) => a.dead - a.born - (b.dead - b.born));
    const sortedElementsHTML = sortedByAge.map(scientist => createElement(scientist)).join(' ');
    scientistsListElem.innerHTML = sortedElementsHTML;
    for (const scientist of sortedByAge) {
      scientist.node = document.getElementById(`${scientist.name}-${scientist.surname}`);
    }
    sortedByAge.forEach(scientist => {
      scientist.node.classList.add('scientists-thumb-chosen');
      setTimeout(() => scientist.node.classList.remove('scientists-thumb-chosen'),2500);});
}


function createElement(scientist) {
  return `<li class="scientists-item">
                <div class="scientists-thumb" id="${scientist.name}-${scientist.surname}">
                    <p class="scientists-name">${scientist.name} ${scientist.surname}</p>
                    <img class="scientists-img" src="${scientist.img}" alt="A scientist" width="100" height="100">
                </div>
            </li>`;
}

const sixthButtonElem = document.getElementById('name-starts-without-a');
sixthButtonElem.addEventListener("click", onSixthButtonElemClick)
function onSixthButtonElemClick() {
  for (const scientist of scientists) {
    if (scientist.name[0] !== "A") {
      scientist.node.classList.add('scientists-thumb-chosen');
    setTimeout(() => scientist.node.classList.remove("scientists-thumb-chosen"), 2500)
    }
  }
}

 
const seventhButtonElem = document.getElementById('youngest-scientist');
seventhButtonElem.addEventListener("click", onSeventhButtonElemClick)
function onSeventhButtonElemClick() {
  const birthArr = scientists.map(scientist => scientist.born)
  const maxNumber = Math.max(...birthArr)
  for (const scientist of scientists) {
    if (scientist.born === maxNumber) {
      scientist.node.classList.add('scientists-thumb-chosen');
    setTimeout(() => scientist.node.classList.remove("scientists-thumb-chosen"), 2500)
    }
  }
}


const eighthButtonElem = document.getElementById('youngest-oldest-scientist');
eighthButtonElem.addEventListener("click", onEighthButtonElemClick)
function onEighthButtonElemClick() {
  const scientistsAge = scientists.map(scientist => scientist.dead - scientist.born)
  const maxAge = Math.max(...scientistsAge)
  const minAge = Math.min(...scientistsAge)

  const oldestScientist = scientists.find(scientist => scientist.dead - scientist.born === maxAge)
  oldestScientist.node.classList.add('scientists-thumb-chosen');
  setTimeout(() => oldestScientist.node.classList.remove("scientists-thumb-chosen"), 2500)

  const youngestScientist = scientists.find(scientist => scientist.dead - scientist.born === minAge)
  youngestScientist.node.classList.add('scientists-thumb-chosen');
  setTimeout(() => youngestScientist.node.classList.remove("scientists-thumb-chosen"), 2500)
}


const ninthButtonElem = document.getElementById('same-letter-name-surname');
ninthButtonElem.addEventListener("click", onNinththButtonElemClick)
function onNinththButtonElemClick() {
  for (const scientist of scientists) {
    if(scientist.name[0] === scientist.surname[0]) {
    scientist.node.classList.add('scientists-thumb-chosen');
    setTimeout(() => scientist.node.classList.remove("scientists-thumb-chosen"), 2500)
    }
  }
}