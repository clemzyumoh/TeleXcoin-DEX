import React from "react";
import { useState } from "react";
import Chart from "react-apexcharts";

const TradingCharts = () => {
  const [displayedValue, setDisplayedValue] = useState("$100B"); // Default value

  // Area Chart Configuration
  const areaChartOptions = {
    chart: { type: "area", height: 400, toolbar: { show: false } },
    xaxis: {
      categories: ["2025", "2026", "2027", "2028", "2029", "2030"],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#fff" } },
    },
    yaxis: { show: false },
    grid: { show: false },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value, { seriesIndex, dataPointIndex, w }) => {
          // Get values of both layers
          const layer1 = w.config.series[0].data[dataPointIndex]; // First color
          const layer2 = w.config.series[1].data[dataPointIndex]; // Second color
          const year = w.config.xaxis.categories[dataPointIndex]; // Year

          const total = layer1 + layer2;
          setDisplayedValue(` $${total}B `);

          return `$${value}B`; // Show normal value on the tooltip
        },
      },
    },

    colors: ["#54FFFB", "#FF05DF"],
    fill: {
      type: "gradient",
      gradient: { shadeIntensity: 1, opacityFrom: 0.6, opacityTo: 0.1 },
    },
    stroke: { curve: "smooth", width: 2 },
    markers: { size: 0 },
    dataLabels: { enabled: false },
  };

  const areaChartSeries = [
    { name: "V1", data: [50, 80, 60, 100, 90, 120] },
    { name: "V2", data: [30, 60, 50, 90, 80, 110] },
  ];

  // Column Chart Configuration (Stacked)
  const columnChartOptions = {
    chart: {
      type: "bar",
      stacked: true,
      height: 400,
      toolbar: { show: false },
    },

    xaxis: {
      categories: [
        "Feb 1",
        "Feb 4",
        "Feb 7",
        "Feb 10",
        "Feb 15",
        "Feb 20",
        "Feb 22",
        "Feb 25",
        "Feb 27",
        "Feb 30",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: "#fff" }, enabled: false },
    },
    yaxis: { show: false },
    grid: { show: false },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "25%",
        borderRadiusApplication: "end",
        borderRadius: 4,
      },
    },
    tooltip: {
      shared: true, // Ensures both colors appear in the hover card
      intersect: false, // Makes the tooltip appear when hovering anywhere on the column
      y: {
        formatter: (value) => `$${value}B`, // Format the value
      },
    },

    colors: ["#8206d4", "#80ffcc"], // Bottom color first, then top color
    dataLabels: { enabled: false },
  };

  const columnChartSeries = [
    { name: "V1", data: [30, 40, 35, 50, 50, 36, 60, 15, 25, 85] },
    { name: "V2", data: [20, 30, 25, 40, 20, 56, 32, 80, 75, 20] },
  ];

  return (
    <div className="w-full p-4 mx-2 bg-gray-900 text-black">
      <h2 className="text-lg font-bold mb-4 text-white">DRC</h2>

      {/* Area Chart */}
      <div className="mb-8 w-full">
        <h3 className="text-xl font-bold text-white">{displayedValue}</h3>

        <Chart
          options={areaChartOptions}
          series={areaChartSeries}
          type="area"
          height={400}
          
        />
      </div>

      {/* Stacked Column Chart */}
      <div className="hidden">
        <Chart
          options={columnChartOptions}
          series={columnChartSeries}
          type="bar"
          height={400}
        />
      </div>
    </div>
  );
};

export default TradingCharts;
