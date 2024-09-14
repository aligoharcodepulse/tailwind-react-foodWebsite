import '../App.css'

const Card = () => {
  return (
    <>
    <div className="flex flex-wrap justify-center items-center w-full mt-7 mb-7 gap-7">
        <div className="pizza flex justify-center items-end border-none rounded-md">
            <h2 className='text-xl font-bold'>Pizza</h2>
        </div>
        <div className="burger flex justify-center items-end border-none rounded-md">
            <h2 className='text-xl font-bold'>Burger</h2>
        </div>
        <div className="pizza flex justify-center items-end border-none rounded-md">
            <h2 className='text-xl font-bold'>Pizza</h2>
        </div>
    </div>
    </>
  )
}

export default Card
