// @ts-ignore
import axios from 'axios'
import { PollInterface } from './types'

const API = axios.create({
    baseURL: 'https://andremov-thumbrule-api.herokuapp.com/',
    timeout: 15000,
    responseType: 'json',
})

export const fetchPollsRequest = (): PollInterface[] =>
    API.get('polls/').then((r: { data: { list: PollInterface[]; count: number } }) => r.data.products)

export const updatePollRequest = (id: string, data: PollInterface): string =>
    API.patch(`polls/${id}`, data).then((r: { message: string }) => r.message)
