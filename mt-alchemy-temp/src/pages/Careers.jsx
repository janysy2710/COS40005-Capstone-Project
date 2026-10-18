
import { useState } from "react";

function Careers() {
  const benefits = [
    {
      title: "Continuous Learning Fund",
      description:
        "$3,000 annual personal development allocation for any courses, books, or coaching.",
    },
    {
      title: "Distributed Autonomy",
      description:
        "Work from anywhere in the world, with optional quarterly summits at our SF hub.",
    },
    {
      title: "True Health Integration",
      description:
        "Comprehensive physical and mental health frameworks built directly into operations.",
    },
  ];

  const jobs = [
    {
      title: "Senior Performance Architect",
      department: "Curriculum Design",
      location: "SF Hub / Hybrid",
      category: "Curriculum Design",
    },
    {
      title: "Enterprise Executive Coach",
      department: "Coaching Delivery",
      location: "Remote US",
      category: "Coaching Delivery",
    },
    {
      title: "Director of Enterprise Partners",
      department: "Go-To-Market",
      location: "Remote US / SF",
      category: "Go-To-Market",
    },
    {
      title: "Curriculum Engineer",
      department: "Curriculum Design",
      location: "Remote Global",
      category: "Curriculum Design",
    },
  ];

const [selectedDepartment, setSelectedDepartment] = useState("All departments");
  const departments = [
    "All departments",
    "Curriculum Design",
    "Coaching Delivery",
    "Go-To-Market",
  ];

  const filteredJobs =
    selectedDepartment === "All departments"
      ? jobs
      : jobs.filter((job) => job.category === selectedDepartment);

  return (
    <main className="careers-page">
      <section className="careers-hero">
        <p className="careers-eyebrow">JOIN THE PERFORMANCE MISSION</p>
        <h1>
          Help us build the next generation of leaders.
          <br />
          <span>Grow with us.</span>
        </h1>
              <p className="careers-intro">
                  At MT Alchemy, we practice what we preach. We design careers
                  characterized by operational focus, robust feedback, aggressive
                  ownership, and deliberate
                  <br />
                  growth.
              </p>
        <div className="careers-hero-actions">
          <a className="careers-primary-button" href="#open-roles">
            EXPLORE OPEN ROLES ↗
          </a>
          <a className="careers-secondary-button" href="#our-culture">
            OUR CULTURE ↗
          </a>
        </div>
        <p className="careers-tags">
          Performance Design · Distributed Autonomy · True Health Integration
        </p>
      </section>

      <section className="careers-culture" id="our-culture">
        <p className="careers-eyebrow">WHY WORK AT MT ALCHEMY</p>
        <h2>
          Built for people who want to <span>grow.</span>
        </h2>
        <p>We support careers that combine meaningful work, intentional growth, and a culture that actually feels human.</p>

        <div className="careers-benefit-grid">
          {benefits.map((benefit) => (
            <article className="careers-benefit-card" key={benefit.title}>
              <span className="benefit-check">✓</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-testimonials">
        <p className="careers-eyebrow">VOICES FROM OUR COHORT DESIGNERS</p>
        <h2>
          People-first work <span>that feels real.</span>
        </h2>
        <p>Our team builds learning experiences that help people grow, connect, and perform with more clarity and care.</p>
        <div className="careers-testimonial-grid">
          <article className="careers-testimonial-card">
            <div className="careers-avatar">JM</div>
            <div>
              <blockquote>
                "Designing these workshops pushes my understanding of cognitive performance daily. We build real outcomes."
              </blockquote>
              <strong>Jameson Miller</strong>
              <small>Sr. Curriculum Architect</small>
            </div>
          </article>
          <article className="careers-testimonial-card">
            <div className="careers-avatar">AK</div>
            <div>
              <blockquote>
                "We don't just teach performance; we live it. The autonomy is real, and the growth paths are deeply encouraging."
              </blockquote>
              <strong>Amira Khal</strong>
              <small>Executive Cohort Coach</small>
            </div>
          </article>
        </div>
      </section>

      <section className="careers-open-roles" id="open-roles">
        <p className="careers-eyebrow">CURRENT ACTIVE OPPORTUNITIES</p>
        <h2>
          Roles that move the <span>mission forward.</span>
        </h2>
        <p>Choose the depth that fits your objectives. We will discuss scope, group size, and delivery with you before confirming a programme.</p>

        <div className="careers-department-filters">
          {departments.map((department) => (
            <button
              key={department}
              type="button"
              className={selectedDepartment === department ? "selected" : ""}
              onClick={() => setSelectedDepartment(department)}
            >
              {department}
            </button>
          ))}
        </div>

        <div className="careers-job-list">
          {filteredJobs.map((job) => (
            <article className="careers-job-card" key={job.title}>
              <div>
                <h3>{job.title}</h3>
                <p>
                  <strong>{job.department}</strong>
                  <span>{job.location}</span>
                </p>
              </div>
              <button
                type="button"
                className="careers-apply-button"
                onClick={() =>
                  alert(`Applications for "${job.title}" are coming soon.`)
                }
              >
                APPLY NOW ↗
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="careers-process">
        <p className="careers-eyebrow">HIRING PROCESS LIFECYCLE</p>
        <h2>
          From first call to <span>meaningful fit.</span>
        </h2>
        <p>Our process is designed to be transparent, practical, and respectful of your time.</p>
        <div className="careers-process-grid">
          <article>
            <span>01</span>
            <h3>Alignment</h3>
            <p>A brief 30-minute overview call regarding your core motivators and skills structure.</p>
          </article>
          <article>
            <span>02</span>
            <h3>Technical Collaboration</h3>
            <p>A robust real-world diagnostic challenge testing your educational curriculum design skills.</p>
          </article>
          <article>
            <span>03</span>
            <h3>Leadership Panel</h3>
            <p>Final strategic alignment panel session with the co-founding partners.</p>
          </article>
        </div>
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
            <a href="#careers">Careers at MT Alchemy</a>
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

export default Careers;
      

