import { useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

function NavigationBar() {
    document.body.style = 'background: #fcbb0c';

    useEffect(() => {
        document.getElementById("wrapper").classList.add("wrapper2")
    },[])

    return (
        <>
            <div>
                <Navbar className="nav-color" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                            <div id='wrapper' className='wrapper'>
                            <img id='slide' className='navbarHead' src="https://i.postimg.cc/Qdchcc9f/IMG-20230831-012642-465.jpg"/>
                            </div>
                            
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/churchhive">Church Hive</Link>
                                <Link className="nav-link" to="/ced">CED (BETA)</Link>
                                <Link className="nav-link" to="/signup">Sign up</Link>
                                <Link className="nav-link" to="/creators">Creators</Link>
                                <Link className="nav-link" to="/privacypolicy">Privacy Policy</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Outlet />
        </>
    )
}
export default NavigationBar