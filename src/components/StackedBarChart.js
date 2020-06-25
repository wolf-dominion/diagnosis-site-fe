import React, { useEffect, useRef } from "react";
import {
  select,
  scaleBand,
  axisBottom,
  stack,
  max,
  scaleLinear,
  axisLeft,
  stackOrderAscending
} from "d3";
import useResizeObserver from "./UseResizeObserver";

/**
 * Component that renders a StackedBarChart
 */

function StackedBarChart({ dataA, dataB, keys, colors }) {

  //console.log('dataA', data)
  //console.log('dataB', dataB)

  let data = dataA

  const svgRef = useRef();
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);
  //const dimensions = {x: 0, y: 0, width: 1000, height: 300, top: 0, bottom: 300, left: 0, right: 1500}  

  // will be called initially and on every data change
  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    // stacks / layers
    const stackGenerator = stack()
      .keys(keys)
      .order(stackOrderAscending);
    const layers = stackGenerator(data);
    const extent = [
      0,
      max(layers, layer => max(layer, sequence => sequence[1]))
    ];

    console.log('data', data)
    console.log('stackGen for data: ',stackGenerator(data))
    console.log('extent', extent)

    // scales
    const xScale = scaleBand()
      .domain(data.map(d => d.year))
      .range([0, width])
      .padding(0.25);

    const yScale = scaleLinear()
      .domain(extent)
      .range([height, 0]);

    // rendering
    svg
      .selectAll(".layer")
      .data(layers)
      .join("g")
      .attr("class", "layer")
      .attr("fill", layer => colors[layer.key])
      .selectAll("rect")
      .data(layer => layer)
      .join("rect")
      .attr("x", sequence => xScale(sequence.data.year))
      .attr("width", xScale.bandwidth())
      .attr("y", sequence => yScale(sequence[1]))
      .attr("height", sequence => {
          console.log('sequence', sequence)
          console.log('a: ',yScale(sequence[0]) )
          console.log('b: ', yScale(sequence[1]))
          let thing = yScale(sequence[0]) - yScale(sequence[1])
          return thing ? thing : 10
      })
        
      // .attr("height", 50);

      console.log('svg: ', svg)

    // axes
    const xAxis = axisBottom(xScale);
    svg
      .select(".x-axis")
      .attr("transform", `translate(0, ${height + 302})`)
      .call(xAxis);

    const yAxis = axisLeft(yScale);
    svg
      .select(".y-axis")
      .attr("transform", `translate(30, -6)`)
      .call(yAxis)
  }, [colors, data, dimensions, keys]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
        <svg ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </React.Fragment>
  );
}

export default StackedBarChart;