import React from 'react';

import './custom-button.styles.scss'

type CustomButtonProps = {
    isGoogleSignIn?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const CustomButton = ({isGoogleSignIn = false, ...props}: CustomButtonProps) => {
    return (
        <button
            className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default CustomButton;