// @ts-ignore
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit'
import { fetchPollsRequest, updatePollRequest } from './api'
import { PollInterface, PollState, StoreInterface } from './types'

const initialState: PollState = {
    data: [],
    loading: false,
}

export const pollSlice = createSlice({
    name: 'polls',
    initialState,
    reducers: {
        pollsReceived: (state: PollState, action: PayloadAction<PollInterface[]>): void => {
            state.data = action.payload
            state.loading = false
        },
        pollsLoading: (state: PollState): void => {
            if (!state.loading) {
                state.loading = true
            }
        },
        voteNegative: (state: PollState, action: PayloadAction<string>): PollInterface | undefined => {
            state.data = state.data.map((poll) =>
                poll._id === action.payload
                    ? {
                          ...poll,
                          negativeVotes: poll.negativeVotes + 1,
                      }
                    : poll
            )
            return state.data.find((poll) => poll._id === action.payload)
        },
        votePositive: (state: PollState, action: PayloadAction<string>): PollInterface | undefined => {
            state.data = state.data.map((poll) =>
                poll._id === action.payload
                    ? {
                          ...poll,
                          positiveVotes: poll.positiveVotes + 1,
                      }
                    : poll
            )
            return state.data.find((poll) => poll._id === action.payload)
        },
    },
})

export const { pollsReceived, pollsLoading, voteNegative, votePositive } = pollSlice.actions

export const refreshPolls = async (dispatch: Dispatch): Promise<void> => {
    dispatch(pollsLoading())
    const polls = await fetchPollsRequest()
    if (!polls) {
        setTimeout(() => dispatch(refreshPolls), 10000)
    } else {
        dispatch(pollsReceived(polls))
    }
}

export const sendPollVote = async (dispatch: Dispatch, data: { _id: string; vote: number }): Promise<void> => {
    let poll
    switch (data.vote) {
        case -1:
            poll = dispatch(voteNegative(data._id))
            break
        case 1:
            poll = dispatch(votePositive(data._id))
            break
    }
    if (poll) {
        await updatePollRequest(data._id, poll)
    }
    dispatch(refreshPolls)
}

export const getPolls = (state: StoreInterface): PollInterface[] => state.polls.data
export const arePollsLoading = (state: StoreInterface): boolean => state.polls.loading

export default pollSlice.reducer
