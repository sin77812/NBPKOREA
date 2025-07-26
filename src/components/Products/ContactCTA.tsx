import React from 'react';
import Link from 'next/link';

const ContactCTA = () => {
  return (
    <section className="bg-[#2C3E50] text-white py-12 px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">귀사의 맞춤형 솔루션을 찾고 계신가요?</h2>
        <p className="text-lg mb-8 text-gray-300">NBPKOREA 전문가가 친절하게 상담해 드립니다. 지금 바로 문의하세요!</p>
        <Link href="/support" className="bg-[#C0392B] text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition-colors duration-300 shadow-md inline-block">
          전문가와 상담하기
        </Link>
      </div>
    </section>
  );
};

export default ContactCTA;