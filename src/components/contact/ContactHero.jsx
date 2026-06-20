import PageHero from "@/components/shared/PageHero";

export default function ContactHero() {
  return (
    <PageHero
      title="Contact Us"
      subtitle="GET IN TOUCH"
      bgImage="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&q=80&auto=format&fit=crop"
      position="center center"
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Contact" },
      ]}
    />
  );
}
