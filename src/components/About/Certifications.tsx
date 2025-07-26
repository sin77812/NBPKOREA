'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Dummy data - replace with your actual data
const certifications = [
  { name: 'ISO 9001', year: 2020, logo: '/images/certs/iso9001.png', details: 'Quality Management System' },
  { name: 'ISO 14001', year: 2021, logo: '/images/certs/iso14001.png', details: 'Environmental Management System' },
  { name: 'CE Mark', year: 2022, logo: '/images/certs/ce.png', details: 'Conformité Européenne' },
  { name: 'KS Mark', year: 2023, logo: '/images/certs/ks.png', details: 'Korean Industrial Standards' },
];

const patents = [
  { name: '고효율 저녹스 버너 기술', number: '특허 제10-2021-0012345호', date: '2021.01.28', summary: '연소 효율을 극대화하고 질소산화물 배출을 최소화하는 혁신 기술입니다.' },
  { name: '스마트 연소 제어 시스템', number: '특허 제10-2022-0054321호', date: '2022.05.10', summary: 'IoT 기술을 접목하여 실시간으로 최적의 연소 상태를 유지합니다.' },
];

const Certifications = () => {
  const [modalContent, setModalContent] = useState<typeof certifications[0] | null>(null);

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Certifications Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">
            획득 인증 현황
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                className="p-6 border border-gray-200 rounded-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => setModalContent(cert)}
                whileHover={{ scale: 1.05 }}
              >
                <Image src={cert.logo} alt={`${cert.name} logo`} width={100} height={100} className="mx-auto mb-4" />
                <h3 className="font-semibold text-lg">{cert.name}</h3>
                <p className="text-gray-500">{cert.year}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Patents Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">
            주요 기술 특허
          </h2>
          <div className="space-y-8">
            {patents.map((patent, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-md">
                <h3 className="font-bold text-xl text-orange-600">{patent.name}</h3>
                <p className="text-gray-700 font-semibold my-1">{patent.number}</p>
                <p className="text-sm text-gray-500 mb-3">등록일: {patent.date}</p>
                <p className="text-gray-600">{patent.summary}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for details */}
      {modalContent && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setModalContent(null)}
        >
          <div className="bg-white p-8 rounded-lg max-w-lg w-full text-center">
            <Image src={modalContent.logo} alt={`${modalContent.name} logo`} width={150} height={150} className="mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">{modalContent.name}</h2>
            <p className="text-lg text-gray-600">{modalContent.details}</p>
            <p className="text-sm text-gray-500 mt-1">취득 연도: {modalContent.year}</p>
            <button 
              className="mt-6 bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition-colors"
              onClick={() => setModalContent(null)}
            >
              닫기
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
