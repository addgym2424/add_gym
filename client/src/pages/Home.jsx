
import { useState, useRef } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ChevronRight, ArrowRight, Plus, Minus } from 'lucide-react';
import emailjs from '@emailjs/browser';
import heroimage from '../assets/gym_hero.jpg'; 
import homegym from '../assets/home_gym.jpg';
import resigym from '../assets/resi_gym.jpg';
import perso from '../assets/personal.jpg';
import home from  '../assets/home.jpg';
import vir from  '../assets/vir.jpg';
import sesh from  '../assets/training_sesh.jpg';
import pic from '../assets/pic.png';
import aglogo from '../assets/logo_ag.jpg';

export default function AddGymLandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const [selectedaService, setSelectedaService] = useState('');
  const [showAccessoryPopup, setShowAccessoryPopup] = useState(false);
  const [selectedAccessory, setSelectedAccessory] = useState('');
  const [accessoryFormStatus, setAccessoryFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  const accessoryFormRef = useRef();
const handleaServiceChange = (e) => {
  setSelectedService(e.target.value);
};
// Accessory categories and their subcategories
const accessoryOptions = {
  'Bar': ['EZ Bar', 'Olympic Bar', 'Standard Bar', 'Curl Bar', 'Trap Bar'],
  'Dumbbells': ['Adjustable Dumbbells', 'Fixed Weight Dumbbells', 'Rubber Dumbbells', 'Chrome Dumbbells'],
  'Mats': ['Yoga Mats', 'Exercise Mats', 'Puzzle Mats', 'Gym Floor Mats'],
  'Lifting Accessories': ['Weight Lifting Belt', 'Wrist Straps', 'Knee Sleeves', 'Lifting Gloves', 'Chalk'],
  'Medicinal Balls': ['Medicine Ball', 'Stability Ball', 'Slam Ball', 'Wall Ball'],
  'Bands': ['Resistance Bands', 'Loop Bands', 'Tube Bands', 'Pull Up Bands'],
  'Ropes': ['Battle Ropes', 'Jump Ropes', 'Climbing Ropes'],
  'Stepups': ['Aerobic Step', 'Plyometric Box', 'Adjustable Step'],
  'Weight Plates': ['Olympic Plates', 'Standard Plates', 'Bumper Plates', 'Rubber Plates'],
  'Kettlebells': ['Cast Iron Kettlebells', 'Competition Kettlebells', 'Adjustable Kettlebells', 'Vinyl Kettlebells'],
  'Bench set': ['Flat Bench', 'Adjustable Bench', 'Incline Bench', 'Decline Bench'],
  'Foam rollers': ['High Density Foam Roller', 'Grid Foam Roller', 'Peanut Foam Roller', 'Trigger Point Foam Roller'],
  'Ab rollers': ['Standard Ab Roller', 'Dual Wheel Ab Roller', 'Knee Pad Ab Roller'],
  'Others':[] ,
};
const handleAccessorySubmit = (e) => {
  e.preventDefault();
  setAccessoryFormStatus({ submitting: true, submitted: false, error: null });
  // Use the same EmailJS service but different template for accessories
  const serviceId = 'service_6w0c15t';
  const templateId = 'template_2hhz6u9'; // You'll need to create this template
  const publicKey = 'Tc5VqkpmO0T8uVQbn';
  emailjs.sendForm(serviceId, templateId, accessoryFormRef.current, publicKey)
    .then((result) => {
      console.log('Accessory inquiry sent successfully:', result.text);
      setAccessoryFormStatus({ submitting: false, submitted: true, error: null });
      accessoryFormRef.current.reset();
      setSelectedAccessory('');
    })
    .catch((error) => {
      console.error('Accessory inquiry failed:', error.text);
      setAccessoryFormStatus({ submitting: false, submitted: false, error: error.text });
    });
};

  const [openFaq, setOpenFaq] = useState(null);
  const formRef = useRef();

  const [selectedService, setSelectedService] = useState('');

const handleServiceChange = (e) => {
  setSelectedService(e.target.value);
};
  // Function to handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    // Replace with your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_6w0c15t';
    const templateId = 'template_5g9fnaw';
    const publicKey = 'Tc5VqkpmO0T8uVQbn';

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

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "what if anything gets damaged?",
      answer: "We provide 180 days of warranty on any products."
    },
    {
      question: "What's included in the home gym setup service?",
      answer: "Our home gym setup includes space assessment, equipment recommendation based on your goals and budget, installation assistance, and a comprehensive orientation on how to use all equipment safely and effectively."
    },
    {
      question: "Do you provide equipments or do I need to purchase it separately?",
      answer: "We provide accesories separately on demand and we also offer package deals that include both setup and equipment to ensure you get the best value for your investment."
    },
    {
      question: "Can you accommodate special population individuals (seniors, people with disabilities)?",
      answer: "Absolutely! We specialize in creating accessible fitness solutions for seniors, individuals with mobility challenges, and those recovering from injuries. Our setups include specialized equipment and safety features tailored to specific needs."
    },
    {
      question: "What's the difference between in-person and virtual personal training?",
      answer: "In-person training provides hands-on guidance, immediate form correction, and equipment assistance. Virtual training offers flexibility and convenience while still providing personalized workout plans, real-time coaching, and progress tracking through video sessions."
    },
    {
      question: "are spare parts covered under warranty ?",
      answer: "yes all our products via installation or separately bought is under 180 days of warranty ."
    },
    {
      question: "Are there only male trainers  ?",
      answer: " No we provide both male and female trainers."
    },
    {
      question: "Are the trainers properly equipped   ?",
      answer: "We have certified health coaches/instructors. Using glucometer and pulse oximeter in each session is our professionalism. "
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
     
        <header className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center">
          <div className="w-20 h-20 mr-3 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
            {/* Replace this placeholder with your logo image */}
              <img src={aglogo} alt="" className="w-full h-full object-contain" />
              {/* Fallback text when no image */}
              <span className="text-xs text-gray-500 font-medium"></span>
            </div>
            
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
              <div className="inline-block bg-black/10 text-black px-4 py-1 rounded-full mb-6 font-medium">Transform Yourself</div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">Fitness On <span className="text-black bg-black/10 px-2">Your</span> Terms</h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">Create your perfect gym space anywhere, anytime , single-time investment, lifetime of fitness .</p>
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
                  <p className="text-sm font-bold mb-1">Life time of fitness</p>
                  
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

      {/* Services Section - Updated with 4 Cards */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-black/10 text-black px-4 py-1 rounded-full mb-4 font-medium">Our Services</span>
            <h2 className="text-4xl font-bold mb-6">Solutions That Adapt To You</h2>
            <p className="text-xl text-gray-600">Customized fitness solutions that adapt to your space, budget, and personal goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Service 1 - Home Gym Setup */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <img src={homegym} alt="Home Gym Setup" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <ChevronRight size={40} className="text-white" />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3">Home Gym Setup</h3>
                <p className="text-gray-600 mb-4 flex-grow">Transform your space into a fully functional gym that meets your specific fitness goals and spatial requirements.</p>
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
                <a href="#contact" className="inline-block font-medium text-black hover:underline mt-auto">Learn more <ArrowRight size={16} className="inline ml-1" /></a>
              </div>
            </div>
            
            {/* Service 2 - Personal Training + Gym Setup */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <img src={resigym} alt="Personal Training + Gym setup" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <ChevronRight size={40} className="text-white" />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3">Personal Training + Gym Setup</h3>
                <p className="text-gray-600 mb-4 flex-grow">Expert training with personalized guidance on your schedule with setting up your own personal gym!</p>
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
                <a href="#contact" className="inline-block font-medium text-black hover:underline mt-auto">Learn more <ArrowRight size={16} className="inline ml-1" /></a>
              </div>
            </div>
            
            {/* Service 3 - Personal Training at Home */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <img src={perso} alt="Personal Training at Home" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <ChevronRight size={40} className="text-white" />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3">Personal Training at Home</h3>
                <p className="text-gray-600 mb-4 flex-grow">Expert training in the comfort of your home with specialized workouts tailored to your needs.</p>
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
                   <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>15 classes - 1 month validity                       
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>50 classes - 3 month validity                       
                    </span>
                  </li>
                </ul>
                <a href="#contact" className="inline-block font-medium text-black hover:underline mt-auto">Learn more <ArrowRight size={16} className="inline ml-1" /></a>
              </div>
            </div>

            {/* Service 4 - Virtual Training */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col h-full border border-gray-100">
              <div className="h-48 bg-gray-100 relative overflow-hidden">
                <img src={vir} alt="Virtual Personal Training" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                  <ChevronRight size={40} className="text-white" />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3">Virtual Personal Training</h3>
                <p className="text-gray-600 mb-4 flex-grow">Get professional training from anywhere with our virtual sessions, perfect for busy schedules.</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Online live sessions</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Flexible timing</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>Personalized programs</span>
                  </li>
                   <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>15 classes (unlimited validity )                       
                    </span>
                  </li>
                     <li className="flex items-start">
                    <ChevronRight size={16} className="text-black mr-2 mt-1 flex-shrink-0" />
                    <span>30 classes (unlimited validity )                       
                    </span>
                  </li>
                  
                </ul>
                <a href="#contact" className="inline-block font-medium text-black hover:underline mt-auto">Learn more <ArrowRight size={16} className="inline ml-1" /></a>
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
              <p className="text-gray-700 mb-6 text-lg">ADD GYM was founded with a simple yet powerful vision: to preach fitness , accessible to everyone, anywhere . We believe that a proper fitness setup shouldn't be limited by space , location or distance  .</p>
              
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-8">To empower individuals and communities to achieve their fitness goals through customized solutions that fit their unique circumstances, creating fitness a way of life through science and wellness !.</p>
              
              <div className="space-y-4">
                
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">1</span>
                  </div>
                  <div>
                    <p className="text-gray-700">Our concept optimizes fitness and wellness at its optimum potential , along with conveneint setup for special population people  , covering all aerobics and corrective posture movements</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                  <div className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="font-bold">2</span>
                  </div>
                  <div>
                    <p className="text-gray-700"><span className="font-bold"></span> single-time investment for a reliable gymnasium accessible for generations.</p>
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
                  <img src={home} alt="Home gym setup" className="w-full h-full object-cover" />
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
{/*pop-up*/}
        {/* Accessories Section */}
<div className="mt-16 text-center">
  <div className="bg-gradient-to-r from-black to-gray-800 text-white p-8 rounded-2xl">
    <h3 className="text-2xl font-bold mb-4">Need Gym Equipment & Accessories?</h3>
    <p className="text-lg mb-6 opacity-90">Browse our complete range of fitness equipment and accessories</p>
    <button
      onClick={() => setShowAccessoryPopup(true)}
      className="bg-white text-black font-medium py-3 px-8 rounded-full hover:bg-gray-100 transition flex items-center justify-center mx-auto"
    >
      Browse Equipment <ArrowRight size={18} className="ml-2" />
    </button>
  </div>
</div>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block bg-black/10 text-black px-4 py-1 rounded-full mb-4 font-medium">FAQ</span>
            <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our services and approach.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-2xl overflow-hidden border border-gray-100">
                  <button
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-black focus:ring-inset"
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFaq === index ? (
                          <Minus size={20} className="text-black" />
                        ) : (
                          <Plus size={20} className="text-black" />
                        )}
                      </div>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-700 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
              <a href="#contact" className="bg-black text-white font-medium py-3 px-8 rounded-full hover:bg-gray-800 transition flex items-center justify-center mx-auto max-w-fit">
                Contact Us <ArrowRight size={18} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials - Modern Carousel Style */}
      <section className="py-20 bg-gray-50">
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
                  <p className="text-gray-600 text-sm">Personal Training + Gym setup</p>
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
                    <Instagram size={20} /> @addgym
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
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Member Type</label>
                    <select 
                      name="clientType"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition"
                      required
                    >
                      <option value="">Select member type</option>
                      <option value="Individual">Individual</option>
                      <option value="Business">community</option>
                    </select>
                  </div>

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

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      <label htmlFor="location" className="block mb-2 font-medium text-gray-700">Location</label>
                      <input 
                        type="text" 
                        name="location"
                        id="location" 
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition" 
                        placeholder="City, State"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block mb-2 font-medium text-gray-700">Service Interested In</label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition"
                      required
                      onChange={handleServiceChange}
                    >
                      <option value="">Select a service</option>
                      <option value="Home Gym Setup">Home Gym Setup</option>
                      <option value="Personal Training + Gym setup">Personal Training + Gym setup</option>
                      <option value="Personal Training at Home">Personal Training at Home</option>
                      <option value="Virtual Training">Virtual Training</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  {(selectedService === 'Personal Training at Home' || selectedService === 'Virtual Training') && (
                    <div>
                      <label htmlFor="pricing" className="block mb-2 font-medium text-gray-700">
                        {selectedService === 'Personal Training at Home' ? 'Personal Training Package' : 'Virtual Training Package'}
                      </label>
                      <select 
                        id="pricing" 
                        name="pricing"
                        className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition"
                        required
                      >
                        <option value="">Select a package</option>
                        {selectedService === 'Personal Training at Home' && (
                          <>
                            <option value="15 classes - Rs 10,000 (1 month validity)">15 classes - Rs 10,000 (1 month validity)</option>
                            <option value="50 classes - Rs 30,000 (3 month validity)">50 classes - Rs 30,000 (3 month validity)</option>
                          </>
                        )}
                        {selectedService === 'Virtual Training' && (
                          <>
                            <option value="15 classes - Rs 5,000">15 classes - Rs 5,000</option>
                            <option value="30 classes - Rs 10,000">30 classes - Rs 10,000</option>
                          </>
                        )}
                      </select>
                    </div>
                  )}
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
                  
                  {/* Terms and Conditions Agreement Checkbox */}
                  <div className="flex items-start space-x-3">
                    <input 
                      type="checkbox" 
                      id="terms"
                      name="terms"
                      className="mt-1 w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-black focus:ring-2"
                      required
                    />
                    <label htmlFor="terms" className="text-sm text-gray-700">
                      I have read and agree to the{' '}
                      <a href="#terms-conditions" className="text-black font-medium hover:underline">
                        Terms and Conditions
                      </a>
                    </label>
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

      {/* Terms and Conditions Section */}
      <section id="terms-conditions" className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 md:mb-12">
              <span className="inline-block bg-black/10 text-black px-3 py-1 md:px-4 md:py-1 rounded-full mb-3 md:mb-4 text-sm md:text-base font-medium">Legal</span>
              <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Terms and Conditions</h2>
              <p className="text-base md:text-xl text-gray-600 px-4">Please read our terms carefully before booking any services</p>
            </div>

            <div className="bg-gray-50 rounded-xl md:rounded-2xl p-4 md:p-8 space-y-6 md:space-y-8">
              {/* Payment Terms */}
              <div className="border-l-4 border-black pl-4 md:pl-6">
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 flex items-start md:items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                  </svg>
                  <span className="leading-tight">Payment Terms</span>
                </h3>
                <div className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                  <p><strong>Personal Training Services:</strong> A minimum of 50% payment is required upfront, with the remaining balance due within 2 weeks of service commencement.</p>
                  <p><strong>Home Gym Setup:</strong> Full payment is required prior to installation.</p>
                </div>
              </div>

              {/* Trainer Assignment */}
              <div className="border-l-4 border-black pl-4 md:pl-6">
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 flex items-start md:items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span className="leading-tight">Trainer Assignment</span>
                </h3>
                <p className="text-sm md:text-base text-gray-700">To ensure client comfort and maintain professional standards, we assign trainers and coaches of the same gender as our clients for all personal training sessions.</p>
              </div>

              {/* Cancellation Policy */}
              <div className="border-l-4 border-black pl-4 md:pl-6">
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 flex items-start md:items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="leading-tight">Cancellation Policy</span>
                </h3>
                <div className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-700">
                  <p><strong>Training Sessions:</strong> All training sessions must be cancelled at least 24 hours in advance. Cancellations made with less than 24 hours notice will result in the session being counted as completed.</p>
                  <p><strong>Service Cancellations:</strong> For cancellations made after 24 hours of booking confirmation, only 50% of the total payment will be refunded due to shipping charges and purchase order processing costs already incurred.</p>
                </div>
              </div>

              {/* Extensions and Special Circumstances */}
              <div className="border-l-4 border-black pl-4 md:pl-6">
                <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 flex items-start md:items-center">
                  <svg className="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 mt-0.5 md:mt-0 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <span className="leading-tight">Package Extensions</span>
                </h3>
                <p className="text-sm md:text-base text-gray-700">Package validity extensions will only be considered under exceptional circumstances, including but not limited to: examination periods, family bereavement, serious illness, or other unforeseen unfortunate events. All extension requests must be submitted with appropriate documentation.</p>
              </div>

              {/* Contact for Queries */}
              <div className="bg-black text-white p-4 md:p-6 rounded-xl">
                <h4 className="font-bold text-base md:text-lg mb-2">Questions about our Terms?</h4>
                <p className="opacity-90 mb-3 md:mb-4 text-sm md:text-base">If you have any questions or need clarification about our terms and conditions, please don't hesitate to contact us.</p>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                  <a href="tel:+917602930279" className="flex items-center text-white hover:text-gray-200 transition text-sm md:text-base">
                    <Phone size={14} className="mr-2 flex-shrink-0" />
                    +91 7602930279
                  </a>
                  <a href="mailto:addgym2424@gmail.com" className="flex items-center text-white hover:text-gray-200 transition text-sm md:text-base break-all">
                    <Mail size={14} className="mr-2 flex-shrink-0" />
                    addgym2424@gmail.com
                  </a>
                </div>
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
            <p className="text-xl mb-8 opacity-90"> Don't wait for tomorrow - your transformation begins now.</p>
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
              <p className="text-gray-600 mb-6 pr-12">Movements over Medicine is what Mr. Aion Wasim believed in while turning a vision in actuality.</p>
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
                <li><a href="#services" className="text-gray-600 hover:text-black transition">Gym setup + Personal Training</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-black transition">Personal Training</a></li>
                <li><a href="#services" className="text-gray-600 hover:text-black transition">Virtual Fitness Session</a></li>
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

{/* Accessory Popup Modal */}
{showAccessoryPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
    <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <div className="p-6 border-b border-gray-200 flex justify-between items-center">
        <h3 className="text-2xl font-bold">Gym Equipment & Accessories</h3>
        <button
          onClick={() => {
            setShowAccessoryPopup(false);
            setAccessoryFormStatus({ submitting: false, submitted: false, error: null });
          }}
          className="text-gray-500 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>
      </div>
      
      <div className="p-6">
        {accessoryFormStatus.submitted ? (
          <div className="text-center py-8">
            <div className="bg-green-100 border border-green-200 text-green-700 px-6 py-4 rounded-xl mb-6">
              <div className="flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <div>
                  <strong className="font-bold block">Thank you!</strong>
                  <span>Your equipment inquiry has been sent. We'll contact you with pricing and availability.</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => {
                setShowAccessoryPopup(false);
                setAccessoryFormStatus({ submitting: false, submitted: false, error: null });
              }}
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <p className="text-gray-600 mb-4">Select the equipment category you're interested in:</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {Object.keys(accessoryOptions).map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedAccessory(category)}
                    className={`p-3 rounded-lg border-2 transition text-left ${
                      selectedAccessory === category
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <span className="font-medium">{category}</span>
                  </button>
                ))}
              </div>
            </div>

            {selectedAccessory && (
              <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                <h4 className="font-bold mb-3">{selectedAccessory} Suggestions:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {accessoryOptions[selectedAccessory].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <ChevronRight size={16} className="text-black mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {accessoryFormStatus.error && (
              <div className="bg-red-100 border border-red-200 text-red-700 px-6 py-4 rounded-xl mb-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  <div>
                    <strong className="font-bold block">Error!</strong>
                    <span>Something went wrong. Please try again later.</span>
                  </div>
                </div>
              </div>
            )}

            <form ref={accessoryFormRef} onSubmit={handleAccessorySubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="accessory_name" className="block mb-2 font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="accessory_name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="accessory_email" className="block mb-2 font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="accessory_email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition"
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="accessory_phone" className="block mb-2 font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="accessory_phone"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition"
                  placeholder="+91 98XXX XXXXX"
                  required
                />
              </div>

              <div>
                <label htmlFor="accessory_category" className="block mb-2 font-medium text-gray-700">Equipment Category</label>
                <input
                  type="text"
                  name="category"
                  id="accessory_category"
                  value={selectedAccessory}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-50"
                  placeholder="Please select a category above"
                  readOnly
                />
              </div>

              <div>
                <label htmlFor="accessory_message" className="block mb-2 font-medium text-gray-700">Specific Requirements</label>
                <textarea
                  id="accessory_message"
                  name="message"
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-black focus:ring-0 transition"
                  placeholder="Please specify which items you're interested in, quantity needed, budget range, etc."
                  required
                ></textarea>
              </div>

              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowAccessoryPopup(false)}
                  className="flex-1 bg-gray-200 text-gray-800 font-medium py-3 px-6 rounded-xl hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-black text-white font-medium py-3 px-6 rounded-xl hover:bg-gray-800 transition disabled:opacity-70 flex items-center justify-center"
                  disabled={accessoryFormStatus.submitting || !selectedAccessory}
                >
                  {accessoryFormStatus.submitting ? 'Sending...' : 'Get Quote'}
                  <ArrowRight size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  </div>
)}

    </div>
  );
}