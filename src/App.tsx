import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, Mail, GraduationCap, CheckCircle2, ChevronRight, Plus, Building, ChefHat, Plane, Calendar, Globe, Quote, Lightbulb, Target, Users, BookOpen } from 'lucide-react';

export default function App() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="min-h-screen font-sans selection:bg-[#f59e0b] selection:text-white bg-slate-900 flex flex-col">
      {/* Top Bar - Academic style matching reference */}
      <div className="bg-[#0f172a] text-gray-300 text-xs py-2 px-4 md:px-8 flex justify-between items-center z-50 relative">
        <div className="hidden md:block">AMC Degree College | Bangalore Campus</div>
        <div className="flex gap-4 md:gap-6 ml-auto">
          <a href="#" className="flex items-center gap-1 hover:text-white transition-colors"><Mail className="w-3 h-3" /> admissions@amc.edu.in</a>
          <a href="#" className="hover:text-white transition-colors">Alumni</a>
          <a href="#" className="hover:text-white transition-colors">Student Portal</a>
          <a href="#" className="border border-gray-600 px-3 py-1 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-1">
            Careers
          </a>
        </div>
      </div>

      {/* Main Navbar & Hero Section Container */}
      <div className="relative flex-1 flex flex-col">
        {/* Background Image with Dark Professional Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80" 
            alt="Hospitality Management at AMC" 
            className="w-full h-full object-cover object-[75%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#001f3f]/95 via-[#001f3f]/80 to-[#001f3f]/40" />
        </div>

        {/* Navigation Bar with Angled Logo Container */}
        <nav className="relative h-20 md:h-24 z-40 flex items-center border-b border-white/10">
          {/* Angled White Background for Logo (replicates the reference design) */}
          <div 
            className="absolute left-0 top-0 h-full w-80 md:w-[42rem] bg-white shadow-xl"
            style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)' }}
          />
          
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-10">
            {/* Logo */}
            <div className="flex flex-col justify-center pt-1 -ml-2 md:-ml-4">
              <img 
                src="https://static.wixstatic.com/media/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png/v1/fill/w_476,h_248,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/174df9_bfc0c62f53bf48b2a6941250cfbf8a02~mv2.png" 
                alt="AMC Degree College Logo" 
                className="h-16 md:h-20 object-contain -translate-x-2 md:-translate-x-4"
              />
            </div>
            
            {/* Menu Button */}
            <button className="bg-white text-[#001f3f] px-4 md:px-5 py-2 md:py-2.5 rounded shadow-lg uppercase text-xs md:text-sm font-bold flex items-center gap-2 hover:bg-gray-50 transition-colors">
              Menu <Menu className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </nav>

        {/* Hero Content Area */}
        <main className="relative z-10 flex-1 flex flex-col justify-center py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
            
            {/* Left Content: Headline, Subheadline & Value Points */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full lg:w-7/12 xl:w-2/3 font-serif"
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-normal text-white leading-[1.1] mb-6">
                Build Your Future in <br/>
                <span className="text-[#f59e0b] italic font-medium tracking-wide">Hospitality</span> at AMC
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-light">
                Start your Bachelor of Hotel Management (BHM) journey at AMC Degree College, a leading hotel management college in Bangalore, with industry-focused training, practical exposure, and strong career support.
              </p>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Industry-focused hotel management courses",
                  "Practical training in kitchens, service, and hotel operations",
                  "Internship exposure with leading hospitality brands",
                  "Career support for hospitality roles in India and globally"
                ].map((point, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + (idx * 0.1) }}
                    className="flex items-start gap-4 group"
                  >
                    <CheckCircle2 className="w-6 h-6 text-[#f59e0b] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-100 text-base md:text-lg font-light">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Content: Lead Generation Form */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full lg:w-5/12 xl:w-1/3 max-w-md mx-auto lg:mx-0"
            >
              <div className="bg-white rounded-xl shadow-2xl p-6 md:p-8 relative overflow-hidden">
                {/* Accent Top Border */}
                <div className="absolute top-0 left-0 w-full h-2 bg-[#f59e0b]" />
                
                <h3 className="text-2xl font-bold text-[#001f3f] mb-2 font-serif">Free Counseling</h3>
                <p className="text-gray-600 mb-6 text-sm">Register for a free hospitality career counseling session.</p>
                
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="sr-only">Full Name</label>
                    <input type="text" placeholder="Name" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent outline-none transition-all placeholder:text-gray-400" required />
                  </div>
                  <div>
                    <label className="sr-only">Phone Number</label>
                    <input type="tel" placeholder="Phone" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent outline-none transition-all placeholder:text-gray-400" required />
                  </div>
                  <div>
                    <label className="sr-only">City</label>
                    <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent outline-none transition-all placeholder:text-gray-400" required />
                  </div>
                  <div>
                    <label className="sr-only">Course Interest</label>
                    <select className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-900 focus:ring-2 focus:ring-[#f59e0b] focus:border-transparent outline-none transition-all appearance-none cursor-pointer" required>
                      <option value="BHM">Bachelor of Hotel Management (BHM)</option>
                      <option value="BBA">BBA in Aviation & Hospitality</option>
                      <option value="MBA">MBA in Hospitality</option>
                    </select>
                  </div>
                  <button type="submit" className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white font-bold py-4 rounded-lg shadow-lg shadow-orange-500/30 transition-all uppercase tracking-wider mt-2 flex items-center justify-center gap-2 text-sm">
                    <GraduationCap className="w-5 h-5" />
                    Admissions Open — Apply Now
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </main>
      </div>

      {/* Accreditations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif text-[#001f3f] mb-10 opacity-90">Accreditations</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10">
            {[
              {
                name: "All India Council for Technical Education (AICTE)",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/e/eb/All_India_Council_for_Technical_Education_logo.png/220px-All_India_Council_for_Technical_Education_logo.png"
              },
              {
                name: "Bangalore University (BU)",
                logo: "https://upload.wikimedia.org/wikipedia/en/5/52/Bangalore_University_logo.png"
              },
              {
                name: "National Assessment and Accreditation Council (NAAC)",
                logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/63/National_Assessment_and_Accreditation_Council_logo.png/220px-National_Assessment_and_Accreditation_Council_logo.png"
              }
            ].map((acc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="w-56 h-36 md:w-[240px] md:h-[150px] bg-white border border-rose-100/60 rounded-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] flex items-center justify-center p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <img src={acc.logo} alt={acc.name} className="w-full h-full object-contain mix-blend-multiply" title={acc.name} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Point Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* Left Content */}
            <div className="lg:w-2/3 flex flex-col gap-10">
              
              {/* Item 1 */}
              <div className="flex flex-col sm:flex-row gap-6 group">
                <div className="sm:w-1/3 shrink-0">
                  <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600" alt="Luxury Hotels" className="w-full h-48 sm:h-full object-cover shadow-sm" />
                </div>
                <div className="sm:w-2/3 flex flex-col justify-center py-2">
                  <h3 className="text-[22px] font-medium text-[#113264] mb-2 leading-tight">
                    Premium Luxury Hotels
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                    Some students aspire to build a career in premium luxury hotels, focusing on international travel and global hospitality management, where they can interact with diverse cultures and work in top-tier environments.
                  </p>
                  <div>
                    <button className="bg-[#1b438b] hover:bg-[#113264] text-white text-[13px] font-medium px-4 py-2 rounded-sm shadow-sm transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center">
                <div className="h-[1px] bg-gray-200 flex-1"></div>
                <div className="w-1.5 h-1.5 bg-[#1b438b]"></div>
                <div className="h-[1px] bg-gray-200 flex-1"></div>
              </div>

              {/* Item 2 */}
              <div className="flex flex-col sm:flex-row gap-6 group">
                <div className="sm:w-1/3 shrink-0">
                  <img src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&q=80&w=600" alt="Cruise Ships" className="w-full h-48 sm:h-full object-cover shadow-sm" />
                </div>
                <div className="sm:w-2/3 flex flex-col justify-center py-2">
                  <h3 className="text-[22px] font-medium text-[#113264] mb-2 leading-tight">
                    Cruise Ship Jobs
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                    Many are drawn to highly rewarding cruise ship jobs with elite global fleets, offering substantial tax-free income, exceptional saving potential, and the unique opportunity to voyage around the world.
                  </p>
                  <div>
                    <button className="bg-[#1b438b] hover:bg-[#113264] text-white text-[13px] font-medium px-4 py-2 rounded-sm shadow-sm transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center">
                <div className="h-[1px] bg-gray-200 flex-1"></div>
                <div className="w-1.5 h-1.5 bg-[#1b438b]"></div>
                <div className="h-[1px] bg-gray-200 flex-1"></div>
              </div>
              
              {/* Item 3 */}
              <div className="flex flex-col sm:flex-row gap-6 group">
                <div className="sm:w-1/3 shrink-0">
                  <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=600" alt="Culinary Entrepreneurship" className="w-full h-48 sm:h-full object-cover shadow-sm" />
                </div>
                <div className="sm:w-2/3 flex flex-col justify-center py-2">
                  <h3 className="text-[22px] font-medium text-[#113264] mb-2 leading-tight">
                    Food-Tech & Culinary
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                    Others aim to capture booming food-tech (like Zomato) and culinary entrepreneurship opportunities, launching their own innovative cloud kitchens, fine-dining ventures, or modern restaurant startups.
                  </p>
                  <div>
                    <button className="bg-[#1b438b] hover:bg-[#113264] text-white text-[13px] font-medium px-4 py-2 rounded-sm shadow-sm transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="flex items-center justify-center">
                <div className="h-[1px] bg-gray-200 flex-1"></div>
                <div className="w-1.5 h-1.5 bg-[#1b438b]"></div>
                <div className="h-[1px] bg-gray-200 flex-1"></div>
              </div>

              {/* Item 4 */}
              <div className="flex flex-col sm:flex-row gap-6 group">
                <div className="sm:w-1/3 shrink-0">
                  <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=600" alt="Industry Growth" className="w-full h-48 sm:h-full object-cover shadow-sm" />
                </div>
                <div className="sm:w-2/3 flex flex-col justify-center py-2">
                  <h3 className="text-[22px] font-medium text-[#113264] mb-2 leading-tight">
                    Industry Growth & Security
                  </h3>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-4">
                    Strategic thinkers recognize the massive industry growth numbers, with hospitality hiring hitting record highs post-pandemic, guaranteeing long-term job security, competitive salaries, and rapid career progression.
                  </p>
                  <div>
                    <button className="bg-[#1b438b] hover:bg-[#113264] text-white text-[13px] font-medium px-4 py-2 rounded-sm shadow-sm transition-colors">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="flex items-center justify-center">
                <div className="h-[1px] bg-gray-200 flex-1"></div>
                <div className="w-1.5 h-1.5 bg-[#1b438b]"></div>
                <div className="h-[1px] bg-gray-200 flex-1"></div>
              </div>

            </div>

            {/* Right Content: Sidebar */}
            <div className="lg:w-1/3">
              <div className="bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.1),0_10px_20px_-2px_rgba(0,0,0,0.05)] p-8 sticky top-32 border border-gray-50">
                <h2 className="text-[26px] font-normal text-[#113264] mb-6 pb-2 border-b border-[#f59e0b] inline-block pr-8">
                  Guidance
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-[18px] font-bold text-[#113264] mb-3 leading-snug bg-yellow-100 p-2.5 rounded-r border-l-4 border-[#f59e0b]">
                    Still Searching for the Right Hotel Management Course in Bangalore?
                  </h3>
                  <p className="text-gray-700 text-[14px] leading-relaxed mb-3">
                    Choosing the right career after 12th can feel uncertain.
                  </p>
                  <ul className="text-gray-700 text-[14px] leading-relaxed space-y-2 list-disc pl-4 mb-4">
                    <li>Some students want a career in hotels and travel.</li>
                    <li>Some are passionate about cooking, service, and guest experience.</li>
                    <li>Some are searching for a BHM college in Bangalore with practical training.</li>
                  </ul>
                </div>
                
                <div className="w-full h-px bg-gray-200 mb-6"></div>

                <div className="mb-6">
                  <h3 className="text-[16px] font-medium text-[#113264] mb-2 leading-snug">
                    The Solution
                  </h3>
                  <p className="text-gray-700 text-[14px] leading-relaxed">
                    At AMC Degree College, we help you turn your interest in hospitality into real-world skills and career opportunities.
                  </p>
                </div>
                
                <div className="w-full h-px bg-gray-200 mb-4"></div>
                
                <div className="text-right">
                  <a href="#" className="text-[#007bff] hover:text-[#0056b3] text-[15px] font-medium flex items-center justify-end gap-1">
                    Apply Now <ChevronRight className="w-4 h-4" />
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif text-black mb-4">
              Bachelor of Hotel Management (BHM) Program
            </h2>
            <div className="w-24 h-[1px] bg-gray-400 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              A structured bachelor degree in hotel management designed to build skills across all hospitality functions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            
            {/* Card 1 */}
            <div className="bg-[#fffcf2] border border-[#fde68a] rounded-lg p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-5 overflow-hidden rounded shadow-sm">
                <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80" alt="Core Areas of Study" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-[#0056b3] text-xl font-medium tracking-tight mb-3">Core Areas of Study</h3>
              <ul className="text-gray-700 space-y-2 mb-6 flex-1 text-[15px] list-disc pl-5">
                <li>Food Production (Kitchen Training)</li>
                <li>Food &amp; Beverage Service</li>
                <li>Front Office Operations</li>
                <li>Housekeeping Management</li>
                <li>Hospitality Marketing &amp; Management</li>
              </ul>
              <a href="#" className="text-[#cc0000] font-bold text-sm hover:underline mt-auto">Read more &gt;&gt;</a>
            </div>

            {/* Card 2 */}
            <div className="bg-[#fffcf2] border border-[#fde68a] rounded-lg p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-5 overflow-hidden rounded shadow-sm">
                <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" alt="What You Learn" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-[#0056b3] text-xl font-medium tracking-tight mb-3">What You Learn</h3>
              <ul className="text-gray-700 space-y-2 mb-6 flex-1 text-[15px] list-disc pl-5">
                <li>Professional cooking and kitchen operations</li>
                <li>Guest service and hospitality skills</li>
                <li>Hotel management and operations</li>
                <li>Communication and personality development</li>
              </ul>
              <a href="#" className="text-[#cc0000] font-bold text-sm hover:underline mt-auto">Read more &gt;&gt;</a>
            </div>

            {/* Card 3 */}
            <div className="bg-[#fffcf2] border border-[#fde68a] rounded-lg p-4 flex flex-col shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-48 mb-5 overflow-hidden rounded shadow-sm">
                <img src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80" alt="Career Paths" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="text-[#0056b3] text-xl font-medium tracking-tight mb-3">Career Paths</h3>
              <ul className="text-gray-700 space-y-2 mb-6 flex-1 text-[15px] list-disc pl-5">
                <li>Hotel Management</li>
                <li>Chef / Culinary Specialist</li>
                <li>Front Office Executive</li>
                <li>Cabin Crew (with additional training)</li>
                <li>Event Manager</li>
                <li>Hospitality Entrepreneur</li>
              </ul>
              <a href="#" className="text-[#cc0000] font-bold text-sm hover:underline mt-auto">Read more &gt;&gt;</a>
            </div>

          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button className="bg-[#990000] hover:bg-[#7a0000] text-white font-medium px-8 py-3 rounded-full transition-colors w-full sm:w-auto shadow-md">
              View admission process
            </button>
            <button className="bg-[#5a6270] hover:bg-[#4a515d] text-white font-medium px-8 py-3 rounded-full transition-colors w-full sm:w-auto shadow-md">
              Read about placements
            </button>
          </div>
          
        </div>
      </section>

      {/* Why AMC Section */}
      <section className="py-20 bg-[#eae6df]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif text-[#001f3f] mb-4">
              Why Choose AMC for Hotel Management in Bangalore
            </h2>
            <div className="w-24 h-[2px] bg-[#f59e0b] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Industry-Focused Learning",
                desc: "Curriculum aligned with modern hospitality management courses.",
                img: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80"
              },
              {
                title: "Practical Training",
                desc: "Hands-on experience in kitchens, service, and hotel simulations.",
                img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80"
              },
              {
                title: "Internship Opportunities",
                desc: "Exposure to real hotels and hospitality environments.",
                img: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80"
              },
              {
                title: "Career Support",
                desc: "Focused on hospitality placements in Bangalore and global opportunities.",
                img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[360px] rounded-xl overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                {/* Background Image */}
                <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                
                {/* Default Bottom Gradient & Title */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-0"></div>
                <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col items-start transition-opacity duration-500 group-hover:opacity-0">
                  <span className="text-3xl lg:text-4xl font-bold text-white tracking-tight drop-shadow-md leading-none mb-1">{item.title.split(' ')[0]}</span>
                  <span className="text-xl lg:text-2xl font-light text-white drop-shadow-md leading-none">{item.title.split(' ').slice(1).join(' ')}</span>
                </div>

                {/* Hover Dark Overlay & Content */}
                <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center">
                  <h3 className="text-2xl font-serif text-white mb-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-[15px] leading-relaxed mb-8 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-200">
                    {item.desc}
                  </p>
                  <button className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300 border border-[#f59e0b] text-white text-sm font-medium px-6 py-2 rounded-sm hover:bg-[#f59e0b] hover:border-transparent transition-colors">
                    Know More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placements Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#001f3f] mb-4">
              Career Opportunities That Begin with Real Training
            </h2>
            <p className="text-gray-600 text-lg">
              Students at AMC Degree College step into the hospitality industry with practical skills and hands-on experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 pt-10 border-t border-gray-200">
            {/* Highlights */}
            <div>
              <h3 className="text-5xl font-serif text-[#001f3f] mb-4">20k+</h3>
              <div className="h-px w-12 bg-[#f59e0b] mb-5"></div>
              <p className="text-black font-medium text-lg mb-2 tracking-tight">Alumni Network</p>
              <p className="text-gray-600 text-[15px] leading-relaxed">A strong global network of successful professionals shaping the hospitality industry.</p>
            </div>
            
            <div>
              <h3 className="text-5xl font-serif text-[#001f3f] mb-4">100%</h3>
              <div className="h-px w-12 bg-[#f59e0b] mb-5"></div>
              <p className="text-black font-medium text-lg mb-2 tracking-tight">Dedicated Training</p>
              <p className="text-gray-600 text-[15px] leading-relaxed">Practical, hands-on training tailored for hospitality careers and operational excellence.</p>
            </div>

            <div>
              <h3 className="text-5xl font-serif text-[#001f3f] mb-4">Global</h3>
              <div className="h-px w-12 bg-[#f59e0b] mb-5"></div>
              <p className="text-black font-medium text-lg mb-2 tracking-tight">Career Pathways</p>
              <p className="text-gray-600 text-[15px] leading-relaxed">Exciting opportunities in top hotels, luxury airlines, and premier global events.</p>
            </div>
          </div>

          <div className="bg-[#001f3f] rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#f59e0b]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif mb-4">Industry Exposure with Leading Hospitality Brands</h3>
              <p className="text-gray-300 max-w-2xl mx-auto mb-10 font-light text-sm md:text-base">
                Students from AMC Degree College gain exposure to leading hospitality brands through internships and industry interactions.
              </p>
              
              <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                {[
                  { name: 'Taj Hotels', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Taj_Hotels_logo.svg/3840px-Taj_Hotels_logo.svg.png' },
                  { name: 'Marriott', logo: 'https://indianculinaryacademy.com/img/4.png' },
                  { name: 'Hilton', logo: 'https://indianculinaryacademy.com/img/logo%20hotel%20hilton.png' },
                  { name: 'Hyatt', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqen5r8yjo4Id03fr2bzFT8nXX1Rd-3grCVa8eCTcUfw&s=10' },
                  { name: 'ITC Hotels', logo: 'https://indianculinaryacademy.com/img/5.png' },
                  { name: 'The Oberoi Group', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa_wdr3iQ1DFcmaXSUhNlZueigxnue8z9IcyW3RUmlrg4msOolOByiLn-B&s=10' }
                ].map((brand, i) => (
                  <div key={i} className="h-20 w-36 bg-white rounded-lg p-3 flex items-center justify-center hover:scale-105 transition-transform duration-300 shadow-sm border border-gray-100">
                    <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Experience Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold uppercase mb-8 text-center md:text-left tracking-wide">
            <span className="text-[#4b3b78]">STUDENT</span> <span className="text-[#f5a623]">EXPERIENCE</span>
          </h2>
          
          <div className="flex flex-col lg:flex-row w-full shadow-md">
            {/* Left Image */}
            <div className="lg:w-1/2 relative h-72 lg:h-auto min-h-[400px]">
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80" alt="Student Experience" className="absolute inset-0 w-full h-full object-cover" />
            </div>
            
            {/* Right Content */}
            <div className="lg:w-1/2 bg-[#f5a623] py-12 pr-8 pl-8 md:pr-12 md:pl-12 lg:pr-16 lg:pl-16 flex flex-col justify-center relative">
              <div className="bg-white self-start px-6 py-3 md:px-8 md:py-4 mb-8 shadow-sm relative z-10 -mt-8 lg:-mt-0 lg:-ml-12 max-w-[95%]">
                <h3 className="text-xl md:text-2xl font-bold text-[#4b3b78]">From Training to Real Hospitality Skills</h3>
              </div>
              
              <p className="text-gray-900 font-medium mb-4 text-[15px] leading-relaxed">
                Students at AMC Degree College gain practical exposure through:
              </p>
              <ul className="text-gray-900 space-y-3 mb-6 list-disc pl-5 text-[15px] font-medium leading-relaxed">
                <li>Kitchen and culinary training</li>
                <li>Restaurant and service simulations</li>
                <li>Hotel operations practice</li>
                <li>Industrial training and internships</li>
              </ul>
              <p className="text-gray-900 font-medium text-[15px] leading-relaxed mt-4">
                Every student graduates with practical hospitality skills, not just theoretical knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Exposure Section */}
      <section className="py-16 bg-[#001f3f] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
             <h2 className="text-3xl font-serif text-white tracking-tight">Learn from the Real Hospitality Industry</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
            
            {/* Card 1 */}
            <div className="bg-[#00152b] rounded-xl p-6 md:p-8 w-full md:w-1/2 flex flex-col gap-6 border border-[#002a5c] group transition-colors hover:border-[#f5a623]/60">
              <div>
                <h3 className="text-2xl font-serif text-[#f5a623] mb-4 tracking-tight">The Team</h3>
                <div className="text-gray-300 space-y-2 text-[15px] leading-relaxed">
                  <p>• Guest lectures from industry professionals</p>
                  <p>• Hotel internships and training</p>
                </div>
              </div>
              <div className="w-full h-40 rounded-lg overflow-hidden mt-auto">
                 <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" alt="Industry Professionals" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>

            {/* Plus Icon */}
            <div className="hidden md:flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#002a5c] bg-[#001f3f] items-center justify-center z-10 text-[#f5a623]">
               <Plus className="w-4 h-4" />
            </div>

            {/* Card 2 */}
            <div className="bg-[#00152b] rounded-xl p-6 md:p-8 w-full md:w-1/2 flex flex-col gap-6 border border-[#002a5c] group transition-colors hover:border-[#f5a623]/60">
              <div>
                <h3 className="text-2xl font-serif text-[#f5a623] mb-4 tracking-tight">The Training</h3>
                <div className="text-gray-300 space-y-2 text-[15px] leading-relaxed">
                  <p>• Workshops and live demonstrations</p>
                  <p>• Exposure to hospitality operations</p>
                </div>
              </div>
              <div className="w-full h-40 rounded-lg overflow-hidden mt-auto bg-[#1a1a1a] flex items-center justify-center">
                 <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80" alt="Hospitality Operations" className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Careers Section */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-[#001f3f] mb-4">
              Career Opportunities After BHM in Bangalore
            </h2>
            <p className="text-gray-600 text-lg">
              The hospitality industry offers global career opportunities for skilled professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: Building, title: "Hotel Operations" },
              { icon: ChefHat, title: "Chef / Culinary Roles" },
              { icon: Plane, title: "Airlines & Cabin Crew" },
              { icon: Calendar, title: "Event Management" },
              { icon: Globe, title: "Hospitality & Tourism" }
            ].map((career, i) => (
              <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-6 flex flex-col items-center text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-white border border-gray-200 shadow-sm rounded-full flex items-center justify-center mb-4 text-[#001f3f] group-hover:text-white group-hover:bg-[#f59e0b] group-hover:border-[#f59e0b] transition-colors duration-300">
                  <career.icon className="w-7 h-7" />
                </div>
                <h3 className="font-semibold text-[#001f3f] text-[16px]">{career.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonials Section */}
      <section className="py-24 bg-[#00152b] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20 relative">
            <h2 className="text-4xl md:text-5xl text-white font-light tracking-tight mb-2">
              Hear from some of our
            </h2>
            <h2 className="text-4xl md:text-5xl text-[#f5a623] font-serif italic tracking-tight">
              most successful students
            </h2>
            
            {/* Subtle background circle line like reference */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none -z-10"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">
            {[
              {
                name: "Rahul Sharma",
                program: "BHM Graduate",
                quote: "AMC helped me build confidence and practical skills for the hospitality industry. The faculty guided me at every step.",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=600&h=800"
              },
              {
                name: "Sneha Reddy",
                program: "Intern at Taj Group",
                quote: "The training and internships gave me real exposure to hotel operations. I felt completely prepared for the industry.",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600&h=800"
              },
              {
                name: "Vikram Singh",
                program: "Culinary Arts",
                quote: "A great environment to learn hospitality and service skills. The kitchen labs are top-notch and exactly like real hotels.",
                image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=600&h=800"
              }
            ].map((testimonial, i) => (
              <div key={i} className={`relative w-full sm:w-[320px] h-[450px] rounded-3xl overflow-hidden bg-[#001f3f] cursor-pointer shadow-2xl transition-transform duration-500 ${activeTestimonial === i ? '-translate-y-2' : ''}`}>
                
                {/* Default State (Front) */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${activeTestimonial === i ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                  <div className="absolute inset-0">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover object-top opacity-90" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#00152b] via-[#00152b]/40 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                    <h3 className="text-white font-semibold text-2xl mb-1">{testimonial.name}</h3>
                    <p className="text-[#f5a623] text-sm font-medium">{testimonial.program}</p>
                  </div>
                </div>

                {/* Active State (Back) */}
                <div className={`absolute inset-0 bg-[#002a5c] transition-opacity duration-500 flex flex-col p-8 ${activeTestimonial === i ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-auto">
                      <h3 className="text-white font-semibold text-2xl mb-1">{testimonial.name}</h3>
                      <p className="text-[#f5a623] text-sm font-medium">{testimonial.program}</p>
                    </div>
                    
                    <p className="text-gray-200 text-[15px] leading-relaxed mb-4">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Subtle bottom line indicator */}
          <div className="mt-16 max-w-md mx-auto flex items-center justify-center gap-4">
             <div className="h-px bg-white/20 flex-1"></div>
             <div className="w-16 h-px bg-white/60"></div>
             <div className="h-px bg-white/20 flex-1"></div>
          </div>
        </div>
      </section>

      {/* Campus Life Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
            
            <div className="md:w-5/12 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-serif text-[#001f3f] mb-6 leading-[1.1]">
                A Learning Environment That <span className="text-[#f5a623] italic">Builds Confidence</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                At AMC Degree College, students experience a vibrant campus life that perfectly balances academics with practical growth.
              </p>
              <div className="w-16 h-1 bg-[#f5a623] rounded-full mx-auto md:mx-0"></div>
            </div>

            <div className="md:w-7/12 w-full relative">
              {/* Subtle background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#f5a623]/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                {[
                  { title: "Interactive and practical learning", icon: Lightbulb, desc: "Hands-on experience in simulated real-world scenarios." },
                  { title: "Skill-based training", icon: Target, desc: "Industry-aligned curriculum tailored for career readiness." },
                  { title: "Collaborative student culture", icon: Users, desc: "A vibrant community of driven peers and expert mentors." },
                  { title: "Balanced exposure", icon: BookOpen, desc: "Perfect harmony between theoretical knowledge and application." }
                ].map((item, i) => (
                  <div key={i} className="bg-white rounded-2xl p-7 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,31,63,0.08)] hover:-translate-y-1 transition-all duration-300 group flex flex-col items-start">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#001f3f] mb-5 group-hover:bg-[#001f3f] group-hover:text-white transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-[#001f3f] font-semibold text-[17px] leading-snug mb-3">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Final CTA Banner Section */}
      <section className="py-20 bg-[#001f3f] relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-[#f5a623] opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-blue-500 opacity-10 blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-[1.1]">
            Start Your Career in <span className="text-[#f5a623] italic">Hospitality Today</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 mx-auto">
            Join the BHM program in Bangalore at AMC and step into a growing global industry.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-sm font-medium text-gray-300">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#f5a623]" />
              </div>
              <span className="text-left leading-tight">100% Placement<br/>Assistance</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-[#f5a623]" />
              </div>
              <span className="text-left leading-tight">Industry-Aligned<br/>Curriculum</span>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-16 bg-white relative border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif text-[#001f3f] mb-2">
              Book Your Free Counseling Session
            </h3>
            <p className="text-gray-500 text-sm">
              Leave your details below and we will get back to you shortly.
            </p>
          </div>

          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f5a623] focus:border-[#f5a623] transition-all bg-gray-50 focus:bg-white text-sm" />
              <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f5a623] focus:border-[#f5a623] transition-all bg-gray-50 focus:bg-white text-sm" />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f5a623] focus:border-[#f5a623] transition-all bg-gray-50 focus:bg-white text-sm" />
              <select defaultValue="" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-1 focus:ring-[#f5a623] focus:border-[#f5a623] transition-all bg-gray-50 focus:bg-white text-sm text-gray-600">
                <option value="" disabled>Select Course</option>
                <option value="bhm">Bachelor of Hotel Management (BHM)</option>
                <option value="bba-aviation">BBA in Aviation</option>
                <option value="diploma-culinary">Diploma in Culinary Arts</option>
              </select>
            </div>

            <button type="button" className="w-full sm:w-auto mx-auto px-8 bg-[#001f3f] hover:bg-[#002a5c] text-white font-medium text-sm py-3.5 rounded-lg transition-all flex items-center justify-center gap-2 mt-6">
              Request Callback
              <ChevronRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
