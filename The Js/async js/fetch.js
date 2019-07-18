//---------------------------------------------------------------------------------
// fetch

function getTodaysWeather(id, location) {
  let h1 = document.querySelector(".title");

  //fetch automatic returns promise
  fetch(
    `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`
  )
    .then(result => {
      console.log(result);
      // return promise & chain so we can return data
      return result.json();
    })
    .then(data => {
      // console.log(data);
      const today = data.consolidated_weather[0];
      //   h1.textContent = `The weather today, will be ${today.weather_state_name}`;
      console.log(
        `The weather today in ${location}, will be ${today.weather_state_name}`
      );
    })
    .catch(error => {
      console.log(error);
    });
}

getTodaysWeather(44418, "London");
getTodaysWeather(2487956, "San Fransico");
