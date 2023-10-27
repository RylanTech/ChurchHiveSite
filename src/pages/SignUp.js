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
                            <br />
                            <h1>How does this help?</h1>
                        </center>
                        <br /><br />

                        <p>
                        Church Hive is the ultimate solution for anyone seeking to connect with churches and church events seamlessly. With this innovative platform, you can effortlessly discover churches in your area, explore their events, and even favorite your chosen church to stay updated on their activities. But how does this help?<br/><br/>

                        First and foremost, Church Hive streamlines the process of staying engaged with your church's events, making it a breeze to keep track of all the happenings in one place. No more looking for this weeks bulletin around your house or scouring websites for information. It's all just right there on your phone. Secondly, for those on the lookout for a new spiritual home, Church Hive provides an invaluable resource to explore and connect with churches in your vicinity. Whether you're a devoted churchgoer or simply curious about what's happening in your community, Church Hive is your go-to app for church connection. Experience the ease of church discovery and event tracking like never before with Church Hive. Join us today and discover the power of connection!                        </p>

                    </div>

                    <div className="col-12 CA">
                        <center>
                            <br />
                            <h1>How do I sign my Church up?</h1>
                        </center>
                        <br /><br />
                        <p>
                            In order to create your account you NEED to meet the following criteria,<br />
                            <ol>
                                <li>Be part of a Church Preaching the Gospel of Jesus Christ</li>
                                <li>Be in leadership of that Church/Churches or given permission by appropriate leadership</li>
                            </ol>
                            This list is subject to change.
                            Email <a href="mailto:rylandeveloper@gmail.com">rylandeveloper@gmail.com</a> with your request and proof of leadership (Such as a Pastoral License).
                        </p>
                    </div>

                    <div className="col-12 CA">
                        <center>
                            <br />
                            <h1>Does it cost anything?</h1>
                        </center>
                        <br /><br />
                        <p>
                            During this beta stage, Church Hive is free to use for churches that sign up, providing them with full access to our platform's features. However, once the beta stage concludes, there will be a nominal monthly fee of $10 per month for continued access, ensuring our ongoing commitment to providing exceptional services and support to faith communities. Join us and revolutionize your church's digital presence!
                        </p>

                    </div>

                    <div className="col-12 CA">
                        <center>
                            <br />
                            <h1>How do I delete my account?</h1>
                        </center>
                        <br /><br />
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