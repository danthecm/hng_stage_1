import classes from "./Contact.module.css";

const Contact = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    }

  return (
    <section className={classes.section}>
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me about anything you have in mind.</p>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="First Name"
            id="first_name"
            placeholder="Enter your first name"
          />
        </div>
        <div>
        <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="Last Name"
            id="last_name"
            placeholder="Enter your last name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="yourname@email.com"
          />
        </div>

        <div>
          <label htmlFor="message">Message</label>
          <textarea
            name="Message"
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>

        <div className={classes.checkboxContainer}>
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">You agree to providing your data to CM who may contact you.</label>
        </div>

        <button id="btn__submit" type="submit">Send message</button>
      </form>
    </section>
  );
};
export default Contact;
