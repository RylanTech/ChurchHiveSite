import { Card, Carousel, Container, Row } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar"
import { Link } from "react-router-dom"

function Homepage() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img className="slide" src="/slide1.png" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.church.hive">
                                <img className="slide" src="/slide2.png" />
                            </a>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <br /><br />
                <Row>
                    <div className="sideCard">
                        <Row>
                            <img className="col-12 col-md-6 cedImg"
                                src="ced.png"
                            />
                            <div className="col-12 col-md-6 cedTextBox">
                                <p>
                                    <h4>
                                        Church Events Display
                                    </h4>
                                    With CED you can dynamically update your church's events just by updating them in Church Hive from the app!
                                </p>
                                <p>
                                    <Link to={'/ced'}>Click here to learn more!</Link>
                                </p>
                            </div>
                        </Row>
                    </div>
                </Row>
            </Container>
            <div className="footer">
                <div className="footerObj">
                    <Link to={`/creators`}>Creators</Link>
                    <Link to={`/signup`}>SignUp</Link>
                    <Link to={`privacypolicy`}>Privacy Policy</Link>
                </div>
            </div>
        </>
    )
}
export default Homepage