import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';

function BasicExample() {
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }
    return (
        <Navbar expand="lg" className="bg-info">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to="/" className="nav-link">Home</NavLink>
                        <NavLink to="/user-manage" className="nav-link">User</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <div className='d-flex justify-content-center align-items-center'>
                    <Nav>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavLink to="/login" onClick={handleLogout} className='dropdown-item'>
                                <i className="fa-solid fa-right-to-bracket pe-2"></i> Login
                            </NavLink>
                            <NavLink to="/" onClick={handleLogout} className='dropdown-item'>
                                <i className="fas fa-user-plus pe-2"></i>Logout
                            </NavLink>

                        </NavDropdown>
                    </Nav>
                </div>

            </Container>
        </Navbar>
    );
}

export default BasicExample;