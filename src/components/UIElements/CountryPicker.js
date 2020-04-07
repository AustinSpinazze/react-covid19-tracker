import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ countryChangeHandler }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      setFetchedCountries(await fetchCountries());
    };

    fetch();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(event) => countryChangeHandler(event.target.value)}
      >
        <option value="">Global</option>
        {fetchedCountries.map((country, i) => (
          <option key={i} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
