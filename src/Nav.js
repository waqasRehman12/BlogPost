import React from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import DataContext from "./Context/DataContext";
const Nav = () => {
    const { search, setSearch } = useContext(DataContext);
    return (
        <nav className="Nav">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
                <input
                    className="SearchPosts"
                    id="search"
                    type="text"
                    value={search}
                    placeholder="Search posts"
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
            <ul>
                <li>
                    <NavLink className="navlink" to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/post">
                        AddPost
                    </NavLink>
                </li>
                <li>
                    <NavLink className="navlink" to="/about">
                        About
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
