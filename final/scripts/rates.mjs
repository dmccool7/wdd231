import { setCurrentYear, setLastModified } from "./dom.mjs";
import { setupHamburger } from "./navigation.mjs";
import { memberships, displayMemberships } from "./memberships.mjs";
import { visitMessage } from "./localStorage.mjs";

setCurrentYear();
setLastModified();
setupHamburger();
displayMemberships(memberships);
visitMessage();