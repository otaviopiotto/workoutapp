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

  .group-header {
    width: 100%;
    padding: 20px 20px 0;
    position: absolute;

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
        font-size: 18px;
      }

      .edit-buttons {
        width: 50px;
        display: flex;
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

    .left-side {
      display: flex;
      gap: 10px;

      span {
        ${({ theme }) => theme.fonts.mulish.small_regular};
      }
    }

    .description {
      padding: 0 26px;
      line-break: anywhere;

      ${({ theme }) => theme.fonts.mulish.small_regular};
      line-height: 1.2em;
      color: ${({ theme }) => theme.colors.pallete[200]};
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
    /* grid-template-columns: repeat(2, 1fr); */
    flex-direction: column;
    margin-top: 40px;
    padding: 0px 16px;
    gap: 8px;
  }
`;

export const DayContainer = styled.li`
  padding: 14px 10px;
  background-color: ${({ theme }) => theme.colors.pallete[300]};
  border-radius: 12px;

  header {
    display: flex;
    gap: 10px;
    align-items: flex-start;

    h1,
    span {
      line-height: 1em;
      color: ${({ theme }) => theme.colors.grey[900]};
    }

    h1 {
      font-size: 32px;
    }

    .name {
      text-align: left;
      color: ${({ theme }) => theme.colors.grey[900]};
      ${({ theme }) => theme.fonts.mulish.h3_bold};
    }

    .right-side {
      height: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 6px;
      align-items: flex-start;

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

  .top-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    li {
      width: 100%;
      ${({ theme }) => theme.fonts.mulish.small_bold};
      font-size: 10px;
      color: ${({ theme }) => theme.colors.grey[800]};
      text-transform: uppercase;
      & + li {
        text-align: center;
      }
    }
  }

  .bottom-section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    li {
      width: 100%;
      padding: 10px 0;
      ${({ theme }) => theme.fonts.mulish.small_regular};
      color: ${({ theme }) => theme.colors.grey[700]};
      text-transform: uppercase;
      & + li {
        text-align: center;
      }
    }
  }
`;
