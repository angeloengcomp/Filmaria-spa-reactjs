import styled from "styled-components";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import api from "../../services/api";

const TelaLoad = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  place-items: center;
  color: white;
`;

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    async function loadFilme() {
      const response = await api.get(`r-api/?api=filmes/${id}`);
      // console.log(response.data)
      setFilme(response.data);
      setLoading("false");
    }

    loadFilme();
  }, [id]);

  if (loading === 'true') {
    return (
      <TelaLoad>
          <i class="fas fa-spinner fa-spin fa-5x fa-white"></i>
      </TelaLoad>
    )
  }

  return (
    <div>
      <h1>Filme {id}</h1>
    </div>
  );
}
