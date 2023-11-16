import { Container, Row } from "react-bootstrap"
import SmallNav from "../components/SmallNav"

function ChurchHive() {
    return (
        <>
        <SmallNav/>
        <Container>
            <Row>
                <div className="col-md-1 col-lg-3"/>
                <iframe className="col-12 col-md-10 col-lg-6 CH" src="https://churchhive.xyz"/>
            </Row>
        </Container>
        </>
    )
}
export default ChurchHive