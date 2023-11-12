import React from 'react'

//Imported Images =====>
import simple from '../../Assets/simple.png'

const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textcolor text-[25px] py-[2rem] pb-[3rem] font-bold w-[400px] 
      block'>The value that holds us true and to account</h1>

       <div className='grid gap-[10rem] gird-cols-3 items-center'>
        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-inherit-[#dedef8] h-
            [40px] w-[40px] flex items-center justify-center'>
              <img src={simple} alt='' className='w-[70%]'/>
            </div>

            <spam className='font-semibold text-textcolor text-[18px]'>
              Simplicity
            </spam>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Value