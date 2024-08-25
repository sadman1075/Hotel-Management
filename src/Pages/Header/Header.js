import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Authcontex } from '../../Context/Context';
import { Link } from 'react-router-dom';



const Header = () => {
    const { user, logout } = useContext(Authcontex)
    return (
        <div className='mb-5'>
            <Navbar expand="lg" bg='dark' variant='dark'>
                <Container fluid>
                    <Navbar.Brand href="#"> HOTEL RIVER SIDE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="/">Home</Nav.Link>

                            <Nav.Link href="/registration">Registration</Nav.Link>
                            <Nav.Link><Link className='text-decoration-none text-secondary '  to="/booking">Booking</Link></Nav.Link>

                            {
                                user?.email ? <Nav.Link onClick={logout}>Logout</Nav.Link> :
                                    <Nav.Link href="/singin">SingIn</Nav.Link>

                            }

                            {
                                <Nav.Link className='text-white '>{user?.email}</Nav.Link>
                            }

                        </Nav>

                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </div>
    );
};

export default Header;