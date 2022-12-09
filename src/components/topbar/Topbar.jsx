import {NavLink, Link} from "react-router-dom";
import "./topbar.css";
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userLogoutThunk} from "../../services/users/user-thunks";

export default function Topbar() {
    const {
        currentUser,
    } = useSelector(state => state.users);
    const dispatch = useDispatch();
    console.log(currentUser)
    const logoutClickHandler = () => {
        dispatch(userLogoutThunk());
        window.open('/');
    }
    return (
        <div className="top">
            <div className="topCenter">
                <nav className="topList">
                    <li className="topListItem"><NavLink className="link" exact to="/">HOME</NavLink></li>
                    {/*<li className="topListItem">ABOUT</li>*/}
                    <li className="topListItem"><NavLink className="link" to="/forum">FORUM</NavLink></li>

                    {currentUser ? (
                        <NavLink className="link" to="/profile">
                            <li className="topListItem">PROFILE</li>
                        </NavLink>
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <NavLink className="link" to="/login">LOGIN</NavLink>
                            </li>
                            <li className="topListItem">
                                <NavLink className="link" to="/register">REGISTER</NavLink>
                            </li>
                        </ul>
                    )}

                    <li className="topListItem" onClick={logoutClickHandler}>
                        LOGOUT
                    </li>
                    <li className="topListItem">
                        <NavLink className="link" to="/test">
                            TEST
                        </NavLink>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/search">
                            <i className="topSearchIcon fas fa-search"></i>
                        </Link>
                    </li>
                </nav>
                </div>
        </div>
    );
}
