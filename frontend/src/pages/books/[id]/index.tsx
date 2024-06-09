import { useAuthContext } from "@contexts/useAuthContext";
import { TestPage } from "@pages/TestPage";
import { Unauthorized } from "@pages/Unauthorized";
import { checkCurrentUser } from "@utils/auth/checkCurrentUser";
import { useRouter } from "next/router";
import Head from "src/components/toolkit/Head";

const BooksPage: React.FC = () => {
  const { user } = useAuthContext();
  const { query } = useRouter();
  const isAuthorized = checkCurrentUser(String(query?.id), user?.userId);

  return (
    <>
      <Head title="seus livros | booknook" />
      {isAuthorized ? <TestPage /> : <Unauthorized />}
    </>
  );
};

export default BooksPage;
