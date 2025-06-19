export const dailyTimes = [
    {
        day: "Sunday",
        earliest: "5:30 AM",
        latest: "3:00 PM",
        interval: "15 Minutes"
    },
    {
        day: "Monday",
        earliest: "8:00 AM",
        latest: "6:00 PM",
        interval: "30 Minutes"
    },
    {
        day: "Tuesday",
        earliest: "9:00 AM",
        latest: "6:00 PM",
        interval: "30 Minutes"
    },
    {
        day: "Wednesday",
        earliest: "9:00 AM",
        latest: "6:00 PM",
        interval: "30 Minutes"
    },
    {
        day: "Thursday",
        earliest: "9:00 AM",
        latest: "6:00 PM",
        interval: "30 Minutes"
    },
    {
        day: "Friday",
        earliest: "8:00 AM",
        latest: "8:00 PM",
        interval: "15 Minutes"
    },
    {
        day: "Saturday",
        earliest: "5:30 AM",
        latest: "8:00 PM",
        interval: "15 Minutes"
    }
]

export function displayDailyTimes(dailyTimes) {
    const teeTimes = document.querySelector("#daily");
    dailyTimes.forEach((daily) => {
        let card = document.createElement('section');
        let day = document.createElement('h2');
        let earliest = document.createElement('p');
        let latest = document.createElement('p');
        let interval = document.createElement('p');

        day.innerHTML = daily.day;
        earliest.innerHTML = `First: ${daily.earliest}`;
        latest.innerHTML = `Last: ${daily.latest}`;
        interval.innerHTML = `Tee Time Every ${daily.interval}`;

        card.appendChild(day);
        card.appendChild(earliest);
        card.appendChild(latest);
        card.appendChild(interval);
        teeTimes.appendChild(card);
    });
}