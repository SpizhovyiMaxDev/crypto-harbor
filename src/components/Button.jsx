function Button({ className, children, handler }){
    return <button className = {className} onClick = {handler}>{ children }</button>
}
 
export default Button;