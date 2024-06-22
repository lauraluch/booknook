import { BookDetails } from "@pages/BookDetails";
import { Notes } from "@pages/Notes";
import { Signup } from "@pages/Signup";
import React from "react";
import Head from "src/components/toolkit/Head";

const HomePage: React.FC = () => {
  return (
    <>
      <Head title={"booknook | notas do livro"} />
      <Notes />
    </>
  );
};

export default HomePage;
