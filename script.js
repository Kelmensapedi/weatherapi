let cari = document.querySelector(".cari");
let search = document.querySelector(".search");
let weatherTex = document.querySelector(".weather-text");
let weatherTextNumber = document.querySelector(".weather-text-number");
let country = document.querySelector(".country .country-text span");
let lastUpdate = document.querySelector(".country .lastUpdate span");
let bodyImg = document.querySelector(".body-img");

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
    console.log(error);
  }
};

cari.addEventListener("click", async function () {
  let hasilCari = search.value;

  // let fetchapi = await fetch(
  //   ` http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${hasilCari}`
  // );
  // let reponsive = await fetchapi.json();
  // let weather = Math.floor(reponsive.current.temp_c);
  // weatherTextNumber.innerHTML = `${weather} <span>°C</span>`;
  // console.log(reponsive.current.condition.icon);

  weatherdetail(hasilCari);
  hasilCari = hasilCari + " ";
});
