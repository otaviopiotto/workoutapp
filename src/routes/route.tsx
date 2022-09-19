import { Route, Routes, Navigate } from "react-router-dom";
import AddNewWorkOutGroup from "../components/addNewWorkoutGroup";
import { useAuth } from "../hooks/auth";
import LoginPage from "../pages/loginPage";
import MainPage from "../pages/main_page";
import WorkOutPage from "../pages/workOutGroupPage";
import WorkOutInnerPage from "../pages/workOutGroupPage/workoutInnerPage";

const RoutesConfig = () => {
  const { signed } = useAuth();
  if (signed) return <UserRoute />;
  return <AuthRoute />;
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

const AuthRoute = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="*" element={<Navigate replace to="/login" />} />
  </Routes>
);

export default RoutesConfig;
