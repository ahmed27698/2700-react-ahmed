import { FaHamburger } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import navLinks from "../lib/nav";
import { useState } from "react";

export default function Nav() {
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <nav className="sticky top-0 bg-white shadow z-50 lg:px-[80px] w-full md:px-[px] px-[10px] py-[24px] flex gap-2 items-center justify-between">
            <div className="flex lg:w-3/12 xl:w-2/12 w-2/12 gap-2">
                <img src="../../public/logo.png" alt="logo image" className="w-[29.76px] h-[32.62px]" />
                <h1 className="text-gray-900 font-semibold text-2xl">LandWind</h1>
            </div>
            <ul className="lg:w-8/12 w-5/12 flex gap-3 lg:gap-5 justify-start">
                {navLinks.map(({ href, sectionName }) => {
                    return (
                        <li key={sectionName} className="text-gray-900 font-medium text-base hidden md:block">
                            <a href={href}>{sectionName}</a>
                        </li>
                    )
                }
                )}
            </ul>

            <div className="lg:w-3/12 xl:w-2/12 md:flex hidden gap-3">
                <button className="text-gray-900">Log In</button>
                <button className="font-medium text-sm bg-purple-600 text-white p-2 rounded-lg">Get Started</button>
            </div>
            
            <FaHamburger className="md:hidden block text-purple-600 text-2xl" onClick={() => setShowMobileMenu(true)} />

            {/* Mobile Menu */}
            {
                showMobileMenu &&
                <div className="flex top-0 left-0 justify-center items-center fixed h-full w-full bg-gray-950/50" id="hamburgerMenu">
                    <nav className="w-9/12 h-9/12 bg-white rounded-2xl">
                        <IoMdClose className="fixed top-25 right-20 text-2xl" onClick={() => setShowMobileMenu(false)} />
                        <br />
                        <br />
                        <br />
                        <ul className=" flex flex-col items-center gap-5">
                            {navLinks.map(({ href, sectionName }) => {
                                return (
                                    <li key={sectionName} className="text-gray-900 font-medium text-base" onClick={() => setShowMobileMenu(false)}>
                                        <a href={href}>{sectionName}</a>
                                    </li>
                                )
                            }
                            )}
                        </ul>
                        <br />
                        <div className="w-12/12 flex justify-center gap-3">
                            <button className="font-medium text-sm w-5/12 bg-purple-600 text-white p-2 rounded-lg">Log In</button>
                            <button className="font-medium text-sm w-5/12 bg-purple-600 text-white p-2 rounded-lg">Get Started</button>
                        </div>
                    </nav>
                </div>
            }
        </nav>
    )
}
