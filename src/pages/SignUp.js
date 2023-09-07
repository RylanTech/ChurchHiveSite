import { Container, Row } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar"

function SignUp() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <div className="col-12 CA">
                        <center>
                            <br/>
                            <h1>How do I sign my Church up?</h1>
                        </center>
                        <br/><br/>
                        <p>
                            In order to create your account you NEED to meet the following criteria,<br/>
                            <ol>
                                <li>Be part of a Church Preaching the Gospel of Jesus Christ</li>
                                <li>Be in leadership of that Church/Churches or given permission by appropriate leadership</li>
                            </ol>
                            This list is subject to change.
                            Email rylandeveloper@gmail.com with your request and proof of leadership (Such as a Pastoral License).
                        </p>
                    </div>

                    <div className="col-12 CA">
                        <center>
                            <br/>
                            <h1>How does this help?</h1>
                        </center>
                        <br/><br/>
                        
                        <p>
                            Church Hive aims to connect people with churches. With Church Hive, people can look up churches and church events. People can also favorite a church to keep track of that church and that church's events. This helps tremendously with keeping track of your church's or any church's events. This also allows for people who are looking for a church to discover churches in their area.
                        </p>
                            
                    </div>

                    <div className="col-12 CA">
                        <center>
                            <br/>
                            <h1>Does it cost anything?</h1>
                        </center>
                        <br/><br/>
                        Yes
                        <p>

                        </p>
                            
                    </div>

                    <div className="col-12 CA">
                        <center>
                            <br/>
                            <h1>How do I delete my account?</h1>
                        </center>
                        <br/><br/>
                        <p>
                        Email rylandeveloper@gmail.com with your request and proof of leadership (Such as a Pastoral Certificate) of the church you would like to delete. A call will be given to the Church's phone number that was provided with that church to confirm that you would like your account & churches deleted.
                        </p>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default SignUp