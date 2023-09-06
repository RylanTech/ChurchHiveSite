import { useEffect, useState } from "react"
import NavigationBar from "../components/NavigationBar"
import { Card, Container, Row } from "react-bootstrap";

function Creators() {
    const [devs, setDevs] = useState()


    const developers = [
        {
            name: "Rylan Workman",
            imageUrl: "",
            description: "test",
            linkedIn: ""
        },
        {
            name: "Anne Kinsmen",
            imageUrl: "",
            description: "test",
            linkedIn: ""
        },
        {
            name: "Momo Barlow",
            imageUrl: "",
            description: "test",
            linkedIn: ""
        },
        {
            name: "Andrew Brown",
            imageUrl: "",
            description: "test",
            linkedIn: ""
        },
        {
            name: "Jeff Ordway",
            imageUrl: "",
            description: "test",
            linkedIn: ""
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
    }, [])

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                    {devs ? (
                        <>
                            {devs.map((dev) => {
                                return (
                                    <Card className="col-12">
                                        <Card.Body>
                                            <div className="col-12">
                                                <h4>{dev.name}</h4>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <img src="" className="col-12"/>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                )
                            })}
                        </>
                    ) : (
                        <>

                        </>
                    )}
                </Row>
            </Container>
        </>
    )
}
export default Creators