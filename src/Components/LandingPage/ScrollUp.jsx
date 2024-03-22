import { FaArrowUp } from "react-icons/fa";
import { useEffect, useState } from "react";
import '../../index.css';

const ScrollUp = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (window.scrollY >= (0.7 * window.innerHeight)) {
            setShow(true);
            console.log('jigh');
        } else {
            setShow(false);
        }
    });

  return (
        <button className={`${show ? 'show' : 'hide'} scroll`} onClick={window.scrollTo({ top: 0, behavior: "smooth"})}>
            <FaArrowUp size={48} color="#3d1551" />
        </button>
    )
}

export default ScrollUp