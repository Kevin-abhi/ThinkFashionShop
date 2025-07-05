import React, { useEffect, useState, useRef } from "react";
import { Button } from "flowbite-react";
import {
  FaUserCircle,
  FaShoppingCart,
  FaBars,
  FaTimes,
  FaPlus,
  FaMinus,
  FaMoon,
  FaSun,
} from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { signOut } from "../../redux/user/userSlice";
import { toggleTheme } from "../../redux/theme/themeSlice";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [dropIcon, setDropIcon] = useState(false);
  const [dropIcona, setDropIcona] = useState(false);
  const [dropIconb, setDropIconb] = useState(false);
  const dropdownRef = useRef(null);

  const cartItems = useSelector((state) => state.cart.cartItems);
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const { currentUser, accessToken } = useSelector((state) => state.user);
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) setSearchTerm(searchTermFromUrl);
  }, [location.search]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(location.search);
    urlParams.set("searchTerm", searchTerm);
    navigate(`/search?${urlParams.toString()}`);
    setSearchTerm(""); 
    // console.log("searchTerm after submit:", searchTerm);// Clear search term after submission
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleSideNav = () => setIsSideNavOpen(!isSideNavOpen);
  const toggleDropIcon = () => setDropIcon(!dropIcon);
  const toggleDropIcona = () => setDropIcona(!dropIcona);
  const toggleDropIconb = () => setDropIconb(!dropIconb);

  const handleSignOut = async () => {
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.ok) {
        dispatch(signOut());
      } else {
        throw new Error("Failed to sign out");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCategoryClick = (categoryName) => {
    setIsSideNavOpen(false);
    navigate(`/search?categoryName=${encodeURIComponent(categoryName)}`);
  };

  return (
    <nav className="dark:bg-gray-800 bg-gray-100 dark:text-white text-black fixed top-0 left-0 w-full z-50 px-5 py-5 flex justify-between items-center">
      {/* Logo */}
      <Link to="/" className="text-lg font-semibold dark:text-gray-50">
        ThinkFashion
      </Link>

      {/* Search Bar */}
      <div className="md:flex justify-center hidden">
        <form onSubmit={handleSubmit} className="relative w-full max-w-xs ml-2 mr-2">
          <input
            type="text"
            className="block w-full md:w-64 lg:w-80 rounded-md bg-gray-50 dark:bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-400 pl-8 py-1"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 21l-5.2-5.2" />
              <circle cx="10" cy="10" r="8" />
            </svg>
          </span>
        </form>
      </div>

      {/* User & Cart */}
      <div className="flex items-center relative mr-5 sm:mr-0">
        <Button className="w-12 h-8 mr-2" color="gray" pill onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? <FaSun /> : <FaMoon />}
        </Button>

        <FaUserCircle className="mr-4 cursor-pointer" onClick={toggleDropdown} />

        {/* Dropdown */}
        {isDropdownOpen && (
          <ul ref={dropdownRef} className="absolute right-0 top-10 mt-2 bg-gray-800 rounded-md shadow-lg z-50 w-48">
            {currentUser ? (
              <>
                <li>
                  <Link to="/dashboard" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Profile
                  </Link>
                </li>
                {!currentUser.isAdmin && (
                  <li>
                    <Link to="/admin/login" className="block px-4 py-2 text-white hover:bg-gray-700">
                      Admin Login
                    </Link>
                  </li>
                )}
              </>
            ) : (
              <>
                <li>
                  <Link to="/login" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Login
                  </Link>
                </li>
                <li>
                  <Link to="/admin/login" className="block px-4 py-2 text-white hover:bg-gray-700">
                    Admin Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}

        {/* Cart Icon */}
        <Link to="/shoppingList" className="mr-2">
          <div className="relative">
            <FaShoppingCart className="mr-4 cursor-pointer" />
            {currentUser && cartItems.length > 0 && (
              <div className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white flex items-center justify-center rounded-full text-xs">
                {cartItems.length}
              </div>
            )}
          </div>
        </Link>

        <FaBars className="cursor-pointer" onClick={toggleSideNav} />

        {/* SideNav */}
        {isSideNavOpen && (
          <div className="fixed top-0 right-0 h-full w-full bg-black bg-opacity-50 flex justify-end z-40">
            <div className="bg-white dark:bg-gray-900 dark:text-gray-50 w-80 flex flex-col overflow-y-auto">
              <div className="flex justify-end p-4">
                <FaTimes className="text-black dark:text-gray-50 cursor-pointer" onClick={toggleSideNav} />
              </div>
              <h1 className="ml-3 text-lg">Categories</h1>
              <ul className="px-4">
                {/* Men */}
                <li className="relative py-2 border-b">
                  <span className="cursor-pointer flex" onClick={toggleDropIcon}>
                    MEN {dropIcon ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2 mt-1 text-sm" />}
                  </span>
                  {dropIcon && (
                    <ul className="mb-2">
                      {["Half Sleeve T-shirt", "Full Sleeve T-shirt", "Shirt", "Polo T-shirt", "Hoodie", "Jacket", "Sports Trouser", "Panjabi"].map((item) => (
                        <li key={item} className="py-2 px-4">
                          <span onClick={() => handleCategoryClick(item)} className="cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Women */}
                <li className="relative py-2 border-b">
                  <span className="cursor-pointer flex" onClick={toggleDropIcona}>
                    WOMEN {dropIcona ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2 mt-1 text-sm" />}
                  </span>
                  {dropIcona && (
                    <ul className="mb-2">
                      {["Skirts", "T-Shirt", "Comfy Trouser", "Gown"].map((item) => (
                        <li key={item} className="py-2 px-4">
                          <span onClick={() => handleCategoryClick(item)} className="cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>

                {/* Kids */}
                <li className="relative py-2 border-b">
                  <span className="cursor-pointer flex" onClick={toggleDropIconb}>
                    KIDS {dropIconb ? <FaMinus className="ml-2" /> : <FaPlus className="ml-2 mt-1 text-sm" />}
                  </span>
                  {dropIconb && (
                    <ul className="mb-2">
                      {["Polo T-Shirt", "Half Sleeve T-Shirt", "Maggie", "Trouser"].map((item) => (
                        <li key={item} className="py-2 px-4">
                          <span onClick={() => handleCategoryClick(item)} className="cursor-pointer">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
