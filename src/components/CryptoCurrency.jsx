import  { useState, useRef } from "react";

function CryptoCurrency({ coin, setCart, cart }) {
    const [amount, setAmount] = useState(1)
    const input = useRef(null);
    const hasCrypto = cart.find(c => c.name === coin.name);

    function addCart(){
            const newCrypto = {
                name:coin.name,
                price: (+coin.price * amount).toFixed(2),
                image:coin.iconUrl,
                amount: amount,
            }
        
            setCart(cards => [...cards, newCrypto]);
            setAmount(1)
    }

    function handleEvent(e){
        if(e.target.value <= 0)return;
        setAmount(e.target.value);
    }

    return (
        <ul className="crypto-item">
            <li>
                <div className="crypto-item_content">
                    <img className = "icon" src = {coin.iconUrl} alt = {coin.name}/>
                    <p>{coin.name}</p>
                </div>
            </li>

            <li>
                $ {Number(coin.price).toFixed(2)} 
            </li>

            <li>
                <span className={Number(coin.change) < 0 ? "low" : "high"}>{coin.change} %</span>
            </li>

            <li>
                Mkt Cap: Rs.{coin.marketCap}
            </li>

            <li>
                <button 
                className="btn-purple"
                onClick = {addCart}
                >
                  Add To Cart
                </button>
            </li>
            <li>
                <input type = "number" className="crypto-input" value={amount} onChange={handleEvent} ref = {input}/> 
            </li>

        </ul>
    )
}

export default CryptoCurrency
