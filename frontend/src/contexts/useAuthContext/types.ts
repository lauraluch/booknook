export interface AuthContextData {
  user: IAuthUser | null;
  loading: boolean;
  error: string | null;
  signIn: (username: string, password: string) => Promise<number>;
  signOut: () => void;
}

export interface IAuthUser {
  userId: number;
  // username: string;
}
