import { useState, useEffect } from "react";
import styled from "styled-components";

const FavoritosContainer = styled.div`
    max-width: 470px;
    margin: 0 auto;
    color: #fff;

    h1{
        margin-top: 32px;
        text-align: center;
    }

    h2{
        color: #c2c2c2;
        text-align: center;
    }
`

const ItemFavorito = styled.li`
border: 2px solid #fff;
border-radius: 8px;

  max-width: 460px;
  margin: 16px auto;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  color: #fff;

  div{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;

      button{
          padding: 8px;
          color: #000;
          border-radius: 8px;
          
          a{
              text-decoration: none;
              color: #000;
          }

          &:nth-child(2){
              border: 2px solid red;
          }
          &:nth-child(1){
              border: 2px solid green;
          }
      }

  }
`;

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    const listaFilmeJSON = localStorage.getItem("filmes");

    setFavoritos(JSON.parse(listaFilmeJSON) || []);
  }, []);

  console.log(favoritos);

  function handleRemoveMovie(id, nome) {

    console.log(`Remover ${nome}` )

    let newFavoritos = favoritos.filter(filme => filme.id !== id)

    setFavoritos(newFavoritos)

    localStorage.setItem('filmes', JSON.stringify(newFavoritos))

  }

  return (
    <FavoritosContainer>
      <h1>Meus Favoritos</h1>

      {favoritos.length === 0 ? <h2>Você não possui filmes aqui :( </h2> : <h2>Bem vindo a sua lista de filmes favoritos</h2> }

      <ul>
        {favoritos.map((filme) => {
          return (
            <ItemFavorito key={filme.id}>
              <h2>{filme.nome}</h2>
              <div>
                <button>
                  <a
                    href={`https://www.youtube.com/results?search_query=${filme.nome}`}
                  >
                    Trailer
                  </a>
                </button>
                <button onClick={()=> handleRemoveMovie(filme.id, filme.nome)}>Remover</button>
              </div>
            </ItemFavorito>
          );
        })}
      </ul>
    </FavoritosContainer>
  );
}
