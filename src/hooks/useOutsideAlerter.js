import { useEffect } from "react";

function useOutsideAlerter(ref) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                let emptyCell = document.querySelectorAll('.emptyCell').forEach((item,index) => {
                    return item.classList.add('disabled');
                });
                console.log(emptyCell);
            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

export default useOutsideAlerter;