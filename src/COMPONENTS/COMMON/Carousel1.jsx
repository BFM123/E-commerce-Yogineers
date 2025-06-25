// import React, { useState, useEffect } from 'react';

// const Carousel1 = () => {
//   const [animationKey, setAnimationKey] = useState(0);
//   const items = Array.from({ length: 12 }, (_, i) => i + 1); // [1, 2, 3, ..., 12]

//   // Reset animation periodically to prevent performance issues with infinite animations
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setAnimationKey(prevKey => prevKey + 1);
//     }, 1200000); // Reset every 600 seconds (10 minutes) to match animation duration

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full overflow-hidden p-4">
//       {/* Carousel Container with overflow hidden */}
//       <div className="relative h-[620px] w-full backdrop-blur-sm flex justify-center items-center overflow-hidden">
//         <div 
//           key={animationKey}
//           className="flex h-[600px] whitespace-nowrap animate-scroll"
//         >
//           {/* Double the items to create seamless looping */}
//           {[...items, ...items].map((item, index) => (
//             <div 
//               key={`${item}-${index}`} 
//               className="inline-block mx-6 flex-shrink-0 w-[800px]" // Card width adjusted here
//             >
//               <div className="bg-white h-full w-full flex items-center justify-center rounded-lg shadow-lg">
//                 <div className="text-black text-4xl font-bold">Card {item}</div>
//               </div>
//             </div>
//           ))}
//         </div>
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
//           animation: scroll 600s linear infinite; /* 10 minutes for one full loop */
//           will-change: transform; /* Optimize for animation */
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Carousel1;
import React, { useState, useEffect } from 'react';

const Carousel1 = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const items = Array.from({ length: 12 }, (_, i) => i + 1); // [1, 2, 3, ..., 12]

  // Reset animation periodically to prevent performance issues
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationKey(prevKey => prevKey + 1);
    }, 60000); // Reset every 60 seconds to match new animation duration

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden p-4">
      {/* Carousel Container */}
      <div className="relative h-[620px] w-full backdrop-blur-sm flex justify-center items-center overflow-hidden">
        <div 
          key={animationKey}
          className="flex h-[600px] whitespace-nowrap animate-scroll"
        >
          {/* Double the items for seamless looping */}
          {[...items, ...items].map((item, index) => (
            <div 
              key={`${item}-${index}`} 
              className="inline-block mx-6 flex-shrink-0 w-[800px]"
            >
              <div className="bg-white h-full w-full flex items-center justify-center rounded-lg shadow-lg">
                <div className="text-black text-4xl font-bold">Card {item}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind + custom animation style */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite; /* Slowed down for 5s per card */
          will-change: transform;
        }
      `}</style>
    </div>
  );
};

export default Carousel1;
