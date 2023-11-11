import { useEffect, useState } from "react"
import NavigationBar from "../components/NavigationBar"
import { Card, Container, Row } from "react-bootstrap";

function Creators() {
    const [devs, setDevs] = useState()


    const developers = [
        {
            name: "Rylan Workman",
            imageUrl: "/Rylan.jpg",
            description: `When I was younger I really enjoyed learning about technology. One project I did was taking a laptop base and making it work without the display. I guess you can say I ran my laptop "headless". This led to my interest in development, little did I know that I would go so much further to learn things like Javascript, mySQL, React and much more. It also led to my further interest in tinkering with hardware. I've made my own homemade NAS and turned it into a VPN so I can access my files from anywhere in the world. I learned so much going through projects like that!
            Today, I stay up-to-date on the community around technology and development because that is what I love to do. I'm excited to create applications and devices that will improve the world around me!`,
            linkedIn: "https://www.linkedin.com/in/rylanworkman/",
            position: "DevOps Engineer & Backend Developer"
        },
        {
            name: "Anne Kinsman",
            imageUrl: "/Anne.jfif",
            description: "With curiosity as my compass in the world of technology, I will unravel digital mysteries and craft new innovative solutions. My goal is with each line of code, to leave a lasting impact for those around me while pushing the boundaries of what is possible. Where will your curiosity lead you?",
            linkedIn: "https://www.linkedin.com/in/anne-kinsman/",
            position: "API Engineer, Frontend Developer & Backend Developer"
        },
        {
            name: "Momo Barlow",
            imageUrl: "/momo.jfif",
            description: `Nothing is impossible! Never stop growing! Problem solving is my skill!`,
            linkedIn: "https://www.linkedin.com/in/momobarlow/",
            position: "Backend Developer"
        },
        {
            name: "Andrew Brown",
            imageUrl: "/andrew.JPG",
            description: "My resume states that I am a Software Developer/Professional Dancer. I have extensive experience with the JavaScript MERN stack. I have developed apps that utilize a React front end connected to a Node.js backend using either a MySQL database or a MongoDB database, along with authentication and API calls. I was also a competitive ballroom dancer for nearly a decade. ",
            linkedIn: "https://www.linkedin.com/in/andrew-f-g-brown/",
            position: "Frontend Developer"
        },
        {
            name: "Jeff Ordway",
            imageUrl: "/Jeff.jfif",
            description: "Hey there! It’s me, Jeff Ordway. I’m a former Parks and Recreation professional turned avid developer, designer, and marketer. I am passionate about harnessing my creativity, problem-solving skills, and adventurous spirit to design innovative, delightful solutions that inspire hope, ignite joy, and empower others.",
            linkedIn: "https://www.linkedin.com/in/jeffordway/",
            position: "UXUI Designer & Frontend Developer"
        }
    ]

    function shuffleArray(array) {
        // Create a copy of the input array to avoid modifying the original array
        const shuffledArray = [...array];

        // Fisher-Yates shuffle algorithm
        for (let i = shuffledArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }

        return shuffledArray;
    }

    useEffect(() => {
        setDevs(shuffleArray(developers))
    }, []);

    return (
        <>
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
                                                    <a href={dev.linkedIn} target="_blank">
                                                        <h4>{dev.name}</h4>
                                                    </a>
                                                </div>
                                                <div className="col-12 col-md-4 col-lg-3">
                                                    <img src={dev.imageUrl} className="col-12 profilePhoto" />
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