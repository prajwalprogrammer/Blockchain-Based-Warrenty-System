import {Link} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import market from './market.png'
import Login from "./Login";

function sayHello() {
    alert('NFTS created here will be of 0.0001 ether (Excluding Gas Prices)');
    const newLocal = window.location.href = 'localhost:3000/login';
    newLocal();
}

const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar expand="lg" bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="http://www.flipkart.com">
                    <img src={market} width="40" height="40" className="" alt="" />
                    &nbsp; Flipkart Warranty System
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/create" onClick={sayHello}>Create</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items">Issued Warranties</Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases">My Warranties</Nav.Link>
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                    </Nav>
                    <Nav>
                        {account ? (
                            <Nav.Link
                                href={`https://etherscan.io/address/${account}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="button nav-button btn-sm mx-4">
                                <Button variant="outline-light">
                                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                                </Button>
                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light" >Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;