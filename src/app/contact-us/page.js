import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import OfficePresenceMap from "./OfficePresenceMap";

export const metadata = {
  title: "Contact Us | Equirus Raghnall",
  description: "Contact Equirus Raghnall for insurance and risk solutions.",
};

function ContactIcon({ type }) {
  const paths = {
    location: <><path d="M12 21s7-5.2 7-12A7 7 0 1 0 5 9c0 6.8 7 12 7 12Z"/><circle cx="12" cy="9" r="2.3"/></>,
    mail: <><rect x="4" y="6" width="16" height="12" rx="1"/><path d="m5 7 7 6 7-6"/></>,
    phone: <path d="M7.2 4.5 9 8 7.6 9.5c1.5 3 3.8 5.3 6.9 6.8L16 15l3.5 1.8-.5 3c-.1.7-.8 1.2-1.5 1.2C9.5 21 3 14.5 3 6.5 3 5.8 3.5 5.1 4.2 5l3-.5Z"/>,
    user: <><circle cx="12" cy="8" r="3"/><path d="M5.5 20a6.5 6.5 0 0 1 13 0"/></>,
  };

  return (
    <span className="grid size-8 shrink-0 place-items-center rounded-full border border-[#0A4E08] text-[#0A4E08]">
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type]}</svg>
    </span>
  );
}

function ContactItem({ icon, title, children }) {
  return (
    <div className="flex items-start gap-4">
      <ContactIcon type={icon} />
      <div>
        <h2 className="text-lg font-semibold text-[#191919]">{title}</h2>
        <div className="mt-2 text-sm leading-7 text-[#666]">{children}</div>
      </div>
    </div>
  );
}

const inputClass = "mt-2 h-12 w-full rounded-sm border-0 bg-[#f7f7f7] px-4 text-sm outline-none ring-[#0A4E08] transition focus:ring-1";

export default function ContactUsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white">
        <section className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 lg:py-20 xl:px-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0A4E08]">Contact Us</p>
          <div className="mt-7 grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
            <div>
              <h1 className="text-3xl font-semibold tracking-tight text-[#171717] md:text-4xl">Let&apos;s Start the Conversation</h1>
              <div className="mt-10 space-y-7">
                <ContactItem icon="location" title="Registered & Corporate Office">
                  <address className="not-italic">Equirus Raghnall Insurance Broking Pvt Ltd<br />Technopolis Knowledge Park, Ground Floor,<br />Unit No. 15 &amp;16, Mahakali Caves Road,<br />Andheri East, Mumbai – 400093</address>
                </ContactItem>
                <ContactItem icon="mail" title="Email"><a href="mailto:support@equirusraghnall.com">support@equirusraghnall.com</a></ContactItem>
                <ContactItem icon="phone" title="Phone & What's app"><a href="tel:+917045161616">+91-7045161616</a></ContactItem>
                <ContactItem icon="user" title="Follow Us"><div className="flex flex-wrap gap-2 uppercase"><a href="#">Instagram</a><span>|</span><a href="#">LinkedIn</a><span>|</span><a href="#">Facebook</a><span>|</span></div></ContactItem>
              </div>
            </div>

            <form className="rounded-xl bg-white p-6 shadow-[0_2px_18px_rgba(0,0,0,0.12)] md:p-8" action="#">
              <div className="grid gap-x-6 gap-y-5 md:grid-cols-2">
                <label className="text-sm font-medium">First Name<input className={inputClass} name="firstName" /></label>
                <label className="text-sm font-medium">Last Name<input className={inputClass} name="lastName" /></label>
                <label className="text-sm font-medium">Phone<span className="text-red-600">*</span><input className={inputClass} name="phone" type="tel" required /></label>
                <label className="text-sm font-medium">Email<span className="text-red-600">*</span><input className={inputClass} name="email" type="email" required /></label>
                <label className="text-sm font-medium">Organization<input className={inputClass} name="organization" /></label>
                <label className="text-sm font-medium">What services you are interested in?<span className="text-red-600">*</span><select className={inputClass} name="service" defaultValue="Private Car Insurance" required><option>Private Car Insurance</option><option>Commercial Insurance</option><option>Group Insurance</option><option>Reinsurance</option></select></label>
                <label className="text-sm font-medium md:col-span-2">Write your message<textarea className="mt-2 min-h-32 w-full resize-y rounded-sm border-0 bg-[#f7f7f7] p-4 text-sm outline-none ring-[#0A4E08] focus:ring-1" name="message" /></label>
              </div>
              <button type="submit" className="mt-8 h-12 min-w-44 rounded-md bg-[#0A4E08] px-8 font-semibold text-white transition hover:opacity-90">Submit</button>
            </form>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 pb-16 md:px-10 xl:px-12">
          <div className="rounded-xl bg-[#0A4E08] px-6 py-12 text-white md:px-16 md:py-16">
            <div className="text-center"><p className="text-sm font-medium uppercase tracking-wide text-white/80">Visit Us</p><h2 className="mt-4 text-3xl font-semibold md:text-4xl">Serving Beyond Our Headquarters</h2></div>
            <div className="mx-auto mt-12 grid max-w-5xl items-center gap-9 lg:grid-cols-[1.15fr_1fr]">
              <div className="overflow-hidden bg-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5582125077754!2d72.82624218885498!3d18.995108699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf8d6c5976d1%3A0x591608595f1defa5!2sEquirus%20Insurance%20Broking%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1786446289885!5m2!1sen!2sin"
                  title="Equirus Insurance Broking office location"
                  className="h-[310px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
              <div className="border-white/50 lg:border-l lg:pl-8">
                <h3 className="text-2xl font-semibold">Gift City</h3>
                <p className="mt-5 text-lg font-semibold">Equirus Securities Pvt. Ltd</p>
                <div className="mt-4 flex items-start gap-3">
                  <Image src="/assets/shared/map-pin.svg" alt="" width={20} height={20} aria-hidden className="mt-1 size-5 shrink-0" />
                  <address className="not-italic leading-7 text-white/90">Unit no. GA–27, Seat no. 1–6, Ground Floor, Pragya Accelerator, Block–15 T, Road 11, Zone 1, Processing area, GIFT SEZ, GIFT City, Gandhinagar 382355</address>
                </div>
                <p className="mt-5 flex items-center gap-3">
                  <Image src="/assets/shared/phone.svg" alt="" width={20} height={20} aria-hidden className="size-5 shrink-0" />
                  <a href="tel:+912243320700">+91-22-4332-0700</a>
                </p>
                <p className="mt-3 flex items-center gap-3">
                  <Image src="/assets/shared/mail.svg" alt="" width={20} height={20} aria-hidden className="size-5 shrink-0" />
                  <a href="mailto:wealth@equiruswealth.com">wealth@equiruswealth.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1440px] px-5 pb-24 pt-4 text-center md:px-10 md:pb-32 xl:px-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#0A4E08]">Our Presence</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">Across India, Always Within Reach</h2>
          <OfficePresenceMap />
        </section>
      </main>
      <Footer />
    </>
  );
}
