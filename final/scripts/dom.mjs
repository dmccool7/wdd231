export function setCurrentYear() {
    document.getElementById("currentyear").textContent = new Date().getFullYear();
} 

export function setLastModified() {
    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
} 