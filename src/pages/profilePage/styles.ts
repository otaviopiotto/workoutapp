import styled from "styled-components";
import { showAnim } from "../main_page/styles";
import { entranceAnim } from "../workOutGroupPage/styles";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 50px 40px;
  animation: ${entranceAnim} 0.4s ease;

  .user-info {
    p {
      ${({ theme }) => theme.fonts.mulish.small_regular};

      color: ${({ theme }) => theme.colors.pallete[200]};
    }
    h1 {
      line-height: 1.2em;
      font-size: 43px;
      color: ${({ theme }) => theme.colors.pallete[200]};
    }
  }

  main {
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${showAnim} 0.4s ease;

    form {
      width: 100%;
      display: grid;
      gap: 20px;
    }
  }

  footer {
    padding: 20px 30px 0;
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    z-index: 99;
    border-radius: 99px;
    background-color: rgba(12, 14, 15, 0.5);
    backdrop-filter: blur(2px);

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

      .edit-buttons {
        width: 50px;
        display: flex;
        gap: 20px;
        justify-content: space-between;
      }
    }
    &.edit-footer {
      padding: 0;

      .get-back-section {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0px;
      }
      button {
        padding: 16px 30px;
        border-radius: 99px;
        color: ${({ theme }) => theme.colors.pallete[200]};
        font-size: 14px;

        &:nth-child(2) {
          width: 50%;
        }
      }
    }
  }
`;
