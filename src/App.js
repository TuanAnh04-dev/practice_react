import React, { useState } from 'react';
import './App.scss';
import AppModals from './components/app.modals';
import AppHeader from './components/header';
import TableUser from './components/TableUser';
import { Button, Container } from 'react-bootstrap';

function App() {

  const [showModal, setShowModal] = useState(false);

  const handleClose = () => { setShowModal(false); }

  return (
    <div className="App-Container" >
      <Container>
        <AppHeader />
        < div className='my-3 d-flex justify-content-between align-items-center' >
          <div>List user </div>
          <Button variant="success" onClick={() => { setShowModal(true) }}>Thêm mới</Button>
        </div>
        < TableUser />

      </Container>

      <AppModals showModal={showModal} setShowModal={handleClose} />

    </div>
  );
}

export default App;
