import React, { Fragment } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { isAuthenticated, logout } from '../helpers/auth';

const Header = ({ history }) => {


    const handleLogout = evt => {
        logout(() => {
            history.push('/signin');
        });
    }


    const showNavigation = () => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Logo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                {!isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <Link className="nav-link" to="/"><i className="fas fa-home"></i> Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/signup"><i className="fas fa-edit"></i> SignUp </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="signin"><i className="fas fa-sign-in-alt"></i> SignIn</Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated()&& isAuthenticated().role ===0 && (
                    <Fragment>
                        <li className="nav-item">
                            <Link className="nav-link" to="/user/dashboard"><i className="fas fa-home"></i> Dashboard </Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated()&& isAuthenticated().role ===1 && (
                    <Fragment>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin/dashboard"><i className="fas fa-home"></i> Dashboard </Link>
                        </li>
                    </Fragment>
                )}

                {isAuthenticated() && (
                    <Fragment>
                        <li className="nav-item">
                            <button className="btn btn-link text-secondary text-decoration-none pl-0" onClick={handleLogout}><i className="fas fa-sign-out-alt"></i> Logout</button>
                        </li>
                    </Fragment>
                )}
                
            </ul>
        </div>
        </nav>
    );

    return <header id='header'>{showNavigation()}</header>

};

export default withRouter(Header);