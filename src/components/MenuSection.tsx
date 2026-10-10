import { useState } from 'react';
import { Star, Flame, Leaf } from 'lucide-react';
import { menuItems, menuCategories } from '@/data';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-cream to-brand-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-100/30 rounded-full blur-3xl -z-0" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-brand-500 text-3xl">What we serve</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-900 mt-2">
            Our Menu
          </h2>
          <p className="mt-4 text-charcoal-500 text-lg">
            From wood-fired pizzas to creamy pasta, juicy burgers, and refreshing beverages —
            everything is made fresh to order.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap gap-2 justify-center p-2 bg-white rounded-full shadow-md border border-charcoal-100">
            {menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-md'
                    : 'text-charcoal-500 hover:text-brand-600 hover:bg-brand-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl border border-charcoal-100 hover:border-brand-200 transition-all duration-500 animate-fade-in-up"
              style={{ animationDelay: `${idx * 0.05}s`, animationFillMode: 'both' }}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent" />

                {item.isPopular && (
                  <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1.5 rounded-full bg-brand-500 text-white text-xs font-bold shadow-lg">
                    <Flame className="w-3.5 h-3.5" />
                    Popular
                  </div>
                )}

                {item.isVeg && (
                  <div className="absolute top-3 right-3 w-6 h-6 rounded border-2 border-green-600 flex items-center justify-center bg-white">
                    <Leaf className="w-3 h-3 text-green-600" />
                  </div>
                )}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-bold text-charcoal-900 group-hover:text-brand-600 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <span className="font-serif text-xl font-bold text-brand-600 whitespace-nowrap">
                    ₹{item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm text-charcoal-500 leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-charcoal-400 text-sm">
            Prices are inclusive of taxes. Menu may vary. Call us for the full range of items.
          </p>
        </div>
      </div>
    </section>
  );
}
