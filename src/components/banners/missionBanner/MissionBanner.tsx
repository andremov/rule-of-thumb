import React from 'react'
import { GenericBanner } from '../GenericBanner'
import './missionBanner.scss'
import '../banners.scss'
import { Button } from '../../Button'
import { ReactComponent as Close } from '../../../assets/img/close.svg'

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
                <Close />
            </Button>
        </GenericBanner>
    )
}
