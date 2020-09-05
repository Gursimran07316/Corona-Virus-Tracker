import React, { Component } from "react";
import "./styles.css";
import { Card, CountryPicker, Chart } from "./Components";
import { fetchData } from "./API";
import Image from "./Image/image.png";

class App extends Component {
  state = {
    data: [],
    country: ""
  };
  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
    console.log(this.state.data);
  }
  handleCountryChange = async country => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
    console.log(this.state);
  };
  render() {
    return (
      <div className="container center container-1">
        <div class="img-container">
          <img src={Image} alt="" className="responsive-img center-align" />
        </div>
        <Card data={this.state.data} />
        <CountryPicker
          handleCountryChange={this.handleCountryChange}
          data={this.state.data}
        />
        <Chart data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}
export default App;
