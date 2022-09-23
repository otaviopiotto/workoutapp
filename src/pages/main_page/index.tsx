import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import GroupCard from "../../components/exerciseGroupCard";
import { HiOutlinePlus, HiOutlineRefresh, HiRefresh } from "react-icons/hi";
import { Container } from "./styles";
import { useAuth } from "../../hooks/auth";
import { getQuery } from "../../services/hooks/getQuery";

const MainPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [group, setGroup] = useState([]);
  const { user } = useAuth();

  const { data, refetch, isFetching, isLoading } = getQuery(
    `user/${user._id}`,
    ["user", user._id]
  );

  useEffect(() => {
    if (isFetching) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 700);
    }
  }, [isFetching]);

  useEffect(() => {
    if (data) {
      setGroup(data.group);
      refetch();
    }
  }, [data]);

  return (
    <Container>
      <header className="group-header">
        <Button
          buttonStyle="Text"
          onClick={() => navigate("/perfil")}
          style={{ padding: 0 }}
          className="perfil-button"
        >
          {user.name}
        </Button>

        <h5>
          Meus <br />
          Exercícios
        </h5>
      </header>

      <section className="group-section">
        <div className="header">
          <span>Grupos</span>

          <Button buttonStyle="Text" onClick={() => refetch()}>
            <HiOutlineRefresh className={loading ? "fetching" : ""} />
          </Button>
        </div>
        {!group.length && !isLoading && (
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
            <HiOutlinePlus />
          </Button>
        )}

        <ul className="groups">
          {isLoading && (
            <>
              <div className="skeleton-loader" />
              <div className="skeleton-loader" />
            </>
          )}
          {group.map((e: any, i) => (
            <GroupCard
              group_data={e}
              onClick={() =>
                navigate(`/treino/${e._id}`, {
                  state: e._id,
                })
              }
              key={i}
            />
          ))}
        </ul>
      </section>

      <footer>
        <Button buttonStyle="Text" onClick={() => navigate("novo-grupo")}>
          <HiOutlinePlus />
        </Button>
      </footer>
    </Container>
  );
};

export default MainPage;
