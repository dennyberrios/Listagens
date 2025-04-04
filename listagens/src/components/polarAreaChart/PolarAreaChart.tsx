"use client";

import { FC, useRef, useEffect } from "react";
import Chart, { TooltipItem } from "chart.js/auto";

interface PolarAreaChartProps {
  metrics: number[];
  backgroundCard: string;
  backgroundGrafic: string;
  labels: string[];
  title: string;
  subtitle: string;
  footer: string;
}

const PolarAreaChart: FC<PolarAreaChartProps> = ({
  metrics,
  backgroundCard,
  backgroundGrafic,
  labels,
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
        type: "polarArea",
        data: {
          labels,
          datasets: [
            {
              label: title,
              data: metrics,
              backgroundColor: [
                "rgba(255, 99, 132, 0.4)",
                "rgba(54, 162, 235, 0.4)",
                "rgba(255, 206, 86, 0.4)",
                "rgba(75, 192, 192, 0.4)",
                "rgba(153, 102, 255, 0.4)",
                "rgba(255, 159, 64, 0.4)"
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)"
              ],
              borderWidth: 2,
              hoverBackgroundColor: [
                "rgba(255, 99, 132, 0.8)",
                "rgba(54, 162, 235, 0.8)",
                "rgba(255, 206, 86, 0.8)",
                "rgba(75, 192, 192, 0.8)",
                "rgba(153, 102, 255, 0.8)",
                "rgba(255, 159, 64, 0.8)"
              ],
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            tooltip: {
              callbacks: {
                label: (tooltipItem: TooltipItem<"polarArea">) => {
                  return `${tooltipItem.label}: ${tooltipItem.raw as number}`;
                },
              },
            },
          },
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: {
                color: "rgba(0, 0, 0, 0.7)", // Números pretos com opacidade reduzida
                stepSize: 20,
                backdropColor: "transparent", // Remove fundo branco dos números
              },
              grid: {
                color: "rgba(0, 0, 0, 0.2)", // Linhas da grade mais suaves
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
  }, [metrics, labels, title]);

  return (
    <div
      className={`w-full sm:w-[380px] lg:w-[480px] p-4 rounded-lg relative shadow-lg ${backgroundCard}`}
    >
      {/* Card content */}
      <div className="text-center mb-4">
        <h1 className="text-xl font-bold text-gray-600">{title}</h1>
        <h2 className="text-gray-500 text-sm mt-1 font-normal">{subtitle}</h2>
      </div>

      {/* Card background and chart container */}
      <div
        className={`w-full h-[200px] sm:h-[250px] lg:h-[300px] relative mt-4 rounded-lg overflow-hidden transition-transform duration-300 ${backgroundGrafic}`}
      >
        <canvas ref={chartContainer} className="w-full h-full mx-auto"></canvas>
      </div>

      {/* Footer */}
      <div className="text-center mt-4">
        <hr className="mt-4 mb-2 bg-gray-200" />
        <p className="text-gray-500 text-[0.85rem]">{footer}</p>
      </div>
    </div>
  );
};

export default PolarAreaChart;
