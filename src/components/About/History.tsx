'use client';

import React from 'react';
import { motion } from 'framer-motion';

const historyData = [
  {
    year: '2006',
    title: '엔비피코리아(NBP KOREA) 설립',
    description: '05월 엔비피(NBP ITALY) 한국 대리점 협약',
  },
  {
    year: '2007',
    title: 'MIDCO INTERNATIONAL U.S.A 한국 독점 AGENCY 협약',
    description: '08월',
  },
  {
    year: '2008',
    title: 'ISO 9001, ISO 14001 인증',
    description: '08월',
  },
  {
    year: '2009',
    title: '산학협력 기술대전 기술표준원장상 수상',
    description: '09월',
  },
  {
    year: '2010',
    title: '기술혁신형 중소기업(INNO-BIZ) 인증',
    description: '06월',
  },
  {
    year: '2013',
    title: 'ECOSTAR Turkey 한국 독점 AGENCY 협약',
    description: '03월',
  },
  {
    year: '2014',
    title: '대한민국 신지식경영 대상, 산업통산부장관상 수상',
    description: '10월 경영인 부문 대상, 11월 환경에너지 대상 기술부문',
  },
  {
    year: '2016',
    title: '대한민국 기업대상 기술혁신부문 대상 수상',
    description: '12월',
  },
  {
    year: '2018',
    title: '신사옥 이전',
    description: '11월 경기도 안산시 단원구 엠티브이8로 22',
  },
  {
    year: '2019',
    title: '가스용품제조사업 허가 및 중국 상하이 전시회 참가',
    description: '08월 안산시 허가, 10월 Shanghai Hotelex 참가',
  },
  {
    year: '2020',
    title: '부총리겸 교육부장관 표창장 수상 및 뿌리기술 전문기업 지정',
    description: '12월',
  },
  {
    year: '2021',
    title: '제20회 서울카페쇼 참가',
    description: '11월 코엑스',
  },
  {
    year: '2022',
    title: 'KOITA 기업부설연구소 설립 인증',
    description: '01월 한국산업기술진흥협회',
  },
];

const History = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="history" className="bg-gray-50 py-10 md:py-12"> {/* 40% 크기 축소 */}
      <div className="container mx-auto px-6 max-w-4xl"> {/* 최대 너비 제한 */}
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 font-poppins"> {/* 글자 크기와 마진 축소 */}
          걸어온 길
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 h-full w-0.5 bg-gray-300 transform -translate-x-1/2"></div>
          <motion.div
            className="space-y-8" /* 간격 더 축소 */
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {historyData.map((item, index) => (
              <motion.div
                key={index}
                className={`flex items-center w-full ${
                  index % 2 === 0 ? 'flex-row-reverse' : ''
                }`}
                variants={itemVariants}
              >
                <div className="w-5/12"></div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-3 h-3 bg-accent rounded-full z-10"></div> {/* 원 크기 더 축소 */}
                </div>
                <div className="w-5/12">
                  <div
                    className={`p-3 rounded-lg shadow-md bg-white ${
                      index % 2 === 0 ? 'text-left' : 'text-right'
                    }`}
                  >
                    <p className="text-lg font-bold text-accent mb-1"> {/* 글자 크기 축소 */}
                      {item.year}
                    </p>
                    <h3 className="text-base font-semibold text-gray-800 mb-1"> {/* 글자 크기 축소 */}
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600">{item.description}</p> {/* 글자 크기 축소 */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default History;
