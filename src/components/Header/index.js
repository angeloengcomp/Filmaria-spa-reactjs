import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderJSX = styled.header`
    background: #2F5973;
    width: 100%;
    display: flex;
    justify-content: space-around;
    padding: 16px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    .logo, .favoritos{
        color: white;
        text-decoration: none;
        cursor: pointer;
        padding: 8px 16px;
        border-radius: 8px;
        transition: all .2s;
        font-size: 1.5em;
    }
    .logo:hover, .favoritos:hover{
        background: #fff;
        color: #000;

    }


`


export default function Header(){
    return(
        <HeaderJSX>
            <Link className="logo" to="/">Filmaria</Link>
            <Link className="favoritos" to="/favoritos">Favoritos</Link>
        </HeaderJSX>
    )
}