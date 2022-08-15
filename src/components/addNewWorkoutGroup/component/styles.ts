import styled, { keyframes } from "styled-components";

const entranceAnimation = keyframes`

from{
  transform:translateX(100vw) ;
}
to{
  transform:translateX(0vw) ;
}
`;

interface props {
  hold?: boolean;
}

export const DayContainer = styled.div<props>`
  display: flex;
  border-radius: 16px;
  position: relative;
  border: solid 1px rgba(82, 82, 82, 0.5);
  margin-top: 10px;
  transform: ${(prop) => prop.hold && "scale(1.01)"};
  animation: 0.5s ${entranceAnimation} ease;
  background-color: ${({ theme }) => theme.colors.pallete[800]};
  transition: 0.3s;

  .days-container {
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: flex-start;

    position: relative;
    padding: 16px 12px;

    .exercise-list {
      width: 100%;
      display: flex;
      justify-content: flex-start;
      gap: 10px;
    }

    .left-side {
      height: 100%;
      flex: 1;
      display: flex;
      align-items: flex-start;

      .day-container {
        height: 100%;
        h1 {
          text-align: left;
          ${({ theme }) => theme.fonts.mulish.h1_bold};
          font-size: 42px;
          color: ${({ theme }) => theme.colors.grey[600]};
        }
      }

      .exercise-list {
        display: flex;
        flex-direction: column;
        padding-left: 30px;

        .top-side {
          display: flex;
          justify-content: space-between;
          h3 {
            text-align: left;
            ${({ theme }) => theme.fonts.mulish.body_bold};
            color: ${({ theme }) => theme.colors.grey[600]};
          }
        }

        li {
          text-align: left;

          ${({ theme }) => theme.fonts.mulish.small_regular};
          color: ${({ theme }) => theme.colors.grey[600]};
        }
      }

      .exercise-bottom {
        .list-header {
          li {
            color: ${({ theme }) => theme.colors.grey[700]};
          }
        }
        ul {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
        }
      }
    }
  }

  .right-side {
    padding: 10px 0;
    display: grid;
    button {
      padding: 6px 4px;
      border-radius: 0px;

      & + button {
        padding-top: 10px;
        border-top: solid 1px rgba(82, 82, 82, 0.5);
      }
    }
  }
`;

export const ExerciseContainer = styled.div`
  .add-exercise-section {
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    .add-new {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 0px;
    }
  }
  .list-header {
    margin-top: 20px;
    li {
      ${({ theme }) => theme.fonts.mulish.small_regular};

      color: ${({ theme }) => theme.colors.grey[700]};

      &:nth-child(1) {
        flex: 0.45;
      }
      &:nth-child(2) {
        flex: 0.2;
      }
      &:nth-child(3) {
        flex: 0.3;
      }
    }
  }
`;
