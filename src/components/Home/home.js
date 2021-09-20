

import WelcomeMessage from '../Lure/lure';
import backGroundImage from '../Assets/martha.svg'
import Offer from '../Offer/offer';
import MeetMartha from '../Martha/martha';


// css
import './home.scss';

const Home = () => {
     return (
         <>
            <section className="message-container">
                <WelcomeMessage />
                <div className="image-container wrapper">
                    <img className="backgroundImage" src={backGroundImage} alt="" />
                </div>
            </section>

            <Offer />
            <MeetMartha />
        </>

        
     );

}; 

export default Home;