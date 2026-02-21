import { useEffect, useMemo, useState } from "react";
import patternImage from "@/assets/islamic-pattern.jpg";
import logoPonpes from "@/assets/logo-ponpes.png";

import slide1 from "@/assets/1.webp";
import slide2 from "@/assets/2.webp";
import slide3 from "@/assets/3.webp";

const HeroSection = () => {
  const slides = useMemo(() => [slide1, slide2, slide3], []);
  const [activeSlide, setActiveSlide] = useState(0);
  const [loaded, setLoaded] = useState<boolean[]>(() => slides.map((_, i) => i === 0));

  useEffect(() => {
    slides.forEach((src, idx) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoaded((prev) => {
          if (prev[idx]) return prev;
          const next = prev.slice();
          next[idx] = true;
          return next;
        });
      };
    });
  }, [slides]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveSlide((i) => {
        const next = (i + 1) % slides.length;
        return loaded[next] ? next : i;
      });
    }, 6000);

    return () => window.clearInterval(id);
  }, [loaded, slides.length]);

  return (
    <section id="beranda" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-emerald-deep">
        {slides.map((src, idx) => (
          <img
            key={src}
            src={src}
            alt={idx === 0 ? "Pondok Pesantren Mahir Arriyadl" : ""}
            aria-hidden={idx === 0 ? undefined : true}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              idx === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            loading={idx === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/60 via-emerald-deep/45 to-emerald-deep/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/55 via-emerald-deep/25 to-transparent" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute top-0 left-0 right-0 h-16 opacity-25">
        <img src={patternImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 pt-20 sm:pt-24 pb-20 sm:pb-28">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7 lg:col-span-8">
              <h1
                className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-5 animate-fade-in-up leading-tight"
                style={{ animationDelay: "0.25s" }}
              >
                Pon. Pes.
                <br />
                <span className="inline-flex items-baseline">
                  <span className="text-gradient-gold inline-block overflow-hidden sm:whitespace-nowrap align-bottom sm:animate-typing">Mahir Arriyadl</span>
                  <span className="ml-1 inline-block w-[2px] h-[1em] bg-gold-light animate-caret" aria-hidden="true" />
                </span>
                <span className="block">Ringinagung</span>
              </h1>
              <p
                className="font-body text-primary-foreground/85 text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                Merawat Ajaran Salaf, Mendidik Generasi Berilmu, Berakhlak dan Berprestasi
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 animate-fade-in-up md:justify-start" style={{ animationDelay: "0.55s" }}>
                <a
                  href="#pendaftaran"
                  className="inline-flex items-center justify-center bg-gradient-gold text-accent-foreground font-display font-bold px-5 py-3 rounded-lg text-xs sm:text-base md:text-lg sm:px-8 sm:py-4 shadow-gold hover:opacity-90 transition-opacity w-full sm:w-fit md:w-fit md:max-w-none sm:max-w-[240px]"
                >
                  Pendaftaran Santri Baru
                </a>
                <a
                  href="#brosur"
                  className="inline-flex items-center justify-center bg-background/10 backdrop-blur-sm text-primary-foreground font-display font-bold px-5 py-3 rounded-lg text-xs sm:text-base md:text-lg sm:px-8 sm:py-4 border border-primary-foreground/20 hover:bg-background/15 transition-colors w-full sm:w-fit md:w-fit md:max-w-none sm:max-w-[240px]"
                >
                  Lihat Brosur
                </a>
              </div>
            </div>

            <div className="md:col-span-5 lg:col-span-4">
              <div className="mx-auto mt-8 w-full max-w-[320px] rounded-2xl bg-black/10 backdrop-blur-[2px] border border-primary-foreground/10 overflow-hidden md:mt-0 md:ml-auto md:mr-0 md:max-w-[340px] md:w-full md:p-4 lg:max-w-none lg:w-fit lg:p-6 xl:p-7 lg:mr-8">
                <img
                  src={logoPonpes}
                  alt="Logo Pondok Pesantren"
                  className="h-20 w-full object-cover object-center md:h-20 md:w-full md:object-cover lg:h-32 lg:w-auto lg:object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-20 -mb-1 opacity-25 rotate-180">
        <img src={patternImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>
    </section>
  );
};

export default HeroSection;
