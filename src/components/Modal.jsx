import Button from "./Button";

function Modal({ setCart, cacheAmount, openModal, setOpenModal, cart }){

     

    return (
       <div className={`modal ${openModal === true ? "open-modal" : ""}`}> 
           {cart.length > 0 ?  
           <>
            <h1>Your total amount is ${cacheAmount.toFixed(2)}</h1>
            <h3> Please confirm your purchase</h3>
            <div className="btn-container">
                <Button className={"btn-red"} handler = {() => setOpenModal(false)}>Go back</Button>
                <Button className={"btn-green"} handler = {() => setCart([])}>Confirm</Button>
            </div>
           </> :
           <>
             <h4 className="purchased">Thank you a lot for the purchase! 🎉</h4>
             <Button className={"btn-red"} handler = {() => setOpenModal(false)}>Go back</Button>
           </>
           }

       </div>
    )
}



export default Modal;