document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.classList.toggle("show");
});

const dialog = document.querySelector("#dialog");
const title = document.querySelector("#dialog h2");
const closeButton = document.querySelector("#dialog button");
const details = document.querySelector("#dialog p");
const icon = document.querySelector("#dialog img");
const key = '7696238527342e516ea4164307cf9d81';
const lat = 36.13;
const lon = -94.20;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
const clicker = document.querySelector("#clicker");

closeButton.addEventListener("click", () => {
    dialog.close();
});

clicker.addEventListener("click", () => {
    dialog.showModal();
});

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

function displayResults(data) {
    title.innerHTML = `Fayetteville,  Arkansas`
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    details.innerHTML = `${data.main.temp}&deg;F  -  ${data.weather[0].description}`
    icon.setAttribute('src', iconURL)
    icon.setAttribute('alt', `Weather Icon`)
    icon.setAttribute('loading', 'lazy')
}