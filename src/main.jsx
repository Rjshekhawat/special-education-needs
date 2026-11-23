import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BookOpen, GraduationCap, ClipboardCheck, FileText, Video, Menu, ArrowUpRight, PlayCircle, Languages, Headphones, ShieldCheck, Clock3, X, LayoutDashboard, Users, IndianRupee, Bell, Settings, Search, PlusCircle, BarChart3, BookMarked, LogIn, ChevronRight } from 'lucide-react';
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

function LoginDialog({ onClose }) {
  const [mode, setMode] = useState('student');
  return <div className="modal-backdrop" role="presentation" onMouseDown={e => e.target === e.currentTarget && onClose()}>
    <section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
      <button className="modal-close" onClick={onClose} aria-label="Close"><X size={19}/></button>
      <span className="modal-mark"><GraduationCap size={25}/></span>
      <h2 id="login-title">Welcome back</h2><p>अपने learning account में प्रवेश करें।</p>
      <div className="login-tabs"><button className={mode==='student'?'selected':''} onClick={()=>setMode('student')}>Student</button><button className={mode==='admin'?'selected':''} onClick={()=>setMode('admin')}>Admin</button></div>
      <label>मोबाइल नंबर या ईमेल</label><input type="text" placeholder="Enter mobile number or email" />
      <label>Password / OTP</label><input type="password" placeholder="Enter password or OTP" />
      <button className="primary-btn modal-submit" onClick={()=>alert('यह UI prototype है। वास्तविक login backend जुड़ने के बाद सक्रिय होगा।')}> <LogIn size={17}/> {mode==='student'?'Student Login':'Admin Login'}</button>
      <small className="prototype-note">Demo interface only — अभी वास्तविक authentication सक्रिय नहीं है।</small>
    </section>
  </div>;
}

function AdminPreview({ onBack }) {
  const [active, setActive] = useState('Overview');
  const nav = [{name:'Overview',icon:LayoutDashboard},{name:'Students',icon:Users},{name:'Courses',icon:BookOpen},{name:'Test Series',icon:ClipboardCheck},{name:'Question Bank',icon:BookMarked},{name:'Payments',icon:IndianRupee},{name:'Notifications',icon:Bell},{name:'Settings',icon:Settings}];
  const stats = [{label:'Total Students',value:'—',sub:'डेटाबेस कनेक्शन लंबित',icon:Users},{label:'Active Courses',value:'3',sub:'डेमो कोर्स कार्ड',icon:BookOpen},{label:'Test Series',value:'—',sub:'डेटा जोड़ना बाकी',icon:ClipboardCheck},{label:'Total Revenue',value:'—',sub:'Payment gateway लंबित',icon:IndianRupee}];
  return <div className="admin-shell">
    <aside className="admin-sidebar"><div className="admin-brand"><span className="brand-mark"><GraduationCap size={22}/></span><span><b>Special Education</b><small>ADMIN CONSOLE</small></span></div>
      <div className="admin-nav-label">WORKSPACE</div>{nav.map(({name,icon:Icon})=><button key={name} className={active===name?'admin-nav active':'admin-nav'} onClick={()=>setActive(name)}><Icon size={17}/>{name}<ChevronRight size={14}/></button>)}
      <div className="admin-side-bottom"><ShieldCheck size={17}/><span>Secure admin access<br/><small>Backend setup required</small></span></div>
    </aside>
    <main className="admin-main"><header className="admin-topbar"><button className="back-site" onClick={onBack}>← Website पर वापस जाएँ</button><div className="admin-user"><span className="admin-avatar">A</span><span><b>Admin Preview</b><small>Demo workspace</small></span></div></header>
      <div className="admin-content"><div className="admin-title-row"><div><span className="section-kicker">CONTROL CENTER</span><h1>{active}</h1><p>Special Education Needs platform management</p></div><button className="admin-add" onClick={()=>alert('यह demo preview है। Backend जुड़ने के बाद यह सुविधा सक्रिय होगी।')}><PlusCircle size={17}/> Add New</button></div>
        {active==='Overview'?<><div className="admin-stats">{stats.map(({label,value,sub,icon:Icon})=><article className="admin-stat" key={label}><span><Icon size={19}/></span><small>{label}</small><strong>{value}</strong><em>{sub}</em></article>)}</div><div className="admin-panels"><section className="admin-panel"><div className="panel-heading"><h3>Recent Activity</h3><span>Latest updates</span></div><div className="empty-state"><BarChart3 size={30}/><b>अभी कोई activity उपलब्ध नहीं है</b><small>Backend और database जुड़ने के बाद यहाँ वास्तविक गतिविधियाँ दिखेंगी।</small></div></section><section className="admin-panel"><div className="panel-heading"><h3>Quick Actions</h3><span>Manage platform</span></div>{['Create a course','Add MCQ questions','Publish a test series','Send notification'].map(t=><button className="quick-action" key={t} onClick={()=>alert('यह demo UI है। वास्तविक सुविधा backend के बाद सक्रिय होगी।')}>{t}<ArrowUpRight size={15}/></button>)}</section></div></>:<section className="admin-panel section-placeholder"><div className="empty-state"><Settings size={30}/><b>{active} Management</b><small>इस मॉड्यूल का interface अगली development stage में जोड़ा जाएगा। अभी कोई वास्तविक student या payment data मौजूद नहीं है।</small></div></section>}
        <p className="admin-disclaimer">Preview mode: यह अभी केवल frontend prototype है। सुरक्षित admin login, roles, database और live data अभी configure नहीं किए गए हैं।</p>
      </div>
    </main>
  </div>;
}

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  if (showAdmin) return <AdminPreview onBack={()=>setShowAdmin(false)}/>;
  return <div className="app-shell">
    <header className="topbar">
      <a className="brand" href="#home" aria-label="Special Education Needs home"><span className="brand-mark"><GraduationCap size={23}/></span><span><strong>Special Education Needs</strong><small>Learn • Practice • Succeed</small></span></a>
      <nav className="desktop-nav"><a className="active" href="#home">होम</a><a href="#courses">Courses</a><a href="#tests">Test Series</a><a href="#about">About</a></nav>
      <div className="top-actions"><button className="language"><Languages size={16}/> हिन्दी</button><button className="login-btn" onClick={()=>setShowLogin(true)}>Login / Register</button><button className="menu-btn" aria-label="Open menu"><Menu/></button></div>
    </header>
    <main>
      <section className="hero" id="home"><div className="hero-copy"><div className="eyebrow"><span className="pulse"></span> आपका learning partner</div><h1>विशेष शिक्षा की तैयारी को<br/><em>बनाएँ आसान और प्रभावी।</em></h1><p>Courses, expert guidance, bilingual notes और नियमित test practice — आपकी सफलता की तैयारी एक ही जगह।</p><div className="hero-actions"><a className="primary-btn" href="#courses">कोर्स देखें <ArrowUpRight size={17}/></a><a className="secondary-btn" href="#tests"><PlayCircle size={18}/> टेस्ट सीरीज़</a></div><div className="trust-row"><span><ShieldCheck size={16}/> Structured learning</span><span><Languages size={16}/> Hindi & English</span></div></div>
        <div className="hero-art" aria-label="Learning illustration"><div className="art-orbit orbit-one"></div><div className="art-orbit orbit-two"></div><div className="art-card main-art-card"><div className="art-icon"><GraduationCap size={42}/></div><strong>Learn with purpose</strong><span>Special Education</span><div className="progress-line"><i/></div><small>आपकी तैयारी, आपकी गति से</small></div><div className="float-card float-top"><ClipboardCheck size={18}/><span><b>Daily Practice</b><small>नियमित MCQs</small></span></div><div className="float-card float-bottom"><FileText size={18}/><span><b>Study Material</b><small>Notes & PDFs</small></span></div><div className="decor-dot dot-a"></div><div className="decor-dot dot-b"></div></div>
      </section>
      <section className="quick-section" id="tests"><div className="section-heading"><div><span className="section-kicker">LEARNING RESOURCES</span><h2>आपकी तैयारी के लिए सब कुछ</h2></div><a href="#courses" className="text-link">सभी सुविधाएँ <ArrowUpRight size={16}/></a></div><div className="quick-grid">{quickLinks.map(({icon: Icon,title,desc})=><article className="quick-card" key={title}><span className="quick-icon"><Icon size={21}/></span><div><h3>{title}</h3><p>{desc}</p></div><ArrowUpRight className="card-arrow" size={17}/></article>)}</div></section>
      <section className="courses-section" id="courses"><div className="section-heading"><div><span className="section-kicker">FEATURED PROGRAMS</span><h2>अपनी तैयारी का अगला कदम चुनें</h2><p className="section-sub">परीक्षा और लक्ष्य के अनुसार तैयार किए गए learning programs.</p></div><a href="#courses" className="text-link">View all courses <ArrowUpRight size={16}/></a></div><div className="course-grid">{courses.map(({tag,title,detail,lessons,icon: Icon})=><article className="course-card" key={title}><div className="course-top"><span className="course-tag">{tag}</span><span className="course-icon"><Icon size={23}/></span></div><h3>{title}</h3><p className="course-detail">{detail}</p><div className="course-meta"><span><Video size={15}/>{lessons}</span><span><Clock3 size={15}/> Self-paced</span></div><button className="course-link" onClick={()=>setShowLogin(true)}>कोर्स की जानकारी <ArrowUpRight size={16}/></button></article>)}</div></section>
      <section className="cta-strip" id="about"><div><span className="section-kicker">START LEARNING TODAY</span><h2>सीखें, अभ्यास करें और आगे बढ़ें।</h2><p>Special Education Needs के साथ अपनी तैयारी को व्यवस्थित करें।</p></div><button className="primary-btn" onClick={()=>setShowLogin(true)}>Get Started <ArrowUpRight size={17}/></button></section>
    </main>
    <footer><div className="footer-brand"><span className="brand-mark"><GraduationCap size={21}/></span><strong>Special Education Needs</strong></div><span>© {new Date().getFullYear()} Special Education Needs. All rights reserved.</span><button className="admin-footer-link" onClick={()=>setShowAdmin(true)}>Admin Panel Preview</button></footer>
    {showLogin&&<LoginDialog onClose={()=>setShowLogin(false)}/>}
  </div>;
}
createRoot(document.getElementById('root')).render(<React.StrictMode><App/></React.StrictMode>);
