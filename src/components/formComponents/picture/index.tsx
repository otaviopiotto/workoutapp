import { useState, useRef, useEffect } from "react";
import Cropper from "react-easy-crop";
import { AiOutlineEdit } from "react-icons/ai";
import { useAuth } from "../../../hooks/auth";
import getCroppedImg from "../../../utils/cropImage";
import uploadImage from "../../../utils/uploadImage";
import Button from "../../Button";
import { Modal, ModalContent } from "../../radixModalComponent";
import RangeComponent from "../range";
import { Container, PicturePreview, CroppContainer, svgStyle } from "./styles";

interface UploadFileProps {
  onClick?(): void;
  imageSrc?: string;
  readonly: boolean;
  isLoading?: boolean;
  maxWidth?: number;
  onChange?(data: any): void;
}

const defualtImg =
  "https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg";

const UploadPictureComponent = ({
  imageSrc,
  onClick,
  readonly,
  isLoading,
  onChange,
  maxWidth,
}: UploadFileProps) => {
  const { user, refreshProfile } = useAuth();

  const [imageToEdit, setImageToEdit] = useState(null);
  const [newImage, setNewImage] = useState();
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const onCropImg = async (data: any) => {
    setNewImage(data);
    await uploadImage(data, user._id);
    await refreshProfile();
    onChange?.(data);
  };

  const getImage = (e: any) => {
    const newFile: any = URL.createObjectURL(e.files[0]);
    setImageToEdit(newFile);
    setEditing(true);
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      inputRef.current?.click();
    }
  };

  return (
    <Container readonly={readonly}>
      <Button
        buttonStyle="Text"
        size="Large"
        onClick={handleClick}
        style={{ padding: "0" }}
      >
        <PicturePreview
          className={isLoading ? "loading" : ""}
          maxWidth={maxWidth}
        >
          <img src={newImage || imageSrc || defualtImg} />
        </PicturePreview>
      </Button>

      {!readonly && (
        <Button
          buttonStyle="Text"
          size="Large"
          onClick={handleClick}
          className="edit-btn"
        >
          <AiOutlineEdit style={svgStyle} />
        </Button>
      )}

      <input
        type="file"
        className="file-input"
        ref={inputRef}
        multiple={false}
        accept="image/*"
        onInput={(e) => getImage(e.target)}
      />

      <Modal open={editing} onOpenChange={() => setEditing(false)}>
        <ModalContent title="" position="top">
          <EditImage
            imageUrl={imageToEdit !== null ? imageToEdit : ""}
            setEditing={setEditing}
            setNewImage={onCropImg}
          />
        </ModalContent>
      </Modal>
    </Container>
  );
};

interface editImgProp {
  imageUrl?: string;
  setEditing?: any;
  setNewImage: any;
  cropShape?: "round" | "rect";
}

export const EditImage = ({
  imageUrl,
  setEditing,
  setNewImage,
}: editImgProp) => {
  const [loading, setLoading] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState<any>(1);
  const [aspect, setAspect] = useState(4 / 3);
  const [croppedArea, setCroppedArea] = useState<number>();

  useEffect(() => {
    setTimeout(() => {
      setAspect(1);
    }, 500);
  }, [imageUrl]);

  const onCropComplete = (croppedArea?: any, croppedAreaInPixels?: any) => {
    setCroppedArea(croppedAreaInPixels);
  };

  const onCropImage = async () => {
    setLoading(true);
    const croppedUrl: any = await getCroppedImg(imageUrl as any, croppedArea);
    setNewImage(croppedUrl);
    setEditing(false);
  };

  return (
    <CroppContainer>
      <div className="cropp-container">
        <Cropper
          image={imageUrl}
          aspect={aspect}
          crop={crop}
          zoom={zoom}
          cropShape="rect"
          onCropChange={setCrop}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>

      <div className="controls">
        <div className="range-input-container">
          <RangeComponent onChange={(e: any) => setZoom(e)} value={[zoom]} />
        </div>
        <div className="buttons-container">
          <Button buttonStyle="Text" onClick={() => setEditing(false)}>
            Cancelar
          </Button>
          <Button
            buttonStyle="Primary"
            onClick={() => onCropImage()}
            loading={loading}
          >
            Salvar
          </Button>
        </div>
      </div>
    </CroppContainer>
  );
};

export default UploadPictureComponent;
