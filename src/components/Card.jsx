import '../App.css'

const Card = () => {
  return (
    <>
    <div className='cardContainer'>
        <div className="pizza border-none rounded-md">
            <h2 className='flex justify-center pt-96 text-xl font-bold'>Pizza</h2>
        </div>
        <div className="burger border-none rounded-md">
            <h2 className='flex justify-center pt-96 text-xl font-bold'>Burger</h2>
        </div>
        <div className="pizza border-none rounded-md">
            <h2 className='flex justify-center pt-96 text-xl font-bold'>Pizza</h2>
        </div>
    </div>
    </>
  )
}

export default Card
