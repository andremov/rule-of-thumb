export interface PollInterface {
    _id: string
    name: string
    description: string
    category: string
    picture: string
    lastUpdated: string
    positiveVotes: number
    negativeVotes: number
}

export interface StoreInterface {
    polls: PollState
}

export interface PollState {
    data: PollInterface[]
    loading: boolean
}

export interface ButtonProps {
    children?: JSX.Element | JSX.Element[] | string
    buttonClass: string
    type?: 'button' | 'submit' | 'reset'
    aria?: string
    onClick?: () => void
    disabled?: boolean
}

export interface GenericBannerProps {
    children?: JSX.Element | JSX.Element[]
    aria: string
    bannerClass: string
}
