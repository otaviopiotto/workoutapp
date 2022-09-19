import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "./hooks/exerciseData";
import { GroupProvider } from "./hooks/exerciseGroup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RoutesConfig from "./routes/route";
import GlobalStyle, { theme } from "./styles/globalStyle";
import { AuthProvider } from "./hooks/auth";
const queryClient = new QueryClient();

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <GroupProvider>
          <UserProvider>
            <QueryClientProvider client={queryClient}>
              <ThemeProvider theme={theme}>
                <ToastContainer />
                <GlobalStyle />
                <RoutesConfig />
              </ThemeProvider>
            </QueryClientProvider>
          </UserProvider>
        </GroupProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
