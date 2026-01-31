'use client';

import { MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { Map, MapMarker, MarkerContent, MarkerLabel, MapControls } from './ui/map';

const areas = [
  'New Hyderabad',
  'Nishatganj',
  'Alambagh',
  'Indira Nagar',
  'Gomti Nagar',
  'Aminabad',
  'Hazratganj',
  'Chowk',
  'Rajajipuram',
  'Aliganj',
  'Mahanagar',
  'Vikas Nagar'
];

export default function AreasWeServe() {
  const handleMapClick = () => {
    const lat = 26.867192;
    const lng = 80.949335;
    const label = encodeURIComponent('Kumar Electricals');

    // Check if it's iOS/macOS to use apple maps, otherwise use google maps
    const isApple = typeof navigator !== 'undefined' && /iPad|iPhone|iPod|Macintosh/.test(navigator.userAgent);

    if (isApple) {
      window.open(`maps://maps.apple.com/?q=${label}&ll=${lat},${lng}`, '_blank');
    } else {
      window.open(`https://www.google.com/maps/search/?api=1&query=${lat},${lng}`, '_blank');
    }
  };

  return (
    <section className="py-16 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-amber-600 mb-3">
            <MapPin className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">Service Areas</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-3">
            Areas We Serve in Lucknow
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            We proudly serve customers across Lucknow with fast, reliable electrical services.
            From our base in Nishatganj, we cover most major residential areas.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
            {areas.map((area) => (
              <div
                key={area}
                className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 font-medium hover:border-amber-300 hover:bg-amber-50 transition-colors"
              >
                {area}
              </div>
            ))}
          </div>
        </Reveal>

        {/* Map Integration */}
        <Reveal delay={0.2}>
          <div className="h-[400px] w-full rounded-2xl overflow-hidden border border-slate-200 shadow-lg relative bg-slate-100">
            <Map
              center={[80.9540, 26.8680]}
              zoom={13}
              interactive={true}
            >
              <MapControls showZoom={true} showLocate={true} />

              {/* Primary Service Areas Markers */}
              <MapMarker
                longitude={80.9493}
                latitude={26.8672}
                onClick={handleMapClick}
              >
                <MarkerContent className="cursor-pointer">
                  <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center border-2 border-white shadow-xl">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <MarkerLabel className="bg-white px-2 py-1 rounded border shadow-sm text-slate-900 font-bold">
                    Kumar Electricals
                  </MarkerLabel>
                </MarkerContent>
              </MapMarker>

              <MapMarker longitude={80.9575} latitude={26.8687}>
                <MarkerContent>
                  <div className="w-4 h-4 bg-amber-400/50 rounded-full border border-amber-600 animate-pulse" />
                  <MarkerLabel>Nishatganj</MarkerLabel>
                </MarkerContent>
              </MapMarker>

              <MapMarker longitude={80.9450} latitude={26.8700}>
                <MarkerContent>
                  <div className="w-4 h-4 bg-amber-400/50 rounded-full border border-amber-600 animate-pulse" />
                  <MarkerLabel>New Hyderabad</MarkerLabel>
                </MarkerContent>
              </MapMarker>
            </Map>
          </div>
        </Reveal>

        <Reveal delay={0.3} className="text-center mt-10">
          <p className="text-sm text-slate-500">
            Not in your area? <a href="tel:+919453816645" className="text-amber-600 hover:text-amber-700 font-medium">Call us</a> to check if we can help
          </p>
        </Reveal>
      </div>
    </section>
  );
}
