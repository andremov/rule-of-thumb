import React from 'react'
import { ReactComponent as ThumbsUp } from '../../assets/img/thumbs-up.svg'
import { ReactComponent as ThumbsDown } from '../../assets/img/thumbs-down.svg'
import { Button } from '../button'
import './pastvotes.scss'

export interface VoteData {
    key?: string
    name: string
    description: string
    category: string
    picture: string
    lastUpdated: string
    votes: {
        positive: number
        negative: number
    }
}

function toTitleCase(str: string): string {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
}

function distanceFrom(date: Date): string {
    const now = new Date()
    const dateFields = [
        {
            func: 'getFullYear',
            name: 'year',
        },
        {
            func: 'getMonth',
            name: 'month',
        },
        {
            func: 'getDate',
            name: 'day',
        },
    ]

    for (const index in dateFields) {
        const item = dateFields[index]
        // @ts-ignore
        const distance = now[item.func].call(now) - date[item.func].call(date)
        if (distance > 0) {
            return `${distance} ${item.name}${distance > 1 ? 's' : ''} ago`
        }
    }

    return 'Today'
}

export function PastVotesCard({ name, description, category, lastUpdated, votes: { positive, negative } }: VoteData): JSX.Element {
    const totalVotes = positive + negative
    const agreePercent = ((positive / totalVotes) * 100).toFixed(1)
    const disagreePercent = ((negative / totalVotes) * 100).toFixed(1)
    const timeDistance = distanceFrom(new Date(lastUpdated))

    return (
        <div className={'past-votes-card'}>
            <div className={'past-votes-card__glass-background'} />
            <div className={'past-votes-card__info'}>
                <div className={'past-votes-card__info__quarter'}>
                    <div className={`past-votes-card__result ${agreePercent > disagreePercent ? 'green' : 'yellow'}`}>
                        {agreePercent > disagreePercent ? <ThumbsUp /> : <ThumbsDown />}
                    </div>
                </div>
                <div className={'past-votes-card__info__half'}>
                    <h3 className={'past-votes-card__title'}>{name}</h3>
                    <h4 className={'past-votes-card__body'}>{description}</h4>
                </div>
                <div className={'past-votes-card__info__quarter'}>
                    <h5 className={'past-votes-card__category'}>{`${timeDistance} in ${toTitleCase(category)}`}</h5>
                    <div className={'past-votes-card__vote-buttons'}>
                        <Button buttonClass={'icon-button'} aria="thumbs up">
                            <ThumbsUp />
                        </Button>
                        <Button buttonClass={'icon-button'} aria="thumbs down">
                            <ThumbsDown />
                        </Button>
                        <Button buttonClass={'black'}>Vote Now</Button>
                    </div>
                </div>
            </div>
            <div className={'past-votes-card__vote-bar'}>
                <div style={{ '--bar-width': `${agreePercent}%` }} className={'past-votes-card__vote-bar__fill green'}>
                    <ThumbsUp />
                    <span>{agreePercent}%</span>
                </div>
                <div style={{ '--bar-width': `${disagreePercent}%` }} className={'past-votes-card__vote-bar__fill yellow'}>
                    <span>{disagreePercent}%</span>
                    <ThumbsDown />
                </div>
            </div>
        </div>
    )
}
