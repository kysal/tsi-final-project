import axios from "axios";
import { useEffect, useState } from "react"
import FilmProvider from "../providers/FilmProvider";

function FilmRating(props) {

    const [rating, setRating] = useState(0);
    useEffect(() => {
        fetchRating();
    }, [])

    const fetchRating = async () => {
        const data = await FilmProvider.getFilmScore(props.filmId);
        setRating(data);
    }

    return (
        <span>{rating}</span>
    )
}

export default FilmRating;