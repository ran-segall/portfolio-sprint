"use client";

import { useRef, useEffect } from "react";

const articles = [
  {
    img: "https://www.figma.com/api/mcp/asset/a0663bfb-444b-4cc9-98a1-a77ddd20bb1b",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
  {
    img: "https://www.figma.com/api/mcp/asset/2508b66b-e9fd-43c7-907d-637277a8f8f8",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: true, // desktop: pushed down 120px
  },
  {
    img: "https://www.figma.com/api/mcp/asset/130d15c0-7f76-466f-b250-c00c6071e184",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    offset: false,
  },
];

function ArticleCard({ article, className = "" }: { article: typeof articles[0]; className?: string }) {
  return (
    <div className={`flex flex-col gap-4 shrink-0 w-[300px] md:w-[380px] ${className}`}>
      <div className="w-full h-[398px] md:h-[469px] overflow-hidden">
        <img src={article.img} alt="" className="w-full h-full object-cover" />
      </div>
      <p className="text-[#1f1f1f] text-sm leading-[1.3] tracking-[-0.04em]">{article.text}</p>
      <a href="#" className="flex items-center gap-2 border-b border-black pb-1 self-start">
        <span className="text-sm font-medium text-black tracking-[-0.04em]">Read more</span>
        <span className="rotate-[-45deg] inline-block text-sm">↑</span>
      </a>
    </div>
  );
}

// ── Desktop horizontal-scroll-on-scroll section ──────────────────────────────
function DesktopNews() {
  const outerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = outerRef.current;
    const track = trackRef.current;
    if (!outer || !track) return;

    const setHeight = () => {
      const maxTranslate = track.scrollWidth - window.innerWidth;
      outer.style.height = `calc(100vh + ${maxTranslate}px)`;
    };

    const update = () => {
      const outerTop = outer.getBoundingClientRect().top;
      const scrolled = -outerTop;
      const scrollable = outer.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const maxTranslate = track.scrollWidth - window.innerWidth;
      track.style.transform = `translateX(-${progress * maxTranslate}px)`;
    };

    setHeight();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", () => { setHeight(); update(); });

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", setHeight);
    };
  }, []);

  return (
    <div ref={outerRef} className="bg-[#f3f3f3]">
      {/* Sticky viewport-height frame */}
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        {/* Horizontal track — translated by scroll progress */}
        <div ref={trackRef} className="flex items-end gap-10 px-8 will-change-transform">

          {/* Rotated title column */}
          <div className="flex items-center justify-center shrink-0 w-[110px] h-[600px]">
            <div className="-rotate-90 whitespace-nowrap">
              <p
                className="font-light text-black uppercase leading-[0.86]"
                style={{ fontSize: "clamp(32px, 4.44vw, 64px)", letterSpacing: "-0.08em" }}
              >
                Keep up with my latest
              </p>
              <p
                className="font-light text-black uppercase leading-[0.86]"
                style={{ fontSize: "clamp(32px, 4.44vw, 64px)", letterSpacing: "-0.08em" }}
              >
                news &amp; achievements
              </p>
            </div>
          </div>

          {/* Article cards with dividers */}
          {articles.map((a, i) => (
            <div key={i} className="flex items-end gap-10">
              {i > 0 && <div className="w-px self-stretch bg-black/20 shrink-0" />}
              <ArticleCard article={a} className={a.offset ? "mb-0 -mt-[120px]" : ""} />
            </div>
          ))}

          {/* Right padding sentinel */}
          <div className="shrink-0 w-8" />
        </div>
      </div>
    </div>
  );
}

// ── Mobile swipe row ──────────────────────────────────────────────────────────
function MobileNews() {
  return (
    <div className="bg-[#f3f3f3] px-4 py-16 flex flex-col gap-8">
      <p
        className="font-light text-black uppercase leading-[0.86]"
        style={{ fontSize: "32px", letterSpacing: "-0.08em" }}
      >
        Keep up with my latest news &amp; achievements
      </p>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 scrollbar-hide">
        {articles.map((a, i) => (
          <div key={i} className="snap-start">
            <ArticleCard article={a} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function NewsSection() {
  return (
    <section id="news">
      <div className="hidden md:block">
        <DesktopNews />
      </div>
      <div className="md:hidden">
        <MobileNews />
      </div>
    </section>
  );
}
