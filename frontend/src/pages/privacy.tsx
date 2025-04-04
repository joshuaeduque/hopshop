import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Privacy() {
  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="lead">
              At HopShop, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or make a purchase.
            </p>
            
            <div className="alert alert-info mb-6">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Last updated: May 15, 2023</span>
              </div>
            </div>
            
            <h2>1. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us when you:
            </p>
            <ul>
              <li>Create an account</li>
              <li>Make a purchase</li>
              <li>Sign up for our newsletter</li>
              <li>Contact our customer service</li>
              <li>Participate in surveys or promotions</li>
              <li>Post reviews or comments</li>
            </ul>
            
            <p>
              This information may include:
            </p>
            <ul>
              <li>Personal identifiers (name, email address, postal address, phone number)</li>
              <li>Payment information (credit card details, billing address)</li>
              <li>Account credentials (username, password)</li>
              <li>Purchase history and preferences</li>
              <li>Communications with our customer service team</li>
            </ul>
            
            <h3>Automatically Collected Information</h3>
            <p>
              When you visit our website, we automatically collect certain information about your device and usage, including:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Device information</li>
              <li>Pages visited and time spent</li>
              <li>Referring website or source</li>
              <li>Clickstream data</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including to:
            </p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Create and manage your account</li>
              <li>Provide customer support</li>
              <li>Send transactional emails (order confirmations, shipping updates)</li>
              <li>Send marketing communications (if you've opted in)</li>
              <li>Improve our website and services</li>
              <li>Personalize your shopping experience</li>
              <li>Conduct research and analytics</li>
              <li>Detect and prevent fraud</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2>3. Sharing Your Information</h2>
            <p>
              We may share your information with:
            </p>
            <ul>
              <li>Service providers (payment processors, shipping companies, marketing partners)</li>
              <li>Business partners (when necessary to provide services you've requested)</li>
              <li>Legal authorities (when required by law or to protect our rights)</li>
              <li>Affiliated companies (as part of our regular business operations)</li>
            </ul>
            
            <p>
              We do not sell your personal information to third parties.
            </p>
            
            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your browsing activities. These technologies help us analyze website traffic, customize content, and deliver targeted advertisements.
            </p>
            
            <p>
              You can manage your cookie preferences through your browser settings. However, disabling cookies may affect your experience on our website.
            </p>
            
            <p>
              For more information about our use of cookies, please see our <Link href="/cookie" className="link link-primary">Cookie Policy</Link>.
            </p>
            
            <h2>5. Your Privacy Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul>
              <li>Right to access your personal information</li>
              <li>Right to correct inaccurate information</li>
              <li>Right to delete your personal information</li>
              <li>Right to restrict or object to processing</li>
              <li>Right to data portability</li>
              <li>Right to withdraw consent</li>
            </ul>
            
            <p>
              To exercise these rights, please contact us using the information provided at the end of this policy.
            </p>
            
            <h3>California Privacy Rights</h3>
            <p>
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA). For more information, please see our California Privacy Notice.
            </p>
            
            <h2>6. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
            
            <p>
              However, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, while we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
            
            <h2>7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            
            <h2>8. Children's Privacy</h2>
            <p>
              Our Services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us.
            </p>
            
            <h2>9. International Data Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have different data protection laws than your country of residence.
            </p>
            
            <p>
              We have implemented appropriate safeguards to ensure that your personal information remains protected in accordance with this Privacy Policy.
            </p>
            
            <h2>10. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date. We encourage you to review this Privacy Policy periodically to stay informed about how we are protecting your information.
            </p>
            
            <h2>11. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <address>
              HopShop<br />
              Attn: Privacy Officer<br />
              123 Frog Lane<br />
              Pondville, FL 12345<br />
              Email: privacy@hopshop.com<br />
              Phone: (555) 123-4567
            </address>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
