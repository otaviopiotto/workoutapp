import styled, { css, keyframes } from "styled-components";

const skeletonLoading = keyframes`
 to {
    background-position-x: -20%;
  }
`;
export const skeletonAnim = css`
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 900;
  font-size: 32px;
  background-color: #ededed;
  background: linear-gradient(
      100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0) 60%
    )
    #ededed;
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: ${skeletonLoading} 1s infinite;
`;

interface pictureStyleProp {
  readonly: boolean;
}

export const Container = styled.div<pictureStyleProp>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: ${(prop) => prop.readonly && "none"};

  .file-input {
    position: absolute;
    visibility: hidden;
  }

  .loading {
    &:after {
      ${skeletonAnim}
    }
  }

  .edit-btn {
    color: ${({ theme }: any) => theme.colors.pallete[300]};
    font-weight: 400;
  }
`;

interface PicturePreviewProp {
  maxWidth?: number;
}

export const PicturePreview = styled.div<PicturePreviewProp>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "256")}px;
  max-height: ${(props) => (props.maxWidth ? props.maxWidth : "256")}px;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CroppContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  padding: 60px 0 0;
  .cropp-container {
    width: 90vw;
    height: 64vh;
    position: relative;
  }

  .controls {
    margin-top: 20px;

    .range-input-container {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .buttons-container {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;

export const svgStyle = {
  width: "17px",
  height: "17px",
  color: `${({ theme }: any) => theme.colors.cold_grey_500}`,
};
