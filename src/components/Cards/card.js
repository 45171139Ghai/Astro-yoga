//image

import './card.scss';



const Card = (props) => {
    const {image, title, content,contentTwo} = props.service;
    
    return (
            
        <section className="card-container">
            <div className="image-decoration">
                <img src={image} alt="" style={{width: "100%", height:"60%"}}></img>
            </div>
            <div className="yoga-offer">
                <h3 >{title}</h3>
                <p className="textmarginTop marginBottom">{content}</p>
                <p className="text marginTop">{contentTwo}</p>
            </div>
        </section>
    );
}; 
export default Card;