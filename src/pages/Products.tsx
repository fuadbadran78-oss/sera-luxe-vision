import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import productLipstick from "@/assets/product-lipstick.jpg";
import productPerfume from "@/assets/product-perfume.jpg";
import productPalette from "@/assets/product-palette.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const categories = ["الكل", "أحمر شفاه", "عطور", "مكياج", "العناية بالبشرة"];

  const allProducts = [
    {
      image: productLipstick,
      name: "Rouge Séra Classic",
      price: "299 ر.س",
      category: "أحمر شفاه",
    },
    {
      image: productLipstick,
      name: "Rouge Séra Matte",
      price: "329 ر.س",
      category: "أحمر شفاه",
    },
    {
      image: productPerfume,
      name: "Essence de Séra",
      price: "499 ر.س",
      category: "عطور",
    },
    {
      image: productPerfume,
      name: "Séra Noir",
      price: "549 ر.س",
      category: "عطور",
    },
    {
      image: productPalette,
      name: "Palette Glamour",
      price: "399 ر.س",
      category: "مكياج",
    },
    {
      image: productPalette,
      name: "Palette Velvet",
      price: "449 ر.س",
      category: "مكياج",
    },
    {
      image: productLipstick,
      name: "Rouge Séra Limited",
      price: "349 ر.س",
      category: "أحمر شفاه",
    },
    {
      image: productPerfume,
      name: "Séra Rose",
      price: "529 ر.س",
      category: "عطور",
    },
    {
      image: productPalette,
      name: "Palette Luxe",
      price: "479 ر.س",
      category: "مكياج",
    },
  ];

  const filteredProducts =
    selectedCategory === "الكل"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
              <span className="text-gradient-hero">مجموعتنا</span> الفاخرة
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              اكتشفي مجموعة متكاملة من مستحضرات التجميل الفاخرة المصممة لإبراز جمالك الطبيعي
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b sticky top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "luxury" : "outline_luxury"}
                size="lg"
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <div
                key={index}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-2xl text-muted-foreground">
                لا توجد منتجات في هذه الفئة حالياً
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-[hsl(var(--sera-black))] to-[hsl(var(--sera-black-soft))] text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              كوني أول من يعرف
            </h2>
            <p className="text-xl mb-8 text-white/80">
              اشتركي في نشرتنا البريدية واحصلي على التحديثات والعروض الحصرية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="أدخلي بريدك الإلكتروني"
                className="px-6 py-4 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:border-accent transition-smooth min-w-[300px]"
              />
              <Button variant="gold" size="xl">
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

export default Products;
