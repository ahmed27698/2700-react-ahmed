import { FaGithub , FaTwitter , FaDribbble , FaFacebookF } from "react-icons/fa";



export default function Footer() {
    return (
        <footer className="py-20 lg:px-[80px] md:px-[30px] px-[10px]">
            <div className="flex flex-wrap lg:justify-between md:justify-start justify-between w-full items-start ">
                <div className="lg:w-2/12 md:w-4/12 w-5/12 flex flex-col gap-5">
                    <p className="font-medium">COMPANY</p>
                    <p className="text-gray-500">About</p>
                    <p className="text-gray-500">Premium</p>
                    <p className="text-gray-500">Blog</p>
                    <p className="text-gray-500">Affiliate Program</p>
                    <p className="text-gray-500">Get Coupon</p>
                </div>
                <div className="lg:w-2/12 md:w-4/12 w-5/12 flex flex-col gap-5">
                    <p className="font-medium">Help and support</p>
                    <p className="text-gray-500">Contact Us</p>
                    <p className="text-gray-500">Knowledge Center</p>
                    <p className="text-gray-500">Premium Support</p>
                    <p className="text-gray-500">Sponsorships</p>
                </div>
                <div className="lg:w-2/12 md:w-4/12 w-5/12 flex flex-col gap-5">
                    <p className="font-medium">Learning</p>
                    <p className="text-gray-500">Learn Hub</p>
                    <p className="text-gray-500">Manuals</p>
                    <p className="text-gray-500">Tutorials</p>
                    <p className="text-gray-500">Communities</p>
                </div>
                <div className="lg:w-2/12 md:w-4/12 w-5/12 flex flex-col gap-5">
                    <p className="font-medium">RESOURCES</p>
                    <p className="text-gray-500">Third-Party Tools</p>
                    <p className="text-gray-500">Illustrations</p>
                    <p className="text-gray-500">Themesberg</p>
                    <p className="text-gray-500">Bluehost</p>
                    <p className="text-gray-500">Stock Photos</p>
                </div>
                <div className="lg:w-2/12 md:w-4/12 w-5/12 flex flex-col gap-5">
                    <p className="font-medium">LEGAL</p>
                    <p className="text-gray-500">Privacy Policy</p>
                    <p className="text-gray-500">Terms & Conditions</p>
                    <p className="text-gray-500">EULA</p>
                </div>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center mt-10">
                <div className="font-bold text-gray-900 flex items-center gap-3"><img src="../../public/logo.png" alt="logo" />LandWind</div>
                <p className="text-gray-500">© 2022 Flowbite, Inc. All rights reserved.</p>
                <div className="flex gap-5 text-gray-500">
                    <FaGithub/>
                    <FaTwitter/>
                    <FaDribbble/>
                    <FaFacebookF />
                </div>
            </div>
        </footer>
    )
}