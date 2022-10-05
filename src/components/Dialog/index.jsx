import React from 'react';
import './dialogStyles.scss';


const Dialog = ({children}) => {
    return (
        <div className={'dialog-container'}>
            <div className="dialog-block">
                {children}
            </div>
        </div>
    );
};

export default Dialog;