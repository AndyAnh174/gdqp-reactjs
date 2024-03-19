import { memo } from "react";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";

const Learn = () => {
    return (
    <>
    <iframe className="pdf-custom" src="https://drive.google.com/file/d/12I51UZW0EaUlIh7PiNTXrI4tQHmgf2VM/preview" allow="autoplay"></iframe>
    
    </>
    
    );
};

export default memo(Learn);