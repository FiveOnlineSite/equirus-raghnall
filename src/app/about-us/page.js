import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCounters from "./AboutCounters";

export const metadata = {
  title: "About Us | Equirus Raghnall",
  description: "More than insurance—a partner in every decision.",
};

const expertFaces = ["14% center", "48% center", "82% center"];

const directors = [
  { name: "Amit Goel", role: "Co-founder Director & Principal Officer", position: "8% center" },
  { name: "Arun Garg", role: "Director", position: "36% center" },
  { name: "Yognesh Dosshi", role: "Co-founder & Director", position: "64% center" },
  { name: "Bhavesh A Shah", role: "Managing Director & Head-Investment Banking, Equirus Capital", position: "92% center" },
];

const managementTeam = [
  { name: "Amit Goel", role: "Principal Officer", position: "8% center" },
  { name: "Yognesh Dosshi", role: "Director", position: "20% center" },
  { name: "Arun Garg", role: "Director", position: "32% center" },
  { name: "Bhavesh A Shah", role: "Managing Director", position: "44% center" },
  { name: "Dinesh Shelar", role: "Regional Head", position: "56% center" },
  { name: "Prasad Vattimilli", role: "Regional Head", position: "68% center" },
  { name: "Susheel Kumar Sahani", role: "Regional Head", position: "80% center" },
  { name: "Mahesh Kumar", role: "Regional Head", position: "92% center" },
  { name: "Rushikesh Gade", role: "Business Leader", position: "12% center" },
  { name: "Ashutosh Kedia", role: "Business Leader", position: "26% center" },
  { name: "Govind Singh", role: "Business Leader", position: "40% center" },
  { name: "Ayesha Shankar", role: "Human Resources", position: "54% center" },
  { name: "Kashish Shah", role: "Insurance Advisory", position: "66% center" },
  { name: "Ritik Jaiswal", role: "Risk Advisory", position: "76% center" },
  { name: "Mohan Singh", role: "Claims Advocacy", position: "86% center" },
  { name: "Leadership Team", role: "Corporate Insurance", position: "96% center" },
];

const reinsuranceTeam = [
  { name: "Reinsurance Leader", role: "Head of Reinsurance", position: "18% center" },
  { name: "Treaty Specialist", role: "Treaty Reinsurance", position: "42% center" },
  { name: "Facultative Specialist", role: "Facultative Reinsurance", position: "68% center" },
  { name: "Global Markets Lead", role: "International Markets", position: "90% center" },
];

const awards = [
  { name: "Excellence in Insurance Broking", role: "Industry Recognition", position: "12% center" },
  { name: "Trusted Risk Advisory", role: "Client Excellence", position: "38% center" },
  { name: "Claims Advocacy Excellence", role: "Service Recognition", position: "66% center" },
  { name: "Leadership in Reinsurance", role: "Market Recognition", position: "90% center" },
];

export default function AboutUsPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="min-h-[calc(100vh-100px)] bg-[#F8F9FF] py-12 md:py-16">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <h1 className="text-[38px] font-semibold leading-[1.12] tracking-[-0.025em] text-[#080808] md:text-[52px]">
                More Than Insurance.
                <br />
                A Partner in Every Decision.
              </h1>
              <p className="mx-auto mt-6 max-w-[570px] text-sm leading-6 text-[#555555] md:text-base md:leading-7">
                Helping individuals and businesses navigate risks with confidence
                <br className="hidden sm:block" />
                through personalized insurance and advisory solutions.
              </p>
            </div>

            <div className="mx-auto mt-14 grid max-w-[1290px] items-center gap-5 md:mt-16 md:grid-cols-3">
              <div className="relative aspect-[1.5/1] overflow-hidden rounded-lg shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
                <Image src="/assets/about/about-philosophy.png" alt="A family enjoying time together" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>

              <div className="relative aspect-[1.5/1] overflow-visible rounded-lg shadow-[0_5px_20px_rgba(0,0,0,0.1)] md:mt-16">
                <div className="absolute inset-0 overflow-hidden rounded-lg">
                  <Image src="/assets/about/about-values.png" alt="Insurance experts collaborating" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
                <div className="absolute bottom-3 left-3 flex items-center rounded-full bg-white py-1.5 pl-2 pr-3 shadow-md">
                  <div className="flex -space-x-2" aria-hidden="true">
                    {expertFaces.map((position) => (
                      <span className="relative block size-7 overflow-hidden rounded-full border-2 border-white" key={position}>
                        <Image src="/assets/home-hero.png" alt="" fill sizes="28px" className="object-cover" style={{ objectPosition: position }} />
                      </span>
                    ))}
                  </div>
                  <span className="ml-2 text-xs font-medium text-[#242424]">300+ Experts</span>
                </div>
              </div>

              <div className="relative aspect-[1.5/1] overflow-hidden rounded-lg shadow-[0_5px_20px_rgba(0,0,0,0.08)]">
                <Image src="/assets/about/about-story.png" alt="A modern collaborative workplace" fill priority sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">About The Company</p>
            <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">
              Built for Complex Risks. Trusted for Every Solution.
            </h2>
            <div className="mt-6 max-w-[1320px] space-y-3 text-sm leading-7 text-[#555555] md:text-base">
              <p>
                Equirus Raghnall Insurance Broking is a leading corporate insurance broker and risk advisory firm, delivering world-class risk solutions to businesses across India and international markets. Backed by the institutional strength, governance, and financial expertise of the Equirus Group, we combine global standards with deep local market knowledge to help organisations navigate an increasingly complex risk landscape.
              </p>
              <p>
                Our multidisciplinary team of insurance specialists, risk engineers, claims professionals, legal experts, and industry practitioners advises clients across sectors including infrastructure, manufacturing, financial services, healthcare, logistics, renewable energy, technology, real estate, and global trade. By combining technical expertise with commercial insight, we design solutions that are aligned with each client&apos;s strategic objectives and risk appetite.
              </p>
            </div>
            <AboutCounters />
          </div>
        </section>

        <section className="bg-[#F8F9FF] py-16 md:py-20">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 xl:px-20">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">Global Capabilities</p>
              <h2 className="mt-6 text-3xl font-semibold leading-[1.25] tracking-[-0.02em] text-[#111111] md:text-[40px]">
                Global Reach.
                <br />
                Tailored Protection.
              </h2>
              <p className="mt-7 max-w-[700px] text-sm leading-7 text-[#555555] md:text-base">
                With access to leading domestic insurers and international insurance markets, we are equipped to support complex cross-border operations, global insurance programmes, and evolving regulatory requirements. Our relationships, technical expertise, and market intelligence enable us to negotiate innovative and competitive solutions for risks of every scale and complexity.
              </p>
            </div>

            <div className="relative mx-auto w-full max-w-[560px] pb-2 pr-2">
              <span className="absolute bottom-0 left-[57%] right-0 top-[35%] rounded-[6px] bg-[#30337A]" aria-hidden="true" />
              <div className="relative aspect-[1.22/1] overflow-hidden rounded-[10px] bg-white">
                <Image src="/assets/about/global-reach-generated.png" alt="A globe representing Equirus Raghnall's global insurance capabilities" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover object-center" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 xl:px-20">
            <div className="relative mx-auto w-full max-w-[560px] pb-2 pl-2">
              <span className="absolute bottom-0 left-0 right-[57%] top-[35%] rounded-[6px] bg-[#30337A]" aria-hidden="true" />
              <div className="relative aspect-[1.22/1] overflow-hidden rounded-[10px] bg-[#f1f1f1]">
                <Image src="/assets/about/about-story.png" alt="Modern architecture representing a strong foundation" fill sizes="(max-width: 1024px) 100vw, 560px" className="object-cover object-center" />
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">What Drives Us</p>
              <h2 className="mt-6 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">How We Measure Success</h2>
              <p className="mt-7 max-w-[700px] text-sm leading-7 text-[#555555] md:text-base">
                At Equirus Raghnall, we measure our success by the confidence our clients place in us. We are committed to building enduring partnerships founded on integrity, technical excellence, responsiveness, and a relentless focus on delivering value. As trusted advisors to our clients, we help them anticipate risk, seize opportunities with confidence, and create resilient businesses prepared for the future.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-[#30337A] py-16 text-white md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-medium uppercase tracking-[0.04em] text-white/90">Why Choose Us</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] md:text-[40px]">Why Equirus Raghnall</h2>
            </div>

            <div className="mt-12 grid md:mt-14 md:grid-cols-3">
              {[
                { number: "01.", title: "We Understand Your Business", text: "Every business faces unique risks. We assess your operations and design tailored insurance solutions that align with your specific exposures and objectives." },
                { number: "02.", title: "Expert Risk Advisory", text: "Our specialists identify potential risks and recommend practical measures to reduce exposures, helping strengthen your business while minimizing future claims." },
                { number: "03.", title: "Access Top Insurance Markets", text: "As an independent broker, we compare leading insurers and global markets to secure tailored coverage with the most competitive terms." },
              ].map((item, index) => (
                <article key={item.number} className={`py-8 md:min-h-[250px] md:px-8 md:py-0 xl:px-10 ${index ? "border-t border-white/60 md:border-l md:border-t-0" : ""}`}>
                  <p className="text-[32px] font-semibold leading-none text-white/65">{item.number}</p>
                  <h3 className={`mt-10 text-xl font-semibold leading-7 ${index === 2 ? "lg:whitespace-nowrap" : ""}`}>{item.title}</h3>
                  <p className="mt-5 text-sm leading-7 text-white/90">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FF] py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">Meet Our Team</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">Board Of Directors</h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {directors.map((director) => (
                <article key={director.name} className="group relative aspect-[0.9/1] overflow-hidden rounded-lg bg-[#d7d9db]">
                  <Image
                    src="/assets/home-hero.png"
                    alt={director.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: director.position }}
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(0,0,0,0.78)_100%)]" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="text-base font-semibold">{director.name}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/90">{director.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">Management Team</h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {managementTeam.map((member, index) => (
                <article key={`${member.name}-${index}`} className="group relative aspect-[0.9/1] overflow-hidden rounded-lg bg-[#d7d9db]">
                  <Image
                    src="/assets/home-hero.png"
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: member.position }}
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(0,0,0,0.78)_100%)]" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="text-base font-semibold">{member.name}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/90">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#F8F9FF] py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">Management Team- Reinsurance</h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {reinsuranceTeam.map((member) => (
                <article key={member.name} className="group relative aspect-[0.9/1] overflow-hidden rounded-lg bg-[#d7d9db]">
                  <Image
                    src="/assets/home-hero.png"
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: member.position }}
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(0,0,0,0.78)_100%)]" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="text-base font-semibold">{member.name}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/90">{member.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.04em] text-[#0A4E08]">AWARDS &amp; RECOGNITION</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.02em] text-[#111111] md:text-[40px]">Excellence in Client Service</h2>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {awards.map((award) => (
                <article key={award.name} className="group relative aspect-[0.9/1] overflow-hidden rounded-lg bg-[#d7d9db]">
                  <Image
                    src="/assets/home-hero.png"
                    alt={award.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    style={{ objectPosition: award.position }}
                  />
                  <span className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(0,0,0,0.78)_100%)]" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-4 text-white">
                    <h3 className="text-base font-semibold">{award.name}</h3>
                    <p className="mt-1 text-xs leading-5 text-white/90">{award.role}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <Footer/>
      </main>
    </>
  );
}
