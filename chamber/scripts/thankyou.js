document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.classList.toggle("show");
});

const results = new URLSearchParams(window.location.search);
const now = new Date().toISOString();

document.querySelector("#thankyou").innerHTML = `
<p>Application by ${results.get('first')} ${results.get('last')} for ${results.get('organization')}</p>
<p>Membership Level Selected: ${results.get('membership')}</p>
<p>Email: ${results.get('email')}</p>
<p>Phone: ${results.get('phone')}</p>
<p>Submitted At: ${now}</p>`
