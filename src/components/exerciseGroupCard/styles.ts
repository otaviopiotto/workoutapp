import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  align-items: center;
  padding: 12px 20px;
  border-radius: 12px;
  display: flex;
  background-color: ${({ theme }) => theme.colors.pallete[300]};

  .left-side {
    flex: 1;
  }

  .top-section {
    span {
      ${({ theme }) => theme.fonts.mulish.small_semibold};
      line-height: 1em;
      color: ${({ theme }) => theme.colors.pallete[900]};
    }
    h1 {
      line-height: 1em;
      ${({ theme }) => theme.fonts.mulish.h5_bold};
      color: ${({ theme }) => theme.colors.pallete[900]};
    }
  }
  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.pallete[900]};
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
      ${({ theme }) => theme.fonts.mulish.small_bold};
      color: ${({ theme }) => theme.colors.pallete[900]};
    }
  }
`;
