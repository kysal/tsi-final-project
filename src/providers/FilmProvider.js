import axios from "axios";


const FilmProvider = {
    getFilmList: async (pageNum) => {
        const res = await axios.get('http://localhost:8080/film/page/' + pageNum)
        return await res.data;
    },

    getFilmListWithSearchTerm: async (pageNum, searchTerm) => {
        const res = await axios.get('http://localhost:8080/film/page/' + pageNum + '/search/' + searchTerm);
        return await res.data;
    },

    getFilm: async (filmId) => {
        const res = await axios.get('http://localhost:8080/film/' + filmId);
        return await res.data;
    },

    getActorsInFilm: async (filmId) => {
        const res = await axios.get('http://localhost:8080/film/' + filmId + '/actors');
        return await res.data;
    },

    getFilmScore: async (filmId) => {
        const res  = await axios.get('http://localhost:8080/rating/film/' + filmId);
        return await res.data;
    }
}

export default FilmProvider;