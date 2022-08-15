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
      padding-left: 26px;
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
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
  }
`;

export const DayContainer = styled.li`
  padding: 20px 0px;

  & + li {
    border-top: solid 1px ${({ theme }) => theme.colors.pallete[300]};
  }

  header {
    display: flex;
    gap: 10px;
    align-items: flex-end;

    h1,
    span {
      ${({ theme }) => theme.fonts.mulish.h1};
      font-size: 32px;
      line-height: 1em;
      color: ${({ theme }) => theme.colors.grey[400]};
    }

    span {
      color: ${({ theme }) => theme.colors.grey[600]};
      ${({ theme }) => theme.fonts.mulish.body_bold};
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
