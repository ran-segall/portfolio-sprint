export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white">

      {/* ── Desktop ── */}
      <div className="hidden md:flex flex-col pt-12 px-8 gap-[120px]">

        {/* Top: 3-column row */}
        <div className="flex justify-between">

          {/* Left — CTA */}
          <div className="flex flex-col gap-6 w-[298px]">
            <p className="font-light italic text-white leading-[1.2] tracking-[-0.04em] text-2xl">
              Have a{" "}
              <span className="font-black not-italic">project</span>
              {" "}in mind?
            </p>
            <a
              href="mailto:hello@hstudio.com"
              className="self-start border border-white text-white text-sm font-medium tracking-[-0.04em] px-5 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
            >
              Let&apos;s talk
            </a>
          </div>

          {/* Center — social left */}
          <div className="flex flex-col gap-3 w-[298px] items-center">
            {["FACEBOOK", "INSTAGRAM"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-white text-lg font-medium tracking-[-0.04em] hover:opacity-60 transition-opacity"
              >
                {s}
              </a>
            ))}
          </div>

          {/* Right — social right */}
          <div className="flex flex-col gap-3 w-[298px] items-end">
            {["X.COM", "LINKEDIN"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-white text-lg font-medium tracking-[-0.04em] hover:opacity-60 transition-opacity"
              >
                {s}
              </a>
            ))}
          </div>

        </div>

        {/* HR */}
        <hr className="border-white/20 -mt-[60px]" />

        {/* Bottom: wordmark left, legal right */}
        <div className="flex items-end justify-between -mt-[60px]">

          {/* Wordmark + rotated label */}
          <div className="flex items-end gap-4 min-w-0 flex-1">
            <span
              className="font-[family-name:var(--font-geist-mono)] text-white/50 text-[10px] uppercase tracking-widest -rotate-90 origin-center shrink-0 mb-6"
            >
              [ Coded By Claude ]
            </span>
            {/* Clip container — shows only top ~75% of the letterforms */}
            <div className="overflow-hidden" style={{ height: "13.5vw" }}>
              <h2
                className="font-semibold text-white leading-none whitespace-nowrap"
                style={{ fontSize: "18vw", letterSpacing: "-0.06em" }}
              >
                H.Studio
              </h2>
            </div>
          </div>

          {/* Legal links */}
          <div className="flex flex-col gap-1 items-end pb-8 shrink-0">
            {["LICENCES", "PRIVACY POLICY"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-white text-xs tracking-[-0.04em] underline underline-offset-2 hover:opacity-60 transition-opacity"
              >
                {l}
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* ── Mobile ── */}
      <div className="md:hidden flex flex-col pt-12 px-4 gap-12">

        {/* CTA */}
        <div className="flex flex-col gap-6">
          <p className="font-light italic text-white leading-[1.2] tracking-[-0.04em] text-2xl">
            Have a{" "}
            <span className="font-black not-italic">project</span>
            {" "}in mind?
          </p>
          <a
            href="mailto:hello@hstudio.com"
            className="self-start border border-white text-white text-sm font-medium tracking-[-0.04em] px-5 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
          >
            Let&apos;s talk
          </a>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3">
          {["FACEBOOK", "INSTAGRAM", "X.COM", "LINKEDIN"].map((s) => (
            <a
              key={s}
              href="#"
              className="text-white text-lg font-medium tracking-[-0.04em] hover:opacity-60 transition-opacity"
            >
              {s}
            </a>
          ))}
        </div>

        {/* HR */}
        <hr className="border-white/20" />

        {/* Legal */}
        <div className="flex gap-6 justify-center">
          {["LICENCES", "PRIVACY POLICY"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-white text-xs tracking-[-0.04em] underline underline-offset-2 hover:opacity-60 transition-opacity"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Wordmark block */}
        <div className="flex flex-col gap-2 pb-0">
          <span className="font-[family-name:var(--font-geist-mono)] text-white/50 text-[10px] uppercase tracking-widest">
            [ CODED BY CLAUDE ]
          </span>
          <h2
            className="font-semibold text-white uppercase leading-none whitespace-nowrap overflow-hidden"
            style={{ fontSize: "91.425px", letterSpacing: "-0.06em" }}
          >
            H.Studio
          </h2>
        </div>

      </div>
    </footer>
  );
}
