import styles from "./Contact.module.scss";

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Demo form submitted!");
    };

    return (
        <div className={styles.contactContainer}>
            <div className={styles.contactWrapper}>
                {/* Contact Info Header / Details */}
                <div className={styles.contactInfo}>
                    <h2>Get in Touch</h2>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </p>

                    <div className={styles.infoDetails}>
                        <div className={styles.infoItem}>
                            <span className={styles.icon}>📍</span>
                            <div>
                                <h4>Address</h4>
                                <p>123 Lorem Ipsum St, Suite 456, Cityville</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.icon}>📞</span>
                            <div>
                                <h4>Phone</h4>
                                <p>+1 (555) 019-2834</p>
                            </div>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.icon}>✉️</span>
                            <div>
                                <h4>Email</h4>
                                <p>contact@example.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className={styles.contactForm} onSubmit={handleSubmit}>
                    <h3>Send Us a Message</h3>

                    <div className={styles.formGroup}>
                        <label htmlFor="name">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Lorem Ipsum"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="lorem@ipsum.com"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Lorem ipsum dolor sit amet"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows="5"
                            placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
