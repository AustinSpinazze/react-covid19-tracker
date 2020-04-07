import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components/UIElements/index";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Covid19 from "./img/Covid19.png";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const dataHelper = async () => {
      const response = await fetchData();
      setData(response);
    };
    dataHelper();
  }, []);

  const countryChangeHandler = async (country) => {
    setData(await fetchData(country));
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={Covid19} alt="COVID-19" />
      <Cards data={data} />
      <CountryPicker countryChangeHandler={countryChangeHandler} />
      <Chart data={data} country={country} />
    </div>
  );
};

export default App;
