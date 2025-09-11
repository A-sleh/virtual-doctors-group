
// type arrayNumber = {
//   sizeOfArray: number | undefined;
// };

// export function ArrayNumber({sizeOfArray = 0} : arrayNumber ){
//   return(
//     <div className="w-fit absolute bottom-1 left-1/2 -translate-x-1/2"><span className='cursor-pointer text-primary'>{"<<"} </span>
//         {Array.from({ length: sizeOfArray }, (_, i) => i + 1).map((num) => (
//           <span key={num} className={`${num === 1 ? "text-white text-sm border bg-primary border-primary mx-1 cursor-pointer rounded-sm py-0 px-1.5":"text-primary text-sm border border-primary mx-1 cursor-pointer rounded-sm py-0 px-1.5"} text-primary text-sm border border-primary mx-1 cursor-pointer rounded-sm py-0 px-1.5`}>
//             {num}
//           </span>
//         ))} <span className='cursor-pointer text-primary'>{">>"}</span>
//       </div>
//   )
// }