import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Sparkles, Award, Heart, Zap } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import seraModel from "@/assets/sera-model.png";
import productLipstick from "@/assets/product-lipstick.jpg";
import productPerfume from "@/assets/product-perfume.jpg";
import productPalette from "@/assets/product-palette.jpg";
import productFoundation from "@/assets/product-foundation.jpg";
import productBrushes from "@/assets/product-brushes.jpg";

const Index = () => {
  const featuredProducts = [
    {
      image: productLipstick,
      name: "Rouge Séra",
      price: "299 ر.س",
      category: "أحمر شفاه",
    },
    {
      image: productPerfume,
      name: "Essence de Séra",
      price: "499 ر.س",
      category: "عطور",
    },
    {
      image: productPalette,
      name: "Palette Glamour",
      price: "399 ر.س",
      category: "مكياج",
    },
    {
      image: productFoundation,
      name: "Foundation Séra Glow",
      price: "399 ر.س",
      category: "فونديشين",
    },
    {
      image: productBrushes,
      name: "Brush Set Professional",
      price: "599 ر.س",
      category: "فراشي",
    },
    {
      image: productFoundation,
      name: "Foundation Séra HD",
      price: "429 ر.س",
      category: "فونديشين",
    },
  ];

  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "جودة استثنائية",
      description: "منتجات مصنوعة من أفضل المكونات الطبيعية",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "فخامة لا مثيل لها",
      description: "تصميم عصري يعكس أناقتك وجمالك",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "صنع بحب",
      description: "كل منتج مصمم خصيصاً لإبراز جمالك الطبيعي",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "نتائج فورية",
      description: "تأثير واضح من أول استخدام",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#FFB6D9] via-[#D63B7B] to-[#FF69B4]">
        {/* Content */}
        <div className="container mx-auto px-4 relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="animate-fade-in-up text-center lg:text-right order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 leading-[1.2]">
                <span className="text-white block">اكتشفي</span>
                <span className="text-gradient-gold block">السحر الحقيقي</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
                مستحضرات تجميل فاخرة تبرز جمالك الطبيعي بلمسة من الجرأة والإثارة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end">
                <Button variant="luxury" size="xl" asChild>
                  <Link to="/products">اكتشف المجموعة</Link>
                </Button>
                <Button variant="gold" size="xl" asChild>
                  <Link to="/gallery">شاهد المعرض</Link>
                </Button>
              </div>
            </div>

            {/* Model Image */}
            <div className="relative animate-scale-in order-1 lg:order-2">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--sera-pink))] via-[hsl(var(--sera-pink-light))] to-[hsl(var(--sera-pink))] rounded-3xl opacity-75 blur-2xl animate-glow"></div>
                
                {/* Image */}
                <img
                  src={seraModel}
                  alt="Séra Beauty Collection"
                  className="relative w-full max-w-lg mx-auto rounded-3xl shadow-luxury transform transition-smooth group-hover:scale-105"
                />
                
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[hsl(var(--sera-gold))] to-[hsl(var(--sera-gold-dark))] rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-[hsl(var(--sera-red))] to-[hsl(var(--sera-pink))] rounded-full blur-3xl opacity-60 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-accent rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">
              لماذا <span className="text-gradient-gold">Séra</span>؟
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              نقدم لكِ تجربة فريدة من نوعها تجمع بين الفخامة والجودة والإبداع
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 sm:p-8 shadow-card hover-lift text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-r from-[hsl(var(--sera-red))] to-[hsl(var(--sera-pink))] flex items-center justify-center text-white shadow-luxury">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold text-foreground mb-2 sm:mb-3">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16 animate-fade-in px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground mb-3 sm:mb-4">
              منتجات <span className="text-gradient-hero">مميزة</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              اختارينا بعناية من أفضل مجموعاتنا الفاخرة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8 mb-12">
            {featuredProducts.map((product, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="gold" size="xl" asChild>
              <Link to="/products">عرض جميع المنتجات</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--sera-red))] via-[hsl(var(--sera-pink))] to-[hsl(var(--sera-red))]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yIDItNCA0LTRzNCwyIDQgNHYyYzAgMi0yIDQtNCA0cy00LTItNC00di0yem0wLTMwYzAtMiAyLTQgNC00czQgMiA0IDR2MmMwIDItMiA0LTQgNC00IDAtNC0yLTQtNFY0ek0wIDM0YzAtMiAyLTQgNC00czQgMiA0IDR2MmMwIDItMiA0LTQgNHMtNC0yLTQtNHYtMnptMC0zMGMwLTIgMi00IDQtNHM0IDIgNCA0djJjMCAyLTIgNC00IDRzLTQtMi00LTRWNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 text-center text-white">
          <div className="max-w-3xl mx-auto animate-fade-in-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold mb-4 sm:mb-6 px-4">
              انضمي إلى عائلة Séra
            </h2>
            <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 px-4 leading-relaxed">
              احصلي على خصم 20% على أول طلب واكتشفي عالم الجمال الفاخر
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <input
                type="email"
                placeholder="أدخلي بريدك الإلكتروني"
                className="w-full sm:min-w-[300px] px-4 sm:px-6 py-3 sm:py-4 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-accent transition-smooth text-base"
              />
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                اشتركي الآن
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
