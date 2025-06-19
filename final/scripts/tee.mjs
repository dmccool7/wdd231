import { setCurrentYear, setLastModified } from "./dom.mjs";
import { setupHamburger } from "./navigation.mjs";
import { dailyTimes, displayDailyTimes } from "./daily.mjs";

setCurrentYear();
setLastModified();
setupHamburger();
displayDailyTimes(dailyTimes);