'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Combustion products data based on the prompt
const combustionProducts = [
  {
    slug: 'direct-fired-gas-heater',
    category: 'combustion',
    name: '직화식 가스히터',
    description: '승온 및 냉각 시간이 짧고, 컴팩트한 구조로 설치 공간이 적게 필요한 고효율 가스히터입니다.',
    image: '/images/products/combustion/direct-heater.jpg', // Placeholder
    achievements: [
      '하이에어공조(주) | 직화식가스히터 400,000Kcal/h 납품 및 설치공사',
      'STX건설(주) | 직화식가스히터 1,000,000Kcal/h 납품 및 설치공사',
    ],
  },
  {
    slug: 'indirect-fired-gas-heater',
    category: 'combustion',
    name: '간접식 가스히터',
    description: '피가열물에 직접적인 열 영향 없이, 깨끗한 열풍을 공급하는 방식의 히터입니다.',
    image: '/images/products/combustion/indirect-heater.jpg', // Placeholder
    achievements: [
      '(주)세플러 | 간접식가스히터 250,000Kcal/h 납품 및 설치공사',
    ],
  },
  {
    slug: 'complex-dehumidifier',
    category: 'combustion',
    name: '복합식 제습기',
    description: '제습과 난방을 동시에 해결하여 에너지 효율을 극대화하는 차세대 제습 시스템입니다.',
    image: '/images/products/combustion/dehumidifier.jpg', // Placeholder
    achievements: [
      '(주)에이알 | 복합식제습기 150,000Kcal/h 납품 및 설치공사',
    ],
  },
  {
    slug: 'car-paint-dryer',
    category: 'combustion',
    name: '차량 도장 건조기',
    description: '최적의 온도와 열풍으로 균일하고 빠른 도장 건조를 실현합니다.',
    image: '/images/products/combustion/car-dryer.jpg', // Placeholder
    achievements: [
        '기아자동차 | 차량도장건조기 납품 및 설치공사',
    ],
  },
  {
    slug: 'various-combustion-equipment',
    category: 'combustion',
    name: '각종 연소설비',
    description: '섬유 텐타 건조기, 로터리 킬른, 벽돌 건조로, 금형 예열기, 소각로 등 다양한 산업 맞춤형 연소설비를 제공합니다.',
    image: '/images/products/combustion/various-equipment.jpg', // Placeholder
    achievements: [
      '섬유 텐타 건조기',
      '로터리 킬른 / 벽돌 건조로',
      '금형 예열기 / 소각로',
    ],
  },
  {
    slug: 'duct-plant',
    category: 'combustion',
    name: '덕트 플랜트',
    description: '효율적인 공기 흐름과 이송을 위한 최적의 덕트 시스템을 설계 및 시공합니다.',
    image: '/images/products/combustion/duct-plant.jpg', // Placeholder
    achievements: [
      '(주)대원쇼트 | 덕트설치공사',
      '현대미포조선(주) | 덕트설치공사',
    ],
  },
];

// Dummy data for other categories for now
const otherProducts = [
    {
    slug: 'product-a',
    category: 'environment',
    name: '대기오염 방지 필터',
    description: '미세먼지와 유해가스를 효과적으로 제거하는 고성능 필터',
    image: '/images/products/environment/filter.jpg',
    achievements: [],
  },
  {
    slug: 'product-e',
    category: 'coffee',
    name: '로스팅 배기 시스템',
    description: '로스팅 시 발생하는 연기와 냄새를 완벽하게 처리합니다.',
    image: '/images/products/coffee/exhaust.jpg',
    achievements: [],
  },
]

const allProducts = [...combustionProducts, ...otherProducts];


interface ProductListProps {
  category: string;
}

const ProductList = ({ category }: ProductListProps) => {
  const products = allProducts.filter((p) => p.category === category);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            placeholder="제품명 검색..."
            className="w-full md:w-1/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="block">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-2 font-poppins">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4 flex-grow">
                  {product.description}
                </p>
                
                {product.achievements && product.achievements.length > 0 && (
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">주요 실적</h4>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {product.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-auto inline-block bg-accent text-white text-center px-6 py-2 rounded-full hover:bg-orange-600 transition-colors text-sm font-semibold cursor-pointer">
                  제품 정보
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 text-lg mt-10">
            검색 결과가 없습니다.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductList;
