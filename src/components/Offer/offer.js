

// import Services from '../Services/services';
import Cards from '../Cards/card';


//image
import imageOne from '../Assets/oksana-taran.jpeg';
import imageTwo from '../Assets/curvColor.png';
import imageThree from '../Assets/eagle1.png';
import imageFour from '../Assets/nastya.jpeg';

// css
import './offer.scss';
// import Card from '../Cards/card';


    
    const offerObj = [{
            title: "vinyasa yoga",
            id:1,
            content: "A dynamic and challenging practice focused around linking the breath and movement while encouraging strength and containment of the muscles.",
            contentTwo: "The sequence is different each class and involves the downward dog to upward dog flow sequence. These classes are accessible for all people of any age, shape, size, and flexibility level.",
            image: imageOne},

            {
              title: "prenatal Yoga",
              id:3,
              content: "A yoga practice allowing expecting mothers to exercise safely.Prenatal Yoga helps relieve the minor ailments of pregnancy, better manage your emotions, and allows you to connect with your baby.",
              contentTwo:"Prenatal yoga will help you feel toned, relaxed, and confident as you wait for the arrival of your little one.",
              image: imageThree},

            {
              title: "hatha Yoga",
              id:2,
              content: "An accessible, static practice linked around the breath. This practice is perfect for beginners or advanced practitioners alike.",
              image: imageTwo},

              {
                title: "Astrology",
                id:4,
                content: "In depth healing for the soul Leo ☀️Gemini 💫 Scorpio 🌚Book a reading.",
                image: imageFour},
              ];

    const Offer = () => {
      return(
         <>
         <div className="titleContainer" id="services">
            <h3 className="serviceTitle">Services</h3>
         </div>
          <section className="offer-section ">
              {offerObj.map((service) => {
            
                return ( <Cards service={service} ></Cards>);
              } )} 
          </section>
          </>
      );
  }; export default Offer;


  