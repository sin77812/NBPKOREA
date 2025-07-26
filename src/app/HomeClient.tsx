'use client';

import React from 'react';
import Hero from '@/components/Hero';
import CoreValues from '@/components/CoreValues';
import Products from '@/components/Products';
import News from '@/components/News';
import Footer from '@/components/Footer';




const HomeClient: React.FC = () => {
  return (
    <main>
      <Hero />
      <CoreValues />
      <Products />
      <News />
      <Footer />
    </main>
  );
};

export default HomeClient;
