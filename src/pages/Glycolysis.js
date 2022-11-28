import { useContext } from "react";
import { ImgSource } from "../App";

export const Glycolysis = () => {
    
    const { source } = useContext(ImgSource);
    
    return (
        <>
            <h1 className="heading"> Glycolysis. </h1>
            <p> Glycolysis is the process of breaking down glucose into enzymes. Glucose is broken down to 2 pyruvates and occurs in the cytoplasm. </p>
            <img alt="glycolysis" className="img" src={source} />
        </>
    );
}