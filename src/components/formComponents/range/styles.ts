import styled from "styled-components";
import * as Slider from "@radix-ui/react-slider";

interface PriceProps {
  priceProps: number;
}

export const Container = styled.div<PriceProps>`
  width: 100%;
  .price-range {
    width: 100%;
    position: relative;

    .base-value {
      opacity: ${(prop) => (prop.priceProps > 16 ? "1" : prop.priceProps / 10)};
    }
    span {
      ${({ theme }) => theme.fonts.mulish.h5_regular};
      color: ${({ theme }) => theme.colors.cold_grey_800};
      position: absolute;
      transform: translateX(-54%);
    }
  }
`;

export const RangeRoot = styled(Slider.Root)`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  position: relative;
`;
export const RangeTrack = styled(Slider.Track)`
  width: 100%;
  height: 2px;
  border-radius: 99px;
  position: relative;
  background: ${({ theme }) => theme.colors.cold_grey_50};
`;

export const RangeRange = styled(Slider.Range)`
  height: 100%;
  position: absolute;
  border-radius: 99px;
  background: ${({ theme }) => theme.colors.blue_500};
`;
export const RangeThumb = styled(Slider.Thumb)`
  width: 20px;
  height: 20px;
  display: block;
  border-radius: 99px;
  background: ${({ theme }) => theme.colors.blue_700};
  cursor: pointer;

  &:focus {
    box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.3);
  }
`;
