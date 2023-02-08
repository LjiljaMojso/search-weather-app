import "./App.css";
import { useState } from "react";
import SearchForm from "./components/SearchForm";
import Card from "./components/Card";
import searchForecas from "./apiForecast";
import searchString from "./api";

function App() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [forecast, setForecast] = useState([]);
  const handleSubmit = async (term) => {
    setLoading(true);
    const searchResult = await searchString(term);
    const searchResultForecast = await searchForecas(term);

    console.log(searchResult.data);
    console.log(searchResultForecast.data);
    setLoading(false);
    setWeather(searchResult.data);
    setForecast(searchResultForecast.data);
    setShow(true);
  };

  return (
    <div className="app">
      <SearchForm onSubmit={handleSubmit} />
      <Card
        weather={weather}
        loadingData={loading}
        showData={show}
        forecast={forecast}
      />
    </div>
  );
}

export default App;
