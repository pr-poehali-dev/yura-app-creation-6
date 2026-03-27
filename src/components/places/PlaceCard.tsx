import Icon from "@/components/ui/icon";
import { Place } from "./data";

export function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5" style={{ color: '#d4a017' }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span key={star} style={{ fontSize: size, color: star <= Math.round(rating) ? '#d4a017' : '#c8d5b0' }}>
          ★
        </span>
      ))}
    </div>
  );
}

export function PlaceCard({ place, onClick, delay }: { place: Place; onClick: () => void; delay: number }) {
  return (
    <div
      className="card-hover cursor-pointer rounded-3xl overflow-hidden bg-card border border-border opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden h-48">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-primary text-xs font-medium px-3 py-1 rounded-full">
            {place.category}
          </span>
        </div>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 flex items-center gap-1">
          <span style={{ color: '#d4a017', fontSize: 13 }}>★</span>
          <span className="text-xs font-semibold text-foreground">{place.rating}</span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-cormorant text-xl font-semibold text-foreground mb-1">{place.name}</h3>
        <div className="flex items-center gap-1 text-muted-foreground text-sm mb-3">
          <Icon name="MapPin" size={13} />
          <span>{place.location}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{place.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {place.tags.map((tag) => (
            <span key={tag} className="bg-secondary text-secondary-foreground text-xs px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StarRating rating={place.rating} />
            <span className="text-xs text-muted-foreground">{place.reviews} отзывов</span>
          </div>
          <button className="text-primary text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all">
            Подробнее <Icon name="ArrowRight" size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
