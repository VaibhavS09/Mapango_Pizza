import { Star, MapPin, Clock, Utensils, Bike, ShoppingBag } from 'lucide-react';

const heroImage = 'https://images.pexels.com/photos/5903100/pexels-photo-5903100.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920';
const ambientImage = 'https://images.pexels.com/photos/32502363/pexels-photo-32502363.jpeg?auto=compress&cs=tinysrgb&h=800&w=600';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Gourmet pizza at Mapango Pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-900/90 via-charcoal-900/70 to-charcoal-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-charcoal-900/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-32 w-full">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 border border-brand-400/30 backdrop-blur-sm mb-6 animate-fade-in-up">
            <MapPin className="w-4 h-4 text-brand-300" />
            <span className="text-sm text-brand-100 font-medium">Jawahar Nagar, Meerut</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] text-balance animate-fade-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            Meerut's Most
            <span className="block text-brand-400">Loved Pizza</span>
            <span className="block font-script text-brand-300 text-4xl sm:text-5xl lg:text-6xl mt-2">since day one</span>
          </h1>

          <p className="mt-6 text-lg text-charcoal-100 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            From our signature Kulhad Pizza to creamy White Sauce Pasta and thick Cold Coffee —
            every dish is made fresh, served hot, and crafted with love. Rated 4.7 stars by 34 happy diners.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>
            <a
              href="#menu"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold shadow-xl hover:shadow-brand-500/50 hover:scale-105 transition-all duration-300"
            >
              Explore Our Menu
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold hover:bg-white/20 transition-all duration-300"
            >
              Visit Us
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-in-up" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < 4 ? 'fill-brand-400 text-brand-400' : 'fill-brand-400/50 text-brand-400/50'}`} />
                ))}
              </div>
              <span className="text-white font-semibold">4.7</span>
              <span className="text-charcoal-300 text-sm">/ 34 reviews</span>
            </div>

            <div className="flex items-center gap-2 text-charcoal-200">
              <Clock className="w-5 h-5 text-brand-300" />
              <span className="text-sm">Open · Closes 10 PM</span>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 animate-fade-in-up" style={{ animationDelay: '0.5s', animationFillMode: 'both' }}>
            {[
              { icon: Utensils, label: 'Dine-in' },
              { icon: ShoppingBag, label: 'Kerbside Pickup' },
              { icon: Bike, label: 'No-contact Delivery' },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <item.icon className="w-4 h-4 text-brand-300" />
                <span className="text-sm text-charcoal-100">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden xl:block absolute right-8 top-1/2 -translate-y-1/2 z-10">
        <div className="relative animate-float">
          <div className="absolute -inset-4 rounded-full bg-brand-500/20 blur-2xl" />
          <img
            src={ambientImage}
            alt="Cozy pizzeria interior"
            className="w-80 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white/10"
          />
          <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl px-6 py-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center">
                <span className="font-serif text-2xl font-bold text-brand-600">₹</span>
              </div>
              <div>
                <p className="text-xs text-charcoal-400 font-medium">Starting from</p>
                <p className="font-serif text-2xl font-bold text-charcoal-900">₹59</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent z-[5]" />
    </section>
  );
}
