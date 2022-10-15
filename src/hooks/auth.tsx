/* eslint-disable consistent-return */
/* eslint-disable no-alert */
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { UserType } from "../models/user";
import { api } from "../services/api";
import { getQuery } from "../services/hooks/getQuery";

interface AuthState {
  token: string;
  user: UserType;
}

export interface AuthContextData {
  signed: boolean;
  loading: boolean;
  user: UserType;
  token: string;
  signIn(username: string, password: string): Promise<void>;
  signOut(): void;
  updateProfile(user: Partial<UserType>): void;
  refreshProfile(): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider = ({ children }: any) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("workoutapp/token");
    const user: UserType = JSON.parse(
      localStorage.getItem("workoutapp/user") as string
    );

    if (user && token) {
      (api as any).defaults.headers.Authorization = `Bearer ${token}`;
      return { token, user };
    }

    return {} as AuthState;
  });

  const [loading, setLoading] = useState(false);

  const signIn = async (username: string, password: string) => {
    try {
      setLoading(true);

      const response = await api.post("/user/login", {
        username,
        password,
      });

      setLoading(false);
      const { user, token } = response.data;

      localStorage.setItem("workoutapp/token", token);
      localStorage.setItem("workoutapp/user", JSON.stringify(user));
      (api as any).defaults.headers.Authorization = `Bearer ${token}`;
      setData(response.data);
    } catch (error: any) {
      setLoading(false);
      toast.error(
        error?.response?.data?.message || "Não foi possível efetuar o login"
      );
    }
  };

  const signOut = () => {
    localStorage.removeItem("workoutapp/token");
    localStorage.removeItem("workoutapp/user");
    delete (api as any).defaults.headers.Authorization;
    if (!data?.user || !data?.token) return;
    toast.info("Logout efetuado com sucesso!");
    setData({} as AuthState);
  };

  const updateProfile = (user: Partial<UserType>) => {
    const newUserData = { ...data.user, ...user };
    setData((oldData) => ({ ...oldData, user: newUserData }));
  };

  const { data: profileData, refetch } = getQuery(
    `user/${data?.user?._id}`,
    ["user", data?.user?._id],
    {
      enabled: false,
    }
  );

  const refreshProfile = () => {
    refetch();
    if (profileData) {
      setData((old) => ({ ...old, user: profileData }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        signed: !!data?.user,
        loading,
        user: data.user,
        token: data.token,
        signIn,
        signOut,
        updateProfile,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  return context;
}
