import styled from "styled-components";
import { entranceAnim } from "../workOutGroupPage/styles";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 50px 40px;
  display: flex;

  header {
    width: 100%;
    padding: 20px 20px 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
    background-color: ${({ theme }) => theme.colors.pallete[800]};

    button {
      color: ${({ theme }) => theme.colors.pallete[300]};
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.pallete[200]};
  }
`;
