import axios from "axios";

const searchString = async (term) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${term}&units=metric&appid=845022c221a96a99479352315bf81bcf`;

  const response = await axios.get(url);

  return response;
};

export default searchString;
