import { useContext } from "react";
import { ImgSource } from "../App";

export const Krebs = () => {
    
    const { source } = useContext(ImgSource);
    
    return (
        <>
            <h1 className="heading"> Krebs Cycle. </h1>
            <p> The Krebs Cycle or Citric Acid Cycle, is where glucose gets completely broken down. It occurs more than once occuring in the Mitochondrial Matrix and produces the products 6NADH, 2FADH, 4CO<sub>2</sub>, 2 ATP from Acetoyl-CoA. </p>
            <img alt="krebs_cycle" className="img" src={source} />
        </>
    );
}