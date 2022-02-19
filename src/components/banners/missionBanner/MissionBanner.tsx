import React from 'react'
import { GenericBanner } from '../GenericBanner'
import './missionBanner.scss'
import '../banners.scss'
import { Button } from '../../Button'

export function MissionBanner(): JSX.Element {
    return (
        <GenericBanner bannerClass={'mission'} aria={'Speak Out'}>
            <div className="banner__left">
                <span className="banner__hairline">Speak out. Be heard.</span>
                <span className="banner__title">Be counted</span>
            </div>
            <div className="banner__right">
                <p className="banner__text">
                    Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You
                    share your opinion, we analyze and put the data in a public report.
                </p>
            </div>
            <Button buttonClass="icon-button" aria="close">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
                    <g stroke="#000" strokeWidth="2" fill="none" fillRule="evenodd">
                        <path d="M1 19L19 1M1 1l18 18" />
                    </g>
                </svg>
            </Button>
        </GenericBanner>
    )
}
