import { useContext } from "react";
import { ImgSource } from "../App";

export const Home = () => {
    
    const { source } = useContext(ImgSource);
    
    return (
        <>
            <h1> This is the homepage, currently source is "{source}".</h1>
        </>
    );
}