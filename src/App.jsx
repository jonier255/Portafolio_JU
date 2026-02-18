import { useState } from 'react';
import './App.css';

// Componente para los Iconos (usando SVGs simples para no depender de librerías externas por ahora)
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const ExternalLinkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
);

const GraduationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
);

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
);

const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" fill="currentColor">
    <path d="M16.003 3C9.374 3 4 8.373 4 15.003c0 2.136.563 4.14 1.54 5.876L4 29l8.354-1.512A11.94 11.94 0 0 0 16.003 28C22.63 28 28 22.627 28 15.997 28 9.373 22.63 3 16.003 3zm0 2c5.518 0 10 4.48 10 9.997C26.003 20.52 21.52 26 16.003 26c-1.845 0-3.576-.504-5.063-1.38l-.36-.213-4.955.897.93-4.822-.238-.376A9.955 9.955 0 0 1 6 15.003C6 9.48 10.48 5 16.003 5zm-3.056 5.002c-.22 0-.576.082-.877.408-.301.326-1.15 1.123-1.15 2.74 0 1.617 1.177 3.18 1.34 3.4.163.218 2.31 3.526 5.605 4.8 2.773 1.065 3.337.854 3.939.8.602-.054 1.94-.793 2.213-1.558.275-.765.275-1.42.193-1.558-.082-.137-.301-.22-.63-.383-.33-.163-1.94-.958-2.24-1.067-.3-.11-.518-.163-.736.163-.22.326-.847 1.067-1.04 1.285-.191.22-.383.247-.713.083-.33-.163-1.392-.513-2.652-1.636-.98-.874-1.642-1.953-1.834-2.28-.193-.327-.02-.503.145-.665.148-.146.33-.383.494-.574.164-.191.22-.327.33-.545.11-.218.055-.41-.027-.574-.082-.163-.727-1.764-1.012-2.41-.245-.566-.5-.574-.713-.582a13.3 13.3 0 0 0-.575-.003z"/>
  </svg>
);

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // DATOS DEL PORTAFOLIO
  const perfil = {
    nombre: 'Jonier Miguel Urrea Pinchao',
    profesion: 'Desarrollador Full Stack',
    descripcion: 'Especializado en crear experiencias digitales excepcionales. Transformo ideas complejas en código limpio y eficiente.',
    social: {
      github: 'https://github.com/jonier255', 
      linkedin: 'https://linkedin.com/in/tuusuario', 
      email: 'jonier145@gmail.com',
      whatsapp: 'https://wa.me/573163195440'
    }
  };

  const proyectos = [
    {
      id: 1,
      titulo: 'Plataforma Para la empresa A&C Soluciones.',
      descripcion: 'Un Sistema completo ERP (Enterprise Resource Planning)',
      tecnologias: ['React', 'Node.js', 'Postgresql', 'Express.js'],
      linkDemo: 'https://a-c-soluciones.vercel.app/', 
      linkRepo: 'https://github.com/FiveDevCode/A-C-Soluciones.git',
      imagen: '/imagenes/a-c-soluciones.png'
    },
    {
      id: 2,
      titulo: 'Plataforma para la empresa AFH Metalmecánicos.',
      descripcion: 'Colaboración en el desarrollo Backend de la aplicación corporativa para la empresa afh metalmecanicos.',
      tecnologias: ['Python', 'Django', 'Postgresql'],
      linkDemo: 'https://www.afhmetalmecanico.com/',
      imagen: '/imagenes/metalmecanicos.png'
    },
    {
      id: 3,
      titulo: 'Desarrollo de una aplicación móvil Para la empresa A&C Soluciones',
      descripcion: 'Una aplicación móvil para la gestión de tareas y proyectos, diseñada para mejorar la productividad administrativa y tecnica en la realización de proyectos de mantenimientos.',
      tecnologias: ['Flutter', 'Node.js', 'Postgresql', 'Express.js'],
      linkDemo: 'https://descargapp.vercel.app/',
      linkRepo: 'https://github.com/jonier255/A-C-Soluciones-Moviles-Flutter.git',
      imagen: '/imagenes/moviles.jpeg'
    }
  ];

  const habilidades = [
    { nombre: "JavaScript", logo: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
    { nombre: "React.js", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
    { nombre: "Node.js", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
    { nombre: "HTML", logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
    { nombre: "CSS", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
    { nombre: "GitHub", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c2/GitHub_Invertocat_Logo.svg" },
    { nombre: "PostgreSQL", logo: "https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" },
    { nombre: "Python", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" },
    { nombre: "Flutter", logo: "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png" },
    { nombre: "Figma", logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" }
  ];

  const estudios = [
    {
      id: 1,
      titulo: 'Tecnologo. Desarrollo de Software',
      institucion: 'Universidad Del Valle - Sede Palmira',
      fecha: '2025',
      descripcion: 'Formación integral en desarrollo de software, arquitectura de sistemas y gestión de proyectos tecnológicos.'
    },
    {
      id: 2,
      titulo: 'Diplomado en Soporte de Tecnologías de la Información de Google',
      institucion: 'Coursera',
      fecha: '2024',
      descripcion: 'Programa intensivo enfocado en Soporte de Tecnologías de la Información.'
    
    }
  ];

  return (
    <div className="app-container">
      {/* Navegación */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="logo"><CodeIcon /> <span>{perfil.nombre}</span></div>
          <ul className="nav-links">
            <li><a href="#inicio" onClick={() => setActiveSection('inicio')} className={activeSection === 'inicio' ? 'active' : ''}>Inicio</a></li>
            <li><a href="#proyectos" onClick={() => setActiveSection('proyectos')} className={activeSection === 'proyectos' ? 'active' : ''}>Proyectos</a></li>
            <li><a href="#habilidades" onClick={() => setActiveSection('habilidades')} className={activeSection === 'habilidades' ? 'active' : ''}>Habilidades</a></li>
            <li><a href="#estudios" onClick={() => setActiveSection('estudios')} className={activeSection === 'estudios' ? 'active' : ''}>Estudios</a></li>
            <li><a href="#contacto" onClick={() => setActiveSection('contacto')} className={activeSection === 'contacto' ? 'active' : ''}>Contacto</a></li>
          </ul>
        </div>
      </nav>

      {/* Sección Hero */}
      <section id="inicio" className="hero-section">
        <div className="hero-container">
          <div className="hero-text-content">
            <span className="subtitle">Hola, mi nombre es</span>
            <h1 className="title">{perfil.nombre}</h1>
            <h2 className="profession">{perfil.profesion}</h2>
            <p className="description">{perfil.descripcion}</p>
            <div className="hero-buttons">
              <a href="#proyectos" className="btn btn-primary">Ver mis Proyectos</a>
              <a href="#contacto" className="btn btn-outline">Contáctame</a>
            </div>
          </div>
          <div className="hero-image-content">
             <div className="profile-image-wrapper">
               <img src="/imagenes/perfil.jpeg" alt={perfil.nombre} className="profile-photo" />
             </div>
             <a href="/hoja-de-vida.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-cv">
               Descargar Hoja de Vida
             </a>
          </div>
        </div>
      </section>

      {/* Sección Proyectos */}
      <section id="proyectos" className="projects-section">
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="projects-grid">
          {proyectos.map((proyecto) => (
            <div key={proyecto.id} className="project-card">
              <div className="project-image-container">
                <img src={proyecto.imagen} alt={proyecto.titulo} className="project-image" />
                <div className="project-overlay">
                  <a href={proyecto.linkDemo} target="_blank" rel="noopener noreferrer" className="btn-icon" title="Ver Demo">
                    <ExternalLinkIcon />
                  </a>
                  <a href={proyecto.linkRepo} target="_blank" rel="noopener noreferrer" className="btn-icon" title="Ver Código">
                    <GithubIcon />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{proyecto.titulo}</h3>
                <p>{proyecto.descripcion}</p>
                <div className="project-tags">
                  {proyecto.tecnologias.map((tech, idx) => (
                    <span key={idx} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Habilidades */}
      <section id="habilidades" className="skills-section">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <div className="skills-container">
          {habilidades.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.logo} alt={skill.nombre} className="skill-icon" />
              <span>{skill.nombre}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Estudios */}
      <section id="estudios" className="education-section">
        <h2 className="section-title">Estudios y Logros</h2>
        <div className="education-container">
          {estudios.map((estudio) => (
            <div key={estudio.id} className="education-card">
              <div className="education-icon">
                <GraduationIcon />
              </div>
              <div className="education-body">
                <div className="education-header">
                  <h3 className="education-title">{estudio.titulo}</h3>
                  <span className="education-date">{estudio.fecha}</span>
                </div>
                <h4 className="institution">{estudio.institucion}</h4>
                <p>{estudio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="contact-section">
        <div className="contact-inner">
          <span className="subtitle">¿Hablamos?</span>
          <h2 className="contact-heading">Ponte en Contacto</h2>
          <p className="contact-subtext">
            Estoy disponible para proyectos freelance, colaboraciones o nuevas oportunidades laborales.
            ¡No dudes en escribirme!
          </p>
          <div className="contact-cards">
            <a href={`mailto:${perfil.social.email}`} className="contact-card">
              <div className="contact-card-icon mail">
                <MailIcon />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">Correo Electrónico</span>
                <span className="contact-card-value">{perfil.social.email}</span>
              </div>
            </a>
            <a href={perfil.social.github} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon github">
                <GithubIcon />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">GitHub</span>
                <span className="contact-card-value">github.com/jonier255</span>
              </div>
            </a>
            <a href={perfil.social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon linkedin">
                <LinkedInIcon />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">LinkedIn</span>
                <span className="contact-card-value">Jonier Urrea Pinchao</span>
              </div>
            </a>
            <a href={perfil.social.whatsapp} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-card-icon whatsapp">
                <WhatsAppIcon />
              </div>
              <div className="contact-card-info">
                <span className="contact-card-label">WhatsApp</span>
                <span className="contact-card-value">+57 316 319 5440</span>
              </div>
            </a>
          </div>
          <a href={`mailto:${perfil.social.email}`} className="btn btn-primary contact-cta">
            <MailIcon /> Enviar un mensaje
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <CodeIcon />
            <h3>{perfil.nombre}</h3>
          </div>
          <p className="copyright">© {new Date().getFullYear()} {perfil.nombre}. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
