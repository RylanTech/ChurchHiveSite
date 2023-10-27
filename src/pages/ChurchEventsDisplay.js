import { Container, Row } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar"
import { Link } from "react-router-dom"

function ChurchEventsDispalyPage() {
    return (
        <>
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