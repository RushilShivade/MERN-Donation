import Home from "../HomePage";
import { useContext } from "react";
import { AppContext } from "../App";

export default function NavBar() {

    const {value, handleClick} = useContext(AppContext);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
            <div className="container">
                <a className="navbar-brand" href="/">Bangalore Food Bank</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                    {value ? <Home /> : <button onClick={handleClick} className="btn btn-success ml-lg-3">Sign in</button>}

                </div>

            </div>
        </nav>
    )
}