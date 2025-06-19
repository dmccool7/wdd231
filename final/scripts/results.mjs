export const results = [
    {
        name: "SEC Invitational",
        location: "Baton Rouge, Louisiana",
        date: "April 10-12",
        placement: "2/16"
    },
    {
        name: "Arkansas Classic",
        location: "Fayetteville, Arkansas",
        date: "May 2-4",
        placement: "5/32"
    },
    {
        name: "Southeast Regional",
        location: "Athens, Georgia",
        date: "May 23-26",
        placement: "12/16"
    },
    {
        name: "Florida Coastal Classic",
        location: "Gainesville, Florida",
        date: "June 2-5",
        placement: "6/24"
    },
    {
        name: "Conference Tournament",
        location: "Knoxville, Tennessee",
        date: "June 13-17",
        placement: "1/16"
    }
]

export function displayResults(results) {
    const cards = document.querySelector(".bottom");

    results.forEach((result) => {
        let card = document.createElement('section');
        let name = document.createElement('h3');
        let location = document.createElement('p');
        let date = document.createElement('p');
        let placement = document.createElement('p');

        name.innerHTML = result.name;
        location.innerHTML = `Location: ${result.location}`;
        date.innerHTML = `Date: ${result.date}`;
        placement.innerHTML = `Placement: ${result.placement}`;

        card.appendChild(name);
        card.appendChild(location);
        card.appendChild(date);
        card.appendChild(placement);
        cards.appendChild(card);
    });
}