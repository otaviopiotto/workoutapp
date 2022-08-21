import styled, { keyframes } from "styled-components";

const showAnim = keyframes`

from{
opacity:0 ;
transform:scale(0) ;
}
to{
opacity:1;
transform:scale(1) ;

}
`;

export const Container = styled.main`
  padding: 20px 16px;
  height: 100%;
  position: relative;
  animation: ${showAnim} 0.4s ease;

  .group-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    h5 {
      ${({ theme }) => theme.fonts.mulish.h5_semibold};
      font-size: 32px;
      line-height: 1.2em;
      color: ${({ theme }) => theme.colors.grey[300]};
    }
  }

  .group-section {
    margin-top: 40px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        ${({ theme }) => theme.fonts.mulish.small_semibold};

        color: ${({ theme }) => theme.colors.pallete[50]};
      }

      button {
        font-size: 20px;
        padding: 0;
        color: ${({ theme }) => theme.colors.pallete[50]};
      }
    }
    .indicator {
      display: flex;
      gap: 10px;

      span {
        ${({ theme }) => theme.fonts.mulish.small_bold};
        color: ${({ theme }) => theme.colors.grey[800]};
      }
    }

    .groups {
      margin-top: 30px;
      display: grid;
      gap: 20px;
    }
  }

  footer {
    width: 100%;
    display: flex;
    justify-content: center;
    position: fixed;
    bottom: 20px;
    left: 0;

    button {
      background: rgba(217, 217, 217, 0.06);
      padding: 20px;
      color: ${({ theme }) => theme.colors.pallete[50]};

      border-radius: 99px;
    }
  }
`;

export const WorkOutList = styled.section`
  padding: 0 10px;
  .workout-header {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    animation: ${showAnim} 0.4s ease;

    & + ul {
      border-top: 1px solid ${({ theme }) => theme.colors.grey[800]};
    }
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 12px 8px;
      ${({ theme }) => theme.fonts.mulish.small_bold};
      color: ${({ theme }) => theme.colors.grey[600]};
      text-align: center;
      text-transform: uppercase;
      & + li {
        border-left: 1px solid ${({ theme }) => theme.colors.grey[800]};
      }
    }
  }
`;
