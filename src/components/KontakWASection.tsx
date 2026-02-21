import { MessageCircle } from "lucide-react";

type KontakWAItem = {
  wilayah: string;
  nama: string;
  noWa: string;
  catatan?: string;
};

const kontakWA: KontakWAItem[] = [
  {
    wilayah: "Kediri Kota",
    nama: "Admin Kediri",
    noWa: "6285735884008",
    catatan: "Info pendaftaran & jadwal silaturahmi",
  },
  {
    wilayah: "Kab. Kediri",
    nama: "Admin Kabupaten",
    noWa: "6281234567890",
    catatan: "Koordinasi wali santri wilayah kabupaten",
  },
  {
    wilayah: "Nganjuk",
    nama: "Admin Nganjuk",
    noWa: "6287771112233",
    catatan: "Khusus wilayah Nganjuk dan sekitarnya",
  },
  {
    wilayah: "Tulungagung",
    nama: "Admin Tulungagung",
    noWa: "6282244455566",
    catatan: "Konsultasi program pendidikan",
  },
  {
    wilayah: "Jombang",
    nama: "Admin Jombang",
    noWa: "6285150001122",
    catatan: "Informasi & koordinasi calon santri",
  },
  {
    wilayah: "Luar Kota",
    nama: "Admin Luar Kota",
    noWa: "6289654321098",
    catatan: "Untuk luar daerah / luar provinsi",
  },
];

const buildWaLink = (noWa: string, text: string) => {
  const sanitized = noWa.replace(/\D/g, "");
  return `https://wa.me/${sanitized}?text=${encodeURIComponent(text)}`;
};

const KontakWASection = () => {
  const defaultText = "Assalamu’alaikum. Saya ingin bertanya tentang Pondok Pesantren Mahir Arriyadl.";

  return (
    <section id="kontak-wa" className="py-16 sm:py-20 bg-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-emerald-light font-body text-sm uppercase tracking-widest mb-2">Kontak</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Kontak <span className="text-primary">WhatsApp</span> per Wilayah
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground font-body text-sm sm:text-base max-w-2xl mx-auto">
            Silakan pilih wilayah Anda untuk mendapatkan respon lebih cepat.
          </p>
        </div>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {kontakWA.map((item) => (
            <div key={item.wilayah} className="bg-card rounded-2xl p-6 border border-border shadow-emerald">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">{item.wilayah}</h3>
                  <p className="text-muted-foreground font-body text-sm mt-1">
                    {item.nama} · {item.noWa}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-accent-foreground" />
                </div>
              </div>

              {item.catatan && <p className="text-muted-foreground font-body text-sm mt-4 text-justify">{item.catatan}</p>}

              <div className="mt-5">
                <a
                  href={buildWaLink(item.noWa, defaultText)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full items-center justify-center bg-gradient-gold text-accent-foreground font-display font-bold px-5 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
                >
                  Chat WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KontakWASection;
