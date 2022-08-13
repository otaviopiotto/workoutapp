import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useGroup } from "../../hooks/exerciseGroup";
import * as Yup from "yup";
import Button from "../Button";
import InputComponent from "../formComponents/input";

import {
  AiOutlineArrowLeft,
  AiOutlineCheck,
  AiOutlinePlus,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { dayType } from "../../models/exercise";
import { assign } from "lodash";
import DaysContainer from "./component/daysContainer";
import { useLocation, useNavigate } from "react-router-dom";
import TextAreaComponent from "../formComponents/textarea";
import { Form, Container } from "./styles";

interface inputProp {
  title: string;
  description: string;
  days: dayType | any;
}

const schema = Yup.object().shape({
  title: Yup.string().required("Campo obrigatório"),
});

let i = 0;

const AddNewWorkOutGroup = () => {
  const { createGroup, group, updateGroup } = useGroup();
  const navigate = useNavigate();
  const [days, setDays] = useState<dayType | any>([]);

  const { state }: any = useLocation();

  useEffect(() => {
    const filterGroup: any = group.filter((e) => e.id === state);

    if (filterGroup.length) {
      i = filterGroup[0]?.days?.length;

      return;
    }

    if (i !== days?.number) {
      i = 0;
    }
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<inputProp>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (!state) return;
    const filterGroup = group.filter((e) => e.id === state);

    setValue("title", filterGroup[0].title);
    setValue("description", filterGroup[0].description);
    setDays(filterGroup[0].days);
  }, [group, state]);

  const onSubmit = (data: any) => {
    delete data.days;

    if (state) {
      updateGroup({ ...data, id: state, days: days });
    } else {
      createGroup({
        ...data,
        id: (Math.random() * (100000 - 1) + 1).toFixed(0),
        days: days,
      });
    }
    navigate(-1);
  };

  const createDay = () => {
    i += 1;

    const newDay = {
      id: (Math.random() * (100000 - 1) + 1).toFixed(0),
      number: i,
    };
    setDays([...days, newDay]);
  };

  const updateDay = (data: any) => {
    const objIndex = days.findIndex((obj: any) => obj.id == data.id);
    assign(days[objIndex], data);
  };

  const handleDelete = (id: string | number) => {
    i -= 1;
    const filterDay = days.filter((e: dayType) => {
      if (e.id !== id) return true;
    });
    setDays(filterDay);
  };

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(onSubmit)}
        id="group-form"
        style={{ gap: "20px" }}
      >
        <InputComponent
          placeholder="Título"
          inputSize="Large"
          register={{ ...register("title") }}
          error={errors.title?.message}
        />

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
              edditing={state}
              updateDay={updateDay}
              onDelete={handleDelete}
              key={index}
              data={e}
            />
          ))}

          <Button
            buttonStyle="Secondary"
            onClick={() => createDay()}
            className="add-new-day"
          >
            <AiOutlinePlus />
          </Button>
        </div>
      </section>

      <footer>
        <Button buttonStyle="Primary" type="submit" form="group-form">
          Salvar
        </Button>
        <Button buttonStyle="Secondary" onClick={() => navigate(-1)} dangerous>
          Cancelar
        </Button>
      </footer>
    </Container>
  );
};

export default AddNewWorkOutGroup;
