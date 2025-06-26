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
    {
      title: "Fashion",
      items: [
        { name: "Clothing", description: "Men's Clothing, Women's Clothing" },
        { name: "Kids' Fashion", description: "Boys, Girls" },
        { name: "Footwear", description: "Men's, Women's" },
        { name: "Luggage & Bags", description: "" },
        { name: "Jewellery", description: "Men's Jewellery, Women's Jewellery" },
        { name: "Watches", description: "Men's, Women's" },
        { name: "Beauty", description: "" },
        { name: "Handbags", description: "" },
        { name: "Sunglasses & Frames", description: "" },
        { name: "Fragrances", description: "Perfume, Cologne" },
      ],
    },
    {
      title: "Books",
      items: [
        { name: "Action & Adventure", description: "" },
        { name: "Arts, Film & Photography", description: "" },
        { name: "Biographies, Diaries & True Accounts", description: "" },
        { name: "Business & Economics", description: "" },
        { name: "Children's Books", description: "" },
        { name: "Comics & Mangas", description: "" },
        { name: "Computers & Internet", description: "" },
        { name: "Crafts, Hobbies & Home", description: "" },
        { name: "Crime, Thriller & Mystery", description: "" },
        { name: "Engineering", description: "" },
        { name: "Exam Preparation", description: "" },
        { name: "Health, Family & Personal Development", description: "" },
        { name: "Health, Fitness & Nutrition", description: "" },
        { name: "Historical Fiction", description: "" },
        { name: "History", description: "" },
        { name: "Humour", description: "" },
        { name: "Language, Linguistics & Writing", description: "" },
        { name: "Law", description: "" },
        { name: "Literature & Fiction", description: "" },
        { name: "Maps & Atlases", description: "" },
        { name: "Medicine and Health Sciences Textbooks", description: "" },
        { name: "Politics", description: "" },
        { name: "Reference", description: "" },
        { name: "Religion & Spirituality", description: "" },
        { name: "Romance", description: "" },
        { name: "School Books", description: "" },
        { name: "Science and Mathematics Textbooks", description: "" },
        { name: "Science Fiction & Fantasy", description: "" },
        { name: "Sciences, Technology & Medicine", description: "" },
        { name: "Society & Social Sciences", description: "" },
        { name: "Sports", description: "" },
        { name: "Teen & Young Adult", description: "" },
        { name: "Textbooks & Study Guides", description: "" },
        { name: "Travel & Tourism", description: "" },
      ],
    },
    {
      title: "Groceries/Supermarket",
      items: [
        { name: "Fresh Items", description: "Produce, Dairy, Meat and Seafood, Deli, Bakery" },
        { name: "Pantry/Dry Goods", description: "Pantry Staples, Beverages, Condiments and Spices, Baking Ingredients, Snacks and Sweets, Frozen Foods" },
        { name: "Other", description: "Prepared Foods, Household Supplies, International Foods" },
      ],
    },
    {
      title: "Pharmaceauticals",
      items: [
        { name: "Over-the-Counter Drugs", description: "Adults, Children" },
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
              <div className="ml-10 flex items-center space-x-2 min-w-0">
                <div
                  className={`flex items-center space-x-2 transition-all duration-300 ${
                    isSearchOpen && !isMobileView
                      ? "opacity-0 scale-95"
                      : "opacity-100 scale-100"
                  }`}
                >
                  {/* Dropdown nav items */}
                  {navItems.map((item, index) => (
                    <div key={index} className="relative group">
                      <button className="px-2 py-2 rounded-md text-sm font-medium text-black hover:text-white hover:bg-gray-800 transition-all duration-200 flex items-center whitespace-nowrap">
                        {item.title}
                        <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                      </button>
                      {/* Dropdown: only visible on hover of parent */}
                      <div className="absolute left-0 mt-2 w-80 bg-[#234152e1] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="p-4">
                          <div className="grid grid-cols-1 gap-2">
                            {item.items.map((subItem, subIndex) => (
                              <div key={subIndex} className="relative group">
                                <a
                                  href="#"
                                  className="flex flex-col p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                                >
                                  <span className="font-medium text-white">
                                    {subItem.name}
                                  </span>
                                  {/* Only show description if no submenu */}
                                  {subItem.description && !subItem.description.includes(",") && (
                                    <span className="text-sm text-gray-400 mt-1">
                                      {subItem.description}
                                    </span>
                                  )}
                                </a>
                                {/* Second-level dropdown for sub-categories */}
                                {subItem.description && subItem.description.includes(",") && (
                                  <div className="absolute left-full top-0 ml-2 w-56 bg-[#234152e1] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <div className="p-2">
                                      {subItem.description.split(",").map((child, childIdx) => (
                                        <div
                                          key={childIdx}
                                          className="px-3 py-2 rounded-md text-sm text-white hover:bg-gray-800 transition-colors duration-200"
                                        >
                                          {child.trim()}
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* Deals and Support always at the end */}
                  <a
                    href="#"
                    className="px-2 py-2 rounded-md text-sm font-medium text-black hover:text-white hover:bg-gray-800 transition-colors duration-200"
                  >
                    Deals
                  </a>
                  <a
                    href="#"
                    className="px-2 py-2 rounded-md text-sm font-medium text-black hover:text-white hover:bg-gray-800 transition-colors duration-200"
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
                      <div key={subIndex} className="relative group">
                        <a
                          href="#"
                          className="flex flex-col p-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
                        >
                          <span className="font-medium text-white">
                            {subItem.name}
                          </span>
                          {/* Only show description if no submenu */}
                          {subItem.description && !subItem.description.includes(",") && (
                            <span className="text-sm text-gray-400 mt-1">
                              {subItem.description}
                            </span>
                          )}
                        </a>
                        {/* Second-level dropdown for sub-categories */}
                        {subItem.description && subItem.description.includes(",") && (
                          <div className="pl-4 mt-1 space-y-1">
                            {subItem.description.split(",").map((child, childIdx) => (
                              <div
                                key={childIdx}
                                className="px-3 py-2 rounded-md text-sm text-white hover:bg-gray-800 transition-colors duration-200"
                              >
                                {child.trim()}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
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
