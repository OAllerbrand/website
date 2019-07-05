console.log("Hello World.");
const body = document.getElementsByTagName('body')
const inputColour = document.getElementsByClassName('backcolour');
const changeBackColor = document.getElementById('setColor');
const news = [
    {
        title: "News Section",
        date: "5/7/19",
        description: "Welcome to my news section",
        author: "Oskar A",
        paragraph: "This is some text in a paragraph.",
    },
    {
        title: "Test 1",
        date: "5/7/19",
        description: "Welcome to my news section",
        author: "Oskar A",
        paragraph: "This is some text in a paragraph.",
    },
    {
        title: "Test 2",
        date: "5/7/19",
        description: "Welcome to my news section",
        author: "Oskar A",
        paragraph: "This is some text in a paragraph.",
    },
];

const newsItem = function(article) {
    const articleStructure = document.createElement(`
        <li class="list-group-item">
            <h5>${article.title}<h5>
            <p>${article.author}</p>
            <p>${article.date}</p>
            <p>${article.description}</p>
            <p>${article.paragraph}</p>
        </li>
    `);
    document.getElementById('news').appendChild(articleStructure);
}

const makeNews = function() {
    news.forEach(function(article) {
        newsItem(article);
    })
}

makeNews();

changeBackColor.addEventListener('click', () => {
    console.log('am I working?')
    body.style('background-color', changeBackColor.value)
//   changeBackColor.style.backgroundColor = inputColour;
});