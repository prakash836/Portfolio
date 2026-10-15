import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowRight, Code2, Gamepad2, Menu, X, Mail,
  MapPin, GraduationCap, ExternalLink, Play, Palette, Video, Cuboid,
  Braces, Monitor, Sparkles, CheckCircle2
} from 'lucide-react';
import './styles.css';
import profileImg from './assets/profile.jpg';

function Github({ size = 24 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>;
}

const GITHUB = 'https://github.com/prakash836';
const EMAIL = 'prakashs836rru@gmail.com';

const skills = [
  { name: 'Unity', type: 'Game development', icon: Gamepad2, level: 'Learning & building' },
  { name: 'C#', type: 'Gameplay programming', icon: Braces, level: 'Learning & building' },
  { name: 'Python', type: 'Programming', icon: Code2, level: 'Working knowledge' },
  { name: 'React', type: 'Frontend development', icon: Code2, level: 'Learning & building' },
  { name: 'JavaScript', type: 'Web development', icon: Braces, level: 'Working knowledge' },
  { name: 'HTML & CSS', type: 'Web foundations', icon: Monitor, level: 'Working knowledge' },
  { name: 'Blender', type: '3D & animation', icon: Cuboid, level: 'Learning & creating' },
  { name: 'Video editing', type: 'Post-production', icon: Video, level: 'Creative work' },
  { name: 'Thumbnail design', type: 'Visual design', icon: Palette, level: 'Creative work' },
];

const projects = [
  {
    number: '01', category: 'GAME DEV', title: 'Unity 3D Prototype',
    description: 'A small third-person prototype exploring player movement, Rigidbody physics and a camera-follow system.',
    tags: ['Unity', 'C#', 'Gameplay'],
    icon: Gamepad2, art: 'art-game',
    link: '', linkLabel: 'Add project link'
  },
  {
    number: '02', category: 'COMMUNITY / TECH', title: 'Nepal Pirate SMP',
    description: 'A Nepal-themed Minecraft multiplayer server with plugins, team features, voice chat and cross-play support.',
    tags: ['Minecraft', 'Server setup', 'Plugins'],
    icon: Code2, art: 'art-pirate',
    link: 'https://discord.gg/RtgwEDZ237', linkLabel: 'Join the Discord'
  },
  {
    number: '03', category: '3D / ANIMATION', title: 'Blender 3D Practice',
    description: '3D modeling and animation practice, including a donut tutorial and experiments with lighting and materials.',
    tags: ['Blender', '3D', 'Animation'],
    icon: Cuboid, art: 'art-blender',
    link: 'https://www.facebook.com/share/v/1Cg6FhpM78/', linkLabel: 'Watch on Facebook'
  },
  {
    number: '04', category: 'VIDEO / CONTENT', title: 'Gaming Content & Edits',
    description: 'Gaming livestreams and edited content, with a focus on pacing, presentation and a recognizable channel identity.',
    tags: ['Editing', 'OBS', 'Content'],
    icon: Play, art: 'art-video',
    link: 'https://www.youtube.com/@grenPirate', linkLabel: 'YouTube channel'
  },
  {
    number: '05', category: 'DESIGN', title: 'Thumbnails & Stream Graphics',
    description: 'Custom thumbnail concepts and stream visuals designed for gaming videos, livestreams and community updates.',
    tags: ['Thumbnails', 'Branding', 'Design'],
    icon: Palette, art: 'art-design',
    link: '', linkLabel: 'Add portfolio link'
  },
  {
    number: '06', category: 'WEB DEV', title: 'Personal Portfolio',
    description: 'This responsive portfolio built with React and CSS to bring software, game development and creative work together.',
    tags: ['React', 'JavaScript', 'CSS'],
    icon: Braces, art: 'art-web',
    link: GITHUB, linkLabel: 'GitHub profile'
  },
];

function Header() {
  const [open, setOpen] = useState(false);
  const nav = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Contact', '#contact']];
  return <header className="header">
    <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Prakash Sharma home">
      <span className="brand-mark"><img src={profileImg} alt="" width="44" height="44"/></span><span className="brand-name">PRAKASH<span>SHARMA</span></span>
    </a>
    <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
    <nav className={open ? 'nav nav-open' : 'nav'}>
      {nav.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)}>{name}</a>)}
      <a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let's talk <ArrowRight size={15}/></a>
    </nav>
  </header>;
}

function Hero() {
  return <section className="hero section-wrap" id="home">
    <div className="hero-grid">
      <div className="hero-copy">
        <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR PROJECTS & COLLABORATIONS</div>
        <h1>Building worlds.<br/>Writing <span className="gradient-text">code.</span><br/>Creating stories.</h1>
        <p className="hero-lead">Hey, I'm <strong>Prakash Sharma</strong> — a BSc CSIT student from Nepal exploring game development, software, and creative storytelling.</p>
        <p className="hero-sub">I bring ideas to life through Unity, code, 3D experiments, video editing, and digital design.</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
          <a className="button button-ghost" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17}/> GitHub profile <ExternalLink size={14}/></a>
        </div>
        <div className="hero-meta"><span><MapPin size={15}/> Nepal</span><span><GraduationCap size={16}/> BSc CSIT · Currently studying</span></div>
      </div>
      <div className="hero-art" aria-label="Abstract game-inspired visual">
        <div className="art-grid"/>
        <div className="orbit orbit-one"/><div className="orbit orbit-two"/>
        <div className="hero-glow"/>
        <div className="floating-card card-top"><span className="mini-icon"><Gamepad2 size={17}/></span><span><b>GAME DEV</b><small>Unity · C#</small></span></div>
        <figure className="profile-frame">
          <img src={profileImg} alt="Prakash Sharma — Minecraft-style avatar portrait" width="800" height="800" fetchpriority="high" decoding="async"/>
          <figcaption className="scene-label"><span>PLAYER_001</span><span>LVL. IN PROGRESS</span></figcaption>
        </figure>
        <div className="floating-card card-bottom"><span className="mini-icon purple"><Cuboid size={17}/></span><span><b>CREATIVE MODE</b><small>3D · Edit · Design</small></span></div>
        <div className="hero-art-caption">01 <span/> CREATIVITY MEETS CODE</div>
      </div>
    </div>
    <a href="#about" className="scroll-cue"><ArrowDownRight size={16}/> SCROLL TO EXPLORE</a>
  </section>;
}

function SectionTitle({ kicker, title, accent, description }) {
  return <div className="section-title">
    <div><div className="eyebrow">{kicker}</div><h2>{title} <span className="gradient-text">{accent}</span></h2></div>
    {description && <p>{description}</p>}
  </div>;
}

function About() {
  return <section className="section-wrap section-block" id="about">
    <SectionTitle kicker="A LITTLE ABOUT ME" title="Curious by nature." accent="Builder by choice."/>
    <div className="about-grid">
      <div className="about-copy">
        <p className="large-copy">I'm a student, developer-in-progress, and creator who enjoys turning curiosity into things people can <em>see, play, and use.</em></p>
        <p>My interests sit at the intersection of technology and creativity — from making gameplay systems in Unity to building web interfaces, experimenting in Blender, and creating gaming content.</p>
        <p>I'm currently learning, building personal projects, and looking for opportunities to collaborate, improve, and contribute to meaningful work.</p>
        <a href="#contact" className="text-link">Have a project in mind? Let's talk <ArrowRight size={16}/></a>
      </div>
      <div className="about-stats">
        <div className="stat-card"><span className="stat-icon"><GraduationCap/></span><b>BSc CSIT</b><span>Currently studying</span></div>
        <div className="stat-card"><span className="stat-icon"><Gamepad2/></span><b>Game development</b><span>Unity & C# journey</span></div>
        <div className="stat-card"><span className="stat-icon"><Sparkles/></span><b>Creative mindset</b><span>3D, video & design</span></div>
        <div className="stat-card"><span className="stat-icon"><Code2/></span><b>Always learning</b><span>Build · test · improve</span></div>
      </div>
    </div>
  </section>;
}

function Skills() {
  return <section className="section-wrap section-block" id="skills">
    <SectionTitle kicker="MY TOOLKIT" title="Tools I use to" accent="make things." description="A growing toolkit across software, game development, and digital creativity. Skill labels are intentionally honest about an ongoing learning journey."/>
    <div className="skills-grid">{skills.map(({name, type, icon: Icon, level}) =>
      <article className="skill-card" key={name}>
        <div className="skill-icon"><Icon size={21}/></div>
        <div className="skill-info"><h3>{name}</h3><p>{type}</p><span>{level}</span></div>
        <ArrowDownRight className="skill-arrow" size={17}/>
      </article>
    )}</div>
  </section>;
}

function Projects() {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Game Dev', 'Software', 'Creative'];
  const categories = {
    'GAME DEV': 'Game Dev', 'COMMUNITY / TECH': 'Software', 'WEB DEV': 'Software',
    '3D / ANIMATION': 'Creative', 'VIDEO / CONTENT': 'Creative', 'DESIGN': 'Creative'
  };
  const shown = projects.filter(p => filter === 'All' || categories[p.category] === filter);
  return <section className="section-wrap section-block projects-section" id="projects">
    <SectionTitle kicker="SELECTED WORK" title="Projects &" accent="experiments." description="A mix of personal builds, community projects and creative work."/>
    <div className="project-toolbar">
      <span className="project-count">01 — 06 <span> / SELECTED PROJECTS</span></span>
      <div className="filters" role="group" aria-label="Filter projects">{filters.map(f => <button key={f} className={filter === f ? 'filter active' : 'filter'} onClick={() => setFilter(f)}>{f}</button>)}</div>
    </div>
    <div className="projects-grid">{shown.map(p => {
      const Icon = p.icon;
      return <article className="project-card" key={p.number}>
        <div className={`project-art ${p.art}`}>
          <div className="project-art-grid"/>
          <span className="project-number">{p.number}</span>
          <div className="project-symbol"><Icon size={45} strokeWidth={1.2}/></div>
          <span className="project-category">{p.category}</span>
        </div>
        <div className="project-content">
          <div className="project-title-row"><h3>{p.title}</h3><ArrowUpRightIcon/></div>
          <p>{p.description}</p>
          <div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          {p.link ? <a className="project-link" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel} <ArrowRight size={14}/></a>
            : <span className="project-placeholder"><CheckCircle2 size={14}/> Work in progress</span>}
        </div>
      </article>;
    })}</div>
  </section>;
}
function ArrowUpRightIcon() { return <ExternalLink size={16} className="external-icon"/>; }

function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(EMAIL); setCopied(true); setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${EMAIL}`; }
  };
  return <section className="section-wrap contact-section" id="contact">
    <div className="contact-panel">
      <div className="contact-decoration"><div className="contact-ring ring-a"/><div className="contact-ring ring-b"/><span>LET'S<br/>BUILD<span className="gradient-text">.</span></span></div>
      <div className="contact-copy">
        <div className="eyebrow">HAVE AN IDEA?</div>
        <h2>Let's make something<br/><span className="gradient-text">worth playing.</span></h2>
        <p>Open to freelance projects, collaborations, and opportunities to learn and build with other people.</p>
        <div className="contact-actions">
          <a className="button button-primary" href={`mailto:${EMAIL}?subject=${encodeURIComponent('Project enquiry')}`}><Mail size={17}/> Email me <ArrowRight size={16}/></a>
          <a className="button button-ghost" href={GITHUB} target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={14}/></a>
        </div>
        <button className="email-copy" onClick={copyEmail}>{copied ? 'Email copied!' : EMAIL} <span>{copied ? <CheckCircle2 size={15}/> : 'COPY'}</span></button>
      </div>
    </div>
  </section>;
}

function Footer() {
  return <footer className="footer section-wrap">
    <a className="brand footer-brand" href="#home"><span className="brand-mark"><img src={profileImg} alt="" width="44" height="44"/></span><span className="brand-name">PRAKASH<span>SHARMA</span></span></a>
    <p>Designed with curiosity. Built with code. <span>© {new Date().getFullYear()} Prakash Sharma</span></p>
    <a className="back-top" href="#home">BACK TO TOP ↑</a>
  </footer>;
}

function App() {
  return <><Header/><main><Hero/><div className="section-divider"/><About/><Skills/><Projects/><Contact/></main><Footer/></>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
