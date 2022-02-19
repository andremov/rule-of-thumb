import React from 'react'
import './banners.scss'
import { GenericBannerProps } from '../../utils/types'

export function GenericBanner({ children, aria, bannerClass }: GenericBannerProps): JSX.Element {
    return (
        <aside className={`banner banner-${bannerClass}`} role="doc-tip" aria-label={aria}>
            {children}
        </aside>
    )
}
