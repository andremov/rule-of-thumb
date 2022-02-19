import React from 'react'

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

export function PastVotesCard({ name }: VoteData): JSX.Element {
    return <div>{name}</div>
}
