function Footer() {
  return (
    <>
      <div className="flex flex-row h-100 bg-black text-white">
        <div className="mx-auto flex flex-col gap-2 mt-2">
          <div className="font-bold">Explore by Category</div>
          <a href="https://www.youtube.com/">True Buds</a>
          <a href="https://www.youtube.com/">Neckbands</a>
          <a href="https://www.youtube.com/">Headphones</a>
          <a href="https://www.youtube.com/">Speakers</a>
          <a href="https://www.youtube.com/">Smart Watches</a>
          <a href="https://www.youtube.com/">dash Cam</a>
        </div>

        <div className="mx-auto flex flex-col gap-2 mt-2">
          <div className="font-bold">Company</div>
          <a href="https://www.youtube.com/">About Us</a>
          <a href="https://www.youtube.com/">Careers</a>

          <div className="font-bold">Corporate Order</div>
          <a href="https://www.youtube.com/">Bulk Order</a>
        </div>

        <div className="mx-auto flex flex-col gap-2 mt-2">
          <div className="font-bold">Support</div>
          <a href="https://www.youtube.com/">Product Registration</a>
          <a href="https://www.youtube.com/">Warrenty Support</a>
          <a href="https://www.youtube.com/">Track Order</a>
        </div>
      </div>
    </>
  );
}
export default Footer;
