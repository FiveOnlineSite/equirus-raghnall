import Image from "next/image";
import Link from "next/link";
import CounterStats from "./components/CounterStats";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const services = [
  {
    title: "Private Clients",
    description: "Tailored insurance solutions designed to protect wealth, lifestyle, and long-term financial security.",
    icon: "/assets/service-health.svg",
    href: "/private-clients",
  },
  {
    title: "Commercial",
    description: "Strategic insurance solutions designed to protect businesses, assets, and operations from risks.",
    icon: "/assets/service-commercial.svg",
    href: "/commercial",
  },
  {
    title: "Reinsurance",
    description: "Specialized reinsurance solutions designed to optimize risk transfer and strengthen financial stability.",
    icon: "/assets/service-reinsurance.svg",
    href: "/reinsurance",
  },
];

const serviceSnapshots = [
  { category: "Private", title: "Health Insurance", description: "Individual and family health plans with access to premium hospital networks and international medical coverage." },
  { category: "Private", title: "Life & PCG", description: "Wealth-protective strategies and private client group coverage for ultra HNI families and business principals." },
  { category: "Private", title: "Auto Insurance", description: "Comprehensive motor coverage for personal and fleet vehicles with dedicated claims support and accident assistance." },
  { category: "Commercial", title: "Employee Benefits", description: "Group health, life, and wellness programs designed to attract, retain, and protect your workforce." },
  { category: "Commercial", title: "Liability & Cyber", description: "D&O, E&O, EPL, and cyber fidelity solutions for the modern regulatory and threat environment." },
  { category: "Commercial", title: "Treaty & Facultative", description: "Structured reinsurance placements via our global network across Lloyd's, European, and Asian markets." },
];

const heroProducts = [
  { category: "Private Clients", title: "Auto Insurance", description: "Protect your vehicle against accidents, damage, theft, and third-party liabilities with coverage designed for real-world driving risks.", image: "/assets/solution-auto.png", href: "/private-clients" },
  { category: "Commercial", title: "Employee Benefits", description: "Tailored employee benefit solutions that enhance protection, improve retention, and support a healthier, more secure workforce.", image: "/assets/solution-benefits.png", href: "/commercial" },
  { category: "Private", title: "Health Insurance", description: "Coverage for medical expenses, hospitalization, and critical care — ensuring financial security during unexpected health situations.", image: "/assets/solution-health.png", href: "/private-clients" },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-[610px] bg-white">
          <div className="mx-auto max-w-[1440px] px-5 py-14 md:px-10 md:py-16 xl:px-20">
            <div className="max-w-[560px]">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">
                End-to-End Insurance &amp; Risk Solutions
              </p>
              <h1 className="mt-7 text-[42px] font-semibold leading-[1.08] tracking-[-0.025em] text-[#0d0d0d] sm:text-5xl md:text-[54px]">
                Not Just Coverage
                <br />
                Complete Risk Strategy.
              </h1>
              <p className="mt-8 max-w-[520px] text-base leading-7 text-[#555555]">
                We partner with individuals, businesses, and institutions to structure
                insurance that protects, performs, and scales with evolving risk
                landscapes.
              </p>
              <Link
                href="#services"
                className="mt-10 inline-flex h-12 items-center justify-center rounded-md bg-[#0A4E08] px-8 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Visit Our Services
              </Link>

              <div className="mt-16 flex items-center gap-5">
                <div className="flex -space-x-3" aria-hidden="true">
                  {["18% center", "51% center", "84% center"].map((position) => (
                    <span key={position} className="relative block size-11 overflow-hidden rounded-full border border-[#8f8f8f] bg-white ring-2 ring-white">
                      <Image
                        src="/assets/home-hero.png"
                        alt=""
                        fill
                        sizes="44px"
                        className="object-cover"
                        style={{ objectPosition: position }}
                      />
                    </span>
                  ))}
                </div>
                <p className="text-sm font-medium text-[#242424]">Trusted by over 10M+ People</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-[#ececec] bg-white pt-16 md:pt-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">Three Segments</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">Our Core Insurance Solutions</h2>
            </div>

            <div className="mt-14 grid pb-16 md:grid-cols-3 md:pb-20">
              {services.map((service, index) => (
                <article key={service.title} className={`py-8 md:px-12 md:py-0 xl:px-16 ${index ? "border-t border-[#b8b8b8] md:border-l md:border-t-0" : ""}`}>
                  <Image src={service.icon} alt="" width={34} height={34} aria-hidden className="size-[34px] object-contain" />
                  <h3 className="mt-5 text-xl font-semibold text-[#151515]">{service.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#555555]">{service.description}</p>
                  <Link href={service.href} className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#0A4E08] transition hover:opacity-70">
                    Know More
                    <span className="grid size-5 place-items-center rounded-full border border-current" aria-hidden="true">→</span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
          <CounterStats />
        </section>

        <section className="bg-[linear-gradient(180deg,#ffffff_0%,#f8f9ff_100%)] py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">Services Snapshots</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">Risk Advisory Beyond The Policy</h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {serviceSnapshots.map((service) => (
                <article key={service.title} className="group flex min-h-[245px] flex-col rounded-xl bg-white p-6 shadow-[0_8px_30px_rgba(25,34,80,0.03)] transition duration-300 hover:-translate-y-1 hover:bg-[#0A4E08] hover:shadow-[0_14px_35px_rgba(10,78,8,0.18)] md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="rounded-sm bg-[#F1F9ED] px-2.5 py-1 text-xs font-medium uppercase text-[#0A4E08] transition-colors group-hover:bg-white/20 group-hover:text-white">{service.category}</span>
                    <span className="grid size-6 place-items-center rounded-full border border-[#0A4E08] text-sm text-[#0A4E08] transition-colors group-hover:border-white group-hover:text-white" aria-hidden="true">↗</span>
                  </div>
                  <div className="mt-auto pt-12">
                    <h3 className="text-xl font-semibold text-[#151515] transition-colors group-hover:text-white">{service.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[#555555] transition-colors group-hover:text-white/90">{service.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FF] py-16 md:py-20">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:gap-20 xl:px-20">
            <div className="max-w-[560px]">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">Our Difference</p>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">Why Equirus Raghnall?</h2>
              <p className="mt-7 text-base leading-7 text-[#555555]">
                We are an independent, IRDAI-registered insurance broker with a singular focus: putting our clients&apos; interests first. Our advisory model is built on objectivity, depth of expertise, and long-term partnership
              </p>
              <ul className="mt-9 space-y-5 text-base font-medium text-[#181818]">
                {["Independent Risk Advisory", "End-to-end Claim Advocacy", "Tailored Coverage Architecture", "Pan India & Global Reach"].map((item) => (
                  <li key={item} className="flex items-center gap-4">
                    <svg viewBox="0 0 24 24" className="size-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m3 12 5 5L20 5" /><path d="m8 12 3 3 7-7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] pb-2 pr-2">
              <span className="absolute inset-x-4 bottom-0 top-4 rounded-md bg-[#30337A]" aria-hidden="true" />
              <div className="relative aspect-[1.2/1] overflow-hidden rounded-md bg-white">
                <Image src="/assets/home-why-us.png" alt="Advisers discussing tailored insurance solutions" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">Flagship Offerings</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">Our Hero Products</h2>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {heroProducts.map((product) => (
                <article key={product.title} className="overflow-hidden rounded-lg bg-white shadow-[0_2px_12px_rgba(0,0,0,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.14)]">
                  <div className="relative aspect-[1.85/1] overflow-hidden">
                    <Image src={product.image} alt={product.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover transition duration-500 hover:scale-[1.03]" />
                    <span className="absolute left-4 top-4 rounded bg-white/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">{product.category}</span>
                  </div>
                  <div className="p-5 md:p-6">
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#111111]">{product.title}</h3>
                    <p className="mt-4 text-base leading-7 text-[#555555]">{product.description}</p>
                    <Link href={product.href} className="mt-7 inline-flex items-center gap-3 text-sm font-semibold text-[#0A4E08] transition hover:opacity-70">
                      Explore
                      <span className="grid size-5 place-items-center rounded-full border border-current" aria-hidden="true">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
