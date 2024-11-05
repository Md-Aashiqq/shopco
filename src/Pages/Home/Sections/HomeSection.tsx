import { Button } from '@/components/ui/button'
import React from 'react'

import homeImage from '../../../assets/home_image.png'


const stats = [{
    title:"200+",
    desc: "Satisfied Customers"
},

{
    title:"2000+",
    desc: "High-Quality Products"
},
{
    title:"30,000+",
    desc: "Happy Customers"
},

]

function HomeSection() {
  return (
    <>
        <div className='main_section flex flex-basis bg-stone-200'>

            <div className='main_content basis-1/2 pl-[100px] pt-[100px]'>
                <h1 className='main_title w-[577px] font-bold text-6xl mb-3'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='main_description w-[577px] mb-3 text-slate-600'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                
                <Button onClick={()=>window.alert("Coming Soon")} className='h-[52px] w-[210px] mb-10 rounded-3xl' variant={"default"}>Shop Now</Button>

                <div className='stats flex gap-10'>
                    {stats.map((stat,index) => (
                        <div className='stat pr-4' style={{borderRight: index !== 2 ? "2px solid #D9D9D9" : "none" }}>
                            <h3 className='stat_title font-bold text-4xl' >{stat.title}</h3>
                            <p className='stat_description text-slate-600'>{stat.desc}</p>
                        </div>
                        
                    ))}
                </div>
            </div>

            <div className='main_image basis-1/2'>
                <img src={homeImage} alt='Home Image' className='h-[650px] w-full object-fit' />
            </div>
        </div>
    </>
  )
}

export default HomeSection