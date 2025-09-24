
function Navigation1(){
    return(
        <>
        <div className="flex flex-row h-15 bg-[#364985]  text-white">
            <div className="mx-auto content-center font-bold text-xl">BuyKart</div>
            <div className="mx-auto content-center hover:bg-white hover:text-[#364985]"><a href="index.html">Home <i class="fa-solid fa-house"></i></a></div>
            <div className="mx-auto content-center hover:bg-white hover:text-[#364985]"><i class="fa-solid fa-location-dot" id="loc"></i> Delivery</div>
            <div className=" flex flex-row m-auto">
                            <select className=" h-8 w-10 border-solid border-1 border-white text-black bg-white">
                            <option>All</option>
                            <option>BuyKart Devices</option>
                            <option>BuyKrat Fashion</option>
                            <option>BuyKart Pharmacy</option>
                            <option>BuyKrat Fresh</option>
                            <option>BuyKart Appliances</option>
                            <option>BuyKrat Apps&Games</option>
                            <option>BuyKart Beauty</option>
                            <option>BuyKrat Books</option> 
                            <option>BuyKart Electronics</option>
                            <option>BuyKrat Gift Cards</option> 
                            </select>
                            <input type="text" className="h-8 w-100 border-none bg-white text-black" placeholder="Search BuyKart.in" />     
                            <div className="h-8 w-10 bg-white text-black border-white border-1" ><i  class="fa-solid fa-magnifying-glass"></i></div>
            </div>
            <div className="mx-auto content-center hover:bg-white hover:text-[#364985]"><a href="accounts and list.html"><div className="text-xs">Accounts</div><div className="font-semibold text-sm">& Lists</div></a></div>
            <div className=" flex flex-col mx-auto justify-center hover:bg-white hover:text-[#364985]"> <div className="text-xs">Orders</div><div className="font-semibold text-sm">& Returns</div></div>
            <div className="flex flex-col mx-auto justify-center hover:bg-white hover:text-[#364985]"><div className="text-xs">Warranty</div><div className="font-semibold text-sm">& Support</div> </div>
            <div className="mx-auto content-center hover:bg-white hover:text-[#364985]">Cart <i class="fa-solid fa-cart-plus"></i></div>
           </div>
        </>
    );
}
export default Navigation1;