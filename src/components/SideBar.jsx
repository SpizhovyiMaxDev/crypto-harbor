import Button from "./Button"

function SideBar({ openBar, controlSideBar, cart, setCart }) {
    const removeFromCart = (coin) => setCart(cart.filter(c => c.name !== coin.name));

    return (
        <div className = {`sidebar ${openBar}`}>
           <Button className={"btn-close"} handler = {controlSideBar}>Close Cart</Button>
           <h2>Your Shopping List</h2>
            <div className="sidebar-content">
                {
                    cart.map(coin => {
                        return (
                            <div className="sidebar-items">
                                <img src = {coin.image} alt = {coin.name} className="sidebar-icon"/>
                                <p>{coin.name}</p>
                                <p>${coin.price}</p> 
                                <p>Sum: {coin.amount}</p>
                                <Button className="btn-remove" handler = {() => removeFromCart(coin)}>x</Button>
                            </div>
                        )
                    })
                }
              {cart.length !== 0 && <Button className={"btn-green"}>Buy</Button>}
              
            </div>
        </div>
    )
}

export default SideBar
