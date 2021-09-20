import { Link } from 'react-router-dom';
import Teaching from '../Teach/teach';



import './about.scss';

const About = () => {
    return (
        <section className="about-container">
               <div className="containerTwo">
                    <h4> More about Martha</h4>
                    <article>
                        <p>When I was a kid, if you asked me what I wanted to do when I was an adult I would say « I want to be an astronomer ». I was fascinated by the ever glowing beauty of the sky. And I think my soul knew at that time, where I was supposed to go. I also remember when I was a child my most favourite Christmas present was always an astrology for the year to come book!</p>
                        <p>It’s funny how we go through these ebbs and flows in life. Where we forget the things that bring us joy, and than have the privilege to re-fall in love again.</p>
                        <p> Anyways: my goal for 2021 is to be in utmost service to you all. To guide you and to help you walk through life with more consciousness. Through astrology i give people their power back. Everyone at some point in their life needs someone to look at them and say. « Yeah that’s how you’re made. Now go out there and own it! ».</p>
                        <Link to="/about"className="btn">Read more</Link>
                    </article>
                </div> {/*  */}
                
        </section>
    );
};

export default About;