import React from 'react'
import './footer.scss'
import { ReactComponent as FacebookLogo } from '../../assets/facebook.svg'
import { ReactComponent as TwitterLogo } from '../../assets/twitter.svg'

const footerLinks = [
    {
        key: 'terms_and_conditions',
        label: 'Terms and Conditions',
        href: '#',
    },
    {
        key: 'privacy_policy',
        label: 'Privacy Policy',
        href: '#',
    },
    {
        key: 'contact_us',
        label: 'Contact Us',
        href: '#',
    },
]

export function Footer(): JSX.Element {
    return (
        <React.Fragment>
            <hr role="separator" />
            <footer className="footer">
                <div className="footer__links">
                    <ul>
                        {footerLinks.map((item) => (
                            <li key={item.key}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="footer__social">
                    <span>Follow us</span>
                    <ul>
                        <li>
                            <a href="#">
                                <FacebookLogo />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <TwitterLogo />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </React.Fragment>
    )
}
