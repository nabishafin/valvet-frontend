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

  // Format social URLs safely
  const formatSocialUrl = (url, platform) => {
    if (!url) return "#";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    
    // If it already looks like a domain, just add https
    if (url.includes(".com") || url.includes(".me") || url.includes("wa.me")) {
      return `https://${url}`;
    }
    
    // Otherwise, treat it as a handle/username
    switch (platform) {
      case 'instagram': return `https://instagram.com/${url}`;
      case 'facebook': return `https://facebook.com/${url}`;
      case 'twitter': return `https://twitter.com/${url}`;
      case 'whatsapp': return `https://wa.me/${url}`;
      default: return `https://${url}`;
    }
  };

  // If we have backend data, merge it with the static fallback so that
  // any field the backend doesn't return still has a sensible value.
  const config = data?.data
    ? {
        name: data.data.name ?? staticConfig.name,
        contact: { ...staticConfig.contact, ...data.data.contact },
        socials: { 
          instagram: formatSocialUrl(data.data.socials?.instagram ?? staticConfig.socials.instagram, 'instagram'),
          facebook: formatSocialUrl(data.data.socials?.facebook ?? staticConfig.socials.facebook, 'facebook'),
          twitter: formatSocialUrl(data.data.socials?.twitter ?? staticConfig.socials.twitter, 'twitter'),
          whatsapp: formatSocialUrl(data.data.socials?.whatsapp ?? staticConfig.socials.whatsapp, 'whatsapp'),
        },
        openingHours: { ...staticConfig.openingHours, ...data.data.openingHours },
        founder: {
          ...staticConfig.founder,
          ...data.data.founder,
          bio: data.data.founder?.bio?.length ? data.data.founder.bio : staticConfig.founder.bio,
          quote: data.data.founder?.quote || staticConfig.founder.quote,
          backgroundImage: data.data.founder?.backgroundImage || staticConfig.founder.backgroundImage,
        },
      }
    : staticConfig;

  return { config, isLoading, isError };
}
