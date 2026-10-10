import { Star, Quote, ThumbsUp } from 'lucide-react';
import { reviews, ratingBreakdown, reviewHighlights } from '@/data';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-brand-400 text-brand-400' : 'fill-charcoal-200 text-charcoal-200'}`}
        />
      ))}
    </div>
  );
}

export default function Reviews() {
  const totalReviews = ratingBreakdown.reduce((sum, r) => sum + r.count, 0);

  return (
    <section id="reviews" className="py-24 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-brand-600/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-brand-400 text-3xl">What people say</span>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mt-2">
            Loved by Meerut
          </h2>
        </div>

        <div className="mt-12 grid lg:grid-cols-3 gap-8 items-start">
          {/* Rating Summary */}
          <div className="lg:sticky lg:top-28 bg-charcoal-800 rounded-3xl p-8 border border-charcoal-700">
            <div className="text-center">
              <p className="font-serif text-6xl font-bold text-brand-400">4.7</p>
              <div className="flex justify-center gap-1 my-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-brand-400 text-brand-400' : 'fill-brand-400/50 text-brand-400/50'}`} />
                ))}
              </div>
              <p className="text-charcoal-300 text-sm">{totalReviews} Google Reviews</p>
            </div>

            <div className="mt-6 space-y-2.5">
              {ratingBreakdown.map((r) => (
                <div key={r.stars} className="flex items-center gap-3">
                  <span className="text-charcoal-300 text-sm w-8">{r.stars}★</span>
                  <div className="flex-1 h-2 rounded-full bg-charcoal-700 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-brand-400 to-brand-500 transition-all duration-500"
                      style={{ width: `${(r.count / totalReviews) * 100}%` }}
                    />
                  </div>
                  <span className="text-charcoal-400 text-sm w-6 text-right">{r.count}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-charcoal-700">
              <p className="text-charcoal-400 text-xs font-medium uppercase tracking-wide mb-3">Review Highlights</p>
              <div className="flex flex-wrap gap-2">
                {reviewHighlights.map((h) => (
                  <span
                    key={h.label}
                    className="px-3 py-1.5 rounded-full bg-charcoal-700 text-charcoal-200 text-xs font-medium"
                  >
                    {h.label} <span className="text-brand-400">{h.count}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {reviews.map((review, idx) => (
              <div
                key={review.id}
                className="bg-charcoal-800/60 rounded-2xl p-5 border border-charcoal-700/50 hover:border-brand-500/30 transition-colors duration-300 animate-fade-in-up"
                style={{ animationDelay: `${Math.min(idx * 0.03, 0.6)}s`, animationFillMode: 'both' }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-brand-400 to-brand-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {review.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className="font-semibold text-white text-sm">{review.name}</h4>
                      {review.isLocalGuide && (
                        <span className="px-2 py-0.5 rounded-full bg-brand-500/20 text-brand-300 text-[10px] font-semibold">
                          Local Guide
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <StarRow rating={review.rating} />
                      <span className="text-charcoal-400 text-xs">{review.date}</span>
                    </div>
                    {(review.reviewCount || review.photoCount) && (
                      <p className="text-charcoal-500 text-[11px] mt-0.5">
                        {review.reviewCount ? `${review.reviewCount} reviews` : ''}
                        {review.reviewCount && review.photoCount ? ' · ' : ''}
                        {review.photoCount ? `${review.photoCount} photos` : ''}
                      </p>
                    )}
                  </div>
                  <Quote className="w-8 h-8 text-charcoal-700 shrink-0" />
                </div>

                {review.text && (
                  <p className="mt-3 text-charcoal-300 text-sm leading-relaxed">{review.text}</p>
                )}

                {review.tags && review.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {review.tags.map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded bg-charcoal-700 text-charcoal-300 text-[11px]">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="mt-3 flex items-center gap-4 text-charcoal-500 text-xs">
                  <span className="flex items-center gap-1 hover:text-charcoal-300 cursor-pointer transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" /> Like
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
