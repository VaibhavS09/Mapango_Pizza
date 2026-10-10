import { MapPin, Phone, Clock, Navigation, ExternalLink, Utensils, Bike, ShoppingBag } from 'lucide-react';

const address = '198/3, main gate, opp. Gagan vihar, Jawahar Nagar, Fazalpur, Meerut, Uttar Pradesh 250001';
const phone = '092595 97005';
const mapsLink = 'https://maps.app.goo.gl/9eRRMmP2RNfeyGMJ7';
const swiggyLink = 'https://swiggy.com';

const hours = [
  { day: 'Monday', time: '11 AM – 10 PM' },
  { day: 'Tuesday', time: '11 AM – 10 PM' },
  { day: 'Wednesday', time: '11 AM – 10 PM' },
  { day: 'Thursday', time: '11 AM – 10 PM' },
  { day: 'Friday', time: '11 AM – 10 PM' },
  { day: 'Saturday', time: '11 AM – 10 PM' },
  { day: 'Sunday', time: '11 AM – 10 PM' },
];

const services = [
  { icon: Utensils, label: 'Dine-in', desc: 'Enjoy your meal in our cozy, clean ambience' },
  { icon: ShoppingBag, label: 'Kerbside Pickup', desc: 'Order ahead and pick up at your convenience' },
  { icon: Bike, label: 'No-contact Delivery', desc: 'Get your favourites delivered safely to your door' },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-cream to-brand-50/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-brand-500 text-3xl">Come visit us</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-900 mt-2">
            Find Us & Order
          </h2>
          <p className="mt-4 text-charcoal-500 text-lg">
            We're open every day until 10 PM. Dine in, pick up, or get it delivered.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-7 shadow-md border border-charcoal-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-charcoal-900 text-lg">Our Location</h3>
                  <p className="mt-1 text-charcoal-500 text-sm leading-relaxed">{address}</p>
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-brand-600 text-sm font-semibold hover:text-brand-700 transition-colors"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-md border border-charcoal-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-charcoal-900 text-lg">Call to Order</h3>
                  <p className="mt-1 text-charcoal-500 text-sm">Hungry? Give us a ring and we'll have it ready.</p>
                  <a
                    href={`tel:${phone.replace(/\s/g, '')}`}
                    className="mt-3 inline-flex items-center gap-2 text-brand-600 text-lg font-bold hover:text-brand-700 transition-colors"
                  >
                    {phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-7 shadow-md border border-charcoal-100">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-50 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-brand-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-charcoal-900 text-lg">Opening Hours</h3>
                  <div className="mt-3 space-y-1.5">
                    {hours.map((h) => (
                      <div key={h.day} className="flex justify-between items-center text-sm">
                        <span className="text-charcoal-400">{h.day}</span>
                        <span className="text-charcoal-700 font-medium">{h.time}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-green-700 text-xs font-semibold">Currently Open</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-3">
              {services.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-4 text-center border border-charcoal-100 hover:border-brand-200 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-brand-50 flex items-center justify-center mx-auto">
                    <s.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h4 className="mt-2 font-semibold text-charcoal-900 text-sm">{s.label}</h4>
                  <p className="mt-1 text-xs text-charcoal-400 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Map Embed */}
          <div className="space-y-6">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-charcoal-100 h-full min-h-[500px] relative bg-charcoal-100">
              <iframe
                title="Mapango Pizza Location"
                src="https://www.google.com/maps?q=Mapango+Pizza+Meerut&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a
              href={swiggyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-500 to-brand-600 text-white font-semibold shadow-lg hover:shadow-brand-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              Order Online via Swiggy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
