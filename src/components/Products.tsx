"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Products = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const productCategories = [
    {
      title: '환경 솔루션',
      description: '대기 오염 방지 및 수처리 등 지속 가능한 환경을 위한 통합 솔루션을 제공합니다.',
      image: '/images/환경사업부/Business Area/홈페이지용 RTO 렌더링-nowatermark.jpg', // Placeholder image
      link: '/products/environment',
    },
    {
      title: '버너 솔루션',
      description: '고효율, 저공해 연소 시스템으로 산업 현장의 에너지 효율을 극대화합니다.',
      image: '/images/연소사업부/Business Area/burn-1.jpg', // Placeholder image
      link: '/products/combustion',
    },
    {
      title: '커피 솔루션',
      description: '최고의 로스팅 기술과 품질 관리로 프리미엄 커피 경험을 선사합니다.',
      image: '/images/커피사업부/Business Area/커피플랜트.jpg',
      link: '/products/coffee',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <div className="inline-block bg-accent/10 px-6 py-2 rounded-full mb-4">
            <span className="text-accent font-semibold text-sm uppercase tracking-wide">Solutions</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            주요 <span className="text-accent">제품 및 솔루션</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            NBPKOREA의 혁신적인 기술력으로 만들어진 최고 품질의 솔루션을 만나보세요
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {productCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={variants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
              onClick={() => window.location.href = category.link}
            >
              {/* 이미지 */}
              <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  width={500}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => console.error('Image loading error:', e.currentTarget.src)}
                />
                {/* 그라데이션 오버레이 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
                
                {/* 상단 라벨 */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                  <span className="bg-white/20 backdrop-blur-sm text-white px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-medium border border-white/30">
                    SOLUTION
                  </span>
                </div>
              </div>

              {/* 컨텐츠 */}
              <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 lg:p-6 text-white">
                <h3 className="text-sm sm:text-lg lg:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-accent transition-colors duration-300">
                  {category.title}
                </h3>
                <p className="text-white/90 mb-2 sm:mb-4 leading-relaxed text-xs sm:text-sm hidden sm:block">
                  {category.description}
                </p>
                
                {/* CTA 버튼 */}
                <div className="transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <Link href={category.link} className="inline-flex items-center bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white font-semibold py-2 px-3 sm:py-3 sm:px-6 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl text-xs sm:text-sm">
                    <span className="hidden sm:inline">자세히 보기</span>
                    <span className="sm:hidden">보기</span>
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* 호버 효과 - 테두리 */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
