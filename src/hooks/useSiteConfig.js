"use client";

import { useGetSiteSettingsQuery } from "@/redux/features/configApi";
import { siteConfig as staticConfig } from "@/data/siteConfig";

/**
 * useSiteConfig — fetches live settings from the backend.
 * Falls back to the static siteConfig.js values while loading
 * or if the API is unavailable.
 */
export function useSiteConfig() {
  const { data, isLoading, isError } = useGetSiteSettingsQuery();

  // If we have backend data, merge it with the static fallback so that
  // any field the backend doesn't return still has a sensible value.
  const config = data?.data
    ? {
        name: data.data.name ?? staticConfig.name,
        contact: { ...staticConfig.contact, ...data.data.contact },
        socials: { ...staticConfig.socials, ...data.data.socials },
        openingHours: { ...staticConfig.openingHours, ...data.data.openingHours },
        founder: { ...staticConfig.founder, ...data.data.founder },
      }
    : staticConfig;

  return { config, isLoading, isError };
}
