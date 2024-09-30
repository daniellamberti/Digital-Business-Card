import React from "react"

export default function Info () {
    return (
        <section className="info-section">
        <img src="./profile-img.png" className="profile-img" alt="profile's picture" />
        <h1>Laura Smith</h1>
        <h2>Frontend Developer</h2>
        <p>laurasmith.website</p>
        <div className="email-linkedin-buttons" aria-label="Email and Linkedin links">
        <button className="email-info-btn" aria-label="Owner's email address">
        <img src="./info-email.png" alt="email icon" />
        <p>Email</p>
        </button>
        <button className="linkedin-info-btn" aria-label="Owner's Linkedin Profile ">
        <img src="./info-linkedin.png" alt="linkedin icon" />
        <p>Linkedin</p>
        </button>
        </div>
        </section>
    )
}