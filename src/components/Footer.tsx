import { Phone, MapPin } from "lucide-react";
import patternImage from "@/assets/islamic-pattern.jpg";

const Footer = () => {
  return (
    <footer className="bg-gradient-emerald text-primary-foreground">
      {/* Pattern */}
      <div className="h-8 opacity-20">
        <img src={patternImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-2">
              Pondok Pesantren <span className="text-gradient-gold">Mahir Arriyadl</span>
            </h3>
            <p className="text-primary-foreground/70 font-body text-sm leading-relaxed">
              Mendidik Generasi Berilmu, Berakhlak, dan Berprestasi
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold mb-4 text-gold-light">Hubungi Kami</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/6285735884008"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold-light transition-colors font-body text-sm"
              >
                <Phone className="w-4 h-4" />
                085735884008
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/80 font-body text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Pondok Pesantren Mahir Arriyadl</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-gold-light">Tautan</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#profil" className="text-primary-foreground/80 hover:text-gold-light transition-colors">Profil Pesantren</a></li>
              <li><a href="#brosur" className="text-primary-foreground/80 hover:text-gold-light transition-colors">Brosur</a></li>
              <li><a href="#pendaftaran" className="text-primary-foreground/80 hover:text-gold-light transition-colors">Pendaftaran</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
          <p className="text-primary-foreground/50 font-body text-sm">
            © {new Date().getFullYear()} Pondok Pesantren Mahir Arriyadl. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
