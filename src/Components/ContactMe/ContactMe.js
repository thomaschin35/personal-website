import "./ContactMe.scss"

const ContactMePage = (props) => {
  const { link, icon, title, logo } = props;

  return (
    <a href={link}>
      <div className={`icon ${icon}`}>
        <div className="tooltip">{title}</div>
        <span>
          <i className={logo} />
        </span>
      </div>
    </a>
  );
};

const ContactMe = () => (
  <section className="contact-me-section" id="contact">
    <footer>
      <h2 id="contact-me-heading">Contact Me</h2>
      <div className="contact-me-details wrapper">
        <ContactMePage
          icon="email"
          title="Email"
          link="mailto:thomas081904@gmail.com"
          logo="fas fa-envelope"
        />
        <ContactMePage
          icon="instagram"
          title="Instagram"
          link="https://www.instagram.com/thomas_chin35/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
          logo="fab fa-instagram"
        />
        <ContactMePage
          icon="linkedin"
          title="LinkedIn"
          link="https://www.linkedin.com/in/thomaschin35/"
          logo="fab fa-linkedin"
        />
        <ContactMePage
          icon="github"
          title="GitHub"
          link="https://github.com/thomaschin35"
          logo="fab fa-github"
        />
        {/* <ContactMePage
          icon="youtube"
          title="YouTube"
          link=""
          logo="fab fa-youtube"
        /> */}
      </div>
    </footer>
  </section>
);
export default ContactMe;
