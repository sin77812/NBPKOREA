'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const combustionProductsData = {
  metalBurner: [
    {
      model: '고효율 메탈 버너',
      image: '/images/metal burner1.png',
      description: '고효율 금속 섬유 버너로 균등한 연소와 저NOx를 실현합니다.',
      achievements: [
        '균등 연소 구현',
        '저NOx 기술 적용',
        '높은 내구성과 안정성'
      ]
    },
    {
      model: '소형 메탈 버너',
      image: '/images/smallmetalburner.png',
      description: '컴팩트한 설계로 다양한 소형 시설에 최적화된 메탈 버너입니다.',
      achievements: [
        '소형 설계로 설치 공간 절약',
        '높은 연소 효율',
        '간편한 설치 및 유지보수'
      ]
    }
  ],
  directFiredGasHeater: [
    {
      model: 'NKGH-100',
      image: '/images/연소/1p1.png',
      description: '대용량 직화식 가스히터로 효율적인 열교환을 제공합니다.',
      achievements: [
        '하이에어공조(주) | 직화식가스히터 400,000Kcal/h 납품 및 설치공사',
        'STX건설(주) | 직화식가스히터 1,000,000Kcal/h 납품 및 설치공사',
        '(주)세플러 | 직화식가스히터 250,000Kcal/h 납품 및 설치공사',
        '(주)대원쇼트 | 직화식가스히터 150,000Kcal/h 납품 및 설치공사',
        '(주)대원쇼트 | 직화식가스히터 100,000Kcal/h 납품 및 설치공사',
        '(주)대원쇼트 | 직화식가스히터 80,000Kcal/h 납품 및 설치공사',
        '(주)대원쇼트 | 직화식가스히터 60,000Kcal/h 납품 및 설치공사',
        '(주)대원쇼트 | 직화식가스히터 40,000Kcal/h 납품 및 설치공사',
        '(주)대원쇼트 | 직화식가스히터 25,000Kcal/h 납품 및 설치공사',
      ],
    },
    {
      model: 'NKGH-80',
      image: '/images/연소/1-2.png',
      description: '80만 kcal/h 용량의 직화식 가스히터입니다.',
      achievements: [
        '(주)대원쇼트 | 직화식가스히터 80,000Kcal/h 납품 및 설치공사',
      ],
    },
    {
      model: 'NKGH-60',
      image: '/images/연소/1-3.png',
      description: '60만 kcal/h 용량의 직화식 가스히터입니다.',
      achievements: [
        '(주)대원쇼트 | 직화식가스히터 60,000Kcal/h 납품 및 설치공사',
      ],
    },
    {
      model: 'NKGH-40',
      image: '/images/연소/1-4.png',
      description: '40만 kcal/h 용량의 직화식 가스히터입니다.',
      achievements: [
        '(주)대원쇼트 | 직화식가스히터 40,000Kcal/h 납품 및 설치공사',
      ],
    },
    {
      model: 'NKGH-25',
      image: '/images/연소/1-5.png',
      description: '25만 kcal/h 용량의 직화식 가스히터입니다.',
      achievements: [
        '(주)대원쇼트 | 직화식가스히터 25,000Kcal/h 납품 및 설치공사',
      ],
    },
  ],
  indirectFiredGasHeater: [
    {
      model: 'NK-IDGH-100',
      image: '/images/간접식/2-100.png',
      description: '100만 kcal/h 용량의 간접식 가스히터입니다.',
      achievements: [
        '(주)세플러 | 간접식가스히터 250,000Kcal/h 납품 및 설치공사',
      ],
    },
    {
      model: 'NK-IDGH-80',
      image: '/images/간접식/2-80.png',
      description: '80만 kcal/h 용량의 간접식 가스히터입니다.',
      achievements: [
        '(주)세플러 | 간접식가스히터 200,000Kcal/h 납품 및 설치공사',
      ],
    },
    {
      model: 'NK-IDGH-60',
      image: '/images/간접식/2-60.png',
      description: '60만 kcal/h 용량의 간접식 가스히터입니다.',
      achievements: [
        '(주)세플러 | 간접식가스히터 150,000Kcal/h 납품 및 설치공사',
      ],
    },
    {
      model: 'NK-IDGH-40',
      image: '/images/간접식/2-40.png',
      description: '40만 kcal/h 용량의 간접식 가스히터입니다.',
      achievements: [
        '(주)세플러 | 간접식가스히터 100,000Kcal/h 납품 및 설치공사',
      ],
    },
  ],
  complexDehumidifier: [
    {
      model: '복합식 제습기',
      image: '/images/humidremover.jpg',
      description: '고효율 복합식 제습 시스템으로 습도 제어와 난방을 동시에 수행합니다.',
      achievements: [
        '국제금속(주) | 가스히터 복합제습기 250,000Kcal/h 납품 및 설치공사',
      ],
    },
  ],
  carPaintDryer: [
    {
      model: '차량 도장 건조기',
      image: '/images/forcar.png',
      description: '자동차 도장 전용 건조 시스템으로 빠르고 균등한 건조를 제공합니다.',
      achievements: [
        '한일기기(주) | 차량 도장 건조기 250,000Kcal/h 납품 및 설치공사',
      ],
    },
  ],
};

const applicationFields = [
  "Automotive paint booth / 자동차 도장 부스",
  "Paint Drying / 도장건조",
  "Building Materials / 건축 소재",
  "선박 블록 작업장, 도장 작업, 물류 창고, 제철, 저장창고",
  "산업용 보일러", "소각로", "건조로", "열매체 보일러",
  "식품 가공 공장", "화학 공장", "섬유 산업", "제지 산업",
  "금속 열처리", "도금 공정", "발전소", "석유화학 플랜트",
  "농업 시설 (온실 난방, 곡물 건조)", "축산 시설 (돈사, 계사 난방)",
  "상업용 건물 (대형 난방)", "주거용 건물 (개별 난방)"
];

const CombustionSolutionsPage = () => {
  const [activeTab, setActiveTab] = useState('metalBurner');

  const tabs = [
    { id: 'metalBurner', name: '메탈 버너' },
    { id: 'directFiredGasHeater', name: '직화식 가스히터' },
    { id: 'indirectFiredGasHeater', name: '간접식 가스히터' },
    { id: 'complexDehumidifier', name: '복합식 제습기' },
    { id: 'carPaintDryer', name: '차량 도장 건조기' },
  ];

  return (
    <div className="bg-background text-text-primary">
      {/* 2.2.2.1. Page Header */}
      <section 
        className="relative py-24 md:py-36 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/images/thumbnails/burntechero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-6">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          >
            전 세계에서 NBPKOREA에서만, 연소식 고효율 환경설비.
          </motion.h1>
          <motion.p 
            className="text-lg text-white max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
          >
            광범위한 산업 분야에도 컴팩트하게 최적화된 연소 솔루션을 제공합니다.
          </motion.p>
        </div>
      </section>

      {/* 2.2.2.2. Main Combustion Equipment List (Tab-based) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-poppins">NBPKOREA의 첨단 연소 설비 라인업</h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
                  activeTab === tab.id
                    ? 'bg-accent text-white shadow-md'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {combustionProductsData[activeTab as keyof typeof combustionProductsData].map((product, index) => (
              <motion.div
                key={product.model}
                className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="block">
                  {activeTab === 'indirectFiredGasHeater' || activeTab === 'carPaintDryer' || activeTab === 'industrialBurner' ? (
                    <div className="w-full h-48 flex items-center justify-center p-4">
                      <Image
                        src={product.image}
                        alt={product.model}
                        width={500}
                        height={300}
                        className="w-auto h-full object-contain"
                      />
                    </div>
                  ) : (
                    <Image
                      src={product.image}
                      alt={product.model}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">
                    {product.model}
                  </h3>
                  {product.description && (
                    <p className="text-gray-600 text-sm mb-4 flex-grow">
                      {product.description}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 2.2.2.3. Application Fields */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-poppins">연소 기술 주요 적용 분야</h2>
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

export default CombustionSolutionsPage;
