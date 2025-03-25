"use client";

import { useEffect } from "react";
import { tracker } from 'tracker-sdk-nemo'
export default function TrackerWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    tracker.init("6f17dff43ea5858cad770f7521a99170f90360b9fa6f943d481099b6e2efada5");
  }, []);

  return <>{children}</>;
}
