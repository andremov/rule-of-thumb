import React from 'react'
import { Button } from '../button'
import { ReactComponent as WikipediaLogo } from '../../assets/img/wikipedia.svg'
import { ReactComponent as ThumbsUp } from '../../assets/img/thumbs-up.svg'
import { ReactComponent as ThumbsDown } from '../../assets/img/thumbs-down.svg'
import './header.scss'
import pic from '../../assets/img/pope-francis.png'

export function Header(): JSX.Element {
    return (
        <header className="hero">
            <img
                className="hero__background"
                srcSet={'assets/img/pope-francis.png 750w, assets/img/pope-francis.@2x.png 1440w'}
                sizes="(min-width: 750px) 1440px, 100vw"
                src={pic}
                alt="Pope Francis"
            />
            <div className="max-centered">
                <div className="hero__featured-card">
                    <div className="featured-card__glass-background" />
                    <div className="featured-card__content">
                        <p className="featured-card__hairline">What's your opinion on</p>
                        <h2 className="featured-card__title">Pope Francis?</h2>
                        <p className="featured-card__desc">
                            He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile
                            punishing pontiff? (thumbs up)
                        </p>
                        <p className="featured-card__more-info">
                            <a href="http://wikipedia.com">
                                <WikipediaLogo />
                                More information
                            </a>
                        </p>
                        <p className="featured-card__cta">What’s Your Veredict?</p>
                        <div className="featured-card__buttons">
                            <Button buttonClass="icon-button" aria="thumbs up">
                                <ThumbsUp />
                            </Button>
                            <Button buttonClass="icon-button" aria="thumbs down">
                                <ThumbsDown />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hero__closing-gauge">
                <div className="closing-gauge__left">
                    <span className="closing-gauge__title">closing in</span>
                </div>
                <div className="closing-gauge__right">
                    <span className="closing-gauge__number">22</span>
                    <span className="closing-gauge__desc">days</span>
                </div>
            </div>
        </header>
    )
}
