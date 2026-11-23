import React from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, GraduationCap, ClipboardCheck, FileText, Video, Menu, Search, ArrowUpRight, PlayCircle, Languages, Headphones, ShieldCheck, Clock3 } from 'lucide-react';
import './styles.css';

const courses = [
  { tag: 'लोकप्रिय कोर्स', title: 'RPSC 1st Grade Special Education', detail: 'Part-B • Complete syllabus preparation', lessons: 'Recorded classes, notes & practice tests', icon: GraduationCap },
  { tag: 'Selection Batch', title: 'DSSSB Special Educator', detail: 'PRT • TGT • PGT preparation', lessons: 'Concept classes, PYQs & mock tests', icon: BookOpen },
  { tag: 'Interview तैयारी', title: 'KVS / NVS Interview Program', detail: 'Structured interview practice', lessons: 'Voice practice, scenarios & guidance', icon: Headphones }
];

const quickLinks = [
  { icon: ClipboardCheck, title: 'Test Series', desc: 'अभ्यास करें और अपना मूल्यांकन करें' },
  { icon: FileText, title: 'PDF Notes', desc: 'विषयवार अध्ययन सामग्री' },
  { icon: Video, title: 'Recorded Classes', desc: 'अपनी सुविधा से सीखें' },
  { icon: BookOpen, title: 'Question Bank', desc: 'Bilingual MCQ अभ्यास' }
];

function App() {
  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#" aria-label="Special Education Needs home">
        <span className="brand-mark"><GraduationCap size={23}/></span>
        <span><strong>Special Education Needs</strong><small>Learn • Practice • Succeed</small></span>
      </a>
      <nav className="desktop-nav"><a className="active" href="#home">होम</a><a href="#courses">Courses</a><a href="#tests">Test Series</a><a href="#about">About</a></nav>
      <div className="top-actions"><button className="language"><Languages size={16}/> हिन्दी</button><button className="login-btn">Login / Register</button><button className="menu-btn" aria-label="Open menu"><Menu/></button></div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="pulse"></span> आपका learning partner</div>
          <h1>विशेष शिक्षा की तैयारी को<br/><em>बनाएँ आसान और प्रभावी।</em></h1>
          <p>Courses, expert guidance, bilingual notes और नियमित test practice — आपकी सफलता की तैयारी एक ही जगह।</p>
          <div className="hero-actions"><a className="primary-btn" href="#courses">कोर्स देखें <ArrowUpRight size={17}/></a><a className="secondary-btn" href="#tests"><PlayCircle size={18}/> टेस्ट सीरीज़</a></div>
          <div className="trust-row"><span><ShieldCheck size={16}/> Structured learning</span><span><Languages size={16}/> Hindi & English</span></div>
        </div>
        <div className="hero-art" aria-label="Learning illustration">
          <div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div>
          <div className="art-card main-art-card"><div className="art-icon"><GraduationCap size={42}/></div><strong>Learn with purpose</strong><span>Special Education</span><div className="progress-line"><i/></div><small>आपकी तैयारी, आपकी गति से</small></div>
          <div className="float-card float-top"><ClipboardCheck size={18}/><span><b>Daily Practice</b><small>नियमित MCQs</small></span></div>
          <div className="float-card float-bottom"><FileText size={18}/><span><b>Study Material</b><small>Notes & PDFs</small></span></div>
          <div className="decor-dot dot-a"></div><div className="decor-dot dot-b"></div>
        </div>
      </section>

      <section className="quick-section" id="tests">
        <div className="section-heading"><div><span className="section-kicker">LEARNING RESOURCES</span><h2>आपकी तैयारी के लिए सब कुछ</h2></div><a href="#courses" className="text-link">सभी सुविधाएँ <ArrowUpRight size={16}/></a></div>
        <div className="quick-grid">{quickLinks.map(({icon: Icon,title,desc}) => <article className="quick-card" key={title}><span className="quick-icon"><Icon size={21}/></span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="card-arrow" size={17}/></article>)}</div>
      </section>

      <section className="courses-section" id="courses">
        <div className="section-heading"><div><span className="section-kicker">FEATURED PROGRAMS</span><h2>अपनी तैयारी का अगला कदम चुनें</h2><p className="section-sub">परीक्षा और लक्ष्य के अनुसार तैयार किए गए learning programs.</p></div><a href="#courses" className="text-link">View all courses <ArrowUpRight size={16}/></a></div>
        <div className="course-grid">{courses.map(({tag,title,detail,lessons,icon: Icon}) => <article className="course-card" key={title}><div className="course-top"><span className="course-tag">{tag}</span><span className="course-icon"><Icon size={23}/></span></div><h3>{title}</h3><p className="course-detail">{detail}</p><div className="course-meta"><span><Video size={15}/>{lessons}</span><span><Clock3 size={15}/> Self-paced</span></div><button className="course-link">कोर्स की जानकारी <ArrowUpRight size={16}/></button></article>)}</div>
      </section>

      <section className="cta-strip" id="about"><div><span className="section-kicker">START LEARNING TODAY</span><h2>सीखें, अभ्यास करें और आगे बढ़ें।</h2><p>Special Education Needs के साथ अपनी तैयारी को व्यवस्थित करें।</p></div><a href="#courses" className="primary-btn">Get Started <ArrowUpRight size={17}/></a></section>
    </main>

    <footer><div className="footer-brand"><span className="brand-mark"><GraduationCap size={21}/></span><strong>Special Education Needs</strong></div><span>© {new Date().getFullYear()} Special Education Needs. All rights reserved.</span><span className="footer-note">Accessible learning for everyone.</span></footer>
  </div>;
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
