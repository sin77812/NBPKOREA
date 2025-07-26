'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, PlayIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
  headerHeight?: number;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ isOpen, onClose, headerHeight = 72 }) => {
  const [activeCategory, setActiveCategory] = useState('environment');

  const handleProductClick = (productTitle: string, category: string) => {
    // 카테고리별 제품 페이지로 이동
    const categoryRoutes = {
      'environment': '/products/environment',
      'combustion': '/products/combustion', 
      'coffee': '/products/coffee'
    };
    
    const route = categoryRoutes[category as keyof typeof categoryRoutes];
    if (route) {
      window.location.href = route;
    }
  };

  const categories = {
    environment: {
      title: '환경분야',
      description: '깨끗한 환경을 위한 혁신적인 기술',
      image: '/images/환경사업부/Business Area/홈페이지용 RTO 렌더링-nowatermark.jpg',
      color: 'from-emerald-500 to-teal-600',
      items: [
        {
          title: 'RTO 시스템',
          description: '고효율 축열식 연소산화설비',
          features: ['99% 이상 처리효율', '에너지 절약', '자동화 시스템'],
          href: '/products/environment/rto'
        },
        {
          title: 'RCO 시스템',
          description: '촉매식 연소산화설비',
          features: ['저온 연소', '촉매 재생', '유지보수 간편'],
          href: '/products/environment/rco'
        },
        {
          title: 'DTO 시스템',
          description: '직접 연소산화설비',
          features: ['직접 연소방식', '신뢰성', '경제성'],
          href: '/products/environment/dto'
        },
        {
          title: 'CTO 시스템',
          description: '농축연소산화설비',
          features: ['농축 기술', '에너지 효율', '운영비 절감'],
          href: '/products/environment/cto'
        }
      ]
    },
    combustion: {
      title: '연소분야',
      description: '첨단 연소 기술로 산업 혁신을 이끕니다',
      image: '/images/metal burner1.png',
      color: 'from-red-500 to-orange-600',
      items: [
        {
          title: '고효율 메탈 버너',
          description: '고효율 금속 섬유 버너',
          features: ['균등 연소', '저NOx', '내구성'],
          href: '/products/combustion/metal-burner'
        },
        {
          title: '소형 메탈 버너',
          description: '컴팩트한 소형 금속 섬유 버너',
          features: ['소형 설계', '고효율', '설치 간편'],
          href: '/products/combustion/small-metal-burner'
        },
        {
          title: '가스히터',
          description: '직화식/간접식 대용량 가열 시스템',
          features: ['대용량 처리', '빠른 가열', '안전성'],
          href: '/products/combustion/gas-heater'
        }
      ]
    },
    coffee: {
      title: '커피분야',
      description: '완벽한 로스팅을 위한 프리미엄 장비',
      image: '/images/커피사업부/Business Division/커피플랜트.jpg',
      color: 'from-amber-600 to-yellow-600',
      items: [
        {
          title: '제연기',
          description: '커피 로스팅 시 발생하는 연기 제거 시스템',
          features: ['고효율 연기 제거', '냄새 차단', '환경 친화적'],
          href: '/products/coffee/smoke-remover'
        },
        {
          title: '로스팅기',
          description: '전문가용 커피 로스팅 장비',
          features: ['정밀 온도 제어', '균등 로스팅', '배치 관리'],
          href: '/products/coffee/roasting-machine'
        }
      ]
    }
  };

  const currentCategory = categories[activeCategory as keyof typeof categories];

  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Mega Menu Panel */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed left-0 w-full bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl z-50"
            style={{ top: `${headerHeight}px` }}
          >
            <div className="max-w-7xl mx-auto px-6 py-8">
              <div className="grid grid-cols-12 gap-8 h-96">
                
                {/* Left Sidebar - Category Navigation */}
                <div className="col-span-3 space-y-2">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                    제품 카테고리
                  </h3>
                  
                  {Object.entries(categories).map(([key, category]) => (
                    <motion.button
                      key={key}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActiveCategory(key)}
                      className={`w-full text-left p-4 rounded-xl transition-all duration-300 group ${
                        activeCategory === key
                          ? 'bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 shadow-md'
                          : 'hover:bg-gray-50 border-l-4 border-transparent'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className={`font-semibold transition-colors ${
                            activeCategory === key ? 'text-red-600' : 'text-gray-800 group-hover:text-red-500'
                          }`}>
                            {category.title}
                          </h4>
                          <p className="text-sm text-gray-500 mt-1">
                            {category.description}
                          </p>
                        </div>
                        <ChevronRightIcon className={`w-5 h-5 transition-all duration-300 ${
                          activeCategory === key ? 'text-red-500 rotate-90' : 'text-gray-400 group-hover:text-red-500'
                        }`} />
                      </div>
                    </motion.button>
                  ))}
                </div>

                {/* Center - Product Grid */}
                <div className="col-span-6">
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {currentCategory.title}
                    </h2>
                    <p className="text-gray-600">{currentCategory.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {currentCategory.items.map((item) => (
                      <motion.div
                        key={item.href}
                        variants={itemVariants}
                        whileHover={{ 
                          scale: 1.03,
                          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        onMouseEnter={() => setHoveredItem(item.title)}
                        onMouseLeave={() => setHoveredItem(null)}
                        className="group"
                      >
                        <button 
                          onClick={() => handleProductClick(item.title, activeCategory)}
                          className="block w-full text-left"
                        >
                          <div className="bg-white rounded-xl p-4 border border-gray-100 hover:border-red-200 transition-all duration-300 h-full">
                            <div className="flex items-start justify-end mb-3">
                              <ArrowRightIcon className="w-4 h-4 text-gray-400 group-hover:text-red-500 transform group-hover:translate-x-1 transition-all duration-300" />
                            </div>
                            
                            <h3 className="font-semibold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                              {item.title}
                            </h3>
                            
                            <p className="text-sm text-gray-600">
                              {item.description}
                            </p>
                          </div>
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Right Sidebar - Featured Content */}
                <div className="col-span-3">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 h-full relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentCategory.color} opacity-10`}></div>
                    
                    <div className="relative z-10">
                      <h3 className="font-semibold text-gray-800 mb-4">
                        기술 혁신
                      </h3>
                      
                      <div className="mb-6">
                        <div className="aspect-video bg-gray-200 rounded-lg mb-4 relative overflow-hidden">
                          <Image
                            src={currentCategory.image}
                            alt={currentCategory.title}
                            fill
                            className="object-cover"
                            onError={(e) => {
                              e.currentTarget.src = '/images/mainhero1.jpg';
                            }}
                          />
                          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                            <PlayIcon className="w-12 h-12 text-white" />
                          </div>
                        </div>
                        
                        <p className="text-sm text-gray-600 mb-4">
                          최첨단 기술과 혁신적인 솔루션으로 고객의 성공을 함께 만들어갑니다.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <Link
                          href="/rnd"
                          className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200"
                        >
                          <span className="text-sm font-medium text-gray-700">연구개발</span>
                          <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                        </Link>
                        
                        <Link
                          href="/support"
                          className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200"
                        >
                          <span className="text-sm font-medium text-gray-700">기술지원</span>
                          <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                        </Link>
                        
                        <Link
                          href="/about"
                          className="flex items-center justify-between p-3 bg-white rounded-lg hover:shadow-md transition-all duration-200"
                        >
                          <span className="text-sm font-medium text-gray-700">회사소개</span>
                          <ArrowRightIcon className="w-4 h-4 text-gray-400" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MegaMenu;