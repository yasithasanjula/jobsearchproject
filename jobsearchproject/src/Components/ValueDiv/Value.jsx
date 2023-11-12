import React from 'react'

//Imported Images =====>
import simple from '../../Assets/simple.png'
import valentinens from '../../Assets/valentinens.png'
import shield from '../../Assets/shield.png'
const Value = () => {
  return (
    <div className='mb-[4rem] mt-[6rem]'>
      <h1 className='text-textcolor text-[25px] py-[2rem] pb-[3rem] font-bold 
      w-[400px] block'>The value that holds us true and to account</h1>

       <div className='grid-[10rem] grid-cols-3 items-center'>

        <div className='singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] 
            w-[40px] flex items-center justify-center'>
              <img src={simple} alt='' className='w-[70%]'/>
            </div>

            <spam className='font-semibold text-textcolor text-[18px]'>
              Simplicity
            </spam>
          </div>
          <p className='text-[13px] text-textcolor opacity-[.7] py-[1rem]
          font-semibold'>
          Things beinf made beautiful simple are at the heart of everything we do.    
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1] h-[40px] 
            w-[40px] flex items-center justify-center'>
              <img src={valentinens} alt='' className='w-[70%]'/>
            </div>

            <spam className='font-semibold text-textcolor text-[18px]'>
              Simplicity
            </spam>
          </div>
          <p className='text-[13px] text-textcolor opacity-[.7] py-[1rem]
          font-semibold'>
          We belives in making things better for everyone, even if just by a little
          bit!    
          </p>
        </div>

        <div className='singleGrid rounded-[10px] hover:bg-[#f3f2ad] p-[1.5rem]'>
          <div className='flex items-center gap-3'>
            <div className='imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8] h-[40px] 
            w-[40px] flex items-center justify-center'>
              <img src={shield} alt='' className='w-[70%]'/>
            </div>

            <spam className='font-semibold text-textcolor text-[18px]'>
              Simplicity
            </spam>
          </div>
          <p className='text-[13px] text-textcolor opacity-[.7] py-[1rem]
          font-semibold'>
          We work on the basis of creating trust which can be nurtured through
          authenticity and transparency    
          </p>
        </div> 

       </div>
    </div>
  )
}

export default Value