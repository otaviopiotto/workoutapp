import styled, { css } from "styled-components";
import { entranceAnim } from "../styles";

interface containerProps {
  focus: boolean;
}

export const Container = styled.main`
  height: 100%;
  animation: ${entranceAnim} 0.5s ease;

  .inner-hero-section {
    padding: 70px 16px 0;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.pallete[300]};
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: relative;

    .title-section {
      display: flex;
      flex-direction: column;

      h2 {
        color: ${({ theme }) => theme.colors.pallete[200]};
        font-size: 29px;
        font-weight: 700;
        max-width: 280px;
      }

      .top-side {
        display: flex;
        gap: 10px;

        span {
          ${({ theme }) => theme.fonts.mulish.small_semibold};
          color: ${({ theme }) => theme.colors.pallete[200]};
        }
      }
    }

    .decoration-number {
      position: absolute;
      right: 20px;
      bottom: 20px;
      font-size: 70px;
      color: rgba(255, 255, 255, 0.14);
    }
  }

  .list-container {
    padding: 20px 16px 0;
    margin: 0 -20px;
  }
`;

export const Button = styled.button<containerProps>`
  width: 100%;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  grid-template-columns: repeat(3, 1fr);
  padding: 34px 40px;
  border: solid rgba(255, 255, 255, 0.02);
  border-width: 1px 0;
  transition: 0.3s;
  -webkit-tap-highlight-color: transparent;
  ${(prop) => {
    if (prop.focus) {
      return css`
        width: 94%;
        margin: 10px auto;
        border-radius: 20px;
        padding: 34px 20px;
        border: 0;
        background-color: ${({ theme }) => theme.colors.pallete[800]};
        box-shadow: 0 0 1em rgba(0, 0, 0, 0.4), 0 10px 1em rgba(0, 0, 0, 0.4);
      `;
    }
  }}

  h5 {
    ${({ theme }) => theme.fonts.mulish.body_bold};
    color: ${({ theme }) => theme.colors.pallete[200]};
  }

  p {
    ${({ theme }) => theme.fonts.mulish.small_regular};
    color: ${({ theme }) => theme.colors.pallete[200]};
  }

  ul {
    display: flex;
    gap: 20px;
    margin-top: 10px;

    li {
      display: flex;
      align-items: center;
      gap: 4px;
      color: ${({ theme }) => theme.colors.pallete[200]};
      font-size: 14px;

      span {
        ${({ theme }) => theme.fonts.mulish.small_semibold};
        color: ${({ theme }) => theme.colors.pallete[200]};
      }
    }
  }
`;
