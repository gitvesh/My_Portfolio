"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowUpRight, Menu, X } from "./icons";

const nav = [{ href: "/projects", label: "Projects" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="header-inner wrap">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)} aria-label="Bhavesh Jadhav, home"><span className="wordmark-mark">b<span>.</span></span><span className="wordmark-name">BHAVESH JADHAV</span></Link>
        <button className="mobile-menu" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open}>{open ? <X size={20}/> : <Menu size={20}/>}</button>
        <nav className={`main-nav ${open ? "nav-open" : ""}`} aria-label="Main navigation">
          {nav.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className={pathname.startsWith(item.href) ? "active" : ""}>{item.label}</Link>)}
          <Link className="nav-cta nav-cta-hire" href="/contact" onClick={() => setOpen(false)}>
            <span className="availability-dot-mini" /> Let’s Connect <ArrowUpRight size={14}/>
          </Link>
        </nav>
      </div>
    </header>
  );
}
