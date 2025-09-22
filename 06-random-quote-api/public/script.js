const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

async function fetchQuote() {
  try {
    const res = await fetch("/api/quote");
    const data = await res.json();
    quoteEl.textContent = `"${data.text}"`;
    authorEl.textContent = `— ${data.author}`;
  } catch (error) {
    quoteEl.textContent = "⚠️ Failed to load quote. Try again.";
    authorEl.textContent = "";
    console.error(error);
  }
}

window.addEventListener("load", fetchQuote);

newQuoteBtn.addEventListener("click", fetchQuote);
