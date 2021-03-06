import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import "frappe-charts/dist/frappe-charts.min.css";
export function makeChart(revenue) {
  new Chart("#chart", {
    data: {
      labels: Object.keys(revenue),

      datasets: [
        {
          name: "This hour".toUpperCase(),
          chartType: "line",
          values: Object.values(revenue),
        },
      ],
    },

    title: "",
    // animate: false,
    type: "line", // or 'bar', 'line', 'pie', 'percentage'
    height: 230,
    colors: ["#3ccb75"],

    axisOptions: {
      xAxisMode: "tick",
      xIsSeries: true,
    },
    tooltipOptions: {
      formatTooltipX: (d) => d + ":00",
      formatTooltipY: (d) => d + " kr",
    },
    lineOptions: {
      dotSize: 8, // default: 4
      heatline: 1,
      regionFill: 1,
    },
  });
}
