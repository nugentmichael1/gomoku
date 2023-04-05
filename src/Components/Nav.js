
//Function to create list of <Link> tags based on pages configuration file
import buildLinksList from "../AuxilaryFunctions/buildLinksList";

//Navigation
import { Link } from "react-router-dom";

const buildNav = () => {

    //JSON file of links does not include "Home".
    const linksList = [
        <Link to={'/'} key='/'>
            <li>
                Home
            </li>
        </Link>
    ]

    linksList.push(buildLinksList())

    return <nav>
        <ul>
            {linksList}
        </ul>
    </nav>
}

const Nav = () => {
    return buildNav();
};

export default Nav;