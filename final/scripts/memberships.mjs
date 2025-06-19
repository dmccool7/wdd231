export const memberships = [
    {
        name: "Student Membership",
        image: "images/student.webp",
        seasonal: "$500",
        single: "$20"
    },
    {
        name: "Adult Membership",
        image: "images/adult.webp",
        seasonal: "$1000",
        single: "$50"
    },
    {
        name: "Family Membership",
        image: "images/family.webp",
        seasonal: "$1750",
        single: "N/A"
    },
    {
        name: "Senior Membership",
        image: "images/senior.webp",
        seasonal: "$800",
        single: "$35"
    }
]

export function displayMemberships(memberships) {
    const rates = document.querySelector("#member-rates");
    memberships.forEach((type) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let seasonal = document.createElement('p');
        let single = document.createElement('p');

        name.innerHTML = type.name;
        image.setAttribute('src', type.image);
        image.setAttribute('alt', type.name);
        image.setAttribute('loading', 'lazy');
        seasonal.innerHTML = `Season Price: ${type.seasonal}`;
        single.innerHTML = `Single Day Price: ${type.single}`;

        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(seasonal);
        card.appendChild(single);
        rates.appendChild(card);
    });
}