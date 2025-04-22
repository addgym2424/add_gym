import { useState, useRef } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ChevronRight, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import heroimage from '../assets/gym_hero.jpg'; 
import homegym from '../assets/home_gym.jpg';
import resigym from '../assets/resi_gym.jpg';
import perso from '../assets/personal.jpg';
import home from  '../assets/home.jpg';
import sesh from  '../assets/training_sesh.jpg';
import pic from '../assets/pic.png';
export default function AddGymLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  const formRef = useRef();

  // Function to handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Replace with your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_lrm20ey';
    const templateId = 'template_1loh8va';
    const publicKey = '1ggY8LRSu4amFw6vN';

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setFormStatus({ submitting: false, submitted: true, error: null });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
        setFormStatus({ submitting: false, submitted: false, error: error.text });
      });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Modern Header with Floating Nav */}
      <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-black text-white px-3 py-1 rounded">ADD</span>
            <span className="text-2xl font-bold ml-1">GYM</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-12">
            <a href="#home" className="font-medium hover:text-black/60 transition">Home</a>
            <a href="#services" className="font-medium hover:text-black/60 transition">Services</a>
            <a href="#about" className="font-medium hover:text-black/60 transition">About</a>
            <a href="#contact" className="font-medium hover:text-black/60 transition">Contact</a>
          </nav>
          
          <div className="hidden md:block">
            <a href="#contact" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition font-medium">Get Started</a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation - Full Screen Overlay */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
            <button 
              className="absolute top-4 right-6"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center space-y-8">
              <a href="#home" className="text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="text-2xl font-medium" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="#contact" className="bg-black text-white px-6 py-2 rounded-full mt-4" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section - Modern Split Design */}
      <section id="home" className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-black/10 text-black px-4 py-1 rounded-full mb-6 font-medium">Transform Your Fitness Journey</div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">Fitness On <span className="text-black bg-black/10 px-2">Your</span> Terms</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Create your perfect gym space anywhere, anytime. One-time investment, lifetime of fitness results.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#services" className="bg-black text-white font-medium py-3 px-8 rounded-full shadow-lg hover:bg-gray-800 transition flex items-center justify-center">
                  Explore Services <ArrowRight size={18} className="ml-2" />
                </a>
                <a href="#contact" className="bg-transparent border-2 border-black font-medium py-3 px-8 rounded-full hover:bg-black hover:text-white transition flex items-center justify-center">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square w-full bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                {/* We'll use a placeholder instead of repeatedly using the logo */}
                <img src={heroimage} alt="Fitness training" className="w-full h-full object-cover" />
                <div className="absolute -bottom-6 -left-6 bg-black text-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-bold mb-1">One-Time Investment</p>
                  <p className="text-sm">Lifetime of fitness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Custom Setup</h3>
              <p className="text-gray-600 text-sm">Personalized to your space</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Expert Training</h3>
              <p className="text-gray-600 text-sm">Professional guidance</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Space Efficient</h3>
              <p className="text-gray-600 text-sm">Maximize any area</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-black text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <span className="font-bold">4</span>
              </div>
              <h3 className="font-bold mb-2">Long-term Value</h3>
              <p className="text-gray-600 text-sm">Sustainable investment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Card Based */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-black/10 text-black px-4 py-1 rounded-full mb-4 font-medium">Our Services</span>
            <h2 className="text-4xl font-bold mb-6">Solutions That Adapt To You</h2>
            <p className="text-xl text-gray-600">Customized fitness solutions that adapt to your space, budget, and personal goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 - Modern Card */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
              <div className="h-53 bg-gray-100 relative overflow-hidden">
                <img src={homegym} alt="Home Gym Setup" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <ChevronRight size={40} className="text-white" />
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">Home Gym Setup</h3>
                <p className="text-gray-600 mb-4">Transform your space into a fully functional gym that meets your specific fitness goals and spatial requirements.</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Customized equipment plans</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Space optimization</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Budget-friendly options</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a href="#contact" className="inline-block font-medium text-black hover:underline">Learn more <ArrowRight size={16} className="inline ml-1" /></a>
              </div>
            </div>
            
            {/* Service 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
              <div className="h-55 bg-gray-100 relative overflow-hidden">
                <img src={resigym} alt="Residential Gym Training" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <ChevronRight size={40} className="text-white" />
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">Residential Gym Training</h3>
                <p className="text-gray-600 mb-4">Expert training in your residential gym facility with personalized guidance on your schedule.</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Flexible scheduling</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Customized workout plans</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Progress tracking</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a href="#contact" className="inline-block font-medium text-black hover:underline">Learn more <ArrowRight size={16} className="inline ml-1" /></a>
              </div>
            </div>
            
            {/* Service 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
              <div className="h-54 bg-gray-100 relative overflow-hidden">
                <img src={perso} alt="Personal Training at Home" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <ChevronRight size={40} className="text-white" />
                </div>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-bold mb-3">Personal Training at Home</h3>
                <p className="text-gray-600 mb-4">Expert training in the comfort of your home with specialized workouts tailored to your needs.</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Corrective posture training</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Mobility & flexibility focus</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Rehabilitation programs</span>
                  </li>
                </ul>
              </div>
              <div className="px-6 pb-6">
                <a href="#contact" className="inline-block font-medium text-black hover:underline">Learn more <ArrowRight size={16} className="inline ml-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section - Modern Split */}
      <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <span className="inline-block bg-black/10 text-black px-4 py-1 rounded-full mb-4 font-medium">Our Story</span>
              <h2 className="text-4xl font-bold mb-6">About ADD GYM</h2>
              <p className="text-gray-700 mb-6 text-lg">ADD GYM was founded with a simple yet powerful vision: to make fitness accessible to everyone, everywhere. We believe that a good fitness regimen shouldn't be limited by space, location, or budget constraints.</p>
              
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-8">To empower individuals and communities to achieve their fitness goals through customized solutions that fit their unique circumstances, creating self-reliant gymnasiums accessible for generations.</p>
              
              <div className="space-y-4">
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-gray-700">To start a new chapter we all need to restart ourselves.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-gray-700">Our concept optimizes fitness and wellness at its best potential.</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">3</span>
                  </div>
                  <div>
                    <p className="text-gray-700"><span className="font-bold">USP:</span> One-time investment for a self-reliant gymnasium accessible for generations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="aspect-square max-w-lg mx-auto relative">
                <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-gray-200 rounded-2xl overflow-hidden shadow-xl">
                  <img src={sesh} alt="Training session" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-gray-200 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                  <img src={home} holdalt="Home gym setup" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 bg-black text-white p-4 rounded-xl shadow-lg">
                  <p className="text-sm font-bold">Experience</p>
                  <p className="text-2xl font-bold">10+ Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Carousel Style */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-black/10 text-black px-4 py-1 rounded-full mb-4 font-medium">Testimonials</span>
            <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Hear from those who have transformed their fitness journey with ADD GYM.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 - Modern Card */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 relative">
              <div className="absolute -top-5 left-8">
                <div className="inline-flex bg-black text-white p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 9.75C9.75 8.09315 8.40685 6.75 6.75 6.75H4.5C3.25736 6.75 2.25 7.75736 2.25 9V10.5C2.25 11.7426 3.25736 12.75 4.5 12.75H6.75C7.99264 12.75 9 13.7574 9 15V16.5C9 17.7426 7.99264 18.75 6.75 18.75H4.5C3.25736 18.75 2.25 17.7426 2.25 16.5V15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.75 9.75C21.75 8.09315 20.4069 6.75 18.75 6.75H16.5C15.2574 6.75 14.25 7.75736 14.25 9V10.5C14.25 11.7426 15.2574 12.75 16.5 12.75H18.75C19.9926 12.75 21 13.7574 21 15V16.5C21 17.7426 19.9926 18.75 18.75 18.75H16.5C15.2574 18.75 14.25 17.7426 14.25 16.5V15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 italic mb-8 pt-4">"ADD GYM transformed my unused garage into an amazing workout space that fits all my needs. The one-time investment has completely changed my fitness routine for the better."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src={pic} alt="Rahul Sharma" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Rahul Sharma</h4>
                  <p className="text-gray-600 text-sm">Home Gym Setup</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 relative">
              <div className="absolute -top-5 left-8">
                <div className="inline-flex bg-black text-white p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 9.75C9.75 8.09315 8.40685 6.75 6.75 6.75H4.5C3.25736 6.75 2.25 7.75736 2.25 9V10.5C2.25 11.7426 3.25736 12.75 4.5 12.75H6.75C7.99264 12.75 9 13.7574 9 15V16.5C9 17.7426 7.99264 18.75 6.75 18.75H4.5C3.25736 18.75 2.25 17.7426 2.25 16.5V15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.75 9.75C21.75 8.09315 20.4069 6.75 18.75 6.75H16.5C15.2574 6.75 14.25 7.75736 14.25 9V10.5C14.25 11.7426 15.2574 12.75 16.5 12.75H18.75C19.9926 12.75 21 13.7574 21 15V16.5C21 17.7426 19.9926 18.75 18.75 18.75H16.5C15.2574 18.75 14.25 17.7426 14.25 16.5V15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 italic mb-8 pt-4">"Having a personal trainer come to my home has been life-changing. The flexibility of scheduling and personalized attention to my posture issues has made all the difference."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src={pic} alt="Priya Patel" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Priya Patel</h4>
                  <p className="text-gray-600 text-sm">Personal Training</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition duration-300 relative">
              <div className="absolute -top-5 left-8">
                <div className="inline-flex bg-black text-white p-2 rounded-full">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.75 9.75C9.75 8.09315 8.40685 6.75 6.75 6.75H4.5C3.25736 6.75 2.25 7.75736 2.25 9V10.5C2.25 11.7426 3.25736 12.75 4.5 12.75H6.75C7.99264 12.75 9 13.7574 9 15V16.5C9 17.7426 7.99264 18.75 6.75 18.75H4.5C3.25736 18.75 2.25 17.7426 2.25 16.5V15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21.75 9.75C21.75 8.09315 20.4069 6.75 18.75 6.75H16.5C15.2574 6.75 14.25 7.75736 14.25 9V10.5C14.25 11.7426 15.2574 12.75 16.5 12.75H18.75C19.9926 12.75 21 13.7574 21 15V16.5C21 17.7426 19.9926 18.75 18.75 18.75H16.5C15.2574 18.75 14.25 17.7426 14.25 16.5V15.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <p className="text-gray-700 italic mb-8 pt-4">"Our society gym was barely used until ADD GYM started offering training sessions. Now it's a vibrant community space that brings residents together."</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden mr-4">
                  <img src={pic} alt="Amit Singh" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold">Amit Singh</h4>
                  <p className="text-gray-600 text-sm">Residential Gym Training</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Modern Split */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-black/10 text-black px-4 py-1 rounded-full mb-4 font-medium">Contact Us</span>
            <h2 className="text-4xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-600">Ready to start your fitness journey? Reach out to us today.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex items-start">
                  <div className="bg-black text-white p-3 rounded-xl mr-4">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p className="text-gray-700">+91 7602930279</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <div className="flex items-start">
                  <div className="bg-black text-white p-3 rounded-xl mr-4">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <p className="text-gray-700">addgym2424@gmail.com</p>
                  </div>
                </div>
              </div>
              
             
              
              <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
                <h4 className="font-bold text-lg mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="https://www.instagram.com/_addgym/" className="bg-black text-white p-3 rounded-full hover:bg-gray-800 transition">
                    <Instagram size={20} />
                  </a>
                  
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white p-8 rounded-2xl shadow-md">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                {formStatus.submitted ? (
                  <div className="bg-green-100 border border-green-200 text-green-700 px-6 py-4 rounded-xl mb-6">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <div>
                        <strong className="font-bold block">Thank you!</strong>
                        <span>Your message has been sent successfully. We'll get back to you soon.</span>
                      </div>
                    </div>
                  </div>
                ) : formStatus.error ? (
                  <div className="bg-red-100 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6">
                    <div className="flex items-center">
                      <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div>
                        <strong className="font-bold block">Error!</strong>
                        <span>Something went wrong. Please try again later.</span>
                      </div>
                    </div>
                  </div>
                ) : null}
                
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block mb-2 font-medium text-gray-700">Full Name</label>
                      <input 
                        type="text" 
                        name="name"
                        id="name" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition" 
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2 font-medium text-gray-700">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        id="email" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition" 
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      id="phone" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition" 
                      placeholder="+91 98XXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block mb-2 font-medium text-gray-700">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="Home Gym Setup">Home Gym Setup</option>
                      <option value="Residential Gym Training">Residential Gym Training</option>
                      <option value="Personal Training at Home">Personal Training at Home</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 font-medium text-gray-700">Your Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows="4" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition" 
                      placeholder="Tell us about your fitness goals..."
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-black text-white font-medium py-3 px-8 rounded-xl hover:bg-gray-800 transition disabled:opacity-70 flex items-center justify-center"
                    disabled={formStatus.submitting}
                  >
                    {formStatus.submitting ? 'Sending...' : 'Send Message'}
                    <ArrowRight size={20} className="ml-2" />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Modern Gradient */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Start Your Fitness Journey Today</h2>
            <p className="text-xl mb-8 opacity-90">One-time investment. Lifetime of fitness. Don't wait for tomorrow - your transformation begins now.</p>
            <div className="inline-flex items-center bg-white text-black font-medium py-4 px-8 rounded-full hover:bg-gray-100 transition shadow-lg">
              <a href="#contact" className="flex items-center">
                Get Started Now <ArrowRight size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-100 py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center mb-6">
                <span className="text-xl font-bold bg-black text-white px-2 py-1 rounded mr-1">ADD</span>
                <span className="text-xl font-bold">GYM</span>
              </div>
              <p className="text-gray-600 mb-6 pr-12">Creating self-reliant gymnasiums accessible for each individual, society, and community. One-time investment, lifetime of fitness.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-black transition">
                  <Instagram size={20} />
                </a>
              
              </div>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-600 hover:text-black transition">Home</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-black transition">Services</a></li>
                <li><a href="#about" className="text-gray-600 hover:text-black transition">About</a></li>
                <li><a href="#contact" className="text-gray-600 hover:text-black transition">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                <li><a href="#services" className="text-gray-600 hover:text-black transition">Home Gym Setup</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-black transition">Residential Training</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-black transition">Personal Training</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-black transition">Fitness Consultation</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 mb-4 md:mb-0">&copy; {new Date().getFullYear()} ADD GYM. All rights reserved.</p>
            <div className="flex space-x-6">
       
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}