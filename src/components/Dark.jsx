import {useEffect} from 'react'

export default function Dark({zIndex, onClick, show}) {

    useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [show]);

    return (
        <div onClick={onClick} className={`${zIndex} w-full fixed h-full backdrop-blur-lg left-0 top-0 bg-black/50 ${show ? '' : 'hide'} `}>
            
        </div>
    )
}