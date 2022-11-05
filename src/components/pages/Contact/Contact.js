import classes from "./Contact.Module.css";

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
          <label htmlFor="First Name">First Name</label>
          <input
            type="text"
            name="First Name"
            id="first_name"
            placeholder="Enter your first name"
          />
        </div>
        <div>
        <label htmlFor="Last Name">Last Name</label>
          <input
            type="text"
            name="Last Name"
            id="last_name"
            placeholder="Enter your last name"
          />
        </div>

        <div>
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            name="Email"
            id="email"
            placeholder="yourname@email.com"
          />
        </div>

        <div>
          <label htmlFor="Message">Message</label>
          <textarea
            name="Message"
            id="message"
            placeholder="Send me a message and I'll reply you as soon as possible..."></textarea>
        </div>

        <div className="checkboxContainer">
            <input type="checkbox" name="checkbox" id="checkbox" />
            <label htmlFor="checkbox">You agree to providing your data to CM who may contact you.</label>
        </div>

        <button type="submit">Send message</button>
      </form>
    </section>
  );
};
export default Contact;
