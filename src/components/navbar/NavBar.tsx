import React from 'react'
import './navbar.scss'

const navLinks = [
    {
        key: 'past_trials',
        label: 'Past Trials',
        href: '#',
    },
    {
        key: 'how_it_works',
        label: 'How It Works',
        href: '#',
    },
    {
        key: 'login_sign_up',
        label: 'Login / Sign Up',
        href: '#',
    },
]

export function NavBar(): JSX.Element {
    return (
        <nav className="nav" role="navigation">
            <div className="max-centered">
                <h1 className="nav__logo">Rule of thumb.</h1>
                <button className="nav__hamburger icon-button" alt="Open Menu">
                    <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z" fill="#FFF" fillRule="nonzero" />
                    </svg>
                </button>
                <ul className="nav__links">
                    {navLinks.map((item) => (
                        <li key={item.key}>
                            <a href={item.href}>{item.label}</a>
                        </li>
                    ))}
                    <li>
                        <form action="javascript:void(0)">
                            <input className="nav__search-input" aria-label="search" type="text" />
                            <button className="nav__search icon-button" alt="Search" type="submit">
                                <img src="../../assets/img/search.svg" alt="search" />
                            </button>
                        </form>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
