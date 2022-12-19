import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilmProvider from "../providers/FilmProvider";


function FilmActorList(props) {

    const [actorList, setActorList] = useState([]);
    useEffect(() => {
        fetchActorsInFilm()
    }, [props])

    const fetchActorsInFilm = async () => {
        const data = await FilmProvider.getActorsInFilm(props.filmId);
        setActorList(data)
    }

    return (
        <div>
            {actorList.map(actor => (
                <Link to={'/actor/' + actor.actorId} key={actor.actorId}>
                    <div>{actor.firstName + " " + actor.lastName}</div>
                </Link>
            ))}
        </div>
    )
}

export default FilmActorList;