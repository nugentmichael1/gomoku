
//Navigation
import { Link } from "react-router-dom";


//Pages data
const pages = require("../Configurations/Pages.json")


const buildNav = () => {

    const linksList = []

    //JSON file of links does not include "Home".
    linksList.push(
        <Link to={'/'} key='/'>
            <li>
                Home
            </li>
        </Link>
    )

    pages.forEach((page) => {

        linksList.push(
            <Link to={'/' + page} key={page}>
                <li>
                    {page}
                </li>
            </Link>
        )

    })

    return <ul>{linksList}</ul>

}

const Nav = () => {
    return buildNav();
};

export default Nav;