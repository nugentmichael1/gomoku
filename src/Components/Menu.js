

import buildLinksList from "../AuxilaryFunctions/buildLinksList";

const buildHomeMenu = () => {

    const homeMenuClassName = "mmenu"

    return <ul className={homeMenuClassName}>
        {buildLinksList()}
    </ul >
}

const Menu = () => {

    return buildHomeMenu();
};

export default Menu;