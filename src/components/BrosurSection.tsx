const DRIVE_VIEW_URL =
  "https://drive.google.com/file/d/1oNl7TXOuw_27QdaCkbB1gk3E4m1CLNt_/view?usp=sharing";

const DRIVE_PREVIEW_URL =
  "https://drive.google.com/file/d/1oNl7TXOuw_27QdaCkbB1gk3E4m1CLNt_/preview";

const BrosurSection = () => {
  return (
    <section id="brosur" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-emerald-light font-body text-sm uppercase tracking-widest mb-2">Informasi Lengkap</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Brosur <span className="text-primary">Penerimaan Santri Baru</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="bg-cream border border-border rounded-2xl overflow-hidden shadow-emerald">
          <div className="aspect-[3/4] md:aspect-[4/5]">
            <iframe
              src={DRIVE_PREVIEW_URL}
              title="Brosur Pendaftaran"
              className="w-full h-full"
              allow="autoplay"
            />
          </div>

          <div className="p-4 border-t border-border flex items-center justify-center gap-2 sm:gap-3 flex-wrap">
            <a
              href={DRIVE_VIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 sm:px-4 rounded-xl bg-background border border-border font-body text-xs sm:text-sm text-foreground hover:bg-muted"
            >
              Buka PDF
            </a>
            <a
              href={DRIVE_VIEW_URL}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 sm:px-4 rounded-xl bg-gradient-emerald text-primary-foreground font-body text-xs sm:text-sm shadow-emerald"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrosurSection;
