import React from 'react';

const FooterColumn = ({ title, children }) => {
    return (
        <div className='flex-col items-center justify-center gap-5 text-center'>
            <h4 className='bold-18 whitespace-nowrap'>{title}</h4>
            {children}
        </div>
    );
};

export default FooterColumn;
