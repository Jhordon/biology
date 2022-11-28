import { Link } from "react-router-dom";
import { ImgSource } from "../App";
import { useContext } from "react";

export const Navbar = () => {
    
    const { source, setSource } = useContext(ImgSource);

    /* on render no images are loaded intentionally
        on a click event on any of the tokens, the respective image gets loaded 
    */
    return (
        <div className="navbar">
            <Link className="link" to="/"> Home </Link>
            <Link className="link" to="/cellresp" onClick={() => {
                console.log("clicked cellresp and set source to " + source);
                setSource("http://4.bp.blogspot.com/-u6BXGH_uqmI/Vk7b_OoeIdI/AAAAAAAAAnY/EWnKv_dPByw/s1600/cellular_respiration%2Blocations.png")
            }}> Cellular Respiration </Link>
            <Link className="link" to="/glycolysis" onClick={() => {
                console.log("clicked glycolysis and set source to " + source);
                setSource("https://i.pinimg.com/originals/8c/08/6c/8c086c19109867cb7f51132f871d9ed0.png")
            }}> Glycolysis </Link>
            <Link className="link" to="/oxidation" onClick={() => {
                console.log("clicked oxidation and set source to " + source);
                setSource("https://www.macmillanhighered.com/BrainHoney/Resource/6716/digital_first_content/trunk/test/hillis2e/asset/img_ch6/c06_un110-02.jpg")
            }}> Pyruvate Oxidation </Link>
            <Link className="link" to="/krebs" onClick={() => {
                console.log("clicked krebs and set source to " + source);
                setSource("https://vectormine.b-cdn.net/wp-content/uploads/Krebs_Cycle.jpg")
            }}> Krebs Cycle </Link>
            <Link className="link" to="/phosphorylation" onClick={() => {
                console.log("clicked phosphorylation and set source to " + source);
                setSource("https://alevelbiology.co.uk/wp-content/uploads/2019/02/Oxidative-phosphorylation_1.jpg")
            }}> Oxidative Phosphorylation </Link>
        </div>
    );
}