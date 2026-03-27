import { useState } from "react";
import Icon from "@/components/ui/icon";

const PLACES = [
  {
    id: 1,
    name: "Лесное озеро Тихое",
    category: "Озёра",
    location: "Подмосковье, 80 км",
    rating: 4.8,
    reviews: 124,
    tags: ["Рыбалка", "Купание", "Кемпинг"],
    image: "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/87e5d0c8-4bcd-4590-aabf-8f29680debd4.jpg",
    description: "Уединённое лесное озеро с кристально чистой водой. Идеально для рыбалки и медитативного отдыха.",
    lat: 56.1,
    lng: 37.8,
    photos: [
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/87e5d0c8-4bcd-4590-aabf-8f29680debd4.jpg",
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/5b0409dd-00ed-4e59-bfad-199d30a8e559.jpg",
    ],
    userReviews: [
      { name: "Анна К.", rating: 5, text: "Невероятно красивое место! Были с семьёй, дети в восторге. Чистая вода, сосновый воздух.", date: "12 июня 2025" },
      { name: "Михаил В.", rating: 5, text: "Лучшее место для рыбалки в области. Поймал щуку на 3 кг! Обязательно вернусь.", date: "5 мая 2025" },
      { name: "Светлана Р.", rating: 4, text: "Красота природы поражает. Немного тяжело добираться, но оно того стоит.", date: "20 апреля 2025" },
    ]
  },
  {
    id: 2,
    name: "Горная поляна Ветерок",
    category: "Горы",
    location: "Карелия, 650 км",
    rating: 4.9,
    reviews: 87,
    tags: ["Треккинг", "Фотосъёмка", "Пикник"],
    image: "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/10b33ffa-45f3-4688-863d-bccc0d90cf08.jpg",
    description: "Живописная горная поляна с панорамным видом на долину. Место для настоящих ценителей природы.",
    lat: 62.5,
    lng: 33.2,
    photos: [
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/10b33ffa-45f3-4688-863d-bccc0d90cf08.jpg",
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/87e5d0c8-4bcd-4590-aabf-8f29680debd4.jpg",
    ],
    userReviews: [
      { name: "Игорь Л.", rating: 5, text: "Закат с этой поляны — одно из самых красивых зрелищ в моей жизни. Фото получились фантастические!", date: "8 июля 2025" },
      { name: "Наталья М.", rating: 5, text: "Маршрут несложный, но виды просто захватывают дух. Брали детей 10 лет — всё прошли без проблем.", date: "15 июня 2025" },
    ]
  },
  {
    id: 3,
    name: "Домик в лесу «Берёзка»",
    category: "Домики",
    location: "Ленобласть, 120 км",
    rating: 4.7,
    reviews: 203,
    tags: ["Уют", "Природа", "Семья"],
    image: "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/d2ba14f6-220f-4740-a3ac-41709578a584.jpg",
    description: "Уютный деревянный домик среди вековых берёз. Баня, мангал, тишина — полное отключение от города.",
    lat: 60.1,
    lng: 30.5,
    photos: [
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/d2ba14f6-220f-4740-a3ac-41709578a584.jpg",
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/10b33ffa-45f3-4688-863d-bccc0d90cf08.jpg",
    ],
    userReviews: [
      { name: "Дмитрий Н.", rating: 5, text: "Баня отличная, дрова есть, хозяева приветливые. Провели 3 дня — жалко было уезжать.", date: "2 августа 2025" },
      { name: "Ольга П.", rating: 4, text: "Атмосфера сказочная. Единственный минус — слабый интернет, но это и плюс для отдыха!", date: "28 июля 2025" },
      { name: "Сергей Т.", rating: 5, text: "Идеальное место для детей. Грибы собирали прямо у домика!", date: "10 июля 2025" },
    ]
  },
  {
    id: 4,
    name: "Река Изумрудная",
    category: "Реки",
    location: "Тверская обл., 200 км",
    rating: 4.6,
    reviews: 56,
    tags: ["SUP", "Байдарки", "Природа"],
    image: "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/5b0409dd-00ed-4e59-bfad-199d30a8e559.jpg",
    description: "Быстрая горная речка с бирюзовой водой. Популярна среди байдарочников и любителей SUP-бординга.",
    lat: 57.8,
    lng: 34.1,
    photos: [
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/5b0409dd-00ed-4e59-bfad-199d30a8e559.jpg",
      "https://cdn.poehali.dev/projects/abc2077d-2008-4986-b43c-7087564cef1c/files/d2ba14f6-220f-4740-a3ac-41709578a584.jpg",
    ],
    userReviews: [
      { name: "Александр Ф.", rating: 5, text: "Сплавлялись 2 дня на байдарках. Вода чистейшая, рыба, природа нетронутая. Рай!", date: "18 августа 2025" },
      { name: "Мария Г.", rating: 4, text: "SUP-сёрфинг по такой воде — ни с чем не сравнить. Обязательно ещё раз!", date: "5 августа 2025" },
    ]
  },
];

const MAP_MARKERS = [
  { id: 1, x: 48, y: 52, name: "Лесное озеро Тихое" },
  { id: 2, x: 25, y: 22, name: "Горная поляна Ветерок" },
  { id: 3, x: 35, y: 30, name: "Домик «Берёзка»" },
  { id: 4, x: 55, y: 38, name: "Река Изумрудная" },
];

const CATEGORIES = ["Все", "Озёра", "Горы", "Домики", "Реки"];

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
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

function PlaceCard({ place, onClick, delay }: { place: typeof PLACES[0]; onClick: () => void; delay: number }) {
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

function PlaceModal({ place, onClose }: { place: typeof PLACES[0]; onClose: () => void }) {
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
                  {[5,4,3,2,1].map((s) => {
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
                  {[1,2,3,4,5].map((s) => (
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

function MapView({ places, onPlaceClick, selectedId }: { places: typeof PLACES; onPlaceClick: (id: number) => void; selectedId: number | null }) {
  return (
    <div className="relative w-full rounded-3xl overflow-hidden" style={{ height: 420 }}>
      <div className="map-container w-full h-full relative">
        <div className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px),
                              repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,255,255,0.3) 40px, rgba(255,255,255,0.3) 41px)`
          }}
        />
        <div className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(ellipse at 30% 60%, rgba(255,255,255,0.25) 0%, transparent 40%),
              radial-gradient(ellipse at 70% 30%, rgba(100,160,80,0.3) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 80%, rgba(80,140,60,0.2) 0%, transparent 35%)
            `
          }}
        />
        <div className="absolute" style={{ left: '15%', top: '40%', width: 120, height: 80, background: 'rgba(100,160,80,0.25)', borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%' }} />
        <div className="absolute" style={{ left: '55%', top: '20%', width: 90, height: 60, background: 'rgba(80,140,60,0.2)', borderRadius: '40% 60% 45% 55% / 55% 45% 60% 40%' }} />
        <div className="absolute" style={{ left: '70%', top: '55%', width: 100, height: 70, background: 'rgba(120,170,90,0.2)', borderRadius: '55% 45% 40% 60% / 40% 60% 55% 45%' }} />

        <div className="absolute bottom-3 left-3 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2">
          <p className="text-xs text-muted-foreground">Карта мест отдыха</p>
        </div>

        {MAP_MARKERS.map((marker) => {
          const isSelected = selectedId === marker.id;
          return (
            <button
              key={marker.id}
              onClick={() => onPlaceClick(marker.id)}
              className="absolute transform -translate-x-1/2 -translate-y-full group"
              style={{ left: `${marker.x}%`, top: `${marker.y}%` }}
            >
              <div className={`relative flex flex-col items-center transition-all duration-200 ${isSelected ? 'scale-110' : 'hover:scale-110'}`}>
                <div className={`px-2.5 py-1 rounded-full text-xs font-semibold shadow-lg whitespace-nowrap mb-1 transition-all ${
                  isSelected
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-white text-foreground group-hover:bg-primary group-hover:text-primary-foreground'
                }`}>
                  {marker.name}
                </div>
                <div className={`w-3 h-3 rounded-full border-2 border-white shadow-md ${isSelected ? 'bg-primary' : 'bg-white group-hover:bg-primary'}`} />
                <div className={`w-0.5 h-3 ${isSelected ? 'bg-primary' : 'bg-white/70 group-hover:bg-primary'}`} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default function Index() {
  const [activeTab, setActiveTab] = useState<'places' | 'map' | 'gallery'>('places');
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedPlace, setSelectedPlace] = useState<typeof PLACES[0] | null>(null);
  const [mapSelectedId, setMapSelectedId] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = PLACES.filter(p => {
    const matchCat = selectedCategory === "Все" || p.category === selectedCategory;
    const matchSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const allPhotos = PLACES.flatMap(p => p.photos.map(photo => ({ photo, name: p.name })));

  const handleMapMarkerClick = (id: number) => {
    setMapSelectedId(id);
    const place = PLACES.find(p => p.id === id);
    if (place) setSelectedPlace(place);
  };

  return (
    <div className="min-h-screen nature-bg">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center animate-float">
              <span className="text-lg">🌿</span>
            </div>
            <div>
              <h1 className="font-cormorant text-2xl font-semibold text-foreground leading-none">Места отдыха</h1>
              <p className="text-xs text-muted-foreground">Откройте красоту природы</p>
            </div>
          </div>
          <button className="bg-primary text-primary-foreground text-sm font-medium px-4 py-2 rounded-full hover:opacity-90 transition-opacity flex items-center gap-2">
            <Icon name="Plus" size={15} />
            Добавить место
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-10 opacity-0 animate-fade-in-up" style={{ animationFillMode: 'forwards' }}>
          <h2 className="font-cormorant text-5xl sm:text-6xl font-light text-foreground mb-3 leading-tight">
            Найдите своё<br />
            <em className="text-primary">место силы</em>
          </h2>
          <p className="text-muted-foreground text-lg max-w-lg">
            Лесные озёра, горные поляны, уютные домики — откройте лучшие места для отдыха рядом с вами.
          </p>
        </div>

        <div className="relative mb-6 opacity-0 animate-fade-in-up delay-100" style={{ animationFillMode: 'forwards' }}>
          <Icon name="Search" size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск по названию или локации..."
            className="w-full bg-card border border-border rounded-2xl py-3.5 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
          />
        </div>

        <div className="flex gap-1 bg-secondary/50 rounded-2xl p-1 mb-6 opacity-0 animate-fade-in-up delay-200" style={{ animationFillMode: 'forwards' }}>
          {([
            { key: 'places', label: 'Места', icon: 'TreePine' },
            { key: 'map', label: 'Карта', icon: 'Map' },
            { key: 'gallery', label: 'Галерея', icon: 'Image' },
          ] as const).map(({ key, label, icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === key
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Icon name={icon} size={15} />
              {label}
            </button>
          ))}
        </div>

        {activeTab === 'places' && (
          <div>
            <div className="flex gap-2 flex-wrap mb-6 opacity-0 animate-fade-in-up delay-300" style={{ animationFillMode: 'forwards' }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-sm px-4 py-2 rounded-full border transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <span className="text-5xl mb-4 block">🍃</span>
                <p className="font-cormorant text-2xl text-muted-foreground">Ничего не найдено</p>
                <p className="text-sm text-muted-foreground mt-2">Попробуйте другой запрос</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {filtered.map((place, i) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    onClick={() => setSelectedPlace(place)}
                    delay={i * 100}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        {activeTab === 'map' && (
          <div className="animate-fade-in">
            <MapView
              places={PLACES}
              onPlaceClick={handleMapMarkerClick}
              selectedId={mapSelectedId}
            />
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PLACES.map((place) => (
                <button
                  key={place.id}
                  onClick={() => { setMapSelectedId(place.id); setSelectedPlace(place); }}
                  className={`text-left p-3 rounded-2xl border transition-all card-hover ${
                    mapSelectedId === place.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-card hover:border-primary/40'
                  }`}
                >
                  <div className="w-full h-16 rounded-xl overflow-hidden mb-2">
                    <img src={place.image} alt={place.name} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-xs font-medium text-foreground leading-tight">{place.name}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <span style={{ color: '#d4a017', fontSize: 12 }}>★</span>
                    <span className="text-xs text-muted-foreground">{place.rating}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div className="animate-fade-in">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{allPhotos.length} фотографий</p>
              <button className="text-sm text-primary flex items-center gap-1.5 hover:gap-2 transition-all">
                <Icon name="Upload" size={14} />
                Загрузить фото
              </button>
            </div>
            <div className="columns-2 sm:columns-3 gap-3 space-y-3">
              {allPhotos.map((item, i) => (
                <div
                  key={i}
                  className="break-inside-avoid rounded-2xl overflow-hidden relative group cursor-pointer opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${i * 80}ms`, animationFillMode: 'forwards' }}
                >
                  <img src={item.photo} alt={item.name} className="w-full object-cover" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-end p-3 opacity-0 group-hover:opacity-100">
                    <span className="text-white text-xs font-medium">{item.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <div className="bg-primary/5 border-t border-border/50 mt-12 py-8">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[
            { value: `${PLACES.length}`, label: 'Мест отдыха' },
            { value: `${PLACES.reduce((a, p) => a + p.reviews, 0)}`, label: 'Отзывов' },
            { value: `${(PLACES.reduce((a, p) => a + p.rating, 0) / PLACES.length).toFixed(1)}`, label: 'Средний рейтинг' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="font-cormorant text-4xl font-semibold text-primary">{value}</div>
              <div className="text-sm text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedPlace && (
        <PlaceModal place={selectedPlace} onClose={() => setSelectedPlace(null)} />
      )}
    </div>
  );
}
