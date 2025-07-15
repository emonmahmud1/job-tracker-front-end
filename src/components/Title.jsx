import React from 'react';

const Title = ({title}) => {
    return (
        <div>
            <h1 className='text-2xl font-semibold text-gray-800 border-l-4 border-green-600 pl-2 font-lora'>{title}</h1>
        </div>
    );
};

export default Title;