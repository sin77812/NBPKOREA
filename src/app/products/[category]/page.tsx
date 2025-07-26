import React from 'react';
import ProductList from '@/components/Products/ProductList';
import ContactCTA from '@/components/Products/ContactCTA';
import EnvironmentalSolutionsPage from '@/components/Products/EnvironmentalSolutionsPage';
import CombustionSolutionsPage from '@/components/Products/CombustionSolutionsPage';

const ProductListPage = async ({ params }: { params: Promise<{ category: string }> }) => {
  const { category } = await params;

  if (category === 'environment') {
    return <EnvironmentalSolutionsPage />;
  } else if (category === 'combustion') {
    return <CombustionSolutionsPage />;
  }

  const categoryTitle = {
    coffee: '커피 사업',
  }[category] || '제품 목록';

  return (
    <div className="pt-20">
      <section className="py-16 md:py-24 bg-gray-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-poppins">
          {categoryTitle}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto px-6">
          {categoryTitle} 분야의 혁신적인 제품들을 만나보세요.
        </p>
      </section>
      <ProductList category={category} />
      <ContactCTA />
    </div>
  );
};

export default ProductListPage;
