'use client';

import React from 'react';
import Image from 'next/image';

const SupportPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-text-primary">
      {/* 4.1. 고객 지원 개요 및 환영 메시지 (Support Overview & Welcome) */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Placeholder for high-quality background image/video */}
          <Image
            src="/images/surport11.jpg" // NBPKOREA 건물 사진
            alt="NBPKOREA Building"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="filter brightness-30" // Darken background for text readability
          />
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-sm rounded-2xl p-6 sm:p-8 md:p-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-heading animate-fade-in-up text-white drop-shadow-lg leading-tight">
              언제든, 무엇이든<br className="sm:hidden" /> NBPKOREA가 함께합니다
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-body animate-fade-in-up animation-delay-200 text-white drop-shadow-md leading-relaxed">
              NBPKOREA는 제품 공급을 넘어, 고객의 성공적인 비즈니스를 위한 지속적인 파트너십을 약속드립니다.<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>궁금한 점이 있으시거나 도움이 필요하시면 언제든지 문의해 주세요.
            </p>
          </div>
        </div>
      </section>

      {/* 나머지 섹션들은 여기에 추가될 예정입니다. */}

      {/* 4.2. 통합 문의 채널 (Integrated Contact Channels) */}
      <section id="contact" className="py-20 bg-white text-text-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">
            무엇을 도와드릴까요? 편하게 문의하세요
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 온라인 문의 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-border-shadow transition-all duration-300 hover:shadow-lg">
              <div className="text-accent text-5xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold mb-2 font-heading">온라인 문의</h3>
              <p className="text-text-primary mb-4 font-body">
                언제든 편리하게 문의를 남겨주세요. 24시간 이내 회신 드립니다.
              </p>
              <button className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 font-body">
                문의하기
              </button>
            </div>

            {/* 전화 문의 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-border-shadow transition-all duration-300 hover:shadow-lg">
              <div className="text-accent text-5xl mb-4">📞</div>
              <h3 className="text-2xl font-bold mb-2 font-heading">전화 문의</h3>
              <p className="text-text-primary mb-4 font-body">
                긴급한 문의는 전화로 직접 상담하세요.
              </p>
              <a href="tel:031.434.6566~7" className="text-lg font-semibold text-accent hover:underline font-body">
                031.434.6566~7
              </a>
              <p className="text-sm text-gray-600 mt-1 font-body">(운영 시간: 평일 09:00~18:00)</p>
            </div>

            {/* 이메일 문의 */}
            <div className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow-border-shadow transition-all duration-300 hover:shadow-lg">
              <div className="text-accent text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold mb-2 font-heading">이메일 문의</h3>
              <p className="text-text-primary mb-4 font-body">
                상세한 내용 전달이 필요하시면 이메일을 이용해 주세요.
              </p>
              <a href="mailto:nbpkorea@nbpkorea.co.kr" className="text-lg font-semibold text-accent hover:underline font-body">
                nbpkorea@nbpkorea.co.kr
              </a>
            </div>
          </div>

          {/* FAQ 링크 */}
          <div className="text-center mt-12">
            <p className="text-lg font-body">
              <a href="#faq" className="text-accent hover:underline font-semibold">
                자주 묻는 질문
              </a>을 먼저 확인해 보세요!
            </p>
          </div>
        </div>
      </section>

      {/* 4.3. 자주 묻는 질문 (FAQ - Frequently Asked Questions) */}
      <section id="faq" className="py-20 bg-background text-text-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading">
            궁금한 점이 있으신가요? 자주 묻는 질문을 확인하세요!
          </h2>

          <div className="max-w-3xl mx-auto">
            {/* FAQ Item 1 */}
            <details className="mb-4 rounded-lg shadow-border-shadow bg-white">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg font-heading">
                제품 구매는 어떻게 하나요?
                <span className="ml-2">▼</span>
              </summary>
              <p className="p-4 pt-0 text-text-primary font-body">
                NBPKOREA의 제품은 B2B 형태로 공급됩니다. 구매 및 견적 문의는 온라인 문의 또는 전화 문의를 이용해 주시면 담당자가 친절하게 상담해 드립니다.
              </p>
            </details>

            {/* FAQ Item 2 */}
            <details className="mb-4 rounded-lg shadow-border-shadow bg-white">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg font-heading">
                A/S는 어떻게 신청하나요?
                <span className="ml-2">▼</span>
              </summary>
              <p className="p-4 pt-0 text-text-primary font-body">
                A/S 신청은 고객 지원 페이지의 A/S 안내 섹션을 참고하시거나, 전화 또는 이메일로 문의해 주시면 됩니다.
              </p>
            </details>

            {/* FAQ Item 3 */}
            <details className="mb-4 rounded-lg shadow-border-shadow bg-white">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg font-heading">
                기술 자료를 받을 수 있나요?
                <span className="ml-2">▼</span>
              </summary>
              <p className="p-4 pt-0 text-text-primary font-body">
                네, 기술 자료 요청은 온라인 문의를 통해 가능합니다. 필요한 자료의 종류와 용도를 함께 알려주시면 신속하게 처리해 드립니다.
              </p>
            </details>

            {/* FAQ Item 4 */}
            <details className="mb-4 rounded-lg shadow-border-shadow bg-white">
              <summary className="flex justify-between items-center p-4 cursor-pointer font-semibold text-lg font-heading">
                회사 방문 상담이 가능한가요?
                <span className="ml-2">▼</span>
              </summary>
              <p className="p-4 pt-0 text-text-primary font-body">
                네, 사전 예약 후 방문 상담이 가능합니다. 온라인 문의 또는 전화로 방문 일정을 조율해 주시기 바랍니다.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* 4.4. 공지사항 및 최신 소식 (Notices & Latest News) */}
      <section className="py-20 bg-white text-text-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-text-primary">
            NBPKOREA의 새로운 소식을 확인하세요
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Notice Item 1 */}
            <div className="bg-background p-6 rounded-lg shadow-border-shadow flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <span className="inline-block bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full mb-2 font-body">공지</span>
                <h3 className="text-xl font-bold mb-1 font-heading text-text-primary">NBPKOREA, 2024년 하반기 신기술 발표회 개최</h3>
                <p className="text-text-primary text-sm font-body">2024.07.01</p>
              </div>
              <button className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 font-body">
                자세히 보기
              </button>
            </div>

            {/* Notice Item 2 */}
            <div className="bg-background p-6 rounded-lg shadow-border-shadow flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <span className="inline-block bg-accent text-white text-xs font-bold px-2 py-1 rounded-full mb-2 font-body">뉴스</span>
                <h3 className="text-xl font-bold mb-1 font-heading text-text-primary">환경부 장관상 수상: 친환경 기술 혁신 인정</h3>
                <p className="text-text-primary text-sm font-body">2024.06.20</p>
              </div>
              <button className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 font-body">
                자세히 보기
              </button>
            </div>

            {/* Notice Item 3 */}
            <div className="bg-background p-6 rounded-lg shadow-border-shadow flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <span className="inline-block bg-secondary text-white text-xs font-bold px-2 py-1 rounded-full mb-2 font-body">이벤트</span>
                <h3 className="text-xl font-bold mb-1 font-heading text-text-primary">산업 폐열 회수 시스템 도입 기업 대상 특별 프로모션</h3>
                <p className="text-text-primary text-sm font-body">2024.06.01</p>
              </div>
              <button className="bg-accent hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 font-body">
                자세히 보기
              </button>
            </div>
          </div>

          {/* 페이지네이션 Placeholder */}
          <div className="flex justify-center mt-8">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l-lg font-body">이전</button>
            <button className="bg-accent text-white font-bold py-2 px-4 font-body">1</button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r-lg font-body">다음</button>
          </div>
        </div>
      </section>

      {/* 4.5. A/S 안내 및 기술 지원 (After-Sales Service & Technical Support) */}
      <section className="py-20 bg-background text-text-primary">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 font-heading text-text-primary">
            NBPKOREA의 빈틈없는 A/S 및 기술 지원
          </h2>

          {/* A/S 절차 안내 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-center mb-8 font-heading text-text-primary">
              A/S 절차 안내
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="text-accent text-2xl sm:text-3xl lg:text-4xl mb-3">1️⃣</div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 font-heading text-text-primary">문의 접수</h4>
                <p className="text-sm lg:text-base text-text-primary font-body">전화, 이메일, 온라인 문의 등 편리한 채널로 접수</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-accent text-2xl sm:text-3xl lg:text-4xl mb-3">2️⃣</div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 font-heading text-text-primary">상담 및 진단</h4>
                <p className="text-sm lg:text-base text-text-primary font-body">전문 상담원이 문제 진단 및 해결 방안 안내</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-accent text-2xl sm:text-3xl lg:text-4xl mb-3">3️⃣</div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 font-heading text-text-primary">현장 방문/수리</h4>
                <p className="text-sm lg:text-base text-text-primary font-body">필요시 전문 엔지니어의 현장 방문 및 수리 진행</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-accent text-2xl sm:text-3xl lg:text-4xl mb-3">4️⃣</div>
                <h4 className="text-lg lg:text-xl font-bold mb-2 font-heading text-text-primary">사후 관리</h4>
                <p className="text-sm lg:text-base text-text-primary font-body">수리 완료 후에도 지속적인 관리 및 지원</p>
              </div>
            </div>
          </div>

          {/* 기술 지원 범위 및 보증 정책 */}
          <div className="mb-16">
            <h3 className="text-3xl font-semibold text-center mb-8 font-heading text-text-primary">
              기술 지원 범위 및 보증 정책
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-border-shadow">
                <h4 className="text-xl font-bold mb-2 font-heading text-text-primary">기술 지원 범위</h4>
                <ul className="list-disc list-inside text-text-primary space-y-2 font-body">
                  <li>원격 기술 지원</li>
                  <li>현장 방문 기술 지원</li>
                  <li>정기 점검 및 유지보수</li>
                  <li>제품 사용 교육 및 컨설팅</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-border-shadow">
                <h4 className="text-xl font-bold mb-2 font-heading text-text-primary">보증 기간 및 정책</h4>
                <ul className="list-disc list-inside text-text-primary space-y-2 font-body">
                  <li>제품별 기본 보증 기간 1년 (상세 내용은 제품별 상이)</li>
                  <li>소모품 및 고객 과실로 인한 손상은 유상 수리</li>
                  <li>정품 부품 사용 원칙</li>
                </ul>
              </div>
            </div>
          </div>

          {/* A/S 및 기술 지원 전용 연락처 */}
          <div className="bg-[#2C3E50] text-white py-8 sm:py-12 px-6 sm:px-8 rounded-lg">
            <div className="text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6 font-heading">
                A/S 및 기술 지원 전용 연락처
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">A/S 센터</h4>
                  <p className="text-sm sm:text-base mb-1">전화: 02-1234-5678</p>
                  <p className="text-sm sm:text-base mb-1">이메일: nbpkorea@nbpkorea.com</p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">
                    운영 시간: 평일 09:00~18:00
                  </p>
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">기술 지원팀</h4>
                  <p className="text-sm sm:text-base mb-1">전화: 031.434.6566~7</p>
                  <p className="text-sm sm:text-base mb-1">이메일: nbpkorea@nbpkorea.co.kr</p>
                  <p className="text-xs sm:text-sm text-gray-300 mt-2">
                    24시간 긴급 지원 가능
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

    </div>
  );
};

export default SupportPage;
