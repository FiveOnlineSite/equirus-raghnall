import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { blogs } from "../data/blogs";

const tabs = ["Blogs", "Risk Reports", "Market Updates", "Case Studies"];

export const metadata = { title: "News & Insights | Equirus Raghnall" };

export default function BlogsPage() {
  return (
    <><Navbar />
      <main>
        <section className="relative h-[364px] overflow-hidden text-white">
          <Image src="/assets/blogs-hero.png" alt="Blue sky and clouds" fill priority className="object-cover object-[center_45%]" sizes="100vw" />
          <div className="relative mx-auto max-w-[1440px] px-5 pt-[60px] md:px-10 xl:px-20">
            <p className="text-base font-medium uppercase leading-[30px] tracking-[0.03em]">Latest Updates</p>
            <h1 className="mt-4 text-[32px] font-semibold leading-[44px]">NEWS &amp; INSIGHTS</h1>
            <p className="mt-4 max-w-[519px] text-base leading-7">From company announcements to industry developments, explore the latest news and insights all in one place.</p>
            <Link href="#solutions" className="mt-8 inline-flex h-12 items-center justify-center rounded-lg bg-[#0a4e08] px-4 font-semibold leading-[30px] hover:bg-[#083d06]">View Our Solutions</Link>
          </div>
        </section>

        <section className="bg-[linear-gradient(187deg,#fff_9%,#f6f7fe_53%)]">
          <div className="mx-auto max-w-[1440px] px-5 pb-[60px] pt-[60px] md:px-10 xl:px-20">
            <nav aria-label="Insight categories" className="mb-12 flex gap-4 overflow-x-auto sm:gap-6 md:gap-10">
              {tabs.map((tab, index) => <span key={tab} className={`shrink-0 px-2.5 py-3 font-semibold text-[#363636] ${index === 0 ? "border-b-[3px] border-[#2c2f71] text-[#2c2f71]" : ""}`}>{tab}</span>)}
            </nav>
            <div className="grid gap-x-5 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
              {blogs.map((blog) => (
                <Link href={`/blogs/${blog.slug}`} key={blog.slug} className="group block min-w-0">
                  <Image src={blog.image} alt="" width={305} height={193} className="aspect-[305/193] w-full rounded object-cover" />
                  <div className="mt-2 flex justify-between text-sm leading-5 text-[#3d3d3d]"><time dateTime="2026-07-11">11 Jul</time><span>2 min read</span></div>
                  <h2 className="mt-2 text-lg font-semibold leading-7 text-[#080808] transition-colors group-hover:text-[#0a4e08]">{blog.title}</h2>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
