import React, { useState, useEffect, useRef } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ ...formStatus, submitting: true });
    
    // Simulação de envio de formulário
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Mensagem enviada com sucesso!" }
      });
      
      // Reset form after successful submission
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setFormStatus({
          submitted: false,
          submitting: false,
          info: { error: false, msg: null }
        });
      }, 5000);
    }, 1500);
  };

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact-background">
        <div className="contact-gradient-1"></div>
        <div className="contact-gradient-2"></div>
      </div>
      
      <div className="contact-container">
        <h2 className={`contact-title ${isVisible ? 'animate-in' : ''}`}>
          Entre em <span className="text-gradient">Contato</span>
        </h2>
        
        <div className="contact-content">
          <div className={`contact-info ${isVisible ? 'animate-in' : ''}`} style={{ animationDelay: '0.2s' }}>
            <h3>Vamos conversar</h3>
            <p>Preencha o formulário ao lado ou entre em contato através dos canais abaixo:</p>
            
            <div className="contact-method">
              <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              <div>
                <h4>Email</h4>
                <a href="mailto:contato@exemplo.com">contato@exemplo.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <div>
                <h4>Telefone</h4>
                <a href="tel:+5511999999999">+55 (11) 99999-9999</a>
              </div>
            </div>
            
            <div className="contact-method">
              <svg className="contact-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <div>
                <h4>Localização</h4>
                <p>São Paulo, SP - Brasil</p>
              </div>
            </div>
            
            <div className="social-links">
              <a href="#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <form 
            className={`contact-form ${isVisible ? 'animate-in' : ''}`} 
            style={{ animationDelay: '0.4s' }}
            onSubmit={handleSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Seu nome completo" 
                required 
                value={formState.name}
                onChange={handleChange}
                className={formState.name ? 'has-value' : ''}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="Seu melhor email" 
                required 
                value={formState.email}
                onChange={handleChange}
                className={formState.email ? 'has-value' : ''}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                name="message" 
                placeholder="Como posso ajudar você?" 
                rows="5" 
                required
                value={formState.message}
                onChange={handleChange}
                className={formState.message ? 'has-value' : ''}
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="btn-primary"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? (
                <span className="loading-spinner"></span>
              ) : formStatus.submitted ? (
                'Enviado com sucesso!'
              ) : (
                'Enviar Mensagem'
              )}
            </button>
            
            {formStatus.info.error && (
              <div className="form-error">{formStatus.info.msg}</div>
            )}
            
            {formStatus.submitted && !formStatus.info.error && (
              <div className="form-success">{formStatus.info.msg}</div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;