import React from 'react'
import { PastVotesCard } from './PastVotesCard'
import './pastvotes.scss'
import { useSelector } from 'react-redux'
import { getPolls } from '../../utils/pollSlice'
import { PollInterface } from '../../utils/types'

export function PastVotesContainer(): JSX.Element {
    const [view, setView] = React.useState('List')
    const data: PollInterface[] = useSelector(getPolls)

    const handleViewChange = (e: React.ChangeEvent<HTMLSelectElement>): void => setView(e.target.value)

    if (!data) {
        return (
            <main role="main">
                <h2>Previous Rulings</h2>
                <div className={'spinner'} />
                <div className={'spinner-text'}>Loading content...</div>
            </main>
        )
    }

    return (
        <main role="main">
            <div className={'post-votes-container__title'}>
                <h2>Previous Rulings</h2>
                <select onChange={handleViewChange}>
                    <option>List</option>
                    <option>Grid</option>
                </select>
            </div>
            <div className={`post-votes-container ${view.toLocaleLowerCase()}-view`}>
                <div className={'post-votes-container__scroll'}>
                    {data.map((item: PollInterface) => (
                        <PastVotesCard key={item._id} {...item} />
                    ))}
                </div>
            </div>
        </main>
    )
}
