import React from 'react';
import PdDescriptionAccordion from '../PdDescriptionAccordion/PdDescriptionAccordion';

const PdDetailsAndDescription = () => {
    return (
        <div className='w-1/2 bg-blue-200'>
            <h1>Red Fish</h1>
            <h3>Category here</h3>
            <p>Price: $ <span>800.00</span>/unit</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, velit quae! Quae nisi ipsa quasi ea nobis dolore ex vero!</p>
            <PdDescriptionAccordion />
        </div>
    );
};

export default PdDetailsAndDescription;