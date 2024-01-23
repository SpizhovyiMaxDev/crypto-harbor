function Input({ setQuery }){
    return <input onChange = {e => setQuery(e.target.value)} type = "text" placeholder = "Search crypto..." />
}

export default Input;