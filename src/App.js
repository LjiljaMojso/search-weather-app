import './App.css';
import { useState } from 'react';
import SearchForm from './components/SearchForm';
import Card from './components/Card';
import searchForecas from './apiForecast';
import searchString from './api';

function App() {
    const [weather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [forecast, setForecast] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const handleSubmit = async term => {
        setLoading(true);
        const searchResult = await searchString(term).catch(err => {
            setLoading(false);
            setErrorMsg(err);
        });
        const searchResultForecast = await searchForecas(term);

        setLoading(false);
        setWeather(searchResult.data);
        setForecast(searchResultForecast.data);
        setShow(true);
    };

    return (
        <div className="app">
            <SearchForm onSubmit={handleSubmit} />
            {errorMsg && (
                <div className="container">
                    {`${errorMsg.response.data.message}`} <br />
                    {' Due to api doc, you can try with the English name of the city'}
                </div>
            )}
            {weather && <Card weather={weather} loadingData={loading} showData={show} forecast={forecast} />}
        </div>
    );
}

export default App;
