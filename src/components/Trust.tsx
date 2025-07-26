"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Trust = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const certifications = [
    { src: '/images/reward-1/기술표준원장상_산업기술대전(2009_직화식가스히터).png', alt: '기술표준원장상_산업기술대전(2009_직화식가스히터)', type: 'image' },
    { src: '/images/reward-1/대한민국기술혁신대상(2016_머니투데이)1.png', alt: '대한민국기술혁신대상(2016_머니투데이)', type: 'image' },
    { src: '/images/reward-1/대한민국우수특허대상(2014_한국일보).jpg', alt: '대한민국우수특허대상(2014_한국일보)', type: 'image' },
    { src: '/images/reward-1/부총리겸교육부장관상_표창장(2021).png', alt: '부총리겸교육부장관상_표창장(2021)', type: 'image' },
    { src: '/images/reward-1/산업통상자원부장관상_산업기술대전(2016).jpg', alt: '산업통상자원부장관상_산업기술대전(2016)', type: 'image' },
    { src: '/images/reward-1/산업통상자원부장관상_환경에너지대상(2014).jpg', alt: '산업통상자원부장관상_환경에너지대상(2014)', type: 'image' },
    { src: '/images/reward-1/시흥시장_표창장(2011)1.png', alt: '시흥시장_표창장(2011)', type: 'image' },
    { src: '/images/reward-1/중소기업진흥공단이사장상_산업기술대전(2017_멀티화덕).png', alt: '중소기업진흥공단이사장상_산업기술대전(2017_멀티화덕)', type: 'image' },
    { src: '/images/reward-1/디자인등록증_건조장치용토출관.jpg', alt: '디자인등록증_건조장치용토출관', type: 'image' },
    { src: '/images/reward-1/디자인등록증_메탈버너(사각).jpg', alt: '디자인등록증_메탈버너(사각)', type: 'image' },
    { src: '/images/reward-1/디자인등록증_메탈버너(원형).jpg', alt: '디자인등록증_메탈버너(원형)', type: 'image' },
    { src: '/images/reward-1/디자인등록증_메탈버너(직사각).jpg', alt: '디자인등록증_메탈버너(직사각)', type: 'image' },
    { src: '/images/reward-1/디자인등록증_메탈버너Assy(원형).jpg', alt: '디자인등록증_메탈버너Assy(원형)', type: 'image' },
    { src: '/images/reward-1/디자인등록증_배기가스연소기.jpg', alt: '디자인등록증_배기가스연소기', type: 'image' },
    { src: '/images/reward-1/디자인등록증_연소산화설비.jpg', alt: '디자인등록증_연소산화설비', type: 'image' },
    { src: '/images/reward-1/디자인등록증_연소산화설비용 케이스.jpg', alt: '디자인등록증_연소산화설비용 케이스', type: 'image' },
    { src: '/images/reward-1/디자인등록증_열교환기.jpg', alt: '디자인등록증_열교환기', type: 'image' },
    { src: '/images/reward-1/디자인등록증_제연기.jpg', alt: '디자인등록증_제연기', type: 'image' },
    { src: '/images/reward-1/디자인등록증_화덕_1.jpg', alt: '디자인등록증_화덕_1', type: 'image' },
    { src: '/images/reward-1/디자인등록증_화덕_2.jpg', alt: '디자인등록증_화덕_2', type: 'image' },
  ];

  const clients = [
    '/images/주요거래처/(주)대한전열공업.jpg',
    '/images/주요거래처/(주)명성알루미늄.jpg',
    '/images/주요거래처/(주)신우.png',
    '/images/주요거래처/(주)키메코.png',
    '/images/주요거래처/(주)탑시스템.png',
    '/images/주요거래처/(주)포스벨.png',
    '/images/주요거래처/(주)한국플라스틱엔지니어링.gif',
    '/images/주요거래처/(주)AT-Solution.jpg',
    '/images/주요거래처/경인양행.png',
    '/images/주요거래처/금영이엔지.png',
    '/images/주요거래처/농협목우촌.png',
    '/images/주요거래처/대보건설.png',
    '/images/주요거래처/대선조선.jpg',
    '/images/주요거래처/대우 E&C.jpg',
    '/images/주요거래처/대전도시공사.png',
    '/images/주요거래처/대한전열공업.jpg',
    '/images/주요거래처/동국제강.png',
    '/images/주요거래처/동부건설.png',
    '/images/주요거래처/동양잉크.jpg',
    '/images/주요거래처/동양잉크.png',
    '/images/주요거래처/두산.png',
    '/images/주요거래처/또래오래.png',
    '/images/주요거래처/부산환경공단.jpg',
    '/images/주요거래처/삼성중공업.png',
    '/images/주요거래처/삼화왕관(주).jpg',
    '/images/주요거래처/세라컴 로고-투명.png',
    '/images/주요거래처/센추리.png',
    '/images/주요거래처/송현.jpg',
    '/images/주요거래처/쉐보레.png',
    '/images/주요거래처/신성엔지니어링.png',
    '/images/주요거래처/예문테크(주).png',
    '/images/주요거래처/이디야커피.jpg',
    '/images/주요거래처/이디야커피(2).jpg',
    '/images/주요거래처/제일산업개발(주).jpg',
    '/images/주요거래처/지훈산업.png',
    '/images/주요거래처/체리부로.png',
    '/images/주요거래처/커뮤니케이션명 _영문.jpg',
    '/images/주요거래처/케이조선.png',
    '/images/주요거래처/티앤알바이오팹.png',
    '/images/주요거래처/폭스바겐.jpg',
    '/images/주요거래처/푸조.jpg',
    '/images/주요거래처/하이에어코리아.png',
    '/images/주요거래처/한국조선해양.png',
    '/images/주요거래처/한국환경공단.jpg',
    '/images/주요거래처/한진중공업.jpg',
    '/images/주요거래처/한화오션.png',
    '/images/주요거래처/할라.jpg',
    '/images/주요거래처/현대.jpg',
    '/images/주요거래처/현대미포조선.jpg',
    '/images/주요거래처/현대삼호중공업.jpg',
    '/images/주요거래처/현대스틸산업.png',
    '/images/주요거래처/현대인프라코어.png',
    '/images/주요거래처/현대중공업.png',
    '/images/주요거래처/audi.png',
    '/images/주요거래처/benz.png',
    '/images/주요거래처/bmw.png',
    '/images/주요거래처/cherrybro_logo.png',
    '/images/주요거래처/CombHexlogo2.png',
    '/images/주요거래처/ECOSTAR_vektorel_logo.png',
    '/images/주요거래처/GSE&C.jpg',
    '/images/주요거래처/hj중공업.png',
    '/images/주요거래처/hsg성동조선.png',
    '/images/주요거래처/infiniti.png',
    '/images/주요거래처/jeep.png',
    '/images/주요거래처/kia.png',
    '/images/주요거래처/kict.jpg',
    '/images/주요거래처/KISCO-Logo-Slogan210x57.png',
    '/images/주요거래처/lexus.png',
    '/images/주요거래처/lgcare.png',
    '/images/주요거래처/logo_Demirbas_가로형-등록보류.png',
    '/images/주요거래처/logo_demirbas-yatay-등록보류.svg',
    '/images/주요거래처/midco로고.jpg',
    '/images/주요거래처/posco.png',
    '/images/주요거래처/samhwa.png',
    '/images/주요거래처/sk오션플랜트.png',
    '/images/주요거래처/STX Construction CI.jpg',
    '/images/주요거래처/tmc.png',
    '/images/주요거래처/usg보랄.png',
    '/images/주요거래처/volvo.png',
  ];

  const historyEvents = [
    { year: 2006, description: 'NBP KOREA 설립, NBP ITALY 한국 대리점 협약' },
    { year: 2007, description: 'MIDCO INTERNATIONAL U.S.A 한국 독점 AGENCY 협약' },
    { year: 2008, description: 'ISO 9001, ISO 14001 인증 획득' },
    { year: 2014, description: '산업통상자원부장관상 환경에너지대상 수상' },
    { year: 2016, description: '대한민국 기업대상 기술혁신부문 대상 수상' },
    { year: 2018, description: '신사옥 이전 (경기도 안산시)' },
    { year: 2022, description: 'KOITA 기업부설연구소 설립 인증' },
  ];

  return (
    <section className="py-20 text-text-primary">
      <div className="container mx-auto px-4 max-w-6xl">
        <h2 className="text-4xl font-bold text-center mb-16">NBPKOREA의 신뢰성</h2>

        {/* Certifications */}
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">인증 및 수상 현황</h3>
          <div className="flex overflow-hidden space-x-8 py-4">
            <motion.div
              className="flex flex-nowrap"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                x: { repeat: Infinity, repeatType: 'loop', duration: 84, ease: 'linear' },
              }}
            >
              {certifications.concat(certifications).map((item, index) => (
                <div key={index} className="flex-shrink-0 flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-48 h-48 mx-4">
                  {item.type === 'image' ? (
                    <Image src={item.src} alt={item.alt} width={120} height={120} className="h-full w-full object-contain" />
                  ) : (
                    <a href={item.src} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12 mx-auto mb-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-9 6h6m-9-3h9m-6-9h9m-9 5.25h9" />
                      </svg>
                      <p className="text-sm font-medium">{item.alt}</p>
                    </a>
                  )}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Clients Carousel */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center mb-8">주요 고객사</h3>
          <div className="flex overflow-hidden space-x-8 py-4">
            <motion.div
              className="flex flex-nowrap"
              animate={{ x: ['0%', '-100%'] }}
              transition={{
                x: { repeat: Infinity, repeatType: 'loop', duration: 84, ease: 'linear' },
              }}
            >
              {clients.concat(clients).map((logo, index) => (
                <Image key={index} src={logo} alt={`Client ${index + 1}`} width={150} height={80} className="flex-shrink-0 h-20 object-contain mx-4" />
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* History Highlight */}
        <motion.div
          variants={variants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.4 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">회사 연혁 하이라이트</h3>
          <div className="relative flex flex-col items-center max-w-4xl mx-auto">
            {historyEvents.map((event, index) => (
              <div key={index} className="flex items-center w-full mb-6 sm:mb-8 last:mb-0">
                <div className="w-1/2 text-right pr-4 sm:pr-8">
                  {index % 2 === 0 && (
                    <motion.p
                      className="text-lg sm:text-xl font-semibold text-primary"
                      initial={{ opacity: 0, x: -50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.3 + 0.6 }}
                    >
                      {event.year}
                    </motion.p>
                  )}
                </div>
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold z-10 flex-shrink-0 text-sm sm:text-base">
                  {index + 1}
                </div>
                <div className="w-1/2 text-left pl-4 sm:pl-8">
                  {index % 2 !== 0 && (
                    <motion.p
                      className="text-lg sm:text-xl font-semibold text-primary"
                      initial={{ opacity: 0, x: 50 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.3 + 0.6 }}
                    >
                      {event.year}
                    </motion.p>
                  )}
                  <motion.p
                    className="text-sm sm:text-base md:text-lg text-text-secondary leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.3 + 0.8 }}
                  >
                    {event.description}
                  </motion.p>
                </div>
              </div>
            ))}
            <div className="absolute h-full w-1 bg-gray-300 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Trust;
