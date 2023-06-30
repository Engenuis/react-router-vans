import "./style.css";
import Van from "../../assets/about-van.png";

export default function About() {
    return (
        <main className="about-main">
            <img src={Van} alt="Man in a van" className="about-main__image"/>
            <section className="mission-section">
                <h1 className="mission-section__title">Don't squeeze in a sedan when you could relax in a van.</h1>
                <p className="mission-section__text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
            </section>
            <section className="destination-section">
                <h1 className="destination-section__title">Your destination is waiting.
                Your van is ready.</h1>
                <button className="destination-section__button">Explore our vans</button>
            </section>
        </main>
    )
}