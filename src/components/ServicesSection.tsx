const serviceImages = [
  "https://www.figma.com/api/mcp/asset/5f45ea77-e42e-474e-b547-287ee152d3c4",
  "https://www.figma.com/api/mcp/asset/ba588b6d-e2f5-437d-837d-3847f104db76",
  "https://www.figma.com/api/mcp/asset/2f72aae0-1654-47dc-9c85-3edeea1a1b98",
  "https://www.figma.com/api/mcp/asset/0b40ac86-0c7e-4517-ac8a-4f61c19a6244",
];

const services = [
  { num: "[ 1 ]", title: "Brand Discovery", desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences." },
  { num: "[ 2 ]", title: "Web Design & Dev", desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences." },
  { num: "[ 3 ]", title: "Marketing", desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences." },
  { num: "[ 4 ]", title: "Photography", desc: "Placeholder description of this service. Explain the value you provide and the outcomes clients can expect. Keep it to two or three sentences." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-black px-4 py-12 md:px-8 md:py-20 flex flex-col gap-8 md:gap-12">

      {/* [ services ] label */}
      <p className="font-[family-name:var(--font-geist-mono)] text-sm text-white uppercase">
        [ services ]
      </p>

      {/* [4] ··· DELIVERABLES */}
      <div className="flex items-center justify-between text-white uppercase font-light whitespace-nowrap"
        style={{ fontSize: "clamp(32px, 6.67vw, 96px)", letterSpacing: "-0.08em" }}>
        <span>[4]</span>
        <span>Deliverables</span>
      </div>

      {/* Service rows */}
      <div className="flex flex-col gap-10 md:gap-12">
        {services.map((s, i) => (
          <div key={i} className="flex flex-col gap-2 md:gap-3">

            {/* Number + rule */}
            <div className="flex flex-col gap-2">
              <span className="font-[family-name:var(--font-geist-mono)] text-sm text-white uppercase">
                {s.num}
              </span>
              <hr className="border-t border-white/40 w-full" />
            </div>

            {/* Desktop: name left, desc+image right | Mobile: all stacked */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6">

              {/* Service name */}
              <p className="font-bold italic text-white text-[36px] leading-[1.1] tracking-[-0.04em] uppercase shrink-0">
                {s.title}
              </p>

              {/* Desc + image */}
              <div className="flex flex-col md:flex-row items-start gap-6">
                <p className="text-white text-sm leading-[1.3] tracking-[-0.04em] md:w-[393px]">
                  {s.desc}
                </p>
                <div className="size-[151px] shrink-0 overflow-hidden">
                  <img
                    src={serviceImages[i]}
                    alt={s.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
}
