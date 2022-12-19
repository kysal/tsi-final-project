import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ActorProvider from "../providers/ActorProvider";

function ActorCostarList(props) {

    const [costarList, setCostarList] = useState([]);
    useEffect(() => {
        fetchCostarsInActor(props.actorId)
    }, []);

    const fetchCostarsInActor = async (actorId) => {
        const data = await ActorProvider.getActorCostars(actorId);
        setCostarList(data.slice(0, props.limit));
    }

    return (
        <div>
            {costarList.map(actor => (
                <Link to={'/actor/' + actor.actorId} key={actor.actorId}>
                    <div>
                        {actor.firstName + ' ' + actor.lastName 
                        + " (" + actor.relations + ' film' + (actor.relations === 1 ? '' : 's') + ')'}
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ActorCostarList;