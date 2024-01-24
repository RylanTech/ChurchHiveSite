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
                            <p>CED (Church Events Display) works by you allowcating a portion of your website to Church Hive with a technology called iframe. In simple terms, you are putting our wesbite inside your website. How you position it is completely up to you and is configured on your website. Intergrating an iframe inside of a website varies depending on what you use to set up your website, here are some youtube videos on the more common methods:</p>
                            HTML:<br />
                            <a target="_blank" rel="noreferrer" href="https://youtu.be/aRGdDy18qfY?si=2h-T-gKritj3I55o">"Learn HTML iframes in 3 minutes"</a>
                            <br /><br />

                            WordPress:<br />
                            <a target="_blank" rel="noreferrer" href="https://youtu.be/vqs5GbGmH64?si=jbbLRwcKIN7Sf4VM">"How to Embed an iFrame in WordPress (Responsive YouTube Embeds)"</a>
                            <br /><br />

                            Wix:<br />
                            <a target="_blank" rel="noreferrer" href="https://youtu.be/zVqPqDkpjyM?si=PQx9kkjw43UyD0B5">"How To Add HTML Code or Embed Codes in Wix"</a>
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
                                value={`<iframe width="${width}" height="${height}" src="https://churchhive.app/churcheventsdisplay/${name}"/>`}
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
                    <iframe title="Church Events Display" className="churchevents" width={widthTwo} height={heightTwo} src={`https://churchhive.app/churcheventsdisplay/${nameTwo}`} />
                </center>
            </Container>
        </>
    )
}
export default CEDeasy