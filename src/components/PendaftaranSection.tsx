import { CheckCircle } from "lucide-react";

const syaratList = [
  "Mengisi formulir pendaftaran online melalui Google Form",
  "Fotokopi Kartu Keluarga (KK) 1 lembar",
  "Fotokopi Akta Kelahiran 1 lembar",
  "Fotokopi Ijazah terakhir / Surat Keterangan Lulus (SKL) 1 lembar",
  "Fotokopi Raport terakhir 1 lembar",
  "Pas foto 3x4 berwarna 4 lembar",
  "Surat keterangan sehat dari dokter",
  "Surat persetujuan orang tua / wali",
];

const PendaftaranSection = () => {
  return (
    <section id="pendaftaran" className="py-20 bg-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-emerald-light font-body text-sm uppercase tracking-widest mb-2">Penerimaan Santri Baru</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Syarat <span className="text-primary">Pendaftaran</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-emerald border border-border">
          <ul className="space-y-4 mb-10">
            {syaratList.map((syarat, index) => (
              <li key={index} className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-light flex-shrink-0 mt-0.5" />
                <span className="text-foreground font-body leading-relaxed">{syarat}</span>
              </li>
            ))}
          </ul>

          <div className="text-center pt-6 border-t border-border">
            <p className="text-muted-foreground font-body mb-6">
              Klik tombol di bawah untuk mengisi formulir pendaftaran secara online
            </p>
            <a
              href="https://forms.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-gold text-accent-foreground font-display font-bold px-10 py-4 rounded-lg text-lg shadow-gold hover:opacity-90 transition-opacity"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
              </svg>
              Daftar Sekarang via Google Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendaftaranSection;
