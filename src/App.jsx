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

function App() {
  const [activeSection, setActiveSection] = useState('inicio');

  // DATOS DEL PORTAFOLIO - EDITA AQUÍ TU INFORMACIÓN
  const perfil = {
    nombre: 'Jonier Miguel Urrea Pinchao',
    profesion: 'Desarrollador Full Stack',
    descripcion: 'Especializado en crear experiencias digitales excepcionales. Transformo ideas complejas en código limpio y eficiente.',
    social: {
      github: 'https://github.com/tuusuario', // TU LINK DE GITHUB
      linkedin: 'https://linkedin.com/in/tuusuario', // TU LINK DE LINKEDIN
      email: 'jonier145@gmail.com' // TU EMAIL
    }
  };

  const proyectos = [
    {
      id: 1,
      titulo: 'Plataforma Para la empresa A&C Soluciones.',
      descripcion: 'Un Sistema completo ERP (Enterprise Resource Planning)',
      tecnologias: ['React', 'Node.js', 'Postgresql', 'Express.js'],
      // AQUÍ COLOCAS LOS LINKS DE TUS PROYECTOS
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
      titulo: ' Desarrollo de una aplicación móvil Para la empresa A&C Soluciones',
      descripcion: 'Una aplicación móvil para la gestión de tareas y proyectos, diseñada para mejorar la productividad administrativa y tecnica en la realización de proyectos de mantenimientos.',
      tecnologias: ['Flutter', 'Node.js', 'Postgresql', 'Express.js'],
      // AQUÍ COLOCAS LOS LINKS DE TUS PROYECTOS
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
             {/* Asegúrate de poner tu foto en public/imagenes/tu-foto.jpg */}
             <div className="profile-image-wrapper">
               <img src="/imagenes/perfil.jpeg" alt={perfil.nombre} className="profile-photo" />
             </div>
             {/* Enlace a tu hoja de vida. Pon el archivo PDF en public/ */}
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
                  {/* AQUÍ ESTÁN LOS BOTONES CON LOS LINKS */}
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
        <h2 className="center-title">Habilidades Técnicas</h2>
        <div className="skills-container">
          {habilidades.map((skill, index) => (
            <div key={index} className="skill-item">
              <img src={skill.logo} alt={skill.nombre} className="skill-icon" />
              <span>{skill.nombre}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Contacto */}
      <section id="contacto" className="contact-section">
        <h2 className="center-title">Ponte en Contacto</h2>
        <p className="contact-text">
          ¿Tienes una idea en mente o quieres colaborar en un proyecto? 
          ¡Me encantaría escucharte!
        </p>
        <div className="contact-actions">
          <a href={perfil.social.email} className="btn btn-primary">
            <MailIcon /> Enviar correo, <span>{perfil.social.email}</span>

          </a>
          <div className="social-links">
            <a href={'https://github.com/jonier255'} target="_blank" rel="noopener noreferrer">GitHub</a>

            <a href={perfil.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>Diseñado y construído por {perfil.nombre} © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
