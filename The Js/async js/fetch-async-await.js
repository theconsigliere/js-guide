//---------------------------------------------------------------------------------
// fetch async await

async function getWeather(id, location) {
  // try method to run working data
  try {
    let result = await fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${id}/`
    );
    const data = await result.json();

    const today = data.consolidated_weather[0];
    console.log(
      `The weather today in ${location}, will be ${today.weather_state_name}`
    );
    return data;
    //catch to show errors
  } catch (error) {
    console.log(error);
  }
}
//Store data that comes back from the api

let dataLondon;
// using then method so we can get data when it returns from async await promise
getWeather(44418, "London").then(data => {
  dataLondon = data;
  console.log(dataLondon);
});

// {consolidated_weather: Array(6), time: "2019-06-04T10:20:48.898022+01:00", sun_rise: "2019-06-04T04:47:06.901318+01:00", sun_set: "2019-06-04T21:11:03.314994+01:00", timezone_name: "LMT", …}
getWeather(2487956, "San Fransico");
