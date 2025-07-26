'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

// Dummy data for related articles
const articles = [
  {
    title: 'RTO, 과연 모든 유해가스에 효과적일까?',
    summary: 'RTO(축열식 소각로)의 원리와 적용 한계에 대해 심층 분석합니다.',
    link: '/blog/rto-effectiveness',
  },
  {
    title: '산업용 버너 선택 시 고려해야 할 5가지',
    summary: '최적의 산업용 버너를 선택하기 위한 핵심 가이드를 제공합니다.',
    link: '/blog/burner-selection-guide',
  },
  {
    title: '커피 로스팅 시 발생하는 연기와 냄새, 이렇게 잡는다!',
    summary: '로스팅 배기 시스템의 중요성과 NBPKOREA의 솔루션을 소개합니다.',
    link: '/blog/coffee-roasting-exhaust',
  },
];

const RelatedArticles = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">
          관련 기술 자료
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={article.link}>
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-orange-500 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {article.summary}
                </p>
                <span className="text-orange-500 font-semibold hover:underline">
                  더 알아보기 &rarr;
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
