import React, { useState } from "react";
import '../App.scss'
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
  "Empathy": "#139647",
  "Communication": "#db3c26",
  "Shared-Decisions": "#4267b1"
};

function ChartPracticeApp(props) {

    let dataArray = []
    props.userInfo.results.map( result => {
      let object = {}
      object["year"] = 1920 + (props.userInfo.results.indexOf(result) * 7)
      object["Empathy"] = result["empathy"] * 25
      object["Communication"] = result["communication"] * 25
      object["Shared-Decisions"] = result["sharedecision"] * 25
      dataArray.push(object)
    })

    let dataB = dataArray

  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <p>- Each bar represents an assessment you have taken.</p>
      <p>- Your goal is to have 50 total points in each domain (color) in an assessment</p>
      <h4>My progress</h4>
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