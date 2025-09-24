


function Sidebar(){
    return(
        <>
        <div className="flex flex-col ml-0 w-150 bg-white">
            <ul className="flex flex-col gap-8 m-2 font-medium">
                <li className="flex flex-row mb-2 justify-between"><p>Sort</p><i class="fa-regular fa-plus"></i></li>
                <li className="flex flex-row mb-2 justify-between">Category <i class="fa-regular fa-plus"></i></li>
                <li className="flex flex-row mb-2 justify-between">Colors <i class="fa-regular fa-plus"></i></li>
                <li className="flex flex-row mb-2 justify-between">Price <i class="fa-regular fa-plus"></i></li>
                <li className="flex flex-row mb-2 justify-between">Features <i class="fa-regular fa-plus"></i></li>
                <li className="flex flex-row mb-2 justify-between">Playback Time <i class="fa-regular fa-plus"></i></li>
            </ul>
        </div>
        </>
    );
}
export default Sidebar;