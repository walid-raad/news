window.addEventListener("load", hide_preloader);

function hide_preloader() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("nav").style.position = "fixed";
}
document.querySelector(".menu-btn").addEventListener("click", abc);
function abc() {
  document.querySelector(".main-menu").classList.toggle("show");
}

//scrolling
let sort_by = "publishedAt";
let language = "en";
let subjects = [
  "sports",
  "politics",
  "technology",
  "art",
  "science",
  "weather",
  "football",
  "movies",
  "food",
  "wars",
];

const news = {
  api_key: "359b663e645147de83245b288ea51f2b",
  // api_key: "d5b47068cbda4238967a84680c50876e",

  fetch_news: function (topic) {
    fetch(
      "https://newsapi.org/v2/everything?q=" +
        topic +
        "&sortBy=" +
        sort_by +
        "&language=" +
        language +
        "&apiKey=" +
        this.api_key
    )
      .then((data) => data.json())
      .then((data) => this.display_news(data));
  },
  display_news: function (data) {
    let i = Math.floor(Math.random() * 95);
    const posts_wrapper = document.querySelector(".posts_wrapper");
    const post_wrapper = document.createElement("div");
    const post_image = document.createElement("div");
    const post_text = document.createElement("div");
    post_wrapper.classList.add("post_wrapper");
    post_text.classList.add("post_text");
    const image = document.createElement("img");
    image.src = data.articles[i].urlToImage;
    image.classList.add("post_img");
    const author = document.createElement("p");
    author.innerText = "Author : " + data.articles[i].author;
    const title = document.createElement("p");
    title.innerText = data.articles[i].title;
    const description = document.createElement("p");
    description.innerText = data.articles[i].description;
    const content = document.createElement("p");
    content.innerText = data.articles[i].content;
    const publishedAt = document.createElement("p");
    publishedAt.innerText = "Published At : " + data.articles[i].publishedAt;
    publishedAt.classList.add("publishedAt");

    //appending
    posts_wrapper.appendChild(post_wrapper);
    post_wrapper.appendChild(post_image);
    post_wrapper.appendChild(post_text);
    post_image.appendChild(image);
    post_text.appendChild(author);
    post_text.appendChild(title);
    post_text.appendChild(description);
    post_text.appendChild(content);
    post_text.appendChild(publishedAt);
  },
};

let s = 0;
while (s < 20) {
  s++;
  let subject = subjects[Math.floor(Math.random() * subjects.length)];
  console.log(subject);
  news.fetch_news(subject);
}
