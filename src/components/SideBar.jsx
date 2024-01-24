import Button from "./Button"

function SideBar({ openBar, controlSideBar, cart, setCart, cacheAmount, setOpenModal }) {
    const removeFromCart = (index) => setCart(cart.filter((_, i) => i !== index));

    return (
        <div className = {`sidebar ${openBar}`}>
           <Button className={"btn-close"} handler = {controlSideBar}>Close Cart</Button>
           <h2>Shopping List</h2>
           <h3>
            - Your total amount {cacheAmount > 0 ? cacheAmount.toFixed(2) : 0} $
           </h3>
            <div className="sidebar-content">
                {
                    cart.map((coin, i) => {

                        return (
                            <div className="sidebar-items">
                                <img src = {coin.image} alt = {coin.name} className="sidebar-icon"/>
                                <p>{coin.name}</p>
                                <p>${coin.price}</p> 
                                <p>Sum: {coin.amount}</p>
                                <Button className="btn-remove" handler = {() => removeFromCart(i)}>x</Button>
                            </div>
                        )
                    })
                }
              {cart.length !== 0 && 
              <div className="btn-container">
              <Button className={"btn-green"} handler = {() => setOpenModal(true)}>Buy Crypto</Button>
              <Button className={"btn-red"} handler={() => setCart([])}>Clear cart</Button>
              </div>
              }
              
            </div>
        </div>
    )
}

export default SideBar
