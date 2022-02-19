import React from 'react'
import data from '../../assets/data.json'
import { PastVotesCard, VoteData } from './PastVotesCard'
import './pastvotes.scss'

export function PastVotesContainer(): JSX.Element {
    const keyedData = data.data.map((item: VoteData) => ({ ...item, key: item.name.split(' ').join('').toLocaleLowerCase() }))
    return (
        <main role="main">
            <h2>Previous Rulings</h2>
            {keyedData.map((item: VoteData) => (
                <PastVotesCard key={item.key} {...item} />
            ))}
        </main>
    )
}
