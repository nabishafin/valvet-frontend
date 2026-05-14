import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact Us | Velvet",
  description: "Get in touch with Velvet.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="bg-white">
        <ContactForm />
      </div>
    </>
  );
}
