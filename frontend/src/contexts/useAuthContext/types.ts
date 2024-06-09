export interface AuthContextData {
  user: IAuthUser | null;
  loading: boolean;
  error: string | null;
  signIn: (username: string, password: string) => Promise<void>;
  signOut: () => void;
}

export interface IAuthUser {
  userId: number;
  // username: string;
}

export interface ISigninResponse {
  userId: number;
  token: string;
}
