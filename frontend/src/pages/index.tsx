import React from "react";
import Head from "src/components/toolkit/Head";
import { withAuthentication } from "@hooks/withAuthentication";
import { Books } from "@pages/Books";

const HomePage: React.FC = () => {
  return withAuthentication(
    <>
      <Head title={"booknook | livros"} />
      <Books />
    </>
  );
};

export default HomePage;
