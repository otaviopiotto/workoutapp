import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useGroup } from "../../hooks/exerciseGroup";
import Button from "../Button";

import { dayType } from "../../models/exercise";
import { assign } from "lodash";
import DaysContainer from "./component/daysContainer";
import { useLocation, useNavigate } from "react-router-dom";
import TextAreaComponent from "../formComponents/textarea";
import { HiOutlinePlus } from "react-icons/hi";
import { Modal, ModalContent } from "../radixModalComponent";
import SaveGroup from "./component/saveGroup";
import { Form, Container } from "./styles";

interface inputProp {
  title?: string;
  description?: string;
  days?: dayType | any;
}

const AddNewWorkOutGroup = () => {
  const [openModal, setOpenModal] = useState(false);
  const [formData, setFormData] = useState();
  const { createGroup, group, updateGroup } = useGroup();
  const [moving, setMoving] = useState(null as any);
  const navigate = useNavigate();

  const [days, setDays] = useState<dayType | any>([
    {
      id: (Math.random() * (1000000000 - 1) + 1).toFixed(0),
      number: 1,
      muscle_group: "OFF",
    },
  ]);

  const { state }: any = useLocation();

  const { register, handleSubmit, setValue } = useForm<inputProp>();

  useEffect(() => {
    if (!state) return;
    const filterGroup = group.filter((e) => e.id === state);

    setValue("title", filterGroup[0].title);
    setValue("description", filterGroup[0].description);
    setDays(filterGroup[0].days);
  }, [group, state]);

  const onSubmit = (data: any) => {
    setFormData({
      ...data,
      days,
    });
    setOpenModal(true);
  };

  const createDay = () => {
    const newDay = {
      id: (Math.random() * (100000 - 1) + 1).toFixed(0),
      number: days.length + 1,
    };
    setDays([...days, newDay]);
  };

  const updateDay = (data: any) => {
    const objIndex = days.findIndex((obj: any) => obj.id == data.id);
    assign(days[objIndex], data);
  };

  const handleDelete = (id: string | number) => {
    const filterDay = days.filter((e: dayType) => e.id !== id);
    filterDay.forEach((e: any, i: number) => (e.number = i + 1));

    setDays(filterDay);
  };

  const duplicateDay = (data: any) => {
    const duplicated = {
      ...data,
      id: (Math.random() * (100000 - 1) + 1).toFixed(0),
      number: days.length + 1,
    };
    setDays([...days, duplicated]);
  };

  // const moveArrayItemToNewIndex = (
  //   arr: any,
  //   old_index: number,
  //   new_index: number
  // ) => {
  //   if (new_index >= arr.length) {
  //     let k = new_index - arr.length + 1;
  //     while (k--) {
  //       return null;
  //     }
  //   }
  //   arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  //   return arr;
  // };

  // useEffect(() => {
  //   if (!moving) return;
  //   setDays(moveArrayItemToNewIndex(days, moving.childPosition, moving.arrayP));
  // }, [moving]);

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
          <div className="grid-container">
            {days.map((e: dayType | any, index: number) => (
              <DaysContainer
                day={index + 1}
                duplicateDay={duplicateDay}
                updateDay={updateDay}
                onDelete={handleDelete}
                listLength={days.length}
                setMoving={setMoving}
                key={index}
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
            Cancelar
          </Button>
          <Button buttonStyle="Primary" type="submit" form="group-form">
            Salvar
          </Button>
        </footer>
      </Container>
    </>
  );
};

export default AddNewWorkOutGroup;
