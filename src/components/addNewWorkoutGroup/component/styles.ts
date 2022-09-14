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
  margin-top: 10px;
  transform: ${(prop) => prop.hold && "scale(1.01)"};
  animation: 0.5s ${entranceAnimation} ease;
  background-color: #0a1111;
  transition: 0.3s;

  .days-container {
    width: 100%;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    overflow-x: hidden;
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
          color: ${({ theme }) => theme.colors.pallete[200]};
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
            color: ${({ theme }) => theme.colors.pallete[200]};
          }
        }

        li {
          text-align: left;

          ${({ theme }) => theme.fonts.mulish.small_regular};
          color: ${({ theme }) => theme.colors.pallete[200]};
        }
      }

      .exercise-bottom {
        .list-header {
          margin-bottom: 6px;
          li {
            color: ${({ theme }) => theme.colors.grey[700]};
            padding: 0 2px;
          }
        }
        ul {
          display: grid;
          grid-template-columns: 0.9fr 30px 30px 30px;
          gap: 10px;
          li {
            color: ${({ theme }) => theme.colors.grey[500]};
            font-size: 10px;
            line-height: 1.2em;
            padding: 0 2px;

            &:nth-child(1) {
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
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
    }
  }
`;

export const ExerciseContainer = styled.div`
  height: calc(100vh - 180px);
  .add-exercise-section {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 30px;

    .add-new {
      max-height: min-content;
      padding: 8px;
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-top: 20px;

      &::-webkit-scrollbar {
        visibility: hidden;
      }

      &::-webkit-scrollbar-track {
        visibility: hidden;
      }

      &::-webkit-scrollbar-thumb {
        visibility: hidden;
      }
    }

    .add-new-exercise {
      border-radius: 99px;
      padding: 60px;
      margin: 20px auto 0;
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

  .modal-footer {
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: sticky;
    bottom: 0px;
    left: 4px;
    right: 4px;
    justify-content: space-between;
    background: ${({ theme }) => theme.colors.pallete[800]};

    button {
      border-radius: 10px;
      padding: 10px 20px;
      color: ${({ theme }) => theme.colors.white};
      flex: 1;
    }
  }
`;
