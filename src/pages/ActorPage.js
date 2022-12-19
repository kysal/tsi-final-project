import { useParams } from "react-router-dom";
import Actor from "../components/Actor";


function ActorPage() {

    const params = useParams()

    return (
        <div className="main-content">
            <Actor actorId={params.actorId} />
        </div>
    )
}

export default ActorPage;