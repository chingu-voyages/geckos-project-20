export async function getQuote() {
    return await fetch('https://quotes.rest/qod.json?category=inspire');
}

export async function getBackground() {
    return await fetch('https://source.unsplash.com/daily');
}
