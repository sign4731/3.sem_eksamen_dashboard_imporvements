import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import "frappe-charts/dist/frappe-charts.min.css";
export function makeChart(revenue) {
  new Chart("#chart", {
    // or DOM element
    data: {
      //   labels: ["8", "8", "10", "9am-12pm", "12pm-3pm", "3pm-6pm", "6pm-9pm", "9pm-12am"],
      labels: Object.keys(revenue),

      datasets: [
        {
          name: "Hourly Revenue",
          chartType: "line",
          //   values: [15, 20, 3, 15, 58, 12, 17, 37],
          values: Object.values(revenue),
        },
      ],
    },

    title: "",
    type: "line", // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ["#3ccb75"],
    aniamte: false,
    axisOptions: {
      xAxisMode: "tick",
      xIsSeries: true,
    },
    tooltipOptions: {
      formatTooltipX: (d) => (d + "").toUpperCase(),
      formatTooltipY: (d) => d + " kr",
    },
    lineOptions: {
      dotSize: 8, // default: 4
      heatline: 1,
      hideDots: 1,
      regionFill: 1,
    },
  });
}
