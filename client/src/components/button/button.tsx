import React from 'react'
import {
    StyledNormalButton,
    StyledInvertedButton,
    StyledGoogleSignInButton
} from './styles'

type BaseButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const NormalButton = (props: BaseButtonProps) => (
    // @ts-ignore
    <StyledNormalButton {...props}>{props.children}</StyledNormalButton>
)

export const InvertedButton = (props: BaseButtonProps) => (
    // @ts-ignore
    <StyledInvertedButton {...props}>{props.children}</StyledInvertedButton>
)

export const GoogleSignInButton = (props: BaseButtonProps) => (
    // @ts-ignore
    <StyledGoogleSignInButton {...props}>{props.children}</StyledGoogleSignInButton>
)