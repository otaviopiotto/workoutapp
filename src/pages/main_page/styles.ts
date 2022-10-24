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
}
to{
opacity:1;

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
  padding: 20px 16px 130px;

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
    img {
      width: 35px;
      height: 35px;
      object-fit: cover;
      border-radius: 99px;
      margin-right: 4px;
    }
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
      margin-top: 30px;
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
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 20px 0px;
    position: fixed;
    bottom: 20px;
    left: 20px;
    right: 20px;
    z-index: 99;
    border-radius: 99px;
    background-color: rgba(12, 14, 15, 0.5);
    backdrop-filter: blur(2px);

    button,
    a {
      text-align: center;
      border-radius: 90px;
      padding: 0px;
      color: ${({ theme }) => theme.colors.white};
      ${({ theme }) => theme.fonts.mulish.body_regular};
      font-size: 22px;
      position: relative;
    }

    .active-nav-link {
      color: ${({ theme }) => theme.colors.blue[600]};

      &::after {
        content: "";
        width: 4px;
        height: 4px;
        border-radius: 90px;
        background-color: ${({ theme }) => theme.colors.blue[600]};
        position: absolute;
        bottom: -6px;
        left: 50%;
        transform: translateX(-50%);
      }
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
