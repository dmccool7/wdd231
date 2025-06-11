document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

const navigation = document.querySelector(".navigation");
const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", () => {
    navigation.classList.toggle("show");
    hamburger.classList.toggle("show");
});

const showHere = document.querySelector("#showHere");
const dialog = document.querySelector("#member-dialog");
const title = document.querySelector("#member-dialog h2");
const closeButton = document.querySelector("#member-dialog button");
const fees = document.querySelector("#fees");
const benefits = document.querySelector("#benefits");

closeButton.addEventListener("click", () => {
    dialog.close();
});

const tiers = [
    {
        name: "Nonprofit Membership Level",
        fees: "There are no fees associated with this level.",
        benefits: "Access to monthly networking events and the weekly chamber lunch."
    },
    {
        name: "Bronze Membership Level",
        fees: "$100/Month",
        benefits: "Access to monthly networking events and the weekly chamber lunch."
    },
    {
        name: "Silver Membership Level",
        fees: "$250/Month",
        benefits: "Benefits of Bronze Level + Advertising on the chamber website and at events."
    },
    {
        name: "Gold Membership Level",
        fees: "$500/month",
        benefits: "Benefits of Silver Level + 'How to Grow your Business' Training and event discounts."
    }
]

function displayTiers(tiers) {
    tiers.forEach(tier => {
        const text = document.createElement("h3");
        text.innerHTML = tier.name;
        text.addEventListener("click", () => {
            showDetails(tier);
        });
        showHere.appendChild(text)
    })
}

function showDetails(tier) {
    title.innerHTML = tier.name;
    fees.innerHTML = `<strong>Fees</strong>: ${tier.fees}`;
    benefits.innerHTML = `<strong>Benefits</strong>: ${tier.benefits}`;
    dialog.showModal()
}

displayTiers(tiers)
