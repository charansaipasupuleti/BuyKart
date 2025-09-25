


function Sidebar(){
    return(
        <>
        <div className="flex flex-col ml-0 w-150 bg-white">
            <ul className="flex flex-col gap-8 m-2 font-medium sticky top-35">
            <li className="mb-2"><a className=" flex flex-row justify-between"href=""><p>Sort</p><i class="fa-regular fa-plus"></i></a></li>
               <li className="mb-2"><a className=" flex flex-row justify-between"href=""><p>Category</p><i class="fa-regular fa-plus"></i></a></li>
               <li className="mb-2"><a className=" flex flex-row justify-between"href=""><p>Colors </p><i class="fa-regular fa-plus"></i></a></li>
               <li className="mb-2"><a className=" flex flex-row justify-between"href=""><p>Price</p><i class="fa-regular fa-plus"></i></a></li>
               <li className="mb-2"><a className=" flex flex-row justify-between"href=""><p>Features </p><i class="fa-regular fa-plus"></i></a></li>
               <li className="mb-2"><a className=" flex flex-row justify-between"href=""><p>Playback Time</p><i class="fa-regular fa-plus"></i></a></li>
            </ul>
        </div>
        </>
    );
}
export default Sidebar;