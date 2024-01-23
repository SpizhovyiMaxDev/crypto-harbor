import { useState, useEffect } from "react";

function useSetToLocalStorageState(key, initialState){
    const [value, setValue] = useState(function (){
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : initialState;
    })

    useEffect(function(){
        localStorage.setItem(key, JSON.stringify(value));
    }, [value])

    return [value, setValue];
}


export default useSetToLocalStorageState;