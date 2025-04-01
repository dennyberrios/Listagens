// PieChart.tsx
"use client";

import { FC, useRef, useEffect } from "react";
import Chart from "chart.js/auto";

interface PieChartProps {
  metrics: number[];
  backgroundCard: string;
  backgroundGrafic: string;
  labels: string[];
  title: string;
  subtitle: string;
  footer: string;
}

const PieChart: FC<PieChartProps> = ({
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

  const generateRandomColors = (count: number) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
      colors.push(randomColor);
    }
    return colors;
  };

  useEffect(() => {
    if (chartContainer.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      chartInstance.current = new Chart(chartContainer.current, {
        type: "pie",
        data: {
          labels,
          datasets: [
            {
              label: title,
              data: metrics,
              backgroundColor: generateRandomColors(metrics.length),
              borderColor: "rgba(0, 0, 0, 0.2)",
              borderWidth: 1,
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
                  return `${context.label}: ${context.raw}%`;
                },
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

export default PieChart;
