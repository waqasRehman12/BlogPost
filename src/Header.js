import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "./Hooks/useWindowSize";
import { Link } from "react-router-dom";
const Header = ({ title }) => {
    const { width } = useWindowSize();

    return (
        <header className="PageHeader">
            <Link to="/">{title}</Link>
            {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
        </header>
    );
};

export default Header;
