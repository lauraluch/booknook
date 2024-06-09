/* eslint-disable react-hooks/rules-of-hooks */
import { useAuthContext } from "@contexts/useAuthContext";
import { SigninPage } from "@pages/Signin/SigninPage";

export const withAuthentication = (Component: JSX.Element): JSX.Element => {
  const { user } = useAuthContext();

  if (!user) return null;
  else if (user.userId === -1) return <SigninPage />;
  else return Component;
};
