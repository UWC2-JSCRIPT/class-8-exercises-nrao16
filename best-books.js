const formEl = document.querySelector('#best-books-form');
const yearEl = document.querySelector('#year');
const monthEl = document.querySelector('#month');
const dateEl = document.querySelector('#date');

const displayResults = (bookList) => {
  const displayDiv = document.getElementById('books-container');
  displayDiv.innerHTML = "<strong>Top 5 Hardcover Bestsellers</strong>";

  let top5 = bookList.results.books.filter(book => book.rank <= 5);
  top5.forEach(book => {
    //console.log(book);

    let liElement = document.createElement('li');
    const spanElement = document.createElement('span');
    spanElement.innerHTML = `<strong>${book.title} by ${book.author} </strong>
    <p>
    <img src="${book.book_image}">
    <p>${book.description}<p>`;

    liElement.appendChild(spanElement);
    displayDiv.appendChild(liElement);
  });

};

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const year = yearEl.value;
  const month = monthEl.value;
  const date = dateEl.value;

  const url = `https://api.nytimes.com/svc/books/v3/lists/${year}-${month}-${date}/hardcover-fiction.json?api-key=${apiKey}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      return response.json();
    })
    .then((json) => displayResults(json))
    .catch((err) => console.error(`Fetch problem: ${err.message}`));

});
