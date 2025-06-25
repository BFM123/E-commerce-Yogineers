// import React, { useEffect, useState } from 'react';

// const Shipping = () => {
//   const [animationKey, setAnimationKey] = useState(0);

//   // Reset animation periodically to prevent performance issues with infinite animations
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimationKey(prevKey => prevKey + 1);
//     }, 20000); // Reset every 20 seconds

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="bg-black text-white py-2 overflow-hidden">
//       <div 
//         key={animationKey}
//         className="whitespace-nowrap animate-scroll"
//       >
//         {[...Array(10)].map((_, i) => (
//           <span key={i} className="inline-block mx-15">
//             <span className="font-bold">SHIPPING WORLDWIDE</span>
//           </span>
//         ))}
//       </div>

//       {/* Add Tailwind animation configuration */}
//       <style jsx>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           animation: scroll 100s linear infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Shipping;


import React, { useEffect, useState } from 'react';

const Shipping = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Reset animation periodically to prevent performance issues with infinite animations
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prevKey => prevKey + 1);
    }, 20000); // Reset every 20 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black text-white py-2 overflow-hidden">
      <div 
        key={animationKey}
        className="whitespace-nowrap shipping-animate-scroll"
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="inline-block mx-15">
            <span className="font-bold">SHIPPING WORLDWIDE</span>
          </span>
        ))}
      </div>

      {/* Add Tailwind animation configuration */}
      <style jsx>{`
        @keyframes shipping-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .shipping-animate-scroll {
          animation: shipping-scroll 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Shipping;