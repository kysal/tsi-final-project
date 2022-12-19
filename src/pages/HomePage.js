import { Link } from "react-router-dom";


function HomePage() {


    return (
        <div>
            <table className="tab-holder">
                <tbody>
                    <tr>
                        <td className="tab">
                            <div className="tab-content">
                                <h2>Log In</h2>
                                <Link to='/login'>
                                    <button title="login button" className="button-primary">Log In</button>
                                </Link>
                            </div>
                        </td>
                        <td className="tab">
                        <div className="tab-content">
                            <h2>See All Films</h2>
                            <Link to="/filmlist">
                                <button title='film list button' className="button-primary">Film List</button>
                            </Link>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default HomePage;