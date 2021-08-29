//api key 79cbf3fd1ed3fe3aacf250d5b6c0a613
//api link https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=79cbf3fd1ed3fe3aacf250d5b6c0a613
const inputField = document.getElementById("input-field");
const buttonClick = document.getElementById("button");
const mainDiv = document.getElementById("main-div");
buttonClick.addEventListener("click", function () {
  if (inputField.value == "") {
    alert(" please write city name");
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputField.value}&appid=79cbf3fd1ed3fe3aacf250d5b6c0a613`
    )
      .then((res) => res.json())
      .then((data) => weatherMap(data));
    inputField.value = "";
    mainDiv.textContent = "";
  }
});
const weatherMap = (data) => {
  const imageUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  console.log(imageUrl);
  const div = document.createElement("div");
  div.innerHTML = `
        <img class="img-fluid" src='${imageUrl}'>
        <h1>${data.name}</h1>
        <h4>Country:${data.sys.country}</h4>
        <h4>Temparature:<span>${(data.main.temp - 273.15).toFixed(
          2
        )}</span>&deg;C</h4>
        <h4>Description:${data.weather[0].description}</h4>
    `;
  mainDiv.appendChild(div);
};
