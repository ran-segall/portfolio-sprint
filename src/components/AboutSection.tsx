const portraitImg = "https://www.figma.com/api/mcp/asset/9b4f81c3-6ffe-41c5-af79-ea41e24aec55";

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-12 md:px-8 md:py-20 bg-[#fafafa]">

      {/* Desktop: [ About ] label left, content right */}
      {/* Mobile: stack everything */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5 md:gap-0">

        {/* Left: section label */}
        <p className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase whitespace-nowrap">
          [ About ]
        </p>

        {/* Right: text + photo */}
        <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-8 md:w-[68%]">

          {/* Text block with corner bracket decoration */}
          <div className="flex-1 flex flex-col gap-5">

            {/* Mobile-only labels */}
            <div className="flex flex-col gap-1 md:hidden">
              <span className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase">002</span>
              <span className="font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase">[ About ]</span>
            </div>

            {/* Text with corner brackets */}
            <div className="relative py-3 px-6">
              {/* Corner marks */}
              <span className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#1f1f1f]" />
              <span className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#1f1f1f]" />
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#1f1f1f]" />
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#1f1f1f]" />

              <p className="text-[#1f1f1f] text-sm leading-[1.3] tracking-[-0.04em]">
                Placeholder paragraph one. This is where you introduce yourself — your background, your passion for your craft, and what drives you creatively. Two to three sentences work best here. Placeholder paragraph two. Here you can describe your technical approach, how you collaborate with clients, or what sets your work apart from others in your field.
              </p>
            </div>
          </div>

          {/* Photo + 002 counter */}
          <div className="flex flex-col gap-6 md:gap-6 md:shrink-0 md:w-[436px]">
            <span className="hidden md:block font-[family-name:var(--font-geist-mono)] text-sm text-[#1f1f1f] uppercase">002</span>
            <div className="w-full md:w-[436px] md:h-[614px] overflow-hidden aspect-[422/594] md:aspect-auto">
              <img
                src={portraitImg}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
