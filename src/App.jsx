import React, { useEffect, useMemo } from 'react';
import './App.css';

const Navbar = () => {
    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 50) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        };
        window.addEventListener('scroll', handleScroll);

        setTimeout(() => {
            document.querySelectorAll('.nav-menu li').forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('nav-item-visible');
                }, index * 80);
            });
        }, 200);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <nav className="navbar">
            <div className="container navbar-content">
                <a href="#home" className="logo" onClick={(e) => handleClick(e, '#home')}>
                    Shivam Sheth
                </a>
                <ul className="nav-menu">
                    {[
                        ['Home', '#home'],
                        ['About', '#about'],
                        ['Skills', '#skills'],
                        ['Resume', '#resume'],
                        ['Portfolio', '#portfolio'],
                        ['Contact', '#contact'],
                    ].map(([label, href]) => (
                        <li key={label} className="nav-item-animated">
                            <a href={href} className="nav-link" onClick={(e) => handleClick(e, href)}>
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

const Hero = () => {
    useEffect(() => {
        const elements = [
            { selector: '.hero-greeting', delay: 300 },
            { selector: '.hero-title', delay: 500 },
            { selector: '.hero-subtitle', delay: 700 },
            { selector: '.hero-description', delay: 900 },
            { selector: '.hero-buttons', delay: 1100 },
        ];

        elements.forEach(({ selector, delay }) => {
            setTimeout(() => {
                const el = document.querySelector(selector);
                if (el) el.classList.add('animate-in');
            }, delay);
        });

        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.classList.add('floating');
        }
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
      <section id="home" className="hero">
          <div className="container hero-content">
              <div className="hero-wrapper">

                  <div className="hero-image">
                      <img src="./201983053.jpg" alt="Shivam Sheth" />
                  </div>
                  <div className="hero-text">
                      <p className="hero-greeting text-animate">Hello, I'm</p>
                      <h1 className="hero-title text-animate">Shivam Sheth</h1>
                      <h2 className="hero-subtitle text-animate">Full Stack Web Developer</h2>
                      <p className="hero-description text-animate">
                          MCA Student specializing in building innovative digital solutions with modern web
                          technologies. Passionate about creating clean, efficient, and user-centric applications.
                      </p>
                      <div className="hero-buttons text-animate">
                          <a href="#portfolio" className="btn btn-primary btn-animated">
                              View My Work
                          </a>
                          <a href="#contact" className="btn btn-outline btn-animated">
                              Get In Touch
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    );
};

const About = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.querySelectorAll('.about-text p').forEach((p, index) => {
                            setTimeout(() => {
                                p.classList.add('slide-in');
                            }, index * 200);
                        });
                    }
                });
            },
            { threshold: 0.3 }
        );

        const aboutSection = document.getElementById('about');
        if (aboutSection) observer.observe(aboutSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="about" className="section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p className="text-stagger">
                            I'm Shivam Sheth, currently pursuing my Master of Computer Applications (MCA) at Parul
                            University, with a focus on full-stack web development.
                        </p>
                        <p className="text-stagger">
                            My passion lies in building innovative and client-focused digital solutions that solve
                            real-world problems. I have experience working with modern technologies including React,
                            Node.js, and various databases.
                        </p>
                        <p className="text-stagger">
                            I'm actively seeking opportunities to contribute to exciting projects, whether remote or
                            local in Gujarat. I believe in continuous learning and staying updated with the latest
                            technologies and best practices in web development.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Skills = () => {
    const skills = [
        { name: 'HTML5', level: 95 },
        { name: 'CSS3', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'React JS', level: 80 },
        { name: 'MySQL', level: 80 },
        { name: 'PHP', level: 70 },
        { name: 'Git / GitHub', level: 75 },
        { name: 'Docker', level: 60 },
        { name: 'UI/UX Design', level: 75 },
        { name: 'Laravel', level: 90 },
        { name: 'AWS', level:60 },
        { name: 'REST APIs', level:85 }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate skill cards with stagger
                        const cards = entry.target.querySelectorAll('.skill-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('card-visible');
                                const bar = card.querySelector('.skill-progress');
                                const level = bar.getAttribute('data-level');
                                bar.style.width = level + '%';
                            }, index * 100);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        const skillsSection = document.getElementById('skills');
        if (skillsSection) observer.observe(skillsSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="skills" className="section section-alt">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <div className="skills-grid">
                    {skills.map((skill) => (
                        <div key={skill.name} className="skill-card">
                            <div className="skill-header">
                                <span className="skill-name">{skill.name}</span>
                                <span className="skill-level">{skill.level}%</span>
                            </div>
                            <div className="skill-bar">
                                <div className="skill-progress" data-level={skill.level}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Resume = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const content = entry.target.querySelector('.resume-content');
                        if (content) content.classList.add('zoom-in');
                    }
                });
            },
            { threshold: 0.5 }
        );

        const resumeSection = document.getElementById('resume');
        if (resumeSection) observer.observe(resumeSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="resume" className="section">
            <div className="container">
                <h2 className="section-title">Resume</h2>
                <div className="resume-content">
                    <p className="resume-text">
                        Download my resume to learn more about my education, experience, and technical skills.
                    </p>
                    <a
                        href="./resume.pdf"
                        className="btn btn-primary btn-animated"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

const Certifications = () => {
    const certs = [
        {
            name: 'Agile Methodology',
            org: 'Great Learning',
            url: 'https://www.mygreatlearning.com/certificate/URERNYRS',
        },
        {
            name: 'Java Programming',
            org: 'Great Learning',
            url: 'https://www.mygreatlearning.com/certificate/ATVHYDFJ',
        },
        { name: 'Advanced Java: JSP & Servlets', org: 'Simplilearn', url: null },
        { name: 'Java Spoken Tutorial', org: 'IIT Bombay', url: null },
        { name: 'Full Stack App Development', org: 'Parul University', url: null },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.cert-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('card-visible');
                            }, index * 150);
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        const certSection = document.getElementById('certifications');
        if (certSection) observer.observe(certSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="certifications" className="section section-alt">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="cert-grid">
                    {certs.map((cert, idx) => (
                        <div key={idx} className="cert-card">
                            <h3 className="cert-name">{cert.name}</h3>
                            <p className="cert-org">{cert.org}</p>
                            {cert.url && (
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-link"
                                >
                                    View Certificate →
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Portfolio = () => {
    const projects = [
        {
            title: 'Employee Management System',
            url: 'https://empmanagebyshivam.netlify.app',
            desc: 'Comprehensive system for managing employee data and workflows',
        },
        {
            title: 'GitHub Profile Tracker',
            url: 'https://git-hub-profile-tracker-seven.vercel.app/',
            desc: 'Real-time GitHub profile analytics and tracking',
        },
        {
            title: 'Online Quiz Platform',
            url: 'https://quizzz-jet.vercel.app/',
            desc: 'Interactive quiz platform with real-time scoring',
        },
        {
            title: 'Pro-Inventor',
            url: 'https://pro-inventor.vercel.app/',
            desc: 'Innovative tool for creative problem solving',
        },
        {
            title: 'Gullak',
            url: 'https://gullak-budget.vercel.app/',
            desc: 'Personal budget management application',
        },
        {
            title: 'Google Sheet Clone',
            url: 'https://google-sheet-clone-plum.vercel.app/',
            desc: 'Spreadsheet application with collaborative features',
        },
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.project-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('card-visible');
                            }, index * 120);
                        });
                    }
                });
            },
            { threshold: 0.1 }
        );

        const portfolioSection = document.getElementById('portfolio');
        if (portfolioSection) observer.observe(portfolioSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="portfolio" className="section">
            <div className="container">
                <h2 className="section-title">Portfolio</h2>
                <p className="section-subtitle">A collection of my recent projects and work</p>
                <div className="portfolio-grid">
                    {projects.map((project) => (
                        <a
                            key={project.title}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card"
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">{project.desc}</p>
                                <span className="project-link-text">View Project →</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const cards = entry.target.querySelectorAll('.contact-card');
                        cards.forEach((card, index) => {
                            setTimeout(() => {
                                card.classList.add('card-visible');
                            }, index * 150);
                        });

                        setTimeout(() => {
                            const socialLinks = entry.target.querySelectorAll('.social-link');
                            socialLinks.forEach((link, index) => {
                                setTimeout(() => {
                                    link.classList.add('link-visible');
                                }, index * 100);
                            });
                        }, 500);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const contactSection = document.getElementById('contact');
        if (contactSection) observer.observe(contactSection);

        return () => observer.disconnect();
    }, []);

    return (
        <section id="contact" className="section section-alt">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">
                    Feel free to reach out for collaborations or just a friendly chat
                </p>
                <div className="contact-grid">
                    <div className="contact-card">
                        <div className="contact-icon">✉️</div>
                        <h3>Email</h3>
                        <a href="mailto:shivamsheth808@gmail.com" className="contact-link">
                            shivamsheth808@gmail.com
                        </a>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">📱</div>
                        <h3>Phone</h3>
                        <a href="tel:+919737887178" className="contact-link">
                            +91 9737887178
                        </a>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">🌍</div>
                        <h3>Location</h3>
                        <p className="contact-text">Gujarat, India</p>
                    </div>
                </div>
                <div className="social-links">
                    <a
                        href="https://github.com/Shivamsheth"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://www.linkedin.com/in/shivam-sheth-4a9bb3241/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="https://pro-inventor.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                    >
                        Pro-Inventor
                    </a>
                </div>
            </div>
        </section>
    );
};

const Footer = () => (
    <footer className="footer">
        <div className="container">
            <p>© 2025 Shivam Sheth. All rights reserved.</p>
            <p className="footer-tagline">Designed & Built with React</p>
        </div>
    </footer>
);

function App() {
    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('section-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        document.querySelectorAll('.section').forEach((section) => {
            sectionObserver.observe(section);
        });

        // Parallax effect on scroll
        const handleScroll = () => {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.hero-content');
            parallaxElements.forEach((el) => {
                el.style.transform = `translateY(${scrolled * 0.3}px)`;
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            sectionObserver.disconnect();
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="app">
            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Resume />
            <Certifications />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
