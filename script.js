// let apiQuotes = [];

// function newQuote() {
//     const quote = apiQuotes[Math.floor(Math.random) * apiQuotes.length];
//     console.log(quote);
// }

// async function getQuotes() {
//     const apiUrl = 'https://type.fit/api/quotes';
//     try {
//       const response = await fetch(apiUrl);
//       apiQuotes = await response.json();
//       newQuote();
//     } catch (error) {
//     // Catch Error Here
//     }
// }

// getQuotes();

const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterButton = document.getElementById('twitter');
const newQuoteButton = document.getElementById('new-quote');
const loader = document.getElementById('loader');

function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

function complete () {
    quoteContainer.hidden = false;
    loader.hidden = true;
}

function newQuote() {
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    loading();
    if (!quote.author) {
        authorText.textContent = "Unknown";
    } else {
        authorText.textContent = quote.author;
    }

    if(quote.text.length > 50) {
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    complete();
}

newQuote();

function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

newQuoteButton.addEventListener('click', newQuote);

twitterButton.addEventListener('click', tweetQuote);
