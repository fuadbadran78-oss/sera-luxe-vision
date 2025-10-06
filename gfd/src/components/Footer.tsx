import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[hsl(var(--sera-black))] to-[hsl(var(--sera-black-soft))] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold text-gradient-gold">
              Séra
            </h2>
            <p className="text-white/80 leading-relaxed">
              حيث يلتقي السحر بالفخامة. اكتشفي مجموعتنا الحصرية من مستحضرات التجميل الفاخرة.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-secondary">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-white/80 hover:text-accent transition-smooth inline-block"
                >
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-white/80 hover:text-accent transition-smooth inline-block"
                >
                  المنتجات
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="text-white/80 hover:text-accent transition-smooth inline-block"
                >
                  المعرض
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-secondary">
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5 text-accent" />
                <span dir="ltr">+966 XX XXX XXXX</span>
              </li>
              <li className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5 text-accent" />
                <span>info@sera.com</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-xl font-display font-bold text-secondary">
              تابعنا
            </h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[hsl(var(--sera-red))] hover:to-[hsl(var(--sera-pink))] transition-smooth hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[hsl(var(--sera-red))] hover:to-[hsl(var(--sera-pink))] transition-smooth hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r hover:from-[hsl(var(--sera-red))] hover:to-[hsl(var(--sera-pink))] transition-smooth hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-white/60 text-sm mt-6">
              انضمي إلى عائلتنا واحصلي على آخر العروض والإصدارات الحصرية
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} Séra. جميع الحقوق محفوظة
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-smooth">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-smooth">
                الشروط والأحكام
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
