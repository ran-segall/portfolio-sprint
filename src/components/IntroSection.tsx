export default function IntroSection() {
  return (
    <section className="px-4 py-12 md:px-8 md:py-[120px] bg-[#fafafa]">

      {/* Header: label + rule */}
      <div className="flex flex-col gap-3 items-end mb-6">
        <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase">
          [ 8+ years in industry ]
        </p>
        <hr className="w-full border-t border-[#1f1f1f]" />
      </div>

      {/* Staggered title block */}
      {/* Desktop: each line has different left indent creating a diagonal step pattern */}
      {/* Mobile: all lines centered, smaller font */}
      <div className="flex flex-col gap-1 uppercase">

        {/* Line 1: "A creative director /" — left on desktop, centered on mobile */}
        {/* "001" counter sits inline on desktop, above on mobile */}
        <div className="flex flex-col md:flex-row md:items-start md:gap-3">
          {/* Mobile-only: 001 above */}
          <span className="md:hidden font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] text-center mb-2">
            001
          </span>
          <p
            className="font-light text-black leading-[0.84] whitespace-pre text-center md:text-left"
            style={{ fontSize: "clamp(32px, 6.67vw, 96px)", letterSpacing: "-0.08em" }}
          >
            {`A creative director   /`}
          </p>
          {/* Desktop-only: 001 inline */}
          <span className="hidden md:block font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] pt-2 shrink-0">
            001
          </span>
        </div>

        {/* Line 2: "Photographer" — indented ~15% on desktop */}
        <div className="flex justify-center md:justify-start md:pl-[14.86vw]">
          <p
            className="font-light text-black leading-[0.84] whitespace-nowrap"
            style={{ fontSize: "clamp(32px, 6.67vw, 96px)", letterSpacing: "-0.08em" }}
          >
            Photographer
          </p>
        </div>

        {/* Line 3: "Born & raised" — indented ~42% on desktop */}
        <div className="flex justify-center md:justify-start md:pl-[42.36vw]">
          <p
            className="font-light text-black leading-[0.84] whitespace-nowrap"
            style={{ fontSize: "clamp(32px, 6.67vw, 96px)", letterSpacing: "-0.08em" }}
          >
            Born{" "}
            <em className="font-[family-name:var(--font-playfair)] not-italic italic font-normal">
              &amp;
            </em>
            {" "}raised
          </p>
        </div>

        {/* Line 4: "on the south side" — left on desktop */}
        <div className="flex justify-center md:justify-start">
          <p
            className="font-light text-black leading-[0.84] whitespace-nowrap"
            style={{ fontSize: "clamp(32px, 6.67vw, 96px)", letterSpacing: "-0.08em" }}
          >
            on the south side
          </p>
        </div>

        {/* Line 5: "of chicago." — indented ~42% on desktop, with [ creative freelancer ] tag */}
        <div className="flex flex-col items-center md:items-start md:pl-[42.08vw] relative">
          <p
            className="font-light text-black leading-[0.84] whitespace-nowrap"
            style={{ fontSize: "clamp(32px, 6.67vw, 96px)", letterSpacing: "-0.08em" }}
          >
            of chicago.
          </p>
          {/* Desktop: absolute tag to the right of the line */}
          <span className="hidden md:block absolute left-[calc(42.08vw+680px)] top-[0.3em] font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] whitespace-nowrap">
            [ creative freelancer ]
          </span>
          {/* Mobile: tag below */}
          <span className="md:hidden font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] mt-3">
            [ creative freelancer ]
          </span>
        </div>

      </div>
    </section>
  );
}
