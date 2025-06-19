import { setCurrentYear, setLastModified } from "./dom.mjs";
import { setupHamburger } from "./navigation.mjs";
import { setupWeather, apiFetchWeather } from "./weather.mjs";
import { displayResults, results } from "./results.mjs";

setCurrentYear();
setLastModified();
setupHamburger();
setupWeather();
apiFetchWeather();
displayResults(results);