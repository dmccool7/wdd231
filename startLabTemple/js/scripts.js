import { temples } from '../data/temples.js'
// console.log(temples)
import { url } from '../data/temples.js'
// console.log(url)

const showHere = document.querySelector('#showHere');
const myDialog = document.querySelector('#myDialog');
const myTitle = document.querySelector('#myDialog h2');
const closeButton = document.querySelector('#myDialog button');
const myInfo = document.querySelector('#myDialog p');

closeButton.addEventListener('click', () => {
    myDialog.close();
});

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}`
        photo.alt = x.name

        photo.addEventListener('click', () => {
            showStuff(x);
        });
        showHere.appendChild(photo)
    })
}

function showStuff(x) {
    myTitle.innerHTML = x.name
    myInfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person} as temple number ${x.number}.`;
    myDialog.showModal()
}

displayItems(temples)