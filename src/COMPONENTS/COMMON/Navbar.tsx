import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Explore from "../DashboardComponents/Explore";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 1150);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsSearchOpen(false);
    }
  };

  const navItems = [
    {
      title: "Electronics",
      items: [
        { name: "Smartphones", description: "Latest mobile devices" },
        { name: "Laptops", description: "High-performance computers" },
        { name: "Tablets", description: "Portable computing" },
        { name: "Smart Watches", description: "Wearable technology" },
      ],
    },
    {
      title: "Home Appliances",
      items: [
        { name: "Kitchen Appliances", description: "Smart cooking solutions" },
        { name: "Cleaning Devices", description: "Automated home cleaning" },
        { name: "Air Purifiers", description: "Clean air technology" },
        { name: "Smart Home", description: "Connected living" },
      ],
    },
    {
      title: "Audio & Video",
      items: [
        { name: "Headphones", description: "Premium sound quality" },
        { name: "Speakers", description: "Wireless audio systems" },
        { name: "Smart TVs", description: "Entertainment displays" },
        { name: "Gaming", description: "Gaming accessories" },
      ],
    },
    {
      title: "Electric Vehicles",
      items: [
        { name: "E-Bikes", description: "Electric bicycles" },
        { name: "Scooters", description: "Urban mobility" },
        { name: "Chargers", description: "Charging solutions" },
        { name: "Accessories", description: "EV components" },
      ],
    },
  ];

  return (
    <>
      <nav className="bg-[#a5d8f0] text-black z-50 fixed top-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div
              className={`flex-shrink-0 transition-all duration-300 ${
                isSearchOpen && !isMobileView
                  ? "opacity-0 scale-95"
                  : "opacity-100 scale-100"
              }`}
              onClick={() => navigate("/dashboard")}
              style={{ cursor: "pointer" }}
            >
              <h1 className="text-2xl font-bold text-black hover:text-blue-600 transition-colors duration-200">
                YOGINEER
              </h1>
            </div>
            {/* Desktop Navigation */}
            {!isMobileView && (
              <div className="ml-10 flex items-baseline space-x-4">
                <div
                  className={`transition-all duration-300 ${
                    isSearchOpen && !isMobileView
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  {navItems.map((item, index) => (
                    <div key={index} className="relative group inline-block">
                      <button className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-white hover:bg-gray-800 transition-all duration-200 flex items-center">
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>

                      <div className="absolute left-0 mt-2 w-80 bg-[#234152e1] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.items.map((subItem, subIndex) => (
                              <a
                                key={subIndex}
                                href="#"
                                className="flex flex-col p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                              >
                                <span className="font-medium text-white">
                                  {subItem.name}
                                </span>
                                <span className="text-sm text-gray-400 mt-1">
                                  {subItem.description}
                                </span>
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Deals
                  </a>
                  <a
                    href="#"
                    className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Support
                  </a>
                </div>
              </div>
            )}

            {/* Right side icons */}
            <div className="flex items-center space-x-4">
              {/* Search - different behavior based on mobile/desktop */}
              {!isMobileView ? (
                <div
                  className={`flex items-center transition-all duration-300 ${
                    isSearchOpen ? "w-64" : "w-10"
                  }`}
                >
                  {isSearchOpen ? (
                    <form
                      onSubmit={handleSearchSubmit}
                      className="flex items-center w-full"
                    >
                      <input
                        type="text"
                        placeholder="Search..."
                        autoFocus
                        className="w-full bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <button
                        type="button"
                        onClick={() => {
                          setIsSearchOpen(false);
                          setSearchQuery("");
                        }}
                        className="bg-gray-700 hover:bg-gray-600 ml-0.5 px-3 py-2 rounded-r-md transition-colors duration-200"
                      >
                        <X className="h-6.8 w-6.8" />
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="p-2 rounded-md text-black hover:text-white hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-md text-black hover:text-white hover:bg-gray-800 transition-colors duration-200"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}

              {/* Other icons */}
              {(!isMobileView || !isSearchOpen) && (
                <div
                  className={`flex items-center space-x-4 transition-all duration-300 ${
                    isSearchOpen && !isMobileView
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  {!isMobileView && (
                    <>
                      <button className="p-2 rounded-md text-black hover:text-white hover:bg-gray-800 transition-colors duration-200">
                        <User className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-md text-black hover:text-white hover:bg-gray-800 transition-colors duration-200 relative">
                        <ShoppingCart className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          0
                        </span>
                      </button>
                    </>
                  )}

                  {isMobileView && (
                    <button
                      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    >
                      {isMobileMenuOpen ? (
                        <X className="block h-6 w-6" />
                      ) : (
                        <Menu className="block h-6 w-6" />
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileView && isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900">
              {/* Mobile Search */}
              {isSearchOpen && (
                <form
                  onSubmit={handleSearchSubmit}
                  className="flex items-center px-2 mb-2"
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    className="flex-1 bg-gray-800 text-white px-4 py-2 rounded-l-md focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-r-md"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </form>
              )}

              {navItems.map((item, index) => (
                <div key={index} className="space-y-1">
                  <button className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left">
                    {item.title}
                  </button>
                  <div className="pl-4 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href="#"
                        className="text-gray-400 hover:text-white block px-3 py-2 rounded-md text-sm"
                      >
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Deals
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Support
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
