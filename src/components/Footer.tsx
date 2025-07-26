import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#2C3E50] text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 max-w-6xl text-center md:text-left">
        <div className="mb-6 sm:mb-8">
          <p className="text-xs sm:text-sm text-gray-300 mb-4 leading-relaxed">
            본 홈페이지 제품 이미지 또는 동영상, 각종 자료들을 무단으로 사용 시 법적인 제재를 받을 수 있습니다.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">고객센터 Service Center</h3>
            <p className="text-xs sm:text-sm mb-1">전화: 031.434.6566~7</p>
            <p className="text-xs sm:text-sm mb-1">팩스: 031.434.6566</p>
            <p className="text-xs sm:text-sm">이메일: nbpkorea@nbpkorea.co.kr</p>
          </div>
          <div className="mb-6 sm:mb-0">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">본사/공장</h3>
            <p className="text-xs sm:text-sm mb-1 leading-relaxed">경기도 안산시 단원구 엠티브이8로 22 (성곡동 798-9)</p>
            <p className="text-xs sm:text-sm">사업자등록번호: 119-13-28296</p>
          </div>
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">바로가기</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="/about" className="text-xs sm:text-sm hover:text-[#C0392B] transition-colors duration-300 block py-2">회사소개</a></li>
              <li><a href="/products" className="text-xs sm:text-sm hover:text-[#C0392B] transition-colors duration-300 block py-2">제품/솔루션</a></li>
              <li><a href="/rnd" className="text-xs sm:text-sm hover:text-[#C0392B] transition-colors duration-300 block py-2">기술 연구소</a></li>
              <li><a href="/support" className="text-xs sm:text-sm hover:text-[#C0392B] transition-colors duration-300 block py-2">고객 지원</a></li>
              <li><a href="/careers" className="text-xs sm:text-sm hover:text-[#C0392B] transition-colors duration-300 block py-2">채용</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-sm text-gray-400">
          <p>COPYRIGHTⓒ {new Date().getFullYear()} BY NBPKOREA ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;