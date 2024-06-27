import { assets } from "../assets/assets"

function Navbar() {
    return (
        <div className=" px-[20px] flex justify-between items-center ">
            <img src={assets.logo} alt="Logo" className="w-[150px]" />
            <ul className=" flex gap-3 text-[#49557e] text-[20px]">
                <li className=" cursor-pointer">Home</li>
                <li className=" cursor-pointer">Menu</li>
                <li className=" cursor-pointer">Mobile-app</li>
                <li className=" cursor-pointer">Contact us</li>
            </ul>

            <div className=" flex gap-9">
                <img src={assets.search_icon} alt="" />
                <div className="">
                <img src={assets.basket_icon} alt="" />
                <div></div>
                </div>
                <button className=" hover:bg-[#fff4f2] duration-200 bg-transparent text-base text-[#49557e] border border-[tomato] py-[10px] px-[30px] rounded-3xl">sing in</button>
            </div>
        </div>
    )
}

export default Navbar
