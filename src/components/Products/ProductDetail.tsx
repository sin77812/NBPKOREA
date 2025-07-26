'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Add this line

const allProductsData = [
  {
    slug: 'direct-fired-gas-heater',
    category: 'combustion',
    name: '직화식 가스히터',
    slogan: '컴팩트한 고효율 직화식 가스히터',
    images: [
      '/images/products/combustion/direct-heater.jpg', // Placeholder
      '/images/products/combustion/direct-heater-detail-1.jpg', // Placeholder
    ],
    features: [
      '승온 및 냉각 시간이 단축됨',
      '컴팩트한 구조로 설치 공간이 적게 필요함',
      '높은 효율',
      '메탈 화이버 버너 사용으로 안정적인 화염 형성', // From R&D page
      '배기가스가 적고 완전연소에 가까움', // From R&D page
    ],
    specs: {
      용량: '100,000 ~ 2,000,000 Kcal/h',
      사용연료: 'LNG, LPG',
      전원: 'AC 220V / 380V, 50/60Hz',
      제어방식: '비례제어',
      안전장치: '화염감지기, 과열방지센서, 가스누설경보',
    },
    applications: [
      '도장 건조 라인',
      '식품 건조',
      '농산물 건조',
      '각종 산업용 건조 공정',
    ],
    video: 'https://www.youtube.com/embed/your-video-id', // Placeholder
    achievements: [
      '하이에어공조(주) | 직화식가스히터 400,000Kcal/h 납품 및 설치공사',
      'STX건설(주) | 직화식가스히터 1,000,000Kcal/h 납품 및 설치공사',
      '(주)세플러 | 간접식가스히터 250,000Kcal/h 납품 및 설치공사', // Example, should be filtered
    ],
    documents: [
      { name: '직화식 가스히터 카탈로그', url: '/docs/direct-heater-catalog.pdf' },
    ],
  },
  // ... other existing product data ...
];

interface ProductDetailProps {
  category: string;
  productSlug: string;
}

const ProductDetail = ({ category, productSlug }: ProductDetailProps) => {
  const product = allProductsData.find(
    (p) => p.category === category && p.slug === productSlug
  );

  if (!product) {
    return (
      <div className="pt-20 text-center py-40">
        <h1 className="text-4xl font-bold">제품을 찾을 수 없습니다.</h1>
        <p className="text-lg mt-4">요청하신 제품 정보를 찾을 수 없습니다.</p>
      </div>
    );
  }

  const [mainImage, setMainImage] = useState(product.images[0]);

  return (
    <section className="pt-20 py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
          {product.name}
        </h1>
        <p className="text-xl text-gray-600 mb-12">{product.slogan}</p>

        {/* Product Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="md:col-span-1">
            <Image
              src={mainImage}
              alt={product.name}
              width={800}
              height={600}
              className="w-full h-auto rounded-lg shadow-lg object-cover"
            />
            <div className="flex space-x-4 mt-4 overflow-x-auto">
              {product.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={100}
                  height={75}
                  className={`cursor-pointer rounded-md border-2 ${
                    mainImage === img ? 'border-orange-500' : 'border-transparent'
                  } hover:border-orange-500 transition-all`}
                  onClick={() => setMainImage(img)}
                />
              ))}
            </div>
          </div>

          {/* Product Features */}
          <div className="md:col-span-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">주요 특징</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Product Specifications */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">상세 스펙</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
              <tbody>
                {Object.entries(product.specs).map(([key, value], index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} border-b border-gray-200`}>
                    <td className="py-3 px-6 font-semibold text-gray-700 w-1/3">{key}</td>
                    <td className="py-3 px-6 text-gray-600 w-2/3">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Application Areas */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">적용 분야</h2>
          <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
            {product.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        {product.achievements && product.achievements.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">주요 실적</h2>
            <ul className="list-disc list-inside space-y-3 text-lg text-gray-700">
              {product.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
            {/* Optional: Link to full achievements page */}
            <div className="text-right mt-4">
                <Link href="/performance" className="text-orange-500 hover:underline font-semibold">
                    더 많은 실적 보러가기 →
                </Link>
            </div>
          </div>
        )}

        {/* Video (Placeholder) */}
        {product.video && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">관련 동영상</h2>
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                src={product.video}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        {/* Documents Download */}
        {product.documents && product.documents.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 font-poppins">자료 다운로드</h2>
            <div className="flex flex-wrap gap-4">
              {product.documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors shadow-md"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H5a2 2 0 01-2-2V5a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2z"
                    ></path>
                  </svg>
                  {doc.name}
                </a>
              ))}
            </div>
          </div>
        )}

        {/* CTA Button */}
        <div className="text-center mt-16">
          <Link
            href="/contact"
            className="inline-block bg-orange-500 text-white text-xl font-semibold px-10 py-4 rounded-full hover:bg-orange-600 transition-colors shadow-lg"
          >
            제품 문의하기
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
