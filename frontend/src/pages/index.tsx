import { SigninPage } from "@pages/Signin/SigninPage";
import React from "react";
import Head from "src/components/toolkit/Head";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

const HomePage: React.FC = () => {
  const token = Cookies.get("token");

  console.log(jwt.decode(token));

  return (
    <>
      <Head title={"booknook | entrar"} />
      <SigninPage />
    </>
  );
};

export default HomePage;
