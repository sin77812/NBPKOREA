'use client';

import React from 'react';

const Directions = () => {
  const address = "인천광역시 서구 봉수대로 1234, NBPKOREA 빌딩";
  const phone = "032-123-4567";
  const email = "contact@nbpkorea.com";

  return (
    <section id="location" className="bg-white py-20 md:py-28">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12 font-poppins">
          오시는 길
        </h2>
        <div className="md:flex md:space-x-12">
          {/* Map Placeholder */}
          <div className="md:w-2/3 h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-8 md:mb-0">
            <p className="text-gray-500">지도 API 연동 영역</p>
            {/* Google/Naver Maps API will be embedded here */}
          </div>

          {/* Info Section */}
          <div className="md:w-1/3">
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">주소</h3>
                <p className="text-gray-600">{address}</p>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">연락처</h3>
                <a href={`tel:${phone}`} className="text-blue-600 hover:underline">{phone}</a>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">이메일</h3>
                <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
              </div>
              <div>
                <h3 className="font-bold text-xl text-gray-800 mb-2">대중교통</h3>
                <p className="text-gray-600">인천 2호선 가재울역 4번 출구, 도보 10분</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Directions;
