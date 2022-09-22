import styled from "styled-components";
import { entranceAnim } from "../workOutGroupPage/styles";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${entranceAnim} 0.4s ease;

  .group-header {
    width: 100%;
    padding: 20px 20px 0;
    position: fixed;
    top: 0;
    z-index: 99;
    background-color: ${({ theme }) => theme.colors.pallete[800]};

    .get-back-section {
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;

      span {
        ${({ theme }) => theme.fonts.mulish.small_bold};
        color: ${({ theme }) => theme.colors.pallete[200]};
      }

      button {
        padding: 0;
        color: ${({ theme }) => theme.colors.pallete[200]};
        font-size: 22px;
      }
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.pallete[200]};
  }

  form {
    width: 100%;
    display: grid;
    gap: 20px;
  }
`;
