import CryptoCurrency from "./CryptoCurrency"

function CryptoList({ coins, setCart, cart }) {
    return (
        <div className = "ctypto-box">
            {
                coins.map(coin => {
                    return ( 
                        <CryptoCurrency 
                            key = {coin.name} 
                            coin = {coin} 
                            setCart = {setCart} 
                            cart = {cart} 
                        />
                    )
                })
            }
        </div>
    )
}

export default CryptoList;
