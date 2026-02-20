import { Facebook, Instagram, Phone, Youtube } from "lucide-react";
import patternImage from "@/assets/islamic-pattern.jpg";

const MAPS_PLACE_URL =
  "https://www.google.com/maps/place/PONDOK+PESANTREN+KYAI+IMAM+NAWAWI/@-7.7706586,112.2473013,17z/data=!3m1!4b1!4m6!3m5!1s0x2e7867a9f9682889:0x4a3b9ae4cfd2a453!8m2!3d-7.7706639!4d112.2498762!16s%2Fg%2F11jfcwq98x";

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=-7.7706639,112.2498762&z=17&output=embed";

const Footer = () => {
  return (
    <footer className="bg-gradient-emerald text-primary-foreground">
      {/* Pattern */}
      <div className="h-8 opacity-20">
        <img src={patternImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-10 sm:py-12">
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
              <a
                href="https://www.instagram.com/pondokmahirarriyadl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold-light transition-colors font-body text-sm"
              >
                <Instagram className="w-4 h-4" />
                @pondokmahirarriyadl
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/80 font-body text-sm">
                <Facebook className="w-4 h-4" />
                <span>Pondok Mahir Arriyadl</span>
              </div>
              <a
                href="https://www.youtube.com/@pondokmahirarriyadl"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-gold-light transition-colors font-body text-sm"
              >
                <Youtube className="w-4 h-4" />
                @pondokmahirarriyadl
              </a>
            </div>

            <div className="mt-6">
              <h5 className="font-display font-bold mb-3 text-gold-light">Lokasi</h5>
              <div className="rounded-xl overflow-hidden border border-primary-foreground/20 bg-black/10">
                <div className="aspect-[4/3] sm:aspect-[16/10]">
                  <iframe
                    title="Lokasi Pondok Pesantren"
                    src={MAPS_EMBED_URL}
                    className="w-full h-full"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
              </div>
              <a
                href={MAPS_PLACE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex text-primary-foreground/80 hover:text-gold-light transition-colors font-body text-sm"
              >
                Buka di Google Maps
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 text-gold-light">Tautan</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#profil" className="text-primary-foreground/80 hover:text-gold-light transition-colors">Tentang Pesantren</a></li>
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
