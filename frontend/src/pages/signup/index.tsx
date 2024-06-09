import { Signup } from "@pages/Signup";
import React from "react";
import Head from "src/components/toolkit/Head";

const HomePage: React.FC = () => {
  return (
    <>
      <Head title={"booknook | criar conta"} />
      <Signup />
    </>
  );
};

export default HomePage;
