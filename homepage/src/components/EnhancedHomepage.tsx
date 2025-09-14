import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import type { ReactElement } from 'react';

// Icon components using SVG
const ChevronRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Code = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const Server = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const Globe = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

const Zap = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Users = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);

const Mail = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const MessageCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export default function EnhancedHomepage(): ReactElement {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState({
    services: false,
    process: false,
    testimonials: false,
    tech: false
  });

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({
              ...prev,
              [entry.target.id]: true
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Full-Stack Web Development",
      description: "From concept to deployment - React, Node.js, MongoDB applications that scale",
      features: ["Responsive Design", "API Development", "Database Integration", "Cloud Deployment"]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Infrastructure & DevOps",
      description: "Azure, Kubernetes, CI/CD pipelines that ensure 99.999% uptime",
      features: ["Cloud Architecture", "Containerization", "Monitoring Setup", "Security Implementation"]
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Custom Solutions",
      description: "WordPress plugins, RSS readers, AI integrations - tailored to your needs",
      features: ["API Integrations", "Custom Plugins", "AI Implementation", "Performance Optimization"]
    }
  ];

  const achievements = [
    { number: "99.999%", label: "Uptime Achieved", icon: <Zap className="w-6 h-6" /> },
    { number: "10+", label: "Years Experience", icon: <Users className="w-6 h-6" /> },
    { number: "95%", label: "Time Reduction", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "100%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      text: "Reduced our deployment time by 80% and achieved incredible stability. Yoshi's expertise in infrastructure is unmatched.",
      author: "Tech Lead, E-commerce Platform",
      company: "Fortune 500 Company"
    },
    {
      text: "The custom WordPress solution delivered exactly what we needed. Professional, efficient, and always available for support.",
      author: "Marketing Director",
      company: "Digital Agency"
    },
    {
      text: "From concept to launch in just 6 weeks. The attention to detail and technical excellence exceeded our expectations.",
      author: "Startup Founder",
      company: "SaaS Platform"
    }
  ];

  const techStack = [
    "React", "Node.js", "TypeScript", "MongoDB", "Azure", "Kubernetes", 
    "Docker", "Java", "Spring Boot", "Python", "WordPress", "AI/ML"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 rounded-full text-emerald-300 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse"></span>
              Available for New Projects
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Turn Your Ideas Into
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Reality</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full-stack developer & infrastructure engineer with 10+ years experience. 
              I build scalable web applications and robust cloud solutions that grow with your business.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/contacts" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/projects" className="px-8 py-4 border border-gray-400 text-gray-300 font-semibold rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center">
              View My Work
              <ChevronRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="flex justify-center mb-2 text-cyan-400">
                  {achievement.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {achievement.number}
                </div>
                <div className="text-gray-400 text-sm">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              PocketGroovy
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/projects" className="text-gray-300 hover:text-cyan-400 transition-colors">Projects</Link>
              <Link to="/experience" className="text-gray-300 hover:text-cyan-400 transition-colors">Experience</Link>
              <Link to="/service" className="text-gray-300 hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/aboutMe" className="text-gray-300 hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/contacts" className="text-gray-300 hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Services Section */}
      <section id="services" data-animate className={`py-20 px-4 transition-all duration-1000 ${isVisible.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What I Can Build For You
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From startup MVPs to enterprise solutions, I deliver end-to-end development services
              that solve real business problems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" data-animate className={`py-20 px-4 bg-white/5 transition-all duration-1000 ${isVisible.process ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My Development Process
            </h2>
            <p className="text-xl text-gray-400">
              Proven methodology that delivers results on time and within budget
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Understanding your needs, goals, and requirements" },
              { step: "02", title: "Design", desc: "Creating wireframes, architecture, and technical specifications" },
              { step: "03", title: "Develop", desc: "Building with best practices, testing, and regular updates" },
              { step: "04", title: "Deploy", desc: "Launch, monitoring, and 4-weeks post-launch support" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold text-xl flex items-center justify-center rounded-full mx-auto mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{phase.title}</h3>
                <p className="text-gray-400">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" data-animate className={`py-20 px-4 transition-all duration-1000 ${isVisible.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16">
            What Clients Say
          </h2>
          
          <div className="relative">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="inline-block w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              <div className="text-cyan-400 font-semibold">
                {testimonials[currentTestimonial].author}
              </div>
              <div className="text-gray-500">
                {testimonials[currentTestimonial].company}
              </div>
            </div>
            
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-cyan-400' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="tech" data-animate className={`py-20 px-4 transition-all duration-1000 ${isVisible.tech ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-12">
            Technologies I Work With
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-gray-300 rounded-full border border-white/20 hover:bg-white/20 hover:text-white transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how I can help bring your vision to life. 
            Free consultation and project estimate included.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/contacts" className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center">
              <Mail className="mr-2 w-5 h-5" />
              Get Free Consultation
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <div className="flex items-center text-gray-400">
              <MessageCircle className="w-5 h-5 mr-2" />
              <span>Response within 24 hours</span>
            </div>
          </div>
          
          <div className="mt-8 text-gray-400">
            <p>📧 info@pocketgroovy.com</p>
            <p>🌍 Available worldwide • 🇯🇵 Tokyo • 🇳🇱 Netherlands</p>
          </div>
        </div>
      </section>
    </div>
  );
}