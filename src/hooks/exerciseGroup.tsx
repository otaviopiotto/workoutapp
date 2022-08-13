import { assign } from "lodash";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GroupType } from "../models/exercise";

interface GroupContextData {
  group: GroupType[];
  createGroup(value: GroupType): void;
  updateGroup(value: GroupType): void;
  deleteGroup(id: string | number): void;
}

export const GroupContext = createContext<GroupContextData>(
  {} as GroupContextData
);

export const GroupProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const [group, setGroup] = useState<GroupType[]>([]);

  const createGroup = (value: GroupType) => {
    localStorage.setItem(
      "user-workout-group",
      JSON.stringify([...group, value])
    );
    setGroup([...group, value]);
  };

  const deleteGroup = (id: string) => {
    const filterWorkout: any = group.filter((e) => e.id !== id);
    localStorage.setItem("user-workout-group", JSON.stringify(filterWorkout));
    setGroup(filterWorkout);
    navigate(-1);
  };

  const updateGroup = (data: GroupType) => {
    const objIndex = group.findIndex((obj: any) => obj.id == data.id);
    assign(group[objIndex], data);
  };

  useEffect(() => {
    const getUser = localStorage.getItem("user-workout-group");
    if (!getUser) return;
    setGroup(JSON.parse(getUser));
  }, []);

  return (
    <GroupContext.Provider
      value={{ group, createGroup, deleteGroup, updateGroup }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export function useGroup(): GroupContextData {
  const context = useContext(GroupContext);
  return context;
}
