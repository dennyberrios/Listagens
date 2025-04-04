'use client';
import BarChart from '@/components/barChart/BarChart';
import LineChart from '@/components/lineChart/LineChart';
import PieChart from '@/components/pieChart/PieChart';
import PolarAreaChart from '@/components/polarAreaChart/PolarAreaChart';
import RadarChart from '@/components/radarChart/RadarChart';
import React from 'react';

const AnalyticsScreen: React.FC = () => {

  const metrics = [50, 60, 70, 80, 90]; // Exemplo de métricas
  const labels = ["HTML", "CSS", "JavaScript", "React", "Node.js"]; // Exemplo de rótulos

  return (
    <div>
      <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to Your Analytics</h1>
            <div className="container mx-auto gap-5 flex flex-wrap">
                <RadarChart
                    metrics={metrics}
                    backgroundCard="bg-white"
                    backgroundGrafic="bg-transparent"
                    labels={labels}
                    title="Skills Radar"
                    subtitle="Avaliação das minhas habilidades"
                    footer="Última atualização: Março 2025"
                />

                <PieChart
                    metrics={metrics}
                    backgroundCard="bg-white"
                    backgroundGrafic="bg-transparent"
                    labels={labels}
                    title="Skills Pie Chart"
                    subtitle="Distribuição das minhas habilidades"
                    footer="Última atualização: Março 2025"
                />

                <PolarAreaChart
                    metrics={[40, 60, 90, 70, 50]}
                    backgroundCard="bg-white"
                    backgroundGrafic="bg-white"
                    labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple']}
                    title="Distribuição de dados"
                    subtitle="Exemplo de gráfico polar"
                    footer="Dados atualizados recentemente"
                />

                <LineChart
                    metrics={[10, 25, 40, 30, 50, 65, 80]} // Valores do gráfico
                    backgroundCard="bg-white" // Cor do card
                    backgroundGrafic="bg-white" // Cor do fundo do gráfico
                    labels={["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul"]} // Labels do eixo X
                    title="Crescimento Mensal"
                    subtitle="Evolução dos acessos ao sistema"
                    footer="Última atualização: 30 minutos atrás"
                />

                <BarChart
                    metrics={[35, 50, 75, 90, 65, 80]}
                    backgroundCard="bg-white" // Cor do card
                    backgroundGrafic="bg-white" // Cor do fundo do gráfico
                    labels={["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho"]}
                    title="Vendas Mensais"
                    subtitle="Comparação das vendas nos últimos meses"
                    footer="Dados atualizados mensalmente"
                />
            </div>
    </div>
  );
}
export default AnalyticsScreen;