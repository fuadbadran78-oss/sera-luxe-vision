import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import productLipstick from "@/assets/product-lipstick.jpg";
import productPerfume from "@/assets/product-perfume.jpg";
import productPalette from "@/assets/product-palette.jpg";
import heroBackground from "@/assets/hero-background.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      image: heroBackground,
      title: "Séra Collection",
      category: "Campaign",
    },
    {
      image: productLipstick,
      title: "Rouge Séra",
      category: "Product",
    },
    {
      image: productPerfume,
      title: "Essence de Séra",
      category: "Product",
    },
    {
      image: productPalette,
      title: "Palette Glamour",
      category: "Product",
    },
    {
      image: productLipstick,
      title: "Luxury Lips",
      category: "Editorial",
    },
    {
      image: productPerfume,
      title: "Scent of Elegance",
      category: "Editorial",
    },
    {
      image: productPalette,
      title: "Color Story",
      category: "Editorial",
    },
    {
      image: heroBackground,
      title: "Glamour Campaign",
      category: "Campaign",
    },
    {
      image: productLipstick,
      title: "Bold & Beautiful",
      category: "Product",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              <span className="text-gradient-gold">معرض</span> Séra
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              استكشفي عالم الجمال والفخامة من خلال صورنا المذهلة
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer shadow-card hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(item.image)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--sera-black))] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[hsl(var(--sera-red))] to-[hsl(var(--sera-pink))] text-white text-xs font-semibold rounded-full mb-2">
                      {item.category}
                    </span>
                    <h3 className="text-xl font-display font-bold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-white/20 transition-smooth text-white"
            onClick={() => setSelectedImage(null)}
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
          
          <img
            src={selectedImage}
            alt="Gallery item"
            className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--sera-red))] via-[hsl(var(--sera-pink))] to-[hsl(var(--sera-red))] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCwyIDQgNHYyYzAgMi0yIDQtNCA0cy00LTItNC00di0yem0wLTMwYzAtMiAyLTQgNC00czQgMiA0IDR2MmMwIDItMiA0LTQgNC00IDAtNC0yLTQtNFY0ek0wIDM0YzAtMiAyLTQgNC00czQgMiA0IDR2MmMwIDItMiA0LTQgNHMtNC0yLTQtNHYtMnptMC0zMGMwLTIgMi00IDQtNHM0IDIgNCA0djJjMCAyLTIgNC00IDRzLTQtMi00LTRWNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              جاهزة للتألق؟
            </h2>
            <p className="text-xl mb-8 text-white/90">
              استكشفي مجموعتنا الكاملة من منتجات التجميل الفاخرة
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/products">
                <button className="px-10 py-4 bg-gradient-to-r from-[hsl(var(--sera-gold))] to-[hsl(var(--sera-gold-dark))] text-[hsl(var(--sera-black))] font-semibold rounded-lg shadow-gold hover:animate-glow transition-smooth text-lg">
                  تسوقي الآن
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;
