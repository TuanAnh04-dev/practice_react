import React from 'react';
import './App.scss';
import AppHeader from './components/header';
import TableUser from './components/TableUser';
import { Container } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import { useSelector } from 'react-redux';


function App() {

  const dataUser = useSelector(state => state.user.account);
  console.log(dataUser);

  return (
    <>
      <div className="App-Container" >

        <AppHeader />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-manage" element={<TableUser />} />
            <Route path="/login" element={<Login />} />
          </Routes>

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
