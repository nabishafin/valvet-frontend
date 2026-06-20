import PageHero from "@/components/shared/PageHero";

export default function AboutHero() {
  return (
    <PageHero
      title="About Us"
      subtitle="OUR STORY"
      bgImage="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80&auto=format&fit=crop"
      position="center top"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Our Story" },
      ]}
    />
  );
}
