import { Link } from 'react-router-dom';

import './martha.scss';

 const Martha = () => {
     return (
         <section className="meet-container">
             <div className="left"></div>
             <div className="right">
                <div className="container">
                    <h4> Meet Martha</h4>
                    <article>
                        <p>Hey everyone, I’m Martha! A partner, mama, yoga teacher/student, astrology intuitive, + cosmic being. I am a Gemini rising and Leo sun. Which explains my constant shifts of motion. I’m curious by nature and can’t bear to stick to something that doesn’t speak to my heart. </p>
                        <p>After birthing my daughter last year, and feeling the divinity of life and joy and love literally pass through me, I have been on a mission. A mission to guide people into their alignment. I have been jumping around a lot in my approach to that.</p>
                        <p>But, I have been diving deep into studies lately and one of my studies brought me back to the awareness that our interests when we are children are pure and true. When we are children our souls are more connected to our path—before all the noise gets in our heads and clogs of vision.</p>
                        <Link to="/about"className="btn">Read more</Link>
                    </article>
                </div>
                
             </div>
         </section>
     );
 };
 export default Martha;