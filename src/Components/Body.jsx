import Sidebar from "/src/Components/Sidebar.jsx";
import Prodcard from "/src/Components/Prodcard.jsx";


function Body({addToCart}) {

      const products = [
    { src: "/src/assets/yellow_torq.webp", alt: "Yellow Torq", price: 2000 },
    { src: "/src/assets/Klarity_1.webp", alt: "Klarity 1", price: 2000 },
    { src: "/src/assets/Astra_Neo.webp", alt: "Astra Neo", price: 2000 },
    { src: "/src/assets/Astra.webp", alt: "Astra", price: 2000 },
    { src: "/src/assets/BASS.webp", alt: "BASS", price: 2000 },
    { src: "/src/assets/bassbox_X120_.webp", alt: "Bassbox X120", price: 2000 },
    { src: "/src/assets/derby_b14.webp", alt: "Derby B14", price: 2000 },
    { src: "/src/assets/Flex.webp", alt: "Flex", price: 2000 },
    { src: "/src/assets/K60.webp", alt: "K60", price: 2000 },
    { src: "/src/assets/Y1_Pro_.webp", alt: "Y1 Pro", price: 2000 },
    { src: "/src/assets/z40.webp", alt: "Z40", price: 2000 },
    { src: "/src/assets/Bassbox.jpg", alt: "Bassbox", price: 2000 },
    { src: "/src/assets/yellow_torq.webp", alt: "Extra Torq", price: 2000 },
    { src: "/src/assets/Klarity_1.webp", alt: "Extra Klarity", price: 2000 },
    { src: "/src/assets/Astra_Neo.webp", alt: "Extra Astra", price: 2000 },
  ];

  return (
    <>
      <div className="flex flex-row h-auto mt-35 bg-white realtive">
        <Sidebar />
       <div className="flex flex-row flex-wrap m-2 h-auto w-500 ">
        {products.map((product, index) => (
            <Prodcard 
              key={index}
              imageUrl={product.src}
              altText={product.alt}
              price={product.price}
              addToCart={addToCart}
            />
          ))}
          </div>
      </div>
    </>
  );
}
export default Body;
