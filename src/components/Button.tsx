import React from 'react'

interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string
    buttonClass: string
    type?: 'button' | 'submit' | 'reset'
    aria?: string
}

export function Button({ children, buttonClass, type, aria }: ButtonProps): JSX.Element {
    return (
        <button aria-label={aria} type={type} className={buttonClass}>
            {children}
        </button>
    )
}
