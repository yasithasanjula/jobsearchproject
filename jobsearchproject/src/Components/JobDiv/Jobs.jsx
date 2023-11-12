import React from 'react'

// Imported Icons ======>
import {BiTimeFive} from 'react-icons/bi'

//Imported Images ======>
import logo1 from '../../Assets/logo1.png'
const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-werp items-center py-10" >

        <div className="group group/item singleJob w-[250px] p-[20px] bg-white rounded
        [10px] hover:bg-blueColor shadow-lg shadow-grayIsh-400/700 hover:shadow-lg">

          <span className='flex justify-between items-center gap-4'>
            <h1 className='text-[16px] font-semibold text-textcolor
            group-hover:text-white'>Web developer</h1>
            <span className='flex items-center text-[#ccc] gap-1'>
              <BiTimeFive/>Now  
            </span>
          </span>
          <h6 className='text-[#ccc]'>Canada</h6>

          <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
          group-hover:text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim dolorem!
          </p>

          <div className='company flex items-center gap-2'>
            <img src={logo1} alt="Company Logo" className='w-[10%]' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Jobs