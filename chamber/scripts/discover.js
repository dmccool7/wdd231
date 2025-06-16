document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.classList.toggle("show");
});

const file = 'data/discover.json';
const cards = document.querySelector("#discover-cards");

async function getDiscoverData() {
    try {
        const response = await fetch(file);
        if (response.ok) {
            const data = await response.json();
            displayCards(data.items);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayCards = (items) => {
    items.forEach((item) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let figure = document.createElement('figure');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let image = document.createElement('img');
        let button = document.createElement('button');

        name.innerHTML = item.name;
        image.setAttribute('src', item.image);
        image.setAttribute('alt', item.name);
        image.setAttribute('loading', 'lazy');
        address.innerHTML = item.address;
        description.innerHTML = item.description;
        button.innerHTML = `Learn More`;

        card.appendChild(name);
        card.appendChild(figure);
        figure.appendChild(image);
        card.appendChild(address)
        card.appendChild(description);
        card.appendChild(button);
        cards.appendChild(card);
    });
}

getDiscoverData();

const now = Date.now();
const lastVisit = localStorage.getItem("lastVisit");
const sidebar = document.querySelector("#sidebar");
let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const timeDifference = now - Number(lastVisit);
    const daysBetween = Math.floor(timeDifference / 86400000);

    if (daysBetween < 1) {
        message = "Back so soon! Awesome!";
    } else if (daysBetween === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${daysBetween} days ago.`;
    }
}

sidebar.innerHTML = message;
localStorage.setItem("lastVisit", now.toString());