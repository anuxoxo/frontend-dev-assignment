import React, { useRef, useEffect } from 'react'
import * as d3 from 'd3'

export default function BarChart() {
    const chartRef = useRef(null);
    let currentRef;

    let data = [12, 36, 55, 25, 35, 10, 40];
    const w = 500;
    const h = 500;

    const changeChart = () => {
        for (let i = 0; i < data.length; i++) {
            data[i] = Math.floor(Math.random() * 60) + 10;
        }

        let randomColor = Math.floor(Math.random() * 16777215).toString(16);
        let randomColor1 = Math.floor(Math.random() * 16777215).toString(16);

        var u = currentRef.selectAll("rect")
            .data(data)

        u
            .enter()
            .append("rect")
            .merge(u)
            .transition()
            .duration(1000)
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", (d) => d > 35 ? `#${randomColor}` : `#${randomColor1}`)
    }


    const createChart = () => {
        currentRef = d3.select(chartRef.current)
            .append('svg')
            .attr('width', w)
            .attr('height', h)
            .style('padding', 10)
            .style("margin-left", 50);

        currentRef.selectAll('rect')
            .data(data)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i * 70)
            .attr("y", (d, i) => h - 10 * d)
            .attr("width", 65)
            .attr("height", (d, i) => d * 10)
            .attr("fill", (d, i) => d > 35 ? "tomato" : "yellow");
    }

    useEffect(() => {
        createChart();
        // eslint-disable-next-line
    }, [data])


    return (
        <div
            ref={chartRef}
            onClick={changeChart}
            style={{ cursor: "pointer" }}
        ></div>
    )
}
