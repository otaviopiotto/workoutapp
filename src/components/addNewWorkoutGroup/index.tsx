import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { useFieldArray, useForm } from "react-hook-form";
import Button from "../Button";
import { dayType } from "../../models/exercise";
import DaysContainer from "./component/daysContainer";
import { useLocation, useNavigate } from "react-router-dom";
import TextAreaComponent from "../formComponents/textarea";
import {
  HiOutlineCheck,
  HiOutlineChevronLeft,
  HiOutlinePlus,
} from "react-icons/hi";
import { Modal, ModalContent } from "../radixModalComponent";
import SaveGroup from "./component/saveGroup";
import { getQuery } from "../../services/hooks/getQuery";
import { Form, Container } from "./styles";

export interface inputProp {
  title?: string;
  description?: string;
  days?: dayType[];
}

const AddNewWorkOutGroup = () => {
  const [listParent] = useAutoAnimate({});
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState();
  const navigate = useNavigate();

  const { state }: any = useLocation();

  const { data } = getQuery(`user/group/${state}`, ["group", state], {
    enabled: Boolean(state),
  });

  const { register, handleSubmit, setValue, watch, control, getValues } =
    useForm<inputProp>({
      defaultValues: data,
    });

  const { fields, append, remove } = useFieldArray({
    name: "days",
    control,
  });

  const onSubmit = (data: any) => {
    const format = {
      ...data,
      days: data?.days?.map((e: any, i: number) => ({ ...e, number: i + 1 })),
    };
    setFormData(format);
    setOpenModal(true);
  };

  const createDay = () => {
    append({
      muscle_group: "",
    });
  };

  const duplicateDay = (data: any) => {
    append({
      ...data,
      muscle_group: watch(`days[${fields.length - 1}].muscle_group` as any),
    });
  };

  return (
    <>
      <Modal open={openModal} onOpenChange={() => setOpenModal(!openModal)}>
        <ModalContent title="Salvar" position="center">
          <SaveGroup
            data={formData}
            id={state}
            onClose={() => setOpenModal(false)}
          />
        </ModalContent>
      </Modal>
      <Container>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          id="group-form"
          style={{ gap: "20px" }}
        >
          <TextAreaComponent
            placeholder="Descrição"
            register={{ ...register("description") }}
          />
        </Form>

        <section className="add-days-section">
          <div className="grid-container" ref={listParent as any}>
            {fields.map((e: dayType | any, index: number) => (
              <DaysContainer
                duplicateDay={duplicateDay}
                register={register}
                remove={remove}
                setValue={setValue}
                getValues={getValues}
                watch={watch}
                control={control}
                key={index}
                index={index}
                data={e}
              />
            ))}
          </div>
          <Button
            buttonStyle="Secondary"
            onClick={() => createDay()}
            className="add-new-day"
          >
            <HiOutlinePlus />
          </Button>
        </section>

        <footer>
          <Button buttonStyle="Text" onClick={() => navigate(-1)} dangerous>
            <HiOutlineChevronLeft />
          </Button>
          <Button buttonStyle="Text" onClick={() => createDay()}>
            <HiOutlinePlus />
          </Button>
          <Button buttonStyle="Text" type="submit" form="group-form">
            <HiOutlineCheck />
          </Button>
        </footer>
      </Container>
    </>
  );
};

export default AddNewWorkOutGroup;
