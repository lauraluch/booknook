import { BookDetails } from "@pages/BookDetails";
import { Signup } from "@pages/Signup";
import React from "react";
import Head from "src/components/toolkit/Head";

const HomePage: React.FC = () => {
  return (
    <>
      <Head title={"booknook | detalhes do livro"} />
      <BookDetails />
    </>
  );
};

export default HomePage;
