'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const CeoMessage = () => {
  return (
    <motion.section
      id="ceo"
      className="bg-white py-20 md:py-28"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="container mx-auto px-6">
        <div className="md:flex md:items-center md:space-x-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/images/CEO.jpeg"
              alt="NBPKOREA CEO 최혁순"
              width={400}
              height={500}
              className="rounded-lg shadow-2xl object-cover"
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 font-poppins">
              고객여러분 안녕하십니까?<br/>
              엔비피코리아(NBPKOREA) 홈페이지를 찾아주신 고객 여러분께 감사드립니다.
            </h2>
            <div className="text-base text-gray-600 space-y-4 leading-relaxed font-inter">
                <p>
                    NBP KOREA는 신뢰, 도전, 열정을 사훈으로, 고효율 버너, 연소장치, 선박과 자동차 등 산업용 직화식 가스 히터를 전문으로 공급하는 업체로 귀사의 에너지 절감 및 생산성 향상에 도움을 드리고 있습니다.
                </p>
                <p>
                    NBP KOREA는 에너지 절감 연소 설비업체의 선두주자로서 에너지 다변화에 따라 고효율 버너 개발을 위한 적극적인 투자와 활발한 연구를 진행하고 있으며, 미래 연소설비산업의 발전을 위하여 힘차게 매진하고 있습니다.
                </p>
                <p>
                    앞으로도 최고의 품질과 서비스 제공을 위해 노력할 것을 저를 비롯한 모든 임직원이 한마음으로 약속드립니다.
                </p>
                <p>
                    고객여러분은 변함없는 관심과 격려 부탁드리며, 여러분의 가정에 건강과 행운이 가득하길 기원합니다.
                </p>
            </div>
            <div className="mt-8 text-right">
                <p className="text-xl font-semibold text-gray-800">
                    NBP KOREA CEO <span className="font-bold">최혁순</span>
                </p>
                {/* 서명 이미지가 있다면 여기에 추가 */}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CeoMessage;
