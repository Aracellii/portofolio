import { useState } from 'react'
import './App.css'

const projects = [
  { number: '01', title: 'Personal Finance', description: 'A desktop application to record transactions, manage categories, and keep personal finances organised.', technologies: ['Java', 'Java Swing', 'MariaDB'], type: 'finance' },
  { number: '02', title: 'Portfolio Website', description: 'A responsive personal portfolio built to present selected work, skills, and ways to get in touch.', technologies: ['React', 'Vite', 'CSS'], type: 'portfolio' },
  { number: '03', title: 'Mobile Companion', description: 'A mobile application with authentication, an intuitive interface, and REST API integration.', technologies: ['Flutter', 'Dart', 'REST API'], type: 'mobile' },
]
const skillGroups = [
  { title: 'Languages', items: ['C++', 'Java', 'JavaScript', 'Python', 'Kotlin'] },
  { title: 'Web development', items: ['HTML', 'CSS', 'React', 'Vite', 'Laravel', 'Node.js'] },
  { title: 'Mobile development', items: ['Flutter', 'Kotlin', 'Android'] },
  { title: 'Data & cloud', items: ['MySQL', 'PostgreSQL', 'Firebase', 'Google Cloud'] },
]
function Arrow({ diagonal = false }) { return <span className={diagonal ? 'arrow diagonal' : 'arrow'} aria-hidden="true">→</span> }

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)
  return <main>
    <nav className="nav" aria-label="Main navigation">
      <a className="brand" href="#home" onClick={closeMenu}>az.</a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Toggle navigation"><span></span><span></span></button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>{['About', 'Skills', 'Projects', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}</div>
    </nav>
    <section id="home" className="hero section-shell">
      <p className="eyebrow">Hello, I’m</p><h1>Aracelli Z.<span className="period">.</span></h1><p className="hero-role">Informatics student<br />&amp; developer.</p>
      <p className="hero-copy">I turn ideas into thoughtful digital experiences, from web interfaces to mobile applications and the systems behind them.</p>
      <div className="hero-actions"><a className="button button-dark" href="#projects">View my work <Arrow /></a><a className="text-link" href="#contact">Let’s talk <Arrow /></a></div>
      <div className="hero-orbit" aria-hidden="true"><span>BUILD</span><i></i><span>LEARN</span><i></i><span>CREATE</span></div><a className="scroll-cue" href="#about">Scroll to explore <span>↓</span></a>
    </section>
    <section id="about" className="section-shell about"><div className="section-label"><span>01</span> About me</div><div className="about-grid"><div className="portrait" aria-label="Profile placeholder"><span>AZ</span><div className="portrait-sun"></div></div><div className="about-content"><h2>Curious by nature,<br />intentional by design.</h2><p>I’m an Informatics student who enjoys the process of taking a problem apart and turning it into a useful, approachable product. I care about the details that make software feel good to use.</p><dl><div><dt>Education</dt><dd>Informatics student</dd></div><div><dt>Location</dt><dd>Indonesia</dd></div><div><dt>Focus</dt><dd>Web &amp; mobile development</dd></div><div><dt>Currently</dt><dd>Building &amp; learning</dd></div></dl></div></div></section>
    <section id="skills" className="section-shell skills"><div className="section-label"><span>02</span> Toolkit</div><div className="skills-heading"><h2>Tools I use<br />to bring ideas to life.</h2><p>A growing collection of technologies I enjoy working with across the stack.</p></div><div className="skills-grid">{skillGroups.map((group) => <article className="skill-card" key={group.title}><h3>{group.title}</h3><div>{group.items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div></section>
    <section id="projects" className="section-shell projects"><div className="section-label"><span>03</span> Selected work</div><div className="project-heading"><h2>A few things<br />I’ve made.</h2><a className="text-link" href="https://github.com" target="_blank" rel="noreferrer">More on GitHub <Arrow diagonal /></a></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.title}><div className={`project-visual ${project.type}`}><span className="project-number">{project.number}</span><div className="visual-shape"></div><span className="visual-title">{project.type === 'finance' ? 'RP / FLOW' : project.type === 'portfolio' ? 'PORTFOLIO' : 'MOBILE / 01'}</span></div><div className="project-info"><div><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-footer"><div className="tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div><a href="https://github.com" target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`} className="round-link"><Arrow diagonal /></a></div></div></article>)}</div></section>
    <section id="contact" className="contact"><div className="section-shell contact-inner"><p className="eyebrow">Have a project in mind?</p><h2>Let’s make something<br /><em>useful.</em></h2><a className="contact-email" href="mailto:hello@example.com">hello@example.com <Arrow diagonal /></a><div className="contact-bottom"><span>Available for collaboration</span><div><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a></div></div></div></section>
    <footer><span>© 2026 Aracelli Z.</span><a href="#home">Back to top ↑</a></footer>
  </main>
}
export default App
