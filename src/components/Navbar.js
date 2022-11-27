import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div className="navbar">
            <Link className="link" to="/"> Cellular Respiration </Link>
            <Link className="link" to="/glycolysis"> Glycolysis </Link>
            <Link className="link" to="/oxidation"> Pyruvate Oxidation </Link>
            <Link className="link" to="/krebs"> Krebs Cycle </Link>
            <Link className="link" to="/phosphorylation"> Oxidative Phosphorylation </Link>
        </div>
    );
}