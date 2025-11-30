import "../assets/styles/contact.css";
import { motion } from "framer-motion";
import { contactData, contactAdditional } from "../data/contactData.js";
import ContactRegion from "../components/contact/ContactRegion.jsx";
import ContactAdditional from "../components/contact/ContactAdditional.jsx";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="container py-20 max-md:pb-0 bg-black text-white">
        <section className="contact py-20 max-md:pb-0 bg-black text-white">
          <h1 className="max-md:leading-[1.2] leading-[1.1] max-md:tracking-[-.64px] tracking-[-2.48px] gt-th">
            We are five creative studios across
            <span className="hidden md:inline">
              <br />
            </span>{" "}
            the globe. Let’s start working together.
          </h1>

          {/* Regions */}
          <div className="contact-wrapper mb-16 gt-th">
            <h2 className="gt-th text-[31px] leading-[1] tracking-[-.64x] !mb-[24px] max-md:text-[24px] max-md:tracking-[-.48px]">
              New business
            </h2>
            {contactData.map((region, i) => (
              <ContactRegion key={i} region={region} />
            ))}
          </div>

          {/* Additional contacts */}
          <ContactAdditional sections={contactAdditional} />
        </section>
      </div>
    </motion.div>
  );
}
