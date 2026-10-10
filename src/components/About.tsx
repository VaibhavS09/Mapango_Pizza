import { Flame, Heart, Leaf, Award } from 'lucide-react';

const features = [
  {
    icon: Flame,
    title: 'Wood-Fired Freshness',
    desc: 'Every pizza is baked to order using fresh dough and premium ingredients, served piping hot.',
  },
  {
    icon: Heart,
    title: 'Made With Love',
    desc: 'Our chefs pour their passion into every dish. From Kulhad Pizza to creamy pasta, taste the difference.',
  },
  {
    icon: Leaf,
    title: 'Fresh & Hygienic',
    desc: 'Special attention to cleanliness and hygiene. Our reviewers consistently praise our clean kitchen.',
  },
  {
    icon: Award,
    title: 'Value for Money',
    desc: 'Pocket-friendly pricing from ₹59–₹249. Quality food that doesn\'t break the bank.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-96 h-96 bg-brand-100/40 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-10 left-0 w-72 h-72 bg-brand-200/30 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="font-script text-brand-500 text-3xl">Our Story</span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-900 mt-2 leading-tight">
              The Undiscovered Gem
              <span className="block text-brand-500">of Meerut</span>
            </h2>
            <p className="mt-6 text-charcoal-600 text-lg leading-relaxed">
              Mapango Pizza is a continental restaurant nestled in Jawahar Nagar, Fazalpur, Meerut.
              What started as a small pizza shop has become a beloved local destination — praised by
              diners for being "far better than Domino's" and offering "the best on Rohta Road."
            </p>
            <p className="mt-4 text-charcoal-600 leading-relaxed">
              Our customers come for the food and stay for the ambience. Whether you're dining in with
              family, grabbing a quick takeaway, or working on your laptop with a cheese pizza by your
              side — Mapango Pizza feels like home. With a 4.7-star rating from 34 reviews, we let our
              food do the talking.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group p-5 rounded-2xl bg-white border border-charcoal-100 hover:border-brand-200 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-xl bg-brand-50 group-hover:bg-brand-500 flex items-center justify-center transition-colors duration-300">
                    <f.icon className="w-5 h-5 text-brand-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="mt-3 font-semibold text-charcoal-900">{f.title}</h3>
                  <p className="mt-1 text-sm text-charcoal-500 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/5903173/pexels-photo-5903173.jpeg?auto=compress&cs=tinysrgb&h=650&w=500"
                alt="Fresh pizzas at Mapango"
                className="w-full h-72 object-cover rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/17626467/pexels-photo-17626467.jpeg?auto=compress&cs=tinysrgb&h=650&w=500"
                alt="Cozy pizzeria interior"
                className="w-full h-72 object-cover rounded-2xl shadow-lg mt-8"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-charcoal-900 text-white rounded-2xl shadow-xl px-8 py-5 text-center">
              <p className="font-serif text-4xl font-bold text-brand-400">4.7</p>
              <div className="flex justify-center gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-brand-400 text-brand-400" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.49 6.91l6.572-.955L10 0l2.938 5.955 6.572.955-4.755 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <p className="text-xs text-charcoal-300">34 Google Reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
