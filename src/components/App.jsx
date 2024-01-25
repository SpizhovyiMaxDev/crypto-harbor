import { useState } from "react"
import Button from "./Button"
import Input from "./Input";
import Logo from "./Logo";
import NavBar from "./NavBar";
import Main from "./Main"
import useCrypto from "../hooks/useCrypto";
import Container from "./Container";
import CryptoList from "./CryptoList";
import Footer from "./Footer";
import SideBar from "./SideBar";
import useToLocalStorageState from "../hooks/useSetToLocalStorageState"
import Modal from "./Modal";

function App() {
  const [ query, setQuery ] = useState("");
  const [ cart, setCart ] = useToLocalStorageState("cart", []);
  const [ status, data ] = useCrypto();
  const [ openBar, setOpenBar ] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const coins = data?.filter(coin => coin.name.toLowerCase().includes(query.trim().toLowerCase()));
  const cacheAmount = cart.reduce((acc, val) => acc + +val.price, 0)

  function controlSideBar(){
    setOpenBar(str => str === "" ? "open" : "");
  }

  return (
    <Main>
      <NavBar>
           <Logo/> 
           <Input setQuery={setQuery} />
           <Button className={"btn-purple"} handler={controlSideBar}>
             🛒 Shopping Cart
           </Button>
      </NavBar>
      <Modal cacheAmount={cacheAmount} setCart={setCart} openModal = {openModal} setOpenModal = {setOpenModal} cart = {cart}/> 
      <SideBar openBar = {openBar} controlSideBar = {controlSideBar} cart = {cart} setCart = {setCart} cacheAmount = {cacheAmount} setOpenModal = {setOpenModal}/>
      <Container>
            {status === "loading" && <p className = "loading">Loading...</p>}
            {status === "active" && <CryptoList coins = {coins} setCart = {setCart} cart = {cart}/>}
            {status === "error" && <p className="error">Somwthing went wrong...</p>}
            {coins?.length === 0 && <p className="not-fuond">Current crypto doesn't exist...</p>}
      </Container>
      <Footer />
    </Main>
  )
}

export default App

