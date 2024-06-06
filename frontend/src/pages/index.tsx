import { SigninPage } from "@pages/Signin/SigninPage";
import React from "react";
import Head from "src/components/toolkit/Head";

const HomePage: React.FC = () => {
  return (
    <>
      <Head title={"booknook | test page"} />
      <SigninPage />
    </>
  );
};

export default HomePage;
