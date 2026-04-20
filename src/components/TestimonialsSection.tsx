"use client";

const testimonials = [
  {
    logo: "https://www.figma.com/api/mcp/asset/4776a2c0-b6e9-4bbc-a7e1-72bae614ee58",
    logoW: 138, logoH: 19,
    quote: "Professional, precise, and incredibly fast at handling complex product visualizations and templates.",
    name: "Lukas Weber",
    rotate: "rotate-[2.9deg]",
    style: { left: "46.94%", top: "272px" },
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/6f8a9188-6163-49f3-953b-f8a4b813665d",
    logoW: 143, logoH: 19,
    quote: "A brilliant creative partner who transformed our vision into a unique, high-impact brand identity. Their ability to craft everything from custom mascots to polished logos is truly impressive.",
    name: "Marko Stojković",
    rotate: "rotate-[-6.85deg]",
    style: { left: "7.08%", top: "142px" },
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/e9f40ba8-ffe1-4e69-86d0-2259141bb075",
    logoW: 109, logoH: 31,
    quote: "A strategic partner who balances stunning aesthetics with high-performance UX for complex platforms. They don't just make things look good; they solve business problems through visual clarity.",
    name: "Sarah Jenkins",
    rotate: "rotate-[2.23deg]",
    style: { left: "21.18%", top: "553px" },
  },
  {
    logo: "https://www.figma.com/api/mcp/asset/895d4715-b2dd-477a-b7b4-908bf3edec10",
    logoW: 81, logoH: 36,
    quote: "An incredibly versatile designer who delivers consistent quality across a wide range of styles and formats.",
    name: "Sofia Martínez",
    rotate: "rotate-[-4.15deg]",
    style: { left: "68.54%", top: "546px" },
  },
];

function TestimonialCard({ t }: { t: typeof testimonials[0] }) {
  return (
    <div className="bg-[#f1f1f1] border border-[#ddd] rounded-[4px] p-6 flex flex-col gap-4 w-[353px] shrink-0">
      {/* Fixed-size logo container matching Figma pixel dimensions */}
      <div className="relative shrink-0 overflow-hidden" style={{ width: t.logoW, height: t.logoH }}>
        <img src={t.logo} alt="" className="absolute inset-0 w-full h-full object-contain object-left" />
      </div>
      <p className="text-[#1f1f1f] text-lg leading-[1.3] tracking-[-0.04em]">{t.quote}</p>
      <p className="font-black text-black text-base leading-[1.1] tracking-[-0.04em] uppercase">{t.name}</p>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-[#fafafa] overflow-hidden">

      {/* ── Desktop: scattered cards over giant heading ── */}
      <div className="hidden md:block relative min-h-[987px] px-8 py-[120px]">
        {/* Big "Testimonials" heading behind the cards */}
        <h2
          className="absolute inset-x-0 text-center font-medium text-black capitalize leading-[1.1] select-none pointer-events-none"
          style={{ fontSize: "clamp(120px, 13.75vw, 198px)", letterSpacing: "-0.07em", top: "50%", transform: "translateY(-50%)" }}
        >
          Testimonials
        </h2>

        {/* Cards scattered with absolute positioning + rotations */}
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="absolute"
            style={t.style}
          >
            <div className={`${t.rotate}`}>
              <TestimonialCard t={t} />
            </div>
          </div>
        ))}
      </div>

      {/* ── Mobile: title + horizontal swipe carousel ── */}
      <div className="md:hidden px-4 py-16 flex flex-col gap-8">
        <h2
          className="font-medium text-black capitalize leading-[0.8]"
          style={{ fontSize: "clamp(48px, 17vw, 64px)", letterSpacing: "-0.07em" }}
        >
          Testimonials
        </h2>

        {/* Swipeable row — snaps to each card */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`snap-start shrink-0 ${i % 2 === 0 ? "rotate-[-3.5deg]" : "rotate-[2deg]"} mt-${i % 2 === 0 ? "4" : "0"}`}
            >
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
