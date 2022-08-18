import styled from "styled-components";
import { entranceAnim } from "../styles";

export const Container = styled.main`
  height: 100%;
  animation: ${entranceAnim} 0.5s ease;

  .decoration-lines {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    pointer-events: none;

    span {
      width: 2px;
      height: 100%;
      display: block;
      margin-left: auto;
      background-color: rgba(255, 255, 255, 0.02);
    }
  }

  .hero-section {
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
          color: ${({ theme }) => theme.colors.pallete[200]};
        }

        h2 {
          color: ${({ theme }) => theme.colors.pallete[200]};
          font-family: "Roboto", sans-serif;
          font-size: 29px;
          font-weight: 900;
        }

        span {
          margin-bottom: 4px;
        }
      }

      .right-side {
        align-self: flex-end;
      }
    }

    .sub-title {
      ${({ theme }) => theme.fonts.mulish.small_semibold};
      line-height: 1em;
      color: ${({ theme }) => theme.colors.pallete[300]};
    }
  }

  .list-container {
    padding: 20px 16px 0;
  }

  .top-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    li {
      width: 100%;
      ${({ theme }) => theme.fonts.mulish.small_bold};
      font-size: 10px;
      color: ${({ theme }) => theme.colors.pallete[300]};
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
      border-top: solid 1px ${({ theme }) => theme.colors.pallete[200]};
    }

    li {
      width: 100%;
      display: flex;
      align-items: center;
      ${({ theme }) => theme.fonts.mulish.small_bold};
      color: ${({ theme }) => theme.colors.pallete[200]};

      text-transform: uppercase;

      & + li {
        justify-content: center;
        text-align: center;
      }
    }
  }
`;
