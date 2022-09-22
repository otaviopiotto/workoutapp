import styled from "styled-components";
import { entranceAnim } from "../workOutGroupPage/styles";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 20px 40px;
  display: flex;
  align-items: center;

  animation: ${entranceAnim} 0.4s ease;
  form {
    width: 100%;
    display: grid;
    gap: 20px;
  }

  .account-missing {
    p {
      color: ${({ theme }) => theme.colors.grey[700]};
      ${({ theme }) => theme.fonts.mulish.body_regular};
    }
    a {
      color: ${({ theme }) => theme.colors.grey[700]};
    }
  }
`;
