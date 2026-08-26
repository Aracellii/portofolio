import { useState } from 'react'
import aku from './assets/aku.png'
import bpn from '../assets/BPN.png'
import mlati from '../assets/Mlati.png'
import upn from '../assets/UPN.png'
import './App.css'

const navItems = ['About', 'Skills', 'Work', 'Experience', 'Related Work', 'Educations', 'Contact']

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
    github: 'https://github.com/Aracellii/123230082_Responsi',
  },
  {
    title: 'Portfolio Website',
    type: 'Responsive website',
    description:
      'A clean personal site for presenting selected work, technical skills, background, and contact details.',
    stack: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/Aracellii/portofolio',
  },
  {
    title: 'Vector-Paint-Studio',
    type: 'Desktop application',
    description:
      'A vector drawing application for creating shapes, lines, freehand strokes, text, color fills, and basic object transformations.',
    stack: ['Python', 'PySide6', 'Qt'],
    github: 'https://github.com/Aracellii/Vector-Paint-Studio',
  },
  {
    title: 'Mobile Companion',
    type: 'Mobile application',
    description:
      'A mobile interface with authentication, structured screens, and REST API integration for everyday use.',
    stack: ['Flutter', 'Dart', 'REST API'],
    github: 'https://github.com/Aracellii/123230082_Responsi_Mobile',
  },
  {
    title: 'SIATK',
    type: 'Web application',
    description:
      'An asset and inventory management system with an item catalog, per-division warehouse stock, multi-step request approvals, activity logging, Excel import/export, and PDF reports.',
    stack: ['Laravel', 'Filament', 'MySQL', 'PHP'],
    github: 'https://github.com/Aracellii/Web-Based-Asset-and-Inventory-Request-Management-System',
  },
]

const experience = [
  ['Currently', 'Informatics student focused on web, mobile, and practical software projects.'],
  ['Practice', 'Building interfaces, database-driven apps, and mobile prototypes from concept to delivery.'],
  ['Focus', 'Clean UI, maintainable code, and products that are straightforward to use.'],
]

const relatedWork = {
  org: 'Badan Pertanahan Nasional (BPN)',
  type: 'Government agency',
  description:
    'Practical experience supporting land administration workflows and public service processes in a government environment.',
}

const education = [
  {
    school: 'Universitas Pembangunan Nasional "Veteran" Yogyakarta',
    degree: 'Informatics — Undergraduate',
    image: upn,
  },
  {
    school: 'SMA Negeri 1 Mlati',
    degree: 'Senior High School',
    image: mlati,
  },
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
          <img src={aku} alt="Luthfi Alaudin Rosyid" />
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
              <a
                className="project-github"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                View in GitHub
              </a>
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

      <section id="related-work" className="section-block">
        <div className="section-heading compact">
          <p className="eyebrow">Related work</p>
          <h2>Field experience beyond the classroom.</h2>
        </div>
        <div className="education-list">
          <article className="education-card">
            <img src={bpn} alt="Badan Pertanahan Nasional (BPN) logo" />
            <div>
              <p>{relatedWork.type}</p>
              <h3>{relatedWork.org}</h3>
              <p className="related-description">{relatedWork.description}</p>
            </div>
          </article>
        </div>
      </section>

      <section id="educations" className="section-block educations">
        <div className="section-heading compact">
          <p className="eyebrow">Educations</p>
          <h2>Where I learned the fundamentals.</h2>
        </div>
        <div className="education-list">
          {education.map((entry) => (
            <article className="education-card" key={entry.school}>
              <img src={entry.image} alt={`${entry.school} logo`} />
              <div>
                <p>{entry.degree}</p>
                <h3>{entry.school}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Have an idea or opportunity?</h2>
        </div>
        <a className="contact-link" href="mailto:luthfialaudinrosyid@gmail.com">
          luthfialaudinrosyid@gmail.com
        </a>
      </section>

      <footer>
        <span>(c) 2026 Luthfi Alaudin Rosyid.</span>
        <div>
          <a href="https://github.com/Aracellii" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
           <a href="https://instagram/luthfialaudinrasyid.com" target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
      </footer>
    </main>
  )
}

export default App
