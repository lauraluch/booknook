import { TestPage } from "@pages/TestPage";
import React from "react";
import Head from "src/components/toolkit/Head";
import { Typography } from "src/components/toolkit/Typography";

const HomePage: React.FC = () => {
  return (
    <>
      <Head title={"booknook | test page"} />
      <TestPage />
    </>
  );
};

export default HomePage;
