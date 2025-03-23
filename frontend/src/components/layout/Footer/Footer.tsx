import Link from "next/link";

export interface FooterProps {
  className?: string;
}

export default function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`footer p-10 bg-base-300 text-base-content ${className}`}>
      <nav>
        <h6 className="footer-title">Shop</h6> 
        <Link href="/category/frogs" className="link link-hover">Pet Frogs</Link>
        <Link href="/category/supplies" className="link link-hover">Supplies</Link>
        <Link href="/category/accessories" className="link link-hover">Accessories</Link>
        <Link href="/category/food" className="link link-hover">Food & Diet</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Company</h6> 
        <Link href="/about" className="link link-hover">About us</Link>
        <Link href="/contact" className="link link-hover">Contact</Link>
        <Link href="/jobs" className="link link-hover">Jobs</Link>
        <Link href="/press" className="link link-hover">Press kit</Link>
      </nav> 
      <nav>
        <h6 className="footer-title">Legal</h6> 
        <Link href="/terms" className="link link-hover">Terms of use</Link>
        <Link href="/privacy" className="link link-hover">Privacy policy</Link>
        <Link href="/cookie" className="link link-hover">Cookie policy</Link>
      </nav> 
      <form>
        <h6 className="footer-title">Newsletter</h6> 
        <fieldset className="form-control w-80">
          <label className="label">
            <span className="label-text">Enter your email address</span>
          </label> 
          <div className="join">
            <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
            <button className="btn btn-primary join-item">Subscribe</button>
          </div>
        </fieldset>
      </form>
    </footer>
  );
}