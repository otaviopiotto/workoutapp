import styled, { keyframes } from "styled-components";

export const entranceAnim = keyframes`

from{
  transform: translateX(300%);
opacity:0 ;
}

to{
  transform: translateX(0%);
  opacity:1 ;
}
`;

export const Container = styled.main`
  height: 100%;
  animation: ${entranceAnim} 0.5s ease;
  position: relative;

  .decoration-lines {
    display: grid;
    grid-template-columns: 16px 1fr 1fr 16px;
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

  .group-header {
    width: 100%;
    padding: 20px 20px 0;
    position: fixed;
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

      .edit-buttons {
        width: 50px;
        display: flex;
        gap: 20px;
        justify-content: space-between;
      }
    }
  }

  .hero-section {
    padding: 70px 16px 0;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.pallete[300]};
    display: flex;
    flex-direction: column;
    gap: 4px;

    .top-side {
      h1 {
        line-height: 1.2em;
        color: ${({ theme }) => theme.colors.pallete[50]};
      }
    }

    .bottom-side {
      margin-top: 20px;
      padding: 0 16px;
      display: flex;
      flex-direction: column;
    }

    .left-side {
      display: flex;
      gap: 2px;

      span {
        line-height: 1em;
        color: ${({ theme }) => theme.colors.pallete[300]};
        font-size: 8px !important;
        ${({ theme }) => theme.fonts.mulish.small_regular};
      }
    }

    .description {
      font-size: 10px !important;
      ${({ theme }) => theme.fonts.mulish.small_regular};
      line-height: 1.2em;
      color: ${({ theme }) => theme.colors.pallete[200]};
      -webkit-user-modify: read-write-plaintext-only;
    }
  }

  .title-section {
    margin-bottom: 20px;

    p {
      line-height: 1em;
    }
  }

  .workout-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    flex-direction: column;
    margin-top: 40px;
    padding: 0px 16px;
  }
`;

interface dayProp {
  dayOff: boolean;
}

export const DayContainer = styled.li<dayProp>`
  padding: 34px 14px;
  border: solid rgba(255, 255, 255, 0.02);
  border-width: 1px 0;

  header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    .top-side {
      display: flex;
      align-items: flex-end;
      gap: 10px;

      span {
        ${({ theme }) => theme.fonts.mulish.small_regular};
      }
    }

    h1,
    span {
      line-height: 1em;
      color: ${(prop) =>
        prop.dayOff
          ? "rgba(255,255,255,0.3) "
          : ({ theme }) => theme.colors.pallete[200]};
    }

    h1 {
      font-size: 32px;
    }

    .name {
      display: block;
      text-align: left;
      color: ${(prop) =>
        prop.dayOff
          ? "rgba(255,255,255,0.3) "
          : ({ theme }) => theme.colors.pallete[200]};

      ${({ theme }) => theme.fonts.mulish.h3_bold};
    }

    .bottom-side {
      .icon-container {
        display: flex;
        align-items: center;
        gap: 4px;
        font-size: 1em;
        ${({ theme }) => theme.fonts.mulish.small_semibold};
      }
    }
  }
  .list-container {
    padding-left: 10px;
    margin-top: 20px;
  }
`;
