import { useSyncExternalStore } from "react";

const currentLocation = () => window.location.hash.replace(/^#/, "") || "/";

const navigate = (to) => {
  window.location.hash = to;
};

export const useHashLocation = () => {
  const location = useSyncExternalStore(
    (onChange) => {
      window.addEventListener("hashchange", onChange);
      return () => window.removeEventListener("hashchange", onChange);
    },

    () => currentLocation()
  );

  return [location, navigate];
};
