import { useEffect, useReducer } from "react";

const initialState = {
  status:"loading",
  data:null,
}

function reducer(state, action){
   switch(action.type){
    case "dataRecieved":
       return {status:"active", data:action.payload}
    case "error":
        return {...state, status:"error"}
    default:
      throw new Error("Action unknown")
   }
}

function useCrypto() {
  const [{status, data}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    (async function () {
      try {
        const response = await fetch(`https://api.coinranking.com/v2/coins`);

        if (!response.ok)
          throw new Error("Something went wrong with the web server");

        const fetchedData = await response.json();

        dispatch({type:"dataRecieved", payload:fetchedData.data.coins});
      } catch (err) {
        dispatch({type:"error", payload: err.message });
      }
    })();
  }, []);

  return [ status, data ]
}

export default useCrypto;
