document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.classList.toggle("show");
});

const file = 'https://dmccool7.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getMemberData() {
  const response = await fetch(file);
  const data = await response.json();
  displayMembers(data.members);
}

const displayMembers = (members) => {
  members.forEach((member) => {
    let card = document.createElement('section');
    let name = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let level = document.createElement('p');
    let url = document.createElement('a');
    let logo = document.createElement('img');

    name.textContent = member.name;
    address.textContent = member.address;
    phone.textContent = member.phone;
    level.textContent = member.level;
    url.textContent = member.websiteURL;
    url.setAttribute('href', member.websiteURL);
    url.setAttribute('target', '_blank');
    logo.setAttribute('src', member.image);
    logo.setAttribute('alt', `Logo`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '340');

    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(level);
    card.appendChild(url);
    card.appendChild(logo);
    cards.appendChild(card);
  });
}

getMemberData();