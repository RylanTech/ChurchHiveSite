import { Carousel, Container, Row } from "react-bootstrap"
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
                            <img alt="Welcome to Church Hive" className="slide" src="https://i.postimg.cc/cC99hP0w/slide1.png" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <a target="_blank" href="https://apps.apple.com/us/app/church-hive/id6473189237" rel="noreferrer">
                                <img alt="Church Hive is available on Google Play" className="slide" src="https://i.postimg.cc/qMWxTmmm/chappstore.png" />
                            </a>
                        </Carousel.Item>
                        <Carousel.Item>
                            <a target="_blank" href="https://play.google.com/store/apps/details?id=com.church.hive" rel="noreferrer">
                                <img alt="Church Hive is available on the Apple App Store" className="slide" src="https://i.postimg.cc/NGpzQ2mF/slide2.png" />
                            </a>
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <br /><br />
                <Row>
                    <div className="sideCard">
                        <Row>
                            <img className="col-12 col-md-6 cedImg"
                                src="https://i.postimg.cc/FFZ21B59/ced.png"
                                alt="Church Events Display"
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