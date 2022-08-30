import React from 'react';

const Accordion = () => {
    return (
        <div className='relative w-full overflow-hidden'>
            <input type="checkbox" className='peer absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer' />
            <div className="h-12 w-full flex items-center">
                <h1 className='text-lg font-semibold'>
                    Why should I buy your product? Convince me!
                </h1>
            </div>
            {/* Arrow icons */}
            <div className='absolute top-3 right-3 transition-transform duration-500 rotate-0 peer-checked:rotate-180'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
            </div>

            {/* Content */}
            <div className='pl-5 overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-40'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat optio laboriosam facere! Maxime maiores vel autem recusandae voluptatum accusamus doloremque, aliquam sit nesciunt, corrupti possimus dolorem repudiandae optio eaque aperiam!</p>
            </div>
        </div>
    );
};

export default Accordion;