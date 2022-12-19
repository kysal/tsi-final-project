import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FilmProvider from "../providers/FilmProvider";
import FilmActorList from "./FilmActorList";
import FilmRating from "./FilmRating";


function Film(props) {
    
    const [isLoading, setLoading] = useState(true);
    const [film, setFilm] = useState({});

    useEffect(() => {
        fetchFilm();
    }, [props])


    const fetchFilm = async () => {
        const data = await FilmProvider.getFilm(props.filmId);
        setFilm(data);
        setLoading(false);
    }

    if (isLoading) return (<div>Loading</div>)
    
    return (
        <div>
            <table><tbody><tr>
            <td>
                <h2>
                    <span title='Film title'>{film.title}</span>
                    <span id="release-year" className="release-year"> ({film.releaseYear})</span>
                    <br />
                    <small><span id="run-length" className="release-year">{film.length}mins</span></small>
                </h2>
                <blockquote id="description">{film.description}</blockquote>

                <h3>Actors</h3>
                <FilmActorList filmId={film.filmId}/>
            </td>
            <td>
                <div className="rating-side-bar">
                <h3>Aggregate Rating</h3>
                <p id="score"><FilmRating filmId={film.filmId}/></p>
        
                <h3>Your Rating</h3>
                <Link to='/login'>
                    <button className="button-primary">Log In</button>
                </Link>
                </div>
            </td>
            </tr></tbody></table>
        </div>
    );
}

export default Film;