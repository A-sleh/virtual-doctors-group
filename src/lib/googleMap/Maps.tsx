import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvent,
  useMapEvents,
} from 'react-leaflet';
// for painte the sortest path
import L from 'leaflet';
import 'leaflet-routing-machine';

import { useUrlPosition } from '@/hooks/useUrlPosition.tsx';
import { useGeolocation } from '@/hooks/useGeolocation';
import { GiResize } from 'react-icons/gi';

type points = number[] | string[];

type mapType = {
  zoom?: number;
  defaultPosition?: points | null;
  doctorInfo?: {
    doctorId: number;
    name: string;
    speciality: string;
  };
  resize: boolean;
  withControle: boolean;
  showOnly: boolean;
};

function Routing({ points }: { points: points[] }) {
  const map = useMapEvents({});

  useEffect(() => {
    if (points.length === 2) {
      //@ts-expect-error
      const routingControl = L.Routing.control({
        waypoints: [L.latLng(points[0]), L.latLng(points[1])],
        lineOptions: {
          styles: [{ color: 'red', weight: 5 }],
        },
        show: false,
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
      }).addTo(map);

      return () => map.removeControl(routingControl);
    }
  }, [points, map]);

  return null;
}

function Map({
  defaultPosition = [20, 22],
  doctorInfo,
  resize = false,
  zoom = 20,
  showOnly = true,
  withControle = true,
}: mapType) {
  const [fullWindow, setFullWindow] = useState(false);
  const [mapPosition, setMapPosition] = useState<points>(
    defaultPosition ?? [33, 36],
  );

  const { lat: mapLat, lng: mapLng } = useUrlPosition();
  const {
    isLoading: isLoadingPosition,
    getPosition,
    position: geoLocationPosition,
  } = useGeolocation();

  useEffect(() => {
    if (mapLat && mapLng) setMapPosition([Number(mapLat), Number(mapLng)]);
  }, [mapLat, mapLng]);

  useEffect(() => {
    if (geoLocationPosition)
      setMapPosition([geoLocationPosition.lat, geoLocationPosition.lng]);
  }, [geoLocationPosition]);

  return (
    <div
      className={
        'bg-white space-y-1 p-2 rounded-md ' +
        (fullWindow
          ? 'fixed w-[90%]  h-[90%] z-[5000] top-[5%] left-[5%] lay-out'
          : `w-full h-full relative  `)
      }
    >
      <div className="absolute top-2 right-2 z-[500] ">
        {geoLocationPosition == null && withControle && (
          <span
            onClick={() => getPosition()}
            className="px-4 py-1 bg-primary text-white rounded-md cursor-pointer"
          >
            {isLoadingPosition
              ? 'Loding...'
              : showOnly
              ? 'Show the shortest path'
              : 'Use my location'}
          </span>
        )}
      </div>
      <MapContainer
        center={mapPosition}
        zoom={zoom}
        style={{ height: '100%' }}
        zoomControl={!showOnly}
        scrollWheelZoom={!showOnly}
        ch
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={mapPosition} />
        {defaultPosition && mapLat == null && (
          <Marker position={defaultPosition} />
        )}

        <ChangeCenter position={mapPosition} />
        {!showOnly && <DetectClick />}

        {defaultPosition && geoLocationPosition && showOnly && (
          <Routing
            points={[defaultPosition, [Number(mapLat), Number(mapLng)]]}
          />
        )}
      </MapContainer>
      {resize && (
        <GiResize
          size={25}
          onClick={() => setFullWindow((pre) => !pre)}
          className="transition-all text-primary hover:text-primary-hover cursor-pointer z-[40000] absolute bottom-[2%] left-[2%]"
        />
      )}
    </div>
  );
}

function ChangeCenter({ position }: { position: points }) {
  const map = useMap();
  map.setView(position);
  return null;
}

function DetectClick() {
  const [_, setSearchParams] = useSearchParams();
  useMapEvent({
    click: (e) => {
      const { latlng } = e;
      setSearchParams((prev) => {
        prev.set('lat', latlng.lat);
        prev.set('lng', latlng.lng);
        return prev;
      });
    },
  });
}

export default Map;
