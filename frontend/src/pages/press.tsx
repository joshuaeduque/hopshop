import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import Link from "next/link";
import { FaDownload, FaNewspaper, FaCalendarAlt } from "react-icons/fa";

// Mock data for press releases
const PRESS_RELEASES = [
  {
    id: 1,
    title: "HopShop Launches New Conservation Initiative",
    date: "May 15, 2023",
    excerpt: "HopShop announces a new partnership with the Global Amphibian Conservation Fund to protect endangered frog species.",
    image: "/press/conservation.jpg",
    pdf: "/press/conservation-press-release.pdf"
  },
  {
    id: 2,
    title: "HopShop Expands Product Line with Eco-Friendly Habitats",
    date: "March 22, 2023",
    excerpt: "New sustainable terrarium options made from recycled materials now available for environmentally conscious frog enthusiasts.",
    image: "/press/eco-habitats.jpg",
    pdf: "/press/eco-habitats-press-release.pdf"
  },
  {
    id: 3,
    title: "HopShop Reports Record Growth in Q1 2023",
    date: "April 10, 2023",
    excerpt: "The leading amphibian e-commerce platform sees 75% year-over-year growth as interest in exotic pets continues to rise.",
    image: "/press/growth.jpg",
    pdf: "/press/q1-growth-press-release.pdf"
  }
];

// Mock data for news coverage
const NEWS_COVERAGE = [
  {
    id: 1,
    title: "How HopShop is Revolutionizing the Exotic Pet Industry",
    publication: "Pet Business Today",
    date: "April 28, 2023",
    excerpt: "An in-depth look at how HopShop's innovative approach to amphibian care is changing the industry standard.",
    link: "https://www.petbusinesstoday.com/hopshop-revolution"
  },
  {
    id: 2,
    title: "Meet the Entrepreneurs Behind the Fastest Growing Pet Specialty Store",
    publication: "Entrepreneur Magazine",
    date: "February 15, 2023",
    excerpt: "An interview with HopShop's founders on their journey from frog enthusiasts to successful business owners.",
    link: "https://www.entrepreneur.com/hopshop-founders"
  },
  {
    id: 3,
    title: "The Rise of Specialty Pet E-commerce in a Post-Pandemic World",
    publication: "E-commerce Trends",
    date: "January 5, 2023",
    excerpt: "HopShop featured as a case study in the growth of niche pet supply retailers following the pandemic pet boom.",
    link: "https://www.ecommercetrends.com/specialty-pet-retail"
  }
];

// Mock data for brand assets
const BRAND_ASSETS = [
  {
    id: 1,
    title: "HopShop Logo Package",
    description: "Official logos in various formats (PNG, SVG, EPS) with usage guidelines.",
    image: "/press/logo-package.jpg",
    download: "/press/hopshop-logo-package.zip"
  },
  {
    id: 2,
    title: "Product Image Library",
    description: "High-resolution images of our most popular products for media use.",
    image: "/press/product-images.jpg",
    download: "/press/hopshop-product-images.zip"
  },
  {
    id: 3,
    title: "Executive Headshots",
    description: "Professional photos of HopShop's leadership team.",
    image: "/press/headshots.jpg",
    download: "/press/hopshop-executive-headshots.zip"
  },
  {
    id: 4,
    title: "Company Fact Sheet",
    description: "Key information about HopShop's history, mission, and growth.",
    image: "/press/fact-sheet.jpg",
    download: "/press/hopshop-fact-sheet.pdf"
  }
];

export default function Press() {
  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100">
        {/* Hero Section */}
        <section className="bg-primary text-primary-content py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Press & Media</h1>
              <p className="text-lg opacity-90">
                Find the latest news, press releases, and media resources about HopShop.
              </p>
            </div>
          </div>
        </section>
        
        {/* Media Contact Section */}
        <section className="py-12 bg-base-200">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-4">Media Contact</h2>
              <p className="mb-6">
                For press inquiries, interview requests, or additional information, please contact:
              </p>
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h3 className="card-title justify-center">Jordan Taylor</h3>
                  <p>Public Relations Manager</p>
                  <p>Email: press@hopshop.com</p>
                  <p>Phone: (555) 123-4567 ext. 789</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Press Releases Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Press Releases</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {PRESS_RELEASES.map(release => (
                <div key={release.id} className="card bg-base-200 shadow-lg">
                  <figure>
                    <Image 
                      src={release.image} 
                      alt={release.title} 
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                      <FaCalendarAlt />
                      <span>{release.date}</span>
                    </div>
                    <h3 className="card-title">{release.title}</h3>
                    <p>{release.excerpt}</p>
                    <div className="card-actions justify-end mt-4">
                      <a 
                        href={release.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-primary btn-sm"
                      >
                        <FaDownload className="mr-2" />
                        Download PDF
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link href="/press/archive" className="btn btn-outline">
                View All Press Releases
              </Link>
            </div>
          </div>
        </section>
        
        {/* News Coverage Section */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">In The News</h2>
            
            <div className="space-y-6">
              {NEWS_COVERAGE.map(news => (
                <div key={news.id} className="card bg-base-100 shadow-lg">
                  <div className="card-body">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                      <div>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                          <FaNewspaper />
                          <span>{news.publication}</span>
                          <span>•</span>
                          <span>{news.date}</span>
                        </div>
                        <h3 className="card-title">{news.title}</h3>
                        <p className="mt-2">{news.excerpt}</p>
                      </div>
                      <div className="md:ml-4">
                        <a 
                          href={news.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="btn btn-primary btn-sm whitespace-nowrap"
                        >
                          Read Article
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Brand Assets Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">Brand Assets</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {BRAND_ASSETS.map(asset => (
                <div key={asset.id} className="card bg-base-200 shadow-lg">
                  <figure>
                    <Image 
                      src={asset.image} 
                      alt={asset.title} 
                      width={300}
                      height={200}
                      className="w-full h-40 object-cover"
                    />
                  </figure>
                  <div className="card-body">
                    <h3 className="card-title text-lg">{asset.title}</h3>
                    <p className="text-sm">{asset.description}</p>
                    <div className="card-actions justify-end mt-4">
                      <a 
                        href={asset.download} 
                        download 
                        className="btn btn-primary btn-sm"
                      >
                        <FaDownload className="mr-2" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Company Facts Section */}
        <section className="py-16 bg-base-200">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Company Facts</h2>
            
            <div className="max-w-3xl mx-auto">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold mb-2">About HopShop</h3>
                      <p>
                        Founded in 2020, HopShop is the leading e-commerce platform dedicated to amphibian products and care. We offer a comprehensive selection of live frogs, habitats, food, supplements, and accessories for frog enthusiasts of all experience levels.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">Mission</h3>
                      <p>
                        To promote responsible amphibian ownership through education and providing the highest quality products for frog care and habitat creation.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">Key Statistics</h3>
                      <ul className="list-disc pl-5">
                        <li>Founded: 2020</li>
                        <li>Headquarters: Pondville, Florida</li>
                        <li>Employees: 45+</li>
                        <li>Product Categories: 12</li>
                        <li>Unique Products: 500+</li>
                        <li>Customers Served: 50,000+</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold mb-2">Leadership</h3>
                      <ul className="list-disc pl-5">
                        <li>Alex Rivera - Founder & CEO</li>
                        <li>Sam Johnson - Head of Product</li>
                        <li>Taylor Kim - Customer Experience Director</li>
                        <li>Jordan Smith - Conservation Specialist</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-primary text-primary-content">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Additional Information?</h2>
            <p className="mb-6">
              Our media relations team is ready to assist with any press inquiries or interview requests.
            </p>
            <Link href="/contact" className="btn btn-secondary">
              Contact Our Press Team
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}
