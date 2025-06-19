export function thankYou() {
    const data = new URLSearchParams(window.location.search);
    const now = new Date().toISOString();

    document.querySelector("#thankyou").innerHTML = `
    <p>Application by ${data.get('first')} ${data.get('last')}</p>
    <p>Membership Selected: ${data.get('membership')}</p>
    <p>Email: ${data.get('email')}</p>
    <p>Phone: ${data.get('phone')}</p>
    <p>Submitted At: ${now}</p>`;
}
