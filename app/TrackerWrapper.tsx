"use client";

import { useEffect } from "react";
import { tracker } from "tracker-sdk-nemo"
export default function TrackerWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    tracker.init("708952b9f1e86d86a67ed847dd437d3722874c9bb474d47552df380f2428837a");
  }, []);

  return <>{children}</>;
}
