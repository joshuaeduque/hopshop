import { useState } from "react";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { FaMapMarkerAlt, FaBuilding, FaClock, FaDollarSign, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Mock data for job listings
const JOB_LISTINGS = [
  {
    id: 1,
    title: "Amphibian Care Specialist",
    department: "Animal Care",
    location: "Pondville, FL",
    type: "Full-time",
    salary: "$40,000 - $55,000",
    posted: "2 weeks ago",
    description: "We're looking for an experienced Amphibian Care Specialist to join our team. The ideal candidate will have extensive knowledge of frog species, habitat requirements, and health management.",
    responsibilities: [
      "Maintain and monitor frog habitats to ensure optimal conditions",
      "Feed and care for various amphibian species",
      "Conduct health assessments and administer treatments as needed",
      "Keep detailed records of animal health, feeding, and behavior",
      "Assist with breeding programs and research initiatives",
      "Educate team members and customers about proper amphibian care"
    ],
    requirements: [
      "Bachelor's degree in Zoology, Biology, or related field",
      "2+ years of experience working with amphibians",
      "Knowledge of amphibian nutrition, habitat requirements, and common health issues",
      "Excellent attention to detail and record-keeping abilities",
      "Ability to work weekends and holidays as needed",
      "Passion for amphibian conservation and education"
    ]
  },
  {
    id: 2,
    title: "E-commerce Marketing Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    salary: "$60,000 - $75,000",
    posted: "3 days ago",
    description: "We're seeking a creative and data-driven E-commerce Marketing Manager to lead our digital marketing efforts and drive online sales growth.",
    responsibilities: [
      "Develop and implement comprehensive marketing strategies for our online store",
      "Manage SEO, SEM, email marketing, and social media campaigns",
      "Analyze marketing data and optimize campaigns for maximum ROI",
      "Collaborate with content creators to produce engaging product descriptions and blog posts",
      "Oversee the creation of promotional materials and advertisements",
      "Stay current with e-commerce trends and best practices"
    ],
    requirements: [
      "Bachelor's degree in Marketing, Business, or related field",
      "3+ years of experience in e-commerce marketing",
      "Proficiency with Google Analytics, SEO tools, and email marketing platforms",
      "Strong analytical skills and data-driven decision making",
      "Experience with A/B testing and conversion rate optimization",
      "Excellent project management and communication skills"
    ]
  },
  {
    id: 3,
    title: "Customer Service Representative",
    department: "Customer Support",
    location: "Pondville, FL",
    type: "Part-time",
    salary: "$15 - $18 per hour",
    posted: "1 week ago",
    description: "Join our customer service team to provide exceptional support to our frog-loving customers. You'll be the friendly voice helping customers with orders, product information, and care advice.",
    responsibilities: [
      "Respond to customer inquiries via phone, email, and chat",
      "Process orders, returns, and exchanges",
      "Provide product recommendations and care advice",
      "Resolve customer complaints and issues",
      "Maintain customer records and document interactions",
      "Collaborate with other departments to improve customer experience"
    ],
    requirements: [
      "High school diploma or equivalent",
      "1+ year of customer service experience",
      "Excellent communication and problem-solving skills",
      "Basic knowledge of amphibians preferred but not required",
      "Proficiency with CRM software and order management systems",
      "Ability to work evenings and weekends"
    ]
  },
  {
    id: 4,
    title: "Warehouse Associate",
    department: "Operations",
    location: "Pondville, FL",
    type: "Full-time",
    salary: "$16 - $20 per hour",
    posted: "3 weeks ago",
    description: "We're looking for a detail-oriented Warehouse Associate to help manage our inventory, pack orders, and ensure timely shipments to our customers.",
    responsibilities: [
      "Pick, pack, and ship customer orders accurately and efficiently",
      "Receive and process incoming inventory",
      "Maintain organized storage areas and proper stock rotation",
      "Conduct regular inventory counts and reconciliations",
      "Handle special packaging requirements for live animals and delicate items",
      "Assist with warehouse maintenance and cleaning"
    ],
    requirements: [
      "High school diploma or equivalent",
      "1+ year of warehouse or inventory management experience",
      "Ability to lift up to 50 pounds regularly",
      "Attention to detail and organizational skills",
      "Basic computer skills for inventory management systems",
      "Reliable transportation and punctuality"
    ]
  }
];

export default function Jobs() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const toggleJobExpand = (jobId: number) => {
    if (expandedJob === jobId) {
      setExpandedJob(null);
    } else {
      setExpandedJob(jobId);
    }
  };
  
  const filterJobs = () => {
    if (activeTab === "all") {
      return JOB_LISTINGS;
    } else {
      return JOB_LISTINGS.filter(job => job.department.toLowerCase() === activeTab);
    }
  };
  
  const filteredJobs = filterJobs();

  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <section className="bg-primary text-primary-content py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
              <p className="text-lg opacity-90">
                Hop on board with a company that's passionate about amphibians and committed to creating an exceptional workplace.
              </p>
            </div>
          </div>
        </section>
        
        {/* Why Work With Us */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Work With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-base-200">
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary-content">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Competitive Benefits</h3>
                  <p>
                    We offer competitive salaries, health insurance, 401(k) matching, paid time off, and employee discounts on all products.
                  </p>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary-content">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Growth Opportunities</h3>
                  <p>
                    We believe in promoting from within and providing opportunities for professional development and career advancement.
                  </p>
                </div>
              </div>
              
              <div className="card bg-base-200">
                <div className="card-body items-center text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-primary-content">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Inclusive Culture</h3>
                  <p>
                    We foster a diverse and inclusive workplace where everyone's contributions are valued and respected.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Company Culture */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our Culture</h2>
                <p className="mb-4">
                  At HopShop, we're passionate about amphibians and creating an exceptional workplace where employees can thrive. Our team is united by a shared love for frogs and a commitment to providing the best products and information to our customers.
                </p>
                <p className="mb-4">
                  We value innovation, collaboration, and continuous learning. Our office environment is casual and pet-friendly, with several resident frogs that remind us daily of our mission.
                </p>
                <p>
                  We also believe in giving back to the community through conservation efforts and educational outreach programs. Employees are encouraged to participate in volunteer opportunities and contribute to amphibian conservation initiatives.
                </p>
              </div>
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg overflow-hidden">
                    <Image 
                      src="/jobs/culture-1.jpg" 
                      alt="Team meeting" 
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Image 
                      src="/jobs/culture-2.jpg" 
                      alt="Office space" 
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Image 
                      src="/jobs/culture-3.jpg" 
                      alt="Team building" 
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden">
                    <Image 
                      src="/jobs/culture-4.jpg" 
                      alt="Company event" 
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Open Positions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Open Positions</h2>
            
            <div className="flex flex-wrap justify-center mb-8">
              <div className="join">
                <button 
                  className={`join-item btn ${activeTab === "all" ? "btn-primary" : "btn-outline"}`}
                  onClick={() => setActiveTab("all")}
                >
                  All Departments
                </button>
                <button 
                  className={`join-item btn ${activeTab === "animal care" ? "btn-primary" : "btn-outline"}`}
                  onClick={() => setActiveTab("animal care")}
                >
                  Animal Care
                </button>
                <button 
                  className={`join-item btn ${activeTab === "marketing" ? "btn-primary" : "btn-outline"}`}
                  onClick={() => setActiveTab("marketing")}
                >
                  Marketing
                </button>
                <button 
                  className={`join-item btn ${activeTab === "customer support" ? "btn-primary" : "btn-outline"}`}
                  onClick={() => setActiveTab("customer support")}
                >
                  Customer Support
                </button>
                <button 
                  className={`join-item btn ${activeTab === "operations" ? "btn-primary" : "btn-outline"}`}
                  onClick={() => setActiveTab("operations")}
                >
                  Operations
                </button>
              </div>
            </div>
            
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map(job => (
                  <div key={job.id} className="card bg-base-200 shadow-lg">
                    <div className="card-body">
                      <div 
                        className="cursor-pointer"
                        onClick={() => toggleJobExpand(job.id)}
                      >
                        <div className="flex justify-between items-center">
                          <h3 className="card-title text-xl">{job.title}</h3>
                          <button className="btn btn-circle btn-sm">
                            {expandedJob === job.id ? <FaChevronUp /> : <FaChevronDown />}
                          </button>
                        </div>
                        
                        <div className="flex flex-wrap gap-4 mt-2 mb-4">
                          <div className="flex items-center">
                            <FaBuilding className="mr-2 text-primary" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center">
                            <FaMapMarkerAlt className="mr-2 text-primary" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center">
                            <FaClock className="mr-2 text-primary" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center">
                            <FaDollarSign className="mr-2 text-primary" />
                            <span>{job.salary}</span>
                          </div>
                        </div>
                        
                        <p>{job.description}</p>
                      </div>
                      
                      {expandedJob === job.id && (
                        <div className="mt-6">
                          <div className="divider"></div>
                          
                          <h4 className="font-bold text-lg mb-2">Responsibilities:</h4>
                          <ul className="list-disc pl-5 mb-4">
                            {job.responsibilities.map((item, index) => (
                              <li key={index} className="mb-1">{item}</li>
                            ))}
                          </ul>
                          
                          <h4 className="font-bold text-lg mb-2">Requirements:</h4>
                          <ul className="list-disc pl-5 mb-6">
                            {job.requirements.map((item, index) => (
                              <li key={index} className="mb-1">{item}</li>
                            ))}
                          </ul>
                          
                          <div className="card-actions justify-end">
                            <button className="btn btn-primary">Apply Now</button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-base-200 rounded-lg">
                <h3 className="text-xl font-semibold mb-2">No positions available</h3>
                <p className="text-gray-600 mb-6">
                  We don't have any open positions in this department at the moment. Please check back later or explore other departments.
                </p>
                <button 
                  className="btn btn-primary"
                  onClick={() => setActiveTab("all")}
                >
                  View All Departments
                </button>
              </div>
            )}
          </div>
        </section>
        
        {/* Application Process */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Application Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="card bg-base-100">
                <div className="card-body items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-primary-content font-bold text-xl">
                    1
                  </div>
                  <h3 className="card-title">Apply Online</h3>
                  <p>
                    Submit your application through our online portal with your resume and cover letter.
                  </p>
                </div>
              </div>
              
              <div className="card bg-base-100">
                <div className="card-body items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-primary-content font-bold text-xl">
                    2
                  </div>
                  <h3 className="card-title">Initial Review</h3>
                  <p>
                    Our hiring team will review your application and reach out if there's a potential match.
                  </p>
                </div>
              </div>
              
              <div className="card bg-base-100">
                <div className="card-body items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-primary-content font-bold text-xl">
                    3
                  </div>
                  <h3 className="card-title">Interviews</h3>
                  <p>
                    Participate in phone, video, and/or in-person interviews with the hiring team.
                  </p>
                </div>
              </div>
              
              <div className="card bg-base-100">
                <div className="card-body items-center text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-primary-content font-bold text-xl">
                    4
                  </div>
                  <h3 className="card-title">Welcome Aboard</h3>
                  <p>
                    If selected, you'll receive an offer and join our team of frog enthusiasts!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-content">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Don't See the Right Position?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. Send us your resume, and we'll keep you in mind for future opportunities.
            </p>
            <button className="btn btn-lg btn-secondary">
              Submit Your Resume
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
