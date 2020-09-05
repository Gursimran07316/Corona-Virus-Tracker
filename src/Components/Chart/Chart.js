import React from 'react'
import {useState,useEffect} from 'react'
import {fetchDailyData} from '../../API'
import {Line,Bar} from 'react-chartjs-2'
const Chart=({data:{recovered,deaths,confirmed},country})=>{
  const [dailyData,setDailyData]=useState({});
  useEffect(()=>{
  const fetchData=async()=>{
    const intialDailyData=await fetchDailyData();
    setDailyData(intialDailyData)
    // console.log(dailyData)
    
  }
  fetchData();
  },[]);
  const BarChart=(confirmed?(<Bar data={{
 labels:['Infected','Recovered','Deaths'],
datasets:[{
  label:'People',
  backgroundColor:['blue','green','red'],
  data:[confirmed.value,recovered.value,deaths.value],
},],
  }
  }
  options={{
    legend: { display: false },
    title: { display: true, text: `Current state in ${country}` },
  }}/>):(null))
  const LineChart=dailyData[0]?(
    <Line className="chart-1"
    data={{
    labels:dailyData.map(({date})=>date),
    datasets:[{
      label:'Active',
      fill:true,
      data:dailyData.map((data)=>data.confirmed),
      borderColor:'blue',
    },{
      label:'Deaths',
      fill:true,
      data:dailyData.map((data)=>data.deaths),
      borderColor:'red',
      backgroundColor:'red'
    }]
   } } />
  ):(null)
  return (
    <div className="chart" >
      {country ? BarChart : LineChart}
      
    </div>
  );
};
export default Chart