import styled from "styled-components";
import { entranceAnim } from "../styles";

export const Container = styled.main`
  height: 100%;

  animation: ${entranceAnim} 0.5s ease;
  header {
    margin: 0 !important;

    .title-section {
      display: flex;
      gap: 10px;
      div {
        display: flex;
        flex-direction: column;

        h1 {
          font-size: 38px;
          line-height: 1em;
          font-family: "Roboto", sans-serif;
          font-weight: 900;
          color: ${({ theme }) => theme.colors.black[900]};
        }

        h2 {
          color: ${({ theme }) => theme.colors.black[900]};
          font-family: "Roboto", sans-serif;
          font-size: 29px;
          font-weight: 900;
        }

        span {
          margin-bottom: 4px;
        }
      }
    }

    .sub-title {
      ${({ theme }) => theme.fonts.mulish.small_semibold};
      line-height: 1em;
      color: ${({ theme }) => theme.colors.blue[600]};
    }
  }

  .list-container {
    margin: -30px 0 0;
    padding: 20px 16px 0;
    background: #000312;
    border-radius: 30px;
    box-shadow: 0px -10px 1em rgba(0, 0, 0, 0.2);
  }

  .top-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    li {
      width: 100%;
      ${({ theme }) => theme.fonts.mulish.small_bold};
      font-size: 10px;
      color: ${({ theme }) => theme.colors.grey[500]};
      text-transform: uppercase;
      & + li {
        text-align: center;
      }
    }
  }

  .bottom-section {
    display: grid;
    min-height: 80px;
    grid-template-columns: repeat(3, 1fr);
    padding: 14px 0;
    gap: 10px;

    & + ul {
      border-top: solid 1px #171a21;
    }

    li {
      width: 100%;
      display: flex;
      align-items: center;
      ${({ theme }) => theme.fonts.mulish.small_bold};
      color: ${({ theme }) => theme.colors.grey[400]};
      text-transform: uppercase;

      & + li {
        justify-content: center;
        text-align: center;
      }
    }
  }
`;
