import React from 'react';
import ProductCategories from '@/components/Products/ProductCategories';
import IndustrialApplications from '@/components/Products/IndustrialApplications';
import ContactCTA from '@/components/Products/ContactCTA';

const ProductsPage = () => {
  return (
    <div className="pt-20"> {/* Adjusted padding for sticky header */}
      <section 
        className="relative py-32 md:py-48 w-full bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/thumbnails/producks hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 font-poppins leading-tight px-2">
            지속 가능한 미래를 위한<br className="sm:hidden" /> NBPKOREA의 <br className="hidden sm:block" />혁신적인 제품과 솔루션
          </h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-2">
            NBPKOREA는 환경, 연소, 커피 사업 분야에서 최고의 기술력과 노하우를 바탕으로,
            <br className="hidden sm:block" />
            고객의 다양한 요구에 부응하는 최적의 솔루션을 제공합니다.
          </p>
        </div>
      </section>
      <ProductCategories />
      <IndustrialApplications />
      <ContactCTA />
    </div>
  );
};

export default ProductsPage;