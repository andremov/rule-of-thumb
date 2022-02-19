import React from 'react'
import { Footer } from './components/footer'
import { MissionBanner, SubmissionBanner } from './components/banners'
import { NavBar } from './components/navbar'
import { Header } from './components/header'
import { Button } from './components/Button'

export function App(): JSX.Element {
    return (
        <React.Fragment>
            <NavBar />
            <Header />
            <MissionBanner />
            <div className="max-centered">
                <main role="main">👉 Your code goes here 👈</main>
                <SubmissionBanner />
                <Footer />
            </div>
        </React.Fragment>
    )
}
