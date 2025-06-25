// Explore.js
import { useNavigate } from 'react-router-dom';

const Explore = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/search');
  };

  return (
    <div 
      className="w-full bg-black text-white flex items-center justify-center px-4 cursor-pointer fixed top-16 h-10 z-40"
      onClick={handleClick}
    >
      <span className="text-4xl font-extrabold tracking-wide uppercase hover:text-gray-300 transition-colors duration-200">
        EXPLORE
      </span>
    </div>
  );
};

export default Explore;