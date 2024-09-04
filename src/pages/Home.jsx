//import banner  from '../images/banner.jpg'
import '../App.css'
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section id="heroSection" className='flex justify-center items-center'>
        <input type="text" placeholder='Search food items' className='w-[50vw] px-4 py-2 focus:outline-none border border-gray-500 rounded-md'/>
        <button className='bg-gradient-to-tl from-green-500 to-cyan-500 text-white py-2 px-4 ml-2 border border-gray-500 rounded-md'>Search</button>
      </section>

      {/* Explore Foods */}
      <section>
        <h2 className='text-3xl font-bold text-gray-700 mt-6 flex justify-center'>Explore Foods</h2>
      </section>
    </div>
  )
}

export default Home
