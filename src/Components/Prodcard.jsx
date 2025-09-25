function Prodcard({ imageUrl, altText, price, addToCart }) {
  return (
    <div className="h-80 w-70 mx-2 mb-4 shadow-md rounded-xl">
        <img className="h-65 w-70 object-cover rounded-t-xl" src={imageUrl} alt={altText}/>
            <div className="flex flex-row justify-between items-center m-2">
                <p className="text-gray-800 font-semibold">MRP: Rs.{price}</p>
                <button className="text-white bg-sky-600 hover:bg-sky-700 rounded-md text-sm px-3 py-1 transition-colors" onClick={addToCart}>Add to Cart</button>
            </div>
    </div>
  );
}
export default Prodcard;