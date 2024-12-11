
import Image from "next/image";
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { CgSearch } from "react-icons/cg";
import { BsBag } from "react-icons/bs";

const Header: React.FC = () => {
  
  return (
    <>
      <header>
        <div className="flex bg-gray-100 justify-between items-center px-4 py-2 text-xs md:text-sm font-medium text-gray-500">
          <Image src="/jordan.png" alt="Frame" width={24} height={24} />
          <Link
            href="#main-content"
            className="hidden md:flex text-gray-700 hover:text-black"
          >
            Skip to main content
          </Link>
          <div className="flex gap-3 md:gap-5">
            <Link href="/Location" className= " hover:text-gray-800">
              Find a Store
            </Link>
            <Link href="/help" className="hover:text-gray-800">
              Help
            </Link>
            <Link href="/joinus" className="hover:text-gray-800">
              Join Us
            </Link>
            <Link href="/login" className="hover:text-gray-800">
              Sign In
            </Link>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="flex flex-wrap justify-between items-center bg-white px-4 md:px-8 py-4">
          {/* Left Section (Logo) */}
          <Link href="/">
            <Image
              src="/nike.png"
              alt="Nike Logo"
              className="w-8 sm:w-12 md:w-16"
              width={64}
              height={64}
            />
          </Link>

          {/* Center Section (Navigation Links) */}
          <nav className="hidden md:flex gap-6 text-sm font-semibold text-gray-700">
            {["New & Featured", "Men", "Women", "Kids", "Sale", "SNKRS"].map(
              (item, index) => (
                <Link
                  key={index}
                  href={`/${item.toLowerCase().replace(/ & /g, "-")}`}
                  className="hover:text-black whitespace-nowrap"
                >
                  {item}
                </Link>
              )
            )}
          </nav>

          {/* Right Section (Search, Wishlist, Cart) */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:block relative">
              <input
                type="text"
                placeholder="Search"
                className="bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none"
              />
              <CgSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
            <FaRegHeart
              className="text-gray-700 w-6 h-6 cursor-pointer hover:text-black"
              aria-label="Wishlist"
            />
            <Link href="/cart">
              <BsBag
                className="text-gray-800 font-bold w-6 h-6 cursor-pointer hover:text-black"
                aria-label="Cart"
              />
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="block md:hidden px-4 mt-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none"
            />
            <CgSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Bottom Popup Section */}
      
        {/* <div className="hidden md:flex ml-96 bg-white py-4 px-6  justify-between items-center">
          <div className="text-gray-600 md:text-center text-sm">
            <h1 className="font-bold text-black text-center">Hello Nike App</h1>
            <p>
              Download the app to access everything Nike.{" "}
              <a
                href="#"
                className="text-black font-medium hover:underline"
              >
                Get Your Great
              </a>
            </p>*
          </div> 

        </div>*/}
      
    </>
  );
};

export default Header;
