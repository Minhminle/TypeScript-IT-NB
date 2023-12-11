// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../src/components/Header/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Your App</title>
        {/* Các thẻ meta khác */}
      </Head>
      <Header />
      {/* Các thành phần khác của trang */}
    </div>
  );
};

export default Home;
