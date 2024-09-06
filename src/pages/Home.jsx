// import pizza from '../images/pizza.jpg'
// import burger from '../images/burger.jfif'
import '../App.css'
import Card from '../components/Card'
import MenuCards from '../components/MenuCards'

const Home = () => {
  // const foodCards = [
  //   {
  //     id: 1,
  //     imgUrl: pizza,
  //     name: 'Pizza'
  //   },
  //   {
  //     id: 2,
  //     imgUrl: burger,
  //     name: 'Burger'
  //   },
  //   {
  //     id: 3,
  //     imgUrl: pizza,
  //     name: 'Pizza'
  //   }
  // ]

  return (
    <div>
      {/* Hero Section */}
      <section id="heroSection" className='flex justify-center items-center'>
        <input 
          type="text" 
          placeholder='Search food items' 
          className='w-[50vw] px-4 py-2 focus:outline-none border border-gray-500 rounded-md'
        />
        <button className='bg-gradient-to-tl from-green-500 to-cyan-500 text-white py-2 px-4 ml-2 border border-gray-500 rounded-md'>
          Search
        </button>
      </section>

      {/* Explore Foods */}
      <section>
        <h2 className='text-3xl font-bold text-gray-700 mt-6 flex justify-center'>
          Explore Foods
        </h2>
        <Card/>
      </section>

      {/* Menu Cards */}
      <section className='mx-auto bg-gray-200'>
        <h2 className='text-3xl font-bold text-gray-700 mt-6 flex justify-center pt-3'>
          Food Menu
        </h2>
        <MenuCards/>
        <MenuCards/>
        <MenuCards/>
      </section>
    </div>
  )
}

export default Home
