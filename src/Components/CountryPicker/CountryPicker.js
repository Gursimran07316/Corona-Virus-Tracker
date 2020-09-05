import React from "react";
import { useState, useEffect } from "react";
import { FormControl, NativeSelect } from "@material-ui/core";
import { fetchCountries } from "../../API";
const CountryPicker = ({ handleCountryChange }) => {
  const [countries, countryHandler] = useState([]);
  useEffect(() => {
    const fetchCountriesData = async () => {
      const intialCounties = await fetchCountries();
      countryHandler(intialCounties);
      // console.log(dailyData)
    };
    fetchCountriesData();
  }, []);
  return (
    <FormControl className="form-control">
      <NativeSelect
        defaultValue=""
        onChange={e => {
          handleCountryChange(e.target.value);
        }}
      >
        <option value="">Global</option>
        {countries.map((country, i) => (
          <option value={country} key={i}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};
export default CountryPicker;
