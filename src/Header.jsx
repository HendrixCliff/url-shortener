import React from "react"

export default function Header() {
    return (
     <header>
         <ul>
            <div className="max-hero">
            <img className="logo" src="./src/assets/Logo.png" alt="Logo" />
            <div className="sub-hero">
                <li>
                <a className="styl-link-2" href="#">
                    My URLs
                </a>
                </li>
                <li>Features</li>
                <img src="./src/assets/chevron-down.png" />
                <li>Pricing</li>
                <li>Analytics</li>
                <li>FAQs</li>
            </div>
            <div className="min-hero">
                <li>
                <a className="styl-link-2" href="#">
                    Log in
                </a>
                </li>
                <li>
                <a className="styl-link" href="#">
                    Try for Free
                </a>
                </li>
            </div>
            </div>
        </ul>
  </header>

    )
}