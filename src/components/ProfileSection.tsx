const AboutSection = () => {
  return (
    <section id="profil" className="py-16 sm:py-20 bg-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-emerald-light font-body text-sm uppercase tracking-widest mb-2">Tentang Pesantren</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Tentang <span className="text-primary">Pondok Pesantren</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="bg-card rounded-2xl p-6 sm:p-8 md:p-12 shadow-emerald border border-border">
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground font-body leading-relaxed mb-4 text-justify indent-6">
              Di Ringinagung, Keling, Kepung. Berdiri salah satu pesantren tertua di Kabupaten Kediri yaitu Pondok Pesantren Mahir Arriyadl.
              Sekitar tahun 1870 M, Hadrotus Syaikh Imam Nawawi mendirikan pesantren ini di Alas Simpenan, Desa Keling, Kepung, Kediri.
              Berasaskan Ahlussunnah wal Jama’ah.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed text-justify indent-6">
              Perjuangan membuka hutan tersebut berujung pada berdirinya Masjid Ringinagung. Di tengah berbagai hambatan, beliau bermunajat
              dan mendapat ilham untuk mengamalkan Sholawat Nawawiyyah atau Sholawat Ringinagung, اللّهمّ صلّ على محمّد وسلّم“Allahumma Shalli ‘ala Muhammad wa Sallim”,
              yang hingga kini terus dilestarikan oleh para santri. Dari tempat inilah, selama lebih dari satu abad, tradisi santri, keilmuan,
              dan dakwah Islamiyah terus menyala, melintasi zaman hingga hari ini.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const PendidikanSection = () => {
  return (
    <section id="pendidikan" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-emerald-light font-body text-sm uppercase tracking-widest mb-2">Pendidikan</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pendidikan <span className="text-primary">Salafiyyah</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-cream rounded-xl p-6 border border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Madrasah Al Asna</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4 te">
              Sebagai jantung keilmuan di Pondok Pesantren Mahir Arriyadl, Madrasah Salafiyyah Al Asna menyelenggarakan jenjang:
            </p>
            <ul className="space-y-2">
              {["SP (Sekolah Persiapan)", "Madrasah Ibtidaiyyah", "Madrasah Tsanawiyyah", "Madrasah Aliyyah", "Majelis Musyawarah"].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground font-body text-sm">
                  <span className="w-2 h-2 rounded-full bg-gradient-gold flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-cream rounded-xl p-6 border border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Pengajian Kitab Kuning</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed text-justify">
              Pengajian kitab kuning (Al Kutub Al Mu’tabarah) menjadi ruh pendidikan dengan metode klasik seperti sorogan dan bandongan.
              Tradisi ini menanamkan kedalaman ilmu, ketelitian, serta adab.
            </p>
          </div>

          <div className="bg-cream rounded-xl p-6 border border-border">
            <h3 className="font-display text-lg font-bold text-foreground mb-2">Kegiatan Ilmiyyah & Qur'aniyyah</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed text-justify">
              Kegiatan seperti khotobah, bahtsul masail dan qira’ah bit taghanni menjadi sarana pembinaan intelektual dan akhlak guna membentuk santri yang alim, matang dan berkarakter.
              Sejalan dengan itu, dalam bidang Al-Qur’an, Madrasah Diniyyah Yanbu’a Qur’aniyyah membina santri agar mampu membaca Al-Qur’an secara tartil sesuai makhraj dan kaidah tajwid.
              Sementara dalam bidang falakiyah, Lajnah Falak Hisab menjadi rujukan penentuan waktu sholat serta penyusunan kalender hisab pesantren.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProfileSection = () => {
  return (
    <>
      <AboutSection />
      <PendidikanSection />
    </>
  );
};

export default ProfileSection;
