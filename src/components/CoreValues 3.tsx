"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BeakerIcon, LightBulbIcon, GlobeAltIcon, LifebuoyIcon } from '@heroicons/react/24/solid'; // Changed LeafIcon to GlobeAltIcon

const CoreValues = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const coreStrengths = [
    {
      icon: <BeakerIcon className="h-8 w-8 text-gray-700" />,
      title: '독보적인 기술력',
      description: '지속적인 연구 개발을 통해 산업 환경에 최적화된 혁신적인 기술을 제공합니다.',
    },
    {
      icon: <LightBulbIcon className="h-8 w-8 text-gray-700" />,
      title: '에너지 절감 솔루션',
      description: '고효율 연소 기술과 최적화된 시스템으로 에너지 비용 절감에 기여합니다.',
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-gray-700" />,
      title: '환경 보호 기여',
      description: '대기 오염 물질 저감 및 자원 재활용을 통해 깨끗한 환경을 만들어갑니다.',
    },
    {
      icon: <LifebuoyIcon className="h-8 w-8 text-gray-700" />,
      title: '고객 맞춤형 지원',
      description: '고객의 니즈를 정확히 파악하고, 최적의 솔루션과 신속한 사후 관리를 제공합니다.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm uppercase tracking-wide">Core Values</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            NBPKOREA의 <span className="text-primary">핵심 가치</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreStrengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/20 transform hover:-translate-y-2">
                {/* 상단 아이콘 영역 */}
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mx-auto transition-all duration-300">
                    <div className="text-white text-2xl">
                      {strength.icon}
                    </div>
                  </div>
                </div>
                
                {/* 컨텐츠 */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
                    {strength.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {strength.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;