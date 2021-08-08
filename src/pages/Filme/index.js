import styled from "styled-components";
import { useEffect, useState } from "react";

import { useParams, useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const TelaLoad = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  color: white;
`;

const FilmeContainer = styled.div`
  background: #f2f2f2;
  padding: 32px;
  max-width: 650px;
  margin: 32px 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  h3,
  p {
    margin-top: 16px;
  }

  img {
    width: 100%;
    border-radius: 8px;
  }

  .btns {
    width: 100%;
    padding: 16px;
    display: flex;
    justify-content: space-evenly;

    button {
      width: 120px;
      color: #141926 ;
      padding: 8px;
      border-radius: 8px;
      outline: none;
      border: 2px solid #141926;
      transition: all .3s;

      &:hover {
        transform: scale(1.05);
      }
      
      a {
        text-decoration: none;
        color: #141926 ;
      }
    }
  }
`;

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState("true");
  const history = useHistory();

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      // console.log(response.data)

      if (response.data.length === 0) {
        // tentou navegar com um id que nao existe, faço ele retornar para a home
        history.replace("/");
        return;
      }

      setFilme(response.data);
      setLoading("false");
    }

    loadFilme();
  }, [history, id]);

  function salvaFilme(){
    // console.log(  "salvando filme")
    const listaFilmes = localStorage.getItem('filmes')

    let filmesSalvos = JSON.parse(listaFilmes) || [];

    // se tiver algum filme salvo, ele será ignorado
    const hasFIlme = filmesSalvos.some(filmeSalvo => filmeSalvo.id === filme.id)

    if(hasFIlme){
      toast.info('Esse filme já está na sua lista')
      return;
    }


    filmesSalvos.push(filme)

    localStorage.setItem('filmes',JSON.stringify(filmesSalvos))
    toast.success('Filme salvo com sucesso')
  }

  if (loading === "true") {
    return (
      <TelaLoad>
        <i className="fas fa-spinner fa-spin fa-5x fa-white"></i>
      </TelaLoad>
    );
  }

  return (
    <FilmeContainer>
      <h1>{filme.nome}</h1>

      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse</h3>
      <p>{filme.sinopse}</p>
      <div className="btns">
        <button
          onClick={() => {
            salvaFilme()
          }}
        >
          Salvar
        </button>
        <button>
          <a
            target="blank"
            href={`https://www.youtube.com/results?search_query=${filme.nome}`}
          >
            Trailer
          </a>
        </button>
      </div>

      

   

      
    </FilmeContainer>
  );
}
