import React from "react";
import Head from "src/components/toolkit/Head";
import { withAuthentication } from "@hooks/withAuthentication";
import { TestPage } from "@pages/TestPage";

const HomePage: React.FC = () => {
  return withAuthentication(
    <>
      <Head title={"booknook | entrar"} />
      <TestPage />
    </>
  );
};

export default HomePage;
