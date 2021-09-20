
import './contact.scss';

const Contact = () => {
    return (
    <section className="contact-container">

<div class="container wrapper">
    <h2>Contact us</h2>
    <form target="_blank" action="https://formsubmit.co/chisholmmartha@gmail.com" method="POST" className="form-space">
        <div class="form-group">
            <div class="form-row">
                <div class="col">
                    <input type="text" name="name" class="form-control" placeholder="Full Name" required />
                </div>
                <div class="col">
                    <input type="email" name="email" class="form-control" placeholder="Email Address" required />
                </div>
            </div>
        </div>
        <div class="form-group">
            <textarea placeholder="Your Message" class="form-control" name="message" rows="10" required></textarea>
        </div>
        <button type="submit" class="btn btn-lg btn-dark btn-block">Submit Form</button>
    </form>
</div>
    
    </section>
    );
};

export default Contact;