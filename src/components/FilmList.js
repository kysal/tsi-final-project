import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import FilmProvider from "../providers/FilmProvider";
import Pagination from "./Pagination";

import './FilmList.css'


function FilmList() {

    const [page, setPage] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchParams, setSearchParams] = useSearchParams();
    const [filmList, setFilmList] = useState([]);
    const [message, setMessage] = useState("");
    const [pageInit, setPageInit] = useState(false);

    useEffect(() => {
        fetchFilmList(0)
    }, [])

    const initParams = (pageNum) => {
        let tempPage = searchParams.get('page');
            if (tempPage === null) pageNum = 0;
            else pageNum = Number(tempPage) - 1;
            setPageInit(true);
    }

    const fetchFilmList = async (pageNum) => {
        if (pageNum < 0) return;
        if (!pageInit) initParams(pageNum);

        let data;
        if (searchTerm === "" || searchTerm === null) {
            data = await FilmProvider.getFilmList(pageNum);
        } else {
            try {
                if (searchTerm.includes('/')) throw "Invalid symbol"
                data = await FilmProvider.getFilmListWithSearchTerm(pageNum, searchTerm);
            } catch (error) {
                console.error(error);
                setMessage("Sorry search failed: " + error)
            }
        }

        setFilmList(data.content);
        setPage(pageNum);
        setSearchParams({page: pageNum + 1, search: (searchTerm === "" ? null : searchTerm)})
        setMessage("Found " + data.totalElements + " results")
    }

    const handleSearchChange = event => {
        setSearchTerm(event.target.value);
    }

    return (
        <div>
            <div className="search">
                <input id="search" title="search bar" name="search" onChange={handleSearchChange} type="text"/>
                <button className="button-primary" name="search button" title="search button" type="button" onClick={() => fetchFilmList(0)}>Search</button>
                <div>{message}</div>

                <Pagination className="Pagination" page={page} onClick={fetchFilmList}/>

            </div>

            <div id="film-list">
                {filmList.map(film => 
                    (<div title='listitem' id='listitem' key={film.filmId}>
                        <Link to={"/film/" + film.filmId} >
                            <div className="film-list-item">
                                {film.title}
                            </div>
                        </Link>
                    </div>
                    )
                )}
            </div>

        </div>
    )
}

export default FilmList;