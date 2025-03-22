"use client";

import { useEffect } from "react";
import { tracker } from "tracker-sdk-nemo"
export default function TrackerWrapper({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    tracker.init("bbd68f9e8ca71ab029fabeeb3fbd33d47bef425daaa5afe524376e1d0d304266");
  }, []);

  return <>{children}</>;
}
