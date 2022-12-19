import './Pagination.css';

function Pagination(props) {

    return (
        <div>
            <button className="button-primary" onClick={() => props.onClick(props.page-1)}>
                {"<-"}
            </button>
            <span className="page-number"> 
                {props.page+1} 
            </span>
            <button className="button-primary" onClick={() => props.onClick(props.page+1)}>
                {"->"}
            </button>
        </div>
    )
}

export default Pagination;