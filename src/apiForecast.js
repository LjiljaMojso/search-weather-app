import axios from "axios";

const searchForecast = async (term) => {
  const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${term}&units=metric&appid=845022c221a96a99479352315bf81bcf`;

  const response = await axios.get(urlForecast);

  return response;
};

export default searchForecast;
