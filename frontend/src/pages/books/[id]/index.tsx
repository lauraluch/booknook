import { TestPage } from "@pages/TestPage";
import Head from "src/components/toolkit/Head";

const BooksPage: React.FC = () => {
  return (
    <>
      <Head title="seus livros | booknook" />
      <TestPage />
    </>
  );
};

export default BooksPage;
