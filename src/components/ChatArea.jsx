import React from 'react'

export function ChatArea() {
  return (
    <div className='bg-amber-700 h-screen'>

        {/* chat details header  */}
        <div className="bg-white  py-5 px-10 flex justify-between items-center">
                <div className='flex items-center gap-5'>
                    {/* profile image  */}
                    <div className='relative'>
                        
                        <img src="/assets/Ellipse1.png" alt="" />

                        {/* user active icon  */}
                        <img src="/assets/Rectangle 6.png" alt="user active icon" className='absolute bottom-1 left-12 '/>
                    </div>

                    {/* username and message  */}
                    <div>
                        <h4 className='font-bold'>Boakai Kamara</h4>
                        <p className='text-slate-400'>I a coming at your house.</p>
                    </div>
                </div>

                {/* action section  */}
                <div className='flex items-center gap-10'>
                    <img src="/assets/ri_phone-fill.png" alt="phone icon" />


                    <img src="/assets/majesticons_video.png" alt="video icon" />


                    <img src="/assets/ri_more-2-fill.png" alt="more icon" />
                </div>
            </div>
    </div>
  )
}
