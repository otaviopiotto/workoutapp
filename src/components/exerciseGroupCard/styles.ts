import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  align-items: center;
  padding: 12px 0px;
  border-radius: 12px;
  flex-direction: row;
  display: flex;

  .left-side {
    flex: 1;
    display: flex;
    gap: 12px;

    .sideways {
      text-orientation: sideways-right;
      writing-mode: vertical-lr;
      text-align: right;
      padding-bottom: 6px;
      transform: rotate(180deg);
      ${({ theme }) => theme.fonts.mulish.small_semibold};
      line-height: 1em;
      color: ${({ theme }) => theme.colors.pallete[300]};
    }
  }

  .top-section {
    display: block;
    span {
      ${({ theme }) => theme.fonts.mulish.small_semibold};
      line-height: 1em;
      color: ${({ theme }) => theme.colors.pallete[200]};
    }
    h1 {
      line-height: 1em;
      ${({ theme }) => theme.fonts.mulish.h5_bold};
      color: ${({ theme }) => theme.colors.pallete[200]};
    }
  }
  .arrow {
    display: flex;
    align-items: center;
    justify-content: center;

    color: ${({ theme }) => theme.colors.pallete[200]};
    .arrow-icon {
      font-size: 18px;
    }
  }

  .bottom-section {
    display: block;
    margin-top: 4px;

    li {
      display: flex;
      align-items: center;
      gap: 3px;
      ${({ theme }) => theme.fonts.mulish.small_regular};
      color: ${({ theme }) => theme.colors.pallete[200]};
    }
  }
`;
