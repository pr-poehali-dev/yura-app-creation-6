import { Place, MAP_MARKERS } from "./data";

export function MapView({ places, onPlaceClick, selectedId }: { places: Place[]; onPlaceClick: (id: number) => void; selectedId: number | null }) {
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
