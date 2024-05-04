import { Carousel, Container, Row } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

function Homepage() {
    return (
        <>
            <Helmet>
                <meta name="title" content="Church Hive - Connect with Churches" />
                <meta name="description" content="Church Hive is a platform where churches can share their events
                with their congregation and users" />
                <meta name="keywords" content="Church Hive, Connect with Churches, Church services, Church
                website, Church events, church events near me, church locations, church details, Church Hive App
                Play Store, App store, Church Hive Homepage, find Churches" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <NavigationBar />
            <Container>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img alt="Welcome to Church Hive" className="slide" src="https://i.postimg.cc/cC99hP0w/slide1.png" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img alt="Church Hive is available on the Apple App Store" className="slide" src="https://i.postimg.cc/Bvt8Xq4c/churchhvie.png" />
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