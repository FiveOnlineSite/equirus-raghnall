import Image from "next/image";

export default function ServiceHero({
  label,
  title,
  description,
  image,
  imageAlt = "",
  features = [],
  imagePosition = "center center",
}) {
  return (
    <section className="relative isolate min-h-[560px] overflow-hidden bg-[#F7F8FA]">
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover"
          style={{ objectPosition: imagePosition }}
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-white/10" aria-hidden="true" />

      <div className="mx-auto flex min-h-[560px] max-w-[1440px] flex-col px-5 pb-9 pt-14 text-center md:px-10 md:pt-16 xl:px-20">
        <div className="mx-auto max-w-[650px]">
          <p className="text-sm font-medium uppercase tracking-[0.04em] text-[#376E00] sm:text-base">{label}</p>
          <h1 className="mt-6 text-2xl font-semibold leading-[1.08] tracking-[-0.025em] text-[#080808] md:text-[48px]">{title}</h1>
          <p className="mx-auto mt-7 max-w-[530px] text-sm leading-6 text-[#555555] md:text-base md:leading-7">{description}</p>
        </div>

        {features.length ? (
          <div className="mx-auto mb-10 mt-auto grid w-full max-w-[760px] gap-5 text-left sm:grid-cols-3 md:mb-12 md:pt-24">
            {features.map((feature) => (
              <div className="flex items-center justify-center gap-4 sm:justify-start" key={feature.title}>
                {feature.icon ? (
                  <Image src={feature.icon} alt="" width={30} height={30} className="size-6 shrink-0 object-contain sm:size-[30px]" aria-hidden />
                ) : null}
                <p className="max-w-[160px] text-sm font-medium leading-5 text-[#242424] sm:text-base sm:leading-6">{feature.title}</p>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
