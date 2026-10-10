import { Pizza, MapPin, Phone, Clock, Instagram, Facebook, ExternalLink } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 pb-12 border-b border-charcoal-700">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center shadow-lg">
                <Pizza className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl font-bold text-white tracking-wide">Mapango</span>
                <span className="font-script text-brand-300 text-sm -mt-0.5">Pizza</span>
              </div>
            </div>
            <p className="mt-4 text-charcoal-400 text-sm leading-relaxed max-w-md">
              Meerut's beloved continental restaurant serving wood-fired pizzas, gourmet burgers,
              creamy pasta, and refreshing beverages since day one. Rated 4.7 stars by our happy diners.
            </p>
            <div className="mt-5 flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-brand-500 transition-colors duration-300">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-charcoal-800 flex items-center justify-center hover:bg-brand-500 transition-colors duration-300">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-brand-300 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-300 transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-brand-300 transition-colors">Menu</a></li>
              <li><a href="#reviews" className="hover:text-brand-300 transition-colors">Reviews</a></li>
              <li><a href="#gallery" className="hover:text-brand-300 transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-brand-300 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-400 shrink-0 mt-0.5" />
                <span>198/3, main gate, opp. Gagan vihar, Jawahar Nagar, Fazalpur, Meerut, UP 250001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <a href="tel:09259597005" className="hover:text-brand-300 transition-colors">092595 97005</a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-400 shrink-0" />
                <span>Open daily · 11 AM – 10 PM</span>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/9eRRMmP2RNfeyGMJ7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-brand-300 hover:text-brand-200 transition-colors font-medium"
                >
                  View on Google Maps
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-charcoal-500">
          <p>© {new Date().getFullYear()} Mapango Pizza. All rights reserved.</p>
          <p>Continental Restaurant · Meerut, Uttar Pradesh</p>
        </div>
      </div>
    </footer>
  );
}
