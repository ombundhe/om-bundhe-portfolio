import React, { useState } from 'react';
import {
  ArrowUpRight, Github, Linkedin, Mail, Phone, Download, Menu, X,
  Code2, BrainCircuit, Database, BarChart3, GraduationCap, Award,
  BriefcaseBusiness, ExternalLink, ChevronDown, Sparkles
} from 'lucide-react';

const PROFILE = {
  name: 'Om Bundhe',
  role: 'Aspiring Data Scientist',
  email: 'bundheom@gmail.com',
  phone: '7020467046',
  github: 'https://github.com/ombundhe',
  linkedin: 'https://www.linkedin.com/in/ombundhe',
  resume: '/resume.pdf'
};

// EDIT YOUR PROJECTS HERE:
// - Add a new object to add a project.
// - Remove an object to remove a project.
// - Update title, category, description, tech, github, or demo to edit a project.
// - Leave github/demo as an empty string if you do not have a public link yet.
const projects = [
  {
    number: '01',
    title: 'Student Performance Prediction',
    category: 'Machine Learning · Data Visualization',
    description: 'A machine learning project that predicts student academic performance using study hours, attendance, and internal marks, presented through an interactive Streamlit dashboard.',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
    github: 'https://github.com/ombundhe/Student_Performance_Prediction_mini_project',
    demo: 'https://studentperformanceprediction-q5hya7dj2a2fho9fh27qrd.streamlit.app/',
    icon: <BarChart3 size={23} />
  },
  {
    number: '02',
    title: 'Student Task Manager',
    category: 'Full-Stack Web Development',
    description: 'A web-based task management application with an interactive user interface, backend functionality, and MongoDB database integration.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/ombundhe/student-task-manager-app',
    demo: '',
    icon: <Code2 size={23} />
  },

];

const skillGroups = [
  { title: 'Frontend', icon: <Code2 />, items: ['HTML', 'CSS', 'JavaScript', ] },
  { title: 'Backend', icon: <BriefcaseBusiness />, items: ['Python', 'Node.js', 'Express.js'] },
  { title: 'Database', icon: <Database />, items: ['MySQL', 'MongoDB'] },
  { title: 'Data Science', icon: <BarChart3 />, items: ['Pandas', 'NumPy', 'Power BI', 'Matplotlib'] },
  { title: 'Machine Learning', icon: <BrainCircuit />, items: ['Scikit-learn', 'Regression', 'Decision Trees'] },
  { title: 'Tools & Platforms', icon: <Sparkles />, items: ['Git', 'GitHub', 'VS Code', 'Streamlit', 'OpenCV'] }
];

const certifications = [
  { name: 'Zscaler Networking', cohort: 'Cohort 11', detail: 'Completed training in networking concepts and technologies.' },
  { name: 'Google AI-ML', cohort: 'Cohort 13', detail: 'Completed training in Artificial Intelligence and Machine Learning.' },
  { name: 'AWS Data Engineering', cohort: 'Cohort 14', detail: 'Completed training in data engineering and AWS technologies.' },
  { name: 'Ethical Hacking (English Language)', cohort: 'Cohort 15', detail: 'Completed training in ethical hacking.' },
  { name: 'Prompt Engineering for AI', cohort: 'Professional Training', detail: 'Training in prompt engineering for AI.' },
  { name: 'JavaScript Training', cohort: 'EduPyramids · SINE, IIT Bombay', detail: 'Completed JavaScript training and online assessment with a score of 80% (2 credits), June 2026.' },
  { name: 'Quantum Computing Virtual Internship', cohort: 'EduSkills Academy', detail: 'Completed an 8-week virtual internship focused on Quantum Computing.' }
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return <div className="section-heading">
    <span className="eyebrow">{eyebrow}</span>
    <h2>{title}<span className="heading-dot">.</span></h2>
    {subtitle && <p>{subtitle}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const nav = [['About', 'about'], ['Skills', 'skills'], ['Projects', 'projects'], ['Journey', 'journey'], ['Contact', 'contact']];
  const closeMenu = () => setMenuOpen(false);

  return <div className="site-shell">
    <header className="topbar">
      <a className="brand" href="#home" onClick={closeMenu} aria-label="Om Bundhe home"><span className="brand-mark"><span>.</span></span><span>OM BUNDHE</span></a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {nav.map(([label, id]) => <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>)}
        <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot"></span> AI & DATA SCIENCE ENGINEERING STUDENT</div>
          <h1>Turning data into<br/><span className="gradient-text">meaningful insight.</span></h1>
          <p className="hero-lead">Hi, I'm <strong>Om Bundhe</strong> — an aspiring data scientist interested in Python, machine learning, and data analytics. I enjoy building practical projects and creating technology that solves real-world problems.</p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
            <a className="button button-secondary" href={PROFILE.resume} target="_blank" rel="noreferrer"><Download size={16}/> View resume</a>
            <a className="button button-secondary" href={PROFILE.resume} download="Om_Bundhe_Resume.pdf"><Download size={16}/> Download resume</a>
          </div>
          <div className="social-row">
            <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/><span>GitHub</span></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/><span>LinkedIn</span></a>
            <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={18}/><span>Email</span></a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Decorative data visualization">
          <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
          <div className="visual-glow"></div>
          <div className="visual-card main-visual-card">
            <div className="visual-top"><span className="mini-dot"></span><span className="mini-dot"></span><span className="mini-dot"></span><span className="visual-label">DATA / INSIGHT</span></div>
            <div className="visual-icon"><BrainCircuit size={48} strokeWidth={1.4}/></div>
            <div className="visual-title">Curiosity meets<br/>computation.</div>
            <div className="visual-caption">Learning · Building · Improving</div>
            <div className="chart-bars">{[35,54,43,73,61,88,68,100,78,92,65,84].map((h,i)=><span key={i} style={{height:`${h}%`}}/>)}</div>
          </div>
          <div className="floating-chip chip-python"><span className="chip-symbol">Py</span> Python</div>
          <div className="floating-chip chip-ml"><BrainCircuit size={15}/> Machine Learning</div>
          <div className="floating-chip chip-data"><BarChart3 size={15}/> Data Analytics</div>
          <div className="visual-spark spark-a">✳</div><div className="visual-spark spark-b">✦</div>
        </div>
        <a className="scroll-hint" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={15}/></a>
      </section>

      <section className="section-wrap section-block" id="about">
        <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Driven by curiosity." subtitle="Building a strong foundation in data, intelligence, and software."/>
        <div className="about-grid">
          <div className="about-main">
            <p className="about-intro">I'm an Artificial Intelligence and Data Science engineering student at <strong>P. R. Pote Patil College of Engineering & Management, Amravati.</strong> My interests span data analysis, machine learning, and full-stack development.</p>
            <p>I like taking ideas from concept to implementation — exploring datasets, training models, and building interfaces that make results easier to understand. I'm continuously learning and looking for opportunities to grow through meaningful technical work.</p>
            <div className="about-links"><a href={PROFILE.linkedin} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15}/></a><a href={PROFILE.github} target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15}/></a></div>
          </div>
          <div className="about-facts">
            <div className="fact-card"><span className="fact-icon"><GraduationCap/></span><div><small>EDUCATION</small><strong>B.E. · AI & Data Science</strong><span>P. R. Pote Patil College, Amravati</span></div></div>
            <div className="fact-card"><span className="fact-icon"><BrainCircuit/></span><div><small>AREAS OF INTEREST</small><strong>AI · ML · Data Analytics</strong><span>Applied learning & problem solving</span></div></div>
            <div className="fact-card"><span className="fact-icon"><Code2/></span><div><small>ALSO BUILDING WITH</small><strong>Web Development</strong><span>Frontend, backend & databases</span></div></div>
          </div>
        </div>
      </section>

      <section className="section-wrap section-block" id="skills">
        <SectionHeading eyebrow="MY TOOLKIT" title="Skills & technologies." subtitle="Tools and concepts I use across data science and development."/>
        <div className="skills-grid">{skillGroups.map(group=><article className="skill-card" key={group.title}>
          <div className="skill-card-head"><span className="skill-icon">{group.icon}</span><h3>{group.title}</h3></div>
          <div className="tag-list">{group.items.map(item=><span className="tag" key={item}>{item}</span>)}</div>
        </article>)}</div>
      </section>

      <section className="section-wrap section-block" id="projects">
        <SectionHeading eyebrow="SELECTED WORK" title="Projects that I've built." subtitle="A few practical projects exploring prediction, data, and application development."/>
        <div className="projects-grid">{projects.map(project=><article className="project-card" key={project.number}>
          <div className="project-card-top"><span className="project-number">{project.number} / PROJECT</span><span className="project-icon">{project.icon}</span></div>
          <span className="project-category">{project.category}</span>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tag-list project-tags">{project.tech.map(t=><span className="tag" key={t}>{t}</span>)}</div>
          <div className="project-links">
            {project.github ? <a href={project.github} target="_blank" rel="noreferrer"><Github size={15}/> Source code <ExternalLink size={13}/></a> : <span className="link-muted">Repository link to be added</span>}
            {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={15}/></a> : <span className="link-muted">Demo link not added</span>}
          </div>
        </article>)}</div>
      </section>

      <section className="section-wrap section-block" id="journey">
        <SectionHeading eyebrow="LEARNING & GROWTH" title="My journey so far." subtitle="Education, training, and achievements that support my technical growth."/>
        <div className="journey-grid">
          <div className="journey-column">
            <div className="journey-title"><GraduationCap size={19}/> Education</div>
            <div className="timeline-item"><span className="timeline-dot"></span><span className="timeline-date">CURRENT · 2028</span><h3>Bachelor of Technology</h3><p className="timeline-sub">Artificial Intelligence & Data Science</p><p>P. R. Pote Patil College of Engineering & Management, Amravati</p></div>
            <div className="timeline-item"><span className="timeline-dot"></span><span className="timeline-date">2024 · SCIENCE</span><h3>Higher Secondary Certificate (12th)</h3><p>Durgamata Secondary and Higher Secondary School, Soygaon (Devi)</p></div>
            <div className="timeline-item"><span className="timeline-dot"></span><span className="timeline-date">2022</span><h3>Secondary School Certificate (10th)</h3><p>Jagruti Dnyanpeeth, Shelodi</p></div>
          </div>
          <div className="journey-column">
            <div className="journey-title"><Award size={19}/> Professional development</div>
            {certifications.map((c,i)=><div className="timeline-item compact" key={c.name}><span className="timeline-dot"></span><span className="timeline-date">{c.cohort}</span><h3>{c.name}</h3><p>{c.detail}</p></div>)}
          </div>
        </div>
        <div className="achievement-card"><div className="achievement-icon"><Award size={25}/></div><div><span className="eyebrow">ASSESSMENT ACHIEVEMENT · SEPTEMBER 2026</span><h3>6th Rank among 54 participants</h3><p>Board Infinity Infy Assess – Aptitude & Verbal Pre-Assessment · Scored 82/100 (82%), 83rd percentile, with a Strong Performance rating.</p></div><div className="achievement-score"><strong>82<span>/100</span></strong><small>ASSESSMENT SCORE</small></div></div>
      </section>

      <section className="contact-section" id="contact">
        <div className="section-wrap contact-inner">
          <div className="contact-copy"><span className="eyebrow">GET IN TOUCH</span><h2>Let's build something<br/><span className="gradient-text">meaningful.</span></h2><p>Open to learning opportunities, collaborations, and conversations around AI, data science, and software development.</p>
            <a className="button button-primary" href={`mailto:${PROFILE.email}`}>Say hello <ArrowUpRight size={17}/></a>
          </div>
          <div className="contact-details">
            <a className="contact-link" href={`mailto:${PROFILE.email}`}><span className="contact-icon"><Mail/></span><span><small>EMAIL</small><strong>{PROFILE.email}</strong></span><ArrowUpRight className="contact-arrow"/></a>
            <a className="contact-link" href={`tel:${PROFILE.phone}`}><span className="contact-icon"><Phone/></span><span><small>PHONE</small><strong>+91 {PROFILE.phone}</strong></span><ArrowUpRight className="contact-arrow"/></a>
            <a className="contact-link" href={PROFILE.linkedin} target="_blank" rel="noreferrer"><span className="contact-icon"><Linkedin/></span><span><small>LINKEDIN</small><strong>linkedin.com/in/ombundhe</strong></span><ArrowUpRight className="contact-arrow"/></a>
            <a className="contact-link" href={PROFILE.github} target="_blank" rel="noreferrer"><span className="contact-icon"><Github/></span><span><small>GITHUB</small><strong>github.com/ombundhe</strong></span><ArrowUpRight className="contact-arrow"/></a>
          </div>
        </div>
      </section>
    </main>
    <footer className="footer"><div className="section-wrap footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark"><span>.</span></span><span>OM BUNDHE</span></a><span>Designed & built with curiosity. © {new Date().getFullYear()} Om Bundhe</span><a href="#home" className="back-top">Back to top ↑</a></div></footer>
  </div>;
}

export default App;