"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { useTrackPageMutation } from "@/redux/features/trackApi";

export default function AnalyticsTracker() {
  const pathname = usePathname();
  const [trackPage] = useTrackPageMutation();
  const startTimeRef = useRef(Date.now());
  const sessionIdRef = useRef("");

  useEffect(() => {
    // Initialize or get session ID
    let sessionId = sessionStorage.getItem("velvet_session_id");
    if (!sessionId) {
      sessionId = Math.random().toString(36).substring(2, 15);
      sessionStorage.setItem("velvet_session_id", sessionId);
    }
    sessionIdRef.current = sessionId;
  }, []);

  useEffect(() => {
    const startTime = Date.now();
    const currentPage = pathname;

    // Track initial page hit (duration 0 or minimal)
    trackPage({
      page: currentPage,
      sessionId: sessionIdRef.current,
      duration: 0
    });

    return () => {
      // When leaving the page, track the duration
      const durationInSeconds = Math.round((Date.now() - startTime) / 1000);
      if (durationInSeconds > 0) {
        trackPage({
          page: currentPage,
          sessionId: sessionIdRef.current,
          duration: durationInSeconds
        });
      }
    };
  }, [pathname, trackPage]);

  return null;
}
