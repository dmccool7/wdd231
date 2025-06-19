export function visitMessage() {    
    const now = Date.now();
    const lastVisit = localStorage.getItem("lastVisit");
    const sidebar = document.querySelector("#sidebar");
    let message = "";

    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        message = "Welcome back! Are you ready to get an all-inclusive seasonal membership? Just fill out our form below!"
    }

    sidebar.innerHTML = message;
    localStorage.setItem("lastVisit", now.toString());
}