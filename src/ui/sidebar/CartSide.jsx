

import React from 'react';

export default function CartSide({ isOpen, setIsSidebarOpen }) {
  const overlayClasses = "fixed inset-0 bg-black z-40 bg-opacity-50";
  const cartClasses = `text-center font-bold text-xl  z-40 fixed right-0 top-0 h-full w-[400px]
    bg-white shadow-lg transform transition-transform duration-1000 ease-in-out
    ${isOpen ? "translate-x-0" : "translate-x-full"}`;

  return (
    <>
      {isOpen && <div className={overlayClasses} onClick={() => setIsSidebarOpen(false)}></div>}
      <div className={cartClasses}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Your cart</h2>
          <button className="absolute top-2 right-2" onClick={() => setIsSidebarOpen(false)}>
            &times;
          </button>
        </div>
      </div>
    </>
  );
}



// export default function CartSide ({ isOpen, onClose })  {
//   const classes = "fixed inset-0   bg-black  z-40 bg-opacity-50";
//   return (
//     <>
//       {isOpen && ( <div className={classes} onClick={onClose}></div>)}
//       <div
//         className={`text-center font-bold text-xl fixed right-0 top-0 h-full w-[400px]
//          bg-white shadow-lg transform transition-transform duration-300 ease-in-out
//           ${isOpen ? "translate-x-0" : "translate-x-full"}`}
//       >
//         <div className="p-4">
//           <h2 className="text-xl font-bold mb-4">Your cart</h2>
//           <button className="absolute top-2 right-2 " onClick={onClose}>
//             &times;
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };


{/* <CartSideInside /> */}
// <div  className={classes} >
//     <div className="text-center font-bold text-xl">Start Bootstrap</div>
//     <CartSideInside/>
// //     </div>
// {isOpen && (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={onClose}></div>
//   )}
//   <div
//     className={`fixed top-0 right-0 h-full w-[400px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
//       isOpen ? "translate-x-0" : "translate-x-full"
//     }`}>
//     <div className="p-4">
//       <h2 className="text-xl font-bold mb-4">Your Cart</h2>
//       <button
//         onClick={onClose}
//         className="absolute top-2 right-2 text-lg text-white border border-[black] bg-black rounded-full px-2">
//         &times;
//       </button>

//         </div>
