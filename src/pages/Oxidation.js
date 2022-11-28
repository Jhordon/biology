import { useContext } from "react";
import { ImgSource } from "../App";

export const Oxidation = () => {
    
    const { source } = useContext(ImgSource);
    
    return (
        <>
            <h1 className="heading"> Pyruvate Oxidation. </h1>
            <p> Pyruvate Oxidation is where the two pyruvates go and get turned into Acetoyl-CoA. This process occurs inside of the Mitochondrial Matrix.</p>
            <img alt="pyruvate_oxidation" className="img" src={source} />
        </>
    );
}