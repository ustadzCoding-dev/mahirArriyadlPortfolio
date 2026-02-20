import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#profil" },
  { label: "Brosur", href: "#brosur" },
  { label: "Pendaftaran", href: "#pendaftaran" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-emerald-deep/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container mx-auto px-4 max-w-6xl flex items-center justify-between h-16">
        <a href="#beranda" className="font-display font-bold text-primary-foreground text-lg">
          PP <span className="text-gradient-gold">Mahir Arriyadl</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="font-body text-sm text-primary-foreground/80 hover:text-gold-light transition-colors">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#pendaftaran"
              className="inline-block bg-gradient-gold text-accent-foreground font-display font-bold text-sm px-5 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Daftar Sekarang
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-primary-foreground">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-emerald-deep/98 border-t border-primary-foreground/10 px-4 pb-6 pt-2">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block font-body text-primary-foreground/80 hover:text-gold-light transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#pendaftaran"
                onClick={() => setOpen(false)}
                className="inline-block bg-gradient-gold text-accent-foreground font-display font-bold text-sm px-5 py-2 rounded-lg"
              >
                Daftar Sekarang
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
