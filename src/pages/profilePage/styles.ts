import styled from "styled-components";
import { showAnim } from "../main_page/styles";
import { entranceAnim } from "../workOutGroupPage/styles";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  padding: 50px 40px;
  animation: ${entranceAnim} 0.4s ease;

  header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    position: absolute;
    top: 20px;
    left: 0;
    z-index: 2;

    button {
      color: white;
      padding: 0;
    }
  }

  .user-info {
    position: relative;
    margin: -50px -40px 0;
    padding: 50px 40px;
    height: 300px;
    overflow: hidden;

    img {
      border-radius: 999px;
      box-shadow: 0 0 1em rgba(0, 0, 0, 0.3);
    }

    .background-effect {
      position: absolute;

      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 0;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0px;
        object-fit: cover;
        position: absolute;
        filter: blur(7px) brightness(50%);
      }
      &::after {
        content: "";
        background: rgb(22, 26, 29);
        background: linear-gradient(
          0deg,
          rgba(22, 26, 29, 1) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1;
      }
    }
  }

  .float-user-info {
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: flex-start;
    justify-content: flex-start;
    z-index: 1;
    p {
      ${({ theme }) => theme.fonts.mulish.small_regular};
      font-size: 9px;
      color: ${({ theme }) => theme.colors.pallete[200]};
    }
    h1 {
      line-height: 1.2em;
      font-size: 25px;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.pallete[200]};
    }
  }

  main {
    width: 100%;
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

  .edit-footer {
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
