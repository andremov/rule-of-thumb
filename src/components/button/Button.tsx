import React from 'react'
import './button.scss'

interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string
    buttonClass: string
    type?: 'button' | 'submit' | 'reset'
    aria?: string
    onClick?: () => void
}

export function Button({ children, buttonClass, type, aria, onClick }: ButtonProps): JSX.Element {
    return (
        <button aria-label={aria} type={type} onClick={onClick} className={buttonClass}>
            {children}
        </button>
    )
}
