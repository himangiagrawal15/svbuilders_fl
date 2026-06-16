import { useRef, useEffect, useState } from "react";

const BROWN = "#473727";
const GOLD  = "#BE9234";

export default function VisionMission() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fadeUp = (delay: string): React.CSSProperties => ({
    opacity:   visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(28px)",
    transition: `opacity 0.9s ease ${delay}, transform 0.9s ease ${delay}`,
  });

  return (
    <section ref={sectionRef} id="vision" className="relative bg-[#FCFAF5] overflow-hidden">

      {/* Watermark */}
      <span className="pointer-events-none select-none absolute -bottom-6 right-0 font-heading text-[22vw] leading-none text-[#473727]/[0.04]">
        SV
      </span>

      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-20 py-20 sm:py-24 lg:py-28 relative z-10">

        {/* Label + Heading */}
        <div className="mb-14 sm:mb-16">
          <div style={fadeUp("0.1s")}>
            <p
              className="font-body mb-4"
              style={{
                fontSize: "0.62rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: GOLD,
                fontWeight: 600,
              }}
            >
              SV Developers
            </p>
          </div>
          <div style={fadeUp("0.2s")}>
            <h2
              style={{
                fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
                fontSize: "clamp(2.4rem, 6vw, 5.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.025em",
                color: BROWN,
                lineHeight: 1.0,
                margin: 0,
              }}
            >
              Our{" "}
              <span style={{ fontWeight: 400, fontStyle: "italic", color: GOLD }}>
                Purpose
              </span>
            </h2>
          </div>
        </div>

        {/* Mission + Vision side by side */}
        <div className="grid sm:grid-cols-2 gap-10 lg:gap-16">

          {/* Mission */}
          <div style={fadeUp("0.35s")}>
            <div
              className="h-px w-full mb-8"
              style={{ background: `${BROWN}18` }}
            />
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px flex-shrink-0" style={{ background: GOLD }} />
              <h3
                style={{
                  fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                  fontWeight: 700,
                  color: BROWN,
                  margin: 0,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Mission
              </h3>
            </div>
            <p
              className="font-libre"
              style={{
                color: `${BROWN}99`,
                fontSize: "clamp(0.93rem, 1.1vw, 1.02rem)",
                lineHeight: 1.9,
              }}
            >
              At SV Developers, our mission is to craft beautiful, thoughtfully designed homes that bring the dream of luxury living within reach of every family. We believe that elegance is not a privilege but a standard every family deserves. Through quality construction, inspired design and an unwavering commitment to our communities, we build more than homes; we build a life worth living.
            </p>
          </div>

          {/* Vision */}
          <div style={fadeUp("0.5s")}>
            <div
              className="h-px w-full mb-8"
              style={{ background: `${BROWN}18` }}
            />
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-6 h-px flex-shrink-0" style={{ background: GOLD }} />
              <h3
                style={{
                  fontFamily: "var(--font-heading, 'DM Serif Display', serif)",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.4rem)",
                  fontWeight: 700,
                  color: BROWN,
                  margin: 0,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                }}
              >
                Vision
              </h3>
            </div>
            <p
              className="font-libre"
              style={{
                color: `${BROWN}99`,
                fontSize: "clamp(0.93rem, 1.1vw, 1.02rem)",
                lineHeight: 1.9,
              }}
            >
              Our vision is a world where every family, regardless of background, has the opportunity to experience the comfort, beauty and pride that comes with calling a truly exceptional home their own. SV Developers strives to be the builder that bridges aspiration and reality, creating spaces where generations flourish and memories are made.
            </p>
          </div>

        </div>

        {/* Est. tag */}
        <div
          className="mt-14"
          style={{
            opacity: visible ? 1 : 0,
            transition: "opacity 1s ease 0.8s",
          }}
        >
          <p
            className="font-body"
            style={{
              fontSize: "0.58rem",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: `${BROWN}40`,
              fontWeight: 600,
            }}
          >
            Est. 2013 &nbsp;·&nbsp; Bengaluru
          </p>
        </div>

      </div>
    </section>
  );
}
