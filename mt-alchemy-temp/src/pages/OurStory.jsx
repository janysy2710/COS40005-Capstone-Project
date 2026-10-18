
function OurStory() {
  return (
    <main className="our-story">
      {/* Hero */}
      <section className="story-hero">
        <p className="story-eyebrow">WHO WE ARE & WHY WE EXIST</p>

        <h1>
          A corporate training company
          <br />
          focused on the science of
          <br />
          <span className="story-highlight">potential.</span>
        </h1>
      </section>

      {/* Origin Story */}
      <section className="origin-section">
        <div className="origin-content">
          <h2>Our Origin Story</h2>

          <p>
            MT Alchemy is a people development consultancy that helps
            individuals, teams, and organisations thrive by strengthening
            emotional intelligence, leadership capability, team effectiveness,
            and workplace well-being.
          </p>

          <p>
            Founded on the belief that lasting transformation begins with
            understanding both people and systems, we take a human-centred
            approach to development. Through experiential learning, practical
            tools, and meaningful reflection, we help organisations cultivate
            self-aware individuals, resilient teams, and healthy workplace
            cultures.
          </p>

          <p>
            At MT Alchemy, we believe sustainable organisational success is
            built from the inside out — when people grow, teams flourish,
            and organisations thrive.
          </p>
        </div>

        <div className="origin-photo">
          <img
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80"
            alt="Colleagues collaborating in a workplace"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values-section">
        <h2>Core Values</h2>

        <div className="values-grid">
          <article className="value-card">
            <span className="value-number">01</span>
            <h3>Vision</h3>
            <p>
              To help individuals and organisations build emotional
              intelligence and resilient cultures through experiential
              learning, creating flourishing and sustainable work
              environments in today's technology-driven world.
            </p>
          </article>

          <article className="value-card">
            <span className="value-number">02</span>
            <h3>Mission</h3>
            <p>
              To develop authentic leaders with emotional strength who can
              navigate personal and professional relationships with clarity
              and confidence in today's technology-driven world.
            </p>
          </article>

          <article className="value-card">
            <span className="value-number">03</span>
            <h3>Sustained Impact</h3>
            <p>
              We structure cohorts to optimise long-term behavioural
              integration, not short bursts of focus.
            </p>
          </article>
        </div>
      </section>

      {/* Our Team */}
      <section className="team-section">
        <h2>Our Team</h2>

        <div className="team-grid">
          <article className="team-card">
            
            <div className="team-photo-placeholder">
            TEAM PHOTO
            </div>
            <div className="team-info">
              <h3>Mabel Tan KH</h3>
              <p>Founder & CEO</p>
              <span>Founder | EQ Coach | HRDC Certified Trainer</span>
            </div>
          </article>

          <article className="team-card">
            <div className="team-photo-placeholder">
  TEAM PHOTO
</div>
            <div className="team-info">
              <h3>Esther Ng</h3>
              <p>Consultant & Operations Advisor</p>
              <span>ISO 9001 Auditor</span>
            </div>
          </article>

          <article className="team-card">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=700&q=80"
              alt="Professionals collaborating at work"
            />
            <div className="team-info">
              <h3>Sylvia Chen</h3>
              <p>Subject Matter Expert</p>
              <span>Author of The Performance Design Loop</span>
            </div>
          </article>
        </div>
      </section>

      {/* Call to Action */}
      <section className="story-cta" id="contact">
        <h2>Partner with us to transform your talent</h2>
        <p>
          Align your teams, reduce voluntary turnover, and systematically
          establish operational excellence.
        </p>
        <a href="mailto:info@mtalchemy.com" className="story-cta-button">
          BOOK A CONSULTATION
        </a>
      </section>
      
      {/* Footer */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <strong>✦ MT Alchemy</strong>
            <p>
              Transforming corporate culture and workplace performance
              through human-centred leadership development and measurable
              training systems.
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
            <a href="#our-story">Careers at MT Alchemy</a>
            <a href="#contact">Client Outcomes</a>
            <a href="#contact">News & Insights</a>
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
            <a href="#security">Trust & Security</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

export default OurStory;
