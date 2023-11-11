import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ChurchContext } from "../../contexts/churchContexts"
import { Container, Row } from 'react-bootstrap'

function Church() {
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
    console.log(church)
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
            console.log(event)

            let location = event.location

            return (
                <>
                    <br />
                    <div className="eventModule col-12">
                        <h3><b>{event.eventTitle}</b></h3>
                        {eventDay}, {eventDate} at {eventTime}
                        <br /><br />
                        <b>Description:</b><br />
                        {event.description}
                        <br /><br />
                        <b>Location:</b><br />
                        {location.street}<br />
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
                    <Container>
                        <div className="churchHeader">
                        {churchHeader()}
                        </div>
                        {mapThroughEvents()}
                    </Container>
                </>
            ) : (
                <>
                    Loading events...
                </>
            )}

        </>
    )
}
export default Church