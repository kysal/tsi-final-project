import { useParams } from "react-router-dom";
import Film from "../components/Film";


function FilmPage() {

    const params = useParams()

    return (
        <div className="main-content">
            <Film filmId={params.filmId} />
        </div>
    )
}


export default FilmPage;