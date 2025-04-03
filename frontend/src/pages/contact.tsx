import { useState } from "react";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <section className="bg-primary text-primary-content py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg opacity-90">
                Have questions or feedback? We'd love to hear from you. Get in touch with our friendly team.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <div className="card bg-base-200">
                <div className="card-body items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <FaMapMarkerAlt className="text-primary-content text-xl" />
                  </div>
                  <h3 className="card-title">Our Location</h3>
                  <p>123 Frog Lane</p>
                  <p>Pondville, FL 12345</p>
                  <p>United States</p>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <FaPhone className="text-primary-content text-xl" />
                  </div>
                  <h3 className="card-title">Phone Number</h3>
                  <p>Customer Service:</p>
                  <p>(555) 123-4567</p>
                  <p>Support: (555) 765-4321</p>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <FaEnvelope className="text-primary-content text-xl" />
                  </div>
                  <h3 className="card-title">Email Address</h3>
                  <p>General Inquiries:</p>
                  <p>info@hopshop.com</p>
                  <p>Support: support@hopshop.com</p>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4">
                    <FaClock className="text-primary-content text-xl" />
                  </div>
                  <h3 className="card-title">Business Hours</h3>
                  <p>Monday - Friday:</p>
                  <p>9:00 AM - 6:00 PM EST</p>
                  <p>Weekends: 10:00 AM - 4:00 PM EST</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Contact Form */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                
                {submitSuccess ? (
                  <div className="alert alert-success mb-6">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Thank you! Your message has been sent successfully. We'll get back to you soon.</span>
                    </div>
                  </div>
                ) : submitError ? (
                  <div className="alert alert-error mb-6">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>{submitError}</span>
                    </div>
                  </div>
                ) : null}
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Name</span>
                    </label>
                    <input 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="input input-bordered" 
                      required 
                    />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email Address</span>
                    </label>
                    <input 
                      type="email" 
                      name="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      className="input input-bordered" 
                      required 
                    />
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Subject</span>
                    </label>
                    <select 
                      name="subject" 
                      value={formData.subject} 
                      onChange={handleChange} 
                      className="select select-bordered w-full" 
                      required
                    >
                      <option value="" disabled>Select a subject</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Order Status">Order Status</option>
                      <option value="Return/Refund">Return/Refund</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Feedback">Feedback</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Your Message</span>
                    </label>
                    <textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleChange} 
                      className="textarea textarea-bordered h-32" 
                      required
                    ></textarea>
                  </div>
                  
                  <div className="form-control mt-6">
                    <button 
                      type="submit" 
                      className={`btn btn-primary ${isSubmitting ? 'loading' : ''}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Map */}
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Find Us</h2>
                <div className="w-full h-96 bg-base-300 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425882426901!3d40.71256494716778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259f4b4c8982f%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1621543231937!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-2">Our Headquarters</h3>
                  <p className="mb-4">
                    Our main office is located in the heart of Pondville, easily accessible by public transportation and with ample parking available.
                  </p>
                  <p>
                    If you're planning to visit us in person, please feel free to call ahead to schedule an appointment with one of our amphibian specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="join join-vertical w-full">
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="faq-accordion" checked /> 
                  <div className="collapse-title text-xl font-medium">
                    How quickly will I receive a response to my inquiry?
                  </div>
                  <div className="collapse-content"> 
                    <p>We strive to respond to all inquiries within 24-48 business hours. For urgent matters, please call our customer service line directly.</p>
                  </div>
                </div>
                
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="faq-accordion" /> 
                  <div className="collapse-title text-xl font-medium">
                    Do you offer international shipping?
                  </div>
                  <div className="collapse-content"> 
                    <p>Yes, we ship to many international destinations. However, live animals can only be shipped within the continental United States due to regulations and animal welfare concerns.</p>
                  </div>
                </div>
                
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="faq-accordion" /> 
                  <div className="collapse-title text-xl font-medium">
                    What is your return policy?
                  </div>
                  <div className="collapse-content"> 
                    <p>We accept returns within 30 days of purchase for most items. Live animals have special return policies - please contact us directly for assistance with live animal orders.</p>
                  </div>
                </div>
                
                <div className="collapse collapse-arrow join-item border border-base-300">
                  <input type="radio" name="faq-accordion" /> 
                  <div className="collapse-title text-xl font-medium">
                    Do you offer consultations for setting up frog habitats?
                  </div>
                  <div className="collapse-content"> 
                    <p>Yes! Our amphibian specialists are available for virtual consultations to help you set up the perfect habitat for your frog friends. Contact us to schedule an appointment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
