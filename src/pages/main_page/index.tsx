import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { useGroup } from "../../hooks/exerciseGroup";
import GroupCard from "../../components/exerciseGroupCard";
import { Container } from "./styles";

const MainPage = () => {
  const navigate = useNavigate();
  const { group } = useGroup();

  return (
    <Container>
      <header className="group-header">
        <h5>Grupos de Exercício</h5>

        <Button buttonStyle="Text" onClick={() => navigate("novo-grupo")}>
          <AiOutlinePlus />
        </Button>
      </header>

      <section className="group-section">
        {!group.length && (
          <Button
            buttonStyle="Secondary"
            size="Large"
            style={{
              borderRadius: "99px",
              margin: "3em auto",
              padding: "32px",
            }}
            onClick={() => navigate("novo-grupo")}
          >
            <AiOutlinePlus />
          </Button>
        )}

        <ul className="groups">
          {group.map((e, i) => (
            <GroupCard
              group_data={e}
              onClick={() =>
                navigate(`/treino/${e.id}`, {
                  state: e.id,
                })
              }
              key={i}
            />
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default MainPage;
