import styled from 'styled-components';

import './styles.css'
import Routes from './routes.js'

const AppContainer = styled.div`
background:#141926;
`




function App() {
  return (
    <AppContainer>
      <Routes/>
    </AppContainer>
  );
}

export default App;
