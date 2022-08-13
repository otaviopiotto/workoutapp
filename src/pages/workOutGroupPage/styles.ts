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
    padding: 26px 16px 58px;
    background-color: ${({ theme }) => theme.colors.blue[400]};
    .description {
      line-break: anywhere;

      ${({ theme }) => theme.fonts.mulish.small_regular};

      line-height: 1.2em;
      color: ${({ theme }) => theme.colors.black[800]};
    }
  }

  .title-section {
    margin-bottom: 20px;

    span {
      ${({ theme }) => theme.fonts.mulish.small_bold};

      line-height: 1em;
      color: ${({ theme }) => theme.colors.blue[600]};
    }

    h1 {
      line-height: 1em;
      font-size: 32px;
      font-weight: 900;
      color: ${({ theme }) => theme.colors.black[900]};
    }
  }
  .get-back-section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    .edit-buttons {
      display: flex;
      gap: 20px;
    }
  }

  .workout-list {
    display: flex;
    flex-direction: column;
    margin: -26px 0 0;
    padding: 20px 16px 0;
    background: #000312;
    border-radius: 30px;
    box-shadow: 0px -10px 1em rgba(0, 0, 0, 0.2);
  }
`;

export const DayContainer = styled.li`
  padding: 20px 8px;

  & + li {
    border-top: solid 1px #171a21;
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
