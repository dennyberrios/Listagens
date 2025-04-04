"use client"

import PolarAreaChart from "@/components/polarAreaChart/PolarAreaChart";
import RadarChart from "@/components/radarChart/RadarChart";

const HomeScreen: React.FC = () => {

    const metrics = [50, 60, 70, 80, 90]; // Exemplo de métricas
    const labels = ["HTML", "CSS", "JavaScript", "React", "Node.js"]; // Exemplo de rótulos

    return (
        <section>
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Welcome to Your Dashboard</h1>
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

                <PolarAreaChart
                    metrics={[40, 60, 90, 70, 50]}
                    backgroundCard="bg-white"
                    backgroundGrafic="bg-white"
                    labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple']}
                    title="Distribuição de dados"
                    subtitle="Exemplo de gráfico polar"
                    footer="Dados atualizados recentemente"
                />
            </div>
        </section>
    );
}

export default HomeScreen;