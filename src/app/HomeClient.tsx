'use client';

import React from 'react';
import Hero from '@/components/Hero';
import CoreValues from '@/components/CoreValues';
import Products from '@/components/Products';
import News from '@/components/News';

const HomeClient: React.FC = () => {
  return (
    <main>
      <Hero />
      <CoreValues />
      <Products />
      <News />
    </main>
  );
};

export default HomeClient;
