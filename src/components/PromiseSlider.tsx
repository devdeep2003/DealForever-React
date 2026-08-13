import { useState, useEffect, useRef } from "react";
import { dealforeverPromises } from "../data/siteData";

export default function PromiseSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const pausedRef = useRef(false);
  const total = dealforeverPromises.length;

  const goTo = (next: number, dir: "left" | "right" = "left") => {
    if (animating) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimating(false);
    }, 350);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      if (!pausedRef.current) {
        goTo(current + 3 >= total ? 0 : current + 3, "left");
      }
    }, 2500);
    return () => clearInterval(timer);
  }, [current, total, animating]);

  const visible = [
    dealforeverPromises[current % total],
    dealforeverPromises[(current + 1) % total],
    dealforeverPromises[(current + 2) % total],
  ];

  return (
    <section className="section-padding bg-white">
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .slide-in-left  { animation: slideInLeft  0.35s ease both; }
        .slide-in-right { animation: slideInRight 0.35s ease both; }
      `}</style>

      <div className="container-custom">
        <div
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto overflow-hidden"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          {visible.map((item, i) => (
            <div
              key={`${current}-${i}`}
              className={`flex gap-4 bg-[#faf8f5] rounded-xl p-6 shadow-sm border border-[#e8e0d5] ${
                animating
                  ? direction === "left"
                    ? "slide-in-left"
                    : "slide-in-right"
                  : ""
              }`}
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="w-14 h-14 shrink-0 rounded-full bg-[#aa8453]/10 border border-[#aa8453]/20 flex items-center justify-center">
                <span
                  className="text-[#aa8453]"
                  style={{ width: 28, height: 28 }}
                  dangerouslySetInnerHTML={{ __html: item.icon }}
                />
              </div>
              <div>
                <h3 className="font-bold text-[#191717] text-sm mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-[#666] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: Math.ceil(total / 3) }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i * 3, i * 3 > current ? "left" : "right")}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === i * 3 ? "w-6 bg-[#aa8453]" : "w-2 bg-[#aa8453]/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}