import React from 'react'
import { Container, FormControl, Navbar, Dropdown, Nav} from 'react-bootstrap'
import {ImCart} from 'react-icons/im';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{height:80}}>
        <Container>
            <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                <FormControl
                style={{width:500}} placeholder="Search Product" className="m-auto"
                />                 
                </Navbar.Text>
                <Nav>
                <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <ImCart color="white" fontsize="25px"/>      
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown> 
                </Nav>
        </Container>
        </Navbar>
  )
}

export default Header