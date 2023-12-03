// components
import { Navbar, Footer } from "@/components";

// sections
import ContactForm from "../contact-form";

export default function Campaign() {
  return (
    <>
      <Navbar isSolid={true} />
      <section className="py-40 px-8">
        <div className="container mx-auto mb-12">
          <h1>about</h1>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </>
  );
}
