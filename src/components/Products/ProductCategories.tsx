'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const categories = [
  {
    id: 'environment',
    name: '환경 제품',
    description: '대기오염 방지 및 악취 제거를 위한 최적의 친환경 솔루션',
    details: [
      '산업용 탈연·탈취설비 / 대기오염 방지시설',
      'VOCs 및 복합악취 처리 / 에너지절감형 설비',
      'RTO / CTO / RCO / DTO 직접연소식 저감설비',
    ],
    image: '/images/thumbnails/2thumb.png',
    link: '/products/environment',
  },
  {
    id: 'combustion',
    name: '버너 제품',
    description: '산업 현장의 효율성과 안전을 극대화하는 첨단 연소 기술',
    details: [
      '산업용 가스히터 / 산업용 연소설비 / 특수 열처리 설비',
      '도장 건조설비 / 산업용 버너 / 덕트 플랜트',
    ],
    image: '/images/thumbnails/1thumb.png',
    link: '/products/combustion',
  },
  {
    id: 'coffee',
    name: '커피 제품',
    description: '최고의 커피 맛을 위한 독창적인 로스팅 및 배기 솔루션',
    details: ['커피 애프터버너', '음식점용 제연기', '미니 멀티 화덕'],
    image: '/images/thumbnails/3thumb.jpg',
    link: '/products/coffee',
  },
];

const ProductCategories = () => {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {categories.map((category, index) => (
            <motion.div
              id={category.id}
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={category.image}
                alt={category.name}
                width={600}
                height={400}
                className="w-full h-24 sm:h-32 lg:h-40 object-cover"
              />
              <div className="p-3 sm:p-4 lg:p-6 flex flex-col flex-grow">
                <h3 className="text-sm sm:text-lg lg:text-2xl font-bold text-gray-800 mb-1 sm:mb-2 font-poppins">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-2 sm:mb-4 font-inter flex-grow text-xs sm:text-sm hidden sm:block">
                  {category.description}
                </p>
                <div className="mb-2 sm:mb-4 hidden lg:block">
                  <ul className="list-disc list-inside text-gray-600 space-y-1 text-xs">
                    {category.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={category.link}
                  className="mt-auto inline-block bg-accent text-white text-center px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 rounded-full hover:bg-orange-600 transition-colors font-semibold text-xs sm:text-sm"
                >
                  <span className="hidden sm:inline">자세히 보기</span>
                  <span className="sm:hidden">보기</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
