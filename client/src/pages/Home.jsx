import { useState, useRef } from 'react';
import { Menu, X, Instagram, Facebook, Twitter, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

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
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

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
      {/* Header/Navigation */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="h-12 w-12 relative">
              {/* Replace with your imported logo image */}
              <img 
                src="/src/assets/add_gym.jpg" 
                alt="ADD GYM Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="ml-2 text-2xl font-bold">ADD GYM</h1>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="font-medium hover:text-gray-600 transition">Home</a>
            <a href="#services" className="font-medium hover:text-gray-600 transition">Services</a>
            <a href="#about" className="font-medium hover:text-gray-600 transition">About</a>
            <a href="#contact" className="font-medium hover:text-gray-600 transition">Contact</a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium hover:bg-gray-100 rounded-md" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-white text-gray-900 py-20 border-b">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Redefine Your Fitness Journey</h1>
            <p className="text-xl mb-8">Create your perfect gym space anywhere, anytime. One-time investment, lifetime of fitness.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#services" className="bg-black text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-gray-800 transition flex items-center justify-center">
                Our Services <ChevronRight size={20} className="ml-1" />
              </a>
              <a href="#contact" className="bg-transparent border-2 border-black font-bold py-3 px-6 rounded-lg hover:bg-black hover:text-white transition flex items-center justify-center">
                Contact Us
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-64 h-64">
              {/* Replace with your imported logo image */}
              <img 
                src="/src/assets/add_gym.jpg" 
                alt="ADD GYM Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Customized fitness solutions that adapt to your space, budget, and goals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Home Gym Setup</h3>
              <p className="text-gray-600 mb-4">Transform your garage, spare room, terrace, or balcony into a fully functional gym that meets your specific fitness goals.</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Customized equipment recommendations</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Space optimization planning</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Budget-friendly options</span>
                </li>
              </ul>
            </div>
            
            {/* Service 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Residential Gym Training</h3>
              <p className="text-gray-600 mb-4">Already have access to a complex or residential gym? We'll train you there at your convenient time.</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Flexible scheduling</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Customized workout plans</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Progress tracking</span>
                </li>
              </ul>
            </div>
            
            {/* Service 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition border">
              <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Personal Training at Home</h3>
              <p className="text-gray-600 mb-4">Expert training in the comfort of your home with specialized workouts tailored to your needs.</p>
              <ul className="text-gray-600 space-y-2 mb-6">
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Plyometrics & corrective postures</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Aerobics & mobility drills</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight size={20} className="text-gray-600 mr-2 mt-1 flex-shrink-0" />
                  <span>Rehabilitation & flexibility training</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
              <div className="w-64 h-64">
                {/* Replace with your imported logo image */}
                <img 
                  src="/src/assets/add_gym.jpg" 
                  alt="ADD GYM Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <h2 className="text-3xl font-bold mb-6">About ADD GYM</h2>
              <p className="text-gray-700 mb-6">ADD GYM was founded with a simple yet powerful vision: to make fitness accessible to everyone, everywhere. We believe that a good fitness regimen shouldn't be limited by space, location, or budget constraints.</p>
              
              <h3 className="text-xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">To empower individuals and communities to achieve their fitness goals through customized solutions that fit their unique circumstances, creating self-reliant gymnasiums accessible for generations.</p>
              
              <div className="bg-white p-6 rounded-lg shadow-md border">
                <h3 className="text-xl font-bold mb-4">Our Approach</h3>
                <ul className="space-y-3">
                  <li className="flex">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-gray-700">1</span>
                    </div>
                    <p className="text-gray-700">To start a new chapter we all need to restart ourselves.</p>
                  </li>
                  <li className="flex">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-gray-700">2</span>
                    </div>
                    <p className="text-gray-700">The concept will not only make us healthy, fit, but to perceive fitness and wellness at its optimum.</p>
                  </li>
                  <li className="flex">
                    <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center mr-3 flex-shrink-0">
                      <span className="font-bold text-gray-700">3</span>
                    </div>
                    <p className="text-gray-700"><span className="font-bold">USP:</span> This one-time investment shall serve us all to have a self-reliant gymnasium accessible for each individual, society, and every community for generations.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Hear from those who have transformed their fitness journey with ADD GYM.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="font-bold text-gray-700">RS</span>
                </div>
                <div>
                  <h4 className="font-bold">Rahul Sharma</h4>
                  <p className="text-gray-600">Home Gym Setup</p>
                </div>
              </div>
              <p className="text-gray-700">"ADD GYM transformed my unused garage into an amazing workout space that fits all my needs. The one-time investment has completely changed my fitness routine for the better."</p>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="font-bold text-gray-700">PP</span>
                </div>
                <div>
                  <h4 className="font-bold">Priya Patel</h4>
                  <p className="text-gray-600">Personal Training</p>
                </div>
              </div>
              <p className="text-gray-700">"Having a personal trainer come to my home has been life-changing. The flexibility of scheduling and personalized attention to my posture issues has made all the difference."</p>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md border">
              <div className="flex items-center mb-4">
                <div className="bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                  <span className="font-bold text-gray-700">AS</span>
                </div>
                <div>
                  <h4 className="font-bold">Amit Singh</h4>
                  <p className="text-gray-600">Residential Gym Training</p>
                </div>
              </div>
              <p className="text-gray-700">"Our society gym was barely used until ADD GYM started offering training sessions. Now it's a vibrant community space that brings residents together."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to start your fitness journey? Reach out to us today.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={24} className="mr-4 flex-shrink-0 text-gray-700" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p className="text-gray-700">+91 98765 43210</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={24} className="mr-4 flex-shrink-0 text-gray-700" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p className="text-gray-700">info@addgym.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin size={24} className="mr-4 flex-shrink-0 text-gray-700" />
                  <div>
                    <h4 className="font-bold mb-1">Address</h4>
                    <p className="text-gray-700">123 Fitness Avenue, Wellness District, Mumbai - 400001</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-200 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                    <Instagram size={24} />
                  </a>
                  <a href="#" className="bg-gray-200 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                    <Facebook size={24} />
                  </a>
                  <a href="#" className="bg-gray-200 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center hover:bg-gray-300 transition">
                    <Twitter size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              {formStatus.submitted ? (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6">
                  <strong className="font-bold">Thank you!</strong>
                  <p>Your message has been sent successfully. We'll get back to you soon.</p>
                </div>
              ) : formStatus.error ? (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6">
                  <strong className="font-bold">Error!</strong>
                  <p>Something went wrong. Please try again later.</p>
                </div>
              ) : null}
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input 
                    type="text" 
                    name="name"
                    id="name" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-0" 
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    id="email" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-0" 
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block mb-2 font-medium">Service Interested In</label>
                  <select 
                    id="service" 
                    name="service"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-0"
                    required
                  >
                    <option value="Home Gym Setup">Home Gym Setup</option>
                    <option value="Residential Gym Training">Residential Gym Training</option>
                    <option value="Personal Training at Home">Personal Training at Home</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="5" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-gray-500 focus:ring-0" 
                    placeholder="Tell us about your fitness goals..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="bg-black text-white font-bold py-3 px-8 rounded-lg hover:bg-gray-800 transition disabled:opacity-70"
                  disabled={formStatus.submitting}
                >
                  {formStatus.submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start Your Fitness Journey Today</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">One-time investment. Lifetime of fitness. Don't wait for tomorrow - your transformation begins now.</p>
          <a 
            href="#contact" 
            className="bg-white text-gray-900 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition inline-flex items-center"
          >
            Get Started Now <ChevronRight size={20} className="ml-1" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-700 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 relative mr-2">
                  {/* Replace with your imported logo image */}
                  <img 
                    src="/src/assets/add_gym.jpg" 
                    alt="ADD GYM Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold">ADD GYM</h3>
              </div>
              <p className="max-w-xs text-gray-600">Creating self-reliant gymnasiums accessible for each individual, society, and community.</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2">
                  <li><a href="#home" className="text-gray-600 hover:text-gray-900 transition">Home</a></li>
                  <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition">Services</a></li>
                  <li><a href="#about" className="text-gray-600 hover:text-gray-900 transition">About</a></li>
                  <li><a href="#contact" className="text-gray-600 hover:text-gray-900 transition">Contact</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition">Home Gym Setup</a></li>
                  <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition">Residential Training</a></li>
                  <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition">Personal Training</a></li>
                  <li><a href="#services" className="text-gray-600 hover:text-gray-900 transition">Fitness Consultation</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2">
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Privacy Policy</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Terms of Service</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-gray-900 transition">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} ADD GYM. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}