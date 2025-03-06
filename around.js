window.addEventListener("load", hide_preloader);

function hide_preloader() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("nav").style.position = "fixed";
}
document.querySelector(".menu-btn").addEventListener("click", abc);
function abc() {
  document.querySelector(".main-menu").classList.toggle("show");
  document.querySelector(".city").classList.toggle("None");
}
//getting info from user
const country_name = document.getElementById("country_name");
const countryName = localStorage.getItem("country_name") || "";
country_name.value = countryName;
country_name.addEventListener("change", () => {
  localStorage.setItem("country_name", country_name.value);
  location.reload();
});

const city_name = document.getElementById("city_name");
const cityName = localStorage.getItem("city_name") || "";
city_name.value = cityName;
city_name.addEventListener("change", () => {
  localStorage.setItem("city_name", city_name.value);
  location.reload();
});
function Search() {
  let sort_by = "publishedAt";
  let language = "en";

  const ar_news = {
    api_key: "47cf659fd8ea4103b6cb75e3af339fa5",
    fetch_ar_news: function (topic) {
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
        .then((data) => this.display_ar_news(data));
    },
    display_ar_news: function (data) {
      let results = data.totalResults;
      const first_time = document.querySelector(".first_time");
      const heads = document.querySelector(".heads");
      first_time.style.display = "none";
      heads.style.display = "block";
      if (results > 10) {
        results = 10;
      }
      const ars_wrapper = document.querySelector(".ars_news");
      ars_wrapper.innerHTML = "";
      for (let j = 0; j < results; j++) {
        const ar_wrapper = document.createElement("div");
        ar_wrapper.classList.add("arpost_wrapper");
        const ar_img = document.createElement("img");
        ar_img.classList.add("ar_img");
        ar_img.src = data.articles[j].urlToImage;
        const ar_text = document.createElement("div");
        ar_text.classList.add("arpost_text");
        const ar_author = document.createElement("p");
        ar_author.innerText = "Author : " + data.articles[j].author;
        const ar_title = document.createElement("p");
        ar_title.innerText = data.articles[j].title;
        const ar_description = document.createElement("p");
        ar_description.innerText = data.articles[j].description;
        const ar_content = document.createElement("p");
        ar_content.innerText = data.articles[j].content;
        const ar_publishedAt = document.createElement("p");
        ar_publishedAt.innerText =
          "Published At : " + data.articles[j].publishedAt;
        ar_publishedAt.classList.add("publishedAt");
        //appending
        ars_wrapper.appendChild(ar_wrapper);
        ar_wrapper.appendChild(ar_img);
        ar_wrapper.appendChild(ar_text);
        ar_text.appendChild(ar_author);
        ar_text.appendChild(ar_title);
        ar_text.appendChild(ar_description);
        ar_text.appendChild(ar_content);
        ar_text.appendChild(ar_publishedAt);
      }
    },
  };

  const weather = {
    api_key: "9d93a90fe2cabaf4bc669e4d185f7a96",
    fetch_weather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.api_key
      )
        .then((info) => info.json())
        .then((info) => this.display_weather(info));
    },
    display_weather: function (info) {
      const first_time = document.querySelector(".first_time");
      const heads = document.querySelector(".heads");
      first_time.style.display = "none";
      heads.style.display = "block";
      const first_part = document.querySelector(".first_part");
      const second_part = document.querySelector(".second_part");
      first_part.innerHTML = "";
      second_part.innerHTML = "";

      const city = document.createElement("p");
      city.innerText = info.name;
      city.classList.add("city");

      const temp = document.createElement("p");
      temp.innerText = "Temperature : " + info.main.temp + "°C";

      const weather_outside = document.createElement("p");
      weather_outside.innerText = info.weather[0].main;

      const icon = document.createElement("img");
      icon.src =
        "https://openweathermap.org/img/wn/" + info.weather[0].icon + ".png";

      const description = document.createElement("p");
      description.innerText = info.weather[0].description;

      const feels_like = document.createElement("p");
      feels_like.innerText = "Feels Like " + info.main.feels_like + "°C";

      const humidity = document.createElement("p");
      humidity.innerText = "Humidity : " + info.main.humidity + "%";

      const wind_speed = document.createElement("p");
      wind_speed.innerText = "Wind Speed : " + info.wind.speed + "km/h";

      //appending
      first_part.appendChild(city);
      first_part.appendChild(weather_outside);
      first_part.appendChild(icon);
      first_part.appendChild(description);
      second_part.appendChild(temp);
      second_part.appendChild(feels_like);
      second_part.appendChild(humidity);
      second_part.appendChild(wind_speed);
    },
  };

  if (country_name.value != "" && city_name != "") {
    weather.fetch_weather(String(city_name.value));
    ar_news.fetch_ar_news(String(country_name.value));
  }
}
