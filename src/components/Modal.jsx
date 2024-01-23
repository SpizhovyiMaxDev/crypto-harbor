import Button from "./Button";

function Modal({ setCart, cacheAmount }){
    return (
       <div className="modal"> 
            <h1>Your total amount is ${cacheAmount}</h1>
            <h3> Please confirm your purchase</h3>
            <Button className={"btn-green"} handler = {() => setCart([])}>Confirm</Button>
       </div>
    )
}



export default Modal;