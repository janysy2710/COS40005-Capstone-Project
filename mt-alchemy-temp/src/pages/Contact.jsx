
import { useState } from "react";

function Contact() {
  const [rating, setRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="contact-page">
 
      <section className="contact-main">
        <div className="contact-intro">
          <p className="contact-eyebrow">GET IN TOUCH</p>
          <h1>
            Let's craft your
            <br />
            people strategy.
          </h1>
          <p className="contact-description">
            Have questions about our cohort scale, self-paced learning, or
            localized corporate sessions? Our partner team responds within
            1 business day.
          </p>

          <div className="contact-details">
            <div>
              <span>✉</span>
              <p>
                <small>Email Direct</small>
                <strong>partners@mtalchemy.com</strong>
              </p>
            </div>
            <div>
              <span>♧</span>
              <p>
                <small>Phone Support</small>
                <strong>+1 (800) 555-ALCHEMY</strong>
              </p>
            </div>
            <div>
              <span>⌖</span>
              <p>
                <small>Corporate HQ</small>
                <strong>450 Sutter St, San Francisco, CA</strong>
              </p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Inquiry Briefing Form</h2>

          <div className="contact-form-grid">
            <label>
              FULL NAME
              <input
                type="text"
                placeholder="E.g. Sarah Jenkins"
                required
              />
            </label>

            <label>
              WORK EMAIL
              <input
                type="email"
                placeholder="s.jenkins@company.com"
                required
              />
            </label>
          </div>

          <label>
            CHOOSE SERVICE INTEREST
            <select defaultValue="Leadership Cohort Training" required>
              <option>Leadership Cohort Training</option>
              <option>Performance Design</option>
              <option>Individual Mastery</option>
              <option>Executive Coaching</option>
              <option>Corporate Training</option>
            </select>
          </label>

          <label>
            ORGANIZATIONAL PAIN POINTS
            <textarea
              placeholder="Describe friction points, size of team, or goals..."
              rows={4}
              required
            />
          </label>

          <button type="submit" className="contact-submit">
            SUBMIT PARTNERSHIP REQUEST ↗
          </button>

          {submitted && (
            <p className="contact-success">
              Your form has been submitted in this demo.
              Backend submission is not connected yet.
            </p>
          )}
        </form>
      </section>

      <section className="contact-rating">
        <h2>
          How was your experience exploring our
          <br />
          site today?
        </h2>

        <div className="contact-rating-buttons">
          {[1, 2, 3, 4, 5].map((number) => (
            <button
              type="button"
              key={number}
              className={rating === number ? "selected" : ""}
              onClick={() => setRating(number)}
              aria-label={`Rate ${number} out of 5`}
            >
              {number}
            </button>
          ))}
        </div>

        <p>Active rating system: {rating}/5 aggregate from 120 digital visitors today.</p>
      </section>

      <section className="contact-faq">
        <h2>Frequently Answered Inquiries</h2>

        <div className="contact-faq-grid">
          <article>
            <h3>Do you offer customized training metrics?</h3>
            <p>
              Yes. Every enterprise cohort includes customized operational KPI
              auditing before and after delivery.
            </p>
          </article>

          <article>
            <h3>What is the typical cohort size?</h3>
            <p>
              To optimize group intimacy and robust alignment outcomes, we cap
              active leader cohorts at 18 participants.
            </p>
          </article>

          <article>
            <h3>Can we mix online with in-person delivery?</h3>
            <p>
              Absolutely. Our hybrid standard blends structured virtual modules
              with off-site tactical breakthroughs.
            </p>
          </article>

          <article>
            <h3>Are training costs offset by corporate grants?</h3>
            <p>
              Depending on state jurisdiction and corporate size, your custom
              training may qualify for performance education subsidies.
            </p>
          </article>
        </div>
        </section>

      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-inner">
          <div className="footer-main">
            <div className="footer-brand">
              <strong>✦ MT Alchemy</strong>
              <p>
                Transforming workplace culture through human-centred
                leadership development and measurable training systems.
              </p>
            </div>

            <div className="footer-column">
              <h3>SOLUTIONS</h3>
              <a href="#programmes">Leadership Cohorts</a>
              <a href="#programmes">Performance Design</a>
              <a href="#programmes">Individual Mastery</a>
              <a href="#programmes">Executive Coaching</a>
            </div>

            <div className="footer-column">
              <h3>COMPANY</h3>
              <a href="#our-story">Our Story</a>
              <a href="#careers">Careers at MT Alchemy</a>
              <a href="#contact">Client Outcomes</a>
              <a href="#contact">News &amp; Insights</a>
            </div>

            <div className="footer-column">
              <h3>PORTALS</h3>
              <a href="#learning">Learning Dashboard</a>
              <a href="#store">Corporate Store</a>
              <a href="#contact">Partner Integration</a>
              <a href="#contact">System Status</a>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 MT Alchemy. All rights reserved.</span>
            <div>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#security">Trust &amp; Security</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default Contact;


