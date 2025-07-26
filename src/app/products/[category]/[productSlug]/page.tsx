import React from 'react';
import ProductDetail from '@/components/Products/ProductDetail';
import RelatedArticles from '@/components/Products/RelatedArticles';
import ContactCTA from '@/components/Products/ContactCTA';

const ProductDetailPage = async ({ params }: { params: any }) => {
  const { category, productSlug } = params;

  return (
    <div className="pt-20">
      <ProductDetail category={category} productSlug={productSlug} />
      <RelatedArticles />
      <ContactCTA />
    </div>
  );
};

export default ProductDetailPage;
