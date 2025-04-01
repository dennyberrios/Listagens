"use client";

import { FC, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface LineChartProps {
  metrics: number[];
  backgroundCard: string;
  backgroundGrafic: string;
  labels: string[];
  title: string;
  subtitle: string;
  footer: string;
}

const LineChart: FC<LineChartProps> = ({
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
        type: "line",
        data: {
          labels,
          datasets: [
            {
              label: title,
              data: metrics,
              fill: true,
              backgroundColor: "rgba(75, 192, 192, 0.2)", // Cor de fundo do gráfico
              borderColor: "rgba(75, 192, 192, 1)", // Cor da borda da linha
              borderWidth: 2,
              tension: 0.4,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
              labels: {
                color: "#333", // Cor da legenda
              },
            },
            tooltip: {
              backgroundColor: "#fff", // Cor de fundo da tooltip
              titleColor: "#333", // Cor do título da tooltip
              bodyColor: "#333", // Cor do corpo da tooltip
              borderColor: "#ddd", // Cor da borda da tooltip
              borderWidth: 1, // Largura da borda da tooltip
            },
          },
          scales: {
            x: {
              ticks: {
                color: "#333", // Cor dos rótulos do eixo X
              },
              grid: {
                color: "#ddd", // Cor das linhas do grid do eixo X
              },
            },
            y: {
              ticks: {
                color: "#333", // Cor dos rótulos do eixo Y
              },
              grid: {
                color: "#ddd", // Cor das linhas do grid do eixo Y
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

export default LineChart;
