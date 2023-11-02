const url = `https://type.fit/api/quotes`;
const quotesParagraph = document.getElementById("quote-p");
const quotesAuthor = document.getElementById("author-p");

fetch(url)
    .then(response => response.json())
    .then(data => {
        quotesParagraph.innerHTML = data[0].text;
        quotesAuthor.innerHTML = `${data[0].author.slice(0, -10)}`;
        console.log(data[0].text)

        const nextButton = document.getElementById("next-button") 
        let currentIndex = 0;

        function displayQuote(index) {
            quotesParagraph.innerHTML = data[index].text;
            quotesAuthor.innerHTML = data[index].author.slice(0, -10);
        }

        displayQuote(currentIndex);

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % data.length;
            displayQuote(currentIndex);
        });
        }  
    )
