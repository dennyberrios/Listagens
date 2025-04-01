"use client";

import { FC, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface BarChartProps {
  metrics: number[];
  labels: string[];
  backgroundCard: string;
  backgroundGrafic: string;
  title: string;
  subtitle: string;
  footer: string;
}

const BarChart: FC<BarChartProps> = ({
  metrics,
  labels,
  backgroundCard,
  backgroundGrafic,
  title,
  subtitle,
  footer,
}) => {
  const chartContainer = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartContainer.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartContainer.current, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: title,
              data: metrics,
              backgroundColor: [
                "rgba(255, 99, 132, 0.6)",
                "rgba(54, 162, 235, 0.6)",
                "rgba(255, 206, 86, 0.6)",
                "rgba(75, 192, 192, 0.6)",
                "rgba(153, 102, 255, 0.6)",
                "rgba(255, 159, 64, 0.6)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
              ],
              borderWidth: 1,
              hoverBackgroundColor: "rgba(255, 255, 255, 0.8)",
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: (context: any) => {
                  return `${context.label}: ${context.raw}`;
                },
              },
            },
          },
          scales: {
            x: {
              ticks: {
                color: "rgba(0, 0, 0, 0.7)",
              },
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
            y: {
              ticks: {
                color: "rgba(0, 0, 0, 0.7)",
              },
              grid: {
                color: "rgba(0, 0, 0, 0.1)",
              },
            },
          },
        },
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [metrics]);

  return (
    <div className={`w-full sm:w-[380px] lg:w-[480px] p-4 rounded-lg relative shadow-lg ${backgroundCard}`}>
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold text-gray-600">{title}</h1>
        <h2 className="text-gray-500 text-sm mt-1 font-normal">{subtitle}</h2>
      </div>
      <div className={`w-full h-[200px] sm:h-[250px] lg:h-[300px] relative mt-4 rounded-lg overflow-hidden ${backgroundGrafic}`}>
        <canvas ref={chartContainer} className="w-full h-full mx-auto"></canvas>
      </div>
      <div className="text-center mt-4">
        <hr className="mt-4 mb-2 bg-gray-200" />
        <p className="text-gray-500 text-[0.85rem]">{footer}</p>
      </div>
    </div>
  );
};

export default BarChart;
