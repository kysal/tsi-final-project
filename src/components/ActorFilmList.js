import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import ActorProvider from "../providers/ActorProvider";

function ActorFilmList(props) {

    const [filmList, setFilmList] = useState([]);
    useEffect(() => {
        fetchFilmsInActor(props.actorId)
    }, [props]);

    const fetchFilmsInActor = async (actorId) => {
        const data = await ActorProvider.getFilmsWithActor(actorId);
        setFilmList(data);
    }
 
    return (
        <div>{filmList.map(film => (
            <Link id='listitem' to={'/film/' + film.filmId} key={film.filmId}>
                <div>{film.title}</div>
            </Link>
        ))}</div>
    )
}

export default ActorFilmList;