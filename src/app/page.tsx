import Navbar from "@/components/Navbar";
import IntroSection from "@/components/IntroSection";
import AboutSection from "@/components/AboutSection";
import FullBleedPhoto from "@/components/FullBleedPhoto";
import ServicesSection from "@/components/ServicesSection";
import WorkSection from "@/components/WorkSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsSection from "@/components/NewsSection";
import Footer from "@/components/Footer";

const heroBg = "https://www.figma.com/api/mcp/asset/cab7a8dc-9c0f-4b78-99a0-b7a7553288d2";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <IntroSection />
      <AboutSection />
      <FullBleedPhoto />
      <ServicesSection />
      <WorkSection />
      <TestimonialsSection />
      <NewsSection />
      <Footer />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden px-4 md:px-8 flex flex-col">

      {/* Background photo — cover full hero, positioned to keep face visible */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover"
          style={{ objectPosition: "center 15%" }}
        />
      </div>

      {/* Gradient blur — fades from sharp at top to blurred at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[55%] backdrop-blur-[12px]"
        style={{
          maskImage: "linear-gradient(to top, black 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, black 40%, transparent 100%)",
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Hero body */}
      <div className="relative flex flex-col flex-1 justify-between md:justify-start md:pt-[26vh]">

        {/* Title with mix-blend-overlay for photo blending effect */}
        <div className="mix-blend-overlay flex flex-col">
          <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white uppercase leading-[1.1] px-[18px]">
            [ Hello i&apos;m ]
          </p>
          <h1
            className="font-medium text-white text-center capitalize leading-[0.85] w-full whitespace-pre-wrap md:whitespace-nowrap"
            style={{ fontSize: "clamp(72px, 13.75vw, 220px)", letterSpacing: "-0.07em" }}
          >
            {`Harvey   Specter`}
          </h1>
        </div>

        {/* Description + CTA */}
        <div className="flex md:justify-end pb-8 md:pb-10">
          <div className="flex flex-col gap-4 items-start w-[294px]">
            <p className="font-bold italic text-[#1f1f1f] text-sm tracking-[-0.04em] uppercase leading-[1.1]">
              <span>H.Studio is a </span>
              <span className="font-normal not-italic">full-service</span>
              <span> creative studio creating beautiful digital experiences and products. We are an </span>
              <span className="font-normal not-italic">award winning</span>
              <span> design and art group specializing in branding, web design and engineering.</span>
            </p>
            <a
              href="#contact"
              className="bg-black text-white text-sm font-medium tracking-[-0.04em] px-4 py-3 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
