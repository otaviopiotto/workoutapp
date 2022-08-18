import styled, { keyframes } from "styled-components";

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
export const Container = styled.li`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 20px;
  animation: 0.3s ${entranceAnimation} ease;
  background-color: ${({ theme }) => theme.colors.pallete[800]};
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.2);
  padding: 12px 10px;
  border-radius: 14px;
  transform-origin: top;
  gap: 14px;
  column-gap: 20px;
  scroll-snap-align: 10px;

  .set-count {
    width: 100%;
    height: -webkit-fill-available;
    display: flex;
    border: solid 1px ${({ theme }) => theme.colors.grey[800]};
    align-items: center;
    overflow: hidden;
    border-radius: 8px;
    input {
      flex: 1 !important;
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

    &:nth-child(2) {
      flex: 0.5;
    }
    &:nth-child(3) {
      flex: 0.2;
    }
    &:nth-child(4) {
      flex: 0.3;
    }
  }

  .delete-button {
    border-radius: 0px !important;
    grid-row-start: 1;
    grid-column-start: 3;
    grid-row-end: 3;
  }
`;
