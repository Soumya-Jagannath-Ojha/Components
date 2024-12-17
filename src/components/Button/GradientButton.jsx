import React from 'react'

const GradientButton = () => {
  return (
    <div className='flex items-center justify-center w-full relative py-20 bg-black h-screen'>
        {/* Bottom Gradient Button */}
        <button className='bg-neutral-800 relative z-20 text-white p-4 rounded-[7px] text-sm group'>
            Submit button 
            <div className="absolute inset-x-0 bottom-0 h-[1px] w-full bg-gradient-to-r from-transparent via-purple-500"></div>
            <div className="absolute inset-x-0 bottom-0 h-[4px] w-full mx-auto bg-gradient-to-r from-transparent via-sky-500 blur-sm"></div>
        </button>

    </div>
  )
}

export default GradientButton