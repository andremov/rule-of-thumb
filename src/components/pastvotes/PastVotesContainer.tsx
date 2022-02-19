import React from 'react'
import { PastVotesCard } from './PastVotesCard'
import './pastvotes.scss'
import { useSelector } from 'react-redux'
import { getPolls } from '../../utils/pollSlice'
import { PollInterface } from '../../utils/types'

export function PastVotesContainer(): JSX.Element {
    const data: PollInterface[] = useSelector(getPolls)

    if (!data) {
        return (
            <main role="main">
                <div className={'spinner'} />
            </main>
        )
    }

    return (
        <main role="main">
            <h2>Previous Rulings</h2>
            {data.map((item: PollInterface) => (
                <PastVotesCard key={item._id} {...item} />
            ))}
        </main>
    )
}
