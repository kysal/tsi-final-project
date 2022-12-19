import axios from "axios";

const ActorProvider = {

    getActor: async (actorId) => {
        const res = await axios.get('http://localhost:8080/actor/' + actorId);
        return await res.data;
    },

    getFilmsWithActor: async (actorId) => {
        const res = await axios.get('http://localhost:8080/actor/' + actorId + '/films');
        return await res.data;
    },

    getActorCostars: async (actorId) => {
        const res = await axios.get('http://localhost:8080/actor/' + actorId + '/costars');
        return await res.data;
    },
}

export default ActorProvider;