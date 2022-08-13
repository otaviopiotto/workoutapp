import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  align-items: center;
  padding: 12px 0px;
  border-radius: 10px;
  display: flex;

  .left-side {
    flex: 1;
  }

  .top-section {
    span {
      ${({ theme }) => theme.fonts.mulish.small_semibold};
      line-height: 1em;
      color: ${({ theme }) => theme.colors.grey[700]};
    }
    h1 {
      line-height: 1.4em;
      ${({ theme }) => theme.fonts.mulish.body_bold};
      color: ${({ theme }) => theme.colors.grey[400]};
    }
  }
  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.grey[400]};
    .arrow-icon {
      font-size: 18px;
    }
  }

  .bottom-section {
    margin-top: 4px;

    li {
      display: flex;
      align-items: center;
      gap: 3px;
      ${({ theme }) => theme.fonts.mulish.small_regular};
      color: ${({ theme }) => theme.colors.grey[700]};
    }
  }
`;
