import FB from '../images/fb.png'
import Insta from '../images/insta.png'
import Twitter from '../images/twitter.png'

const Footer = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center items-center gap-2 mt-2 mb-2">
      <div className='flex gap-4'>
        <img src={FB} className='w-10 h-10  hover:cursor-pointer' />
        <img src={Insta} className='w-12 h-12  hover:cursor-pointer' />
        <img src={Twitter} className='w-10 h-10 border-none rounded-[50%] hover:cursor-pointer' />
      </div>
      <div>
        <h2 className='text-xl'>All rights reserved. Designed by: <a href='https://www.linkedin.com/in/muhammad-ali-gohar-b47662277/' target='_blank' className="text-red-600">Muhammad Ali</a> </h2>
      </div>
    </div>
  )
}

export default Footer
