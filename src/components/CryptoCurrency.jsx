import  { useState } from "react";

function CryptoCurrency({ coin, setCart, cart }) {
    const [amount, setAmount] = useState(1);

    function addCart() {
        if(amount === 0)return;

        const updatedCart = [...cart];
        const cryptoIndex = cart.findIndex(crypto => crypto.name === coin.name);

        if(cryptoIndex === -1){
            const newCrypto = {
                    name: coin.name,
                    price: (+coin.price * amount).toFixed(2),
                    image: coin.iconUrl,
                    amount: amount,
            };

            updatedCart.push(newCrypto)
        } else {
            const updatedCrypto = updatedCart[cryptoIndex];
            updatedCrypto.amount += amount;
            updatedCrypto.price = (+coin.price * updatedCrypto.amount).toFixed(2)
        }

        setCart(updatedCart);
        setAmount(1);
    }
    

    function handleEvent(e){
        if(e.target.value >= 0 && e.target.value < 200){
            setAmount(+e.target.value);
        } else {
            alert("Your numbers has to be bellow or equal 200")
        }
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
                <input type = "number" className="crypto-input" value={amount} onChange={handleEvent} /> 
            </li>

        </ul>
    )
}

export default CryptoCurrency
