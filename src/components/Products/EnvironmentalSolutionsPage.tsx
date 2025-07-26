'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const environmentalEquipments = [
  {
    name: "NK-CTO (촉매연소산화설비)",
    image: "/images/환경사업부/Environment Business Division/홈페이지용 CTO 렌더링-nowatermark.jpg",
    diagram: "/images/환경사업부/Business Area/홈페이지용 DTO 렌더링-nowatermark.jpg",
    description: "CTO는 촉매를 이용하여 배기가스 내에 함유되어 있는 악취물질을 연소(접촉산화반응)하고, 무해화시키는 방법으로 촉매 연소에 참여하여 반응을 촉진시켜 저농도의 연소로부터 질소산화물(NOx) 생성을 크게 줄이고 에너지 절감 효과를 크게 제고할 수 있는 신소재 기술입니다.",
    slug: "nk-cto"
  },
  {
    name: "NK-RTO (축열연소산화설비)",
    image: "/images/환경사업부/Business Area/NBP_RTO_400CMM_RENDERING_REV230724.47.jpg",
    diagram: "/images/환경사업부/Business Area/RTO 케스케이드 배치 렌더링 작업용214 RV3.248.jpg",
    description: "RTO는 축열재를 열매체로 사용하는 직접연소식 에너지 절감형 소각로 시스템입니다. 이 기술은 유기용제나 유기성 악취를 제거함과 동시에 연소열을 축열재로 회수하여 대기오염을 방지하고 폐열을 생산 공정의 열원으로 사용할 수 있는 시스템입니다.",
    slug: "nk-rto"
  },
  {
    name: "NK-RCO (축열촉매연소산화설비)",
    image: "/images/환경사업부/Business Area/홈페이지용 RCO 렌더링-nowatermark.jpg",
    description: "RCO는 축열재를 열매체로 사용하는 직접연소식 소각로에 촉매를 추가로 적용한 신연소 기술입니다. 이 기술은 버너를 이용해 초기 승온한 후, 저온에서 산화 가능한 촉매층을 통과시켜 저온에서 처리하여 질소산화물(Nox) 생성을 크게 줄이고 연소열을 축열재로 회수하여 에너지 절감 효과를 크게 제고할 수 있는 시스템입니다.",
    slug: "nk-rco"
  },
  {
    name: "NK-TO (직접연소산화설비)",
    image: "/images/환경사업부/Environment Business Division/홈페이지용 CTO 렌더링-nowatermark.jpg",
    diagram: "/images/환경사업부/Business Area/홈페이지용 DTO 렌더링-nowatermark.jpg",
    description: "TO는 복합악취가스 및 유기용제가스(VOCs), 배연, 악취, 미세먼지 등을 연소실로 투입하여 악취물질을 고온의 화염과 직접 접촉시켜 산화 분해하여 제거시키는 방법으로 고온 산화 시스템입니다.",
    slug: "nk-to"
  }
];

const applicationFields = [
  "반도체, 디스플레이, LCD", "도장 공정, 도료 제조", "플라스틱, 합성 고무 수지 제조",
  "식품가공, 바이오산업", "신소재 제조, 가공", "필름코팅, 테이프 제조",
  "펄프, 제지 제조", "금속, 금형, 주물, 전선 제조", "석유, 화학 제품 제조",
  "인쇄, 잉크 제조", "음식물, 동물성 폐기물 슬러지", "섬유, 피혁, 목재 제조",
  "아스콘 제조, 건설폐기물 처리", "기타 VOCs, 악취 발생 사업장"
];

const EnvironmentalSolutionsPage = () => {
  return (
    <div className="bg-background text-text-primary">
      {/* 2.2.1.1. Page Header */}
      <section 
        className="relative py-28 md:py-36 text-center text-white flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/환경사업부/Business Area/신우(1).jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 container mx-auto px-6">
            <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-6 font-poppins"
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            >
                깨끗한 대기, 지속 가능한 미래를 위한 NBPKOREA 환경 솔루션
            </motion.h1>
        </div>
      </section>

      {/* 2.2.1.2. Equipment List */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-poppins">NBPKOREA의 혁신적인 대기 환경 설비</h2>
          <div className="space-y-20">
            {environmentalEquipments.map((item, index) => (
              <motion.div 
                key={item.name} 
                className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
              >
                <div className={`md:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <h3 className="text-2xl font-bold text-accent mb-4 font-poppins">{item.name}</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{item.description}</p>
                  <div className="inline-block bg-accent text-white px-6 py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold cursor-pointer">
                      제품 정보
                  </div>
                </div>
                <div className={`space-y-4 md:order-${index % 2 === 0 ? '2' : '1'}`}>
                    <Image src={item.image} alt={item.name} width={600} height={400} className="rounded-lg shadow-xl" />
                    {item.diagram && <Image src={item.diagram} alt={`${item.name} 플로우 차트`} width={600} height={400} className="rounded-lg shadow-xl" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.2.1.3. Application Fields */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-poppins">환경 솔루션 주요 적용 분야</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-center">
            {applicationFields.map((field, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center h-full"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <p className="font-semibold text-gray-700">{field}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnvironmentalSolutionsPage;
