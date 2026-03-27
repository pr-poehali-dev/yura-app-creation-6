import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Place } from "./data";
import { StarRating } from "./PlaceCard";

export function PlaceModal({ place, onClose }: { place: Place; onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'info' | 'reviews' | 'gallery'>('info');
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full sm:max-w-2xl max-h-[90vh] bg-background rounded-t-3xl sm:rounded-3xl overflow-hidden flex flex-col animate-scale-in shadow-2xl">
        <div className="relative h-56 flex-shrink-0">
          <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white rounded-full p-2 hover:bg-white/30 transition-colors"
          >
            <Icon name="X" size={18} />
          </button>
          <div className="absolute bottom-4 left-5 right-5">
            <h2 className="font-cormorant text-3xl font-semibold text-white mb-1">{place.name}</h2>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1">
                <span style={{ color: '#fbbf24' }}>★</span>
                <span className="text-white font-medium">{place.rating}</span>
              </div>
              <span className="text-white/70">·</span>
              <span className="text-white/80 text-sm">{place.reviews} отзывов</span>
              <span className="text-white/70">·</span>
              <div className="flex items-center gap-1 text-white/80 text-sm">
                <Icon name="MapPin" size={13} />
                {place.location}
              </div>
            </div>
          </div>
        </div>

        <div className="flex border-b border-border flex-shrink-0">
          {(['info', 'reviews', 'gallery'] as const).map((tab) => {
            const labels = { info: 'О месте', reviews: 'Отзывы', gallery: 'Галерея' };
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3.5 text-sm font-medium transition-colors relative ${
                  activeTab === tab ? 'text-primary tab-active' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {labels[tab]}
              </button>
            );
          })}
        </div>

        <div className="overflow-y-auto flex-1 p-5">
          {activeTab === 'info' && (
            <div className="space-y-5 animate-fade-in">
              <p className="text-foreground leading-relaxed">{place.description}</p>
              <div>
                <h4 className="font-cormorant text-lg font-semibold mb-3">Активности</h4>
                <div className="flex flex-wrap gap-2">
                  {place.tags.map((tag) => (
                    <span key={tag} className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="bg-secondary/50 rounded-2xl p-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon name="Info" size={15} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Категория: <span className="text-foreground font-medium">{place.category}</span></p>
                    <p className="text-sm text-muted-foreground mt-1">Расстояние: <span className="text-foreground font-medium">{place.location}</span></p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-secondary/40 rounded-2xl p-4 flex items-center gap-4">
                <div className="text-center">
                  <div className="font-cormorant text-5xl font-semibold text-primary">{place.rating}</div>
                  <StarRating rating={place.rating} size={16} />
                  <div className="text-xs text-muted-foreground mt-1">{place.reviews} отзывов</div>
                </div>
                <div className="flex-1 space-y-1.5">
                  {[5, 4, 3, 2, 1].map((s) => {
                    const count = place.userReviews.filter(r => r.rating === s).length;
                    const pct = place.userReviews.length ? (count / place.userReviews.length) * 100 : 0;
                    return (
                      <div key={s} className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground w-2">{s}</span>
                        <div className="flex-1 h-1.5 bg-border rounded-full overflow-hidden">
                          <div className="h-full bg-primary rounded-full" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {place.userReviews.map((review, i) => (
                <div key={i} className="border-b border-border/60 pb-4 last:border-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                        {review.name[0]}
                      </div>
                      <div>
                        <div className="font-medium text-sm text-foreground">{review.name}</div>
                        <div className="text-xs text-muted-foreground">{review.date}</div>
                      </div>
                    </div>
                    <StarRating rating={review.rating} size={12} />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
                </div>
              ))}

              <div className="bg-secondary/30 rounded-2xl p-4 space-y-3">
                <h4 className="font-cormorant text-lg font-semibold">Оставить отзыв</h4>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button
                      key={s}
                      onMouseEnter={() => setHoverRating(s)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() => setReviewRating(s)}
                      className="text-2xl transition-transform hover:scale-110"
                    >
                      <span style={{ color: (hoverRating || reviewRating) >= s ? '#d4a017' : '#c8d5b0' }}>★</span>
                    </button>
                  ))}
                </div>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Поделитесь впечатлениями об этом месте..."
                  className="w-full bg-background border border-border rounded-xl p-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/30 h-24 text-foreground placeholder:text-muted-foreground"
                />
                <button className="w-full bg-primary text-primary-foreground font-medium py-3 rounded-xl hover:opacity-90 transition-opacity text-sm">
                  Опубликовать отзыв
                </button>
              </div>
            </div>
          )}

          {activeTab === 'gallery' && (
            <div className="animate-fade-in">
              <div className="grid grid-cols-2 gap-3">
                {place.photos.map((photo, i) => (
                  <div key={i} className="aspect-square rounded-2xl overflow-hidden">
                    <img src={photo} alt={`Фото ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </div>
                ))}
                <div className="aspect-square rounded-2xl bg-secondary/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-secondary transition-colors">
                  <Icon name="Camera" size={24} className="text-muted-foreground" />
                  <span className="text-sm text-muted-foreground text-center px-2">Добавить фото</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
