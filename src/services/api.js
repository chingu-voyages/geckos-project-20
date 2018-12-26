export async function getQuote() {
  return await fetch("https://quotes.rest/qod.json?category=inspire");
}
