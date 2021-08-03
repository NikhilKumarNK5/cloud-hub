import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faCloud } from '@fortawesome/free-solid-svg-icons'

export default function NavbarComponent() {
    return (
        <Navbar bg="info" expand="sm">
            <Navbar.Brand as={Link} to="/">
                <FontAwesomeIcon icon={faCloud} /> Cloud Hub
            </Navbar.Brand>
            <Nav>
                <Nav.Link as={Link} to="/user">Profile</Nav.Link>
            </Nav>
        </Navbar>
    )
}
