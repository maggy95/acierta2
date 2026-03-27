import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Users, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  MessageSquare, 
  CheckCircle2, 
  Mail, 
  Building2, 
  User, 
  ArrowRight,
  Video,
  FileText,
  Zap,
  Award,
  Compass,
  BarChart3,
  Search,
  PenTool,
  PlayCircle,
  Clock
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Shared Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Nosotros', href: '/nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-4",
      isScrolled || location.pathname !== '/' ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-dark rounded-2xl flex items-center justify-center shadow-lg shadow-dark/20">
            <Compass className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-display font-bold tracking-tight text-dark">Acierta</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                location.pathname === link.href ? "text-primary font-bold" : "text-gray-600 hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contacto" 
            className="bg-primary text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-dark transition-all shadow-md hover:shadow-lg"
          >
            Empezar ahora
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.href}
                className={cn(
                  "text-lg font-medium",
                  location.pathname === link.href ? "text-primary font-bold" : "text-gray-800"
                )}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                <Compass className="text-white w-6 h-6" />
              </div>
              <span className="text-3xl font-display font-bold tracking-tight">Acierta</span>
            </div>
            <p className="text-white/80 max-w-sm leading-relaxed">
              Especialistas en el desarrollo del liderazgo y el fortalecimiento del trabajo en equipo para organizaciones que desean crecer de manera sostenible.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Enlaces</h4>
            <ul className="space-y-4 text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
              <li><Link to="/nosotros" className="hover:text-white transition-colors">Nosotros</Link></li>
              <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
              <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Legal</h4>
            <ul className="space-y-4 text-white/70">
              <li><a href="#" className="hover:text-white transition-colors">Privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Acierta. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

const SectionHeader = ({ title, subtitle, centered = false }: { title: string, subtitle?: string, centered?: boolean }) => (
  <div className={cn("mb-16", centered && "text-center max-w-3xl mx-auto")}>
    <h2 className="heading-2 text-dark">{title}</h2>
    {subtitle && <p className="text-lg text-muted">{subtitle}</p>}
  </div>
);

const ValueProposition = () => {
  const items = [
    "Agregamos valor a las personas",
    "Construyendo confianza",
    "Impulsando liderazgo consciente",
    "Equipos que colaboran",
    "Relaciones que fortalecen resultados",
    "Talento en acción",
    "Alto impacto organizacional"
  ];

  return (
    <section className="section-padding bg-dark text-white overflow-hidden relative rounded-t-[60px] md:rounded-t-[100px]">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-white mb-8 font-display">Nuestra propuesta de valor</h2>
            <div className="space-y-4">
              {items.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-xl md:text-2xl font-medium opacity-90">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="relative">
              <div className="absolute inset-0 bg-dark/20 blur-3xl rounded-full" />
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" 
                alt="Value" 
                className="relative z-10 rounded-[40px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- Pages ---

const HomePage = () => {
  return (
    <main>
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/50 rounded-l-[120px] -z-10 transform translate-x-20" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              Desarrollo Integral
            </span>
            <h1 className="heading-1 text-primary mb-6">
              Impulsamos líderes, <br />
              <span className="text-dark">Fortalecemos equipos</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              Acompañamos a organizaciones a descubrir su potencial, mejorar sus relaciones y transformar la forma en que trabajan juntos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/servicios" className="btn-primary flex items-center gap-2">
                Nuestros Servicios <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/nosotros" className="btn-outline border-dark text-dark hover:bg-dark hover:text-white">
                Conócenos
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative z-10 rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Team working" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl z-20 flex items-center gap-4"
            >
              <div className="w-12 h-12 bg-dark/10 rounded-2xl flex items-center justify-center text-dark">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-dark">Excelencia</p>
                <p className="text-xs text-gray-500">Compromiso total</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <ValueProposition />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800" 
                alt="About us preview" 
                className="rounded-[40px] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-secondary font-bold uppercase tracking-widest text-sm mb-4 block">Nuestra Esencia</span>
              <h2 className="heading-2 text-primary">Acompañamos tu crecimiento</h2>
              <p className="text-muted mb-8 text-lg">
                En Acierta, nos apasiona ver cómo las organizaciones florecen cuando sus líderes y equipos están alineados. Nuestra metodología se basa en la experiencia práctica y el compromiso real con cada cliente.
              </p>
              <Link to="/nosotros" className="btn-outline inline-flex items-center gap-2">
                Saber más sobre nosotros <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Nuestros servicios destacados" centered />
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Talleres de liderazgo", icon: <Award /> },
              { title: "Trabajo en equipo", icon: <Users /> },
              { title: "Coaching ejecutivo", icon: <User /> }
            ].map((s, i) => (
              <div key={i} className="card text-center">
                <div className="w-16 h-16 bg-dark/5 text-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {s.icon}
                </div>
                <h3 className="text-xl font-bold text-dark mb-4">{s.title}</h3>
                <Link to="/servicios" className="text-primary font-bold flex items-center justify-center gap-2 group">
                  Ver detalles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const AboutPage = () => {
  const values = [
    { title: "Personas primero", desc: "El desarrollo humano es la base de todo resultado.", icon: <Users /> },
    { title: "Liderazgo consciente", desc: "Liderar con propósito, coherencia y responsabilidad.", icon: <Lightbulb /> },
    { title: "Trabajo en equipo", desc: "La colaboración es clave para el éxito sostenible.", icon: <Target /> },
    { title: "Aprendizaje continuo", desc: "Crecer es un proceso permanente.", icon: <Zap /> },
    { title: "Resultados con sentido", desc: "Medimos el impacto más allá de los números.", icon: <BarChart3 /> }
  ];

  const steps = [
    { title: "Diagnóstico", desc: "Analizamos las necesidades reales del líder, equipo u organización.", icon: <Search /> },
    { title: "Diseño", desc: "Soluciones personalizadas y alineadas a objetivos estratégicos.", icon: <PenTool /> },
    { title: "Implementación", desc: "Talleres, coaching y dinámicas aplicadas al contexto laboral.", icon: <PlayCircle /> },
    { title: "Seguimiento", desc: "Refuerzo del aprendizaje y medición de resultados.", icon: <Clock /> }
  ];

  return (
    <main>
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <SectionHeader 
                title="Quienes somos" 
                subtitle="Acierta es una empresa especializada en el desarrollo del liderazgo y el fortalecimiento del trabajo en equipo en organizaciones que desean crecer de manera sostenible."
              />
              <p className="text-muted mb-8">
                Creemos que los resultados no se logran solo con procesos, sino con personas preparadas, comprometidas y alineadas. Acompañamos a líderes y equipos a descubrir su potencial, mejorar sus relaciones y transformar la forma en que trabajan juntos.
              </p>
              <div className="card bg-dark text-white border-none">
                <h3 className="text-2xl font-bold mb-4">Nuestro propósito</h3>
                <p className="text-white/80 leading-relaxed">
                  Impulsar el crecimiento de líderes y equipos para que generen impacto positivo, tanto en los resultados del negocio como en las personas que lo conforman.
                </p>
              </div>
            </motion.div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800" 
                alt="About" 
                className="rounded-[60px] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Nuestros valores" centered />
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] shadow-sm text-center transition-all hover:shadow-md hover:-translate-y-1">
                <div className="w-12 h-12 bg-dark/5 text-dark rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {v.icon}
                </div>
                <h4 className="font-bold text-dark mb-3">{v.title}</h4>
                <p className="text-sm text-muted">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Nuestra metodología" centered subtitle="Práctica, experiencial y aplicada al contexto real." />
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className="text-center group">
                <div className="w-20 h-20 bg-primary text-white rounded-[32px] flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/20 transition-transform group-hover:scale-110">
                  {step.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{step.title}</h4>
                <p className="text-muted text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

const ServicesPage = () => {
  const services = [
    { 
      title: "Talleres de liderazgo", 
      desc: "Fortalecemos competencias clave para liderar personas y equipos con impacto. Enfocados en la autogestión, comunicación y visión estratégica.", 
      icon: <Award />,
      features: ["Liderazgo Situacional", "Gestión del Cambio", "Inteligencia Emocional"]
    },
    { 
      title: "Talleres de trabajo en equipo", 
      desc: "Impulsamos la colaboración, la comunicación y el compromiso colectivo para alcanzar metas compartidas.", 
      icon: <Users />,
      features: ["Confianza Colectiva", "Comunicación Asertiva", "Resolución de Conflictos"]
    },
    { 
      title: "Coaching ejecutivo e individual", 
      desc: "Acompañamiento personalizado para líderes que desean crecer y alcanzar su máximo potencial.", 
      icon: <User />,
      features: ["Plan de Carrera", "Habilidades Directivas", "Equilibrio Vida-Trabajo"]
    },
    { 
      title: "Programas corporativos a medida", 
      desc: "Soluciones alineadas a los objetivos y cultura de cada organización, diseñadas para resultados específicos.", 
      icon: <Building2 />,
      features: ["Cultura Organizacional", "Clima Laboral", "Alineamiento Estratégico"]
    }
  ];

  const resources = [
    { title: "Videos", desc: "Contenido audiovisual para el aprendizaje dinámico.", icon: <Video /> },
    { title: "Lecturas", desc: "Artículos y guías para profundizar en temas clave.", icon: <FileText /> },
    { title: "Dinámicas", desc: "Ejercicios prácticos para aplicar en el día a día.", icon: <Zap /> }
  ];

  return (
    <main>
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Nuestros servicios" centered subtitle="Soluciones integrales para el desarrollo de personas y organizaciones." />
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="card flex flex-col gap-6"
              >
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-dark/5 text-dark rounded-2xl flex items-center justify-center shrink-0">
                    {s.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-dark">{s.title}</h3>
                </div>
                <p className="text-muted">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f, j) => (
                    <span key={j} className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {f}
                    </span>
                  ))}
                </div>
                <Link to="/contacto" className="btn-outline text-center mt-auto">Consultar</Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-accent/50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Recursos para el aprendizaje" centered subtitle="Herramientas diseñadas para potenciar el crecimiento continuo." />
          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((r, i) => (
              <div key={i} className="card text-center border-none shadow-sm rounded-[40px] hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-white text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  {r.icon}
                </div>
                <h4 className="text-xl font-bold text-primary mb-3">{r.title}</h4>
                <p className="text-muted text-sm">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Beneficios de nuestras intervenciones" centered />
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="card">
              <h4 className="font-bold text-primary mb-6">Coaching Personal</h4>
              <ul className="space-y-4 text-sm text-muted">
                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Autoconocimiento profundo</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Claridad de objetivos</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Confianza y autoestima</li>
              </ul>
            </div>
            <div className="card">
              <h4 className="font-bold text-primary mb-6">Coaching Relacional</h4>
              <ul className="space-y-4 text-sm text-muted">
                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Comunicación asertiva</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Relaciones más sanas</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Capacidad de influencia</li>
              </ul>
            </div>
            <div className="card bg-dark text-white border-none">
              <h4 className="font-bold mb-6">Coaching Organizacional</h4>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Mejor toma de decisiones</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Mayor productividad</li>
                <li className="flex gap-2"><CheckCircle2 className="text-primary w-5 h-5 shrink-0" /> Desarrollo de liderazgo</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-[40px] bg-accent/50 shadow-sm">
              <h4 className="font-bold text-primary mb-6">Talleres de Liderazgo</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted">
                <div>• Mayor seguridad personal</div>
                <div>• Mejora en comunicación</div>
                <div>• Inteligencia emocional</div>
                <div>• Retención de talento</div>
              </div>
            </div>
            <div className="p-8 rounded-[40px] bg-accent/50 shadow-sm">
              <h4 className="font-bold text-primary mb-6">Trabajo en Equipo</h4>
              <div className="grid grid-cols-2 gap-4 text-sm text-muted">
                <div>• Propósito compartido</div>
                <div>• Confianza sólida</div>
                <div>• Compromiso colectivo</div>
                <div>• Eficiencia operativa</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const ContactPage = () => {
  return (
    <main>
      <section className="pt-32 pb-24 px-6 md:px-12 lg:px-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <SectionHeader 
                title="Contacto" 
                subtitle="Si deseas fortalecer el liderazgo y el trabajo en equipo en tu organización, estamos listos para acompañarte."
              />
              <div className="space-y-8 mt-12">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-lg font-medium">contacto@acierta.org</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-bold uppercase tracking-wider">Redes Sociales</p>
                    <p className="text-lg font-medium">@aciertaconsult</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card bg-accent/50 border-none p-10 rounded-[40px]">
              <h3 className="text-2xl font-bold text-dark mb-8 font-display">Formulario de contacto</h3>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Nombre</label>
                    <input type="text" className="w-full px-5 py-3 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-700 ml-1">Empresa</label>
                    <input type="text" className="w-full px-5 py-3 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Correo electrónico</label>
                  <input type="email" className="w-full px-5 py-3 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Mensaje</label>
                  <textarea rows={4} className="w-full px-5 py-3 rounded-2xl bg-white border-none shadow-sm focus:ring-2 focus:ring-primary outline-none resize-none transition-all"></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg rounded-2xl shadow-lg shadow-primary/20">
                  Enviar mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nosotros" element={<AboutPage />} />
            <Route path="/servicios" element={<ServicesPage />} />
            <Route path="/contacto" element={<ContactPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
