import axios from "axios";
const url = "https://covid19.mathdro.id/api";
export const fetchData = async (country) => {
  try {
    let newurl=url;
    if(country){
      newurl=`${url}/countries/${country}`;
    }
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(newurl);
    const modifiedObj = { confirmed, deaths, recovered, lastUpdate };
    return modifiedObj;
  } catch (err) {
    console.log(err);
  }
};
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    // const modifiedObj={  confirmed, deaths }
    // console.log(data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date })))
    return data.map(({ confirmed, deaths, reportDate: date }) => ({
      confirmed: confirmed.total,
      deaths: deaths.total,
      date
    }));
  } catch (err) {
    console.log(err);
  }
};
export const fetchCountries = async () => {
  try {
  const {data:{countries}}=await axios.get(`${url}/countries`)
  // console.log(data)
  console.log(countries.map(country=>country.name))
  return countries.map(country=>country.name)
  } catch (err) {
    console.log(err);
  }
};