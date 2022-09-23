import styled, { keyframes, css } from "styled-components";

const skeletonLoading = keyframes`
 to {
    background-position-x: -20%;
  }
`;

export const skeletonAnim = css`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 900;
  font-size: 32px;
  background-color: #0b0d0f;
  background: linear-gradient(
      100deg,
      rgba(22, 26, 29, 0) 10%,
      rgba(22, 26, 29, 0.5) 50%,
      rgba(22, 26, 29, 0) 70%
    )
    #0b0d0f;
  background-size: 200% 100%;
  background-position-x: 180%;
  border-radius: 10px;
  animation: ${skeletonLoading} 1s infinite;
`;

export const showAnim = keyframes`

from{
opacity:0 ;
transform:scale(0) ;
}
to{
opacity:1;
transform:scale(1) ;

}
`;

const refresh = keyframes`

from{
transform:rotate(0deg) ;
}
to{
  transform:rotate(-360deg) ;

}
`;

export const Container = styled.main`
  padding: 20px 16px;
  height: 100%;
  position: relative;
  animation: ${showAnim} 0.4s ease;

  .skeleton-loader {
    width: 100%;
    height: 90px;
    border-radius: 10px;
    animation: ${showAnim} 0.4s ease;
    position: relative;
    &:after {
      ${skeletonAnim};
    }
  }

  .fetching {
    animation: ${refresh} 0.6s ease infinite;
  }

  .perfil-button {
    color: ${({ theme }) => theme.colors.grey[400]};
  }

  .group-header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-top: 20px;

    p {
      ${({ theme }) => theme.fonts.mulish.body_regular};
      color: ${({ theme }) => theme.colors.grey[300]};
    }

    h5 {
      margin-top: 60px;
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
