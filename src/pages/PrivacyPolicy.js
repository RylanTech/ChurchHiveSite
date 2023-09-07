import { Container, Row } from "react-bootstrap"
import NavigationBar from "../components/NavigationBar"

function PrivacyPolicy() {
    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    <div className="pripolpara">
                        <p>
                            <center>
                                <br/>
                                <h1>
                                    Privacy Policy
                                </h1>
                                <br/>
                            </center>
                            This Privacy Policy governs the manner in which ChurchHive ("we" or "our") collects, uses, maintains, and discloses information collected from users ("you" or "users") of the ChurchHive mobile application ("app").<br/><br/><br/>
                            1. Information We Collect<br/><br/>
                            1.1 Personal Information: When you sign up as a user, we collect your first name, last name, and email address. If you create or edit a church, we collect the church name, church denomination, church location, church phone number, church email address, a welcome message, church service times, an image URL, and creation/update timestamps. If you create or edit a event, we collect the event title, event date, event location, event type, event description, image URL, and creation/update timestamps.<br/><br/><br/>
                            2. Information Collection Methods<br/><br/>
                            2.1 User Registration/Edit: We collect your personal information during the sign-up process and edit process.<br/><br/>
                            2.2 Church Creation/Edit: We collect the necessary church details during the creation or editing of a church profile.<br/><br/>
                            2.3 Event Creation/Edit: We collect event-specific information when creating or editing an event.<br/><br/><br/>
                            3. Purpose of Collecting Information<br/><br/>
                            3.1 Personal Information: Your first name, last name, and email address are collected for user authentication and communication purposes. The church-related information is collected to provide app functionality and enable users to discover and connect with churches and their events.<br/><br/><br/>
                            4. Storage and Security<br/><br/>
                            4.1 Data Storage: We store the collected information on an express server using mySQL.<br/><br/>
                            4.2 Data Security: We take reasonable measures to protect the personal information you provide, including the use of HTTPS for all communication. However, please note that no method of transmission over the internet or electronic storage is completely secure and we cannot guarantee absolute security.<br/><br/><br/>
                            5. Sharing of Information<br/><br/>
                            5.1 Church and Event Information: Church information and public event details may be shared within the app for users to discover and connect with churches and their events. However, we never share user-specific information with any third parties.<br/><br/><br/>
                            6. Data Retention<br/><br/>
                            6.1 Personal Information: We retain your personal information until you request its deletion. Once a deletion request is received, we will remove your information from our systems promptly.<br/><br/><br/>
                            7. Cookies and Similar Technologies<br/><br/>
                            7.1 Cookies: We may use cookies or similar technologies to enhance user experience and track usage patterns within the app.<br/><br/><br/>
                            8. Accessing and Updating Personal Information<br/><br/>
                            8.1 Profile Management: You can access and update your personal information through your profile page within the app.<br/><br/>
                            8.2 Data Deletion: If you wish to delete your data from our systems, please contact us via email at rylandeveloper@gmail.com. We will process your request promptly.<br/><br/><br/>
                            9. Compliance with Applicable Laws<br/><br/>
                            9.1 Data Protection Laws: We comply with applicable data protection laws and regulations, including but not limited to the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).<br/><br/><br/>
                            10. Changes to this Privacy Policy<br/><br/>
                            10.1 Notification: We may update this Privacy Policy from time to time. We will notify you of any changes by email or through a prominent notice within the app.<br/><br/><br/>
                            Contact Us
                            If you have any questions or concerns about this Privacy Policy or the practices of ChurchHive, please contact us at rylandeveloper@gmail.com.
                        </p>
                    </div>
                </Row>
            </Container>
        </>
    )
}
export default PrivacyPolicy