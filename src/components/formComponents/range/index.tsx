import { useState } from "react";
import {
  RangeRoot,
  RangeTrack,
  RangeRange,
  RangeThumb,
  Container,
} from "./styles";

interface SelectProps {
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number[];
  onChange?(value: any): void;
  value?: number[];
}

const RangeComponent = ({
  min = 0,
  max = 3,
  step = 0.001,
  defaultValue,
  value,
  onChange,
}: SelectProps) => {
  const [showPrice, setShowPrice] = useState<number>(defaultValue?.[0] || 0);
  const distance = showPrice / (max / 100);

  return (
    <Container priceProps={distance}>
      <RangeRoot
        min={min}
        max={max}
        step={step}
        defaultValue={defaultValue}
        value={value}
        onValueChange={(value) => {
          onChange?.(value);
          setShowPrice(value[0]);
        }}
      >
        <RangeTrack>
          <RangeRange />
        </RangeTrack>
        <RangeThumb />
      </RangeRoot>
    </Container>
  );
};

export default RangeComponent;
