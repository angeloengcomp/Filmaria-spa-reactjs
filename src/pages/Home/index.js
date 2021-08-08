import api from "../../services/api";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

const Container = styled.div`
  max-width: 1140px;
  margin-inline: auto;
`;

const ListaFilmes = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
const Article = styled.article`
  width: 340px;
  border: 1px solid #2f5973;
  display: grid;
  place-items: center;
  margin: 32px 0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  h2 {
    font-size: 1.2em;
    padding: 16px;
    color: #2f5973;
  }

  img {
    width: 100%;
  }

  a {
    width: 100%;
    text-align: center;
    padding: 16px;
    text-decoration: none;
    background: #2f5973;
    font-size: 1.5rem;
    color: #f2f2f2;
    transition: all 0.3s;
  }
  a:hover {
    background: #173c40;
  }
`;

const Load = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  color: #2F5973;
`;

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("r-api/?api=filmes/");
      // console.log(response.data)
      setFilmes(response.data);
      setLoad(true);
    }

    loadFilmes();
  }, []);

  if (!load) {
    return (
      <Load>
        <i className="fas fa-spinner fa-spin fa-5x fa-white"></i>
      </Load>
    );
  }

  return (
    <Container>
      <ListaFilmes>
        {filmes.map(({ id, foto, nome }) => {
          return (
            <Article id={id}>
              <h2>{nome}</h2>
              <img src={foto} alt={nome} />
              <Link to={`/filme/${id}`}>Acessar</Link>
            </Article>
          );
        })}
      </ListaFilmes>
    </Container>
  );
}
