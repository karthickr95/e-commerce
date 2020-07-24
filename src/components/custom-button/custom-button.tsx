import React from 'react';

import './custom-button.styles.scss'

type CustomButtonProps = {
    isGoogleSignIn?: boolean
    inverted?: boolean
} & React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

const CustomButton = ({isGoogleSignIn, inverted, ...props}: CustomButtonProps) => {
    return (
        <button
            className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
            {...props}
        >
            {props.children}
        </button>
    );
};

export default CustomButton;