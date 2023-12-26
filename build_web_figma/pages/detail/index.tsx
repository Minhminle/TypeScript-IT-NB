// Detail.tsx
import type { ReactElement } from "react";
import type { NextPageWithLayout } from "../_app";
import Layout from "@/src/components/layout";

const Detail: NextPageWithLayout = () => {
  return <></>;
};

Detail.getLayout = function getLayout(page: ReactElement) {
  return (
    <>
      <Layout>{page}</Layout>
    </>
  );
};

export default Detail;
