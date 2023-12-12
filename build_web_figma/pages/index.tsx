// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import Header from '../src/components/Header/Header';
import Asian from '../src/components/Container/Container_  Asian';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Delicious Asian</title>
        {/* Các thẻ meta khác */}
      </Head>
      <Header />
      <Asian />
      {/* Các thành phần khác của trang */}
    </div>
  );
};

export default Home;
