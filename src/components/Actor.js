import { useState, useEffect } from "react"
import ActorCostarList from "./ActorCostarList";
import ActorFilmList from "./ActorFilmList";
import ActorProvider from "../providers/ActorProvider";


function Actor(props) {

    const [isLoading, setLoading] = useState(true)
    const [actor, setActor] = useState({});
    useEffect(() => {
        fetchActor();
    }, [props])

    const fetchActor = async () => {
        setLoading(true);
        const data = await ActorProvider.getActor(props.actorId)
        setActor(data);
        setLoading(false);
    }

    if (isLoading) return (<div>Loading</div>)

    return (
        <div data-testid="actor-1" id='content' >
            <h1 title="Actor Name">{actor.firstName + " " + actor.lastName}</h1>
            <h2 title="Films Header">Films</h2>
            <ActorFilmList actorId={actor.actorId} />
            <h2>Frequently Co-stars With </h2>
            <ActorCostarList actorId={actor.actorId} limit={5} />
        </div>
    )

}

export default Actor;