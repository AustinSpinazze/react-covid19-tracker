import React, { useState, useEffect } from "react";

import { Cards, Chart, CountryPicker } from "./components/UIElements/index";
import styles from "./App.module.css";
import { fetchData } from "./api";

const App = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const dataHelper = async () => {
      const response = await fetchData();
      setData(response);
    };
    dataHelper();
  }, []);

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountryPicker />
      <Chart />
    </div>
  );
};

export default App;
