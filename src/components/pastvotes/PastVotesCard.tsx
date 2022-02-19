import React from 'react'
import { ReactComponent as ThumbsUp } from '../../assets/img/thumbs-up.svg'
import { ReactComponent as ThumbsDown } from '../../assets/img/thumbs-down.svg'
import { Button } from '../button'
import './pastvotes.scss'
import { distanceFrom, toTitleCase } from '../../utils/utils'
import { useDispatch } from 'react-redux'
import { sendPollVote } from '../../utils/pollSlice'
import { PollInterface } from '../../utils/types'

export function PastVotesCard({ _id, picture, name, description, category, lastUpdated, positiveVotes, negativeVotes }: PollInterface): JSX.Element {
    const dispatch = useDispatch()
    const [selectedVote, setVote] = React.useState(0)

    const totalVotes = positiveVotes + negativeVotes
    const agreePercent = ((positiveVotes / totalVotes) * 100).toFixed(1)
    const disagreePercent = ((negativeVotes / totalVotes) * 100).toFixed(1)
    const timeDistance = distanceFrom(new Date(lastUpdated))

    const handleUp = (): void => setVote(1)
    const handleDown = (): void => setVote(-1)
    const sendVote = async (): Promise<void> => {
        await dispatch(sendPollVote(dispatch, { _id, vote: selectedVote }))
    }

    return (
        <div className={'past-votes-card'}>
            <div className={'past-votes-card__glass-background'} />
            <div className={'past-votes-card__info'}>
                <div className={'past-votes-card__info__left-side'}>
                    <img src={`/assets/img/${picture}`} alt={name} />
                    <div className={`past-votes-card__result ${agreePercent > disagreePercent ? 'green' : 'yellow'}`}>
                        {agreePercent > disagreePercent ? <ThumbsUp /> : <ThumbsDown />}
                    </div>
                </div>
                <div className={'past-votes-card__info__middle-side'}>
                    <h3 className={'past-votes-card__title'}>{name}</h3>
                    <h4 className={'past-votes-card__body'}>{description}</h4>
                </div>
                <div className={'past-votes-card__info__right-side'}>
                    <h5 className={'past-votes-card__category'}>{selectedVote % 2 === 0 ? `${timeDistance} in ${toTitleCase(category)}` : ''}</h5>
                    <div className={'past-votes-card__vote-buttons'}>
                        <Button buttonClass={`icon-button ${selectedVote === 1 ? 'selected' : ''}`} aria="thumbs up" onClick={handleUp}>
                            <ThumbsUp />
                        </Button>
                        <Button buttonClass={`icon-button ${selectedVote === -1 ? 'selected' : ''}`} aria="thumbs down" onClick={handleDown}>
                            <ThumbsDown />
                        </Button>
                        <Button disabled={selectedVote === 0} onClick={sendVote} buttonClass={'black'}>
                            {selectedVote % 2 === 0 ? 'Vote Now' : ''}
                        </Button>
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
