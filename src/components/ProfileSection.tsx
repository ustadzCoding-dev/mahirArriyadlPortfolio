import { BookOpen, GraduationCap } from "lucide-react";

const programs = [
  {
    icon: BookOpen,
    title: "Program Salafiyyah",
    subtitle: "Madrasah Al-Asna",
    description:
      "Program pendidikan klasik pesantren yang berfokus pada pendalaman kitab kuning, ilmu Al-Qur'an, Hadits, Fiqih, Nahwu, Sharaf, dan ilmu-ilmu keislaman lainnya. Santri dibimbing langsung oleh para asatidz yang berpengalaman dalam tradisi keilmuan salaf.",
    features: ["Kajian Kitab Kuning", "Tahfidz Al-Qur'an", "Bahasa Arab Intensif", "Ilmu Fiqih & Ushul Fiqih"],
  },
  {
    icon: GraduationCap,
    title: "Program Kemenag",
    subtitle: "Kurikulum Kementerian Agama",
    description:
      "Program pendidikan formal yang mengikuti kurikulum Kementerian Agama RI, memadukan ilmu agama dan ilmu umum. Lulusan mendapatkan ijazah resmi yang diakui secara nasional untuk melanjutkan ke jenjang pendidikan yang lebih tinggi.",
    features: ["Ijazah Resmi Kemenag", "Kurikulum Terpadu", "Ilmu Umum & Agama", "Persiapan Perguruan Tinggi"],
  },
];

const ProfileSection = () => {
  return (
    <section id="profil" className="py-20 bg-cream">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-emerald-light font-body text-sm uppercase tracking-widest mb-2">Profil Pesantren</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Program <span className="text-primary">Pendidikan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="bg-card rounded-xl p-8 shadow-emerald border border-border hover:border-gold/40 transition-colors group"
            >
              <div className="w-14 h-14 rounded-lg bg-gradient-emerald flex items-center justify-center mb-6">
                <program.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-1">{program.title}</h3>
              <p className="text-gold font-body font-semibold text-sm mb-4">{program.subtitle}</p>
              <p className="text-muted-foreground font-body leading-relaxed mb-6">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-foreground font-body text-sm">
                    <span className="w-2 h-2 rounded-full bg-gradient-gold flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
