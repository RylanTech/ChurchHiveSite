import { Button, Container, Form, Row } from "react-bootstrap"
import NavigationBar from "../../components/NavigationBar"
import { useState } from "react"

function CEDeasy() {
    const [name, setName] = useState('')
    const [nameTwo, setNameTwo] = useState('')
    const [height, setHeight] = useState('600px')
    const [heightTwo, setHeightTwo] = useState('600px')
    const [width, setWidth] = useState('100%')
    const [widthTwo, setWidthTwo] = useState('100%')

    function handleChange() {
        setNameTwo(name)
        setHeightTwo(height)
        setWidthTwo(width)
    }

    return (
        <>
            <NavigationBar />
            <Container>
                <Row>
                        <div className="col-12 col-lg-6">
                        <div className="CA col-12">
                            <center>
                                <h2>How It Works</h2>
                            </center>
                            <p>CED works by you allowcating a portion of your website to Church Hive with a technology called iframe. In simple terms, you are putting our wesbite inside your website. How you position it is completely up to you and is configured on your website. Intergrating an iframe inside of a website veries depending on what you use to set up your website, here are some videos on the more common methods:</p>
                            HTML:<br />
                            <a href="https://youtube.com">Youtube video</a>
                            <br /><br />

                            WordPress:<br />
                            <a href="https://youtube.com">Youtube video</a>
                            <br /><br />
                        </div>
                        </div>

                       <div className="col-12 col-lg-6">
                       <div className="col-12 CA">
                            <p>
                                Type in your church's name below, and as long as it is on Church Hive, that church's events will show below in the preview. If your church has a space in it's name, use "-" in place of it.
                            </p>
                            Church:
                            <Form.Control
                                value={name}
                                onChange={((e) => { setName(e.target.value) })}
                            />
                            iframe height:
                            <Form.Control
                                value={height}
                                onChange={((e) => { setHeight(e.target.value) })}
                            />
                            iframe width:
                            <Form.Control
                                value={width}
                                onChange={((e) => { setWidth(e.target.value) })}
                            />
                            Note: both feilds can use pixels (px) or percentage (%)
                            <br />
                            <center>
                                <Button
                                    onClick={() => {
                                        handleChange(name)
                                    }}
                                >
                                    Apply To Preview
                                </Button>
                            </center>
                            <br />
                            iframe:<br />
                            <Form.Control
                            value={`<iframe width="${width}" height="${height}" src="https://localhost:3000/churcheventsdisplay/${name}"/>`}
                            />
                        </div>
                       </div>
                </Row>
                <br />
                <br />
                <center>
                    <h2>Preview:</h2>
                </center>
                <br />
                    <center>
                    <iframe className="churchevents" width={widthTwo} height={heightTwo} src={`http://localhost:3000/churcheventsdisplay/${nameTwo}`} />
                    </center>
            </Container>
        </>
    )
}
export default CEDeasy