import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
      title: "Fashion",
      items: [
        { name: "Clothing", description: "Men's Clothing" },
        { name: "Clothing", description: "Women's Clothing" },
        { name: "Kids' Fashion", description: "Boys" },
        { name: "Kids' Fashion", description: "Girls" },
        { name: "Footwear", description: "Men's" },
        { name: "Footwear", description: "Women's" },
        { name: "Luggage & Bags", description: "Travel essentials" },
        { name: "Jewellery", description: "Men's Jewellery" },
        { name: "Jewellery", description: "Women's Jewellery" },
        { name: "Watches", description: "Men's" },
        { name: "Watches", description: "Women's" },
        { name: "Beauty", description: "Cosmetics & Skincare" },
        { name: "Handbags", description: "Fashion bags" },
        { name: "Sunglasses & Frames", description: "Eyewear" },
        { name: "Fragrances", description: "Perfume & Cologne" },
      ],
    },
    {
      title: "Books",
      items: [
        { name: "Action & Adventure", description: "" },
        { name: "Arts, Film & Photography", description: "" },
        { name: "Biographies & True Accounts", description: "" },
        { name: "Business & Economics", description: "" },
        { name: "Children's Books", description: "" },
        { name: "Comics & Mangas", description: "" },
        { name: "Computers & Internet", description: "" },
        { name: "Crafts & Home", description: "" },
        { name: "Crime & Mystery", description: "" },
        { name: "Engineering", description: "" },
        { name: "Exam Preparation", description: "" },
        { name: "Health & Personal Development", description: "" },
        { name: "Health & Nutrition", description: "" },
        { name: "Historical Fiction", description: "" },
        { name: "History", description: "" },
        { name: "Humour", description: "" },
        { name: "Language & Writing", description: "" },
        { name: "Law", description: "" },
        { name: "Literature & Fiction", description: "" },
        { name: "Maps & Atlases", description: "" },
        { name: "Medical Textbooks", description: "" },
        { name: "Politics", description: "" },
        { name: "Reference", description: "" },
        { name: "Religion & Spirituality", description: "" },
        { name: "Romance", description: "" },
        { name: "School Books", description: "" },
        { name: "Science Textbooks", description: "" },
        { name: "Science Fiction & Fantasy", description: "" },
        { name: "Technology & Medicine", description: "" },
        { name: "Social Sciences", description: "" },
        { name: "Sports", description: "" },
        { name: "Teen & Young Adult", description: "" },
        { name: "Textbooks & Guides", description: "" },
        { name: "Travel & Tourism", description: "" },
      ],
    },
    {
      title: "Groceries",
      items: [
        { name: "Fresh Items", description: "Produce" },
        { name: "Fresh Items", description: "Dairy" },
        { name: "Fresh Items", description: "Meat and Seafood" },
        { name: "Fresh Items", description: "Deli" },
        { name: "Fresh Items", description: "Bakery" },
        { name: "Pantry & Dry Goods", description: "Pantry Staples" },
        { name: "Pantry & Dry Goods", description: "Beverages" },
        { name: "Pantry & Dry Goods", description: "Condiments and Spices" },
        { name: "Pantry & Dry Goods", description: "Baking Ingredients" },
        { name: "Pantry & Dry Goods", description: "Snacks and Sweets" },
        { name: "Pantry & Dry Goods", description: "Frozen Foods" },
        { name: "Other", description: "Prepared Foods" },
        { name: "Other", description: "Household Supplies" },
        { name: "Other", description: "International Foods" },
      ],
    },
    {
      title: "Pharmaceuticals",
      items: [
        { name: "Over-the-Counter Drugs", description: "Adults" },
        { name: "Over-the-Counter Drugs", description: "Children" },
      ],
    },
  ];

  return (
    <>
      <nav className="bg-[#a5d8f0] text-black z-50 fixed top-0 left-0 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div
              className="flex-shrink-0 cursor-pointer"
              onClick={() => navigate("/dashboard")}
            >
              <h1 className="text-2xl font-bold text-black hover:text-blue-600 transition-colors duration-200">
                YOGINEER
              </h1>
            </div>
            {!isMobileView && (
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item, index) => (
                  <div key={index} className="relative group inline-block">
                    <button className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-white hover:bg-gray-800 transition duration-200 flex items-center">
                      {item.title}
                      <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    </button>
                    <div className="absolute left-0 mt-2 w-80 bg-[#234152e1] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="p-4 grid grid-cols-1 gap-2">
                        {item.items.map((sub, subIndex) => (
                          <a
                            key={subIndex}
                            href="#"
                            className="flex flex-col p-3 rounded-lg hover:bg-gray-800 transition duration-200"
                          >
                            <span className="font-medium text-white">
                              {sub.name}
                            </span>
                            {sub.description && (
                              <span className="text-sm text-gray-400 mt-1">
                                {sub.description}
                              </span>
                            )}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-white hover:bg-gray-800 transition duration-200"
                >
                  Deals
                </a>
                <a
                  href="#"
                  className="px-3 py-2 rounded-md text-sm font-medium text-black hover:text-white hover:bg-gray-800 transition duration-200"
                >
                  Support
                </a>
              </div>
            )}
            <div className="flex items-center space-x-4">
              {!isMobileView ? (
                <div
                  className={`flex items-center transition duration-300 ${
                    isSearchOpen ? "w-64" : "w-10"
                  }`}
                >
                  {isSearchOpen ? (
                    <form onSubmit={handleSearchSubmit} className="flex w-full">
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
                        className="bg-gray-700 hover:bg-gray-600 px-3 py-2 rounded-r-md"
                      >
                        <X className="h-6 w-6" />
                      </button>
                    </form>
                  ) : (
                    <button
                      onClick={() => setIsSearchOpen(true)}
                      className="p-2 rounded-md text-black hover:text-white hover:bg-gray-800 transition duration-200"
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="p-2 rounded-md text-black hover:text-white hover:bg-gray-800 transition duration-200"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
              {(!isMobileView || !isSearchOpen) && (
                <div className="flex items-center space-x-4">
                  {!isMobileView && (
                    <>
                      <button className="p-2 rounded-md text-black hover:text-white hover:bg-gray-800">
                        <User className="h-5 w-5" />
                      </button>
                      <button className="p-2 rounded-md text-black hover:text-white hover:bg-gray-800 relative">
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
                      className="p-2 rounded-md text-black hover:text-white hover:bg-gray-800"
                    >
                      {isMobileMenuOpen ? (
                        <X className="h-6 w-6" />
                      ) : (
                        <Menu className="h-6 w-6" />
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileView && isMobileMenuOpen && (
          <div className="bg-gray-900 px-2 pt-2 pb-3">
            {navItems.map((item, index) => (
              <div key={index} className="space-y-1">
                <button className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium w-full text-left">
                  {item.title}
                </button>
                <div className="pl-4 space-y-1">
                  {item.items.map((sub, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="text-gray-400 hover:text-white block px-3 py-2 text-sm"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;