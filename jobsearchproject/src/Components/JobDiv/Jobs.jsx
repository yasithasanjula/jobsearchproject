import React from 'react'

// Imported Icons ======>
import {BiTimeFive} from 'react-icons/bi'

//Imported Images ======>
import logo1 from '../../Assets/logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'


//For all the jobs, we are going to use high order array method called map..
//In this case we shall list all the jobs into an array called Data..

const Data =[
  {
    id:1,
    image: logo1,
    title: 'Web developer',
    time: 'Now',
    location: 'Canada',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim dolorem!',
    company: 'Novac Linus Co.'
  },
  {
    id:2,
    image: logo2,
    title: 'UI Designer',
    time: '14hrs',
    location: 'Manchester',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim dolorem!',
    company: 'Liquid Accessments'
  },
  {
    id:3,
    image: logo3,
    title: 'Software Eng',
    time: '10hrs',
    location: 'Austria',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Enim dolorem!',
    company: 'Web Tech Agency'
  }
]

//This is a single company, Lets see how to map it...
const Jobs = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-werp items-center py-10" >

        {
          Data.map(({id,image,title,time,location,desc,company}) =>{
            return(
              //This will return a single job post based on the ID
              <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded
              [10px] hover:bg-blueColor shadow-lg shadow-grayIsh-400/700 hover:shadow-lg">

                <span className='flex justify-between items-center gap-4'>
                    <h1 className='text-[16px] font-semibold text-textcolor
                   group-hover:text-white'>{title}</h1>
                    <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                    </span>
                </span>
                <h6 className='text-[#ccc]'>{location}</h6>

                <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px]
               group-hover:text-white'>
                {desc}
                </p>

                <div className='company flex items-center gap-2'>
                   <img src={image} alt="Company Logo" className='w-[10%]' />
                   <spam className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</spam>
                </div>

                 <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-
                 [14px] font-semibold text-textcolor hover:bg-white 
                 group-hover/item:text-textcolor group-hover:text-white'>
                  Apply Now
                  </button>

              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default Jobs