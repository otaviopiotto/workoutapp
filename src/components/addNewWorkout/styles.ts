import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  input {
    width: 100%;
    border: solid 1px ${({ theme }) => theme.colors.grey[800]};
    padding: 8px 6px;
    border-radius: 8px;
    color: ${({ theme }) => theme.colors.grey[700]};
    ${({ theme }) => theme.fonts.mulish.small_regular};

    &:focus {
      background: ${({ theme }) => theme.colors.grey[900]};
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
`;
