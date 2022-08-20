import styled, { css, keyframes } from "styled-components";

const entranceAnimation = keyframes`
from{
    transform:scaleY(0) ;
    opacity:0.6;    
  }
  to{    
    transform:scaleY(1) ;
    opacity:1;
}
`;
const deleteAnim = keyframes`
  from{    
    transform:scaleY(1) ;
    opacity:1;
}
to{
  
  transform:scaleY(0) ;
  opacity:0;    
  }
`;

interface containerAnim {
  deleteAnim?: boolean;
}

export const Container = styled.li<containerAnim>`
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.4);
  transform-origin: top;
  background-color: ${({ theme }) => theme.colors.pallete[800]};
  animation: 0.3s ${entranceAnimation} ease;
  border-radius: 14px;
  padding: 10px 12px;

  ${(prop) => {
    if (prop.deleteAnim) {
      return css`
        animation: 0.6s ${deleteAnim} ease;
      `;
    } else {
      return css`
        animation: 0.3s ${entranceAnimation} ease;
      `;
    }
  }}

  .input-section {
    display: grid;
    border-radius: 14px;
    backdrop-filter: blur(10px);
    align-items: center;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    column-gap: 8px;
    scroll-snap-type: x proximity;
  }

  .set-count {
    width: 100%;
    height: 34px;
    display: flex;
    border: solid 1px ${({ theme }) => theme.colors.grey[800]};
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    input {
      flex: 0.6 !important;
      border-radius: 0px;
      border: solid ${({ theme }) => theme.colors.grey[800]};
      border-width: 0 1px;
      text-align: center;
    }

    button {
      height: 100%;
      flex: 0.4;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${({ theme }) => theme.colors.grey[600]};
    }
  }

  .input-container {
    label {
      display: block;
      color: ${({ theme }) => theme.colors.grey[700]};
      ${({ theme }) => theme.fonts.mulish.small_regular};
      margin-bottom: 6px;
    }
  }

  input {
    width: 100%;
    border: solid 1px ${({ theme }) => theme.colors.grey[800]};
    padding: 4px 6px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.grey[400]};
    font-size: 14px !important;
    ${({ theme }) => theme.fonts.mulish.body_regular};

    &:focus {
      outline: solid 1px ${({ theme }) => theme.colors.grey[800]};
      background-color: ${({ theme }) => theme.colors.pallete[800]};
    }
  }

  .delete-button {
    border-radius: 0px !important;
    grid-column: span 3;
    /* grid-row-start: 1;
    grid-column-start: 3;
    grid-row-end: 4; */
  }
`;
