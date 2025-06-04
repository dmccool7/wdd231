document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.classList.toggle("show");
});

const weatherCard = document.querySelector('#weather');
const temp = document.createElement('h3');
const icon = document.createElement('img');
const description = document.createElement('figcaption');
const forecastToday = document.createElement('p');
const forecastTomorrow = document.createElement('p');
const forecastNext = document.createElement('p');
const lat = 36.37;
const lon = -94.21;
const myKey = 'fea06278fa004a70786bf25c0b8b17dd';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${myKey}`;
const foreURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${myKey}&units=imperial`;



async function apiFetchCurrent() {
    try {
        const responseCurrent = await fetch(url);
        if (responseCurrent.ok) {
            const dataCurrent = await responseCurrent.json();
            displayResultsCurrent(dataCurrent);
        } else {
            throw Error(await responseCurrent.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchCurrent();

function displayResultsCurrent(dataCurrent) {
    temp.innerHTML = `${dataCurrent.main.temp}&deg;F`
    description.innerHTML = dataCurrent.weather[0].description
    const iconURL = `https://openweathermap.org/img/wn/${dataCurrent.weather[0].icon}@2x.png`
    icon.setAttribute('src', iconURL)
    icon.setAttribute('alt', description)
}

async function apiFetchFore() {
    try {
        const responseFore = await fetch(foreURL);
        if (responseFore.ok) {
            const dataFore = await responseFore.json();
            displayResultsFore(dataFore);
        } else {
            throw Error(await responseFore.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetchFore();

function displayResultsFore(dataFore) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const middayFore = dataFore.list.filter(forecast => forecast.dt_txt.includes("12:00:00"));
    
    [forecastToday, forecastTomorrow, forecastNext].forEach((d, index) => {
        const day = new Date(middayFore[index].dt * 1000);
        const dayName = days[day.getDay()];
        const foreTemp = middayFore[index].main.temp;
        d.innerHTML = `${dayName}: ${foreTemp}&deg;F`;
        weatherCard.appendChild(d);
    })
}

weatherCard.appendChild(temp);
weatherCard.appendChild(icon);
weatherCard.appendChild(description);

const file = 'https://dmccool7.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#business-cards');
let allMembers = [];

async function getMemberData() {
    try {
        const responseSpot = await fetch(file);
        if (responseSpot.ok) {
            const dataSpot = await responseSpot.json();
            allMembers = dataSpot.members;
            const filteredMembers = filterMembers(allMembers);
            const randomTwo = getRandomMembers(filteredMembers, 2);
            displayMembers(randomTwo);
        } else {
            throw Error(await responseSpot.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function filterMembers(members) {
    return members.filter(member =>
        member.membership.startsWith('S') || member.membership.startsWith('G')
    );
}

function getRandomMembers(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// Got help from AI on how to get only two randomized members each time.

const displayMembers = (members) => {
  cards.innerHTML = '';
  members.forEach((member) => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let memberURL = document.createElement('a');
    let logo = document.createElement('img');

    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;
    memberURL.textContent = member.websiteURL;
    memberURL.setAttribute('href', member.websiteURL);
    memberURL.setAttribute('target', '_blank');
    logo.setAttribute('src', member.image);
    logo.setAttribute('alt', `${member.name} Logo`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '340');

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(memberURL);
    card.appendChild(logo);
    cards.appendChild(card);
  });
}

getMemberData();