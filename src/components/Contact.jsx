export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2>Contact Me</h2>
        <p>Feel free to reach out via email or connect on social media.</p>
        <div className="contact-links">
          <a href="mailto:sreekarthi444@gmail.com" className="contact-btn">Email Me</a>
          <a href="https://github.com/Imissh3r" target="_blank" rel="noreferrer" className="contact-btn">GitHub</a>
          <a href="https://linkedin.com/in/sree-prasanth-jayaraj" target="_blank" rel="noreferrer" className="contact-btn">LinkedIn</a>
        </div>
      </div>

      <footer className="footer">
        © 2025 Sree | Made with <span className="react-tag">&lt;React /&gt;</span> and <span className="heart">❤️</span>
      </footer>
    </section>
  );
}