import React, { useState, useEffect } from 'react';
import { 
  Globe, 
  Settings, 
  Zap, 
  Building2, 
  Truck, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Menu, 
  X,
  ChevronRight,
  ChevronLeft,
  Factory,
  HardHat,
  Lightbulb,
  ShieldCheck,
  Users,
  ClipboardList,
  Compass,
  TrendingUp,
  Rocket,
  Recycle,
  Sprout,
  UserCheck,
  Star,
  Quote,
  Calendar,
  User,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from './lib/utils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
      isScrolled ? "bg-white/80 backdrop-blur-md border-slate-200 py-3" : "bg-transparent border-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img 
            src="https://www.avconexpo.com/assets/img/logo/brand-logo.png" 
            alt="AVCONEXPO Logo" 
            className="h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-primary text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-slate-800 transition-all shadow-lg shadow-orange-100">
            Get a Quote
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className="text-lg font-medium text-slate-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-primary text-white px-5 py-3 rounded-xl text-center font-semibold">
                Get a Quote
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Globe className="w-3 h-3" />
              Global Business & Technical Consultancy
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-6">
              From Concept to <span className="text-brand-primary italic">Consumer.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed">
              AVCONEXPO delivers comprehensive engineering, supply-chain, and industrial solutions across Greenfield and Brownfield projects worldwide.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-brand-primary text-white px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:bg-slate-800 transition-all group">
                Explore Our Services
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white border border-slate-200 text-slate-900 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
                Our Portfolio
              </button>
            </div>
            
            <div className="mt-12 flex items-center gap-8 border-t border-slate-100 pt-8">
              <div>
                <div className="text-2xl font-bold text-brand-primary">15+</div>
                <div className="text-sm text-slate-500">Years Experience</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-2xl font-bold text-brand-primary">200+</div>
                <div className="text-sm text-slate-500">Projects Delivered</div>
              </div>
              <div className="w-px h-10 bg-slate-200" />
              <div>
                <div className="text-2xl font-bold text-brand-primary">50+</div>
                <div className="text-sm text-slate-500">Global Partners</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Industrial Engineering" 
                className="w-full h-[600px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">Industrial Excellence</div>
                    <div className="text-sm opacity-80">Delivering turnkey solutions globally.</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Decorative Grid */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-slate-200/50 rounded-full -z-10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Business and Technical consultancy",
      description: "Concept to Consumer - We conceptualise, evaluate financial and technical viability, assess risks, prepare Detailed Business reports, assist in capital arrangement, manage supply chain, execute projects, train teams, and support market entry. Sratch to shelf – We architect, engineer, design, source, build, and deliver turnkey projects with technical, commercial, and strategic excellence.",
      icon: <Globe className="w-8 h-8" />,
      image: "https://www.avconexpo.com/assets/img/industrial_consultancy_machinery.png",
      tag: "End-to-End Solutions"
    },
    {
      title: "Project Management",
      description: "We synchronise complex timelines, multi-disciplinary teams, and strategic targets to ensure seamless project delivery with absolute precision, quality, and accountability. Our approach integrates advanced risk management, resource allocation, and real-time monitoring to navigate challenges and deliver turnkey excellence from initial planning to final commissioning.",
      icon: <ClipboardList className="w-8 h-8" />,
      image: "https://www.avconexpo.com/assets/img/service/projectmanagement.jpg",
      tag: "Execution"
    },
    {
      title: "Architecture & Designing",
      description: "From Concept to Creation, we craft functional and aesthetic industrial environments guided by cosmic energy and planetary alignment, enriching life, work, and harmony of mind, body and soul. Our designs prioritize structural integrity, spatial efficiency, and sustainable practices, ensuring that every facility is optimized for both human productivity and technical performance.",
      icon: <Compass className="w-8 h-8" />,
      image: "https://www.avconexpo.com/assets/img/architecture_design.jpg",
      tag: "Design"
    },
    {
      title: "Industrial Revival & Growth",
      description: "We diagnose, restructure, modernise and revive industries, helping them achieve their full potential by ensuring financial health, technical efficiency, productivity and operability for sustainable growth.",
      icon: <TrendingUp className="w-8 h-8" />,
      image: "https://www.avconexpo.com/assets/img/service/reviving%20image.avif",
      tag: "Revival"
    },
    {
      title: "Startup accelerator",
      description: "Vision to Venture— we empower startups with strategy, structure, business-technical expertise, and market access for rapid, sustainable growth.",
      icon: <Rocket className="w-8 h-8" />,
      image: "https://www.avconexpo.com/assets/img/service/planingfactory1.png",
      tag: "Growth"
    },
    {
      title: "Waste management",
      description: "Waste to Wealth— We offer our state-of-the-art Energy Recovery Technology (ERT) to simplify processes, requiring no segregation while delivering efficiency and environmental sustainability.",
      icon: <Recycle className="w-8 h-8" />,
      image: "https://www.avconexpo.com/assets/img/service/Waste%20and%20wastewater.webp",
      tag: "Sustainability"
    },
    {
      title: "Agro Value Chain",
      description: "We assist in developing advanced agricultural systems, sustainable horticultural ventures, and eco-tourism destinations that create wealth, preserve the environment, and empower communities.",
      icon: <Sprout className="w-8 h-8" />,
      image: "https://www.avconexpo.com/assets/img/Agro_Value_Chain.jpg",
      tag: "Agro"
    },
    {
      title: "Talent Management Services",
      description: "We empower industries by building organisational framework, managing human resources, workforce training & development, aligning with the goals of the organisation.",
      icon: <UserCheck className="w-8 h-8" />,
      image: "https://www.avconexpo.com/assets/img/Talent-Management-Services.jpg",
      tag: "Human Capital"
    },
    {
      title: "Supply-Chain Management",
      description: "We manage the entire supply chain, including trade financing, vendor management, and logistics, to ensure quality, compliance, time management, and cost-efficiency.",
      icon: <Truck className="w-8 h-8" />,
      image: "https://www.avconexpo.com/assets/img/Supply_Chain_Management.jpg",
      tag: "Logistics"
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
            <Settings className="w-3 h-3" />
            Our Services
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">End-to-End Industrial Solutions</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Expert Business and Technical consultancy delivering excellence from concept to consumer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-100 transition-all duration-300 overflow-hidden flex flex-col"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-brand-primary shadow-sm">
                  {React.cloneElement(service.icon as React.ReactElement, { className: "w-6 h-6" })}
                </div>
              </div>
              
              <div className="p-8 flex-grow flex flex-col">
                <div className="text-xs font-bold text-brand-primary uppercase tracking-wider mb-3">{service.tag}</div>
                <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors">{service.title}</h4>
                <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-brand-primary transition-colors">
                    Read more <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  return (
    <section className="py-20 bg-brand-primary relative overflow-hidden">
      {/* Background Achievement Circle */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/4 opacity-10 pointer-events-none">
        <motion.img 
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          src="https://www.avconexpo.com/assets/img/achievement/achievement-circle.png" 
          className="w-[600px]" 
          alt="" 
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <img src="https://img.icons8.com/ios-filled/50/FFFFFF/worldwide-location--v1.png" className="w-10 h-10" alt="Countries" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">Countries</div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <img src="https://img.icons8.com/external-flatart-icons-solid-flatarticons/64/FFFFFF/external-star-success-flatart-icons-solid-flatarticons.png" className="w-10 h-10" alt="Experience" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">30+</div>
              <div className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">Years of industry experience</div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-6"
          >
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
              <img src="https://img.icons8.com/comic/100/FFFFFF/facebook-like.png" className="w-12 h-12" alt="Expertise" referrerPolicy="no-referrer" />
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">Expertise</div>
              <div className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">In industrial solutions</div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a href="#about" className="inline-flex items-center gap-3 text-white font-bold text-xl group hover:text-white/80 transition-all">
            AVCONEXPO - Learn More About Us
            <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-brand-primary transition-all">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img 
                src="https://www.avconexpo.com/assets/img/factoryOuter.jpg" 
                alt="Engineering" 
                className="rounded-2xl h-64 w-full object-cover mt-12"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=500";
                }}
              />
              <img 
                src="https://www.avconexpo.com/assets/img/service/power-plant.jpg" 
                alt="Consultancy" 
                className="rounded-2xl h-64 w-full object-cover"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1454165833767-027ffea9e778?auto=format&fit=crop&q=80&w=500";
                }}
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-primary rounded-full flex flex-col items-center justify-center text-white shadow-2xl border-8 border-slate-50 text-center p-2">
              <div className="text-2xl font-bold leading-none">25+</div>
              <div className="text-[10px] font-bold uppercase tracking-tighter leading-tight">Years</div>
              <div className="text-[10px] font-bold uppercase tracking-tighter leading-tight">Experience</div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">About AVCONEXPO</h2>
            <h3 className="text-4xl font-bold text-brand-primary mb-6 leading-tight">
              A Global Leader in Engineering & Technical Consultancy
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              AVCONEXPO is an Engineering-Technology, Supply-Chain Management, Architecture-Design, and industrial solution company, delivering comprehensive services across industries.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              We take pride in offering Business and Technical solutions through a professional team of Consultants, Technologists, Engineers, Architects, Energy Conservators, System/Process Engineers, and other Professionals.
            </p>
            
            <div className="space-y-4">
              {[
                "End-to-end solutions from Concept to Consumer",
                "Professional team of multi-disciplinary experts",
                "Global reach with local execution capabilities",
                "Commitment to innovation and sustainability"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const roles = [
    { name: "Consultants", icon: <Users className="w-5 h-5" /> },
    { name: "Technologists", icon: <Cpu className="w-5 h-5" /> },
    { name: "Engineers", icon: <Settings className="w-5 h-5" /> },
    { name: "Architects", icon: <Building2 className="w-5 h-5" /> },
    { name: "Energy Conservators", icon: <Zap className="w-5 h-5" /> },
    { name: "Process Engineers", icon: <Factory className="w-5 h-5" /> },
  ];

  return (
    <section id="expertise" className="py-20 lg:py-32 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-xs lg:text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Our Expertise</h2>
            <h3 className="text-3xl lg:text-5xl font-bold mb-6 lg:mb-8 leading-tight">
              Driven by a Team of <br className="hidden lg:block" /> Elite Professionals
            </h3>
            <p className="text-slate-300 mb-10 lg:mb-12 leading-relaxed text-base lg:text-lg max-w-2xl mx-auto lg:mx-0">
              Our strength lies in our diverse team of specialists who bring decades of collective experience to every project. We don't just consult; we partner with you to build the future of industry.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 text-left">
              {roles.map((role, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className="text-brand-primary group-hover:scale-110 transition-transform">{role.icon}</div>
                  <span className="font-medium text-sm lg:text-base">{role.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-16 lg:mt-0 flex justify-center">
            {/* Decorative Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-brand-primary/10 blur-[100px] rounded-full" />
            
            <div className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none aspect-square rounded-full border border-white/10 p-6 sm:p-12 flex items-center justify-center relative z-10">
              <div className="aspect-square rounded-full border border-white/20 p-6 sm:p-12 flex items-center justify-center w-full">
                <div className="aspect-square rounded-full bg-brand-primary/20 flex items-center justify-center w-full relative">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0"
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 lg:w-14 lg:h-14 bg-brand-primary rounded-full flex items-center justify-center shadow-2xl shadow-brand-primary/50">
                      <Lightbulb className="w-5 h-5 lg:w-7 lg:h-7" />
                    </div>
                  </motion.div>
                  <div className="text-center p-4 lg:p-8">
                    <div className="text-4xl lg:text-6xl font-bold mb-1 lg:mb-2">100%</div>
                    <div className="text-[10px] lg:text-xs uppercase tracking-[0.2em] text-brand-primary font-bold">Client Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Sectors = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const scroll = React.useCallback((direction: 'left' | 'right') => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth } = containerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      containerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        // If we're near the end, scroll back to start
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scroll('right');
        }
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [scroll]);

  const sectors = [
    {
      title: "Utilities & Infrastructure",
      description: "We assist industrial clients with designing and implementing of utility infrastructure that supports sustainable, uninterrupted operations, including boilers, chillers, air compressors, HVAC, steam systems, and electrical distribution.",
      image: "https://www.avconexpo.com/assets/img/service/utilities.jpg"
    },
    {
      title: "Water & Wastewater Treatment",
      description: "From ETPs and STPs to Zero Liquid Discharge (ZLD) systems and water recycling plants, we ensure compliance, water conservation, and operational efficiency for your facility.",
      image: "https://www.avconexpo.com/assets/img/service/Waste%20and%20wastewater.webp"
    },
    {
      title: "Power Plant",
      description: "We specialize in biomass, waste-to-energy, and cogeneration solutions that improve energy self-reliance and reduce carbon footprint.",
      image: "https://www.avconexpo.com/assets/img/service/power-plant.jpg"
    },
    {
      title: "Agro Processing",
      description: "We provide consulting across the agricultural value chain: grain milling, oilseed crushing, fruits, vegetables, pulses, and spices. Our expertise covers post-harvest handling, cold storage, drying, and packaging systems that preserve quality and reduce waste.",
      image: "https://www.avconexpo.com/assets/img/service/Agro_Processing.jpg"
    },
    {
      title: "FMCG",
      description: "We consult for a broad range of FMCG manufacturing units, from food and beverages to personal care and home products. Our team assists in turnkey project execution, scaling production, improving packaging lines, and introducing automation to meet market demand and maintain quality at high volumes.",
      image: "https://www.avconexpo.com/assets/img/service/segment-fmcg.jpg"
    },
    {
      title: "Packaging Industry",
      description: "From plastic moulding to box making and print finishing, our consulting spans machine selection, production flow optimisation, and automation.",
      image: "https://www.avconexpo.com/assets/img/service/packaging%20industry.jpg"
    },
    {
      title: "Paper Industry",
      description: "From pulp preparation to paper finishing, our expertise includes recycled paper plants, kraft process design, deinking lines, and effluent treatment.",
      image: "https://www.avconexpo.com/assets/img/service/paper%20and%20pulp%20industry.jpg"
    },
    {
      title: "Sugar & Distillery",
      description: "We support sugar and distillery plants with complete turnkey solutions from process design to commissioning. Our expertise spans raw sugar production, refined sugar plants, ethanol and biofuel distilleries, and cogeneration systems.",
      image: "https://www.avconexpo.com/assets/img/service/sugar%20sector.jpg"
    },
    {
      title: "Cement Industry",
      description: "We provide engineering and project consulting for cement plants — greenfield and brownfield. From raw material handling to clinker production and grinding systems, our services help you build plants that are robust, scalable, and energy-efficient.",
      image: "https://www.avconexpo.com/assets/img/service/cement%20industry.jpg"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
              <img src="https://www.avconexpo.com/assets/img/icon/subTitleIcon.svg" className="w-4 h-4" alt="" />
              Sectors
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-brand-primary">Sectors We Specialize In</h3>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6 rotate-180" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 bg-white flex items-center justify-center text-brand-primary hover:bg-brand-primary hover:text-white transition-all shadow-sm"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div 
          ref={containerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sectors.map((sector, idx) => (
            <motion.div
              key={idx}
              className="min-w-[300px] md:min-w-[400px] snap-start"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={sector.image} 
                    alt={sector.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h4 className="text-xl font-bold text-white leading-tight">{sector.title}</h4>
                  </div>
                </div>
                <div className="p-8 flex-grow">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {sector.description}
                  </p>
                </div>
                <div className="px-8 pb-8">
                  <button className="text-brand-primary font-bold text-sm flex items-center gap-2 group/btn">
                    Explore Sector
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Clients = () => {
  const logos = [
    { src: "https://www.avconexpo.com/assets/img/brand/pcs.jpeg", alt: "PCS" },
    { src: "https://www.avconexpo.com/assets/img/brand/stateofquater.jpeg", alt: "State of Qatar" },
    { src: "https://www.avconexpo.com/assets/img/brand/tetra.jpeg", alt: "Tetra" },
    { src: "https://www.avconexpo.com/assets/img/brand/thermax.jpeg", alt: "Thermax" },
    { src: "https://www.avconexpo.com/assets/img/brand/1.png", alt: "Logo 1" },
    { src: "https://www.avconexpo.com/assets/img/brand/2.png", alt: "Logo 2" },
    { src: "https://www.avconexpo.com/assets/img/brand/3.png", alt: "Logo 3" },
    { src: "https://www.avconexpo.com/assets/img/brand/4.png", alt: "Logo 4" },
    { src: "https://www.avconexpo.com/assets/img/brand/5.png", alt: "Logo 5" },
    { src: "https://www.avconexpo.com/assets/img/brand/6.png", alt: "Logo 6" },
    { src: "https://www.avconexpo.com/assets/img/brand/7.png", alt: "Logo 7" },
    { src: "https://www.avconexpo.com/assets/img/brand/8.png", alt: "Logo 8" },
    { src: "https://www.avconexpo.com/assets/img/brand/abb.jpeg", alt: "ABB" },
    { src: "https://www.avconexpo.com/assets/img/brand/al_jaber.jpeg", alt: "Al Jaber" },
    { src: "https://www.avconexpo.com/assets/img/brand/alfa.jpeg", alt: "Alfa" },
    { src: "https://www.avconexpo.com/assets/img/brand/atlas.jpeg", alt: "Atlas" },
    { src: "https://www.avconexpo.com/assets/img/brand/forbes.jpeg", alt: "Forbes" },
    { src: "https://www.avconexpo.com/assets/img/brand/milindia.jpeg", alt: "Milindia" },
    { src: "https://www.avconexpo.com/assets/img/brand/parivartan.jpeg", alt: "Parivartan" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden border-y border-slate-100 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40" 
           style={{ backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 border border-orange-100 text-brand-primary text-xs font-bold uppercase tracking-widest mb-4">
          Partnerships
        </div>
        <h3 className="text-3xl font-bold text-brand-primary">Clients & Partners</h3>
      </div>
      
      <div className="relative flex overflow-hidden group z-10">
        {/* Left Blur/Fade Overlay */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none" />
        
        {/* Right Blur/Fade Overlay */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <div className="flex animate-marquee whitespace-nowrap py-8">
          {logos.map((logo, idx) => (
            <div key={idx} className="mx-10 md:mx-16 w-48 h-24 md:w-72 md:h-36 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:drop-shadow-2xl bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200/50 p-6 md:p-8 shadow-sm">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback for broken images
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${idx}/400/200`;
                }}
              />
            </div>
          ))}
        </div>
        {/* Duplicate track for seamless loop */}
        <div className="flex animate-marquee whitespace-nowrap py-8" aria-hidden="true">
          {logos.map((logo, idx) => (
            <div key={`dup-${idx}`} className="mx-10 md:mx-16 w-48 h-24 md:w-72 md:h-36 flex items-center justify-center transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:drop-shadow-2xl bg-white/60 backdrop-blur-md rounded-2xl border border-slate-200/50 p-6 md:p-8 shadow-sm">
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="max-h-full max-w-full object-contain filter drop-shadow-sm"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${idx}/400/200`;
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ t }: { t: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;
  const isLongText = t.text.length > maxLength;

  return (
    <div className="bg-white p-10 rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] border border-slate-100 h-full flex flex-col group hover:shadow-[0_20px_60px_-20px_rgba(253,126,20,0.15)] hover:border-orange-100 transition-all duration-500 min-h-[420px]">
      <div className="flex gap-1 mb-8">
        {[...Array(t.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-brand-primary text-brand-primary" />
        ))}
      </div>
      
      <div className="relative mb-10 flex-grow flex flex-col">
        <Quote className="absolute -top-6 -left-6 w-16 h-16 text-slate-50 group-hover:text-orange-50 transition-colors duration-500 -z-10" />
        <div className="relative z-10 flex-grow">
          <p className={cn(
            "text-slate-700 leading-relaxed italic text-lg font-medium transition-all duration-300",
            !isExpanded && isLongText ? "line-clamp-4" : ""
          )}>
            "{t.text}"
          </p>
          {isLongText && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
              className="mt-4 text-brand-primary font-bold text-sm hover:underline flex items-center gap-1 group/btn relative z-20"
            >
              {isExpanded ? 'Show Less' : 'Read More'}
              <ChevronRight className={cn("w-4 h-4 transition-transform", isExpanded ? "rotate-90" : "group-hover:translate-x-0.5")} />
            </button>
          )}
        </div>
      </div>

      <div className="flex items-center gap-5 pt-8 border-t border-slate-50 mt-auto">
        <div className="relative">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-md group-hover:scale-110 transition-transform duration-500">
            <img 
              src={t.image} 
              alt={t.imageAlt} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${t.name}/150/150`;
              }}
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center text-white shadow-lg border-2 border-white">
            <CheckCircle2 className="w-3 h-3" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-brand-primary text-lg group-hover:text-brand-primary transition-colors">{t.name}</h4>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Verified Partner</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nandita Rawat",
      text: "AVCONEXPO exceeded our expectations with their turnkey project solutions. The team's technical expertise and attention to detail made our entire plant setup seamless and efficient.",
      rating: 5,
      image: "https://www.avconexpo.com/admin/testimonials_uploads/reviewer_1.jpg",
      imageAlt: "Nandita Rawat - Client Testimonial"
    },
    {
      name: "Tejasv Sahu",
      text: "Highly professional team with deep knowledge of industrial solutions. They delivered our boiler installation project before the deadline with outstanding quality.",
      rating: 5,
      image: "https://www.avconexpo.com/admin/testimonials_uploads/reviewer_2.jpg",
      imageAlt: "Tejasv Sahu - Client Testimonial"
    },
    {
      name: "Ellis William",
      text: "Their piping and utility services played a crucial role in our factory's expansion. The dedication and quality of work truly set them apart.",
      rating: 5,
      image: "https://www.avconexpo.com/admin/testimonials_uploads/reviewer_3.jpg",
      imageAlt: "Ellis William - Client Testimonial"
    },
    {
      name: "Yahya Shakiru",
      text: "I started with Avconexpo for a feasibility study, but the scope quickly grew into much more. They supported the project end-to-end - from concept and planning to technical decisions and execution support. What stood out was how seamlessly they handled the entire journey, not just one phase of it.",
      rating: 5,
      image: "https://www.avconexpo.com/admin/testimonials_uploads/img_6999bf7c593016.87778593.jpg",
      imageAlt: "Yahya Shakiru - Client Testimonial"
    },
    {
      name: "Willy Mekombo",
      text: "I didn’t realize how much money I was losing every day. The inefficiencies were there, but I couldn’t see them. Avconexpo’s energy audit exposed exactly where profits were leaking and what needed to be fixed. It was a wake-up call that directly improved my operations.",
      rating: 5,
      image: "https://www.avconexpo.com/admin/testimonials_uploads/img_6999c42937bd24.85209509.jpeg",
      imageAlt: "Willy Mekombo - Client Testimonial"
    },
    {
      name: "John Boscow",
      text: "For our 100 TPD edible oil project, Avconexpo delivered a true scratch-to-shelf solution. Their EPC expertise, combined with 20-25 years of deep understanding of African markets, made a real difference in execution and decision-making. Without doubt, they are among the best EPC consultants we have worked with.",
      rating: 5,
      image: "https://www.avconexpo.com/admin/testimonials_uploads/img_6999c5948429a0.42404125.jpeg",
      imageAlt: "John Boscow - Client Testimonial"
    },
    {
      name: "Abdul Ghani",
      text: "Avconexpo streamlined our entire supply chain - from sourcing and procurement to logistics. Their due diligence on quality and vendors saved us significant time and prevented costly mistakes. What stood out was how smoothly they handled complex coordination, while maintaining reliability and transparency.",
      rating: 5,
      image: "https://www.avconexpo.com/admin/testimonials_uploads/img_6999c6305f2d80.06314392.jpeg",
      imageAlt: "Abdul Ghani - Client Testimonial"
    },
    {
      name: "Ahmed Maalim",
      text: "When my industry was struggling, Avconexpo became my lifeline. They stepped in at a critical time and helped revive the plant - technically, operationally, and strategically. Their support didn’t just fix problems; it brought the industry back to life.",
      rating: 5,
      image: "https://www.avconexpo.com/admin/testimonials_uploads/img_6999c685786531.86042788.jpeg",
      imageAlt: "Ahmed Maalim - Client Testimonial"
    }
  ];

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern and Gradients */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-orange-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-slate-200/30 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
              Clients Feedback
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-primary tracking-tight leading-tight">
              Delivering Excellence, <br />
              <span className="text-brand-primary italic font-serif">Reflected By Our Clients</span>
            </h2>
          </div>
          
          <div className="flex gap-4">
            <button className="swiper-prev-btn w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 bg-white shadow-sm group">
              <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button className="swiper-next-btn w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-brand-primary hover:text-brand-primary hover:bg-brand-primary/5 transition-all duration-300 bg-white shadow-sm group">
              <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Side Blur Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none hidden xl:block" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none hidden xl:block" />

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            autoHeight={true}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
            navigation={{
              nextEl: '.swiper-next-btn',
              prevEl: '.swiper-prev-btn',
            }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-20 !px-4"
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <TestimonialCard t={t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        <div className="swiper-custom-pagination flex justify-center gap-3 mt-8" />
      </div>
      
      <style>{`
        .swiper-custom-pagination .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #e2e8f0;
          opacity: 1;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border-radius: 5px;
          cursor: pointer;
        }
        .swiper-custom-pagination .swiper-pagination-bullet-active {
          width: 32px;
          background: #fd7e14;
          box-shadow: 0 4px 10px -2px rgba(253, 126, 20, 0.3);
        }
      `}</style>
    </section>
  );
};

const Blog = () => {
  const blogs = [
    {
      title: "Sustainable Energy Solutions For 2026",
      description: "Exploring the future of renewable energy and its integration into industrial plant setups for a greener tomorrow.",
      image: "https://www.avconexpo.com/blog/blog_uploads/business%20technical%20consultants%20in%20kenya%20avconexpo.jpeg",
      imageAlt: "Sustainable Energy Solutions for 2026",
      link: "https://www.avconexpo.com/blog/sustainable-energy-solutions-2026",
      date: "March 15, 2026",
      author: "Energy Team"
    },
    {
      title: "Business Technical Consultants In Kenya—Why Avconexpo Is Your Growth Partner",
      description: "How specialized technical consultancy is driving industrial growth in the Kenyan market and beyond.",
      image: "https://www.avconexpo.com/blog/blog_uploads/site6.jpg",
      imageAlt: "Business Technical Consultants in Kenya—Why Avconexpo Is Your Growth Partner",
      link: "https://www.avconexpo.com/blog/business-technical-consultants-kenya",
      date: "March 10, 2026",
      author: "Consultancy Desk"
    },
    {
      title: "Industrial Plant Setup & Consultancy In Africa | Avconexpo",
      description: "A comprehensive guide to setting up industrial plants in Africa, covering feasibility, EPC, and operational support.",
      image: "https://www.avconexpo.com/blog/blog_uploads/industrial-plant-setup-consultancy-africa.jpeg",
      imageAlt: "Industrial Plant Setup & Consultancy in Africa | Avconexpo",
      link: "https://www.avconexpo.com/blog/industrial-plant-setup-consultancy-africa",
      date: "March 05, 2026",
      author: "Project Management"
    }
  ];

  return (
    <section id="blog" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
            Our Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
            Our Latest <span className="text-brand-primary">Blog</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-slate-50 rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-500 flex flex-col h-full"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.imageAlt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${blog.title}/800/600`;
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-brand-primary text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Industrial
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {blog.date}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5" />
                    {blog.author}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-brand-primary transition-colors line-clamp-2 leading-tight">
                  {blog.title}
                </h3>
                
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {blog.description}
                </p>

                <div className="mt-auto">
                  <a 
                    href={blog.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-primary font-bold text-sm group/link"
                  >
                    Read Full Article
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-slate-900 rounded-[3rem] p-8 lg:p-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-bold text-brand-primary uppercase tracking-[0.2em] mb-4">Get in Touch</h2>
              <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Ready to Start Your Next Project?
              </h3>
              <p className="text-slate-400 text-lg mb-8">
                Contact our team of experts today for a comprehensive consultation on your industrial needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-primary">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Global Headquarters</div>
                    <div className="text-slate-400 text-sm">International Business Hub</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-brand-primary">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Certified Solutions</div>
                    <div className="text-slate-400 text-sm">ISO 9001:2015 Compliant</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              {/* Decorative Blobs for Glassmorphism */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-primary/20 rounded-full blur-[80px] animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-orange-500/10 rounded-full blur-[80px] animate-pulse delay-700" />

              <div className="bg-white/10 backdrop-blur-xl rounded-[2.5rem] p-8 lg:p-12 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative z-10">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/80 ml-1">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-brand-primary focus:bg-white/10 outline-none transition-all duration-300" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-white/80 ml-1">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-brand-primary focus:bg-white/10 outline-none transition-all duration-300" 
                        placeholder="john@company.com" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 ml-1">Project Type</label>
                    <select className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-brand-primary focus:bg-white/10 outline-none transition-all duration-300 appearance-none cursor-pointer">
                      <option className="bg-slate-900">Greenfield Project</option>
                      <option className="bg-slate-900">Brownfield Expansion</option>
                      <option className="bg-slate-900">Technical Consultancy</option>
                      <option className="bg-slate-900">Supply Chain Management</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-white/80 ml-1">Message</label>
                    <textarea 
                      rows={4} 
                      className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:ring-2 focus:ring-brand-primary focus:bg-white/10 outline-none transition-all duration-300 resize-none" 
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  <button className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold hover:bg-white hover:text-brand-primary transition-all duration-500 shadow-xl shadow-brand-primary/20 group flex items-center justify-center gap-2">
                    Send Inquiry
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://www.avconexpo.com/assets/img/logo/brand-logo.png" 
                alt="AVCONEXPO Logo" 
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium italic">
              Serving Clients Worldwide
            </p>
            <p className="text-slate-400 text-xs leading-relaxed">
              Engineering-Technology, Supply-Chain Management, and Architecture-Design consultancy firm delivering comprehensive services across industries.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-brand-primary mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#" className="hover:text-brand-primary transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-brand-primary transition-colors">Contact Us</a></li>
              <li><a href="#services" className="hover:text-brand-primary transition-colors">Our Services</a></li>
              <li><a href="#sectors" className="hover:text-brand-primary transition-colors">Projects</a></li>
              <li><a href="#blog" className="hover:text-brand-primary transition-colors">Our Blogs</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Career</a></li>
            </ul>
          </div>

          <div className="col-span-1 lg:col-span-2">
            <h4 className="font-bold text-brand-primary mb-6">Contact Us</h4>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-brand-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Address</h5>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Pocket 1, 171, Golf City, Sector D,<br />
                    Bagiamau, Lucknow, Uttar Pradesh 226030
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-brand-primary shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Phone</h5>
                    <div className="text-sm text-slate-500 space-y-1">
                      <p>+91-7007729873</p>
                      <p>+91-7860563231</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-brand-primary shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Email</h5>
                    <p className="text-sm text-slate-500">consult@avconexpo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400">
          <p>© 2026 AVCONEXPO. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Achievements />
        <About />
        <Expertise />
        <Sectors />
        <Clients />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
