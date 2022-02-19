import React from 'react'
import './button.scss'
import { ButtonProps } from '../../utils/types'

export function Button({ children, buttonClass, type, aria, onClick, disabled }: ButtonProps): JSX.Element {
    return (
        <button aria-label={aria} type={type} onClick={onClick} className={buttonClass} disabled={!!disabled}>
            {children}
        </button>
    )
}
