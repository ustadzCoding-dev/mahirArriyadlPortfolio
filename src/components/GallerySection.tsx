import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

import img1 from "@/assets/1.webp";
import img2 from "@/assets/2.webp";
import img3 from "@/assets/3.webp";
import img4 from "@/assets/4.webp";
import img5 from "@/assets/5.webp";
import img6 from "@/assets/6.webp";
import img7 from "@/assets/7.webp";
import img8 from "@/assets/8.webp";
import img9 from "@/assets/9.webp";
import img10 from "@/assets/10.webp";
import img11 from "@/assets/11.webp";
import img12 from "@/assets/12.webp";
import img13 from "@/assets/13.webp";
import img14 from "@/assets/14.webp";
import img15 from "@/assets/15.webp";

const GallerySection = () => {
  const images = useMemo(
    () => [
      { src: img1, alt: "Galeri foto 1" },
      { src: img2, alt: "Galeri foto 2" },
      { src: img3, alt: "Galeri foto 3" },
      { src: img4, alt: "Galeri foto 4" },
      { src: img5, alt: "Galeri foto 5" },
      { src: img6, alt: "Galeri foto 6" },
      { src: img7, alt: "Galeri foto 7" },
      { src: img8, alt: "Galeri foto 8" },
      { src: img9, alt: "Galeri foto 9" },
      { src: img10, alt: "Galeri foto 10" },
      { src: img11, alt: "Galeri foto 11" },
      { src: img12, alt: "Galeri foto 12" },
      { src: img13, alt: "Galeri foto 13" },
      { src: img14, alt: "Galeri foto 14" },
      { src: img15, alt: "Galeri foto 15" },
    ],
    []
  );

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const prev = () =>
    setActiveIndex((i) => {
      if (i === null) return i;
      return (i - 1 + images.length) % images.length;
    });

  const next = () =>
    setActiveIndex((i) => {
      if (i === null) return i;
      return (i + 1) % images.length;
    });

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  return (
    <section id="galeri" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-emerald-light font-body text-sm uppercase tracking-widest mb-2">Dokumentasi</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galeri <span className="text-primary">Kegiatan</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-gold mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <button
              key={img.src}
              type="button"
              onClick={() => open(idx)}
              className="group relative overflow-hidden rounded-2xl border border-border bg-cream shadow-emerald focus:outline-none focus:ring-2 focus:ring-gold-light"
              aria-label={`Buka ${img.alt}`}
            >
              <div className="aspect-[4/3]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="absolute inset-0 bg-emerald-deep/0 group-hover:bg-emerald-deep/10 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Pratinjau foto"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={close}
              className="absolute -top-12 right-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-background/15 border border-white/20 text-white hover:bg-background/20"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="rounded-2xl overflow-hidden border border-white/15 bg-black/20">
              <img
                src={images[activeIndex].src}
                alt={images[activeIndex].alt}
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              />
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={prev}
                className="px-4 py-2 rounded-xl bg-background/15 border border-white/20 text-white font-body text-sm hover:bg-background/20"
              >
                Sebelumnya
              </button>
              <div className="text-white/80 font-body text-sm">
                {activeIndex + 1} / {images.length}
              </div>
              <button
                type="button"
                onClick={next}
                className="px-4 py-2 rounded-xl bg-background/15 border border-white/20 text-white font-body text-sm hover:bg-background/20"
              >
                Berikutnya
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
