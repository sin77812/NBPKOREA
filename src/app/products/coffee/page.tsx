'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Tab } from '@headlessui/react';
import { product } from './data';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

export default function CoffeeAfterburnerPage() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const performanceImages = [
    "/images/커피사업부/Business Area/1.jpg",
    "/images/커피사업부/Business Area/3.jpg",
    "/images/커피사업부/Business Area/그림71.png",
    "/images/커피사업부/Business Area/그림72.png",
    "/images/커피사업부/Business Area/그림73.png",
    "/images/커피사업부/Business Area/그림74.png",
    "/images/커피사업부/Business Area/그림75.png",
    "/images/커피사업부/Business Area/그림76.png",
    "/images/커피사업부/Business Area/그림77.png",
    "/images/커피사업부/Business Area/그림78.png",
    "/images/커피사업부/Business Area/그림79.png",
    "/images/커피사업부/Business Area/그림80.png",
    "/images/커피사업부/Business Area/그림82.jpg",
    "/images/커피사업부/Business Area/설치사진 (3).jpg",
    "/images/커피사업부/Business Area/실사용1.jpg",
    "/images/커피사업부/Business Area/실사용2.jpg",
    "/images/커피사업부/Business Area/실사용3.jpg",
    "/images/커피사업부/Business Area/실사용4.jpg",
    "/images/커피사업부/Business Area/실사용5.jpg",
    "/images/커피사업부/Business Area/실사용6.jpg",
    "/images/커피사업부/Business Area/실사용7.jpg",
    "/images/커피사업부/Business Area/실사용8.jpg",
    "/images/커피사업부/Business Area/실사용9.jpg",
    "/images/커피사업부/Business Area/이디야(3).jpg",
    "/images/커피사업부/Business Area/커피플랜트.jpg",
    "/images/커피사업부/Business Area/후지로얄차이나(1).jpg",
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center h-[50vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url('/images/heeerrrooo.jpg')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-20 p-4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
            골칫덩이 악취, 민원, 연기를 잡는 최고의 솔루션
          </h1>
        </motion.div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto p-4 md:p-8">
        {/* Gallery and Download */}
        <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="w-full">
                    <Image
                        src={product.gallery[0]}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="rounded-lg shadow-lg object-cover w-full"
                    />
                </div>
                <div className="flex flex-col items-start">
                     <h2 className="text-3xl font-bold text-gray-800 mb-4">Catalogue</h2>
                    <p className="text-gray-600 mb-6">제품의 상세한 정보를 카탈로그로 확인해보세요.</p>
                    <button className="bg-accent text-white font-bold py-3 px-8 rounded-full hover:bg-accent-dark transition-all duration-300 shadow-md">
                        Catalogue Download
                    </button>
                    <div className="mt-8 grid grid-cols-3 gap-4">
                        {product.gallery.slice(1).map((img: string, i: number) => (
                            <Image key={i} src={img} alt={`${product.name} gallery image ${i + 1}`} width={150} height={150} className="rounded-md object-cover cursor-pointer hover:opacity-80 transition-opacity" />
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Tabs for details */}
        <div className="w-full px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-gray-200 p-1">
                    <Tab className={({ selected }) => classNames('w-full rounded-lg py-2.5 text-sm font-medium leading-5', 'ring-white/60 ring-offset-2 ring-offset-accent focus:outline-none focus:ring-2', selected ? 'bg-accent text-white shadow' : 'text-gray-700 hover:bg-gray-300 hover:text-gray-800')}>특장점</Tab>
                    <Tab className={({ selected }) => classNames('w-full rounded-lg py-2.5 text-sm font-medium leading-5', 'ring-white/60 ring-offset-2 ring-offset-accent focus:outline-none focus:ring-2', selected ? 'bg-accent text-white shadow' : 'text-gray-700 hover:bg-gray-300 hover:text-gray-800')}>사양</Tab>
                    <Tab className={({ selected }) => classNames('w-full rounded-lg py-2.5 text-sm font-medium leading-5', 'ring-white/60 ring-offset-2 ring-offset-accent focus:outline-none focus:ring-2', selected ? 'bg-accent text-white shadow' : 'text-gray-700 hover:bg-gray-300 hover:text-gray-800')}>처리 과정</Tab>
                    <Tab className={({ selected }) => classNames('w-full rounded-lg py-2.5 text-sm font-medium leading-5', 'ring-white/60 ring-offset-2 ring-offset-accent focus:outline-none focus:ring-2', selected ? 'bg-accent text-white shadow' : 'text-gray-700 hover:bg-gray-300 hover:text-gray-800')}>A/S</Tab>
                </Tab.List>
                <Tab.Panels className="mt-2">
                    {/* Features Panel */}
                    <Tab.Panel className="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-accent focus:outline-none focus:ring-2">
                        <div className="grid md:grid-cols-2 gap-8 py-8">
                            <div>
                                <h3 className="text-2xl font-bold mb-6 text-gray-800">엔비피코리아 애프터버너만의 특장점!</h3>
                                <ul className="space-y-4">
                                    {product.features.map((feature: string, i: number) => (
                                        <motion.li key={i} custom={i} variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} className="flex items-start">
                                            <span className="text-accent mr-3">✔</span>
                                            <span className="text-gray-700">{feature}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                             <div className="grid grid-cols-1 gap-6">
                                {product.techFeatures.map((feature: any, i: number) => (
                                    <div key={i} className="bg-gray-50 p-6 rounded-lg">
                                        <h4 className="font-bold text-lg text-gray-800 mb-2">{feature.title}</h4>
                                        <p className="text-gray-600">{feature.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Tab.Panel>
                    {/* Specifications Panel */}
                    <Tab.Panel className="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-accent focus:outline-none focus:ring-2">
                        <div className="py-8">
                            <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">제품 사양 | Specification</h3>
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제품명</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">용량</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">크기 (W x L x H)</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">버너</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제어</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">컨트롤러</th>
                                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">연료</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {product.specifications.map((spec: any, i: number) => (
                                            <tr key={i}>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.name}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.capacity}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.size}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.burner}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.control}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.controller}</td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.fuel}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                             <p className="text-center mt-4 text-sm text-gray-500">60Kg~120Kg 이상은 당사로 직접 문의 바랍니다.</p>
                        </div>
                    </Tab.Panel>
                    {/* Flowchart Panel */}
                    <Tab.Panel className="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-accent focus:outline-none focus:ring-2">
                        <div className="py-8 text-center">
                            <h3 className="text-2xl font-bold mb-6 text-gray-800">처리 과정 | Flow chart</h3>
                            <Image src={product.flowchart.image} alt="Flowchart" width={600} height={300} className="mx-auto rounded-lg shadow-md mb-6" />
                            <pre className="max-w-3xl mx-auto text-gray-600 leading-relaxed text-left whitespace-pre-wrap font-sans">{product.flowchart.description}</pre>
                        </div>
                    </Tab.Panel>
                    {/* A/S Panel */}
                    <Tab.Panel className="rounded-xl bg-white p-3 ring-white/60 ring-offset-2 ring-offset-accent focus:outline-none focus:ring-2">
                        <div className="py-8 text-center">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800">{product.as.title}</h3>
                            <p className="max-w-2xl mx-auto text-gray-600 mb-10">{product.as.description}</p>
                            <div className="flex justify-center items-center space-x-4 md:space-x-8 mb-10">
                                {product.as.steps.map((step: any, i: number) => (
                                    <div key={i} className="flex flex-col items-center">
                                        <div className="bg-blue-100 rounded-full p-4 mb-2">
                                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <p className="font-semibold text-gray-700">{step.name}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 inline-block">
                                <p className="font-bold">{product.as.warranty}</p>
                                <p>{product.as.warrantyDetail}</p>
                            </div>
                        </div>
                    </Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>

        {/* Business Performance Section */}
        <section className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">NBPKOREA 커피 사업부 주요 실적</h2>
                <div className="flex overflow-hidden space-x-8 py-4">
                    <motion.div
                        className="flex flex-nowrap"
                        animate={{ x: ['0%', '-100%'] }}
                        transition={{
                            x: { repeat: Infinity, repeatType: 'loop', duration: 60, ease: 'linear' },
                        }}
                    >
                        {performanceImages.concat(performanceImages).map((imgSrc, index) => (
                            <div key={index} className="flex-shrink-0 w-[326px] h-[245px] mx-4">
                                <Image src={imgSrc} alt={`Performance ${index + 1}`} width={326} height={245} className="w-full h-full object-cover rounded-lg shadow-md" />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
      </main>
    </div>
  );
}