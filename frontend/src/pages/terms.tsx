import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Link from "next/link";

export default function Terms() {
  return (
    <>
      <Header />
      <Navigation />
      
      <main className="min-h-screen bg-base-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Terms of Use</h1>
          
          <div className="prose max-w-none">
            <p className="lead">
              Welcome to HopShop. By accessing or using our website, you agree to be bound by these Terms of Use. Please read them carefully.
            </p>
            
            <div className="alert alert-info mb-6">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span>Last updated: May 15, 2023</span>
              </div>
            </div>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the HopShop website, mobile application, or any other services provided by HopShop (collectively, the "Services"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our Services.
            </p>
            
            <h2>2. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. We will provide notice of any material changes by posting the new Terms of Use on the Site and updating the "Last Updated" date. Your continued use of the Services after any such changes constitutes your acceptance of the new Terms of Use.
            </p>
            
            <h2>3. User Accounts</h2>
            <p>
              To access certain features of our Services, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
            </p>
            <p>
              You are responsible for safeguarding your password and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
            
            <h2>4. Products and Services</h2>
            <p>
              HopShop offers a variety of products related to amphibians, including live animals, habitats, food, and accessories. By purchasing live animals, you agree to provide proper care according to species-specific requirements.
            </p>
            <p>
              We reserve the right to refuse service, terminate accounts, or cancel orders at our discretion, including if we believe that customer conduct violates applicable law or is harmful to our interests.
            </p>
            
            <h2>5. Orders and Payments</h2>
            <p>
              When you place an order through our Services, you are making an offer to purchase the products you have selected. We reserve the right to accept or decline your offer for any reason.
            </p>
            <p>
              Prices for products are subject to change without notice. We reserve the right to discontinue any product at any time.
            </p>
            
            <h2>6. Shipping and Delivery</h2>
            <p>
              We ship products to the address you provide when placing your order. Delivery times are estimates and not guaranteed. For live animal shipments, special conditions apply to ensure the health and safety of the animals.
            </p>
            
            <h2>7. Returns and Refunds</h2>
            <p>
              Our return and refund policy is available on our <Link href="/returns" className="link link-primary">Returns and Refunds</Link> page. Different policies may apply to different product categories, particularly for live animals.
            </p>
            
            <h2>8. Intellectual Property</h2>
            <p>
              The content, organization, graphics, design, compilation, and other matters related to the Services are protected under applicable copyrights, trademarks, and other proprietary rights. Copying, redistribution, use, or publication of any such content or any part of the Services is prohibited without our express permission.
            </p>
            
            <h2>9. User Content</h2>
            <p>
              By posting, uploading, or submitting any content to our Services, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
            </p>
            
            <h2>10. Prohibited Activities</h2>
            <p>
              You agree not to engage in any of the following prohibited activities:
            </p>
            <ul>
              <li>Violating any applicable laws or regulations</li>
              <li>Infringing on the intellectual property rights of others</li>
              <li>Submitting false or misleading information</li>
              <li>Engaging in unauthorized framing or linking to the Services</li>
              <li>Interfering with or disrupting the Services or servers</li>
              <li>Attempting to gain unauthorized access to any portion of the Services</li>
            </ul>
            
            <h2>11. Disclaimer of Warranties</h2>
            <p>
              THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. HOPSHOP EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
            
            <h2>12. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL HOPSHOP BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
            </p>
            
            <h2>13. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless HopShop and its officers, directors, employees, agents, and affiliates from and against any and all claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) that such parties may incur as a result of or arising from your violation of these Terms of Use.
            </p>
            
            <h2>14. Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of law provisions.
            </p>
            
            <h2>15. Dispute Resolution</h2>
            <p>
              Any dispute arising out of or relating to these Terms of Use shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall be conducted in Pondville, Florida.
            </p>
            
            <h2>16. Severability</h2>
            <p>
              If any provision of these Terms of Use is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that the Terms of Use shall otherwise remain in full force and effect and enforceable.
            </p>
            
            <h2>17. Contact Information</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <address>
              HopShop<br />
              123 Frog Lane<br />
              Pondville, FL 12345<br />
              Email: legal@hopshop.com<br />
              Phone: (555) 123-4567
            </address>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
}
