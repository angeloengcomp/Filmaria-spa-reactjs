import { Link } from "react-router-dom"
import styled from 'styled-components';


const Container=styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;
    

    h1{
        font-size: 9rem;
    }

    h1,h2{
        color: #fff;
    }

    a{
        color: #fff;
        text-decoration: none;
        padding: 16px 32px;
        border-radius: 8px;
        border: 1px solid #fff;
        transition: all .2s;

        &:hover{
            background: #c2c2c2;
            color: #000;
        }
    }

`


export default function NotFound(){
    return(
        <Container>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/"> Ver todos os filmes</Link>
        </Container>
    )
}