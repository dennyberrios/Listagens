// RadarChart.tsx
"use client";

import { FC, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface RadarChartProps {
  metrics: number[];
  backgroundCard: string;
  backgroundGrafic: string;
  labels: string[];
  title: string;
  subtitle: string;
  footer: string;
}

const RadarChart: FC<RadarChartProps> = ({
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
        type: "radar",
        data: {
          labels,
          datasets: [
            {
              label: title,
              data: metrics,
              backgroundColor: "rgba(75, 192, 192, 0.2)", // cor de fundo da área do gráfico
              borderColor: "rgba(75, 192, 192, 1)", // cor da borda da área do gráfico
              borderWidth: 1,
              pointBackgroundColor: "rgba(75, 192, 192, 1)", // cor dos pontos
              pointBorderColor: "#fff", // cor da borda dos pontos
              pointBorderWidth: 2,
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
                label: (context: any) => {
                  return `${context.label}: ${context.raw}`;
                },
              },
            },
          },
          scales: {
            r: {
              min: 0,
              max: 100,
              ticks: {
                color: "rgba(255, 255, 255, 1)", // cor dos rótulos dos ticks
                stepSize: 20,
              },
              grid: {
                color: "rgba(255, 255, 255, 0.3)", // cor da grade
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
        className={`w-full h-[200px] sm:h-[250px] lg:h-[300px] relative mt-4 rounded-lg overflow-hidden ${backgroundGrafic}`}
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

export default RadarChart;
