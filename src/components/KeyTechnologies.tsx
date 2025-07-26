'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const ResearchAchievements = dynamic(() => import('@/components/ResearchAchievements'), { ssr: false });

const KeyTechnologies: React.FC = () => {
  return (
    <section className="py-16 bg-background text-text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-heading text-text-primary">
          NBPKOREA의 핵심 기술
        </h2>

        {/* 메탈 버너 기술 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 font-heading text-text-primary">메탈 버너 기술</h3>
          <p className="text-lg mb-4 font-body text-text-primary">
            고효율 연소를 위한 NBPKOREA의 독자적인 메탈 버너 기술은 에너지 손실을 최소화하고 유해 물질 배출을 저감합니다.
          </p>
          {/* [메탈 버너 기술 인포그래픽] */}
          <p className="text-md text-text-secondary font-body">적용 사례: 산업용 보일러, 소각로 등</p>
        </div>

        {/* 고효율 연소 시스템 */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-4 font-heading text-text-primary">고효율 연소 시스템</h3>
          <p className="text-lg mb-4 font-body text-text-primary">
            최적화된 연소 시스템 설계로 연료 효율을 극대화하고 운영 비용을 절감합니다.
          </p>
          {/* [연소 시스템 다이어그램] */}
          <p className="text-md text-text-secondary font-body">적용 사례: 발전소, 열병합 발전 시스템 등</p>
        </div>

        {/* 첨단 대기 정화 공정 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 font-heading text-text-primary">첨단 대기 정화 공정</h3>
          <p className="text-lg mb-4 font-body text-text-primary">
            혁신적인 필터링 및 촉매 기술을 통해 대기 오염 물질을 효과적으로 제거합니다.
          </p>
          {/* [대기 정화 공정 플로우차트] */}
          <p className="text-md text-text-secondary font-body">적용 사례: 산업 배출가스 처리, 공기 청정 시스템 등</p>
        </div>

        {/* 연구 성과 섹션 (핵심 기술 하단) */}
        <ResearchAchievements />
      </div>
    </section>
  );
};

export default KeyTechnologies;
