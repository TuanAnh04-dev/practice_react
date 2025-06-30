import './App.scss';
import AppHeader from './components/header';
import TableUser from './components/TableUser';
import { Row } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App-Container">
      <Container>
        <Row>
          <AppHeader />
          <TableUser />
        </Row>
      </Container>


    </div>
  );
}

export default App;
