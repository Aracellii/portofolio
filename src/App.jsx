import { useState } from 'react'
import heroImage from './assets/hero.png'
import './App.css'

const navItems = ['About', 'Skills', 'Work', 'Experience', 'Contact']

const skills = [
  { title: 'Frontend', items: ['React', 'Vite', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Backend', items: ['Node.js', 'Laravel', 'REST API', 'Firebase'] },
  { title: 'Mobile', items: ['Flutter', 'Dart', 'Kotlin', 'Android'] },
  { title: 'Data', items: ['MySQL', 'PostgreSQL', 'MariaDB', 'Google Cloud'] },
]

const projects = [
  {
    title: 'Personal Finance App',
    type: 'Desktop application',
    description:
      'A transaction tracker with categories, summaries, and database-backed records for clearer personal budgeting.',
    stack: ['Java', 'Java Swing', 'MariaDB'],
  },
  {
    title: 'Portfolio Website',
    type: 'Responsive website',
    description:
      'A clean personal site for presenting selected work, technical skills, background, and contact details.',
    stack: ['React', 'Vite', 'CSS'],
  },
  {
    title: 'Mobile Companion',
    type: 'Mobile application',
    description:
      'A mobile interface with authentication, structured screens, and REST API integration for everyday use.',
    stack: ['Flutter', 'Dart', 'REST API'],
  },
]

const experience = [
  ['Currently', 'Informatics student focused on web, mobile, and practical software projects.'],
  ['Practice', 'Building interfaces, database-driven apps, and mobile prototypes from concept to delivery.'],
  ['Focus', 'Clean UI, maintainable code, and products that are straightforward to use.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Aracelli Z. home">
          LAR   
        </a>

        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>
              {item}
            </a>
          ))}
        </nav>
      </header>

      <section id="home" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Informatics student and developer</p>
          <h1>Luthfi Alaudin Rosyid</h1>
          <p className="intro">
            I design and build polished digital products across web, mobile, and data-driven
            applications.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">
              View work
            </a>
            <a className="button secondary" href="mailto:hello@example.com">
              Contact me
            </a>
          </div>
        </div>

        <div className="hero-panel" aria-label="Portfolio snapshot">
          <div className="availability">
            <span />
            Available for collaboration
          </div>
          <img src={heroImage} alt="" />
          <div className="quick-stats">
            <div>
              <strong>04</strong>
              <span>Focus areas</span>
            </div>
            <div>
              <strong>03</strong>
              <span>Selected projects</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-block about">
        <div className="section-heading">
          <p className="eyebrow">About</p>
          <h2>Thoughtful software with a clean, practical finish.</h2>
        </div>
        <div className="about-content">
          <p>
            I enjoy turning ideas into clear interfaces and reliable applications. My work sits
            between product thinking and implementation: simple flows, readable structure, and
            details that make software feel easier to use.
          </p>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>Indonesia</dd>
            </div>
            <div>
              <dt>Education</dt>
              <dd>Informatics student</dd>
            </div>
            <div>
              <dt>Direction</dt>
              <dd>Web and mobile development</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="skills" className="section-block">
        <div className="section-heading compact">
          <p className="eyebrow">Skills</p>
          <h2>Tools for building complete digital experiences.</h2>
        </div>
        <div className="skills-grid">
          {skills.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div>
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Selected work</p>
          <h2>Projects shaped around clarity, structure, and usability.</h2>
        </div>
        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
              <p>{project.type}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="tags">
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="experience" className="section-block experience">
        <div className="section-heading compact">
          <p className="eyebrow">Experience</p>
          <h2>Learning through focused, project-based work.</h2>
        </div>
        <div className="timeline">
          {experience.map(([label, text]) => (
            <article key={label}>
              <span>{label}</span>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Have an idea or opportunity?</h2>
        </div>
        <a className="contact-link" href="mailto:hello@example.com">
          hello@example.com
        </a>
      </section>

      <footer>
        <span>(c) 2026 Aracelli Z.</span>
        <div>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
