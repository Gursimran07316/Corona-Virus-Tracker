import React from "react";
import CountUp from "react-countup";
const Card = ({ data }) => {
  // console.log(data.confirmed.value)
  if (!data.confirmed) {
    return <h3 className="indigo-text">Loading...</h3>;
  } else {
    return (
      <div className="row grid">
        <div className="col s12 l3 ">
          <div className="card card-blue">
            <div className="card-content">
              <p className="blue-text text-lighten-2"> Infected</p>
              <h5>
                <CountUp
                  start={0}
                  end={data.confirmed.value}
                  separator=","
                  duration={2}
                />
              </h5>
              <p className="grey-text text-darken-2">
                {" "}
                {new Date(data.lastUpdate).toDateString()}
              </p>
              <h6 className="black-text text-lighten-1">
                {" "}
                Number of Active cases of covid-19
              </h6>
            </div>
          </div>
        </div>

        <div className="col s12 l3 push-l1">
          <div className="card card-green">
            <div className="card-content">
              <p className="green-text text-lighten-1"> Reacovered</p>
              <h5>
                <CountUp
                  start={0}
                  end={data.recovered.value}
                  separator=","
                  duration={2}
                />
              </h5>
              <p className="grey-text text-darken-2">
                {" "}
                {new Date(data.lastUpdate).toDateString()}
              </p>
              <h6 className="black-text text-lighten-1">
                {" "}
                Number of Reacoveries from covid-19
              </h6>
            </div>
          </div>
        </div>
        <div className="col s12 l3 offset-l2">
          <div className="card card-red">
            <div className="card-content">
              <p className="red-text text-darken-1"> Deaths</p>
              <h5>
                <CountUp
                  start={0}
                  end={data.deaths.value}
                  separator=","
                  duration={2}
                />
              </h5>
              <p className="grey-text text-darken-2">
                {" "}
                {new Date(data.lastUpdate).toDateString()}
              </p>
              <h6 className="black-text text-lighten-1">
                {" "}
                Number of Deaths caused by covid-19
              </h6>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
export default Card;
