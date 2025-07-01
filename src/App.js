import React from 'react';
import './App.scss';
import AppHeader from './components/header';
import TableUser from './components/TableUser';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
      <div className="App-Container" >
        <Container>
          <AppHeader />
          < TableUser />
        </Container>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <ToastContainer />
      </div>
    </>

  );
}

export default App;
