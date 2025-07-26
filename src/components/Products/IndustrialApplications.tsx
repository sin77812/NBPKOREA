'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaIndustry, FaMicrochip, FaFlask, FaCar, FaPowerOff } from 'react-icons/fa'; // Example icons

// Dummy data for industrial applications
const industries = [
  {
    name: '반도체/디스플레이',
    icon: FaMicrochip,
    description: '초정밀 공정 환경을 위한 맞춤형 솔루션 제공',
    link: '/products/industry/semiconductor',
  },
  {
    name: '철강/금속',
    icon: FaIndustry,
    description: '고온 환경 및 대기오염 물질 처리 기술',
    link: '/products/industry/steel',
  },
  {
    name: '식품/의약품',
    icon: FaFlask,
    description: '위생적이고 안전한 생산 환경 구축',
    link: '/products/industry/food-pharma',
  },
  {
    name: '자동차',
    icon: FaCar,
    description: '도장 및 건조 공정의 효율성 증대',
    link: '/products/industry/automotive',
  },
  {
    name: '발전소',
    icon: FaPowerOff,
    description: '친환경 에너지 생산 및 효율 관리 시스템',
    link: '/products/industry/power-plant',
  },
];

const IndustrialApplications = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">
          산업별 적용 사례
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={industry.link}>
                <div className="text-center">
                  <industry.icon className="text-orange-500 text-5xl mb-4 mx-auto" />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {industry.name}
                  </h3>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrialApplications;
