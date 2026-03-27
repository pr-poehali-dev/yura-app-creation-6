import { useState } from "react";
import Icon from "@/components/ui/icon";
import { PLACES, CATEGORIES } from "@/components/places/data";
import { PlaceCard } from "@/components/places/PlaceCard";
import { PlaceModal } from "@/components/places/PlaceModal";
import { MapView } from "@/components/places/MapView";

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
