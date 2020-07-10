import React from 'react';

import './form-input.styles.scss'

type FormInputProps = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    label: string

} & React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

const FormInput = (props: FormInputProps) => {
    const value = props.value as string

    return (
        <div className='group'>
            <input
                className='form-input'
                onChange={props.handleChange}
                {...props} />
            {
                props.label
                    ? (
                        <label className={`${value? (value.length ? 'shrink' : '') : ''} form-input-label`}>
                            {props.label}
                        </label>
                    )
                    : null
            }
        </div>
    );
};

export default FormInput;