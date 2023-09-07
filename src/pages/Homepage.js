import { Card, Carousel, Container, Row } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar"

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
                <br/><br/>
                <Row>
                    <div className="col-lg-2"/>
                    <Card className="overCard text-white col-12 col-lg-8">
                        <Card.Img className="overlayImg" src="https://images.unsplash.com/photo-1604882355447-02f728a295a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Does your church need to grow connections?</Card.Title>
                            <Card.Text>
                                Church Hive aims to connect people and churches together.
                            </Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Row>
            </Container>
        </>
    )
}
export default Homepage