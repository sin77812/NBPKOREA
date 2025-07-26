'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const RndPage: React.FC = () => {
  const coreTechnologies = [
    {
      title: "혁신적인 고효율 메탈 버너",
      image: "/images/metal burner1.png",
      description: "내열 금속 섬유를 니트상으로 짜서 만든 신개념의 표면 연소 버너, 섬유의 특성이 가미되어 여러가지 형태로 버너 가공이 가능하며 높은 효율 및 컴팩트한 구조로 취급이 간편함.",
      features: [
        "승온 및 냉각 시간이 단축됨. (빠른응답성)",
        "컴팩트한 구조로 설치 공간이 적게 필요함.",
        "NOx 및 CO 배출 저감",
        "높은 온도로 상승",
        "용량의 증대 효과",
        "차압증대와 유속 증대",
        "화염의 안정성",
        "재고 비용 절감",
        "선적 비용 절감",
        "제어 범위",
      ]
    },
    {
      title: "에너지 효율을 극대화하는 소형 메탈 히터",
      image: "/images/smallmetalburner.png",
      description: "기존 산업 현장에 설치되어 있는 전기히터 및 저효율 히터로 인한 기업의 에너지비용 절감 문제가 심각하여, 가스식 고효율 메탈 히터 개발로 산업 현장에 적용하여 열 효율 및 에너지 비용 절감문제를 해결합니다.",
      features: [
        "설치형식 난방용 메탈 히터 : 스탠드형",
        "설치형식 산업용 메탈 히터 : 스탠드형, 벽걸이형"
      ]
    }
  ];

  const achievements = [
    { year: "2009", title: "산학협력 기술대전 기술표준원장상 수상", logo: "/images/reward-1/기술표준원장상_산업기술대전(2009_직화식가스히터).png" },
    { year: "2014", title: "환경에너지 대상 기술부문 산업통산부장관상 수상", logo: "/images/reward-1/산업통상자원부장관상_환경에너지대상(2014).jpg" },
    { year: "2016", title: "산업통상자원부장관상 수상", logo: "/images/reward-1/산업통상자원부장관상_산업기술대전(2016).jpg" },
    { year: "2021", title: "부총리겸 교육부장관 표창장 수상", logo: "/images/reward-1/부총리겸교육부장관상_표창장(2021).png" },
    { year: "2017", title: "중소기업진흥공단이사장상 수상", logo: "/images/reward-1/중소기업진흥공단이사장상_산업기술대전(2017_멀티화덕).png" },
    { year: "2016", title: "대한민국기술혁신대상 수상", logo: "/images/reward-1/대한민국기술혁신대상(2016_머니투데이)1.png" },
    { year: "2014", title: "대한민국우수특허대상 수상", logo: "/images/reward-1/대한민국우수특허대상(2014_한국일보).jpg" },
    { year: "2011", title: "시흥시장 표창장 수상", logo: "/images/reward-1/시흥시장_표창장(2011)1.png" },
  ];

  return (
    <div className="bg-background text-text-primary">
      {/* 4.1. R&D Overview */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <Image
          src="/images/surport11.jpg"
          alt="NBPKOREA 연구소"
          fill
          style={{ objectFit: 'cover' }}
          className="filter brightness-50"
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins leading-tight px-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            혁신을 향한 끊임없는 도전.<br className="sm:hidden" /> NBPKOREA 기술 연구소
          </motion.h1>
          <motion.p className="text-base sm:text-lg md:text-xl max-w-5xl mx-auto font-inter leading-relaxed px-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            신뢰와 우수성을 갖춘 에너지 절감 설비업체의 선두주자, 앞선기술로 최선을 다하는 기업이 되겠습니다.
          </motion.p>
        </div>
      </section>

      <div className="relative bg-white z-10">
        {/* 4.2. Core Technology */}
        <section id="core-technologies" className="py-20 md:py-28">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-poppins">NBPKOREA의 핵심 기술력</h2>
            
            {/* Metal Burner */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="order-2 lg:order-1">
                <h3 className="text-xl sm:text-2xl font-bold text-accent mb-3 sm:mb-4 font-poppins">{coreTechnologies[0].title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 font-inter leading-relaxed">{coreTechnologies[0].description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {coreTechnologies[0].features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </motion.div>
              <motion.div className="space-y-4" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <Image src={coreTechnologies[0].image} alt={coreTechnologies[0].title} width={420} height={280} className="rounded-lg shadow-lg w-[70%] h-auto mx-auto"/>
              </motion.div>
            </div>

            {/* Small Metal Heater */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div className="space-y-4" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                 <Image src={coreTechnologies[1].image} alt={coreTechnologies[1].title} width={420} height={280} className="rounded-lg shadow-lg w-[70%] h-auto mx-auto"/>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
                <h3 className="text-2xl font-bold text-accent mb-4 font-poppins">{coreTechnologies[1].title}</h3>
                <p className="text-gray-600 mb-4 font-inter">{coreTechnologies[1].description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {coreTechnologies[1].features.map((feature, i) => <li key={i}>{feature}</li>)}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 4.3. Research Achievements */}
        <section id="achievements" className="py-20 md:py-28 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-poppins">연구개발 성과</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {achievements.map((ach, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="relative overflow-hidden">
                    <Image 
                      src={ach.logo} 
                      alt={ach.title} 
                      width={300} 
                      height={400} 
                      className="w-full h-56 object-contain group-hover:scale-110 transition-transform duration-300 p-2" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <div className="p-3">
                    <p className="text-xs text-gray-500 mb-1">{ach.year}</p>
                    <h3 className="text-sm font-semibold text-gray-800 leading-tight">{ach.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 4.4. R&D Facilities & Personnel */}
        <section id="facilities" className="py-20 md:py-28">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 font-poppins">최첨단 연구 시설과 전문 인력</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              NBPKOREA는 혁신적인 기술 개발을 위해 최첨단 연구 시설과 전문 인력에 아낌없이 투자하고 있습니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <motion.div 
                className="relative overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Image 
                  src="/images/intro2.jpg" 
                  alt="연구시설 1" 
                  width={420} 
                  height={280} 
                  className="w-[70%] h-48 object-cover mx-auto rounded-lg" 
                />
              </motion.div>
              <motion.div 
                className="relative overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Image 
                  src="/images/into3.jpg" 
                  alt="연구시설 2" 
                  width={420} 
                  height={280} 
                  className="w-[70%] h-48 object-cover mx-auto rounded-lg" 
                />
              </motion.div>
              <motion.div 
                className="relative overflow-hidden rounded-lg shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Image 
                  src="/images/intro4.JPG" 
                  alt="연구시설 3" 
                  width={420} 
                  height={280} 
                  className="w-[70%] h-48 object-cover mx-auto rounded-lg" 
                />
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RndPage;
