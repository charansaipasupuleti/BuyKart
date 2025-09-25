import Navigation1 from '/src/Components/Navigation1.jsx';
import Navigation2 from '/src/Components/Navigation2.jsx';
import Scroll from '/src/Components/Scroll.jsx';
import Body from '/src/Components/Body.jsx';
import Payacceptedon from '/src/Components/Payacceptedon.jsx';
import Footer from '/src/Components/Footer.jsx';
import './App.css';
import Artboard from './Components/Artboard.jsx';
import Artboard2 from './Components/Artboard2.jsx';
import {useState} from 'react';


function App() {
   let [cart,setCart]=useState(0);
  const addToCart=()=>{
            setCart((cart)=>cart+1);
       }
  return (
    <>
      <Navigation1 cartCount={cart} />
      <Navigation2 />
       <Scroll /> 
       <Artboard />
      <Body setCart={setCart} addToCart={addToCart}/>
      <Artboard2 />
      <Payacceptedon />
      <Footer /> 
    </>
  );
}
export default App;
