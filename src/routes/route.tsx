import { Route, Routes, Navigate } from "react-router-dom";
import AddNewWorkOutGroup from "../components/addNewWorkoutGroup";
import MainPage from "../pages/main_page";
import WorkOutPage from "../pages/workOutGroupPage";
import WorkOutInnerPage from "../pages/workOutGroupPage/workoutInnerPage";

const RoutesConfig = () => {
  return <UserRoute />;
};

const UserRoute = () => (
  <Routes>
    <Route path="/" element={<MainPage />} />
    <Route path="/novo-grupo" element={<AddNewWorkOutGroup />} />
    <Route path="treino/:id" element={<WorkOutPage />}>
      <Route path=":workout" element={<WorkOutInnerPage />} />
    </Route>
    <Route path="*" element={<Navigate replace to="/" />} />
  </Routes>
);

export default RoutesConfig;
