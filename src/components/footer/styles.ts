import styled, { keyframes, css } from "styled-components";

export const Container = styled.footer`
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
`;
