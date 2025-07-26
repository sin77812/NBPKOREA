'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import CeoMessage from '@/components/About/CeoMessage';
import History from '@/components/About/History';

// Awards and Certifications with actual image files
const awards = [
  { src: '/images/reward-1/기술표준원장상_산업기술대전(2009_직화식가스히터).png', type: 'image' },
  { src: '/images/reward-1/산업통상자원부장관상_환경에너지대상(2014).jpg', type: 'image' },
  { src: '/images/reward-1/산업통상자원부장관상_산업기술대전(2016).jpg', type: 'image' },
  { src: '/images/reward-1/부총리겸교육부장관상_표창장(2021).png', type: 'image' },
  { src: '/images/reward-1/중소기업진흥공단이사장상_산업기술대전(2017_멀티화덕).png', type: 'image' },
  { src: '/images/reward-1/대한민국기술혁신대상(2016_머니투데이)1.png', type: 'image' },
  { src: '/images/reward-1/대한민국우수특허대상(2014_한국일보).jpg', type: 'image' },
  { src: '/images/reward-1/시흥시장_표창장(2011)1.png', type: 'image' },
];

const patents = [
  { name: '유해 가스 재연소 장치 (음식점용 제연기)', number: '특허 제10-1727627호', date: '', summary: '음식점에서 발생하는 유해가스를 재연소하여 처리하는 친환경 제연 장치입니다.' },
  { name: '버너용 혼합가스의 비례 제어 장치', number: '특허 제10-0960100호', date: '', summary: '버너의 연소 효율을 극대화하기 위한 혼합가스 비례 제어 기술입니다.' },
  { name: '버너 열화 방지 장치', number: '특허 제10-0820254호', date: '', summary: '버너의 열화를 방지하여 수명을 연장시키는 혁신적인 보호 장치입니다.' },
  { name: '버너의 내부 지지 구조', number: '특허 제10-0944948호', date: '', summary: '버너 내부의 안정적인 지지 구조를 통해 연소 성능을 향상시킵니다.' },
  { name: '에어월을 이용한 난방 장치', number: '특허 제10-1576930호', date: '', summary: '에어월 기술을 활용한 고효율 난방 시스템입니다.' },
  { name: '가스 튀김기', number: '특허 제10-0982908호', date: '', summary: '안전하고 효율적인 가스 연소 방식의 튀김기 장치입니다.' },
  { name: '배기 가스 재연소 히팅 장치', number: '특허 제10-1525155호', date: '', summary: '배기가스를 재연소하여 열에너지로 활용하는 친환경 히팅 장치입니다.' },
  { name: '간접식 열풍 건조 장치', number: '특허 제10-1352476호', date: '', summary: '간접 가열 방식을 통한 고효율 열풍 건조 시스템입니다.' },
  { name: '고효율 직화식 건조기', number: '특허 제10-0819492호', date: '', summary: '직접 연소 방식을 통한 고효율 건조 장치입니다.' },
  { name: '유해 가스 재연소 장치 (경기과학기술대학교 공동)', number: '특허 제10-2365202호', date: '', summary: '경기과학기술대학교와 공동개발한 유해가스 재연소 처리 장치입니다.' },
  { name: '직접 연소에 의한 축열 촉매 산화 시스템', number: '특허 제10-2063953호', date: '', summary: '직접 연소와 축열 촉매를 결합한 혁신적인 산화 처리 시스템입니다.' },
  { name: '직화식 버너 장치', number: '특허 제10-1167941호 (특허 소멸)', date: '', summary: '고효율 직화식 버너의 핵심 기술 장치입니다.' },
  { name: '직화식 에어히터의 연소 챔버', number: '특허 제10-0902088호', date: '', summary: '직화식 에어히터의 최적화된 연소 챔버 설계 기술입니다.' },
  { name: '직화식 버너 유닛', number: '특허 제10-0960102호', date: '', summary: '고성능 직화식 버너의 핵심 유닛 기술입니다.' },
  { name: '금형의 냉각 구조에 있어서의 유로 내의 녹 제거 장치 및 녹 제거 방법', number: '특허 제10-1027692호 (특허 소멸)', date: '', summary: '금형 냉각 시스템의 유로 내 녹 제거를 위한 전용 장치 및 방법입니다.' },
  { name: '직화식 선박용 도장 건조기', number: '특허 제10-0872804호', date: '', summary: '선박 건조 현장에 특화된 직화식 도장 건조 시스템입니다.' },
  { name: '직접 연소에 의한 축열 촉매 모듈형 산화 시스템', number: '특허 제10-2063954호', date: '', summary: '모듈형 설계가 적용된 축열 촉매 산화 처리 시스템입니다.' },
  { name: '폐유 버너', number: '특허 제10-1084102호', date: '', summary: '폐유를 연료로 활용하는 친환경 버너 시스템입니다.' },
  { name: '유해 가스 재연소 장치 (제연기)', number: '특허 제10-1727631호', date: '', summary: '다양한 산업 현장에서 발생하는 유해가스를 효과적으로 재연소 처리하는 제연 장치입니다.' },
];

const partners = [
    { name: 'Midco International INC. U.S.A', description: '산업용 버너 및 저 Nox 버너 등 연소기술 관련 핵심기술의 이전, 검증, 교육 등 기술의 공동 참여 협약' },
    { name: 'ECOSTAR Turkey', description: '저 NOx 가스버너 기본설계 및 기술검토, 연소설비 및 가스버너 수입, 설치, 판매 협약' },
];

const clientLogos = {
    shipbuilding: ['/images/clients/shipbuilding/logo1.png', '/images/clients/shipbuilding/logo2.png'],
    automotive: ['/images/clients/automotive/logo1.png'],
    // ... add all other client logos here
};

const AboutPage = () => {
  const [showAllPatents, setShowAllPatents] = useState(false);
  const displayedPatents = showAllPatents ? patents : patents.slice(0, 6);
  return (
    <div className="bg-background text-text-primary">
        {/* 1.1. Vision and Core Values */}
        <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center text-white overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="/images/surporthero.png"
                    alt="NBPKOREA Vision"
                    fill
                    sizes="100vw"
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    priority
                />
                {/* 다크 오버레이로 글씨 가독성 향상 */}
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            <div className="relative z-10 text-center px-4">
                <motion.h1 
                    className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 font-poppins px-2"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
                >
                    새로운 미래를 위한 NBPKOREA의 약속
                </motion.h1>
                <motion.p 
                    className="text-base md:text-lg lg:text-xl max-w-5xl mx-auto font-inter px-4"
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                >
                    NBPKOREA는 깨끗한 환경과 효율적인 에너지 솔루션을 통해 지속 가능한 미래를 만들어간다는 비전으로 시작되었습니다.
                    저희는 연소 기술, 환경 설비, 그리고 프리미엄 커피 사업에 이르기까지 각 분야에서 최고의 전문성과 열정으로 고객과 사회에 기여하고 있습니다.
                </motion.p>
            </div>
        </section>

        <div className="relative bg-background z-10">
            {/* 1.2. CEO's Message */}
            <CeoMessage />

            {/* 1.3. Company History */}
            <History />


            {/* 1.5. Awards & Patents */}
            <section id="awards" className="py-20 md:py-28 bg-gray-50">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-16 font-poppins">수상 내역 및 주요 특허</h2>
                    <div className="mb-20">
                        <h3 className="text-2xl font-bold text-center text-gray-700 mb-12">수상 내역</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {awards.map((award, index) => (
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
                                            src={award.src} 
                                            alt="수상 증서" 
                                            width={300} 
                                            height={400} 
                                            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300" 
                                        />
                                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-center text-gray-700 mb-12">주요 기술 특허</h3>
                        
                        {/* 첨단 기술 헤더 */}
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-full">
                                <span className="font-semibold text-lg">19개의 혁신 특허 기술</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                            {displayedPatents.map((patent, index) => (
                                <motion.div 
                                    key={index} 
                                    className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.3 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    whileHover={{ scale: 1.02 }}
                                >
                                    <div className="flex items-start justify-between mb-3">
                                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-2 rounded-lg">
                                            <span className="text-xl">💡</span>
                                        </div>
                                        <div className="bg-gray-100 px-2 py-1 rounded-full text-xs text-gray-600 font-medium">
                                            특허
                                        </div>
                                    </div>
                                    
                                    <h4 className="font-bold text-lg text-secondary mb-2 group-hover:text-blue-600 transition-colors leading-tight">
                                        {patent.name}
                                    </h4>
                                    
                                    <p className="text-sm text-gray-600 font-mono mb-3 bg-gray-50 px-2 py-1 rounded">
                                        {patent.number}
                                    </p>
                                    
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {patent.summary}
                                    </p>
                                    
                                    <div className="mt-4 pt-3 border-t border-gray-100">
                                        <div className="flex items-center text-xs text-gray-500">
                                            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                                            등록 완료
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        
                        {/* 더보기/접기 버튼 */}
                        <div className="text-center mt-8 mb-8">
                            <button
                                onClick={() => setShowAllPatents(!showAllPatents)}
                                className="bg-primary hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                {showAllPatents ? (
                                    <>
                                        <span className="mr-2">접기</span>
                                        <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                        </svg>
                                    </>
                                ) : (
                                    <>
                                        <span className="mr-2">더보기 ({patents.length - 6}개 더)</span>
                                        <svg className="w-4 h-4 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                        </div>
                        
                        {/* 특허 통계 */}
                        <div className="mt-12 text-center">
                            <div className="inline-flex items-center space-x-8 bg-gray-50 px-8 py-4 rounded-2xl">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-blue-600">19</div>
                                    <div className="text-sm text-gray-600">보유 특허</div>
                                </div>
                                <div className="w-px h-8 bg-gray-300"></div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-purple-600">5+</div>
                                    <div className="text-sm text-gray-600">기술 분야</div>
                                </div>
                                <div className="w-px h-8 bg-gray-300"></div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-green-600">혁신</div>
                                    <div className="text-sm text-gray-600">지속적 연구개발</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 1.6. Partnerships */}
            <section id="partners" className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">기술 제휴 파트너</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {partners.map((partner, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-8 bg-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                <div className="w-full h-48 relative mb-6 rounded-lg overflow-hidden">
                                    <Image 
                                        src={index === 0 ? "/images/midco.JPG" : "/images/ecostar.jpg"} 
                                        alt={`${partner.name} logo`}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-accent mb-4">{partner.name}</h3>
                                <p className="text-gray-600 leading-relaxed">{partner.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 1.7. Major Clients */}
            <section id="clients" className="py-20 md:py-28 bg-gray-50">
                 <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">주요 고객사</h2>
                    <p className="text-center text-lg text-gray-600 mb-12">다양한 산업 분야의 선두 기업들이 NBPKOREA의 기술력을 신뢰하고 있습니다.</p>
                    
                    {/* Client logos carousel */}
                    <div className="flex overflow-hidden py-4 bg-white rounded-lg shadow-sm">
                        <motion.div
                            className="flex flex-nowrap gap-8"
                            animate={{ x: ['0%', '-100%'] }}
                            transition={{
                                x: { repeat: Infinity, repeatType: 'loop', duration: 60, ease: 'linear' },
                            }}
                        >
                            {[
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
                                '/images/주요거래처/midco로고.jpg',
                                '/images/주요거래처/posco.png',
                                '/images/주요거래처/samhwa.png',
                                '/images/주요거래처/sk오션플랜트.png',
                                '/images/주요거래처/STX Construction CI.jpg',
                                '/images/주요거래처/tmc.png',
                                '/images/주요거래처/usg보랄.png',
                                '/images/주요거래처/volvo.png',
                            ].concat([
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
                                '/images/주요거래처/midco로고.jpg',
                                '/images/주요거래처/posco.png',
                                '/images/주요거래처/samhwa.png',
                                '/images/주요거래처/sk오션플랜트.png',
                                '/images/주요거래처/STX Construction CI.jpg',
                                '/images/주요거래처/tmc.png',
                                '/images/주요거래처/usg보랄.png',
                                '/images/주요거래처/volvo.png',
                            ]).map((logo, index) => (
                                <div key={index} className="flex-shrink-0 w-32 h-20 flex items-center justify-center bg-gray-50 rounded-lg p-2 hover:bg-gray-100 transition-colors">
                                    <Image src={logo} alt={`Client ${index + 1}`} width={120} height={60} className="max-w-full max-h-full object-contain" />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* 1.8. Directions */}
            <section id="location" className="py-20 md:py-28 bg-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">오시는 길</h2>
                    <div className="md:flex md:space-x-12 items-start">
                        <div className="md:w-2/3 h-96 mb-8 md:mb-0">
                            <iframe
                                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=ko&amp;q=경기도%20안산시%20단원구%20엠티브이8로%2022&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="rounded-lg shadow-lg"
                            ></iframe>
                        </div>
                        <div className="md:w-1/3">
                            <div className="space-y-6">
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                                        <span className="text-2xl mr-2">📍</span>
                                        주소
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">
                                        경기도 안산시 단원구<br />
                                        엠티브이8로 22<br />
                                        (성곡동 798-9)
                                    </p>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                                        <span className="text-2xl mr-2">📞</span>
                                        연락처
                                    </h3>
                                    <p className="text-gray-700 mb-2">
                                        <strong>전화:</strong> 
                                        <a href="tel:031-434-6566" className="text-accent hover:underline ml-1">
                                            031.434.6566~7
                                        </a>
                                    </p>
                                    <p className="text-gray-700">
                                        <strong>이메일:</strong> 
                                        <a href="mailto:nbpkorea@nbpkorea.co.kr" className="text-accent hover:underline ml-1">
                                            nbpkorea@nbpkorea.co.kr
                                        </a>
                                    </p>
                                </div>
                                
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-xl text-gray-800 mb-3 flex items-center">
                                        <span className="text-2xl mr-2">🚇</span>
                                        대중교통
                                    </h3>
                                    <p className="text-gray-700">
                                        인천 2호선 가재울역<br />
                                        4번 출구, 도보 10분
                                    </p>
                                </div>
                                
                                <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                                    <h3 className="font-bold text-lg text-primary mb-2">
                                        방문 시 안내
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        사전 방문 예약을 통해<br />
                                        더욱 원활한 상담이 가능합니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  );
};

export default AboutPage;