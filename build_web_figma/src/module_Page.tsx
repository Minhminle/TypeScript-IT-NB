// pages/index.tsx
import React from "react";
import Head from "next/head";
import Header from "./components/Header/Header";
import Asian from "./components/Container/Container_ Asian";
import Wellcome from "./components/Container/Container_WelcomeTo";
import Chef from "./components/Container/Container_Chef";
import Cus from "./components/Container/Container_Customer";

const FullPage: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Delicious Asian</title>
        {/* Các thẻ meta khác */}
      </Head>
      <Header>
        <></>
      </Header>
      <Asian />
      <Wellcome />
      <Chef />
      <Cus />
      {/* Các thành phần khác của trang */}
    </div>
  );
};

export default FullPage;
