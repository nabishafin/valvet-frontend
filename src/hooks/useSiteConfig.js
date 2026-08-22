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

  // Extract valid map embed URL (supports iframe tag, embed link, or fallback address)
  const extractMapEmbedUrl = (input, fallbackAddress) => {
    if (!input && !fallbackAddress) return null;
    if (typeof input === "string" && input.includes("<iframe")) {
      const srcMatch = input.match(/src=["']([^"']+)["']/);
      if (srcMatch && srcMatch[1]) return srcMatch[1];
    }
    if (typeof input === "string" && (input.includes("/maps/embed") || input.includes("output=embed"))) {
      return input;
    }
    const query = (typeof input === "string" && input.trim()) ? input : fallbackAddress;
    if (query) {
      let cleanQuery = query;
      if (cleanQuery.includes("?q=")) {
        cleanQuery = cleanQuery.split("?q=")[1].split("&")[0];
      }
      return `https://maps.google.com/maps?q=${encodeURIComponent(cleanQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    }
    return null;
  };

  const rawMap = data?.data?.contact?.googleMap || data?.data?.contact?.googleMapsLink || data?.data?.contact?.mapLink;
  const currentAddress = data?.data?.contact?.address || staticConfig.contact.address;
  const mapEmbedUrl = extractMapEmbedUrl(rawMap, currentAddress) || extractMapEmbedUrl(staticConfig.contact.mapLink, staticConfig.contact.address);
  const resolvedMapLink = (typeof rawMap === "string" && !rawMap.includes("<iframe")) ? rawMap : (mapEmbedUrl || staticConfig.contact.mapLink);

  // If we have backend data, merge it with the static fallback so that
  // any field the backend doesn't return still has a sensible value.
  const config = data?.data
    ? {
        name: data.data.name ?? staticConfig.name,
        contact: { 
          ...staticConfig.contact, 
          ...data.data.contact,
          mapEmbedUrl,
          mapLink: resolvedMapLink,
          googleMap: data.data.contact?.googleMap || mapEmbedUrl,
          googleMapsLink: data.data.contact?.googleMapsLink || resolvedMapLink,
        },
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
    : {
        ...staticConfig,
        contact: {
          ...staticConfig.contact,
          mapEmbedUrl,
        },
      };

  return { config, isLoading, isError };
}
