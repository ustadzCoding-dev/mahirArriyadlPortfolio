const GOOGLE_FORM_URL = "#";
const WHATSAPP_URL = "https://wa.me/6285735884008";

const PendaftaranSection = () => {
  return (
    <section id="pendaftaran" className="py-16 sm:py-20 bg-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-emerald-light font-body text-sm uppercase tracking-widest mb-2">Penerimaan Santri Baru</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pendaftaran <span className="text-primary">Online</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-emerald border border-border">
          <div className="text-center">
            <p className="text-muted-foreground font-body text-sm sm:text-base mb-6">
              Syarat dan alur pendaftaran dapat dilihat lengkap pada brosur. Pendaftaran online melalui Google Form (link akan kami update
              segera). Untuk sementara, silakan hubungi kami melalui WhatsApp.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href={GOOGLE_FORM_URL}
                target={GOOGLE_FORM_URL === "#" ? undefined : "_blank"}
                rel={GOOGLE_FORM_URL === "#" ? undefined : "noopener noreferrer"}
                aria-disabled={GOOGLE_FORM_URL === "#"}
                className="inline-flex items-center justify-center gap-3 bg-gradient-gold text-accent-foreground font-display font-bold px-6 py-3 sm:px-10 sm:py-4 rounded-lg text-sm sm:text-lg shadow-gold hover:opacity-90 transition-opacity opacity-70 pointer-events-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Daftar Online (Google Form)
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-gradient-emerald text-primary-foreground font-display font-bold px-6 py-3 sm:px-10 sm:py-4 rounded-lg text-sm sm:text-lg shadow-emerald hover:opacity-90 transition-opacity"
              >
                Hubungi via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendaftaranSection;
