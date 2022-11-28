import { useContext } from "react";
import { ImgSource } from "../App";

export const Phosphorylation = () => {
    
    const { source } = useContext(ImgSource);

    return (
        <>
            <h1 className="heading"> Oxidative Phosphorylation. </h1>
            <p> Finally Oxidative Phosphorylation occurs in the Inner Membrane of the Mitochondria. It converts the 6NADH, 2FADH, 4CO<sub>2</sub>, 2 ATP into usable energy known as ATP or Adenosine Triphosphate for the cell. </p>
            <img alt="oxidative_phosphorylation" className="img" src={source} />
        </>
    );
}