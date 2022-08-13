import { createContext, useContext, useEffect, useState } from "react";
import { exerciseType } from "../models/exercise";

interface UserContextData {
  exercise: exerciseType[];
  updateUser(value: exerciseType): void;
}

export const UserContext = createContext<UserContextData>(
  {} as UserContextData
);

export const UserProvider = ({ children }: any) => {
  const [exercise, setUser] = useState<exerciseType[]>([]);

  const updateUser = (value: exerciseType) => {
    localStorage.setItem("user-workout", JSON.stringify([...exercise, value]));
    setUser([...exercise, value]);
  };

  useEffect(() => {
    const getUser = localStorage.getItem("user-workout");
    if (!getUser) return;
    setUser(JSON.parse(getUser));
  }, []);

  return (
    <UserContext.Provider value={{ exercise, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export function useExercise(): UserContextData {
  const context = useContext(UserContext);
  return context;
}
