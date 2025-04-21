import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Cookie() {
  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
          
          <div className="prose max-w-none">
            <p className="lead">
              This Cookie Policy explains how HopShop ("we", "us", or "our") uses cookies and similar technologies on our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
            </p>
            
            <div className="alert alert-info mb-6">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Last updated: May 15, 2023</span>
              </div>
            </div>
            
            <h2>1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the website owners.
            </p>
            
            <p>
              Cookies allow a website to recognize your device and remember information about your visit, such as your preferred language, login information, and other settings. This can make your next visit easier and the site more useful to you.
            </p>
            
            <h2>2. Types of Cookies We Use</h2>
            <p>
              We use different types of cookies for various purposes:
            </p>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable basic functions like page navigation, secure areas access, and shopping cart functionality. The website cannot function properly without these cookies.
            </p>
            
            <h3>Preference Cookies</h3>
            <p>
              These cookies allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features. They may also be used to provide services you have requested, such as watching a video or commenting on a blog.
            </p>
            
            <h3>Analytics Cookies</h3>
            <p>
              These cookies collect information about how visitors use a website, for instance which pages visitors go to most often, and if they get error messages from web pages. These cookies don't collect information that identifies a visitor. All information these cookies collect is aggregated and therefore anonymous. It is only used to improve how a website works.
            </p>
            
            <h3>Marketing Cookies</h3>
            <p>
              These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
            </p>
            
            <h2>3. Specific Cookies We Use</h2>
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Type</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>_session</td>
                  <td>Essential</td>
                  <td>Maintains your session while browsing</td>
                  <td>Session</td>
                </tr>
                <tr>
                  <td>cart_items</td>
                  <td>Essential</td>
                  <td>Remembers items in your shopping cart</td>
                  <td>30 days</td>
                </tr>
                <tr>
                  <td>user_preferences</td>
                  <td>Preference</td>
                  <td>Stores your site preferences</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>_ga</td>
                  <td>Analytics</td>
                  <td>Google Analytics - Distinguishes users</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>_gid</td>
                  <td>Analytics</td>
                  <td>Google Analytics - Distinguishes users</td>
                  <td>24 hours</td>
                </tr>
                <tr>
                  <td>_fbp</td>
                  <td>Marketing</td>
                  <td>Facebook Pixel - Tracks visitors across websites</td>
                  <td>3 months</td>
                </tr>
              </tbody>
            </table>
            
            <h2>4. Third-Party Cookies</h2>
            <p>
              In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements, and so on. These cookies may include:
            </p>
            <ul>
              <li>Google Analytics</li>
              <li>Google Ads</li>
              <li>Facebook Pixel</li>
              <li>Stripe</li>
              <li>Shopify</li>
            </ul>
            
            <h2>5. Managing Cookies</h2>
            <p>
              Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be personalized to you.
            </p>
            
            <h3>Browser Settings</h3>
            <p>
              You can manage cookies through your browser settings. Here's how to do it in popular browsers:
            </p>
            <ul>
              <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="link link-primary">Google Chrome</a></li>
              <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="link link-primary">Mozilla Firefox</a></li>
              <li><a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="link link-primary">Safari</a></li>
              <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="link link-primary">Microsoft Edge</a></li>
            </ul>
            
            <h3>Cookie Consent Tool</h3>
            <p>
              We provide a cookie consent tool when you first visit our website, allowing you to accept or decline non-essential cookies. You can change your preferences at any time by clicking the "Cookie Settings" link in the footer of our website.
            </p>
            
            <h2>6. Do Not Track Signals</h2>
            <p>
              Some browsers have a "Do Not Track" feature that lets you tell websites that you do not want to have your online activities tracked. At this time, we do not respond to browser "Do Not Track" signals.
            </p>
            
            <h2>7. Changes to This Cookie Policy</h2>
            <p>
              We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised policy on our website. We encourage you to periodically review this page for the latest information on our cookie practices.
            </p>
            
            <h2>8. Contact Us</h2>
            <p>
              If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
            </p>
            <address>
              HopShop<br />
              Attn: Privacy Officer<br />
              123 Frog Lane<br />
              Pondville, FL 12345<br />
              Email: privacy@hopshop.com<br />
              Phone: (555) 123-4567
            </address>
            
            <div className="mt-8">
              <Link href="/privacy" className="link link-primary">View our Privacy Policy</Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
