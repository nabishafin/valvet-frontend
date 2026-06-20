import Image from "next/image";
import Link from "next/link";

/**
 * Reusable page hero banner.
 *
 * Props:
 *  title       — main heading
 *  subtitle    — small gold label above title (optional)
 *  bgImage     — image path or URL for background
 *  breadcrumbs — [{ label, href? }]
 *  height      — tailwind height class, default "h-[520px] md:h-[620px]"
 *  position    — CSS object-position, default "center"
 */
export default function PageHero({
  title,
  subtitle,
  bgImage,
  breadcrumbs = [],
  height = "h-[520px] md:h-[620px]",
  position = "center",
}) {
  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>

      {/* ── Background image ── */}
      {bgImage ? (
        <>
          <Image
            src={bgImage}
            alt={title}
            fill
            priority
            className="object-cover"
            style={{ objectPosition: position }}
          />
          {/* bottom-heavy gradient — top shows the image clearly, bottom darkens for text */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </>
      ) : (
        <div className="absolute inset-0 bg-[#1E1E1E]" />
      )}

      {/* ── Subtle texture overlay ── */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none">
        <Image src="/Vector.png" alt="" fill className="object-cover" />
      </div>

      {/* ── Content — sits lower so image is visible at top ── */}
      <div className="absolute bottom-0 left-0 right-0 pb-12 px-6 text-center">
        {subtitle && (
          <span className="text-[#BA8C43] text-[10px] font-bold uppercase tracking-[0.35em] mb-4 block drop-shadow">
            {subtitle}
          </span>
        )}

        <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl text-white tracking-widest uppercase leading-tight mb-5 drop-shadow-xl">
          {title}
        </h1>

        {breadcrumbs.length > 0 && (
          <div className="flex items-center justify-center gap-2 text-[11px] font-bold tracking-widest flex-wrap">
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-white/30">/</span>}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-white/70 hover:text-[#BA8C43] transition-colors uppercase"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#BA8C43] uppercase">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
