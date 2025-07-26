
import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const ResearchAchievements: React.FC = () => {
  // Placeholder data for charts
  const energyEfficiencyData = {
    labels: ['2022', '2023', '2024'],
    datasets: [
      {
        label: '에너지 효율 개선율 (%)',
        data: [15, 20, 25],
        backgroundColor: '#F97316',
      },
    ],
  };

  const pollutionReductionData = {
    labels: ['VOCs', 'NOx', '악취'],
    datasets: [
      {
        label: '오염 물질 저감율 (%)',
        data: [95, 80, 90],
        backgroundColor: '#10B981',
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '데이터 기반 성과 시각화',
        color: '#1F2937', // 텍스트 색상 적용
      },
    },
    scales: {
      x: {
        ticks: { color: '#1F2937' }, // x축 라벨 색상
      },
      y: {
        ticks: { color: '#1F2937' }, // y축 라벨 색상
      },
    },
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-text-primary mb-12 font-heading">
          연구 성과
        </h2>

        {/* 성과 개요 문구 */}
        <p className="text-lg text-text-primary text-center mb-16 max-w-3xl mx-auto font-body">
          NBPKOREA 기술 연구소의 끊임없는 노력으로 달성한 주요 성과는
          산업 전반에 긍정적인 영향을 미치며 지속 가능한 미래를 위한
          기술적 경쟁력과 사회적 가치를 창출하고 있습니다.
        </p>

        {/* 주요 연구 프로젝트/기술 개발 하이라이트 */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-semibold text-text-primary mb-8 font-heading">
            주요 연구 프로젝트 및 기술 개발 하이라이트
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            {/* Project 1 */}
            <div className="bg-white p-6 rounded-lg shadow-border-shadow mx-auto">
              <h4 className="text-xl font-bold text-text-primary mb-2 font-heading">고효율 에너지 회수 시스템 개발</h4>
              <p className="text-text-primary mb-2 font-body">연구 기간: 2022.03 - 2023.09</p>
              <p className="text-text-primary mb-4 font-body">주요 목표: 산업 폐열을 활용한 에너지 재활용 극대화</p>
              <p className="text-text-primary font-body">달성된 성과: 에너지 회수율 25% 증대, 연간 100톤 CO2 감축 효과</p>
              {/* <img src="/images/project1.jpg" alt="Project 1" className="mt-4 rounded-md" /> */}
            </div>
            {/* Project 2 */}
            <div className="bg-white p-6 rounded-lg shadow-border-shadow mx-auto">
              <h4 className="text-xl font-bold text-text-primary mb-2 font-heading">지능형 대기 오염 물질 제어 기술</h4>
              <p className="text-text-primary mb-2 font-body">연구 기간: 2023.01 - 현재</p>
              <p className="text-text-primary mb-4 font-body">주요 목표: 실시간 모니터링 기반의 VOCs 및 NOx 저감</p>
              <p className="text-text-primary font-body">달성된 성과: VOCs 98% 이상 제거, 시스템 운영 비용 15% 절감</p>
              {/* <img src="/images/project2.jpg" alt="Project 2" className="mt-4 rounded-md" /> */}
            </div>
          </div>
        </div>

        {/* 데이터 기반 성과 시각화 */}
        <div className="mb-16 text-center">
          <h3 className="text-3xl font-semibold text-text-primary mb-8 font-heading">
            데이터 기반 성과 시각화
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-lg shadow-border-shadow mx-auto">
              <h4 className="text-xl font-bold text-text-primary mb-4 font-heading">에너지 효율 개선율</h4>
              <Bar options={chartOptions} data={energyEfficiencyData} />
              <p className="text-center text-text-primary mt-4 font-body">특정 기술 적용 후 에너지 절감 효과</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-border-shadow mx-auto">
              <h4 className="text-xl font-bold text-text-primary mb-4 font-heading">환경 오염 물질 저감량</h4>
              <Bar options={chartOptions} data={pollutionReductionData} />
              <p className="text-center text-text-primary mt-4 font-body">대기오염 물질 또는 악취 물질의 실제 저감량</p>
            </div>
          </div>
          {/* 수치 강조 */}
          <div className="flex justify-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-5xl font-bold text-accent">95%</p>
              <p className="text-lg text-text-primary font-body">VOCs 제거율</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold text-secondary">30%</p>
              <p className="text-lg text-text-primary font-body">에너지 비용 절감</p>
            </div>
          </div>
        </div>

        {/* 학술 발표 및 수상 내역 (선택 사항) */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-text-primary mb-8 font-heading">
            학술 발표 및 수상 내역
          </h3>
          <ul className="list-disc list-inside text-text-primary space-y-2 font-body mx-auto w-fit">
            <li>
              <span className="font-semibold">"고효율 폐열 회수 기술의 산업 적용 사례 연구"</span> -
              한국환경공학회 추계 학술대회 발표 (2023)
            </li>
            <li>
              <span className="font-semibold">환경부 장관상</span> - 친환경 기술 혁신 부문 (2024)
            </li>
          </ul>
        </div>

        {/* 성과 보고서 다운로드 (선택 사항) */}
        <div className="text-center mt-16">
          <button className="bg-accent hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 font-body">
            성과 보고서 다운로드
          </button>
          <p className="text-sm text-text-primary mt-2 font-body">(* Python 백엔드에서 파일 관리)</p>
        </div>
      </div>
    </section>
  );
};

export default ResearchAchievements;
