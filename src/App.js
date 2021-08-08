import styled from "styled-components";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'

import "./styles.css";
import Routes from "./routes.js";

const AppContainer = styled.div`
  
  
`;

function App() {
  return (
    <AppContainer>
      <Routes />
      <ToastContainer autoClose={3000}/>
    </AppContainer>
  );
}

export default App;
