import styled from "styled-components";
import { entranceAnim } from "../styles";

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

    .bottom-section {
      min-height: 80px;
      display: flex;
      flex-direction: column;
      grid-template-columns: repeat(3, 1fr);
      padding: 34px 40px;
      margin: 0 -20px;
      border: solid rgba(255, 255, 255, 0.02);
      border-width: 1px 0;

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
    }
  }
`;
