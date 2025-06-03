const temp = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');
const lat = 49.75;
const lon = 6.64;
const myKey = 'e3d9fde94ac8226decbc1d4b61e256ff';
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${myKey}`;



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
    temp.innerHTML = `${data.main.temp}&deg;F`
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    caption.innerHTML = data.weather[0].description
    icon.setAttribute('src', iconURL)
    icon.setAttribute('alt', caption)
}