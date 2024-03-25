import { Container, Row } from "react-bootstrap"
import SmallNav from "../components/SmallNav"
import { Helmet } from "react-helmet"

function ChurchHive() {
    return (
        <>
        <Helmet>
                <meta name="title" content="Church Hive - Connect with Churches" />
                <meta name="description" content="Church Hive is a platform where churches can share their events
                with their congregation and users" />
                <meta name="keywords" content="Church Hive, Connect with Churches, Church services, Church
                website, Church events, church events near me, church locations, church details, Church Hive App
                Play Store, App store, Church Hive page, find Churches, webpage for the Church Hive app" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
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