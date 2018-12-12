export async function getQuote() {
  return await fetch("https://talaikis.com/api/quotes/random/");
}
