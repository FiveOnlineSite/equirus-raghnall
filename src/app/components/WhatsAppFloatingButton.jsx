import Image from "next/image";

export default function WhatsAppFloatingButton() {
  return (
    <a
      href="https://wa.me/917045161616"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[100] block size-12 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#25D366] md:bottom-7 md:right-7 md:size-14"
    >
      <Image src="/assets/shared/whatsapp.svg" alt="" fill sizes="(max-width: 768px) 48px, 56px" aria-hidden="true" />
    </a>
  );
}
