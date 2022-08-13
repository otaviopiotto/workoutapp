import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { UserProvider } from "./hooks/exerciseData";
import { GroupProvider } from "./hooks/exerciseGroup";
import RoutesConfig from "./routes/route";
import GlobalStyle, { theme } from "./styles/globalStyle";

function App() {
  return (
    <BrowserRouter>
      <GroupProvider>
        <UserProvider>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RoutesConfig />
          </ThemeProvider>
        </UserProvider>
      </GroupProvider>
    </BrowserRouter>
  );
}

export default App;
