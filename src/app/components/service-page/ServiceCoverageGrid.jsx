import Image from "next/image";
import Link from "next/link";

export default function ServiceCoverageGrid({
  label,
  title,
  items = [],
  linkLabel = "Learn More",
}) {
  return (
    <section className="bg-[#F8F9FF] py-8 md:py-16">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-20">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#376E00] sm:text-base">{label}</p>
          <h2 className="mt-5 text-[clamp(24px,7vw,30px)] font-semibold tracking-[-0.02em] text-[#111111] md:text-[32px]">{title}</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="group flex min-h-[250px] flex-col rounded-xl border border-[#E2E2E2] bg-white p-6 shadow-[0_5px_18px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 hover:cursor-pointer hover:border-[#0A4E08] hover:bg-[#0A4E08] hover:shadow-[0_14px_35px_rgba(10,78,8,0.18)] md:p-7">
              <h3 className="text-lg font-semibold leading-6 text-[#242424] transition-colors group-hover:text-white sm:text-xl sm:leading-7">{item.title}</h3>
              <p className="mt-auto pt-10 text-sm leading-7 text-[#555555] transition-colors group-hover:text-white/90 md:text-base">{item.description}</p>
              {item.href ? (
                <Link href={item.href} className="mt-3 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#376E00] transition group-hover:text-white hover:opacity-70">
                  {item.linkLabel || linkLabel}
                  <Image src="/assets/shared/arrow-right.svg" alt="" width={18} height={18} className="size-[18px] transition group-hover:brightness-0 group-hover:invert" aria-hidden />
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
