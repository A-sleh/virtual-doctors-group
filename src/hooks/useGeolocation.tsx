import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

type positionType = {
  lat: number;
  lng: number;
};

function useGeolocation(defaultPosition = null) {
  const [isLoading, setIsLoading] = useState(false);
  const [position, setPosition] = useState<positionType | null>(
    defaultPosition,
  );
  const [_, setSearchParams] = useSearchParams();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {    
    setSearchParams({})
  },[])

  async function getPosition() {
    if (!navigator.geolocation)
      return setError('Your browser does not support geolocation');

    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
        setSearchParams((prev) => {
          prev.set('lat', pos.coords.latitude.toString());
          prev.set('lng', pos.coords.longitude.toString());
          return prev;
        });
        setIsLoading(false);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      },
    );
  }

  return { isLoading, position, error, getPosition,setSearchParams };
}

export { useGeolocation };
