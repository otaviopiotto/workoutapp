import styled from "styled-components";
import { entranceAnim } from "../../pages/workOutGroupPage/styles";

export const Container = styled.main`
  padding: 14px 20px 160px;
  animation: ${entranceAnim} 0.5s ease;
  position: relative;
  transition: 0.3s;

  .get-back-btn {
    margin-bottom: 20px;
  }

  .workout-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .add-days-section {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;

    .grid-container {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .add-new-day {
      border: 0;
      padding: 20px 0;
      margin-top: 10px;
      background: rgba(92, 92, 92, 0.2);
      ${({ theme }) => theme.fonts.mulish.body_regular};
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    padding: 0 20px;
    justify-content: space-between;
    button {
      border-radius: 99px;
      padding: 10px 20px;
      color: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const Form = styled.form`
  max-width: 600px;
  display: grid;
  gap: 28px;
  margin-top: 30px;
`;
