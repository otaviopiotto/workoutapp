import styled, { css, keyframes } from "styled-components";
import { entranceAnim } from "../../pages/workOutGroupPage/styles";

export const Container = styled.main`
  min-height: 100%;
  padding: 14px 20px 160px;
  animation: ${entranceAnim} 0.5s ease;
  position: relative;
  transition: 0.3s;

  .get-back-btn {
    margin-bottom: 20px;
  }

  .workout-list {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .add-days-section {
    margin-top: 14px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;

    .grid-container {
      display: flex;
      flex-direction: column;
      position: relative;
    }

    .add-new-day {
      border: 0;
      padding: 20px 0;
      margin-top: 10px;
      background: rgba(92, 92, 92, 0.2);
      ${({ theme }) => theme.fonts.mulish.body_regular};
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

    button {
      border-radius: 90px;
      padding: 0px;
      color: ${({ theme }) => theme.colors.white};
      ${({ theme }) => theme.fonts.mulish.body_regular};
      font-size: 22px;
    }
  }
`;

export const Form = styled.form`
  max-width: 600px;
  display: grid;
  gap: 28px;
  margin-top: 10px;
`;

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

export const CardContainer = styled.li<containerAnim>`
  transform-origin: top;
  background-color: #1a1e21;
  animation: 0.3s ${entranceAnimation} ease;
  border-radius: 14px;
  padding: 20px 12px 10px;

  ${(prop) => {
    if (prop.deleteAnim) {
      return css`
        animation: 0.2s ${deleteAnim} ease;
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
    border: solid 1px #2a2f33;
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    input {
      flex: 0.6 !important;
      border-radius: 0px;
      border: solid 1px #2a2f33;
      border-width: 0 1px;
      text-align: center;
      color: ${({ theme }) => theme.colors.grey[400]};
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
    border: solid 1px #2a2f33;
    padding: 4px 6px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.grey[400]};
    font-size: 20px;

    ${({ theme }) => theme.fonts.mulish.body_regular};

    &:focus {
      outline: solid 1px ${({ theme }) => theme.colors.grey[800]};
      background-color: ${({ theme }) => theme.colors.pallete[800]};
    }
  }

  .exercise-input {
    border: 0;
    font-size: 22px;
  }

  .delete-button {
    border-radius: 0px !important;
    grid-column: span 3;
  }
`;
