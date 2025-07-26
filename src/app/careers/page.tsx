'use client';

import React from 'react';
import Image from 'next/image';

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* 5.1. 채용 개요 및 환영 메시지 (Careers Overview & Welcome Message) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/building.jpg"
            alt="NBPKOREA Building"
            fill
            sizes="100vw"
            style={{ objectFit: 'cover' }}
            quality={100}
            priority
          />
          {/* 다크 오버레이로 글씨 가독성 향상 */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading animate-fade-in-up px-2">
            NBPKOREA와 함께 성장할 당신을 기다립니다
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-5xl mx-auto mb-8 font-body animate-fade-in-up animation-delay-200 px-4">
            NBPKOREA는 혁신적인 기술과 지속 가능한 미래를 함께 만들어갈 열정적인 인재를 찾습니다.
            도전적인 기회, 무한한 성장 가능성, 그리고 긍정적인 기업 문화 속에서 당신의 잠재력을 마음껏 펼쳐보세요.
          </p>
        </div>
      </section>

      {/* 5.2. 인재상 (Our Talent Profile) */}
      <section className="py-20 bg-white text-text-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-text-primary">
            NBPKOREA가 추구하는 인재상
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 인재상 1: 도전과 혁신 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-border-shadow transition-all duration-300 hover:shadow-lg">
              <div className="text-accent text-5xl mb-4">🚀</div> {/* Icon Placeholder */}
              <h3 className="text-xl font-semibold mb-2 font-heading text-text-primary">도전과 혁신</h3>
              <p className="text-text-primary font-body">
                새로운 아이디어와 끊임없는 도전으로 변화를 주도하고 혁신적인 가치를 창출합니다.
              </p>
            </div>
            {/* 인재상 2: 전문성과 성장 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-border-shadow transition-all duration-300 hover:shadow-lg">
              <div className="text-accent text-5xl mb-4">📈</div> {/* Icon Placeholder */}
              <h3 className="text-xl font-semibold mb-2 font-heading text-text-primary">전문성과 성장</h3>
              <p className="text-text-primary font-body">
                자신의 분야에서 최고를 지향하며, 끊임없는 학습과 자기 계발을 통해 함께 성장합니다.
              </p>
            </div>
            {/* 인재상 3: 협업과 소통 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-border-shadow transition-all duration-300 hover:shadow-lg">
              <div className="text-accent text-5xl mb-4">🤝</div> {/* Icon Placeholder */}
              <h3 className="text-xl font-semibold mb-2 font-heading text-text-primary">협업과 소통</h3>
              <p className="text-text-primary font-body">
                열린 마음으로 소통하고 협력하여 시너지를 창출하며, 공동의 목표를 달성합니다.
              </p>
            </div>
            {/* 인재상 4: 책임감과 신뢰 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-border-shadow transition-all duration-300 hover:shadow-lg">
              <div className="text-accent text-5xl mb-4">✅</div> {/* Icon Placeholder */}
              <h3 className="text-xl font-semibold mb-2 font-heading text-text-primary">책임감과 신뢰</h3>
              <p className="text-text-primary font-body">
                주어진 역할에 책임감을 가지고 임하며, 투명하고 정직한 업무 처리로 신뢰를 쌓아갑니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5.3. 인사제도 및 복리후생 (HR System & Benefits) */}
      <section id="info" className="py-20 bg-background text-text-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-text-primary">
            NBPKOREA의 인재를 위한 특별한 지원
          </h2>

          {/* 인사 제도 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-center mb-8 font-heading text-text-primary">
              체계적인 인사 제도로 당신의 성장을 지원합니다
            </h3>
            <p className="text-lg text-center max-w-3xl mx-auto font-body text-text-primary">
              NBPKOREA는 직무 능력 개발, 공정한 성과 평가 및 보상 시스템, 그리고 명확한 경력 개발 프로그램을 통해
              모든 직원이 자신의 잠재력을 최대한 발휘하고 전문가로 성장할 수 있도록 체계적으로 지원합니다.
            </p>
          </div>

          {/* 복리후생 */}
          <div>
            <h3 className="text-3xl font-semibold text-center mb-8 font-heading text-text-primary">
              당신의 삶을 풍요롭게 하는 NBPKOREA의 복지
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* 복지 항목 1 */}
              <div className="flex items-center bg-white p-6 rounded-lg shadow-border-shadow">
                <div className="text-secondary text-4xl mr-4">🏥</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-text-primary">건강 관리 지원</h4>
                  <p className="text-text-primary font-body">정기 건강검진, 단체 상해보험 등</p>
                </div>
              </div>
              {/* 복지 항목 2 */}
              <div className="flex items-center bg-white p-6 rounded-lg shadow-border-shadow">
                <div className="text-secondary text-4xl mr-4">📚</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-text-primary">교육 및 자기계발 지원</h4>
                  <p className="text-text-primary font-body">직무 교육비, 외국어 학습 지원 등</p>
                </div>
              </div>
              {/* 복지 항목 3 */}
              <div className="flex items-center bg-white p-6 rounded-lg shadow-border-shadow">
                <div className="text-secondary text-4xl mr-4">👨‍👩‍👧‍👦</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-text-primary">가족 친화 복지</h4>
                  <p className="text-text-primary font-body">자녀 학자금, 경조사 지원 등</p>
                </div>
              </div>
              {/* 복지 항목 4 */}
              <div className="flex items-center bg-white p-6 rounded-lg shadow-border-shadow">
                <div className="text-secondary text-4xl mr-4">🎉</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-text-primary">여가 및 문화 생활 지원</h4>
                  <p className="text-text-primary font-body">동호회 활동, 문화비 지원 등</p>
                </div>
              </div>
              {/* 복지 항목 5 */}
              <div className="flex items-center bg-white p-6 rounded-lg shadow-border-shadow">
                <div className="text-secondary text-4xl mr-4">⏰</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-text-primary">유연한 근무 환경</h4>
                  <p className="text-text-primary font-body">유연근무제, 시차출퇴근제 등</p>
                </div>
              </div>
              {/* 복지 항목 6 */}
              <div className="flex items-center bg-white p-6 rounded-lg shadow-border-shadow">
                <div className="text-secondary text-4xl mr-4">🎁</div>
                <div>
                  <h4 className="text-xl font-bold font-heading text-text-primary">생활 안정 지원</h4>
                  <p className="text-text-primary font-body">명절 상여금, 주택자금 대출 지원 등</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5.4. 채용 공고 (Job Openings) */}
      <section id="apply" className="py-20 bg-white text-text-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-text-primary">
            현재 채용 공고
          </h2>

          <div className="grid grid-cols-1 gap-6 mb-12">
            {/* Job Opening 1 */}
            <div className="bg-background p-6 rounded-lg shadow-border-shadow flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold mb-1 font-heading text-text-primary">환경설비 연구개발</h3>
                <p className="text-sm md:text-base text-text-primary font-body">모집 부문: 경력 | 마감일: 상시 채용 | 상태: 채용 중</p>
              </div>
              <button className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 font-body">
                자세히 보기
              </button>
            </div>

            {/* Job Opening 2 */}
            <div className="bg-background p-6 rounded-lg shadow-border-shadow flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold mb-1 font-heading text-text-primary">산업용 버너 설계 엔지니어</h3>
                <p className="text-sm md:text-base text-text-primary font-body">모집 부문: 신입/경력 | 마감일: 2024.12.31 | 상태: 채용 중</p>
              </div>
              <button className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 font-body">
                자세히 보기
              </button>
            </div>

            {/* Job Opening 3 */}
            <div className="bg-background p-6 rounded-lg shadow-border-shadow flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <h3 className="text-xl md:text-2xl font-bold mb-1 font-heading text-text-primary">해외영업</h3>
                <p className="text-sm md:text-base text-text-primary font-body">모집 부문: 경력 | 마감일: 마감 임박 | 상태: 채용 중</p>
              </div>
              <button className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 font-body">
                자세히 보기
              </button>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-secondary hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 font-body">
              온라인 지원하기
            </button>
          </div>
        </div>
      </section>

      {/* 5.5. 채용 FAQ (Recruitment FAQ) */}
      <section className="py-20 bg-background text-text-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-text-primary">
            채용 관련 자주 묻는 질문
          </h2>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <details className="mb-4 rounded-lg shadow-border-shadow bg-white">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg font-heading text-text-primary">
                모집 기간 외에도 지원 가능한가요?
                <span className="ml-2">▼</span>
              </summary>
              <p className="p-4 pt-0 text-text-primary font-body">
                네, NBPKOREA는 상시 채용을 진행하고 있습니다. 현재 공고가 없더라도 인재풀에 등록해 주시면 적합한 포지션 발생 시 연락드립니다.
              </p>
            </details>

            {/* FAQ Item 2 */}
            <details className="mb-4 rounded-lg shadow-border-shadow bg-white">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg font-heading text-text-primary">
                경력 산정 기준은 어떻게 되나요?
                <span className="ml-2">▼</span>
              </summary>
              <p className="p-4 pt-0 text-text-primary font-body">
                경력은 지원 직무와 관련된 경력을 기준으로 산정됩니다. 상세한 내용은 각 채용 공고에서 확인하시거나 문의해 주시기 바랍니다.
              </p>
            </details>

            {/* FAQ Item 3 */}
            <details className="mb-4 rounded-lg shadow-border-shadow bg-white">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg font-heading text-text-primary">
                면접 절차는 어떻게 되나요?
                <span className="ml-2">▼</span>
              </summary>
              <p className="p-4 pt-0 text-text-primary font-body">
                일반적으로 서류 전형 합격 후 1차 실무 면접, 2차 임원 면접 순으로 진행됩니다. 직무에 따라 추가 전형이 있을 수 있습니다.
              </p>
            </details>

            {/* FAQ Item 4 */}
            <details className="mb-4 rounded-lg shadow-border-shadow bg-white">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg font-heading text-text-primary">
                제출 서류 양식이 있나요?
                <span className="ml-2">▼</span>
              </summary>
              <p className="p-4 pt-0 text-text-primary font-body">
                별도의 지정된 양식은 없으며, 자유 양식으로 제출해 주시면 됩니다. 다만, 직무 관련 경험과 역량을 상세히 기술해 주시기 바랍니다.
              </p>
            </details>
          </div>
        </div>
      </section>

    </div>
  );
};

export default CareersPage;
