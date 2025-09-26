let cari = document.querySelector(".cari");
let search = document.querySelector(".search");
let weatherTex = document.querySelector(".weather-text");
let weatherTextNumber = document.querySelector(".weather-text-number");
let country = document.querySelector(".country .country-text span");
let lastUpdate = document.querySelector(".country .lastUpdate span");
let bodyImg = document.querySelector(".body-img");
let weathersection = document.querySelector(".weather-section");

let weatherdetail = async (hasilCari) => {
  let api_key = "29f261420f584bb8b6644731251109";

  try {
    let fetchapi = await fetch(
      ` https://api.weatherapi.com/v1/current.json?key=${api_key}&q=${hasilCari}`
    );
    let responsive = await fetchapi.json();
    let temperature = Math.floor(responsive.current.temp_c);
    weatherTextNumber.innerHTML = `${temperature}<span>°C</span>`;
    weatherTex.innerText = responsive.current.condition.text;
    country.innerText = responsive.location.country;
    bodyImg.innerHTML = `<img
            src="https:${responsive.current.condition.icon}"
            alt=""
            class="weather-icon"
          />`;

    let coba = responsive.current.last_updated;
    let jam = new Date(`${coba}`);
    lastUpdate.innerHTML = `${jam.getHours()} : ${jam
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  } catch (error) {
    bodyImg.innerHTML = "";
    weatherTextNumber.innerHTML = "";
    country.innerText = "--";
    lastUpdate.innerHTML = "--";
    weatherTex.innerHTML = `<h6 class="weather-text-number">Kota tidak ditemukan</h6>`;
  }
};

cari.addEventListener("click", async function () {
  let hasilCari = search.value;
  if (hasilCari.length == 0) {
    weatherTextNumber.innerHTML = "";
    country.innerText = "--";
    lastUpdate.innerHTML = "--";
    weatherTex.innerHTML = `<h6 class="weather-text-number">Masukkan nama kota</h6>`;
  } else if (hasilCari) {
    weatherdetail(hasilCari);
  }
});
