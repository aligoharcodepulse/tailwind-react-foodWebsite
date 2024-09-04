import Img from "../images/logo.jpg"
const Navbar = () => {
  return (
    <div className="flex justify-between px-5 p-2">
    <div className="flex justify-center items-center">
      <img src={Img} className="w-36 h-20"/>
      <h2 className="font-bold text-gray-600 text-2xl ml-3">Foodpanda</h2>
    </div>
    <div className="flex gap-x-7 justify-center items-center">
        <h2 className="text-2xl text-gray-600 hover:text-red-600 font-semibold hover:cursor-pointer">Home</h2>
        <h2 className="text-2xl text-gray-600 hover:text-red-600 font-semibold hover:cursor-pointer">About</h2>
        <h2 className="text-2xl text-gray-600 hover:text-red-600 font-semibold hover:cursor-pointer">Foods</h2>
        <h2 className="text-2xl text-gray-600 hover:text-red-600 font-semibold hover:cursor-pointer">Contact</h2>
    </div>
    </div>
  )
}

export default Navbar
