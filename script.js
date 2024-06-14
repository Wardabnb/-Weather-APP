document.addEventListener("DOMContentLoaded", () => {
  const apiKey = "515f357cbead4c9d9bc145123241406";
  const cityInput = document.getElementById("cityInput");
  const searchForm = document.getElementById("searchForm");
  const cityElement = document.querySelector(".city");
  const tempElement = document.querySelector(".temp");
  const chanceOfRainElement = document.querySelector(".rain-chance");

  const fetchWeather = (city) => {
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        cityElement.textContent = data.location.name;
        tempElement.textContent = `${data.current.temp_c}°`;
        chanceOfRainElement.textContent = `Chance of rain: ${data.current.precip_mm}%`;
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des données météo:",
          error
        );
      });
  };

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const city = cityInput.value.trim();
    if (city) {
      fetchWeather(city);
    }
  });

  fetchWeather("Algeria");
});
