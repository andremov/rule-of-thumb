import React from 'react'
import { Footer } from './components/footer'
import { MissionBanner, SubmissionBanner } from './components/banners'
import { NavBar } from './components/navbar'
import { Header } from './components/header'
import { PastVotesContainer } from './components/pastvotes'
import { useDispatch } from 'react-redux'
import { refreshPolls } from './utils/pollSlice'

export function App(): JSX.Element {
    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(refreshPolls)
    }, [])

    return (
        <React.Fragment>
            <NavBar />
            <Header />
            <div className="max-centered">
                <MissionBanner />
                <PastVotesContainer />
                <SubmissionBanner />
                <Footer />
            </div>
        </React.Fragment>
    )
}
