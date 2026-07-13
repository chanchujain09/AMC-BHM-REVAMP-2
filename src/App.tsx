import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Mail, GraduationCap, CheckCircle2, ChevronRight, Plus, Building, ChefHat, Plane, Calendar, Globe, Quote, Lightbulb, Target, Users, BookOpen, MapPin, Phone, ArrowUp, Headphones, ChevronLeft, Star, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { PrimaryCard, SecondaryCard, ImageCard } from './components/Cards';

interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function CountUp({ end, duration = 2000, suffix = "" }: CountUpProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      const easeProgress = progress * (2 - progress);
      setCount(Math.floor(easeProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <span ref={elementRef}>{count.toLocaleString()}{suffix}</span>;
}

interface ProgramCardProps {
  title: string;
  description: string;
  bullets: string[];
  imageSrc: string;
}

function ProgramCard({ title, description, bullets, imageSrc }: ProgramCardProps) {
  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(22,29,74,0.08)] border border-gray-100/90 overflow-hidden flex flex-col h-full transition-all duration-300 hover:-translate-y-1.5 group">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-50 shrink-0">
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[1.04] saturate-[0.9] contrast-[1.01]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl md:text-2xl font-bold text-[#161D4A] mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-[#5B6475] text-[13.5px] md:text-sm leading-relaxed mb-6 font-medium">
          {description}
        </p>
        <ul className="space-y-3 mb-8 flex-grow">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-[13px] md:text-sm text-[#5B6475] font-semibold leading-relaxed">
              <CheckCircle2 className="w-4 h-4 text-[#FED304] mt-0.5 shrink-0" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <div className="pt-5 border-t border-gray-100 mt-auto">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#161D4A] hover:text-[#FED304] transition-all duration-200 group/btn"
          >
            <span className="relative">
              Read more
              <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#FED304] origin-left scale-x-0 transition-transform duration-300 group-hover/btn:scale-x-100" />
            </span>
            <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['placements', 'accreditations', 'pain-point', 'overview', 'why-choose-us', 'experience', 'industry-exposure', 'careers', 'testimonials', 'campus-life'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection('#' + section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy();
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  // Enquiry Form State
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    course: 'BHM',
    city: ''
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const handleEnquirySubmit = (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);
    if (!enquiryForm.fullName.trim() || !enquiryForm.phone.trim() || !enquiryForm.email.trim() || !enquiryForm.course || !enquiryForm.city.trim()) {
      setFormError("Please fill out all required fields to complete your booking.");
      return;
    }
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleResetForm = () => {
    setEnquiryForm({
      fullName: '',
      phone: '',
      email: '',
      course: 'BHM',
      city: ''
    });
    setFormError(null);
    setIsSubmitted(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-[#FED304] selection:text-[#161D4A] bg-white flex flex-col">
      {/* Top Bar - Academic style matching reference */}
      <div className="bg-[#161D4A] text-white text-xs py-2.5 px-4 md:px-8 flex justify-between items-center z-50 relative border-b border-white/10">
        <div className="hidden md:block font-medium tracking-wide">AMC Degree College | Bangalore Campus</div>
        <div className="flex gap-4 md:gap-6 ml-auto">
          <a href="mailto:admissions@amceducation.in" className="flex items-center gap-1 text-[#ADDDF1] hover:text-white transition-colors"><Mail className="w-3.5 h-3.5" /> admissions@amceducation.in</a>
          <a href="tel:+919902044114" className="flex items-center gap-1 text-[#ADDDF1] hover:text-white transition-colors"><Phone className="w-3.5 h-3.5" /> +91 99020 44114</a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 transition-all duration-300 flex items-center border-b ${
        isScrolled 
          ? 'bg-[#161D4A]/95 backdrop-blur-md h-12 md:h-14 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.2)]' 
          : 'bg-transparent h-14 md:h-16 border-b-transparent'
      }`}>
        {/* Angled White Background for Logo */}
        <div 
          className="absolute left-0 top-0 h-full w-80 md:w-[42rem] bg-white shadow-xl transition-all duration-300"
          style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
        />
        
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-10">
          {/* Logo */}
          <div className="flex flex-col justify-center pt-1 -ml-2 md:-ml-4">
            <img 
              src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_476,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png" 
              alt="AMC Degree College Logo" 
              className={`object-contain -translate-x-2 md:-translate-x-4 transition-all duration-300 ${
                isScrolled ? 'h-9 md:h-11' : 'h-11 md:h-13'
              }`}
            />
          </div>
          
          
          {/* Mobile Menu Trigger */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden bg-white text-[#161D4A] px-3.5 py-1.5 rounded-[10px] shadow-md uppercase text-[11px] font-extrabold flex items-center gap-1.5 hover:bg-gray-50 border border-[#E7EBF3] transition-all duration-200 relative z-50"
          >
            <span>{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
            {isMobileMenuOpen ? <X className="w-3.5 h-3.5 text-[#161D4A]" /> : <Menu className="w-3.5 h-3.5 text-[#161D4A]" />}
          </button>
        </div>

        {/* Mobile Dropdown Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-[#161D4A]/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Dropdown Menu Drawer */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 w-full bg-[#161D4A]/98 backdrop-blur-xl border-b border-white/10 shadow-2xl py-6 px-5 flex flex-col gap-6 lg:hidden z-50"
          >
            <div className="flex flex-col gap-1">
               {[
                { name: 'Programs', href: '#overview' },
                { name: 'Why AMC', href: '#why-choose-us' },
                { name: 'Experience', href: '#experience' },
                { name: 'Exposure', href: '#industry-exposure' },
                { name: 'Careers', href: '#careers' },
                { name: 'Social Proof', href: '#testimonials' },
                { name: 'Campus Life', href: '#campus-life' },
              ].map((link) => {
                const isActive = activeSection === link.href;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xs font-bold uppercase tracking-wider py-3 border-b border-white/5 transition-colors flex items-center justify-between ${
                      isActive ? 'text-[#FED304]' : 'text-white/90 hover:text-[#FED304]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[#FED304]" />
                  </a>
                );
              })}
            </div>

            <div className="flex flex-col gap-2.5 bg-white/5 p-4 rounded-xl border border-white/10 text-white/70 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FED304]" />
                <span>+91 99020 44114</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FED304]" />
                <span>admissions@amceducation.in</span>
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-[#FED304] hover:bg-[#FED304]/90 text-[#161D4A] py-3.5 rounded-2xl text-center text-xs font-extrabold uppercase tracking-widest shadow-[0_12px_40px_rgba(254,211,4,0.2)] active:scale-[0.98] transition-all duration-300 w-full flex items-center justify-center gap-2"
            >
              <span>Enquire Now</span>
              <ChevronRight className="w-4 h-4 text-[#161D4A]" />
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero Section Container */}
      <div className="relative -mt-14 md:-mt-16 flex-1 flex flex-col min-h-[90vh]">
        {/* Background Image with Clean Premium Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://i.postimg.cc/0N63T7K4/hero-amc.webp" 
            alt="Hospitality Management at AMC" 
            className="w-full h-full object-cover object-[75%_center] scale-105 filter brightness-[1.05] saturate-[0.88] contrast-[1.01]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#161D4A] via-[#161D4A]/90 to-[#161D4A]/25" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(22,29,74,0.4)_0%,transparent_70%)]" />
          <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#161D4A] to-transparent opacity-50" />
        </div>

        {/* Hero Content Area */}
        <main className="relative z-10 flex-1 flex flex-col justify-center pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-7/12 xl:w-[62%]"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 mb-8">
                <GraduationCap className="w-4 h-4 text-[#FED304]" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-white">AMC Degree College • Bangalore Campus</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
                Build Your Future in <br/>
                <span className="text-[#FED304] relative inline-block italic font-semibold">
                  Hospitality
                  <span className="absolute left-0 right-0 bottom-1.5 h-1.5 bg-[#FED304]/20 -z-10 rounded-full" />
                </span> at AMC
              </h1>
              
              <p className="text-base md:text-[19px] text-[#ADDDF1] mb-10 max-w-2xl leading-relaxed font-light">
                Start your Bachelor of Hotel Management (BHM) journey at AMC Degree College, a leading hotel management college in Bangalore, with industry-focused training, practical exposure, and strong career support.
              </p>
              
              {/* Value Points */}
              <div className="space-y-4 mb-10">
                {[
                  "Industry-focused hotel management courses",
                  "Practical training in kitchens, service, and hotel operations",
                  "Internship exposure with leading hospitality brands",
                  "Career support for hospitality roles in India and globally"
                ].map((point, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#FED304]/10 border border-[#FED304]/30 flex items-center justify-center shrink-0 group-hover:bg-[#FED304] group-hover:border-[#FED304] transition-all duration-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FED304] group-hover:text-[#161D4A] transition-colors" />
                    </div>
                    <span className="text-gray-100 text-[16px] md:text-[17px] leading-relaxed font-light">{point}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a 
                  href="#overview" 
                  className="inline-flex items-center gap-2 bg-[#FED304] hover:bg-[#FED304]/90 text-[#161D4A] px-6 py-3.5 rounded-[12px] text-xs font-bold uppercase tracking-wider transition-all duration-300"
                >
                  <span>Explore Curriculum</span>
                  <ChevronRight className="w-4 h-4 text-[#161D4A]" />
                </a>
                <div className="flex items-center gap-2 text-xs text-gray-300 ml-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span>Admissions Active for 2026 Batch</span>
                </div>
              </div>

              {/* Trust Signals bar */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center gap-y-3 gap-x-6 text-[11px] uppercase tracking-wider text-gray-400 font-bold">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#FED304] text-xs">★</span>
                  <span>NAAC Accredited</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <span className="text-[#FED304] text-xs">★</span>
                  <span>Bangalore University Affiliated</span>
                </div>
                <div className="w-1 h-1 bg-white/20 rounded-full hidden md:block" />
                <div className="flex items-center gap-1.5">
                  <span className="text-[#FED304] text-xs">★</span>
                  <span>AICTE Approved</span>
                </div>
              </div>
            </motion.div>

            {/* Right Content: Lead Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-5/12 xl:w-[38%] max-w-md mx-auto lg:mx-0"
            >
              <div className="bg-[#161D4A]/40 backdrop-blur-xl rounded-[24px] shadow-[0_24px_50px_rgba(0,0,0,0.3)] p-8 relative overflow-hidden transition-all duration-500">
                
                <div className="mb-6">
                  <h3 className="text-2xl lg:text-[25px] font-extrabold text-white tracking-tight mb-2">Free Hospitality Career Counseling Session</h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">Register for a free career counseling session with AMC Admission experts.</p>
                </div>
                
                <form className="space-y-4" onSubmit={handleEnquirySubmit}>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      value={enquiryForm.fullName}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                      className="w-full px-4 h-12 rounded-[12px] bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/15 focus:border-[#FED304] text-white outline-none transition-all placeholder:text-gray-400 text-sm font-light focus:ring-1 focus:ring-[#FED304]" 
                      required 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider">Phone Number *</label>
                    <input 
                      type="tel" 
                      placeholder="Phone" 
                      value={enquiryForm.phone}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                      className="w-full px-4 h-12 rounded-[12px] bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/15 focus:border-[#FED304] text-white outline-none transition-all placeholder:text-gray-400 text-sm font-light focus:ring-1 focus:ring-[#FED304]" 
                      required 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider">City *</label>
                    <input 
                      type="text" 
                      placeholder="City" 
                      value={enquiryForm.city}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, city: e.target.value })}
                      className="w-full px-4 h-12 rounded-[12px] bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/15 focus:border-[#FED304] text-white outline-none transition-all placeholder:text-gray-400 text-sm font-light focus:ring-1 focus:ring-[#FED304]" 
                      required 
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[11px] font-semibold text-gray-300 uppercase tracking-wider">Course Interest *</label>
                    <div className="relative">
                      <select 
                        value={enquiryForm.course}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, course: e.target.value })}
                        className="w-full px-4 h-12 rounded-[12px] bg-white/5 hover:bg-white/10 focus:bg-white/10 border border-white/15 focus:border-[#FED304] text-white outline-none transition-all appearance-none cursor-pointer text-sm font-light focus:ring-1 focus:ring-[#FED304]" 
                        required
                      >
                        <option value="BHM" className="bg-[#161D4A] text-white">Bachelor of Hotel Management (BHM)</option>
                      </select>
                      <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-300">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      className="w-full bg-[#FED304] hover:bg-[#FED304]/90 active:scale-[0.98] text-[#161D4A] font-extrabold h-14 rounded-2xl shadow-[0_12px_40px_rgba(254,211,4,0.25)] hover:shadow-[0_12px_40px_rgba(254,211,4,0.4)] transition-all uppercase tracking-wider flex items-center justify-center gap-2.5 text-xs"
                    >
                      <GraduationCap className="w-5 h-5 shrink-0" />
                      <span>Admissions Open — Apply Now</span>
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Placements Section (Section 1 in the PDF alignment) */}
      <section className="py-24 bg-white border-b border-[#E7EBF3]" id="placements">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="text-[11px] font-extrabold text-[#161D4A]/60 uppercase tracking-widest bg-[#161D4A]/5 px-3.5 py-1.5 rounded-full">Exceptional Career Launchpad</span>
              <h2 className="text-3xl lg:text-[42px] font-bold text-[#161D4A] mt-4 mb-4 tracking-tight leading-tight">
                Career Opportunities That Begin with Real Training
              </h2>
              <p className="text-[#5B6475] text-sm md:text-base leading-relaxed font-semibold">
                Students at AMC Degree College step into the hospitality industry with practical skills and hands-on experience.
              </p>
            </div>
            <div className="lg:col-span-5 h-[280px] rounded-3xl overflow-hidden shadow-md border border-gray-100 relative group">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800" 
                alt="Hospitality Placements Training" 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[1.03] saturate-[0.95]" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A]/60 via-transparent to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-16 mb-24 py-16 px-6 md:px-12 bg-white rounded-3xl border border-gray-100/90 shadow-[0_12px_45px_rgba(22,29,74,0.03)] items-stretch">
            {/* Alumni Network */}
            <div className="flex flex-col md:pr-8 lg:pr-12 md:border-r border-gray-100 last:border-r-0 text-center md:text-left group">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#161D4A]/5 flex items-center justify-center text-[#161D4A] group-hover:bg-[#161D4A] group-hover:text-[#FED304] transition-all duration-300">
                  <Users className="w-6 h-6" />
                </div>
                <div className="h-0.5 w-8 bg-[#FED304] rounded-full" />
              </div>
              <h3 className="text-5xl lg:text-6xl font-black text-[#161D4A] mb-3 tracking-tight">
                <span className="text-[#FED304] drop-shadow-[0_1.5px_2px_rgba(22,29,74,0.15)]">
                  <CountUp end={20000} suffix="+" />
                </span>
              </h3>
              <p className="text-[#161D4A] font-extrabold text-lg mb-2 tracking-tight">Alumni Network</p>
              <p className="text-[#5B6475] text-[14px] leading-relaxed font-semibold">A strong global network of successful professionals shaping the hospitality industry.</p>
            </div>
            
            {/* Dedicated Training */}
            <div className="flex flex-col md:px-8 lg:px-12 md:border-r border-gray-100 last:border-r-0 text-center md:text-left group">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#161D4A]/5 flex items-center justify-center text-[#161D4A] group-hover:bg-[#161D4A] group-hover:text-[#FED304] transition-all duration-300">
                  <Target className="w-6 h-6" />
                </div>
                <div className="h-0.5 w-8 bg-[#FED304] rounded-full" />
              </div>
              <h3 className="text-5xl lg:text-6xl font-black text-[#161D4A] mb-3 tracking-tight font-sans">
                <span className="text-[#FED304] drop-shadow-[0_1.5px_2px_rgba(22,29,74,0.15)]">
                  <CountUp end={100} suffix="%" />
                </span>
              </h3>
              <p className="text-[#161D4A] font-extrabold text-lg mb-2 tracking-tight">Dedicated Training</p>
              <p className="text-[#5B6475] text-[14px] leading-relaxed font-semibold">Dedicated training for hospitality careers and hands-on operational excellence.</p>
            </div>

            {/* Global Pathways */}
            <div className="flex flex-col md:pl-8 lg:pl-12 text-center md:text-left group">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#161D4A]/5 flex items-center justify-center text-[#161D4A] group-hover:bg-[#161D4A] group-hover:text-[#FED304] transition-all duration-300">
                  <Globe className="w-6 h-6" />
                </div>
                <div className="h-0.5 w-8 bg-[#FED304] rounded-full" />
              </div>
              <h3 className="text-5xl lg:text-6xl font-black text-[#161D4A] mb-3 tracking-tight font-sans">
                <span className="text-[#FED304] drop-shadow-[0_1.5px_2px_rgba(22,29,74,0.15)]">
                  <CountUp end={50} suffix="+" />
                </span>
              </h3>
              <p className="text-[#161D4A] font-extrabold text-lg mb-2 tracking-tight">Career Pathways</p>
              <p className="text-[#5B6475] text-[14px] leading-relaxed font-semibold">Career pathways in hotels, airlines, and events across leading venues globally.</p>
            </div>
          </div>

          {/* Brands logo bar */}
          <div className="bg-gradient-to-b from-gray-50/70 to-white rounded-3xl p-8 md:p-14 text-center border border-gray-100/90 relative overflow-hidden shadow-[0_12px_45px_rgba(22,29,74,0.02)]">
            <div className="relative z-10">
              <span className="text-[11px] font-extrabold text-[#161D4A]/60 uppercase tracking-widest bg-[#161D4A]/5 px-3.5 py-1.5 rounded-full mb-4 inline-block">Global Internships & Placements</span>
              <h3 className="text-2xl md:text-3xl lg:text-[34px] font-bold text-[#161D4A] mb-4 tracking-tight">Industry Exposure with Leading Hospitality Brands</h3>
              <p className="text-[#5B6475] max-w-2xl mx-auto mb-12 font-semibold text-xs md:text-sm leading-relaxed">
                Students from AMC Degree College gain exposure to leading hospitality brands through internships and industry interactions.
              </p>
              
              <div className="relative w-full overflow-hidden py-4">
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-gray-50/70 via-gray-50/30 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/30 to-transparent z-10 pointer-events-none" />
                
                <div className="animate-marquee flex gap-8 items-center py-2">
                  {[
                    { name: 'Taj Hotels', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Taj_Hotels_logo.svg/3840px-Taj_Hotels_logo.svg.png' },
                    { name: 'Marriott', logo: 'https://indianculinaryacademy.com/img/4.png' },
                    { name: 'Hilton', logo: 'https://indianculinaryacademy.com/img/logo%20hotel%20hilton.png' },
                    { name: 'Hyatt', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqen5r8yjo4Id03fr2bzFT8nXX1Rd-3grCVa8eCTcUfw&s=10' },
                    { name: 'ITC Hotels', logo: 'https://indianculinaryacademy.com/img/5.png' },
                    { name: 'The Oberoi Group', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_wdr3iQ1DFcmaXSUhNlZueigxnue8z9IcyW3RUmlrg4msOolOByiLn-B&s=10' }
                  ].concat([
                    { name: 'Taj Hotels', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Taj_Hotels_logo.svg/3840px-Taj_Hotels_logo.svg.png' },
                    { name: 'Marriott', logo: 'https://indianculinaryacademy.com/img/4.png' },
                    { name: 'Hilton', logo: 'https://indianculinaryacademy.com/img/logo%20hotel%20hilton.png' },
                    { name: 'Hyatt', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqen5r8yjo4Id03fr2bzFT8nXX1Rd-3grCVa8eCTcUfw&s=10' },
                    { name: 'ITC Hotels', logo: 'https://indianculinaryacademy.com/img/5.png' },
                    { name: 'The Oberoi Group', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_wdr3iQ1DFcmaXSUhNlZueigxnue8z9IcyW3RUmlrg4msOolOByiLn-B&s=10' }
                  ]).map((brand, i) => (
                    <div
                      key={i}
                      className="h-24 w-44 md:w-52 px-6 py-5 bg-white border border-gray-100 rounded-2xl flex items-center justify-center shrink-0 shadow-[0_4px_20px_rgba(0,0,0,0.015)] hover:shadow-[0_16px_36px_rgba(22,29,74,0.05)] hover:border-gray-200 transition-all duration-300 group/logo cursor-pointer"
                    >
                      <img 
                        src={brand.logo} 
                        alt={brand.name} 
                        className="max-h-12 md:max-h-14 max-w-full object-contain opacity-100" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Accreditations Section */}
      <section className="py-24 bg-[#F8F9FC] border-b border-[#E7EBF3]" id="accreditations">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold text-[#161D4A]/60 uppercase tracking-widest bg-[#161D4A]/5 px-3.5 py-1.5 rounded-full">Recognized & Certified</span>
            <h2 className="text-3xl lg:text-[42px] font-bold text-[#161D4A] mt-4 tracking-tight">
              Accreditations & Affiliations
            </h2>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-100 shadow-[0_12px_45px_rgba(0,0,0,0.04)] p-8 md:p-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 items-center justify-items-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
              {[
                {
                  name: "All India Council for Technical Education (AICTE)",
                  logo: "https://i.postimg.cc/VSzVDbxT/image-28.png",
                  desc: "Approved by AICTE, Ministry of Education, Govt. of India"
                },
                {
                  name: "Bangalore University (BU)",
                  logo: "https://i.postimg.cc/sB3NwZkk/image-30.png",
                  desc: "Permanently Affiliated to Bangalore University"
                },
                {
                  name: "National Assessment and Accreditation Council (NAAC)",
                  logo: "https://i.postimg.cc/NLBJsr90/image-29.png",
                  desc: "Accredited with Premium Quality Education Standards"
                }
              ].map((acc, index) => (
                <div 
                  key={index} 
                  className="w-full flex flex-col items-center justify-center text-center p-4 md:p-6 first:pt-0 md:first:pt-0 last:pb-0 md:last:pb-0 transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="h-20 w-full flex items-center justify-center mb-5 relative">
                    <img 
                      src={acc.logo} 
                      alt={acc.name} 
                      className="max-h-full max-w-[80%] object-contain opacity-100 transition-all duration-300 group-hover:scale-105" 
                      title={acc.name} 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-[12px] font-bold text-[#161D4A] uppercase tracking-wider max-w-xs leading-tight mb-1 transition-colors duration-300">
                    {acc.name}
                  </h4>
                  <p className="text-[11px] text-[#5B6475] font-semibold tracking-wide max-w-xs leading-relaxed">
                    {acc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Pain Point Section (Section 2 in the PDF) */}
      <section className="py-24 bg-white border-b border-[#E7EBF3]" id="pain-point">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Image Card */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100 group">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800" 
                alt="Hospitality Careers" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[1.04] saturate-[0.9] contrast-[1.01]" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A]/50 via-transparent to-transparent" />
            </div>

            {/* Right Column: Premium Pain Point text layout */}
            <div className="lg:col-span-7 bg-[#F8F9FC] rounded-3xl p-8 md:p-12 border border-gray-100/90 shadow-[0_12px_45px_rgba(22,29,74,0.03)]">
              <span className="text-[10px] font-extrabold text-[#161D4A] uppercase tracking-widest bg-[#FED304] px-2.5 py-1 rounded">Career Guidance</span>
              <h2 className="text-3xl font-bold text-[#161D4A] mt-4 mb-6 tracking-tight leading-tight">
                Still Searching for the Right Hotel Management Course in Bangalore?
              </h2>
              
              <p className="text-[#161D4A] font-extrabold text-[16px] leading-relaxed mb-6">
                Choosing the right career after 12th can feel uncertain.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  "Some students want a career in hotels and travel.",
                  "Some are passionate about cooking, service, and guest experience.",
                  "Some are searching for a BHM college in Bangalore with practical training."
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm md:text-[15px] text-[#5B6475] font-semibold leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-[#161D4A] mt-0.5 shrink-0" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>

              {/* Solution Highlight Box */}
              <div className="p-5 md:p-6 rounded-2xl bg-white border-l-4 border-[#FED304] shadow-sm">
                <p className="text-[#161D4A] text-[14.5px] md:text-base font-extrabold leading-relaxed">
                  At AMC Degree College, we help you turn your interest in hospitality into real-world skills and career opportunities.
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Programs Section (Section 3 in the PDF) */}
      <section className="py-24 bg-[#F8F9FC] border-b border-[#E7EBF3]" id="overview">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] font-extrabold text-[#161D4A]/60 uppercase tracking-widest bg-[#161D4A]/5 px-3.5 py-1.5 rounded-full">Premier Academic Offering</span>
            <h2 className="text-3xl lg:text-[42px] font-bold text-[#161D4A] mt-4 mb-4 tracking-tight">
              Bachelor of Hotel Management (BHM) Program
            </h2>
            <p className="text-[#5B6475] text-sm md:text-base mt-3 leading-relaxed font-semibold">
              BHM (Bachelor of Hotel Management) - A structured bachelor degree in hotel management designed to build skills across all hospitality functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-16 md:mb-20 items-stretch">
            <ProgramCard
              imageSrc="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&q=80&w=800"
              title="Core Areas of Study"
              description="Master the fundamental pillars of hospitality operations, administration, and modern management methodologies."
              bullets={[
                "Food Production (Kitchen Training)",
                "Food & Beverage Service",
                "Front Office Operations",
                "Housekeeping Management",
                "Hospitality Marketing & Management"
              ]}
            />

            <ProgramCard
              imageSrc="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800"
              title="What You Learn"
              description="Acquire hands-on technical skills, modern hotel management workflows, and robust communication abilities."
              bullets={[
                "Professional cooking and kitchen operations",
                "Guest service and hospitality skills",
                "Hotel management and operations",
                "Communication and personality development"
              ]}
            />

            <ProgramCard
              imageSrc="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=800"
              title="Career Paths"
              description="Unlock a world-class global career spanning elite hotel groups, culinary venues, and premium corporate events."
              bullets={[
                "Hotel Management",
                "Chef / Culinary Specialist",
                "Front Office Executive",
                "Cabin Crew (with additional training)",
                "Event Manager",
                "Hospitality Entrepreneur"
              ]}
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6">
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-[#FED304] hover:bg-[#FED304]/90 text-[#161D4A] font-extrabold px-8 py-4 rounded-2xl shadow-[0_4px_15px_rgba(254,211,4,0.3)] hover:shadow-[0_8px_25px_rgba(254,211,4,0.5)] transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>View admission process</span>
              <ChevronRight className="w-4 h-4 text-[#161D4A]" />
            </button>
            <button 
              onClick={() => document.getElementById('placements')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-[#161D4A] text-[#161D4A] hover:bg-[#161D4A] hover:text-white font-extrabold px-8 py-4 rounded-2xl transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5 text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Read about placements</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
        </motion.div>
      </section>

      {/* Why AMC Section (Section 4 in the PDF) */}
      <section className="py-24 bg-white border-b border-[#E7EBF3]" id="why-choose-us">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] font-extrabold text-[#161D4A]/60 uppercase tracking-widest bg-[#161D4A]/5 px-3.5 py-1.5 rounded-full">The AMC Advantage</span>
            <h2 className="text-3xl lg:text-[42px] font-bold text-[#161D4A] mt-4 mb-4 tracking-tight">
              Why Choose AMC for Hotel Management in Bangalore
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                title: "Industry-Focused Learning",
                desc: "Curriculum aligned with modern hospitality management courses.",
                img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Practical Training",
                desc: "Hands-on experience in kitchens, service, and hotel simulations.",
                img: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Internship Opportunities",
                desc: "Exposure to real hotels and hospitality environments.",
                img: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Career Support",
                desc: "Focused on hospitality placements in Bangalore and global opportunities.",
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative h-[380px] w-full rounded-3xl overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(22,29,74,0.12)] border border-gray-100/90 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-end">
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[1.04] saturate-[0.9] contrast-[1.01]" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A]/95 via-[#161D4A]/70 to-[#161D4A]/20 transition-opacity duration-300" />
                  </div>

                  <div className="relative z-10 p-6 md:p-8 flex flex-col justify-end h-full">
                    <div className="w-8 h-[2px] bg-[#FED304] rounded-full mb-4 transform origin-left scale-x-100 transition-transform duration-300 group-hover:scale-x-150" />
                    
                    <h3 className="text-xl font-bold text-white mb-2.5 tracking-tight leading-tight">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/80 text-[13px] md:text-sm font-semibold leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    <div className="pt-4 border-t border-white/10 mt-auto">
                      <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-white group-hover:text-[#FED304] transition-colors duration-200">
                        <span>Know More</span>
                        <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Student Experience Section (Section 6 in the PDF) */}
      <section className="py-24 bg-[#F8F9FC] border-b border-[#E7EBF3]" id="experience">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch mb-16">
            {/* Large Image Column */}
            <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-[500px] rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.03)] border border-gray-100 group">
              <img 
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800" 
                alt="Student Experience" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[1.04] saturate-[0.9] contrast-[1.01]" 
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A]/40 via-transparent to-transparent" />
            </div>
            
            {/* White Content Card Column */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 border border-gray-100/90 shadow-[0_12px_45px_rgba(22,29,74,0.03)] flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-extrabold text-[#161D4A] uppercase tracking-widest bg-[#FED304] px-2.5 py-1 rounded">Experiential Learning</span>
                <h3 className="text-2xl md:text-3xl font-bold text-[#161D4A] mt-4 mb-6 tracking-tight">
                  From Training to Real Hospitality Skills
                </h3>
                
                <p className="text-[#5B6475] font-semibold mb-6 text-sm md:text-[15px] leading-relaxed">
                  Students at AMC Degree College gain practical exposure through:
                </p>
                
                <ul className="space-y-4 mb-8">
                  {[
                    "Kitchen and culinary training",
                    "Restaurant and service simulations",
                    "Hotel operations practice",
                    "Industrial training and internships"
                  ].map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm md:text-[15px] text-[#5B6475] font-semibold leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#161D4A] mt-0.5 shrink-0" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 border-t border-gray-100 flex flex-col gap-6">
                <div className="p-5 rounded-2xl bg-gray-50/80 border-l-4 border-[#161D4A] relative">
                  <Quote className="absolute right-4 top-4 w-10 h-10 text-[#161D4A]/5 pointer-events-none" />
                  <p className="text-[#161D4A] text-[13.5px] md:text-sm font-semibold italic leading-relaxed relative z-10">
                    "Every student graduates with practical hospitality skills, not just theoretical knowledge."
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-[#161D4A] bg-[#161D4A]/5 hover:bg-[#161D4A]/10 border border-[#161D4A]/10 backdrop-blur-md rounded-xl transition-all duration-300 self-start hover:shadow-sm"
                >
                  <span>Explore Training Labs</span>
                  <ChevronRight className="w-4 h-4 text-[#161D4A]" />
                </a>
              </div>
            </div>
          </div>

          {/* Lab Gallery */}
          <div className="space-y-6">
            <div className="text-left">
              <h4 className="text-lg font-bold text-[#161D4A] uppercase tracking-wide">Projects & Lab Gallery</h4>
              <p className="text-[#5B6475] text-xs font-semibold">Take a virtual tour of our world-class training facilities on Bannerghatta Road.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Culinary & Kitchen Training Lab", img: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=600" },
                { title: "F&B Fine Dining Service Lab", img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=600" },
                { title: "Front Office Reception Lab", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=600" },
                { title: "Boutique Suite Operations Lab", img: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&q=80&w=600" }
              ].map((lab, i) => (
                <div key={i} className="relative h-64 rounded-2xl overflow-hidden group shadow-md">
                  <img src={lab.img} alt={lab.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A] via-[#161D4A]/40 to-transparent flex items-end p-4">
                    <p className="text-white text-xs font-bold leading-tight">{lab.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Industry Exposure Section (Section 7 in the PDF) */}
      <section className="py-24 bg-white border-b border-[#E7EBF3]" id="industry-exposure">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] font-extrabold text-[#161D4A]/60 uppercase tracking-widest bg-[#161D4A]/5 px-3.5 py-1.5 rounded-full">Industry Integration</span>
            <h2 className="text-3xl lg:text-[42px] font-bold text-[#161D4A] mt-4 mb-4 tracking-tight">
              Learn from the Real Hospitality Industry
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { 
                title: "Guest Lectures", 
                desc: "Guest lectures from industry professionals.", 
                icon: Users,
                img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=500"
              },
              { 
                title: "Hotel Internships", 
                desc: "Hotel internships and training.", 
                icon: Target,
                img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=500"
              },
              { 
                title: "Live Workshops", 
                desc: "Workshops and live demonstrations.", 
                icon: Lightbulb,
                img: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=500"
              },
              { 
                title: "Real Operations", 
                desc: "Exposure to hospitality operations.", 
                icon: Building,
                img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=500"
              }
            ].map((exp, i) => (
              <div 
                key={i}
                className="bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_50px_rgba(22,29,74,0.08)] hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col overflow-hidden"
              >
                <div className="h-44 overflow-hidden relative">
                  <img 
                    src={exp.img} 
                    alt={exp.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                </div>
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-[#161D4A]/5 text-[#161D4A] rounded-2xl flex items-center justify-center -mt-12 mb-4 group-hover:bg-[#161D4A] group-hover:text-[#FED304] transition-all duration-300 shadow-md shrink-0 relative z-10 border-2 border-white bg-white">
                    <exp.icon className="w-5 h-5 stroke-[1.5]" />
                  </div>
                  <h3 className="text-[#161D4A] font-extrabold text-[17px] tracking-tight mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-[#5B6475] text-xs leading-relaxed font-semibold">
                    {exp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Careers Section (Section 8 in the PDF) */}
      <section className="py-24 bg-[#F8F9FC] border-b border-[#E7EBF3]" id="careers">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[11px] font-extrabold text-[#161D4A]/60 uppercase tracking-widest bg-[#161D4A]/5 px-3.5 py-1.5 rounded-full mb-4 inline-block">Global Opportunities</span>
            <h2 className="text-3xl lg:text-[42px] font-bold text-[#161D4A] mt-4 mb-4 tracking-tight leading-tight">
              Career Opportunities After BHM in Bangalore
            </h2>
            <p className="text-[#5B6475] text-sm md:text-base leading-relaxed font-semibold">
              The hospitality industry offers global career opportunities for skilled professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {[
              { title: "Hotel Operations", desc: "Manage operational procedures, front desk logistics, and guest experience divisions.", icon: Building, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=400" },
              { title: "Chef / Culinary Roles", desc: "Command gourmet food production pipelines and coordinate custom culinary programs.", icon: ChefHat, img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=400" },
              { title: "Airlines & Cabin Crew", desc: "Elevate ground coordination, customized guest flight services, and premium airline relations.", icon: Plane, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=400" },
              { title: "Event Management", desc: "Direct large scale business conferences, luxury social gatherings, and elite meetings.", icon: Calendar, img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=400" },
              { title: "Hospitality & Tourism", desc: "Lead destination tourism planning, premier cruise ship programs, and travel agencies.", icon: Globe, img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=400" }
            ].map((car, i) => (
              <div 
                key={i}
                className="bg-white border border-gray-100 rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.015)] hover:shadow-[0_20px_45px_rgba(22,29,74,0.08)] hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex flex-col overflow-hidden text-center"
              >
                <div className="h-28 overflow-hidden relative">
                  <img 
                    src={car.img} 
                    alt={car.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-[1.03]"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="p-5 flex flex-col items-center flex-grow">
                  <div className="w-10 h-10 bg-[#161D4A]/5 text-[#161D4A] rounded-xl flex items-center justify-center -mt-9 mb-3 group-hover:bg-[#161D4A] group-hover:text-[#FED304] transition-all duration-300 shadow-md shrink-0 relative z-10 border-2 border-white bg-white">
                    <car.icon className="w-4 h-4 stroke-[1.5]" />
                  </div>
                  <h3 className="text-[#161D4A] font-extrabold text-[14px] tracking-tight leading-snug mb-2">
                    {car.title}
                  </h3>
                  <p className="text-[#5B6475] text-[11px] leading-relaxed font-semibold">
                    {car.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Social Proof Section (Section 9 in the PDF) */}
      <section className="py-24 bg-[#161D4A] text-white relative overflow-hidden" id="testimonials">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#FED304]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FED304]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[11px] font-extrabold text-[#FED304] uppercase tracking-widest bg-white/5 px-3.5 py-1.5 rounded-full mb-4 inline-block">Alumni Excellence</span>
            <h2 className="text-3xl lg:text-[42px] font-black text-white tracking-tight mt-3">
              What Our Students Say
            </h2>
          </div>

          {(() => {
            const list = [
              {
                name: "Rahul Sharma",
                course: "BHM Graduate",
                quote: "AMC helped me build confidence and practical skills for the hospitality industry.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=300",
                rating: 5
              },
              {
                name: "Sneha Reddy",
                course: "BHM Graduate",
                quote: "The training and internships gave me real exposure to hotel operations.",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=300",
                rating: 5
              },
              {
                name: "Vikram Singh",
                course: "BHM Graduate",
                quote: "A great environment to learn hospitality and service skills.",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=300&h=300",
                rating: 5
              }
            ];

            const activeIdx = activeTestimonial % list.length;

            return (
              <div className="max-w-4xl mx-auto relative px-2">
                <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_24px_60px_rgba(0,0,0,0.3)]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeIdx}
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -15 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="grid grid-cols-1 md:grid-cols-12 items-center p-8 md:p-12 lg:p-14 gap-8 md:gap-12"
                    >
                      <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
                        <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-[#FED304]/50 p-1 mb-6 bg-white/5 shadow-md">
                          <img
                            src={list[activeIdx].image}
                            alt={list[activeIdx].name}
                            className="w-full h-full object-cover rounded-full filter brightness-[1.04] saturate-[0.9] contrast-[1.01]"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        <div className="flex gap-1 mb-4">
                          {[...Array(list[activeIdx].rating)].map((_, starIdx) => (
                            <Star key={starIdx} className="w-5 h-5 fill-[#FED304] text-[#FED304]" />
                          ))}
                        </div>

                        <h3 className="text-xl md:text-2xl font-black text-white tracking-tight mb-1">
                          {list[activeIdx].name}
                        </h3>
                        <p className="text-[#FED304] text-xs font-bold uppercase tracking-widest">
                          {list[activeIdx].course}
                        </p>
                      </div>

                      <div className="md:col-span-7 flex flex-col justify-center relative">
                        <Quote className="w-14 h-14 text-[#FED304]/10 absolute -top-10 -left-6 pointer-events-none rotate-180 hidden md:block" />
                        <blockquote className="text-gray-100 text-base md:text-lg lg:text-xl font-semibold leading-relaxed italic relative z-10">
                          "{list[activeIdx].quote}"
                        </blockquote>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-10">
                  <div className="flex gap-2.5">
                    {list.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveTestimonial(dotIdx)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${
                          activeIdx === dotIdx ? 'w-8 bg-[#FED304]' : 'w-2.5 bg-white/20 hover:bg-white/40'
                        }`}
                        aria-label={`Go to testimonial slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setActiveTestimonial((prev) => (prev === 0 ? list.length - 1 : prev - 1));
                      }}
                      className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all duration-200"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        setActiveTestimonial((prev) => (prev === list.length - 1 ? 0 : prev + 1));
                      }}
                      className="w-12 h-12 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all duration-200"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })()}
        </motion.div>
      </section>

      {/* Campus Life Section (Section 10 in the PDF) */}
      <section className="py-24 bg-white relative overflow-hidden" id="campus-life">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-[#FED304]/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="lg:w-5/12 text-center lg:text-left shrink-0">
              <span className="text-[11px] font-extrabold text-[#161D4A]/60 uppercase tracking-widest bg-[#161D4A]/5 px-3.5 py-1.5 rounded-full mb-5 inline-block">
                Campus Experience
              </span>
              <h2 className="text-3xl lg:text-[42px] lg:leading-[1.15] font-black text-[#161D4A] tracking-tight mt-2 mb-6">
                A Learning Environment That <span className="text-[#FED304] bg-clip-text">Builds Confidence</span>
              </h2>
              <p className="text-[#5B6475] text-base md:text-lg leading-relaxed mb-8 font-semibold">
                At AMC Degree College, students experience:
              </p>
              <div className="w-16 h-[3.5px] bg-[#FED304] rounded-full mx-auto lg:mx-0"></div>
            </div>

            <div className="lg:w-7/12 w-full relative">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#FED304]/5 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {[
                  { 
                    title: "Interactive & Practical", 
                    icon: Lightbulb, 
                    desc: "Interactive and practical learning." 
                  },
                  { 
                    title: "Skill-Based Training", 
                    icon: Target, 
                    desc: "Skill-based training environment." 
                  },
                  { 
                    title: "Collaborative Culture", 
                    icon: Users, 
                    desc: "Collaborative student culture." 
                  },
                  { 
                    title: "Balanced Exposure", 
                    icon: BookOpen, 
                    desc: "Balanced academic and practical exposure." 
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-col items-start text-left bg-white rounded-3xl border border-gray-100 p-8 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(22,29,74,0.07)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-[#161D4A]/5 text-[#161D4A] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#161D4A] group-hover:text-[#FED304] transition-all duration-300 shadow-sm shrink-0">
                      <item.icon className="w-7 h-7 stroke-[1.5]" />
                    </div>
                    
                    <h3 className="text-[#161D4A] font-extrabold text-[18px] tracking-tight mb-2.5 group-hover:text-[#161D4A] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[#5B6475] text-[13px] leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Campus Gallery */}
          <div className="mt-20 space-y-6">
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-bold text-[#161D4A] uppercase tracking-wide">Campus Life Gallery</h4>
              <p className="text-[#5B6475] text-xs font-semibold">Experience the vibrant student community and premium college amenities at AMC.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Modern Campus Infrastructure", img: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=600" },
                { title: "Smart Seminars & Auditoriums", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" },
                { title: "Recreation & Athletic Zones", img: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&q=80&w=600" },
                { title: "Student Communities & Forums", img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=600" }
              ].map((item, i) => (
                <div key={i} className="relative h-64 rounded-3xl overflow-hidden group shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(22,29,74,0.08)] border border-gray-100 transition-all duration-300">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[1.02]" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A]/90 via-[#161D4A]/30 to-transparent flex items-end p-6">
                    <p className="text-white text-sm font-extrabold tracking-tight leading-snug">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Final CTA Banner Section */}
      <section className="py-24 relative overflow-hidden bg-[#161D4A]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200" 
            alt="Hospitality Careers Background" 
            className="w-full h-full object-cover filter brightness-[0.15] saturate-[0.8]" 
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#161D4A]/90 via-[#161D4A]/80 to-[#161D4A]/95" />
        </div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-[#FED304] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#ADDDF1] opacity-25 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl lg:text-[42px] font-bold text-white mb-6 leading-tight tracking-tight">
            Start Your Career in <span className="text-[#FED304]">Hospitality Today</span>
          </h2>
          <p className="text-[#ADDDF1] text-lg leading-relaxed mb-10 mx-auto max-w-2xl font-semibold">
            Join the BHM program in Bangalore at AMC and step into a growing global industry.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-semibold text-white">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#FED304]" />
              </div>
              <span className="text-left leading-tight">100% Placement<br/>Assistance</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#FED304]" />
              </div>
              <span className="text-left leading-tight">Industry-Aligned<br/>Curriculum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-24 md:py-32 bg-[#F8F9FC] relative overflow-hidden border-t border-b border-gray-100" id="contact">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#ADDDF1]/15 rounded-full blur-3xl pointer-events-none" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="bg-white rounded-3xl border border-gray-100/80 shadow-[0_24px_70px_rgba(22,29,74,0.04)] p-6 md:p-12 lg:p-14">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              <div className="lg:col-span-7 flex flex-col justify-center">
                {!isSubmitted ? (
                  <>
                    <div className="text-center lg:text-left max-w-2xl mb-10">
                      <span className="text-[11px] font-extrabold text-[#161D4A]/60 uppercase tracking-widest bg-[#161D4A]/5 px-3.5 py-1.5 rounded-full mb-4 inline-block">
                        Admissions Open 2026-27
                      </span>
                      <h3 className="text-2xl lg:text-3.5xl font-black text-[#161D4A] tracking-tight mt-3 mb-4">
                        Book Your Free Career Session
                      </h3>
                      <p className="text-[#5B6475] text-sm leading-relaxed font-semibold">
                        Connect with our admissions specialists to map out your global hospitality career trajectory.
                      </p>
                    </div>

                    {formError && (
                      <div className="mb-8 p-4 bg-red-50 border border-red-100 rounded-2xl text-red-600 text-sm font-semibold flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse shrink-0"></span>
                        <span>{formError}</span>
                      </div>
                    )}

                    <form onSubmit={handleEnquirySubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <input
                            type="text"
                            id="fullName"
                            value={enquiryForm.fullName}
                            onFocus={() => setFocusedField('fullName')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                            placeholder=" "
                            required
                            className="w-full px-5 pt-[25px] pb-[7px] rounded-2xl border border-gray-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A]/20 focus:outline-none transition-all bg-white text-[14.5px] font-semibold text-[#161D4A] shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]"
                          />
                          <label
                            htmlFor="fullName"
                            className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                              focusedField === 'fullName' || enquiryForm.fullName
                                ? 'top-2 text-[10px] font-black text-[#161D4A] uppercase tracking-wider'
                                : 'top-1/2 -translate-y-1/2 text-[13.5px] text-[#5B6475]/60 font-semibold'
                            }`}
                          >
                            Full Name <span className="text-red-500">*</span>
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            type="tel"
                            id="phone"
                            value={enquiryForm.phone}
                            onFocus={() => setFocusedField('phone')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                            placeholder=" "
                            required
                            className="w-full px-5 pt-[25px] pb-[7px] rounded-2xl border border-gray-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A]/20 focus:outline-none transition-all bg-white text-[14.5px] font-semibold text-[#161D4A] shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]"
                          />
                          <label
                            htmlFor="phone"
                            className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                              focusedField === 'phone' || enquiryForm.phone
                                ? 'top-2 text-[10px] font-black text-[#161D4A] uppercase tracking-wider'
                                : 'top-1/2 -translate-y-1/2 text-[13.5px] text-[#5B6475]/60 font-semibold'
                            }`}
                          >
                            Phone Number <span className="text-red-500">*</span>
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            value={enquiryForm.email}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                            placeholder=" "
                            required
                            className="w-full px-5 pt-[25px] pb-[7px] rounded-2xl border border-gray-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A]/20 focus:outline-none transition-all bg-white text-[14.5px] font-semibold text-[#161D4A] shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]"
                          />
                          <label
                            htmlFor="email"
                            className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                              focusedField === 'email' || enquiryForm.email
                                ? 'top-2 text-[10px] font-black text-[#161D4A] uppercase tracking-wider'
                                : 'top-1/2 -translate-y-1/2 text-[13.5px] text-[#5B6475]/60 font-semibold'
                            }`}
                          >
                            Email Address <span className="text-red-500">*</span>
                          </label>
                        </div>

                        <div className="relative">
                          <input
                            type="text"
                            id="city"
                            value={enquiryForm.city}
                            onFocus={() => setFocusedField('city')}
                            onBlur={() => setFocusedField(null)}
                            onChange={(e) => setEnquiryForm({ ...enquiryForm, city: e.target.value })}
                            placeholder=" "
                            required
                            className="w-full px-5 pt-[25px] pb-[7px] rounded-2xl border border-gray-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A]/20 focus:outline-none transition-all bg-white text-[14.5px] font-semibold text-[#161D4A] shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)]"
                          />
                          <label
                            htmlFor="city"
                            className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                              focusedField === 'city' || enquiryForm.city
                                ? 'top-2 text-[10px] font-black text-[#161D4A] uppercase tracking-wider'
                                : 'top-1/2 -translate-y-1/2 text-[13.5px] text-[#5B6475]/60 font-semibold'
                            }`}
                          >
                            City <span className="text-red-500">*</span>
                          </label>
                        </div>
                      </div>

                      <div className="relative">
                        <select
                          id="course"
                          value={enquiryForm.course}
                          onFocus={() => setFocusedField('course')}
                          onBlur={() => setFocusedField(null)}
                          onChange={(e) => setEnquiryForm({ ...enquiryForm, course: e.target.value })}
                          required
                          className="w-full px-5 pt-[25px] pb-[7px] rounded-2xl border border-gray-200 focus:border-[#161D4A] focus:ring-1 focus:ring-[#161D4A]/20 focus:outline-none transition-all bg-white text-[14.5px] font-semibold text-[#161D4A] shadow-[inset_0_2px_4px_rgba(0,0,0,0.01)] appearance-none"
                        >
                          <option value="BHM">Bachelor of Hotel Management (BHM)</option>
                        </select>
                        <label
                          htmlFor="course"
                          className={`absolute left-5 transition-all duration-200 pointer-events-none ${
                            focusedField === 'course' || enquiryForm.course
                              ? 'top-2 text-[10px] font-black text-[#161D4A] uppercase tracking-wider'
                              : 'top-1/2 -translate-y-1/2 text-[13.5px] text-[#5B6475]/60 font-semibold'
                          }`}
                        >
                          Selected Course <span className="text-red-500">*</span>
                        </label>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-[#161D4A]/50">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </div>

                      <div className="text-center pt-4">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#161D4A] hover:bg-[#FED304] text-white hover:text-[#161D4A] font-black text-xs md:text-sm py-4 px-10 rounded-2xl shadow-[0_12px_35px_rgba(22,29,74,0.15)] hover:shadow-[0_12px_35px_rgba(254,211,4,0.3)] hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 uppercase tracking-wider mx-auto disabled:opacity-50 disabled:pointer-events-none group"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              <span>Processing Inquiry...</span>
                            </>
                          ) : (
                            <>
                              <span>Request Free Callback</span>
                              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="text-center py-12 px-2 md:px-6">
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 text-green-500 shadow-inner animate-bounce">
                      <CheckCircle2 className="w-12 h-12 stroke-[1.5]" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-black text-[#161D4A] mb-3 tracking-tight">
                      Session Booked Successfully!
                    </h3>
                    <p className="text-[#5B6475] text-sm md:text-base leading-relaxed max-w-md mx-auto mb-8 font-semibold">
                      Congratulations! We have received your inquiry. One of our Senior Admissions Counselors will contact you within 24 hours.
                    </p>
                    
                    <div className="bg-gray-50/70 border border-gray-100 rounded-2xl p-6 text-left max-w-md mx-auto mb-8 space-y-2.5">
                      <div className="text-[10px] text-gray-400 font-extrabold uppercase tracking-widest mb-1">Summary of Details</div>
                      <div className="text-[13.5px] text-[#161D4A]"><strong className="text-[#5B6475] font-semibold">Name:</strong> {enquiryForm.fullName}</div>
                      <div className="text-[13.5px] text-[#161D4A]"><strong className="text-[#5B6475] font-semibold">Phone:</strong> {enquiryForm.phone}</div>
                      <div className="text-[13.5px] text-[#161D4A]"><strong className="text-[#5B6475] font-semibold">Email:</strong> {enquiryForm.email}</div>
                      <div className="text-[13.5px] text-[#161D4A]"><strong className="text-[#5B6475] font-semibold">City:</strong> {enquiryForm.city}</div>
                      <div className="text-[13.5px] text-[#161D4A]"><strong className="text-[#5B6475] font-semibold">Selected Course:</strong> Bachelor of Hotel Management (BHM)</div>
                    </div>

                    <button
                      type="button"
                      onClick={handleResetForm}
                      className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#161D4A] hover:text-[#FED304] transition-all duration-200 group/btn cursor-pointer"
                    >
                      <span>Submit Another Inquiry</span>
                      <ChevronRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </button>
                  </div>
                )}
              </div>

              <div className="lg:col-span-5 rounded-3xl overflow-hidden relative group hidden lg:flex flex-col justify-end p-8 min-h-[500px]">
                <img 
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=600" 
                  alt="Career Counseling Session" 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.9]" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#161D4A] via-[#161D4A]/60 to-transparent" />
                <div className="relative z-10 text-white">
                  <span className="text-[10px] font-extrabold text-[#FED304] uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded mb-3 inline-block">Free Counselor Advisory</span>
                  <h4 className="text-xl font-bold tracking-tight leading-tight mb-2">Hospitality Career Guidance</h4>
                  <p className="text-white/85 text-xs font-semibold leading-relaxed mb-6">Receive expert help mapping out placements, course schedules, and scholarship offerings at AMC.</p>
                  <div className="space-y-2.5 border-t border-white/10 pt-4 text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FED304]" />
                      <span>Individual Career Roadmaps</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FED304]" />
                      <span>Placement Profile Evaluations</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FED304]" />
                      <span>Interactive Campus Tour Booking</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#161D4A] text-gray-300 pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FED304]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#ADDDF1]/5 rounded-full blur-[120px] pointer-events-none translate-y-1/2 -translate-x-1/3" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-12 mb-20">
            
            {/* Logo and Description */}
            <div className="md:col-span-12 lg:col-span-5 xl:col-span-5 pr-0 lg:pr-16">
              <div className="bg-white inline-block p-4 rounded-2xl mb-8 shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
                <img 
                  src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_476,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png" 
                  alt="AMC Degree College Logo" 
                  className="h-12 md:h-14 object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="text-gray-400 text-[14.5px] leading-relaxed mb-8 font-medium">
                AMC Degree College is committed to creating deep hospitality competencies, high practical productivity, and robust industry integrations for professional growth.
              </p>
              <div className="inline-flex items-center gap-2.5 bg-white/5 border border-white/10 px-4.5 py-2.5 rounded-xl">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <p className="text-white text-[11px] font-bold tracking-wider uppercase">
                  AFFILIATED TO BANGALORE UNIVERSITY | APPROVED BY AICTE
                </p>
              </div>

              {/* Social Connections */}
              <div className="mt-10">
                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#FED304] mb-4">Connect With Us</h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                    { icon: Youtube, href: "https://youtube.com", label: "YouTube" }
                  ].map((soc, idx) => (
                    <a
                      key={idx}
                      href={soc.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={soc.label}
                      className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#161D4A] hover:bg-[#FED304] hover:border-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(254,211,4,0.15)] group"
                    >
                      <soc.icon className="w-4.5 h-4.5 transition-transform duration-300 group-hover:scale-110" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Fast links */}
            <div className="md:col-span-6 lg:col-span-3 xl:col-span-3">
              <h3 className="text-xs font-black tracking-[0.2em] text-[#FED304] uppercase mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-8 after:h-[2px] after:bg-[#FED304]/40">
                Curricular Fastpaths
              </h3>
              <ul className="space-y-4">
                {[
                  { name: "Programs", href: "#overview" },
                  { name: "Why AMC", href: "#why-choose-us" },
                  { name: "Experience", href: "#experience" },
                  { name: "Exposure", href: "#industry-exposure" },
                  { name: "Careers", href: "#careers" },
                  { name: "Campus Life", href: "#campus-life" }
                ].map((link, idx) => (
                  <li key={idx} className="group">
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-[#FED304] text-[14.5px] font-medium transition-all duration-300 flex items-center gap-0 hover:translate-x-1.5"
                    >
                      <ChevronRight className="w-0 h-4 opacity-0 -ml-2 transition-all duration-300 group-hover:w-4 group-hover:opacity-100 group-hover:ml-0 text-[#FED304]" />
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Campus Location */}
            <div className="md:col-span-6 lg:col-span-4 xl:col-span-4">
              <h3 className="text-xs font-black tracking-[0.2em] text-[#FED304] uppercase mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-8 after:h-[2px] after:bg-[#FED304]/40">
                AMC Campus Location
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FED304] shrink-0 transition-all duration-300 group-hover:bg-[#FED304] group-hover:text-[#161D4A] group-hover:border-transparent shadow-sm">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-[14.5px] leading-relaxed text-gray-400 font-medium pt-1 group-hover:text-white transition-colors">
                    AMC Campus, 18th K.M. Bannerghatta Road, Bengaluru – 560083
                  </div>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FED304] shrink-0 transition-all duration-300 group-hover:bg-[#FED304] group-hover:text-[#161D4A] group-hover:border-transparent shadow-sm">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a
                    href="tel:+919902044114"
                    className="text-[14.5px] text-gray-400 font-medium hover:text-[#FED304] transition-colors"
                  >
                    +91 99020 44114
                  </a>
                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FED304] shrink-0 transition-all duration-300 group-hover:bg-[#FED304] group-hover:text-[#161D4A] group-hover:border-transparent shadow-sm">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a
                    href="mailto:admissions@amceducation.in"
                    className="text-[14.5px] text-gray-400 font-medium hover:text-[#FED304] transition-colors break-all"
                  >
                    admissions@amceducation.in
                  </a>
                </li>
              </ul>
            </div>
            
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-500 font-medium">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
              <span>© 2026 AMC Degree College Bengaluru. All rights reserved.</span>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2.5 font-bold tracking-[0.2em] text-[10px] text-gray-400 hover:text-[#FED304] transition-colors bg-white/5 hover:bg-white/10 px-4 py-2.5 rounded-xl border border-white/10 active:scale-95 transition-all"
            >
              BACK TO TOP <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating Admissions Button */}
      <a 
        href="#contact"
        className="fixed bottom-8 right-8 z-50 bg-[#FED304] hover:bg-[#FED304]/90 text-[#161D4A] font-black text-xs tracking-wider py-4 px-6 rounded-2xl shadow-[0_12px_40px_rgba(254,211,4,0.3)] hover:shadow-[0_12px_40px_rgba(254,211,4,0.5)] transition-all flex items-center gap-2.5 uppercase"
      >
        <Headphones className="w-5 h-5 shrink-0" />
        <span>Admissions Help</span>
      </a>
    </div>
  );
}
