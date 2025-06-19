const dialog = document.querySelector("#dialog");
const title = document.querySelector("#dialog h2");
const closeButton = document.querySelector("#dialog button");
const details = document.querySelector("#dialog p");
const icon = document.createElement("img");
const clicker = document.querySelector("#clicker");
dialog.appendChild(icon);

const key = '7696238527342e516ea4164307cf9d81';
const lat = 36.13;
const lon = -94.20;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;

export function setupWeather() {
    closeButton.addEventListener("click", () => {
        dialog.close();
    });

    clicker.addEventListener("click", () => {
        dialog.showModal();
    });
} 

export async function apiFetchWeather() {
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

function displayResults(data) {
    title.innerHTML = `Fayetteville,  Arkansas`
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    details.innerHTML = `${data.main.temp}&deg;F  -  ${data.weather[0].description}`
    icon.setAttribute('src', iconURL)
    icon.setAttribute('alt', `Weather Icon`)
    icon.setAttribute('loading', 'lazy')
}