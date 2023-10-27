import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Container, Row } from 'react-bootstrap'
import { ChurchContext } from "../../contexts/churchContexts"

function Church2() {
    const [chrch, setChrch] = useState({
        userId: 0,
        churchName: "",
        denomination: "",
        location: {
            street: "",
            city: "",
            state: "",
            zip: "",
        },
        phoneNumber: "",
        churchEmail: "",
        welcomeMessage: "",
        serviceTime: "",
        imageUrl: "",
        website: "",
        Events: []
    })

    const params = useParams()
    let church = params.churchName
    church = church.replace(/-/g, " ");
    const backgroundColor = params.backgroundColor;
    const elements = document.getElementsByClassName("background");

    console.log(backgroundColor)
    
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = `#${backgroundColor}`;
    }
    
    
    const { getChurch } = useContext(ChurchContext)

    useEffect(() => {
        async function gettingChurch() {
            let ch = await getChurch(church)

            ch.Events = ch.Events.reverse()
            

            setChrch(ch)
        }
        gettingChurch()
    }, [])

    function churchHeader() {
        if (chrch.imageUrl !== "blank") {
            return (
                <>
                    <img src="/ChurchHive.png" className="chimg" />
                    <div className="churchName">{chrch.churchName}</div>
                </>
            )
        } else {
            return (
                <>
                    <img src="/ChurchHive.png" className="chimg" />
                    <center>{chrch.churchName}</center>
                    <img src={chrch.imageUrl} className="chimg3" />
                </>
            )
        }
    }

    function mapThroughEvents() {
        return chrch.Events.map((event) => {
            function convertUtcToLocal(utcDateString) {
                const utcDate = new Date(utcDateString);
                const localDate = new Date(utcDate.getTime() + utcDate.getTimezoneOffset() * 60000);
                return localDate;
            }

            const thisIsoDate = new Date(convertUtcToLocal(event.date))
            const isoDate = new Date(thisIsoDate);
            const formatDate = Intl.DateTimeFormat("en-us", {
                dateStyle: "long",
            });
            const formatDay = Intl.DateTimeFormat("en-us", {
                weekday: "long",
            });
            const formatTime = Intl.DateTimeFormat("en-us", {
                timeStyle: "short",
            });

            const eventDate = isoDate ? formatDate.format(isoDate) : "";
            const eventDay = isoDate ? formatDay.format(isoDate) : "";
            const eventTime = isoDate ? formatTime.format(isoDate) : "";

            let location = event.location

            return (
                <>
                    <br />
                    <div className="eventModule col-12">
                        <h3><b>{event.eventTitle}</b></h3>
                        {eventDay}, {eventDate} at {eventTime}
                        <br/><br/>
                        <b>Description:</b><br/>
                        {event.description}
                        <br/><br/>
                        <b>Location:</b><br/>
                        {location.street}<br/>
                        {location.city} {location.state}, {location.zip}
                    </div>
                </>
            )
        })
    }

    return (
        <>
            {chrch ? (
                <>
                    <div className="background">
                    <div className="containr">
                    {churchHeader()}
                    <Container>
                        {mapThroughEvents()}
                    </Container>
                    </div>
                    </div>
                </>
            ) : (
                <>
                    Loading events...
                </>
            )}

        </>
    )
}
export default Church2