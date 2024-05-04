import { Container, Row } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar"
import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"

function ChurchEventsDispalyPage() {
    return (
        <>
        <Helmet>
                <meta name="title" content="Church Hive - Connect with Churches" />
                <meta name="description" content="Church Hive is a platform where churches can share their events
                with their congregation and users" />
                <meta name="keywords" content="Church Hive, Connect with Churches, Church services, Church
                website, Church events, church events near me, church locations, church details, Church Hive App
                Play Store, App store, Church Hive CED page, find Churches, Church Events Display,
                Keep up with Church Events" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
        <NavigationBar/>
        <Container>
            <Row>
                <div className="col-12 CA">
                    <center>
                    <h2>Church Events Display (CED)</h2>
                    </center>
                    <p>
                        With CED, a church can take their events from Church Hive and put them on to their own website. Elimating the need to update their website with all of their upcoming events. Church Hive will automatically handle the updating of events based off of the data from the Church Hive app.
                    </p>
                </div>
            </Row>
            <Row>
                <Link to={'/ced/easy'}>
                <div className="col-12 col-md-6">
                    <div className="col-12 CA">
                        <center>
                            <h2>Easy Setup</h2>
                        </center>
                    </div>
                </div>
                </Link>
                <Link to={'/ced/api'}>
                <div className="col-12 col-md-6">
                    <div className="col-12 CA">
                        <center>
                        <h2>Setup For Nerds</h2>
                        (API intergration)
                        </center>
                    </div>
                </div>
                </Link>
            </Row>
        </Container>
        </>
    )
}
export default ChurchEventsDispalyPage