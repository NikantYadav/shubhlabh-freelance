import React, { createContext, useContext, useState, useCallback, useEffect, lazy, Suspense } from 'react';

const MapModalContext = createContext({ openMap: () => {}, closeMap: () => {} });

export function useMapModal() {
  return useContext(MapModalContext);
}

const MapModalUI = lazy(() => import('./MapModalUI'));

export function MapModalProvider({ children }) {
  const [state, setState] = useState({ open: false, name: '', lat: null, lng: null });
  const [everOpened, setEverOpened] = useState(false);

  const openMap = useCallback((name, lat, lng) => {
    setEverOpened(true);
    setState({ open: true, name, lat, lng });
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMap = useCallback(() => {
    setState((s) => ({ ...s, open: false }));
    document.body.style.overflow = '';
  }, []);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') closeMap(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeMap]);

  return (
    <MapModalContext.Provider value={{ openMap, closeMap }}>
      {children}
      {everOpened && (
        <Suspense fallback={null}>
          <MapModalUI state={state} closeMap={closeMap} />
        </Suspense>
      )}
    </MapModalContext.Provider>
  );
}

export default MapModalProvider;
