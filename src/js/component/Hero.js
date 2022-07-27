import React from "react"
import Pic from "../../img/photo-grid.png"

export default function Hero() {
    return (
        <section className="hero">
            <img src={Pic} className="hero--photo" />
            <div className="wrapper">
                <h1 className="hero--header">Online Experiences</h1>
                <p className="hero--text">Join unique interactive activities led by
                    one-of-a-kind hosts—all without leaving home.</p>
            </div>

        </section>
    )
}