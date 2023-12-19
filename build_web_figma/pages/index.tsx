// pages/index.tsx
import React from 'react';
import Head from 'next/head';
import FullPage from '../src/module_Page';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Delicious Asian</title>
        {/* Các thẻ meta khác */}
      </Head>
      <FullPage />
      {/* Các thành phần khác của trang */}
    </div>
  );
};

export default Home;
