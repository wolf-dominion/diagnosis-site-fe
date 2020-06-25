import React, { useState } from "react";
import '../App.css'
import StackedBarChart from "./StackedBarChart";


const dataA = [
  {
    year: 1980,
    "Empathy": 10,
    "Communication": 20,
    "Shared-Decisions": 30
  },
  {
    year: 1990,
    "Empathy": 20,
    "Communication": 40,
    "Shared-Decisions": 60
  },
  {
    year: 2000,
    "Empathy": 30,
    "Communication": 45,
    "Shared-Decisions": 80
  },
  {
    year: 2010,
    "Empathy": 40,
    "Communication": 60,
    "Shared-Decisions": 100
  },
  {
    year: 2020,
    "Empathy": 50,
    "Communication": 80,
    "Shared-Decisions": 120
  }
];

const allKeys = ["Empathy", "Communication", "Shared-Decisions"];

const colors = {
  "Empathy": "green",
  "Communication": "orange",
  "Shared-Decisions": "purple"
};

function ChartPracticeApp(props) {

  //console.log('props: ', props.userInfo.results)

    let dataArray = []
    //console.log("props:", props.userInfo.results)
    props.userInfo.results.map( result => {
      let object = {}
      object["year"] = 1920 + (props.userInfo.results.indexOf(result) * 7)
      object["empathy"] = result["empathy"] * 25
      object["communication"] = result["communication"] * 25
      object["sharedecision"] = result["sharedecision"] * 25
      dataArray.push(object)
    })
    //console.log('dataArray', dataArray)

    let dataB = dataArray

  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <h2>Bar chart</h2>
      <StackedBarChart dataA={dataA} dataB={dataB} keys={keys} colors={colors} />

      <div className="fields">
        {allKeys.map(key => (
          <div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={e => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter(_key => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default ChartPracticeApp;