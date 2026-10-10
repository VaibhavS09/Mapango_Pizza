import { Camera } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.pexels.com/photos/5903100/pexels-photo-5903100.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Gourmet pizzas with toppings', span: 'lg:col-span-2 lg:row-span-2' },
  { src: 'https://images.pexels.com/photos/3727243/pexels-photo-3727243.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cheese burger with melted cheese', span: '' },
  { src: 'https://images.pexels.com/photos/1438672/pexels-photo-1438672.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Creamy white sauce pasta', span: '' },
  { src: 'https://images.pexels.com/photos/4051265/pexels-photo-4051265.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Refreshing virgin mojito', span: '' },
  { src: 'https://images.pexels.com/photos/17626467/pexels-photo-17626467.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Cozy pizzeria interior', span: '' },
  { src: 'https://images.pexels.com/photos/30869077/pexels-photo-30869077.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Freshly baked garlic bread', span: '' },
  { src: 'https://images.pexels.com/photos/19260842/pexels-photo-19260842.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Italian pizzas with fresh toppings', span: 'lg:col-span-2' },
  { src: 'https://images.pexels.com/photos/7259054/pexels-photo-7259054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Refreshing cold coffee mojito', span: '' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-brand-500 text-3xl">A feast for the eyes</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-900 mt-2">
            Gallery
          </h2>
          <p className="mt-4 text-charcoal-500 text-lg">
            Take a visual tour of our dishes and ambience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, idx) => (
            <div
              key={idx}
              className={`group relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                <div className="flex items-center gap-2 text-white text-sm font-medium">
                  <Camera className="w-4 h-4 text-brand-300" />
                  {img.alt}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
