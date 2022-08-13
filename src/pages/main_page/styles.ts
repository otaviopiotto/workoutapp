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
  padding: 20px 30px;
  height: 100%;
  position: relative;
  animation: ${showAnim} 0.4s ease;

  .group-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    h5 {
      ${({ theme }) => theme.fonts.mulish.h5_bold};

      line-height: 1.2em;
      color: ${({ theme }) => theme.colors.grey[300]};
    }

    button {
      padding: 0px;
      border-radius: 99px;
      color: ${({ theme }) => theme.colors.blue[100]};
    }
  }

  .group-section {
    margin-top: 20px;
    .indicator {
      display: flex;
      gap: 10px;

      span {
        ${({ theme }) => theme.fonts.mulish.small_bold};
        color: ${({ theme }) => theme.colors.grey[800]};
      }
    }

    .groups {
      margin-top: 10px;
      display: grid;
      gap: 20px;
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
