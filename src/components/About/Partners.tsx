'use client';

import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

// 실제 기술 제휴 파트너사 로고
const partners = [
  { name: 'MIDCO', logo: '/images/주요거래처/midco로고.jpg' },
  { name: 'ECOSTAR', logo: '/images/주요거래처/ECOSTAR_vektorel_logo.png' },
  { name: 'KISCO', logo: '/images/주요거래처/KISCO-Logo-Slogan210x57.png' },
  { name: 'CombHex', logo: '/images/주요거래처/CombHexlogo2.png' },
];

// 실제 주요 고객사 로고
const clients = [
  { name: '현대중공업', logo: '/images/주요거래처/현대중공업.png' },
  { name: '삼성중공업', logo: '/images/주요거래처/삼성중공업.png' },
  { name: '한국조선해양', logo: '/images/주요거래처/한국조선해양.png' },
  { name: '한화오션', logo: '/images/주요거래처/한화오션.png' },
  { name: '포스코', logo: '/images/주요거래처/posco.png' },
  { name: '현대자동차', logo: '/images/주요거래처/현대.jpg' },
  { name: 'BMW', logo: '/images/주요거래처/bmw.png' },
  { name: '벤츠', logo: '/images/주요거래처/benz.png' },
  { name: '아우디', logo: '/images/주요거래처/audi.png' },
  { name: 'KIA', logo: '/images/주요거래처/kia.png' },
  { name: '두산', logo: '/images/주요거래처/두산.png' },
  { name: '한진중공업', logo: '/images/주요거래처/한진중공업.jpg' },
  { name: '현대미포조선', logo: '/images/주요거래처/현대미포조선.jpg' },
  { name: '현대삼호중공업', logo: '/images/주요거래처/현대삼호중공업.jpg' },
  { name: '이디야커피', logo: '/images/주요거래처/이디야커피.jpg' },
  { name: '농협목우촌', logo: '/images/주요거래처/농협목우촌.png' },
  { name: 'STX Construction', logo: '/images/주요거래처/STX Construction CI.jpg' },
  { name: '대우건설', logo: '/images/주요거래처/대우 E&C.jpg' },
  { name: '동국제강', logo: '/images/주요거래처/동국제강.png' },
  { name: '현대인프라코어', logo: '/images/주요거래처/현대인프라코어.png' },
];

const Partners = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-50 py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">
            기술 제휴 파트너
          </h2>
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <div key={index} className="px-4">
                <Image src={partner.logo} alt={partner.name} width={150} height={75} className="mx-auto" objectFit="contain" />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">
            주요 고객사
          </h2>
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="px-4">
                <Image src={client.logo} alt={client.name} width={150} height={75} className="mx-auto" objectFit="contain" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Partners;
