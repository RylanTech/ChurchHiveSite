import { useEffect, useState } from "react"
import NavigationBar from "../components/NavigationBar"
import { Card, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

function Creators() {
    const [devs, setDevs] = useState()

    function shuffleArray(array) {
        // Create a copy of the input array to avoid modifying the original array
        const shuffledArray = [...array];

        // Fisher-Yates shuffle algorithm
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        setDevs(array)
    }

    useEffect(() => {
        const developers = [
            {
                name: "Rylan Workman",
                imageUrl: "https://i.postimg.cc/br3MMsHG/Rylan.jpg",
                description: `When I was younger I really enjoyed learning about technology. One project I did was taking a laptop base and making it work without the display. I guess you can say I ran my laptop "headless". This led to my interest in development, little did I know that I would go so much further to learn things like Javascript, mySQL, React and much more. It also led to my further interest in tinkering with hardware. I've made my own homemade NAS and turned it into a VPN so I can access my files from anywhere in the world. I learned so much going through projects like that!
                Today, I stay up-to-date on the community around technology and development because that is what I love to do. I'm excited to create applications and devices that will improve the world around me!`,
                linkedIn: "https://www.linkedin.com/in/rylanworkman/",
                position: "DevOps & Backend Developer"
            },
            {
                name: "Anne Kinsman",
                imageUrl: "https://i.postimg.cc/bY9jkvbf/Anne.jpg",
                description: "With curiosity as my compass in the world of technology, I will unravel digital mysteries and craft new innovative solutions. My goal is with each line of code, to leave a lasting impact for those around me while pushing the boundaries of what is possible. Where will your curiosity lead you?",
                linkedIn: "https://www.linkedin.com/in/anne-kinsman/",
                position: "API, Frontend & Backend Developer"
            },
            {
                name: "Momo Barlow",
                imageUrl: "https://i.postimg.cc/KjcMKwL3/IMG-9086.jpg",
                description: `Nothing is impossible! Never stop growing! Problem solving is my skill!`,
                linkedIn: "https://www.linkedin.com/in/momobarlow/",
                position: "Backend Developer"
            },
            {
                name: "Andrew Brown",
                imageUrl: "https://i.postimg.cc/k4rdF6fq/andrew.jpg",
                description: "My resume states that I am a Software Developer/Professional Dancer. I have extensive experience with the JavaScript MERN stack. I have developed apps that utilize a React front end connected to a Node.js backend using either a MySQL database or a MongoDB database, along with authentication and API calls. I was also a competitive ballroom dancer for nearly a decade. ",
                linkedIn: "https://www.linkedin.com/in/andrew-f-g-brown/",
                position: "Frontend Developer"
            },
            {
                name: "Jeff Ordway",
                imageUrl: "https://i.postimg.cc/5N9W3MqY/Jeff.jpg",
                description: "Hey there! It’s me, Jeff Ordway. I’m a former Parks and Recreation professional turned avid developer, designer, and marketer. I am passionate about harnessing my creativity, problem-solving skills, and adventurous spirit to design innovative, delightful solutions that inspire hope, ignite joy, and empower others.",
                linkedIn: "https://www.linkedin.com/in/jeffordway/",
                position: "UXUI Designer & Frontend Developer"
            }
        ]

        shuffleArray(developers)
    }, []);

    return (
        <>
            <Helmet>
                <meta name="title" content="Church Hive - Connect with Churches" />
                <meta name="description" content="Church Hive is a platform where churches can share their events
                with their congregation and users" />
                <meta name="keywords" content="Church Hive, Connect with Churches, Church services, Church
                website, Church events, church events near me, church locations, church details, Church Hive App
                Play Store, App store, Church Hive Creators, find Churches, who made Church Hive" />
                <meta name="robots" content="index, follow" />
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="language" content="English" />
                <link rel='canonical' href='/' />
            </Helmet>
            <NavigationBar />
            <Container>
                <Row>
                    {devs ? (
                        <>
                            {devs.map((dev) => {
                                return (
                                    <Card className="col-12 profileCard">
                                        <Card.Body>
                                            <Row>
                                                <div className="col-12">
                                                    <a href={dev.linkedIn} target="_blank" rel="noreferrer">
                                                        <h4>{dev.name}</h4>
                                                    </a>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-3">
                                                    <img src={dev.imageUrl} alt="Church Hive Creator" className="col-12 profilePhoto" />
                                                </div>
                                                <div className="col-12 col-md-8 col-lg-9">
                                                    <b><p className="position">{dev.position}</p></b>
                                                    <div className="col-12 devdes">
                                                        <p>{dev.description}</p>
                                                    </div>
                                                </div>
                                            </Row>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </>
                    ) : (
                        <>
                            <p>An error has occoured</p>
                        </>
                    )}
                </Row>
            </Container>
        </>
    )
}
export default Creators