import heroImage from "@/assets/hero-pesantren.png";
import patternImage from "@/assets/islamic-pattern.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Pondok Pesantren Mahir Arriyadl"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-deep/60 a-emerald-deep/45 to-emerald-deep/70"/>
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-deep/55 a-emerald-deep/25 to-transparent" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute top-0 left-0 right-0 h-16 opacity-25">
        <img src={patternImage} alt="" className="w-full h-full object-cover" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="container mx-auto px-4 pt-24 pb-28">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="font-arabic text-gold-light text-lg md:text-xl mb-4 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
              </p>
              <h1
                className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-5 animate-fade-in-up leading-tight"
                style={{ animationDelay: "0.25s" }}
              >
                Pondok Pesantren
                <br />
                <span className="inline-flex items-baseline">
                  <span className="text-gradient-gold inline-block overflow-hidden whitespace-nowrap align-bottom animate-typing">Mahir Arriyadl</span>
                  <span className="ml-1 inline-block w-[2px] h-[1em] bg-gold-light animate-caret" aria-hidden="true" />
                </span>
              </h1>
              <p
                className="font-body text-primary-foreground/85 text-lg md:text-xl max-w-2xl mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                Mendidik Generasi Berilmu, Berakhlak, dan Berprestasi
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
                <a
                  href="#pendaftaran"
                  className="inline-flex items-center justify-center bg-gradient-gold text-accent-foreground font-display font-bold px-8 py-4 rounded-xl text-base md:text-lg shadow-gold hover:opacity-90 transition-opacity"
                >
                  Pendaftaran Santri Baru
                </a>
                <a
                  href="#brosur"
                  className="inline-flex items-center justify-center bg-background/10 backdrop-blur-sm text-primary-foreground font-display font-bold px-8 py-4 rounded-xl text-base md:text-lg border border-primary-foreground/20 hover:bg-background/15 transition-colors"
                >
                  Lihat Brosur
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 animate-fade-in-up" style={{ animationDelay: "0.65s" }}>
                <div className="rounded-2xl border border-primary-foreground/15 bg-background/10 backdrop-blur-sm p-5">
                  <div className="font-display text-primary-foreground text-lg font-bold mb-1">Pembinaan Akhlak</div>
                  <div className="font-body text-primary-foreground/80 text-sm">Pembentukan karakter dan adab dalam keseharian santri.</div>
                </div>
                <div className="rounded-2xl border border-primary-foreground/15 bg-background/10 backdrop-blur-sm p-5">
                  <div className="font-display text-primary-foreground text-lg font-bold mb-1">Ilmu & Prestasi</div>
                  <div className="font-body text-primary-foreground/80 text-sm">Pembelajaran terarah untuk mendorong santri berprestasi.</div>
                </div>
                <div className="rounded-2xl border border-primary-foreground/15 bg-background/10 backdrop-blur-sm p-5 sm:col-span-2 lg:col-span-1">
                  <div className="font-display text-primary-foreground text-lg font-bold mb-1">Informasi Pendaftaran</div>
                  <div className="font-body text-primary-foreground/80 text-sm">
                    Lihat detail persyaratan dan alur pendaftaran di bagian brosur & pendaftaran.
                  </div>
                </div>
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
