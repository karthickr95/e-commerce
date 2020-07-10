import React from 'react';

import './custom-button.styles.scss'

type CustomButtonProps = {

} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const CustomButton = (props: CustomButtonProps) => {
    return (
        <button className='custom-button' {...props}>
            {props.children}
        </button>
    );
};

export default CustomButton;