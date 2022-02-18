import React from 'react'
import './banners.scss'

interface GenericBannerProps {
    children: JSX.Element | JSX.Element[] | undefined
    aria: string
    bannerClass: string
}

export function GenericBanner({ children, aria, bannerClass }: GenericBannerProps): JSX.Element {
    return (
        <aside className={`banner banner-${bannerClass}`} role="doc-tip" aria-label={aria}>
            {children}
        </aside>
    )
}
