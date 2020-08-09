import React from 'react';

import {
    FormInputContainer,
    FormInputLabel,
    GroupContainer
} from './form-input.styles'

type FormInputProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    label: string
} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormInput = ({ handleChange, label, ...props }: FormInputProps) => {
    const value = props.value as string

    return (
        <GroupContainer>
            {/* @ts-ignore */}
            <FormInputContainer onChange={handleChange} {...props} />
            {
                label
                    ? (
                        <FormInputLabel  className={value.length ? 'shrink' : ''}>
                            {label}
                        </FormInputLabel>
                    )
                    : null
            }
        </GroupContainer>
    );
};

export default FormInput;