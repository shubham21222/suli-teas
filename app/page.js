"use client";
import React, { useState } from 'react';
import Landing from './components/landing-page';
import { useRouter } from 'next/navigation';

// Define your products array
export const products = [
    { id: 1, name: 'Product 1', slug: 'product-1' },
    { id: 2, name: 'Product 2', slug: 'product-2' },
    // Add more products as needed
];

const Page = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleNavigation = () => {
    setLoading(true);
    router.push('/some-page');
  };

  return (
    <div>
      <Landing loading={loading} />
      <button onClick={handleNavigation}>Go to another page</button>
    </div>
  );
};

export default Page;
