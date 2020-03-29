import React, { Fragment } from "react"
import { Link } from "gatsby"
import { Nav, Navbar, Container } from "reactstrap"
import Navitem from "./navitem"
import Logo from "../../../../images/icon/meu.webp"

const Nav2 = (props) => {
    return (
        <Fragment>
            <Navbar className="navbar-expand-lg nav-back">
                <Container>
                    <div className="brand"><Link to='/'><img className="logo" src={Logo} alt="logo"/></Link></div>
                        <Nav navbar>
                            <Navitem name='Contact' url='/contact' />
                        </Nav>
                </Container>
            </Navbar>
        </Fragment>
    )
}

export default Nav2
