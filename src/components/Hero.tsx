import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center text-white pt-20 bg-cover bg-center w-full"
      style={{ backgroundImage: "url('/images/mainhero1.jpg')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
          깨끗한 환경, 효율적인 에너지.<br className="hidden sm:block" />
          <span className="sm:hidden"> </span>NBPKOREA가 만들어갑니다.
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-8 text-white leading-relaxed px-2">
          대한민국 산업의 중심에서 환경과 에너지의 미래를 선도합니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-accent hover:bg-orange-600 text-white font-bold py-3 px-6 sm:px-8 rounded-full transition duration-300 w-full sm:w-auto text-sm sm:text-base">
            제품/솔루션 자세히 보기
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-6 sm:px-8 rounded-full transition duration-300 w-full sm:w-auto text-sm sm:text-base">
            문의하기
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;