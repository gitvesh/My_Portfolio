import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "./icons";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <span className="eyebrow">HAVE A CHALLENGE WORTH EXPLORING?</span>
            <h2>
              Let’s talk, learn, and <span>build together.</span>
            </h2>
          </div>
          <Link className="circle-link" href="/contact" aria-label="Initiate conversation">
            <ArrowUpRight size={22} />
          </Link>
        </div>
        <div className="footer-bottom">
          <Link href="/" className="footer-brand">
            Bhavesh Jadhav <span>· AI Engineer & Builder</span>
          </Link>
          <div className="footer-social">
            <a href="mailto:bhaveshjadhav9923@gmail.com">
              <Mail size={15} /> Email
            </a>
            <a href="https://linkedin.com/in/bhavesh-jadhav-671048250" target="_blank" rel="noreferrer">
              <Linkedin size={15} /> LinkedIn
            </a>
            <a href="https://github.com/gitvesh" target="_blank" rel="noreferrer">
              <Github size={15} /> GitHub
            </a>
          </div>
          <span className="copyright">
            © {new Date().getFullYear()} Bhavesh Jadhav · Learn deeply, build rigorously
          </span>
        </div>
      </div>
    </footer>
  );
}
