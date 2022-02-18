import React from 'react'
import { GenericBanner } from '../GenericBanner'
import './submissionBanner.scss'
import '../banners.scss'

export function SubmissionBanner(): JSX.Element {
    return (
        <GenericBanner bannerClass={'submission'} aria={'Submit a name'}>
            <img
                srcSet="assets/img/bg-people.png 750w, assets/img/bg-people.@2x.png 1440w"
                sizes="(min-width: 750px) 1440px, 100vw"
                className="banner__background"
                src="assets/img/bg-people.png"
                alt=""
                role="none"
            />
            <div className="banner__left">
                <h2 className="banner__heading">Is there anyone else you would want us to add?</h2>
            </div>
            <div className="banner__right">
                <button className="banner__cta">Submit a name</button>
            </div>
        </GenericBanner>
    )
}
