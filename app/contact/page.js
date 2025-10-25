import ContactBanner from "@/components/Contact/ContactBanner";
import ContactForm from "@/components/Contact/ContactForm";
import MapSection from "@/components/Contact/MapSection";
import OfficeCards from "@/components/Contact/OfficeCards";
import BlogSection from "@/components/Home/BlogSection";
import FAQSection from "@/components/Home/FAQSection";
import React from "react";

const page = () => {
  return (
    <div>
      <ContactBanner />
      <OfficeCards />
      <ContactForm />
      <MapSection />
      <FAQSection />
      <BlogSection />
    </div>
  );
};

export default page;
