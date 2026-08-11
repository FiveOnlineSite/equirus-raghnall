import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="grid min-h-[420px] place-items-center bg-[#f7f8f6] px-5 text-center">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0a4e08]">
            Equirus Raghnall Insurance
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-[#202020] md:text-5xl">
            Home Page
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#5a5a5a]">
            This is dummy homepage content. Replace this text with the final page content when it is ready.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
