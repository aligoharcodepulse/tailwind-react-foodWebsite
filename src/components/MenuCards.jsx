// import Pizza from '../images/pizza.jpg'
// import Burger from '../images/burger.jpg'
// const MenuCards = () => {
//   return (
// <div className='flex justify-center flex-wrap gap-x-20 mt-10 '>
//     <div className='flex border rounded-md p-3 gap-x-2 w-[30%] bg-white'>
//       <img className='w-28 h-28 object-cover rounded-md' src={Pizza} />
//       <div className='flex flex-col'>
//         <span className='font-bold text-xl'>Pizza</span>
//         <span>Price: $2</span>
//         <p>This is the brief description of the product.</p>
//         <button className='bg-red-500 p-2 ml-2 border w-32 rounded-md text-white'>Order Now</button>
//       </div>
//     </div>

//     <div className='flex border rounded-md p-3 gap-x-2 w-[30%] bg-white'>
//       <img className='w-28 h-28 object-cover rounded-md' src={Burger} />
//       <div className='flex flex-col'>
//         <span className='font-bold text-xl'>Burger</span>
//         <span>Price: $3</span>
//         <p>This is the brief description of the product.</p>
//         <button className='bg-red-500 p-2 ml-2 border w-32 rounded-md text-white'>Order Now</button>
//       </div>
//     </div>
// </div>
//   )
// }

// export default MenuCards

import Pizza from '../images/pizza.jpg'
import Burger from '../images/burger.jpg'

const MenuCards = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8 mt-10'>
      <div className='flex md:flex-row m-2 border rounded-md p-3 gap-x-2 w-full md:w-[30%] bg-white'>
        <img className='w-28 h-28 object-cover rounded-md' src={Pizza} alt="Pizza" />
        <div className='flex flex-col'>
          <span className='font-bold text-xl'>Pizza</span>
          <span>Price: $2</span>
          <p>This is the brief description of the product.</p>
          <button className='bg-red-500 p-2 ml-2 border w-32 rounded-md text-white'>Order Now</button>
        </div>
      </div>

      <div className='flex md:flex-row m-2 border rounded-md p-3 gap-x-2 w-full md:w-[30%] bg-white'>
        <img className='w-28 h-28 object-cover rounded-md' src={Burger} alt="Burger" />
        <div className='flex flex-col'>
          <span className='font-bold text-xl'>Burger</span>
          <span>Price: $3</span>
          <p>This is the brief description of the product.</p>
          <button className='bg-red-500 p-2 ml-2 border w-32 rounded-md text-white'>Order Now</button>
        </div>
      </div>
    </div>
  )
}

export default MenuCards;

