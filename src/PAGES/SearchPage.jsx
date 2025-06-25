import { useState, useEffect } from 'react';
import { FiSearch, FiX, FiFilter, FiChevronDown, FiStar, FiShoppingCart, FiUser } from 'react-icons/fi';
import Navbar from '../COMPONENTS/COMMON/Navbar';
import Footer from '../COMPONENTS/COMMON/Footer';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const categories = [
    'Smartphones',
    'Laptops',
    'Tablets',
    'Smart Watches',
    'Headphones',
    'Speakers',
    'Gaming',
    'Accessories'
  ];

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get('q') || '';
    setSearchQuery(query);
    
    if (query) {
      performSearch(query);
    }
  }, [location.search]);

  const performSearch = (query) => {
    setIsLoading(true);
    setTimeout(() => {
      setProducts([
        {
          id: 1,
          name: 'Premium Wireless Headphones',
          price: 249.99,
          rating: 4.8,
          category: 'Headphones',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 2,
          name: 'Ultra HD Smart TV 55"',
          price: 799.99,
          rating: 4.6,
          category: 'Televisions',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 3,
          name: 'Gaming Laptop Pro',
          price: 1499.99,
          rating: 4.7,
          category: 'Laptops',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 4,
          name: 'Smartphone X12',
          price: 899.99,
          rating: 4.5,
          category: 'Smartphones',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 5,
          name: 'Smart Watch Series 5',
          price: 299.99,
          rating: 4.3,
          category: 'Smart Watches',
          image: 'https://via.placeholder.com/150'
        },
        {
          id: 6,
          name: 'Wireless Earbuds Pro',
          price: 179.99,
          rating: 4.4,
          category: 'Headphones',
          image: 'https://via.placeholder.com/150'
        }
      ]);
      setIsLoading(false);
    }, 800);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.history.pushState({}, '', `/search?q=${encodeURIComponent(searchQuery)}`);
      performSearch(searchQuery);
    }
  };

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const clearFilters = () => {
    setPriceRange([0, 1000]);
    setSelectedCategories([]);
    setSelectedRating(null);
  };

  return (
    <div className="min-h-screen bg-[#a5d8f0c4]">
      <Navbar />
      
      <div className="pt-24 pb-12">
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <form onSubmit={handleSearch} className="flex items-center justify-center">
              <div className={`flex items-center transition-all duration-300 ${isSearchFocused ? 'w-full max-w-2xl' : 'w-full max-w-xl'}`}>
                <div className="flex items-center w-full">
                  <input
                    type="text"
                    placeholder="Search for tech products..."
                    className="w-full bg-gray-800 text-white px-4 py-3 rounded-l-md focus:outline-none"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      className="bg-gray-700 hover:bg-gray-600 px-4 py-3 transition-colors duration-200"
                      onClick={() => setSearchQuery('')}
                    >
                      <FiX className="h-6 w-5" />
                    </button>
                  )}
                  <button
                    type="submit"
                    className="bg-[#00B4D8] hover:bg-[#0096C7] px-6 py-3 rounded-r-md text-white transition-colors duration-200 flex items-center"
                  >
                    <FiSearch className="h-5 w-5 mr-2" />
                    Search
                  </button>
                </div>
              </div>
            </form>
            
            <div className="mt-4 flex items-center justify-between">
              <div>
                {searchQuery && (
                  <p className="text-black">
                    {isLoading ? 'Searching...' : `Showing results for "${searchQuery}"`}
                  </p>
                )}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center text-black hover:text-[#0077B6]"
              >
                <FiFilter className="mr-1" />
                Filters
                <FiChevronDown className={`ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row">
          {showFilters && (
            <div className="w-full md:w-64 bg-white p-6 rounded-lg shadow-sm mb-6 md:mb-0 md:mr-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium text-lg">Filters</h3>
                <button
                  onClick={clearFilters}
                  className="text-sm text-[#00B4D8] hover:underline"
                >
                  Clear all
                </button>
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="flex items-center justify-between mb-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className="w-full accent-[#00B4D8]"
                />
              </div>

              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`category-${category}`}
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="mr-2 accent-[#00B4D8]"
                      />
                      <label htmlFor={`category-${category}`} className="text-black">{category}</label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-3">Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="radio"
                        id={`rating-${rating}`}
                        name="rating"
                        checked={selectedRating === rating}
                        onChange={() => setSelectedRating(rating)}
                        className="mr-2 accent-[#00B4D8]"
                      />
                      <label htmlFor={`rating-${rating}`} className="flex items-center text-black">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} w-4 h-4`}
                          />
                        ))}
                        {rating === 4 && ' & Up'}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div className="flex-1">
            {isLoading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00B4D8]"></div>
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => (
                  <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
                    <div className="p-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-contain mb-4"
                      />
                      <h3 className="font-medium text-lg mb-1 line-clamp-1 text-black">{product.name}</h3>
                      <div className="flex items-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FiStar
                            key={i}
                            className={`${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} w-4 h-4`}
                          />
                        ))}
                        <span className="text-gray-500 text-sm ml-1">({product.rating})</span>
                      </div>
                      <p className="text-gray-500 text-sm mb-2">{product.category}</p>
                      <p className="font-bold text-lg text-black">${product.price.toFixed(2)}</p>
                    </div>
                    <button className="w-full py-2 bg-[#00B4D8] text-white hover:bg-[#0096C7] transition duration-200">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            ) : searchQuery ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <FiSearch size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2 text-black">No products found</h3>
                <p className="text-gray-500">Try adjusting your search or filters to find what you're looking for.</p>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <FiSearch size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-xl font-medium mb-2 text-black">Search for tech products</h3>
                <p className="text-gray-500">Enter a search term to find products in our store.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default SearchPage;