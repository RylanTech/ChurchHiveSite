import { Container, Nav, Navbar } from 'react-bootstrap'
import { Helmet } from 'react-helmet';
import { Link, Outlet } from 'react-router-dom'

function SmallNav() {
    document.body.style = 'background: #fcbb0c';

    return (
        <>
            <Helmet>
                <title>Church Hive - Connect with Churches!</title>
                <meta name="title" content="Church Hive" />
                <meta name="description" content="Church Hive is an app for churches and people to connect" />
                <meta name="keywords" content="Church, Hive, Church Hive, Church Website, Church app, Church, Church events, find Church, Connect with Churches, Tool for Churches" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <div>
                <Navbar className="nav-color" expand="lg">
                    <Container>
                        <Navbar.Brand href="/">
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Link className="nav-link" to="/">Home</Link>
                                <Link className="nav-link" to="/churchhive">Church Hive</Link>
                                <Link className="nav-link" to="/ced">CED (BETA)</Link>
                                <Link className="nav-link" to="/signup">Sign up</Link>
                                <Link className="nav-link" to="/creators">Creators</Link>
                                {/* <Link className="nav-link" to="/privacypolicy">Privacy Policy</Link> */}
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <Outlet />
        </>
    )
}
export default SmallNav