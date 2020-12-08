import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'

const Header = () => {
    return <header>
        <Navbar bg="primary" variant="dark" collapseOnSelect>
            <Container>
                <LinkContainer to='/'>
                    <Navbar.Brand>ProShop</Navbar.Brand>
                </LinkContainer>
                <Nav className="ml-auto">
                    <LinkContainer to='/cart'>
                        <Nav.Link>
                            <i className="fas fa-shopping-cart mr-1"></i>Cart
                        </Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/login'>
                        <Nav.Link>
                            <i className='fas fa-user mr-1'></i>Sign In
                        </Nav.Link>
                    </LinkContainer>
                </Nav>
            </Container>
        </Navbar>
    </header>
}

export default Header
